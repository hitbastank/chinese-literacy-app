/**
 * 语音合成工具
 * 支持 Edge TTS (微软语音)、ChatTTS 和 Web Speech API
 * 
 * 优先级：Edge TTS > ChatTTS > Web Speech API
 */

// 服务器配置
const EDGE_TTS_SERVER = 'http://localhost:8766';
const CHATTTS_SERVER = 'http://localhost:8765';

// TTS 引擎类型
const TTS_ENGINE = {
    EDGE_TTS: 'EdgeTTS',
    CHAT_TTS: 'ChatTTS',
    WEB_SPEECH: 'WebSpeech'
};

// 当前使用的引擎
let currentEngine = TTS_ENGINE.WEB_SPEECH;

// Edge TTS 可用的中文语音（已验证可用）
export const EDGE_VOICES = {
    'xiaoxiao': { id: 'zh-CN-XiaoxiaoNeural', name: '晓晓', desc: '女声，温柔亲切' },
    'xiaoyi': { id: 'zh-CN-XiaoyiNeural', name: '晓伊', desc: '卡通女声，活泼可爱' },
    'yunxi': { id: 'zh-CN-YunxiNeural', name: '云希', desc: '男声，年轻活力' },
    'yunxia': { id: 'zh-CN-YunxiaNeural', name: '云夏', desc: '卡通男声，可爱' },
    'yunjian': { id: 'zh-CN-YunjianNeural', name: '云健', desc: '男声，热情' },
    'yunyang': { id: 'zh-CN-YunyangNeural', name: '云扬', desc: '男声，新闻播报' },
};

// 当前选择的语音 - 默认使用卡通女声（活泼可爱）
let currentVoice = 'xiaoyi';

/**
 * 检查 Edge TTS 服务是否可用
 */
export const checkEdgeTTSAvailable = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(`${EDGE_TTS_SERVER}/health`, {
            method: 'GET',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            return data.status === 'ok';
        }
        return false;
    } catch (error) {
        return false;
    }
};

/**
 * 检查 ChatTTS 服务是否可用
 */
export const checkChatTTSAvailable = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(`${CHATTTS_SERVER}/health`, {
            method: 'GET',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

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
 * 获取当前使用的 TTS 引擎
 */
export const getCurrentTTSEngine = () => currentEngine;

/**
 * 设置语音
 */
export const setVoice = (voiceKey) => {
    if (EDGE_VOICES[voiceKey]) {
        currentVoice = voiceKey;
        console.log(`🎤 语音已切换到: ${EDGE_VOICES[voiceKey].name}`);
    }
};

/**
 * 获取当前语音
 */
export const getCurrentVoice = () => EDGE_VOICES[currentVoice];

// 检查浏览器是否支持语音合成
export const isSpeechSupported = () => {
    return 'speechSynthesis' in window;
};

// 获取中文语音
const getChineseVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(voice =>
        voice.lang.includes('zh-CN') ||
        voice.lang.includes('zh_CN') ||
        voice.lang.includes('cmn')
    );
    return zhVoice || voices[0];
};

/**
 * 使用 Edge TTS 朗读文本
 */
const speakWithEdgeTTS = async (text, options = {}) => {
    try {
        const voice = EDGE_VOICES[currentVoice]?.id || EDGE_VOICES.xiaoxiao.id;

        const response = await fetch(`${EDGE_TTS_SERVER}/tts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                voice: voice,
                rate: options.rate || 0.9
            })
        });

        if (!response.ok) {
            throw new Error('Edge TTS 请求失败');
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
        console.error('Edge TTS 播放失败，尝试回退:', error);
        // 尝试回退到 ChatTTS
        if (await checkChatTTSAvailable()) {
            return speakWithChatTTS(text, options);
        }
        // 最后回退到 Web Speech API
        return speakWithWebSpeech(text, options);
    }
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
        utterance.rate = options.rate || 0.8;
        utterance.pitch = options.pitch || 1.1;
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
 * 朗读文本 - 根据当前引擎选择
 */
export const speak = async (text, options = {}) => {
    switch (currentEngine) {
        case TTS_ENGINE.EDGE_TTS:
            return speakWithEdgeTTS(text, options);
        case TTS_ENGINE.CHAT_TTS:
            return speakWithChatTTS(text, options);
        default:
            return speakWithWebSpeech(text, options);
    }
};

// 朗读单个汉字（带拼音）
export const speakCharacter = async (char, pinyin) => {
    try {
        await speak(char, { rate: 0.6 });
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

/**
 * 预加载语音 - 自动检测可用的 TTS 引擎
 */
export const preloadVoices = async () => {
    // 优先检查 Edge TTS
    const edgeTTSAvailable = await checkEdgeTTSAvailable();
    if (edgeTTSAvailable) {
        currentEngine = TTS_ENGINE.EDGE_TTS;
        console.log('🎤 Edge TTS 服务可用，已自动启用（微软语音：晓晓）');
        return;
    }

    // 其次检查 ChatTTS
    const chatTTSAvailable = await checkChatTTSAvailable();
    if (chatTTSAvailable) {
        currentEngine = TTS_ENGINE.CHAT_TTS;
        console.log('🎤 ChatTTS 服务可用，已自动启用');
        return;
    }

    // 最后使用 Web Speech API
    currentEngine = TTS_ENGINE.WEB_SPEECH;
    console.log('📢 使用 Web Speech API（浏览器内置语音）');

    // 预加载 Web Speech API 语音列表
    if (isSpeechSupported()) {
        window.speechSynthesis.getVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }
    }
};

// 手动切换引擎
export const enableEdgeTTS = async () => {
    const available = await checkEdgeTTSAvailable();
    if (available) {
        currentEngine = TTS_ENGINE.EDGE_TTS;
        console.log('✅ 已切换到 Edge TTS（微软语音）');
        return true;
    }
    console.log('⚠️ Edge TTS 服务不可用');
    return false;
};

export const enableChatTTS = async () => {
    const available = await checkChatTTSAvailable();
    if (available) {
        currentEngine = TTS_ENGINE.CHAT_TTS;
        console.log('✅ 已切换到 ChatTTS');
        return true;
    }
    console.log('⚠️ ChatTTS 服务不可用');
    return false;
};

export const disableTTS = () => {
    currentEngine = TTS_ENGINE.WEB_SPEECH;
    console.log('已切换回 Web Speech API');
};

export default {
    speak,
    speakCharacter,
    speakWord,
    speakSentence,
    isSpeechSupported,
    preloadVoices,
    enableEdgeTTS,
    enableChatTTS,
    disableTTS,
    getCurrentTTSEngine,
    checkEdgeTTSAvailable,
    checkChatTTSAvailable,
    setVoice,
    getCurrentVoice,
    EDGE_VOICES
};
