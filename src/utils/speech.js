/**
 * 语音合成工具 (精简版)
 * 支持 Edge TTS 和 Web Speech API (作为回退)
 */

// 服务器配置
const EDGE_TTS_SERVER = 'http://localhost:8766';

// TTS 引擎类型
const TTS_ENGINE = {
    EDGE_TTS: 'EdgeTTS',
    WEB_SPEECH: 'WebSpeech'
};

// 当前使用的引擎
let currentEngine = TTS_ENGINE.WEB_SPEECH;

// 浏览器端音频缓存 - 存储已下载的音频 Blob
const browserAudioCache = new Map();

// 当前播放的音频对象（用于暂停/停止控制）
let currentAudio = null;
let currentAudioUrl = null;
let isSpeechPaused = false;

/**
 * 停止当前语音播放
 */
export const stopSpeech = () => {
    // 停止 HTML5 Audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentAudioUrl) {
            URL.revokeObjectURL(currentAudioUrl);
            currentAudioUrl = null;
        }
        currentAudio = null;
    }

    // 取消 Web Speech API
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    isSpeechPaused = false;
};

/**
 * 暂停当前语音播放
 */
export const pauseSpeech = () => {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        isSpeechPaused = true;
        return true;
    }

    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        isSpeechPaused = true;
        return true;
    }

    return false;
};

/**
 * 恢复暂停的语音播放
 */
export const resumeSpeech = () => {
    if (currentAudio && isSpeechPaused) {
        currentAudio.play();
        isSpeechPaused = false;
        return true;
    }

    if ('speechSynthesis' in window && isSpeechPaused) {
        window.speechSynthesis.resume();
        isSpeechPaused = false;
        return true;
    }

    return false;
};

/**
 * 检查语音是否正在播放
 */
export const isSpeechPlaying = () => {
    if (currentAudio && !currentAudio.paused && !currentAudio.ended) {
        return true;
    }
    if ('speechSynthesis' in window && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        return true;
    }
    return false;
};

/**
 * 检查语音是否暂停
 */
export const isSpeechPausedState = () => isSpeechPaused;

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
 * 获取当前使用的 TTS 引擎
 */
export const getCurrentTTSEngine = () => currentEngine;

/**
 * 同步当前引擎状态：服务可用则切换到 EdgeTTS，不可用则回退 WebSpeech
 */
const syncTTSEngine = async () => {
    const available = await checkEdgeTTSAvailable();
    currentEngine = available ? TTS_ENGINE.EDGE_TTS : TTS_ENGINE.WEB_SPEECH;
    return currentEngine;
};

/**
 * 检查浏览器是否支持语音合成
 */
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

// ============ Edge TTS 核心功能 ============

// 默认语音配置
const VOICE_CONFIG = {
    CHINESE: 'zh-CN-XiaoyouMultilingualNeural',   // 中文多语种女声（更口语）
    ENGLISH: 'en-US-AnaNeural'                    // 英语女童声
};

/**
 * 获取缓存键
 */
const getCacheKey = (text, rate, voice) => `${text}:${rate}:${voice}`;

/**
 * 从服务器获取音频 Blob
 */
