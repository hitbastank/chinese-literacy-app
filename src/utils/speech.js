/**
 * 语音合成工具
 * 支持 Web Speech API 和 ChatTTS 本地服务
 */

// ChatTTS 服务器配置
const CHATTTS_SERVER = 'http://localhost:8765';
let useChatTTS = false; // 默认使用 Web Speech API

/**
 * 检查 ChatTTS 服务是否可用
 */
export const checkChatTTSAvailable = async () => {
    try {
        const response = await fetch(`${CHATTTS_SERVER}/health`, {
            method: 'GET',
            timeout: 2000
        });
        if (response.ok) {
            const data = await response.json();
            return data.status === 'ok' && data.model_loaded;
        }
        return false;
    } catch (error) {
        return false;
    }
};

/**
 * 切换到 ChatTTS 模式
 */
export const enableChatTTS = async () => {
    const available = await checkChatTTSAvailable();
    if (available) {
        useChatTTS = true;
        console.log('✅ 已切换到 ChatTTS 语音');
        return true;
    } else {
        console.log('⚠️ ChatTTS 服务不可用，保持使用 Web Speech API');
        return false;
    }
};

/**
 * 切换回 Web Speech API
 */
export const disableChatTTS = () => {
    useChatTTS = false;
    console.log('已切换回 Web Speech API');
};

/**
 * 获取当前使用的 TTS 引擎
 */
export const getCurrentTTSEngine = () => {
    return useChatTTS ? 'ChatTTS' : 'Web Speech API';
};

// 检查浏览器是否支持语音合成
export const isSpeechSupported = () => {
    return 'speechSynthesis' in window;
};

// 获取中文语音
const getChineseVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    // 优先选择中文普通话语音
    const zhVoice = voices.find(voice =>
        voice.lang.includes('zh-CN') ||
        voice.lang.includes('zh_CN') ||
        voice.lang.includes('cmn')
    );
    return zhVoice || voices[0];
};

/**
 * 使用 ChatTTS 朗读文本
 */
const speakWithChatTTS = async (text, options = {}) => {
    try {
        const response = await fetch(`${CHATTTS_SERVER}/tts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                rate: options.rate || 0.8
            })
        });

        if (!response.ok) {
            throw new Error('ChatTTS 请求失败');
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        return new Promise((resolve, reject) => {
            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                resolve();
            };
            audio.onerror = (e) => {
                URL.revokeObjectURL(audioUrl);
                reject(e);
            };
            audio.play();
        });
    } catch (error) {
        console.error('ChatTTS 播放失败，回退到 Web Speech API:', error);
        // 回退到 Web Speech API
        return speakWithWebSpeech(text, options);
    }
};

/**
 * 使用 Web Speech API 朗读文本
 */
const speakWithWebSpeech = (text, options = {}) => {
    return new Promise((resolve, reject) => {
        if (!isSpeechSupported()) {
            reject(new Error('浏览器不支持语音合成'));
            return;
        }

        // 取消之前的朗读
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // 设置语音参数
        utterance.lang = options.lang || 'zh-CN';
        utterance.rate = options.rate || 0.8; // 语速稍慢，适合儿童
        utterance.pitch = options.pitch || 1.1; // 音调稍高
        utterance.volume = options.volume || 1;

        // 尝试获取中文语音
        const voice = getChineseVoice();
        if (voice) {
            utterance.voice = voice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event);

        window.speechSynthesis.speak(utterance);
    });
};

/**
 * 朗读文本 - 自动选择 TTS 引擎
 */
export const speak = async (text, options = {}) => {
    if (useChatTTS) {
        return speakWithChatTTS(text, options);
    } else {
        return speakWithWebSpeech(text, options);
    }
};

// 朗读单个汉字（带拼音）
export const speakCharacter = async (char, pinyin) => {
    try {
        // 先读汉字
        await speak(char, { rate: 0.6 });
        // 短暂停顿后读拼音
        await new Promise(resolve => setTimeout(resolve, 300));
        await speak(pinyin, { rate: 0.7 });
    } catch (error) {
        console.error('语音朗读失败:', error);
    }
};

// 朗读词语
export const speakWord = async (word) => {
    try {
        await speak(word, { rate: 0.7 });
    } catch (error) {
        console.error('语音朗读失败:', error);
    }
};

// 朗读句子
export const speakSentence = async (sentence) => {
    try {
        await speak(sentence, { rate: 0.8 });
    } catch (error) {
        console.error('语音朗读失败:', error);
    }
};

// 预加载语音（在页面加载时调用）
export const preloadVoices = async () => {
    // 尝试启用 ChatTTS
    const chatTTSAvailable = await checkChatTTSAvailable();
    if (chatTTSAvailable) {
        useChatTTS = true;
        console.log('🎤 ChatTTS 服务可用，已自动启用');
    } else {
        console.log('📢 使用 Web Speech API');
    }

    // 预加载 Web Speech API 语音列表
    if (isSpeechSupported()) {
        // 某些浏览器需要先获取一次语音列表
        window.speechSynthesis.getVoices();

        // 监听语音列表变化
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }
    }
};

export default {
    speak,
    speakCharacter,
    speakWord,
    speakSentence,
    isSpeechSupported,
    preloadVoices,
    enableChatTTS,
    disableChatTTS,
    getCurrentTTSEngine,
    checkChatTTSAvailable
};
