import { useState, useEffect } from 'react';
import { getProgress, getStats, getAchievements, ACHIEVEMENTS, checkAndUnlockAchievements } from '../utils/storage';
import characters from '../data/characters';
import './ProgressTracker.css';

/**
 * 学习进度追踪组件
 */
const ProgressTracker = ({ onCharacterClick }) => {
    const [stats, setStats] = useState(null);
    const [progress, setProgress] = useState(null);
    const [unlockedAchievements, setUnlockedAchievements] = useState([]);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const currentStats = getStats();
        const currentProgress = getProgress();
        const achievements = getAchievements();

        setStats(currentStats);
        setProgress(currentProgress);
        setUnlockedAchievements(achievements);

        // 检查是否有新成就
        checkAndUnlockAchievements();
    };

    const calculatePercentage = () => {
        if (!stats) return 0;
        return Math.round((stats.learnedCount / characters.length) * 100);
    };

    if (!stats || !progress) {
        return (
            <div className="progress-tracker loading">
                <span className="pixel-text">加载中...</span>
            </div>
        );
    }

    return (
        <div className="progress-tracker">
            {/* 统计概览 */}
            <div className="progress-overview">
                <h2 className="pixel-text">学习进度</h2>

                <div className="progress-main">
                    <div className="progress-container large">
                        <div
                            className="progress-bar"
                            style={{ width: `${calculatePercentage()}%` }}
                            data-progress={`${calculatePercentage()}%`}
                        />
                    </div>
                    <p className="progress-label pixel-text">
                        已学习 {stats.learnedCount} / {characters.length} 个汉字
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">{stats.learnedCount}</div>
                        <div className="stat-label">已学会</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{stats.inProgressCount}</div>
                        <div className="stat-label">学习中</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{stats.streakDays}</div>
                        <div className="stat-label">连续天数</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{stats.reviewCount}</div>
                        <div className="stat-label">待复习</div>
                    </div>
                </div>
            </div>

            {/* 标签页 */}
            <div className="progress-tabs">
                <button
                    className={`category-tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    总览
                </button>
                <button
                    className={`category-tab ${activeTab === 'learned' ? 'active' : ''}`}
                    onClick={() => setActiveTab('learned')}
                >
                    已学会
                </button>
                <button
                    className={`category-tab ${activeTab === 'achievements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('achievements')}
                >
                    成就
                </button>
            </div>

            {/* 内容区域 */}
            <div className="progress-content">
                {activeTab === 'overview' && (
                    <div className="progress-section">
                        <h3 className="pixel-text">今日目标</h3>
                        <div className="daily-goal">
                            <div className="goal-progress">
                                <span className="goal-current">{Math.min(stats.learnedCount, 10)}</span>
                                <span className="goal-divider">/</span>
                                <span className="goal-target">10</span>
                            </div>
                            <p className="pixel-text">每天学习10个新汉字</p>
                        </div>
                    </div>
                )}

                {activeTab === 'learned' && (
                    <div className="progress-section">
                        <h3 className="pixel-text">已学会的汉字</h3>
                        {progress.learned.length === 0 ? (
                            <p className="empty-message pixel-text">还没有学会任何汉字，开始学习吧!</p>
                        ) : (
                            <div className="character-grid">
                                {progress.learned.map((charIndex) => {
                                    const char = characters[charIndex];
                                    if (!char) return null;
                                    return (
                                        <div
                                            key={charIndex}
                                            className="character-cell learned"
                                            onClick={() => onCharacterClick?.(char)}
                                            title={`${char.char} - ${char.pinyin}`}
                                        >
                                            {char.char}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'achievements' && (
                    <div className="progress-section">
                        <h3 className="pixel-text">成就徽章</h3>
                        <div className="achievements-grid">
                            {Object.values(ACHIEVEMENTS).map((achievement) => {
                                const isUnlocked = unlockedAchievements.includes(achievement.id);
                                return (
                                    <div
                                        key={achievement.id}
                                        className={`achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`}
                                    >
                                        <div className={`achievement-badge ${isUnlocked ? '' : 'locked'}`}>
                                            {achievement.icon}
                                        </div>
                                        <div className="achievement-info">
                                            <span className="achievement-name">{achievement.name}</span>
                                            <span className="achievement-desc">{achievement.description}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressTracker;
