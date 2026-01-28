import { Link } from 'react-router-dom';
import { getStats } from '../utils/storage';
import { getTotalCount as getTotalChineseCount, getCategoryStats } from '../data/characters';
import { getTotalCount as getTotalEnglishCount } from '../data/englishWords';
import './Home.css';

/**
 * 首页 - 模块化布局
 */
const Home = () => {
    const stats = getStats();
    const totalChineseChars = getTotalChineseCount();
    const totalEnglishWords = getTotalEnglishCount();
    const categoryStats = getCategoryStats();

    // Calculate percentages
    const chinesePercent = Math.round((stats.chineseLearnedCount / totalChineseChars) * 100);
    const englishPercent = Math.round((stats.englishLearnedCount / totalEnglishWords) * 100);

    return (
        <div className="page-container home-page">
            {/* 模块1: 标题 + 主按钮 */}
            <section className="glass-module hero-module">
                <div className="hero-mascot">
                    <div className="mascot-pixel">🎓</div>
                </div>
                <h1 className="hero-title pixel-text">识字冒险</h1>
                <p className="hero-subtitle">
                    和小伙伴一起，开启有趣的汉字学习之旅！
                    <br />
                    像玩游戏一样轻松学会常用汉字和英语单词
                </p>
                <div className="hero-buttons">
                    <Link to="/curriculum" className="mc-button mc-button-primary">
                        📚 汉字学习
                    </Link>
                    <Link to="/english" className="mc-button mc-button-gold">
                        📖 English Learning
                    </Link>
                </div>
            </section>

            {/* 模块2: 我的进度 */}
            <section className="glass-module progress-module">
                <h2 className="module-title">📊 我的进度</h2>
                <div className="stats-overview">
                    <div className="stat-card highlight">
                        <div className="stat-value">{stats.learnedCount}</div>
                        <div className="stat-label">总学会</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{stats.streakDays}</div>
                        <div className="stat-label">连续天数</div>
                    </div>
                </div>

                {/* Chinese Progress */}
                <div className="progress-section">
                    <div className="progress-container">
                        <div
                            className="progress-bar chinese-bar"
                            style={{ width: `${chinesePercent}%` }}
                        />
                        <div className="progress-info-overlay">
                            <span className="progress-label">🇨🇳 汉字 ({stats.chineseLearnedCount}/{totalChineseChars})</span>
                            <span className="progress-percent">{chinesePercent}%</span>
                        </div>
                    </div>
                </div>

                {/* English Progress */}
                <div className="progress-section">
                    <div className="progress-container">
                        <div
                            className="progress-bar english-bar"
                            style={{ width: `${englishPercent}%` }}
                        />
                        <div className="progress-info-overlay">
                            <span className="progress-label">🇬🇧 English ({stats.englishLearnedCount}/{totalEnglishWords})</span>
                            <span className="progress-percent">{englishPercent}%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 模块3: 学习模块 */}
            <section className="glass-module learning-module">
                <h2 className="module-title">🚀 学习模块</h2>
                <div className="feature-grid">
                    <Link to="/curriculum" className="feature-card highlight">
                        <div className="feature-icon">📚</div>
                        <h3 className="feature-title">汉字学习</h3>
                        <p className="feature-desc">分级课程，Minecraft主题</p>
                    </Link>
                    <Link to="/learn" className="feature-card">
                        <div className="feature-icon">🃏</div>
                        <h3 className="feature-title">闪卡学习</h3>
                        <p className="feature-desc">翻卡片学汉字拼音</p>
                    </Link>
                    <Link to="/games?type=quiz" className="feature-card">
                        <div className="feature-icon">❓</div>
                        <h3 className="feature-title">选择题</h3>
                        <p className="feature-desc">测试学习成果</p>
                    </Link>
                    <Link to="/games?type=matching" className="feature-card">
                        <div className="feature-icon">🔗</div>
                        <h3 className="feature-title">连线游戏</h3>
                        <p className="feature-desc">汉字配拼音</p>
                    </Link>
                </div>
            </section>

            {/* Footer: 汉字分类 + 提示 */}
            <footer className="home-footer">
                <div className="footer-categories">
                    <span className="footer-label">汉字分类：</span>
                    {Object.entries(categoryStats).slice(0, 6).map(([category, count], index) => (
                        <span key={category}>
                            <Link to={`/learn?category=${encodeURIComponent(category)}`} className="footer-link">
                                {category}({count})
                            </Link>
                            {index < 5 && <span className="footer-separator">·</span>}
                        </span>
                    ))}
                </div>
                <div className="footer-tip">
                    💡 提示：每天学习10个新字，坚持就是胜利！
                </div>
            </footer>
        </div>
    );
};

export default Home;
