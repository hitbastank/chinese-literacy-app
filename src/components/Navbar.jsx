import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getStats, getSyncStatus, onSyncStatusChange } from '../utils/storage';
import { isFirebaseConfigured } from '../firebase';
import './Navbar.css';

/**
 * 导航栏组件
 */
const Navbar = () => {
    const stats = getStats();
    const [syncStatus, setSyncStatus] = useState(getSyncStatus());

    useEffect(() => {
        const unsubscribe = onSyncStatusChange(setSyncStatus);
        return unsubscribe;
    }, []);

    const getSyncIcon = () => {
        if (!isFirebaseConfigured()) return null;
        switch (syncStatus) {
            case 'syncing': return '↻';
            case 'synced': return '☁️';
            case 'error': return '⚠️';
            default: return '☁️';
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
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
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/learn"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                        >
                            学习
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/games"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                        >
                            游戏
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/progress"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                        >
                            进度
                        </NavLink>
                    </li>
                </ul>

                <div className="navbar-stats">
                    {getSyncIcon() && (
                        <span className={`sync-indicator ${syncStatus}`} title={
                            syncStatus === 'syncing' ? '同步中...' :
                                syncStatus === 'synced' ? '已同步' :
                                    syncStatus === 'error' ? '同步失败' : ''
                        }>
                            {getSyncIcon()}
                        </span>
                    )}
                    <span className="stat-badge">
                        <span className="stat-icon">⭐</span>
                        <span className="stat-value">{stats.learnedCount}</span>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
