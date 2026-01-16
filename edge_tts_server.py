#!/usr/bin/env python3
"""
Edge TTS 语音服务器 (优化版)
使用微软 Edge 浏览器的 TTS 引擎，支持预加载和缓存

特性：
- 音频缓存 - 相同文本秒回
- 批量预加载 - 提前生成语音减少延迟

可用的中文语音：
- zh-CN-XiaoyiNeural: 晓伊 (卡通女声，活泼可爱)
- zh-CN-XiaoxiaoNeural: 晓晓 (女声，温柔亲切)
- zh-CN-YunxiNeural: 云希 (男声，年轻活力)
"""

import asyncio
import edge_tts
from aiohttp import web
import io
import hashlib

# 默认语音 - 晓伊（卡通女声，活泼可爱，适合儿童）
DEFAULT_VOICE = "zh-CN-XiaoyiNeural"

# 服务端口
PORT = 8766

# 音频缓存
audio_cache = {}

def get_cache_key(text, voice, rate):
    """生成缓存键"""
    return hashlib.md5(f"{text}:{voice}:{rate}".encode()).hexdigest()

async def generate_audio(text, voice, rate_str):
    """生成音频"""
    communicate = edge_tts.Communicate(text, voice, rate=rate_str)
    audio_data = io.BytesIO()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            audio_data.write(chunk["data"])
    audio_data.seek(0)
    return audio_data.read()

async def health_check(request):
    """健康检查接口"""
    return web.json_response({
        "status": "ok",
        "engine": "edge-tts",
        "default_voice": DEFAULT_VOICE,
        "cache_size": len(audio_cache)
    })

async def list_voices(request):
    """列出所有可用的中文语音"""
    voices = await edge_tts.list_voices()
    chinese_voices = [v for v in voices if v["Locale"].startswith("zh-")]
    return web.json_response(chinese_voices)

async def tts_handler(request):
    """TTS 接口"""
    global audio_cache
    try:
        data = await request.json()
        text = data.get("text", "")
        voice = data.get("voice", DEFAULT_VOICE)
        rate = data.get("rate", 0)
        
        if not text:
            return web.json_response({"error": "No text provided"}, status=400)
        
        # 转换 rate 参数
        if isinstance(rate, float) and rate != 0:
            rate_percent = int((rate - 1.0) * 100)
            rate_str = f"{rate_percent:+d}%"
        else:
            rate_str = "+0%"
        
        cache_key = get_cache_key(text, voice, rate_str)
        
        # 检查缓存
        if cache_key in audio_cache:
            print(f"📦 缓存命中: {text[:15]}...")
            audio_bytes = audio_cache[cache_key]
        else:
            print(f"🔊 生成语音: {text[:15]}...")
            audio_bytes = await generate_audio(text, voice, rate_str)
            audio_cache[cache_key] = audio_bytes
        
        return web.Response(
            body=audio_bytes,
            content_type="audio/mpeg",
            headers={
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        )
    except Exception as e:
        print(f"TTS Error: {e}")
        return web.json_response({"error": str(e)}, status=500)

async def preload_handler(request):
    """批量预加载接口"""
    global audio_cache
    try:
        data = await request.json()
        texts = data.get("texts", [])
        voice = data.get("voice", DEFAULT_VOICE)
        rate = data.get("rate", 0)
        
        if not texts:
            return web.json_response({"error": "No texts provided"}, status=400)
        
        if isinstance(rate, float) and rate != 0:
            rate_percent = int((rate - 1.0) * 100)
            rate_str = f"{rate_percent:+d}%"
        else:
            rate_str = "+0%"
        
        results = []
        for text in texts:
            cache_key = get_cache_key(text, voice, rate_str)
            
            if cache_key in audio_cache:
                results.append({"text": text[:20], "status": "cached"})
            else:
                print(f"🔄 预加载: {text[:15]}...")
                try:
                    audio_bytes = await generate_audio(text, voice, rate_str)
                    audio_cache[cache_key] = audio_bytes
                    results.append({"text": text[:20], "status": "generated"})
                except Exception as e:
                    results.append({"text": text[:20], "status": "failed", "error": str(e)})
        
        return web.json_response({
            "success": True,
            "results": results,
            "cache_size": len(audio_cache)
        })
    except Exception as e:
        print(f"Preload Error: {e}")
        return web.json_response({"error": str(e)}, status=500)

async def options_handler(request):
    """处理 CORS 预检请求"""
    return web.Response(
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
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
    
    # 路由
    app.router.add_get("/health", health_check)
    app.router.add_get("/voices", list_voices)
    app.router.add_post("/tts", tts_handler)
    app.router.add_post("/preload", preload_handler)
    app.router.add_options("/tts", options_handler)
    app.router.add_options("/preload", options_handler)
    
    return app

if __name__ == "__main__":
    print(f"""
╔══════════════════════════════════════════════════════════════╗
║           Edge TTS 语音服务器 (优化版)                        ║
╠══════════════════════════════════════════════════════════════╣
║  服务地址: http://localhost:{PORT}                             ║
║  默认语音: {DEFAULT_VOICE} (晓伊)                   ║
║                                                              ║
║  特性:                                                       ║
║    ✓ 音频缓存 - 重复请求秒回                                 ║
║    ✓ 批量预加载 - 提前生成语音                               ║
║                                                              ║
║  接口:                                                       ║
║    POST /tts      - 生成语音                                 ║
║    POST /preload  - 批量预加载                               ║
║    GET  /health   - 健康检查                                 ║
║                                                              ║
║  按 Ctrl+C 停止服务                                          ║
╚══════════════════════════════════════════════════════════════╝
    """)
    
    app = create_app()
    web.run_app(app, host="0.0.0.0", port=PORT)
