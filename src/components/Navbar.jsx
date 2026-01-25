import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                {/* 左侧：导航按钮 */}
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
                            to="/games"
                            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                        >
                            游戏
                        </NavLink>
                    </li>
                </ul>

                {/* 中间：Logo居中 */}
                <div className="navbar-logo">
                    <img src="/logo.png" alt="IAN CHINESE" className="navbar-logo-img" />
                </div>

                {/* 右侧：进度数字（可点击查看进度） */}
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

                    <Link to="/curriculum" className="stat-badge chinese-badge" title="汉字学习进度">
                        <span className="stat-icon">🇨🇳</span>
                        <span className="stat-value">{stats.chineseLearnedCount}</span>
                    </Link>

                    <Link to="/english" className="stat-badge english-badge" title="English Progress">
                        <span className="stat-icon">🇬🇧</span>
                        <span className="stat-value">{stats.englishLearnedCount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
