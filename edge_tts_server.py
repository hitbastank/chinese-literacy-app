#!/usr/bin/env python3
"""
Azure Speech SDK + Edge TTS 语音服务器

特性：
- Azure Speech SDK 优先（更自然的音色和断句）
- edge-tts 自动回退（当 Azure 环境变量或依赖缺失时）
- 音频缓存与批量预加载
"""

import asyncio
import hashlib
import io
import os
import re
from html import escape
from pathlib import Path

import edge_tts
from aiohttp import ClientSession, web

try:
    import azure.cognitiveservices.speech as speechsdk
except Exception:
    speechsdk = None


AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY", "").strip()
AZURE_SPEECH_REGION = os.getenv("AZURE_SPEECH_REGION", "").strip()
AZURE_DEFAULT_STYLE = os.getenv("AZURE_DEFAULT_STYLE", "friendly").strip() or "friendly"
AZURE_DEFAULT_STYLE_DEGREE = float(os.getenv("AZURE_DEFAULT_STYLE_DEGREE", "1.1"))

# 默认语音：更自然的中文多语种女声
DEFAULT_VOICE = os.getenv("AZURE_DEFAULT_VOICE", "zh-CN-XiaoyouMultilingualNeural").strip() or "zh-CN-XiaoyouMultilingualNeural"

PORT = int(os.getenv("TTS_PORT", "8766"))

CACHE_DIR = Path(os.getenv("TTS_CACHE_DIR", ".tts_cache")).resolve()
CACHE_DIR.mkdir(parents=True, exist_ok=True)

audio_cache = {}


def get_cache_file_path(cache_key: str) -> Path:
    return CACHE_DIR / f"{cache_key}.mp3"


def load_audio_from_disk_cache(cache_key: str):
    path = get_cache_file_path(cache_key)
    if not path.exists():
        return None
    return path.read_bytes()


def save_audio_to_disk_cache(cache_key: str, audio_bytes: bytes):
    path = get_cache_file_path(cache_key)
    path.write_bytes(audio_bytes)


def azure_ready() -> bool:
    return bool(speechsdk and AZURE_SPEECH_KEY and AZURE_SPEECH_REGION)


def current_engine() -> str:
    return "azure-speech-sdk" if azure_ready() else "edge-tts"


def get_cache_key(text, voice, rate, style, style_degree):
    seed = f"{current_engine()}::{text}::{voice}::{rate}::{style}::{style_degree}"
    return hashlib.md5(seed.encode("utf-8")).hexdigest()


def normalize_rate(rate) -> str:
    """前端 rate 通常是 0.7/0.9 这种倍率，转为 SSML 百分比。"""
    if isinstance(rate, (int, float)) and rate != 0:
        rate_percent = int((float(rate) - 1.0) * 100)
        return f"{rate_percent:+d}%"

    if isinstance(rate, str):
        rate = rate.strip()
        if re.fullmatch(r"[+-]?\d+%", rate):
            return rate

    return "+0%"


def enhance_text_with_pauses(text: str) -> str:
    """增强中文断句停顿，让听感更自然。"""
    safe = escape((text or "").strip())
    if not safe:
        return ""

    safe = safe.replace("\n", '<break time="360ms"/>')
    safe = re.sub(r"([，、：；])", r'\1<break time="170ms"/>', safe)
    safe = re.sub(r"([。！？])", r'\1<break time="300ms"/>', safe)
    return safe


def build_ssml(text: str, voice: str, rate: str, style: str, style_degree: float) -> str:
    body = enhance_text_with_pauses(text)
    if not body:
        raise ValueError("No text provided")

    # 使用 mstts:express-as 增强语气表现，降低“机器人感”
    return f'''<speak version="1.0" xml:lang="zh-CN"
    xmlns="http://www.w3.org/2001/10/synthesis"
    xmlns:mstts="https://www.w3.org/2001/mstts">
  <voice name="{escape(voice)}">
    <mstts:express-as style="{escape(style)}" styledegree="{style_degree:.1f}">
      <prosody rate="{rate}">{body}</prosody>
    </mstts:express-as>
  </voice>
</speak>'''


