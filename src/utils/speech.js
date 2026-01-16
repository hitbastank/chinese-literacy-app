/**
 * 语音合成工具
 * 支持 ChatTTS、Edge TTS、MiniMax TTS 和 Web Speech API
 * 
 * 优先级：ChatTTS > Edge TTS > MiniMax > Web Speech API
 */

// 服务器配置
const MINIMAX_TTS_SERVER = 'http://localhost:8767';
const EDGE_TTS_SERVER = 'http://localhost:8766';
const CHATTTS_SERVER = 'http://localhost:8765';

// TTS 引擎类型
const TTS_ENGINE = {
    MINIMAX: 'MiniMax',
    EDGE_TTS: 'EdgeTTS',
    CHAT_TTS: 'ChatTTS',
    WEB_SPEECH: 'WebSpeech'
};

// 当前使用的引擎
let currentEngine = TTS_ENGINE.WEB_SPEECH;

// 浏览器端音频缓存 - 存储已下载的音频 Blob
const browserAudioCache = new Map();

/**
 * 检查 MiniMax TTS 服务是否可用
 */
export const checkMiniMaxAvailable = async () => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(`${MINIMAX_TTS_SERVER}/health`, {
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
 * 使用 MiniMax TTS 朗读文本
 */
const speakWithMiniMax = async (text, options = {}) => {
    try {
        const response = await fetch(`${MINIMAX_TTS_SERVER}/tts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                rate: options.rate || 1.0
            })
        });

        if (!response.ok) {
            throw new Error('MiniMax TTS 请求失败');
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
        console.error('MiniMax TTS 播放失败，尝试回退:', error);
        // 尝试回退到 Edge TTS
        if (await checkEdgeTTSAvailable()) {
            return speakWithEdgeTTS(text, options);
        }
        // 最后回退到 Web Speech API
        return speakWithWebSpeech(text, options);
    }
};

/**
 * 获取缓存键
 */
const getCacheKey = (text, rate) => `${text}:${rate}`;

/**
 * 从服务器获取音频 Blob
 */
const fetchAudioBlob = async (text, rate = 0.9) => {
    const response = await fetch(`${EDGE_TTS_SERVER}/tts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            voice: 'zh-CN-XiaoyiNeural',
            rate: rate
        })
    });

    if (!response.ok) {
        throw new Error('Edge TTS 请求失败');
    }

    return await response.blob();
};

/**
 * 预下载音频到浏览器缓存（不播放）
 */
export const prefetchAudio = async (text, rate = 0.9) => {
    const cacheKey = getCacheKey(text, rate);

    if (browserAudioCache.has(cacheKey)) {
        return; // 已缓存
    }

    try {
        const audioBlob = await fetchAudioBlob(text, rate);
        browserAudioCache.set(cacheKey, audioBlob);
        console.log(`📥 已缓存: ${text.substring(0, 10)}...`);
    } catch (error) {
        console.warn(`预下载失败: ${text.substring(0, 10)}...`, error);
    }
};

/**
 * 使用 Edge TTS 朗读文本（优先使用缓存）
 */
const speakWithEdgeTTS = async (text, options = {}) => {
    const rate = options.rate || 0.9;
    const cacheKey = getCacheKey(text, rate);

    try {
        let audioBlob;

        // 检查浏览器缓存
        if (browserAudioCache.has(cacheKey)) {
            audioBlob = browserAudioCache.get(cacheKey);
            console.log(`⚡ 从缓存播放: ${text.substring(0, 10)}...`);
        } else {
            // 未缓存，需要下载
            audioBlob = await fetchAudioBlob(text, rate);
            browserAudioCache.set(cacheKey, audioBlob);
        }

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
        console.error('Edge TTS 播放失败，回退到 Web Speech API:', error);
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
        case TTS_ENGINE.MINIMAX:
            return speakWithMiniMax(text, options);
        case TTS_ENGINE.EDGE_TTS:
            return speakWithEdgeTTS(text, options);
        case TTS_ENGINE.CHAT_TTS:
            return speakWithChatTTS(text, options);
        default:
            return speakWithWebSpeech(text, options);
    }
};

