import { useState, useCallback, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getLessonById, getAdjacentLessons } from '../data/curriculum';
import { speak, preloadVoices, preloadCharacterAudio, preloadMultipleCharacters, stopSpeech, pauseSpeech, resumeSpeech } from '../utils/speech';
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
    const [animationCompleted, setAnimationCompleted] = useState(false); // 动画完成状态
    const [studyCount, setStudyCount] = useState(0);
    const [charMastered, setCharMastered] = useState(false);
    const [needsReviewChecked, setNeedsReviewChecked] = useState(false);
    const [isPreloading, setIsPreloading] = useState(false); // 预加载状态
    const [isPaused, setIsPaused] = useState(false); // 语音暂停状态
    const hanziWriterRef = useRef(null);
    const strokeContainerRef = useRef(null);

    // 当前汉字 - 需要在 useEffect 之前声明
    const currentChar = lesson ? lesson.characters[currentIndex] : null;

    // 预加载语音引擎
    useEffect(() => {
        preloadVoices();
    }, []);

    // 课程切换时重置索引到第一个字，并预加载音频
    useEffect(() => {
        setCurrentIndex(0);

        // 停止任何正在播放的语音
        stopSpeech();
        setIsPlaying(false);
        setIsPaused(false);

        // 预加载当前课程的前几个汉字音频
        if (lesson && lesson.characters.length > 0) {
            setIsPreloading(true);
            // 预加载前3个汉字的音频
            const charsToPreload = lesson.characters.slice(0, 3);
            preloadMultipleCharacters(charsToPreload).finally(() => {
                setIsPreloading(false);
            });
        }

        // 预加载下一课的数据（防止切换时空白页）
        if (nextLesson && nextLesson.characters) {
            // 延迟预加载下一课的音频，避免影响当前课程加载
            setTimeout(() => {
                const nextCharsToPreload = nextLesson.characters.slice(0, 2);
                if (nextCharsToPreload.length > 0) {
                    preloadMultipleCharacters(nextCharsToPreload);
                    console.log(`📦 预加载下一课: ${nextLesson.title}`);
                }
            }, 2000);
        }
    }, [lessonId, lesson, nextLesson]);


    // 用于追踪当前字符的索引，防止动画在切换字符后仍然触发
    const currentIndexRef = useRef(currentIndex);

    // 动画会话ID - 每次切换字符时递增，用于取消旧的异步回调
    const animationSessionRef = useRef(0);

    // 用于追踪是否应该播放动画的同步ref（解决异步回调中state不同步的问题）
    const shouldAnimateRef = useRef(false);

    // 切换字时重置状态并加载学习进度
    useEffect(() => {
        // 更新当前索引的ref
        currentIndexRef.current = currentIndex;

        // 递增动画会话ID，使任何正在进行的异步回调失效
        animationSessionRef.current += 1;

        // 立即标记不应该播放动画，这会影响所有异步回调
        shouldAnimateRef.current = false;

        setClickState(0);
        setIsAnimating(false);
        setAnimationCompleted(false); // 重置动画完成状态，让原汉字立即显示

        // 彻底清除之前的 HanziWriter 实例以及正在进行的动画
        if (hanziWriterRef.current) {
            try {
                // 尝试取消动画（如果正在进行）
                hanziWriterRef.current.cancelQuiz?.();
                hanziWriterRef.current.hideCharacter();
                hanziWriterRef.current.hideOutline();
                // 尝试取消当前动画
                hanziWriterRef.current.cancelAnimation?.();
            } catch (e) {
                // 忽略错误
            }
            hanziWriterRef.current = null;
        }

        // 彻底清空容器，确保没有残留的SVG元素
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
    // 增加一个额外的检查：只有当shouldAnimateRef.current为true时才播放动画
    // 这个ref在handleCardClick中被设为true，在切换字符的useEffect中被设为false
    useEffect(() => {
        // 只有当以下条件都满足时才初始化动画:
        // 1. isAnimating 为 true（用户点击触发）
        // 2. clickState >= 2（确保用户已经点击两次，防止切换字符时的残留状态）
        // 3. shouldAnimateRef.current 为 true（确保是当前字符的动画请求，不是上一个字符残留的）
        // 4. 容器和字符存在
        if (!isAnimating || clickState < 2 || !shouldAnimateRef.current || !strokeContainerRef.current || !currentChar) {
            return;
        }

        // 设置应该播放动画的标志
        shouldAnimateRef.current = true;

        // 保存当前索引、字符和动画会话ID，用于在回调中检查是否仍然有效
        const animatingIndex = currentIndexRef.current;
        const animatingChar = currentChar.char;
        const sessionId = animationSessionRef.current;

        // 动态导入 HanziWriter
        import('hanzi-writer').then(({ default: HanziWriter }) => {
            // 检查是否应该继续动画（三重检查：ref状态、会话ID、索引）
            if (!shouldAnimateRef.current) {
                return;
            }

            // 检查会话ID是否仍然匹配（防止字符切换后的异步回调）
            if (animationSessionRef.current !== sessionId) {
                return;
            }

            // 再次检查索引是否仍然匹配（防止在异步加载期间切换了字符）
            if (currentIndexRef.current !== animatingIndex) {
                return;
            }

            // 检查容器是否仍然存在
            if (!strokeContainerRef.current) {
                return;
            }

            // 清空容器
            strokeContainerRef.current.innerHTML = '';

            try {
                hanziWriterRef.current = HanziWriter.create(strokeContainerRef.current, animatingChar, {
                    width: 200,
                    height: 200,
                    padding: 0,
                    strokeColor: '#e54',  // 统一笔画颜色 - 红色
                    strokeAnimationSpeed: 1,
                    delayBetweenStrokes: 300,
                    showOutline: false,
                    showCharacter: false,
                    // 添加字符数据加载回调
                    onLoadCharDataSuccess: () => {
                        // 检查是否应该继续动画（三重检查）
                        if (!shouldAnimateRef.current) {
                            return;
                        }

                        // 首先检查会话ID是否仍然匹配
                        if (animationSessionRef.current !== sessionId) {
                            return;
                        }

                        // 检查是否仍然是同一个字符
                        if (currentIndexRef.current !== animatingIndex) {
                            return;
                        }
                        // 数据加载成功后开始动画
                        hanziWriterRef.current.animateCharacter({
                            onComplete: () => {
                                // 检查是否应该更新状态（三重检查）
                                if (!shouldAnimateRef.current) {
                                    return;
                                }

                                // 首先检查会话ID是否仍然匹配
                                if (animationSessionRef.current !== sessionId) {
                                    return;
                                }

                                // 检查索引是否仍然匹配（防止动画完成时已经切换了字符）
                                if (currentIndexRef.current !== animatingIndex) {
                                    return;
                                }
                                // 动画完成后保持显示HanziWriter的字符
                                setAnimationCompleted(true);
                                if (hanziWriterRef.current) {
                                    hanziWriterRef.current.showCharacter();
                                }
                            }
                        });
                    },
                    onLoadCharDataError: (reason) => {
                        console.error('[HanziWriter Effect] Failed to load character data for:', animatingChar, 'reason:', reason);
                        // 只有在会话ID匹配且应该动画时才更新状态
                        if (shouldAnimateRef.current && animationSessionRef.current === sessionId) {
                            setIsAnimating(false);
                            setAnimationCompleted(false);
                        }
                    }
                });
            } catch (error) {
                console.error('[HanziWriter Effect] 初始化失败:', error);
                if (shouldAnimateRef.current && animationSessionRef.current === sessionId) {
                    setIsAnimating(false);
                    setAnimationCompleted(false);
                }
            }
        }).catch(error => {
            console.error('[HanziWriter Effect] Import failed:', error);
            if (shouldAnimateRef.current && animationSessionRef.current === sessionId) {
                setIsAnimating(false);
                setAnimationCompleted(false);
            }
        });
    }, [isAnimating, clickState, currentChar]);

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
            // 第一次点击：显示拼音，同时预加载当前汉字的所有音频
            setClickState(1);
            // 立即预加载当前汉字的所有音频，这样第二次点击时就不用等待
            preloadCharacterAudio(currentChar);
        } else if (clickState >= 1 && !isPlaying) {
            // 第二次及以后点击：朗读
            setClickState(2);
            setIsPlaying(true);

            // 立即启动笔画动画（与语音同步开始）
            shouldAnimateRef.current = true;
            setIsAnimating(true);

            try {
                // 仅朗读：汉字 → 词语 → 例句
                await speak(currentChar.char, { rate: 0.7 });

                if (currentChar.words && currentChar.words[0]) {
                    await speak(currentChar.words[0], { rate: 0.85 });
                }

                // 优先使用 Minecraft 例句，没有则回退普通例句
                const sentence = currentChar.minecraftSentence || currentChar.example;
                if (sentence) {
                    await speak(sentence, { rate: 0.95 });
                }
            } catch (error) {
                console.error('语音播放失败:', error);
            } finally {
                setIsPlaying(false);
            }
        }
    }, [clickState, currentChar, isPlaying]);

    // 导航函数 - 切换字符时中断当前语音
    const goToChar = (index) => {
        stopSpeech();
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentIndex(index);
    };

    const goToPrevChar = () => {
        if (currentIndex > 0) {
            stopSpeech();
            setIsPlaying(false);
            setIsPaused(false);
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 点击"下一个"时记录为学过，并预加载后续汉字
    const goToNextChar = () => {
        // 中断当前语音
        stopSpeech();
        setIsPlaying(false);
        setIsPaused(false);

        // 记录学习
        const count = markAsStudied(currentChar.char);
        setStudyCount(count);

        if (currentIndex < lesson.characters.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            // 预加载接下来2个汉字的音频（当前的下一个和再下一个）
            const upcomingChars = lesson.characters.slice(nextIndex + 1, nextIndex + 3);
            if (upcomingChars.length > 0) {
                preloadMultipleCharacters(upcomingChars);
            }
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

    // 暂停/恢复语音
    const handlePauseResume = () => {
        if (isPaused) {
            resumeSpeech();
            setIsPaused(false);
        } else {
            pauseSpeech();
            setIsPaused(true);
        }
    };

    // 停止语音
    const handleStopSpeech = () => {
        stopSpeech();
        setIsPlaying(false);
        setIsPaused(false);
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
                    <div className={`card-character-wrapper ${isAnimating || animationCompleted ? 'animating' : ''}`}>
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

                {/* 提示文字和控制按钮 - 放在田字格外面 */}
                <div className="card-hint">
                    {clickState === 0 && '👆 点击显示拼音'}
                    {clickState === 1 && '🔊 再次点击朗读'}
                    {clickState >= 2 && !isPlaying && '🔊 点击再听一次'}
                    {clickState >= 2 && isPlaying && (
                        <div className="speech-controls">
                            <span className="playing-text">{isPaused ? '⏸️ 已暂停' : '🎵 正在朗读...'}</span>
                            <button
                                className="speech-control-btn pause-btn"
                                onClick={(e) => { e.stopPropagation(); handlePauseResume(); }}
                                title={isPaused ? '继续播放' : '暂停'}
                            >
                                {isPaused ? '▶️' : '⏸️'}
                            </button>
                            <button
                                className="speech-control-btn stop-btn"
                                onClick={(e) => { e.stopPropagation(); handleStopSpeech(); }}
                                title="停止"
                            >
                                ⏹️
                            </button>
                        </div>
                    )}
                </div>

                {/* 汉字详情 (点击后显示) */}
                {clickState >= 1 && (
                    <div className="char-details">
                        {/* 释义 */}
                        <div className="detail-row">
                            <span className="detail-label">📖 释义</span>
                            <span className="detail-content">{currentChar.meaning}</span>
                        </div>

                        {/* 词语 */}
                        <div className="detail-row">
                            <span className="detail-label">📝 词语</span>
                            <div className="words-list">
                                {currentChar.words.map((word, idx) => (
                                    <span key={idx} className="word-tag">{word}</span>
                                ))}
                            </div>
                        </div>

                        {/* 记忆点/故事 - 字的解释 */}
                        {currentChar.story && (
                            <div className="detail-row story-row">
                                <span className="detail-label">💡 记忆点</span>
                                <span className="detail-content">{currentChar.story}</span>
                            </div>
                        )}

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
