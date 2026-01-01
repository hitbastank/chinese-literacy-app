import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLessonById, getAdjacentLessons } from '../data/curriculum';
import { speak } from '../utils/speech';
import { preloadVoices } from '../utils/speech';
import {
    markAsStudied,
    markAsMastered,
    markAsNeedsReviewNew,
    unmarkNeedsReview,
    getStudyCount,
    isMastered,
    isNeedsReview
} from '../utils/storage';
import './Lesson.css';

/**
 * 课程学习页面
 * 支持点击显示拼音、朗读、Minecraft造句
 * 学习进度追踪：点击下一个=学过，点击已学会=彻底掌握
 */
const Lesson = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const lesson = getLessonById(lessonId);
    const { prev: prevLesson, next: nextLesson } = getAdjacentLessons(lessonId);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [clickState, setClickState] = useState(0); // 0: 初始, 1: 显示拼音, 2: 可朗读
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // 笔画动画状态
    const [studyCount, setStudyCount] = useState(0);
    const [charMastered, setCharMastered] = useState(false);
    const [needsReviewChecked, setNeedsReviewChecked] = useState(false);
    const hanziWriterRef = useRef(null);
    const strokeContainerRef = useRef(null);

    // 当前汉字 - 需要在 useEffect 之前声明
    const currentChar = lesson ? lesson.characters[currentIndex] : null;

    // 预加载语音
    useEffect(() => {
        preloadVoices();
    }, []);

    // 切换字时重置状态并加载学习进度
    useEffect(() => {
        setClickState(0);
        setIsAnimating(false);
        // 清除之前的 HanziWriter 实例
        if (hanziWriterRef.current) {
            hanziWriterRef.current = null;
        }
        if (strokeContainerRef.current) {
            strokeContainerRef.current.innerHTML = '';
        }
        if (lesson && lesson.characters[currentIndex]) {
            const char = lesson.characters[currentIndex].char;
            setStudyCount(getStudyCount(char));
            setCharMastered(isMastered(char));
            setNeedsReviewChecked(isNeedsReview(char));
        }
    }, [currentIndex, lesson]);

    // 初始化 HanziWriter - 在田字格内叠加笔画动画
    useEffect(() => {
        if (isAnimating && strokeContainerRef.current && currentChar) {
            // 动态导入 HanziWriter
            import('hanzi-writer').then(({ default: HanziWriter }) => {
                // 清空容器
                strokeContainerRef.current.innerHTML = '';
                try {
                    hanziWriterRef.current = HanziWriter.create(strokeContainerRef.current, currentChar.char, {
                        width: 200,
                        height: 200,
                        padding: 0,
                        strokeColor: '#e54',  // 统一笔画颜色 - 红色
                        strokeAnimationSpeed: 1,
                        delayBetweenStrokes: 300,
                        showOutline: false,
                        showCharacter: false
                    });
                    // 开始动画
                    hanziWriterRef.current.animateCharacter({
                        onComplete: () => {
                            // 动画完成后保持显示HanziWriter的字符
                            // 不调用 setIsAnimating(false)，保持原有汉字隐藏
                            if (hanziWriterRef.current) {
                                hanziWriterRef.current.showCharacter();
                            }
                        }
                    });
                } catch (error) {
                    console.error('HanziWriter 初始化失败:', error);
                    setIsAnimating(false);
                }
            });
        }
    }, [isAnimating, currentChar]);

    if (!lesson) {
        return (
            <div className="page-container lesson-page">
                <div className="lesson-not-found">
                    <h2 className="pixel-text">🚧 课程未找到</h2>
                    <p>该课程可能还在开发中</p>
                    <Link to="/curriculum" className="mc-button">
                        返回课程目录
                    </Link>
                </div>
            </div>
        );
    }

    // 处理卡片点击
    const handleCardClick = useCallback(async () => {
        if (clickState === 0) {
            // 第一次点击：显示拼音
            setClickState(1);
        } else if (clickState >= 1 && !isPlaying) {
            // 第二次及以后点击：朗读
            setClickState(2);
            setIsPlaying(true);
            try {
                // 朗读汉字
                await speak(currentChar.char, { rate: 0.5 });
                await new Promise(r => setTimeout(r, 300));

                // 朗读词语
                if (currentChar.words && currentChar.words[0]) {
                    await speak(currentChar.words[0], { rate: 0.6 });
                    await new Promise(r => setTimeout(r, 300));
                }

                // 朗读普通例句
                if (currentChar.example) {
                    await speak(currentChar.example, { rate: 0.7 });
                    await new Promise(r => setTimeout(r, 500));
                }

                // 朗读Minecraft造句 & 开始笔画动画
                if (currentChar.minecraftSentence) {
                    // 开始笔画动画（在语音开始时就触发）
                    setIsAnimating(true);
                    await speak(currentChar.minecraftSentence, { rate: 0.7 });
                }
            } catch (error) {
                console.error('语音播放失败:', error);
            } finally {
                setIsPlaying(false);
            }
        }
    }, [clickState, currentChar, isPlaying]);

    // 导航函数
    const goToChar = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevChar = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 点击"下一个"时记录为学过
    const goToNextChar = () => {
        // 记录学习
        const count = markAsStudied(currentChar.char);
        setStudyCount(count);

        if (currentIndex < lesson.characters.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // 标记为彻底学会
    const handleMarkMastered = () => {
        markAsMastered(currentChar.char);
        setCharMastered(true);
        // 学会后自动跳到下一个
        if (currentIndex < lesson.characters.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // 处理不熟练checkbox
    const handleNeedsReviewChange = (e) => {
        const checked = e.target.checked;
        setNeedsReviewChecked(checked);
        if (checked) {
            markAsNeedsReviewNew(currentChar.char);
            setCharMastered(false);
        } else {
            unmarkNeedsReview(currentChar.char);
        }
    };

    return (
        <div className="page-container lesson-page">
            {/* 课程标题 */}
            <div className="lesson-header">
                <Link to="/curriculum" className="back-link">◀ 返回目录</Link>
                <h1 className="pixel-text lesson-title">{lesson.title}</h1>
                <div className="lesson-progress">
                    {currentIndex + 1} / {lesson.characters.length}
                </div>
            </div>

            {/* 主学习区域 */}
            <div className="lesson-main">
                {/* 拼音 (点击后显示) - 田字格外部胶囊样式 */}
                <div className={`card-pinyin ${clickState >= 1 ? 'visible' : ''}`}>
                    {currentChar.pinyin}
                </div>

                {/* 汉字卡片 */}
                <div
                    className={`lesson-card ${isPlaying ? 'playing' : ''}`}
                    onClick={handleCardClick}
                >
                    {/* 汉字容器 - 笔画动画直接叠加 */}
                    <div className={`card-character-wrapper ${isAnimating ? 'animating' : ''}`}>
                        <div className="card-character">{currentChar.char}</div>
                        <div className="stroke-animation-overlay" ref={strokeContainerRef}></div>
                    </div>
                </div>

                {/* 播放动画 - 放在卡片外部避免被裁剪 */}
                {isPlaying && (
                    <div className="playing-waves">
                        <span></span><span></span><span></span>
                    </div>
                )}

                {/* 提示文字 - 放在田字格外面 */}
                <div className="card-hint">
                    {clickState === 0 && '👆 点击显示拼音'}
                    {clickState === 1 && '🔊 再次点击朗读'}
                    {clickState >= 2 && (isPlaying ? '🎵 正在朗读...' : '🔊 点击再听一次')}
                </div>

                {/* 汉字详情 (点击后显示) */}
                {clickState >= 1 && (
                    <div className="char-details">
                        {/* 释义 */}
                        <div className="detail-row">
                            <span className="detail-label">释义</span>
                            <span className="detail-content">{currentChar.meaning}</span>
                        </div>

                        {/* 词语 */}
                        <div className="detail-row">
                            <span className="detail-label">词语</span>
                            <div className="words-list">
                                {currentChar.words.map((word, idx) => (
                                    <span key={idx} className="word-tag">{word}</span>
                                ))}
                            </div>
                        </div>

                        {/* 例句 */}
                        <div className="detail-row">
                            <span className="detail-label">例句</span>
                            <span className="detail-content">{currentChar.example}</span>
                        </div>

                        {/* Minecraft造句 */}
                        <div className="detail-row minecraft-sentence">
                            <span className="detail-label">⛏️ Minecraft</span>
                            <span className="detail-content">{currentChar.minecraftSentence}</span>
                        </div>
                    </div>
                )}

                {/* 第二次学习提示 */}
                {studyCount >= 1 && !charMastered && (
                    <div className="second-study-notice">
                        <span className="study-count-badge">第 {studyCount + 1} 次学习</span>
                        <label className="needs-review-checkbox">
                            <input
                                type="checkbox"
                                checked={needsReviewChecked}
                                onChange={handleNeedsReviewChange}
                            />
                            <span>标记为不熟练（后续课程会再次出现）</span>
                        </label>
                    </div>
                )}

                {/* 已掌握标记 */}
                {charMastered && (
                    <div className="mastered-badge">
                        ✅ 已彻底学会
                    </div>
                )}

                {/* 字内导航按钮 */}
                <div className="char-nav-buttons">
                    <button
                        className="mc-button"
                        onClick={goToPrevChar}
                        disabled={currentIndex === 0}
                    >
                        ◀ 上一个
                    </button>

                    <button
                        className="mc-button mc-button-gold"
                        onClick={handleMarkMastered}
                        disabled={charMastered}
                    >
                        ✓ 已学会
                    </button>

                    <button
                        className="mc-button mc-button-primary"
                        onClick={goToNextChar}
                        disabled={currentIndex === lesson.characters.length - 1}
                    >
                        下一个 ▶
                    </button>
                </div>
            </div>

            {/* 快速跳转导航 */}
            <div className="quick-nav-section">
                <h3 className="pixel-text">📋 本课汉字</h3>
                <div className="quick-nav-grid">
                    {lesson.characters.map((char, idx) => (
                        <button
                            key={idx}
                            className={`quick-nav-char ${idx === currentIndex ? 'active' : ''} ${isMastered(char.char) ? 'mastered' : ''}`}
                            onClick={() => goToChar(idx)}
                        >
                            {char.char}
                        </button>
                    ))}
                </div>
            </div>

            {/* 课程导航 */}
            <div className="lesson-nav-section">
                {prevLesson ? (
                    <Link to={`/lesson/${prevLesson.id}`} className="mc-button lesson-nav-btn">
                        ◀◀ 上一课
                        <span className="nav-lesson-title">{prevLesson.title}</span>
                    </Link>
                ) : (
                    <div className="lesson-nav-placeholder"></div>
                )}

                <Link to="/curriculum" className="mc-button">
                    📚 课程目录
                </Link>

                {nextLesson ? (
                    <Link to={`/lesson/${nextLesson.id}`} className="mc-button lesson-nav-btn">
                        下一课 ▶▶
                        <span className="nav-lesson-title">{nextLesson.title}</span>
                    </Link>
                ) : (
                    <div className="lesson-nav-placeholder"></div>
                )}
            </div>
        </div>
    );
};

export default Lesson;