def generate_audio_azure_sync(text: str, voice: str, rate: str, style: str, style_degree: float) -> bytes:
    speech_config = speechsdk.SpeechConfig(subscription=AZURE_SPEECH_KEY, region=AZURE_SPEECH_REGION)
    speech_config.set_speech_synthesis_output_format(
        speechsdk.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3
    )

    synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=None)
    ssml = build_ssml(text=text, voice=voice, rate=rate, style=style, style_degree=style_degree)

    result = synthesizer.speak_ssml_async(ssml).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        return bytes(result.audio_data)

    if result.reason == speechsdk.ResultReason.Canceled:
        cancellation = speechsdk.SpeechSynthesisCancellationDetails(result)
        raise RuntimeError(f"Azure synthesis canceled: {cancellation.reason} / {cancellation.error_details}")

    raise RuntimeError(f"Azure synthesis failed: {result.reason}")


async def generate_audio_edge(text: str, voice: str, rate: str) -> bytes:
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    audio_data = io.BytesIO()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            audio_data.write(chunk["data"])
    audio_data.seek(0)
    return audio_data.read()


async def generate_audio(text: str, voice: str, rate: str, style: str, style_degree: float) -> bytes:
    if azure_ready():
        return await asyncio.to_thread(generate_audio_azure_sync, text, voice, rate, style, style_degree)
    return await generate_audio_edge(text, voice, rate)


async def health_check(request):
    return web.json_response(
        {
            "status": "ok",
            "engine": current_engine(),
            "azure_ready": azure_ready(),
            "default_voice": DEFAULT_VOICE,
            "cache_size": len(audio_cache),
            "cache_dir": str(CACHE_DIR),
            "cache_files": len(list(CACHE_DIR.glob("*.mp3"))),
        }
    )


