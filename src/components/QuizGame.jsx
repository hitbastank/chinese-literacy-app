import { useState, useEffect, useCallback } from 'react';
import { speak } from '../utils/speech';
import './QuizGame.css';

/**
 * 选择题游戏组件
 * 支持看图选词和听音选字
 */
const QuizGame = ({
    characters,
    questionCount = 10,
    onComplete,
    onCorrect,
    onWrong
}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [gameComplete, setGameComplete] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // 生成问题
    useEffect(() => {
        if (characters && characters.length >= 4) {
            generateQuestions();
        }
    }, [characters, questionCount]);

    const generateQuestions = useCallback(() => {
        const shuffled = [...characters].sort(() => Math.random() - 0.5);
        const newQuestions = [];

        for (let i = 0; i < Math.min(questionCount, shuffled.length); i++) {
            const correctChar = shuffled[i];

            // 获取3个错误选项
            const wrongOptions = shuffled
                .filter(c => c.char !== correctChar.char)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            const options = [correctChar, ...wrongOptions].sort(() => Math.random() - 0.5);

            // 随机选择题目类型
            const questionType = Math.random() > 0.5 ? 'pinyin' : 'meaning';

            newQuestions.push({
                type: questionType,
                correctAnswer: correctChar,
                options: options,
                question: questionType === 'pinyin'
                    ? `哪个字的拼音是 "${correctChar.pinyin}"?`
                    : `哪个字的意思是 "${correctChar.meaning}"?`
            });
        }

        setQuestions(newQuestions);
        setCurrentQuestion(0);
        setScore(0);
        setGameComplete(false);
        setSelectedAnswer(null);
        setShowResult(false);
    }, [characters, questionCount]);

    const handleAnswer = (option) => {
        if (showResult) return;

        setSelectedAnswer(option);
        setShowResult(true);

        const isCorrect = option.char === questions[currentQuestion].correctAnswer.char;

        if (isCorrect) {
            setScore(prev => prev + 1);
            onCorrect?.(questions[currentQuestion].correctAnswer);
            // 播放成功音效 (如果有的话，这里可以集成更丰富的音效)
            speak('✓', { rate: 2.0, pitch: 1.5 });
        } else {
            onWrong?.(questions[currentQuestion].correctAnswer);
            speak('✗', { rate: 2.0, pitch: 0.5 });
        }

        // 延迟进入下一题
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
                setShowResult(false);
            } else {
                setGameComplete(true);
                onComplete?.({ score: score + (isCorrect ? 1 : 0), total: questions.length });
            }
        }, 1200);
    };

    const playPronunciation = async () => {
        if (isPlaying || !questions[currentQuestion]) return;

        setIsPlaying(true);
        try {
            await speak(questions[currentQuestion].correctAnswer.char, { rate: 0.5 });
        } catch (error) {
            console.error('播放失败:', error);
        } finally {
            setIsPlaying(false);
        }
    };

    const restartGame = () => {
        generateQuestions();
    };

    if (!characters || characters.length < 4) {
        return (
            <div className="quiz-game quiz-game-empty">
                <p className="pixel-text">需要至少4个汉字才能开始游戏</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="quiz-game quiz-game-loading">
                <p className="pixel-text">加载中...</p>
            </div>
        );
    }

    if (gameComplete) {
        const percentage = Math.round((score / questions.length) * 100);
        const isPerfect = score === questions.length;

        return (
            <div className="quiz-game quiz-game-complete">
                <div className="quiz-result-card">
                    <h2 className="pixel-text">
                        {isPerfect ? '🏆 太棒了!' : score >= questions.length * 0.7 ? '⭐ 做得好!' : '💪 继续加油!'}
                    </h2>

                    <div className="quiz-score-display">
                        <span className="score-number">{score}</span>
                        <span className="score-divider">/</span>
                        <span className="score-total">{questions.length}</span>
                    </div>

                    <div className="quiz-percentage">
                        正确率: {percentage}%
                    </div>

                    <div className="quiz-result-actions">
                        <button className="mc-button mc-button-primary" onClick={restartGame}>
                            🔄 再玩一次
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="quiz-game">
            {/* 进度条 */}
            <div className="quiz-progress">
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        data-progress={`${currentQuestion + 1}/${questions.length}`}
                    />
                </div>
                <div className="quiz-score-mini">
                    得分: <span className="score-value">{score}</span>
                </div>
            </div>

            {/* 问题区域 */}
            <div className="quiz-question-area">
                <h3 className="quiz-question pixel-text">
                    {currentQ.question}
                </h3>

                <button
                    className="mc-button quiz-sound-btn"
                    onClick={playPronunciation}
                    disabled={isPlaying}
                >
                    {isPlaying ? '🔊 播放中...' : '🔊 听发音'}
                </button>
            </div>

            {/* 选项区域 */}
            <div className="quiz-options">
                {currentQ.options.map((option, index) => {
                    let optionClass = 'quiz-option';

                    if (showResult) {
                        if (option.char === currentQ.correctAnswer.char) {
                            optionClass += ' correct';
                        } else if (selectedAnswer && option.char === selectedAnswer.char) {
                            optionClass += ' wrong';
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={optionClass}
                            onClick={() => handleAnswer(option)}
                            disabled={showResult}
                        >
                            <span className="option-char">{option.char}</span>
                            {showResult && option.char === currentQ.correctAnswer.char && (
                                <span className="option-pinyin">{option.pinyin}</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* 反馈提示 */}
            {showResult && (
                <div className={`quiz-feedback ${selectedAnswer?.char === currentQ.correctAnswer.char ? 'correct' : 'wrong'}`}>
                    {selectedAnswer?.char === currentQ.correctAnswer.char
                        ? '✓ 正确!'
                        : `✗ 正确答案是: ${currentQ.correctAnswer.char}`
                    }
                </div>
            )}
        </div>
    );
};

export default QuizGame;
