import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import FlashCard from '../components/FlashCard';
import StrokeAnimation from '../components/StrokeAnimation';
import characters, { CATEGORIES, getCharactersByCategory } from '../data/characters';
import { markAsLearned, markAsInProgress, getProgress, checkAndUnlockAchievements } from '../utils/storage';
import { preloadVoices } from '../utils/speech';
import './Learn.css';

/**
 * 学习页面
 */
const Learn = () => {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode') || 'flashcard';

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredCharacters, setFilteredCharacters] = useState(characters);
    const [showStroke, setShowStroke] = useState(mode === 'stroke');
    const [newAchievement, setNewAchievement] = useState(null);

    // 预加载语音
    useEffect(() => {
        preloadVoices();
    }, []);

    // 根据分类筛选汉字
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredCharacters(characters);
        } else {
            setFilteredCharacters(getCharactersByCategory(activeCategory));
        }
        setCurrentIndex(0);
    }, [activeCategory]);

    const handleNext = useCallback(() => {
        setCurrentIndex(prev =>
            prev < filteredCharacters.length - 1 ? prev + 1 : 0
        );
    }, [filteredCharacters.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex(prev =>
            prev > 0 ? prev - 1 : filteredCharacters.length - 1
        );
    }, [filteredCharacters.length]);

    const handleMarkLearned = useCallback((char) => {
        // 获取汉字在完整列表中的索引
        const globalIndex = characters.findIndex(c => c.char === char.char);
        if (globalIndex !== -1) {
            markAsLearned(globalIndex);

            // 检查成就
            const newAchievements = checkAndUnlockAchievements();
            if (newAchievements.length > 0) {
                setNewAchievement(newAchievements[0]);
                setTimeout(() => setNewAchievement(null), 3000);
            }
        }
    }, []);

    const currentChar = filteredCharacters[currentIndex];

    return (
        <div className="page-container learn-page">
            <div className="page-title">
                <h1 className="pixel-text">📖 汉字学习</h1>
                <p className="page-subtitle">点击卡片显示拼音，再点击听发音</p>
            </div>

            {/* 分类选择 */}
            <div className="category-tabs">
                <button
                    className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                >
                    全部
                </button>
                {Object.values(CATEGORIES).slice(0, 6).map(category => (
                    <button
                        key={category}
                        className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* 模式切换 */}
            <div className="mode-toggle">
                <button
                    className={`mc-button ${!showStroke ? 'mc-button-primary' : ''}`}
                    onClick={() => setShowStroke(false)}
                >
                    📖 识字卡片
                </button>
                <button
                    className={`mc-button ${showStroke ? 'mc-button-primary' : ''}`}
                    onClick={() => setShowStroke(true)}
                >
                    ✍️ 笔顺学习
                </button>
            </div>

            {/* 进度显示 */}
            <div className="learn-progress">
                <span className="progress-text pixel-text">
                    {currentIndex + 1} / {filteredCharacters.length}
                </span>
            </div>

            {/* 学习区域 */}
            <div className="learn-content">
                {!showStroke ? (
                    <FlashCard
                        character={currentChar}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        onMarkLearned={handleMarkLearned}
                    />
                ) : (
                    currentChar && (
                        <StrokeAnimation
                            character={currentChar.char}
                        />
                    )
                )}
            </div>

            {/* 笔顺模式下的导航按钮 */}
            {showStroke && (
                <div className="stroke-navigation">
                    <button className="mc-button" onClick={handlePrev}>
                        ◀ 上一个
                    </button>
                    <span className="current-char-display">
                        {currentChar?.char}
                    </span>
                    <button className="mc-button" onClick={handleNext}>
                        下一个 ▶
                    </button>
                </div>
            )}

            {/* 快捷跳转 */}
            <div className="character-quick-nav">
                <span className="nav-label pixel-text">快速跳转:</span>
                <div className="quick-nav-grid">
                    {filteredCharacters.slice(0, 20).map((char, idx) => (
                        <button
                            key={idx}
                            className={`quick-nav-item ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        >
                            {char.char}
                        </button>
                    ))}
                    {filteredCharacters.length > 20 && (
                        <span className="more-indicator">+{filteredCharacters.length - 20}</span>
                    )}
                </div>
            </div>

            {/* 成就通知 */}
            {newAchievement && (
                <div className="achievement-popup">
                    <div className="achievement-content">
                        <span className="achievement-icon">{newAchievement.icon}</span>
                        <div className="achievement-text">
                            <span className="pixel-text">成就解锁!</span>
                            <span className="achievement-name">{newAchievement.name}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Learn;
