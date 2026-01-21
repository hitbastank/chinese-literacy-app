import { useState, useEffect, useCallback } from 'react';
import { getRandomQuestions } from '../data/battleQuestions';
import { speak } from '../utils/speech';
import './BattleGame.css';

/**
 * Minecraft 风格对战游戏组件
 * Steve vs Zombie - 回合制问答对战
 */
const BattleGame = ({ onComplete }) => {
    // 游戏状态
    const [playerHP, setPlayerHP] = useState(10);
    const [enemyHP, setEnemyHP] = useState(100);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [gameState, setGameState] = useState('playing'); // 'playing', 'victory', 'gameOver'

    // 动画状态
    const [isAttacking, setIsAttacking] = useState(false);
    const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'
    const [isPlaying, setIsPlaying] = useState(false); // TTS playing state

    // 初始化游戏
    useEffect(() => {
        initGame();
    }, []);

    const initGame = useCallback(() => {
        setQuestions(getRandomQuestions(10));
        setPlayerHP(10);
        setEnemyHP(100);
        setCurrentQuestionIndex(0);
        setGameState('playing');
        setSelectedAnswer(null);
        setShowCorrectAnswer(null);
        setFeedback(null);
    }, []);

    // 处理答案选择
    const handleAnswer = (optionIndex) => {
        if (selectedAnswer !== null || gameState !== 'playing') return;

        const currentQuestion = questions[currentQuestionIndex];
        const clickedChar = currentQuestion.options[optionIndex];
        const isCorrect = optionIndex === currentQuestion.answer;

        // 朗读点击的汉字
        speak(clickedChar, { rate: 0.7 });

        setSelectedAnswer(optionIndex);
        setFeedback(isCorrect ? 'correct' : 'wrong');

        if (isCorrect) {
            // 正确答案 - 攻击敌人
            setIsAttacking(true);

            setTimeout(() => {
                const newEnemyHP = Math.max(0, enemyHP - 20);
                setEnemyHP(newEnemyHP);
                setIsAttacking(false);

                if (newEnemyHP <= 0) {
                    setGameState('victory');
                    onComplete?.({ victory: true, remainingHP: playerHP });
                } else {
                    // 下一题
                    setTimeout(() => nextQuestion(), 800);
                }
            }, 500);
        } else {
            // 错误答案 - 僵尸攻击玩家
            setIsEnemyAttacking(true);
            setIsShaking(true);
            setShowCorrectAnswer(currentQuestion.answer);

            setTimeout(() => {
                const newPlayerHP = Math.max(0, playerHP - 1);
                setPlayerHP(newPlayerHP);
                setIsShaking(false);
                setIsEnemyAttacking(false);

                if (newPlayerHP <= 0) {
                    setGameState('gameOver');
                    onComplete?.({ victory: false, remainingHP: 0 });
                } else {
                    // 下一题
                    setTimeout(() => nextQuestion(), 1200);
                }
            }, 600);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowCorrectAnswer(null);
            setFeedback(null);
        } else {
            // 题目用完，玩家获胜
            setGameState('victory');
            onComplete?.({ victory: true, remainingHP: playerHP });
        }
    };

    // 渲染血量条
    const renderHPBar = (current, max, type) => {
        // 统一显示10颗心
        const heartCount = 10;
        const hpPerHeart = max / heartCount;
        const filledHearts = Math.ceil(current / hpPerHeart);
        const emptyHearts = heartCount - filledHearts;
        const heartIcon = type === 'player' ? '\u2764\ufe0f' : '\ud83d\udc9a';
        const emptyIcon = type === 'player' ? '\ud83d\udda4' : '\ud83e\udd0d';

        return (
            <div className={`hp-bar-container ${type}`}>
                <div className="hp-bar-label">
                    {type === 'player' ? '\ud83e\uddd1 Steve' : '\ud83e\udddf Zombie'}
                </div>
                <div className="hp-bar-text">
                    <span className="hearts">
                        {heartIcon.repeat(filledHearts)}{emptyIcon.repeat(emptyHearts)}
                    </span>
                    <span className="hp-numbers">{current}/{max}</span>
                </div>
            </div>
        );
    };

    // 朗读题目
    const readQuestion = async () => {
        if (isPlaying || !questions[currentQuestionIndex]) return;
        setIsPlaying(true);
        try {
            // 把下划线替换成"什么"来朗读
            const text = questions[currentQuestionIndex].question.replace(/_+/g, '什么');
            await speak(text, { rate: 0.9 });
        } finally {
            setIsPlaying(false);
        }
    };

    // 渲染游戏结束画面
    if (gameState === 'victory') {
        return (
            <div className="battle-game battle-victory">
                <div className="victory-content">
                    <h1 className="pixel-title victory-title">⭐ VICTORY! ⭐</h1>
                    <div className="victory-reward">
                        <span className="diamond-icon">💎</span>
                        <p className="pixel-text">获得钻石 x3!</p>
                    </div>
                    <p className="victory-stats pixel-text">
                        剩余生命: {playerHP}/10
                    </p>
                    <button className="mc-button mc-button-gold" onClick={initGame}>
                        🔄 再来一局
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'gameOver') {
        return (
            <div className="battle-game battle-gameover">
                <div className="gameover-content">
                    <h1 className="pixel-title gameover-title">💀 GAME OVER 💀</h1>
                    <p className="pixel-text gameover-text">
                        你被僵尸打败了...
                    </p>
                    <p className="pixel-text">
                        敌人剩余血量: {enemyHP}/100
                    </p>
                    <button className="mc-button mc-button-primary" onClick={initGame}>
                        🔄 重新挑战
                    </button>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="battle-game battle-loading">
                <p className="pixel-text">加载中...</p>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className={`battle-game ${isShaking ? 'shake' : ''}`}>
            {/* 战斗区域 */}
            <div className="battle-arena">
                {/* HP 条 */}
                <div className="hp-section">
                    {renderHPBar(playerHP, 10, 'player')}
                    {renderHPBar(enemyHP, 100, 'enemy')}
                </div>

                {/* 角色区域 */}
                <div className="characters-area">
                    <div className={`character player-character ${isAttacking ? 'attacking' : ''} ${isEnemyAttacking ? 'hit' : ''}`}>
                        <img src="/assets/images/steve_head.png" alt="Steve" className="character-sprite" />
                        <div className="character-name pixel-text">Steve</div>
                    </div>

                    <div className="battle-effects">
                        {isAttacking && <span className="attack-effect">⚔️ -20</span>}
                        {isShaking && <span className="damage-effect">💥 -1</span>}
                    </div>

                    <div className={`character enemy-character ${isAttacking ? 'hit' : ''} ${isEnemyAttacking ? 'attacking' : ''}`}>
                        <img src="/assets/images/zombie_head.png" alt="Zombie" className="character-sprite" />
                        <div className="character-name pixel-text">Zombie</div>
                    </div>
                </div>
            </div>

            {/* 题目区域 */}
            <div className="question-section" onClick={readQuestion} style={{ cursor: 'pointer' }}>
                <div className="question-progress pixel-text">
                    题目 {currentQuestionIndex + 1}/{questions.length}
                    <span className="tts-hint"> 🔊 点击朗读</span>
                </div>
                <div className="question-text pixel-text">
                    {currentQuestion.question}
                </div>
            </div>

            {/* 选项按钮 */}
            <div className="options-grid">
                {currentQuestion.options.map((option, index) => {
                    let optionClass = 'option-button';

                    if (selectedAnswer !== null) {
                        if (index === currentQuestion.answer) {
                            optionClass += ' correct';
                        } else if (index === selectedAnswer) {
                            optionClass += ' wrong';
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={optionClass}
                            onClick={() => handleAnswer(index)}
                            disabled={selectedAnswer !== null}
                        >
                            <span className="option-char">{option}</span>
                        </button>
                    );
                })}
            </div>

            {/* 反馈提示 */}
            {feedback && (
                <div className={`battle-feedback ${feedback}`}>
                    {feedback === 'correct' ? '✓ 正确！攻击！' : '✗ 错误！受到攻击！'}
                </div>
            )}
        </div>
    );
};

export default BattleGame;