async def list_voices(request):
    """列出可用中文语音（Azure 优先）。"""
    try:
        if azure_ready():
            url = f"https://{AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/voices/list"
            async with ClientSession() as session:
                async with session.get(
                    url,
                    headers={"Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY},
                    timeout=10,
                ) as resp:
                    if resp.status != 200:
                        return web.json_response(
                            {
                                "error": "Failed to fetch Azure voices",
                                "status": resp.status,
                            },
                            status=502,
                        )
                    voices = await resp.json()
                    chinese_voices = [v for v in voices if v.get("Locale", "").startswith("zh-")]
                    return web.json_response(chinese_voices)

        voices = await edge_tts.list_voices()
        chinese_voices = [v for v in voices if v["Locale"].startswith("zh-")]
        return web.json_response(chinese_voices)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


async def tts_handler(request):
    global audio_cache

    try:
        data = await request.json()
        text = data.get("text", "")
        voice = data.get("voice", DEFAULT_VOICE)
        rate = normalize_rate(data.get("rate", 1.0))
        style = data.get("style", AZURE_DEFAULT_STYLE)
        style_degree = float(data.get("styleDegree", AZURE_DEFAULT_STYLE_DEGREE))

        if not text or not str(text).strip():
            return web.json_response({"error": "No text provided"}, status=400)

        cache_key = get_cache_key(text, voice, rate, style, style_degree)

        if cache_key in audio_cache:
            print(f"📦 内存缓存命中 ({current_engine()}): {str(text)[:15]}...")
            audio_bytes = audio_cache[cache_key]
        else:
            disk_audio = load_audio_from_disk_cache(cache_key)
            if disk_audio is not None:
                print(f"� 磁盘缓存命中 ({current_engine()}): {str(text)[:15]}...")
                audio_bytes = disk_audio
                audio_cache[cache_key] = audio_bytes
            else:
                print(f"�🔊 生成语音 ({current_engine()}): {str(text)[:15]}...")
                audio_bytes = await generate_audio(
                    text=text,
                    voice=voice,
                    rate=rate,
                    style=style,
                    style_degree=style_degree,
                )
                audio_cache[cache_key] = audio_bytes
                save_audio_to_disk_cache(cache_key, audio_bytes)

        return web.Response(body=audio_bytes, content_type="audio/mpeg")
    except Exception as e:
        print(f"TTS Error: {e}")
        return web.json_response({"error": str(e)}, status=500)


async def preload_handler(request):
    global audio_cache

    try:
        data = await request.json()
        texts = data.get("texts", [])
        voice = data.get("voice", DEFAULT_VOICE)
        rate = normalize_rate(data.get("rate", 1.0))
        style = data.get("style", AZURE_DEFAULT_STYLE)
        style_degree = float(data.get("styleDegree", AZURE_DEFAULT_STYLE_DEGREE))

        if not texts:
            return web.json_response({"error": "No texts provided"}, status=400)

        results = []
        for text in texts:
            cache_key = get_cache_key(text, voice, rate, style, style_degree)

            if cache_key in audio_cache:
                results.append({"text": str(text)[:20], "status": "cached_memory"})
                continue

            disk_audio = load_audio_from_disk_cache(cache_key)
            if disk_audio is not None:
                audio_cache[cache_key] = disk_audio
                results.append({"text": str(text)[:20], "status": "cached_disk"})
                continue

            try:
                print(f"🔄 预加载 ({current_engine()}): {str(text)[:15]}...")
                audio_bytes = await generate_audio(
                    text=text,
                    voice=voice,
                    rate=rate,
                    style=style,
                    style_degree=style_degree,
                )
                audio_cache[cache_key] = audio_bytes
                save_audio_to_disk_cache(cache_key, audio_bytes)
                results.append({"text": str(text)[:20], "status": "generated"})
            except Exception as e:
                results.append({"text": str(text)[:20], "status": "failed", "error": str(e)})

        return web.json_response({"success": True, "results": results, "cache_size": len(audio_cache)})
    except Exception as e:
        print(f"Preload Error: {e}")
        return web.json_response({"error": str(e)}, status=500)


async def options_handler(request):
    return web.Response(
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    )


def create_app():
    app = web.Application()

    @web.middleware
    async def cors_middleware(request, handler):
        response = await handler(request)
        response.headers["Access-Control-Allow-Origin"] = "*"
        return response

    app.middlewares.append(cors_middleware)

    app.router.add_get("/health", health_check)
    app.router.add_get("/voices", list_voices)
    app.router.add_post("/tts", tts_handler)
    app.router.add_post("/preload", preload_handler)
    app.router.add_options("/tts", options_handler)
    app.router.add_options("/preload", options_handler)

    return app


if __name__ == "__main__":
    print(
        f"""
╔══════════════════════════════════════════════════════════════╗
║        Azure Speech SDK + Edge TTS 语音服务器               ║
╠══════════════════════════════════════════════════════════════╣
║  服务地址: http://localhost:{PORT}                             ║
║  当前引擎: {current_engine()}                                      ║
║  Azure就绪: {'是' if azure_ready() else '否（将回退edge-tts）'}                 ║
║  默认语音: {DEFAULT_VOICE}                           ║
║                                                              ║
║  接口:                                                       ║
║    POST /tts      - 生成语音                                 ║
║    POST /preload  - 批量预加载                               ║
║    GET  /voices   - 可用语音                                 ║
║    GET  /health   - 健康检查                                 ║
║                                                              ║
║  缓存目录: {str(CACHE_DIR)}                        ║
║  依赖环境变量:                                               ║
║    AZURE_SPEECH_KEY / AZURE_SPEECH_REGION                   ║
╚══════════════════════════════════════════════════════════════╝
        """
    )

    app = create_app()
    web.run_app(app, host="0.0.0.0", port=PORT)
