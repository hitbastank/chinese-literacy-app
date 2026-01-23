import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QuizGame from '../components/QuizGame';
import MatchingGame from '../components/MatchingGame';
import BattleGame from '../components/BattleGame';
import characters, { getRandomCharacters, EXTENDED_CATEGORIES } from '../data/characters';
import { markAsLearned, checkAndUnlockAchievements, unlockAchievement, ACHIEVEMENTS } from '../utils/storage';
import './Games.css';

/**
 * 游戏页面
 */
const Games = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getGameTypeFromPath = () => {
        const path = location.pathname;
        if (path.includes('/games/fight')) return 'battle';
        if (path.includes('/games/quiz')) return 'quiz';
        if (path.includes('/games/match')) return 'matching';
        if (path.includes('/games/meaning')) return 'matching-meaning';
        return 'battle';
    };

    const [gameType, setGameType] = useState(getGameTypeFromPath);
    const [gameKey, setGameKey] = useState(0);
    const [gameCharacters, setGameCharacters] = useState(() => {
        const examChars = characters.filter(c => c.category === EXTENDED_CATEGORIES.EXAM);
        if (examChars.length >= 10) {
            return [...examChars].sort(() => Math.random() - 0.5).slice(0, 20);
        }
        return getRandomCharacters(20);
    });

    useEffect(() => {
        setGameType(getGameTypeFromPath());
    }, [location.pathname]);

    const handleGameComplete = (result) => {
        console.log('Game completed:', result);
        if (result.score === result.total) {
            unlockAchievement(ACHIEVEMENTS.PERFECT_QUIZ.id);
        }
        checkAndUnlockAchievements();
    };

    const handleCorrectAnswer = (char) => {
        const globalIndex = characters.findIndex(c => c.char === char.char);
        if (globalIndex !== -1) {
            markAsLearned(globalIndex);
        }
    };

    const startNewGame = (type) => {
        const urlMap = {
            'battle': '/games/fight',
            'quiz': '/games/quiz',
            'matching': '/games/match',
            'matching-meaning': '/games/meaning'
        };
        navigate(urlMap[type] || '/games/fight');

        const examChars = characters.filter(c => c.category === EXTENDED_CATEGORIES.EXAM);
        const newChars = examChars.length >= 10
            ? [...examChars].sort(() => Math.random() - 0.5).slice(0, 20)
            : getRandomCharacters(20);

        setGameCharacters(newChars);
        setGameKey(prev => prev + 1);
    };

    return (
        <div className="page-container games-page">
            {/* 标题 + 游戏选择模块 */}
            <section className="glass-module games-header-module">
                <div className="page-title-glass">
                    <h1 className="pixel-text">🎮 趣味游戏</h1>
                    <p className="page-subtitle">边玩边学，轻松掌握汉字</p>
                </div>

                <div className="game-type-selector">
                    <button
                        className={`game-type-btn ${gameType === 'battle' ? 'active' : ''}`}
                        onClick={() => startNewGame('battle')}
                    >
                        ⚔️ 对战模式
                    </button>
                    <button
                        className={`game-type-btn ${gameType === 'quiz' ? 'active' : ''}`}
                        onClick={() => startNewGame('quiz')}
                    >
                        ❓ 选择题
                    </button>
                    <button
                        className={`game-type-btn ${gameType === 'matching' ? 'active' : ''}`}
                        onClick={() => startNewGame('matching')}
                    >
                        🔗 连线游戏
                    </button>
                    <button
                        className={`game-type-btn ${gameType === 'matching-meaning' ? 'active' : ''}`}
                        onClick={() => startNewGame('matching-meaning')}
                    >
                        📖 汉字配释义
                    </button>
                </div>
            </section>

            {/* 游戏区域模块 */}
            <section className="glass-module game-area-module">
                <div className="game-area">
                    {gameType === 'battle' && (
                        <BattleGame
                            key={`battle-${gameKey}`}
                            onComplete={handleGameComplete}
                        />
                    )}

                    {gameType === 'quiz' && (
                        <QuizGame
                            key={`quiz-${gameKey}`}
                            characters={gameCharacters}
                            questionCount={10}
                            onComplete={handleGameComplete}
                            onCorrect={handleCorrectAnswer}
                        />
                    )}

                    {gameType === 'matching' && (
                        <MatchingGame
                            key={`matching-${gameKey}`}
                            characters={gameCharacters}
                            pairCount={6}
                            matchType="pinyin"
                            onComplete={handleGameComplete}
                        />
                    )}

                    {gameType === 'matching-meaning' && (
                        <MatchingGame
                            key={`matching-meaning-${gameKey}`}
                            characters={gameCharacters}
                            pairCount={6}
                            matchType="meaning"
                            onComplete={handleGameComplete}
                        />
                    )}
                </div>
            </section>

            {/* 游戏说明 + 操作模块 */}
            <section className="glass-module game-info-module">
                <h3 className="module-title">游戏说明</h3>
                <div className="game-instructions">
                    {gameType === 'battle' && (
                        <ul>
                            <li>⚔️ Steve vs Zombie 对战模式</li>
                            <li>答对题目攻击敌人，答错会受到伤害</li>
                            <li>消灭僵尸获得胜利！</li>
                        </ul>
                    )}
                    {gameType === 'quiz' && (
                        <ul>
                            <li>根据拼音或释义选择正确的汉字</li>
                            <li>可以点击"听发音"按钮听汉字的读音</li>
                            <li>答对的汉字会自动标记为已学会</li>
                        </ul>
                    )}
                    {(gameType === 'matching' || gameType === 'matching-meaning') && (
                        <ul>
                            <li>点击左边的汉字，再点击右边对应的{gameType === 'matching' ? '拼音' : '释义'}</li>
                            <li>正确配对会变成绿色</li>
                            <li>尽量用最少的尝试次数完成所有配对</li>
                        </ul>
                    )}
                </div>

                <div className="game-actions">
                    <button
                        className="mc-button mc-button-gold"
                        onClick={() => startNewGame(gameType)}
                    >
                        🔄 换一批汉字
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Games;
