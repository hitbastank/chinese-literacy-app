import { NavLink } from 'react-router-dom';
import { getStats } from '../utils/storage';
import './Navbar.css';

/**
 * 导航栏组件
 */
const Navbar = () => {
    const stats = getStats();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="navbar-icon">📚</span>
                <h1>识字冒险</h1>
            </div>

            <ul className="navbar-nav">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                    >
                        🏠 首页
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/learn"
                        className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                    >
                        📖 学习
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/games"
                        className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                    >
                        🎮 游戏
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/progress"
                        className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                    >
                        🏆 进度
                    </NavLink>
                </li>
            </ul>

            <div className="navbar-stats">
                <span className="stat-badge">
                    <span className="stat-icon">⭐</span>
                    <span className="stat-value">{stats.learnedCount}</span>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