const fetchAudioBlob = async (text, rate = 0.9, voice = VOICE_CONFIG.CHINESE) => {
    const response = await fetch(`${EDGE_TTS_SERVER}/tts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            voice: voice,
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
export const prefetchAudio = async (text, rate = 0.9, voice = VOICE_CONFIG.CHINESE) => {
    const cacheKey = getCacheKey(text, rate, voice);

    if (browserAudioCache.has(cacheKey)) {
        return; // 已缓存
    }

    try {
        const audioBlob = await fetchAudioBlob(text, rate, voice);
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
    const voice = options.voice || VOICE_CONFIG.CHINESE;
    const cacheKey = getCacheKey(text, rate, voice);

    try {
        let audioBlob;

        // 检查浏览器缓存
        if (browserAudioCache.has(cacheKey)) {
            audioBlob = browserAudioCache.get(cacheKey);
            console.log(`⚡ 从缓存播放: ${text.substring(0, 10)}...`);
        } else {
            // 未缓存，需要下载
            audioBlob = await fetchAudioBlob(text, rate, voice);
            browserAudioCache.set(cacheKey, audioBlob);
        }

        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        // 跟踪当前音频以支持暂停/停止
        currentAudio = audio;
        currentAudioUrl = audioUrl;
        isSpeechPaused = false;

        return new Promise((resolve, reject) => {
            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                if (currentAudio === audio) {
                    currentAudio = null;
                    currentAudioUrl = null;
                }
                resolve();
            };
            audio.onerror = (e) => {
                URL.revokeObjectURL(audioUrl);
                if (currentAudio === audio) {
                    currentAudio = null;
                    currentAudioUrl = null;
                }
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
 * 使用 Edge TTS 朗读英语文本
 */
export const speakEnglish = async (text, options = {}) => {
    const engine = await syncTTSEngine();

    // 优先使用 Edge TTS
    if (engine === TTS_ENGINE.EDGE_TTS) {
        return speakWithEdgeTTS(text, {
            ...options,
            rate: options.rate || 0.85,
            voice: VOICE_CONFIG.ENGLISH
        });
    }

    // 回退到 Web Speech API (英语)
    return new Promise((resolve, reject) => {
        if (!isSpeechSupported()) {
            reject(new Error('浏览器不支持语音合成'));
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = options.rate || 0.8;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en_US'));
        if (enVoice) {
            utterance.voice = enVoice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event);

        window.speechSynthesis.speak(utterance);
    });
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

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = options.lang || 'zh-CN';
        utterance.rate = options.rate || 0.8;
        utterance.pitch = options.pitch || 1.1;
        utterance.volume = options.volume || 1;

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
    const engine = await syncTTSEngine();
    if (engine === TTS_ENGINE.EDGE_TTS) {
        return speakWithEdgeTTS(text, options);
    }
    return speakWithWebSpeech(text, options);
};

/**
 * 预加载汉字的所有音频到浏览器缓存
 */
export const preloadCharacterAudio = async (character) => {
    if (currentEngine !== TTS_ENGINE.EDGE_TTS) {
        return;
    }

    console.log(`🔄 开始预加载: ${character.char}`);

    const items = [];
    if (character.char) items.push({ text: character.char, rate: 0.7 });
    if (character.meaning) items.push({ text: character.meaning, rate: 0.9 });
    if (character.words && character.words[0]) items.push({ text: character.words[0], rate: 0.85 });
    if (character.story) items.push({ text: character.story, rate: 1.0 });
    if (character.minecraftSentence) items.push({ text: character.minecraftSentence, rate: 0.95 });

    if (items.length === 0) return;

    await Promise.all(items.map(item => prefetchAudio(item.text, item.rate)));
    console.log(`✅ 预加载完成: ${character.char}，共 ${items.length} 条音频`);
};

/**
 * 批量预加载多个汉字的音频
 */
export const preloadMultipleCharacters = async (characters) => {
    if (currentEngine !== TTS_ENGINE.EDGE_TTS) {
        return;
    }

    console.log(`🔄 批量预加载: ${characters.length} 个汉字`);

    const items = [];
    for (const char of characters) {
        if (char.char) items.push({ text: char.char, rate: 0.7 });
        if (char.meaning) items.push({ text: char.meaning, rate: 0.9 });
        if (char.words && char.words[0]) items.push({ text: char.words[0], rate: 0.85 });
        if (char.story) items.push({ text: char.story, rate: 1.0 });
        if (char.minecraftSentence) items.push({ text: char.minecraftSentence, rate: 0.95 });
    }

    if (items.length === 0) return;

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
 * 预加载语音 - 自动检测 Edge TTS 可用性
 */
export const preloadVoices = async () => {
    const edgeTTSAvailable = await checkEdgeTTSAvailable();
    if (edgeTTSAvailable) {
        currentEngine = TTS_ENGINE.EDGE_TTS;
        console.log('🎤 Edge TTS 服务可用，已自动启用');
        return;
    }

    currentEngine = TTS_ENGINE.WEB_SPEECH;
    console.log('📢 使用 Web Speech API（浏览器内置语音）');

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
        console.log('✅ 已切换到 Edge TTS');
        return true;
    }
    console.log('⚠️ Edge TTS 服务不可用');
    return false;
};

export const disableTTS = () => {
    currentEngine = TTS_ENGINE.WEB_SPEECH;
    console.log('已切换回 Web Speech API');
};

export default {
    speak,
    speakEnglish,
    speakCharacter,
    speakWord,
    speakSentence,
    isSpeechSupported,
    preloadVoices,
    enableEdgeTTS,
    disableTTS,
    getCurrentTTSEngine,
    checkEdgeTTSAvailable,
    stopSpeech,
    pauseSpeech,
    resumeSpeech,
    isSpeechPlaying,
    isSpeechPausedState,
    prefetchAudio,
    preloadCharacterAudio,
    preloadMultipleCharacters
};
