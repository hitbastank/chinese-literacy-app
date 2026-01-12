#!/usr/bin/env python3
"""
Edge TTS 语音服务器
使用微软 Edge 浏览器的 TTS 引擎，提供自然的中文语音

可用的中文语音：
- zh-CN-XiaoxiaoNeural: 晓晓 (女声，温柔亲切)
- zh-CN-YunxiNeural: 云希 (男声，年轻活力)  
- zh-CN-XiaoyiNeural: 晓伊 (女声，儿童)
- zh-CN-YunjianNeural: 云健 (男声，成熟稳重)
- zh-CN-YunyangNeural: 云扬 (男声，新闻播报)
- zh-CN-XiaochenNeural: 晓辰 (女声，活泼)
- zh-CN-XiaohanNeural: 晓涵 (女声，知性)
- zh-CN-XiaomengNeural: 晓梦 (女声，甜美)
- zh-CN-XiaomoNeural: 晓墨 (女声，文艺)
- zh-CN-XiaoshuangNeural: 晓双 (女声/儿童，可爱)
- zh-CN-XiaoruiNeural: 晓睿 (女声，专业)
- zh-CN-XiaoxuanNeural: 晓萱 (女声，温暖)
- zh-CN-XiaoyanNeural: 晓颜 (女声，阳光)
- zh-CN-XiaozhenNeural: 晓甄 (女声，甜美)
"""

import asyncio
import edge_tts
from aiohttp import web
import io
import json

# 默认语音 - 晓伊（卡通女声，活泼可爱，适合儿童）
DEFAULT_VOICE = "zh-CN-XiaoyiNeural"

# 服务端口
PORT = 8766

async def health_check(request):
    """健康检查接口"""
    return web.json_response({
        "status": "ok",
        "engine": "edge-tts",
        "default_voice": DEFAULT_VOICE
    })

async def list_voices(request):
    """列出所有可用的中文语音"""
    voices = await edge_tts.list_voices()
    chinese_voices = [v for v in voices if v["Locale"].startswith("zh-")]
    return web.json_response(chinese_voices)

async def tts_handler(request):
    """TTS 接口"""
    try:
        data = await request.json()
        text = data.get("text", "")
        voice = data.get("voice", DEFAULT_VOICE)
        rate = data.get("rate", 0)  # -50% to +50%
        
        if not text:
            return web.json_response({"error": "No text provided"}, status=400)
        
        # 转换 rate 参数（前端传 0.5-1.5，转换为 -50% to +50%）
        if isinstance(rate, float) and rate != 0:
            # 0.5 -> -50%, 1.0 -> 0%, 1.5 -> +50%
            rate_percent = int((rate - 1.0) * 100)
            rate_str = f"{rate_percent:+d}%"
        else:
            rate_str = "+0%"
        
        # 生成语音
        communicate = edge_tts.Communicate(text, voice, rate=rate_str)
        
        # 收集音频数据
        audio_data = io.BytesIO()
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                audio_data.write(chunk["data"])
        
        audio_data.seek(0)
        
        return web.Response(
            body=audio_data.read(),
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
    
    # 添加 CORS 中间件
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
    app.router.add_options("/tts", options_handler)
    
    return app

if __name__ == "__main__":
    print(f"""
╔══════════════════════════════════════════════════════════════╗
║           Edge TTS 语音服务器 (微软语音)                      ║
╠══════════════════════════════════════════════════════════════╣
║  服务地址: http://localhost:{PORT}                             ║
║  默认语音: {DEFAULT_VOICE} (晓晓)                    ║
║                                                              ║
║  接口:                                                       ║
║    GET  /health  - 健康检查                                  ║
║    GET  /voices  - 列出可用语音                              ║
║    POST /tts     - 生成语音                                  ║
║                                                              ║
║  按 Ctrl+C 停止服务                                          ║
╚══════════════════════════════════════════════════════════════╝
    """)
    
    app = create_app()
    web.run_app(app, host="0.0.0.0", port=PORT)