/**
 * 预加载汉字的所有音频到浏览器缓存
 * @param {Object} character - 汉字对象，包含 char, meaning, words, story, minecraftSentence
 */
export const preloadCharacterAudio = async (character) => {
    // 只有 Edge TTS 需要预加载
    if (currentEngine !== TTS_ENGINE.EDGE_TTS) {
        return;
    }

    console.log(`🔄 开始预加载: ${character.char}`);

    // 收集所有需要预加载的文本和对应的 rate
    const items = [];

    if (character.char) items.push({ text: character.char, rate: 0.7 });
    if (character.meaning) items.push({ text: character.meaning, rate: 0.9 });
    if (character.words && character.words[0]) items.push({ text: character.words[0], rate: 0.85 });
    if (character.story) items.push({ text: character.story, rate: 1.0 });
    if (character.minecraftSentence) items.push({ text: character.minecraftSentence, rate: 0.95 });

    if (items.length === 0) return;

    // 并行下载所有音频到浏览器缓存
    await Promise.all(items.map(item => prefetchAudio(item.text, item.rate)));

    console.log(`✅ 预加载完成: ${character.char}，共 ${items.length} 条音频`);
};

/**
 * 批量预加载多个汉字的音频到浏览器缓存
 * @param {Array} characters - 汉字对象数组
 */
export const preloadMultipleCharacters = async (characters) => {
    // 只有 Edge TTS 需要预加载
    if (currentEngine !== TTS_ENGINE.EDGE_TTS) {
        return;
    }

    console.log(`🔄 批量预加载: ${characters.length} 个汉字`);

    // 收集所有需要预加载的项目
    const items = [];

    for (const char of characters) {
        if (char.char) items.push({ text: char.char, rate: 0.7 });
        if (char.meaning) items.push({ text: char.meaning, rate: 0.9 });
        if (char.words && char.words[0]) items.push({ text: char.words[0], rate: 0.85 });
        if (char.story) items.push({ text: char.story, rate: 1.0 });
        if (char.minecraftSentence) items.push({ text: char.minecraftSentence, rate: 0.95 });
    }

    if (items.length === 0) return;

    // 并行下载所有音频到浏览器缓存
    await Promise.all(items.map(item => prefetchAudio(item.text, item.rate)));

    console.log(`✅ 批量预加载完成，共 ${items.length} 条音频`);
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
    // 优先检查 Edge TTS（微软语音，稳定）
    const edgeTTSAvailable = await checkEdgeTTSAvailable();
    if (edgeTTSAvailable) {
        currentEngine = TTS_ENGINE.EDGE_TTS;
        console.log('🎤 Edge TTS 服务可用，已自动启用（微软语音）');
        return;
    }

    // 其次检查 MiniMax TTS
    const miniMaxAvailable = await checkMiniMaxAvailable();
    if (miniMaxAvailable) {
        currentEngine = TTS_ENGINE.MINIMAX;
        console.log('🎤 MiniMax TTS 服务可用，已自动启用');
        return;
    }

    // ChatTTS 暂时跳过（发音不稳定）
    // const chatTTSAvailable = await checkChatTTSAvailable();
    // if (chatTTSAvailable) {
    //     currentEngine = TTS_ENGINE.CHAT_TTS;
    //     console.log('🎤 ChatTTS 服务可用，已自动启用');
    //     return;
    // }

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
export const enableMiniMax = async () => {
    const available = await checkMiniMaxAvailable();
    if (available) {
        currentEngine = TTS_ENGINE.MINIMAX;
        console.log('✅ 已切换到 MiniMax TTS');
        return true;
    }
    console.log('⚠️ MiniMax TTS 服务不可用');
    return false;
};

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
    enableMiniMax,
    enableEdgeTTS,
    enableChatTTS,
    disableTTS,
    getCurrentTTSEngine,
    checkMiniMaxAvailable,
    checkEdgeTTSAvailable,
    checkChatTTSAvailable
};
