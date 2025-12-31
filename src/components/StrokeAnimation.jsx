import { useEffect, useRef, useState } from 'react';
import './StrokeAnimation.css';

/**
 * 汉字笔顺动画组件
 * 使用 HanziWriter 库显示笔顺
 */
const StrokeAnimation = ({ character, autoPlay = false, onComplete }) => {
    const containerRef = useRef(null);
    const writerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 动态加载 HanziWriter
        const loadHanziWriter = async () => {
            if (!window.HanziWriter) {
                try {
                    // 从 CDN 加载 HanziWriter
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js';
                    script.async = true;

                    await new Promise((resolve, reject) => {
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });
                } catch (err) {
                    setError('加载笔顺库失败');
                    setIsLoading(false);
                    return;
                }
            }

            initWriter();
        };

        const initWriter = () => {
            if (!containerRef.current || !character) return;

            // 清除旧的 writer
            if (writerRef.current) {
                containerRef.current.innerHTML = '';
            }

            try {
                writerRef.current = window.HanziWriter.create(containerRef.current, character, {
                    width: 250,
                    height: 250,
                    padding: 10,
                    strokeAnimationSpeed: 1,
                    delayBetweenStrokes: 300,
                    strokeColor: '#3F3F3F',
                    radicalColor: '#5D8731',
                    outlineColor: '#DDD',
                    drawingColor: '#0DC2D6',
                    showOutline: true,
                    showCharacter: false,
                    onLoadCharDataSuccess: () => {
                        setIsLoading(false);
                        setError(null);
                        if (autoPlay) {
                            handleAnimate();
                        }
                    },
                    onLoadCharDataError: () => {
                        setIsLoading(false);
                        setError('该汉字暂无笔顺数据');
                    }
                });
            } catch (err) {
                setIsLoading(false);
                setError('初始化失败');
            }
        };

        loadHanziWriter();

        return () => {
            if (writerRef.current && containerRef.current) {
                containerRef.current.innerHTML = '';
                writerRef.current = null;
            }
        };
    }, [character, autoPlay]);

    const handleAnimate = () => {
        if (!writerRef.current || isPlaying) return;

        setIsPlaying(true);
        writerRef.current.animateCharacter({
            onComplete: () => {
                setIsPlaying(false);
                onComplete?.();
            }
        });
    };

    const handleShowCharacter = () => {
        if (!writerRef.current) return;
        writerRef.current.showCharacter();
        setIsPlaying(false);
    };

    const handleHideCharacter = () => {
        if (!writerRef.current) return;
        writerRef.current.hideCharacter();
    };

    const handleQuiz = () => {
        if (!writerRef.current) return;
        writerRef.current.quiz({
            onComplete: (summaryData) => {
                console.log('Quiz completed:', summaryData);
                onComplete?.(summaryData);
            }
        });
    };

    return (
        <div className="stroke-animation-container">
            <div className="stroke-animation-header">
                <h3 className="pixel-text">笔顺学习</h3>
                <span className="stroke-character">{character}</span>
            </div>

            <div className="stroke-canvas-wrapper">
                {isLoading && (
                    <div className="stroke-loading">
                        <div className="loading-spinner"></div>
                        <span>加载中...</span>
                    </div>
                )}

                {error && (
                    <div className="stroke-error">
                        <span className="error-icon">⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <div
                    ref={containerRef}
                    className="stroke-canvas"
                    style={{ visibility: isLoading ? 'hidden' : 'visible' }}
                />
            </div>

            <div className="stroke-controls">
                <button
                    className="mc-button mc-button-primary"
                    onClick={handleAnimate}
                    disabled={isPlaying || isLoading || error}
                >
                    {isPlaying ? '播放中...' : '▶ 播放笔顺'}
                </button>

                <button
                    className="mc-button"
                    onClick={handleShowCharacter}
                    disabled={isLoading || error}
                >
                    显示汉字
                </button>

                <button
                    className="mc-button"
                    onClick={handleHideCharacter}
                    disabled={isLoading || error}
                >
                    隐藏汉字
                </button>

                <button
                    className="mc-button mc-button-gold"
                    onClick={handleQuiz}
                    disabled={isPlaying || isLoading || error}
                >
                    ✏️ 练习写字
                </button>
            </div>

            <div className="stroke-tip">
                <span className="pixel-text">提示: 点击"练习写字"可以在框内练习书写!</span>
            </div>
        </div>
    );
};

export default StrokeAnimation;
