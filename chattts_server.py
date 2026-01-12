"""
ChatTTS 本地语音服务器
用于中文识字应用的语音合成

使用方法:
1. 安装依赖: pip install chattts-fork flask flask-cors
2. 运行服务: python chattts_server.py
3. 服务将在 http://localhost:8765 启动

API 端点:
POST /tts
Body: { "text": "要朗读的文字", "rate": 0.8 }
返回: audio/wav 音频流
"""

import os
import io
import torch
import torchaudio
from flask import Flask, request, Response, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 全局 ChatTTS 实例
chat = None

def init_chattts():
    """初始化 ChatTTS 模型"""
    global chat
    try:
        import ChatTTS
        chat = ChatTTS.Chat()
        # 加载模型 (首次运行会自动下载)
        chat.load_models(compile=False)  # 设置为 True 可加速但首次编译较慢
        print("✅ ChatTTS 模型加载成功!")
        return True
    except Exception as e:
        print(f"❌ ChatTTS 加载失败: {e}")
        print("请确保已安装: pip install chattts-fork")
        return False

@app.route('/health', methods=['GET'])
def health():
    """健康检查端点"""
    return jsonify({
        "status": "ok",
        "model_loaded": chat is not None
    })

@app.route('/tts', methods=['POST'])
def text_to_speech():
    """文本转语音端点"""
    global chat
    
    if chat is None:
        return jsonify({"error": "模型未加载"}), 500
    
    try:
        data = request.get_json()
        text = data.get('text', '')
        rate = data.get('rate', 0.8)  # 语速参数 (目前 ChatTTS 不直接支持，但可以用于后处理)
        
        if not text:
            return jsonify({"error": "缺少文本参数"}), 400
        
        # 生成语音
        # ChatTTS 参数配置 - 使用更自然的儿童友好设置
        params_infer_code = {
            'spk_emb': None,  # 使用随机说话人，或可以固定
            'temperature': 0.3,  # 更低的温度使输出更稳定
            'top_P': 0.7,
            'top_K': 20,
        }
        
        params_refine_text = {
            'prompt': '[oral_2][laugh_0][break_4]'  # 控制口语化程度、笑声、停顿
        }
        
        wavs = chat.infer(
            [text],
            params_infer_code=params_infer_code,
            params_refine_text=params_refine_text,
            use_decoder=True
        )
        
        # 转换为 WAV 格式
        audio_data = torch.from_numpy(wavs[0])
        if audio_data.dim() == 1:
            audio_data = audio_data.unsqueeze(0)
        
        # 保存到内存缓冲区
        buffer = io.BytesIO()
        torchaudio.save(buffer, audio_data, 24000, format='wav')
        buffer.seek(0)
        
        return Response(
            buffer.getvalue(),
            mimetype='audio/wav',
            headers={
                'Content-Disposition': 'inline; filename="speech.wav"'
            }
        )
        
    except Exception as e:
        print(f"TTS 错误: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/tts/stream', methods=['POST'])
def text_to_speech_stream():
    """流式文本转语音端点 (适用于较长文本)"""
    # TODO: 实现流式输出
    return text_to_speech()

if __name__ == '__main__':
    print("=" * 50)
    print("🎤 ChatTTS 语音服务器")
    print("=" * 50)
    
    if init_chattts():
        print(f"\n🚀 服务器启动在 http://localhost:8765")
        print("📝 API 端点: POST /tts")
        print("   请求体: {\"text\": \"要朗读的文字\"}")
        print("\n按 Ctrl+C 停止服务器")
        app.run(host='0.0.0.0', port=8765, debug=False)
    else:
        print("\n⚠️  无法启动服务器，请检查 ChatTTS 安装")
        print("安装命令: pip install chattts-fork torch torchaudio flask flask-cors")
