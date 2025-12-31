import { Link } from 'react-router-dom';
import { getStats } from '../utils/storage';
import characters, { getTotalCount, getCategoryStats } from '../data/characters';
import './Home.css';

/**
 * 首页
 */
const Home = () => {
    const stats = getStats();
    const totalChars = getTotalCount();
    const categoryStats = getCategoryStats();

    return (
        <div className="page-container home-page">
            {/* Hero区域 */}
            <section className="hero">
                <div className="hero-mascot">
                    <div className="mascot-pixel">
                        🎓
                    </div>
                </div>

                <h1 className="hero-title pixel-text">识字冒险</h1>
                <p className="hero-subtitle">
                    和小伙伴一起，开启有趣的汉字学习之旅！
                    <br />
                    像玩游戏一样轻松学会 {totalChars} 个常用汉字
                </p>

                <div className="hero-buttons">
                    <Link to="/learn" className="mc-button mc-button-primary">
                        📖 开始学习
                    </Link>
                    <Link to="/games" className="mc-button mc-button-gold">
                        🎮 趣味游戏
                    </Link>
                </div>
            </section>

            {/* 进度概览 */}
            <section className="home-section">
                <h2 className="section-title pixel-text">📊 我的进度</h2>
                <div className="stats-overview">
                    <div className="stat-card highlight">
                        <div className="stat-value">{stats.learnedCount}</div>
                        <div className="stat-label">已学会</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{stats.streakDays}</div>
                        <div className="stat-label">连续天数</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{totalChars}</div>
                        <div className="stat-label">总汉字数</div>
                    </div>
                </div>

                <div className="progress-preview">
                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${Math.round((stats.learnedCount / totalChars) * 100)}%` }}
                            data-progress={`${Math.round((stats.learnedCount / totalChars) * 100)}%`}
                        />
                    </div>
                </div>
            </section>

            {/* 功能模块 */}
            <section className="home-section">
                <h2 className="section-title pixel-text">🚀 学习模块</h2>
                <div className="feature-grid">
                    <Link to="/learn" className="feature-card">
                        <div className="feature-icon">📖</div>
                        <h3 className="feature-title">识字卡片</h3>
                        <p className="feature-desc">看汉字，猜拼音，听发音</p>
                    </Link>

                    <Link to="/learn?mode=stroke" className="feature-card">
                        <div className="feature-icon">✍️</div>
                        <h3 className="feature-title">笔顺学习</h3>
                        <p className="feature-desc">学习正确的书写笔顺</p>
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

            {/* 分类展示 */}
            <section className="home-section">
                <h2 className="section-title pixel-text">📚 汉字分类</h2>
                <div className="category-preview">
                    {Object.entries(categoryStats).slice(0, 6).map(([category, count]) => (
                        <div key={category} className="category-item">
                            <span className="category-name">{category}</span>
                            <span className="category-count">{count}个</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 底部提示 */}
            <section className="home-tip">
                <div className="tip-content">
                    <span className="tip-icon">💡</span>
                    <p className="pixel-text">提示: 每天学习10个新字，坚持就是胜利！</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
