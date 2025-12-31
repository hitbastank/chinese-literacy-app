import { useState, useEffect, useCallback } from 'react';
import { speak } from '../utils/speech';
import './MatchingGame.css';

/**
 * 连线游戏组件
 * 将汉字与拼音或释义配对
 */
const MatchingGame = ({
    characters,
    pairCount = 6,
    matchType = 'pinyin', // 'pinyin' or 'meaning'
    onComplete
}) => {
    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [selectedRight, setSelectedRight] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [wrongPair, setWrongPair] = useState(null);
    const [gameComplete, setGameComplete] = useState(false);
    const [moves, setMoves] = useState(0);

    // 初始化游戏
    useEffect(() => {
        if (characters && characters.length >= pairCount) {
            initGame();
        }
    }, [characters, pairCount, matchType]);

    const initGame = useCallback(() => {
        const selected = [...characters]
            .sort(() => Math.random() - 0.5)
            .slice(0, pairCount);

        // 左边是汉字
        const left = selected.map((char, idx) => ({
            id: `left-${idx}`,
            value: char.char,
            matchId: idx,
            data: char
        })).sort(() => Math.random() - 0.5);

        // 右边是拼音或释义
        const right = selected.map((char, idx) => ({
            id: `right-${idx}`,
            value: matchType === 'pinyin' ? char.pinyin : char.meaning,
            matchId: idx,
            data: char
        })).sort(() => Math.random() - 0.5);

        setLeftItems(left);
        setRightItems(right);
        setMatchedPairs([]);
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
        setGameComplete(false);
        setMoves(0);
    }, [characters, pairCount, matchType]);

    const handleLeftClick = (item) => {
        if (matchedPairs.includes(item.matchId)) return;

        setSelectedLeft(item);
        speak(item.value, { rate: 0.7 });

        // 如果右边已选中，检查匹配
        if (selectedRight) {
            checkMatch(item, selectedRight);
        }
    };

    const handleRightClick = (item) => {
        if (matchedPairs.includes(item.matchId)) return;

        setSelectedRight(item);

        // 如果左边已选中，检查匹配
        if (selectedLeft) {
            checkMatch(selectedLeft, item);
        }
    };

    const checkMatch = (left, right) => {
        setMoves(prev => prev + 1);

        if (left.matchId === right.matchId) {
            // 匹配成功
            const newMatched = [...matchedPairs, left.matchId];
            setMatchedPairs(newMatched);
            setSelectedLeft(null);
            setSelectedRight(null);

            // 检查游戏是否完成
            if (newMatched.length === pairCount) {
                setGameComplete(true);
                onComplete?.({ moves: moves + 1, pairs: pairCount });
            }
        } else {
            // 匹配失败
            setWrongPair({ left, right });

            setTimeout(() => {
                setWrongPair(null);
                setSelectedLeft(null);
                setSelectedRight(null);
            }, 800);
        }
    };

    const getItemClass = (item, side) => {
        let className = 'matching-item';

        if (matchedPairs.includes(item.matchId)) {
            className += ' matched';
        } else if (side === 'left' && selectedLeft?.id === item.id) {
            className += ' selected';
        } else if (side === 'right' && selectedRight?.id === item.id) {
            className += ' selected';
        }

        if (wrongPair) {
            if ((side === 'left' && wrongPair.left.id === item.id) ||
                (side === 'right' && wrongPair.right.id === item.id)) {
                className += ' wrong';
            }
        }

        return className;
    };

    if (!characters || characters.length < pairCount) {
        return (
            <div className="matching-game matching-game-empty">
                <p className="pixel-text">需要至少 {pairCount} 个汉字才能开始游戏</p>
            </div>
        );
    }

    if (gameComplete) {
        const rating = moves <= pairCount ? '🏆 完美!' : moves <= pairCount * 1.5 ? '⭐ 优秀!' : '👍 不错!';

        return (
            <div className="matching-game matching-game-complete">
                <div className="matching-result">
                    <h2 className="pixel-text">{rating}</h2>
                    <p className="pixel-text">完成配对!</p>
                    <div className="matching-stats">
                        <span>尝试次数: {moves}</span>
                        <span>配对数: {pairCount}</span>
                    </div>
                    <button className="mc-button mc-button-primary" onClick={initGame}>
                        🔄 再玩一次
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="matching-game">
            <div className="matching-header">
                <h3 className="pixel-text">
                    {matchType === 'pinyin' ? '汉字配拼音' : '汉字配释义'}
                </h3>
                <div className="matching-progress">
                    <span className="pixel-text">已配对: {matchedPairs.length}/{pairCount}</span>
                </div>
            </div>

            <div className="matching-board">
                {/* 左边 - 汉字 */}
                <div className="matching-column matching-left">
                    {leftItems.map(item => (
                        <div
                            key={item.id}
                            className={getItemClass(item, 'left')}
                            onClick={() => handleLeftClick(item)}
                        >
                            <span className="matching-char">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* 连线区域 */}
                <div className="matching-lines">
                    {matchedPairs.map(matchId => {
                        const leftIdx = leftItems.findIndex(i => i.matchId === matchId);
                        const rightIdx = rightItems.findIndex(i => i.matchId === matchId);
                        return (
                            <div
                                key={matchId}
                                className="matching-line"
                                style={{
                                    '--left-pos': leftIdx,
                                    '--right-pos': rightIdx
                                }}
                            />
                        );
                    })}
                </div>

                {/* 右边 - 拼音/释义 */}
                <div className="matching-column matching-right">
                    {rightItems.map(item => (
                        <div
                            key={item.id}
                            className={getItemClass(item, 'right')}
                            onClick={() => handleRightClick(item)}
                        >
                            <span className="matching-text">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="matching-tip">
                <span className="pixel-text">点击左右两边进行配对</span>
            </div>
        </div>
    );
};

export default MatchingGame;
