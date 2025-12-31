import { useState, useCallback } from 'react';
import { speak } from '../utils/speech';
import './FlashCard.css';

/**
 * 识字卡片组件
 * 点击一次显示拼音，再点击一次发音朗读
 */
const FlashCard = ({ character, onNext, onPrev, onMarkLearned, showNavigation = true }) => {
    const [showPinyin, setShowPinyin] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleCardClick = useCallback(async () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        if (newClickCount === 1) {
            // 第一次点击：显示拼音
            setShowPinyin(true);
        } else if (newClickCount >= 2) {
            // 第二次点击：发音朗读
            if (!isPlaying) {
                setIsPlaying(true);
                try {
                    await speak(character.char, { rate: 0.6 });
                    // 短暂停顿后读词语
                    await new Promise(resolve => setTimeout(resolve, 300));
                    if (character.words && character.words[0]) {
                        await speak(character.words[0], { rate: 0.7 });
                    }
                } catch (error) {
                    console.error('语音播放失败:', error);
                } finally {
                    setIsPlaying(false);
                }
            }
        }
    }, [clickCount, character, isPlaying]);

    const handleNext = useCallback(() => {
        setShowPinyin(false);
        setClickCount(0);
        onNext?.();
    }, [onNext]);

    const handlePrev = useCallback(() => {
        setShowPinyin(false);
        setClickCount(0);
        onPrev?.();
    }, [onPrev]);

    const handleMarkLearned = useCallback(() => {
        onMarkLearned?.(character);
        handleNext();
    }, [character, onMarkLearned, handleNext]);

    if (!character) {
        return (
            <div className="flash-card flash-card-empty">
                <span className="flash-card-empty-text">没有更多汉字了</span>
            </div>
        );
    }

    return (
        <div className="flash-card-container">
            <div
                className={`flash-card ${isPlaying ? 'playing' : ''}`}
                onClick={handleCardClick}
            >
                {/* 汉字 */}
                <div className="flash-card-character">
                    {character.char}
                </div>

                {/* 拼音 */}
                <div className={`flash-card-pinyin ${showPinyin ? 'visible' : ''}`}>
                    {character.pinyin}
                </div>

                {/* 提示文字 */}
                <div className="flash-card-hint">
                    {clickCount === 0 && '点击显示拼音'}
                    {clickCount === 1 && '再次点击听发音 🔊'}
                    {clickCount >= 2 && (isPlaying ? '正在播放...' : '点击再听一次 🔊')}
                </div>

                {/* 词语展示 */}
                {showPinyin && character.words && (
                    <div className="flash-card-words">
                        {character.words.slice(0, 3).map((word, idx) => (
                            <span key={idx} className="flash-card-word">{word}</span>
                        ))}
                    </div>
                )}

                {/* 播放动画指示器 */}
                {isPlaying && (
                    <div className="flash-card-playing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>

            {/* 导航和功能按钮 */}
            {showNavigation && (
                <div className="flash-card-controls">
                    <button
                        className="mc-button"
                        onClick={handlePrev}
                        aria-label="上一个"
                    >
                        ◀ 上一个
                    </button>

                    <button
                        className="mc-button mc-button-primary"
                        onClick={handleMarkLearned}
                        aria-label="已学会"
                    >
                        ✓ 学会了
                    </button>

                    <button
                        className="mc-button"
                        onClick={handleNext}
                        aria-label="下一个"
                    >
                        下一个 ▶
                    </button>
                </div>
            )}

            {/* 汉字信息展示 */}
            {showPinyin && (
                <div className="flash-card-info">
                    <div className="flash-card-meaning">
                        <span className="label">释义:</span> {character.meaning}
                    </div>
                    {character.sentence && (
                        <div className="flash-card-sentence">
                            <span className="label">例句:</span> {character.sentence}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FlashCard;
