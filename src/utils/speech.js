/**
 * 语音合成工具 - 使用 Web Speech API
 */

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

// 朗读文本
export const speak = (text, options = {}) => {
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
export const preloadVoices = () => {
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

export default { speak, speakCharacter, speakWord, speakSentence, isSpeechSupported, preloadVoices };
