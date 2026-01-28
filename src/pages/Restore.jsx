import { useState, useEffect } from 'react';
import { db, getCollectionName, isProduction } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import './Home.css';

const USER_UID = 'user-mantou-2026';

/**
 * 数据恢复工具页面
 * 用于查看和恢复 Firebase 中的用户数据
 */
const Restore = () => {
    const [devData, setDevData] = useState(null);
    const [prodData, setProdData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [currentCollection, setCurrentCollection] = useState('');

    useEffect(() => {
        setCurrentCollection(getCollectionName());
        loadAllData();
    }, []);

    const loadAllData = async () => {
        setLoading(true);
        try {
            // 加载开发环境数据
            const devDocRef = doc(db, 'dev_users', USER_UID);
            const devSnap = await getDoc(devDocRef);
            if (devSnap.exists()) {
                setDevData(devSnap.data());
            }

            // 加载生产环境数据
            const prodDocRef = doc(db, 'users', USER_UID);
            const prodSnap = await getDoc(prodDocRef);
            if (prodSnap.exists()) {
                setProdData(prodSnap.data());
            }
        } catch (error) {
            console.error('加载数据失败:', error);
            setMessage('❌ 加载数据失败: ' + error.message);
        }
        setLoading(false);
    };

    const copyDevToProd = async () => {
        if (!devData) {
            setMessage('❌ 开发环境没有数据');
            return;
        }
        if (!window.confirm('确定要将开发环境数据复制到生产环境吗？这会覆盖生产数据！')) {
            return;
        }
        try {
            const prodDocRef = doc(db, 'users', USER_UID);
            await setDoc(prodDocRef, {
                ...devData,
                updatedAt: serverTimestamp(),
                restoredFrom: 'dev_users',
                restoredAt: new Date().toISOString()
            });
            setMessage('✅ 已将开发数据复制到生产环境');
            await loadAllData();
        } catch (error) {
            setMessage('❌ 复制失败: ' + error.message);
        }
    };

    const copyProdToDev = async () => {
        if (!prodData) {
            setMessage('❌ 生产环境没有数据');
            return;
        }
        if (!window.confirm('确定要将生产环境数据复制到开发环境吗？这会覆盖开发数据！')) {
            return;
        }
        try {
            const devDocRef = doc(db, 'dev_users', USER_UID);
            await setDoc(devDocRef, {
                ...prodData,
                updatedAt: serverTimestamp(),
                restoredFrom: 'users',
                restoredAt: new Date().toISOString()
            });
            setMessage('✅ 已将生产数据复制到开发环境');
            await loadAllData();
        } catch (error) {
            setMessage('❌ 复制失败: ' + error.message);
        }
    };

    const resetCurrentEnv = async () => {
        const envName = isProduction() ? '生产环境' : '开发环境';
        const confirmMsg = `⚠️ 确定要重置${envName}的所有数据吗？\n\n这将清空所有学习进度，此操作不可撤销！\n\n请输入 "重置" 确认：`;
        const input = window.prompt(confirmMsg);

        if (input !== '重置') {
            setMessage('❌ 已取消重置操作');
            return;
        }

        try {
            const targetCollection = getCollectionName();
            const docRef = doc(db, targetCollection, USER_UID);
            const emptyData = {
                progress: {
                    mastered: [],
                    studied: {},
                    needsReview: [],
                    totalStudyTime: 0,
                    streakDays: 0,
                    lastStudyDate: null
                },
                settings: {},
                achievements: [],
                updatedAt: serverTimestamp(),
                _resetAt: new Date().toISOString(),
                _env: isProduction() ? 'prod' : 'dev'
            };
            await setDoc(docRef, emptyData);
            setMessage(`✅ ${envName}数据已重置`);

            // 同时清空本地存储
            localStorage.removeItem('chinese_literacy_progress');
            localStorage.removeItem('chinese_literacy_settings');
            localStorage.removeItem('chinese_literacy_achievements');

            await loadAllData();
        } catch (error) {
            setMessage('❌ 重置失败: ' + error.message);
        }
    };

    const formatData = (data) => {
        if (!data) return '无数据';
        const summary = {
            mastered: data.progress?.mastered?.length || 0,
            studied: Object.keys(data.progress?.studied || {}).length,
            needsReview: data.progress?.needsReview?.length || 0,
            streakDays: data.progress?.streakDays || 0,
            lastStudyDate: data.progress?.lastStudyDate || '无',
            updatedAt: data.updatedAt?.toDate?.()?.toLocaleString() || data.updatedAt || '无'
        };
        return summary;
    };

    const DataCard = ({ title, data, isActive }) => {
        const summary = formatData(data);
        return (
            <div className={`glass-module ${isActive ? 'active-collection' : ''}`} style={{ flex: 1 }}>
                <h3 className="module-title">
                    {title} {isActive && '(当前使用)'}
                </h3>
                {data ? (
                    <div style={{ color: '#fff', fontSize: '0.9rem', lineHeight: 1.8 }}>
                        <p>📚 已掌握: <strong style={{ color: '#20e39a' }}>{summary.mastered}</strong> 个字</p>
                        <p>📖 已学习: <strong style={{ color: '#4dabf7' }}>{summary.studied}</strong> 个字</p>
                        <p>🔄 待复习: <strong style={{ color: '#ffd93d' }}>{summary.needsReview}</strong> 个字</p>
                        <p>🔥 连续学习: <strong>{summary.streakDays}</strong> 天</p>
                        <p>📅 最后学习: {summary.lastStudyDate}</p>
                        <p>⏰ 更新时间: {summary.updatedAt}</p>
                    </div>
                ) : (
                    <p style={{ color: '#888' }}>无数据</p>
                )}
            </div>
        );
    };

    return (
        <div className="page-container home-page">
            <section className="glass-module" style={{ maxWidth: 800 }}>
                <h2 className="module-title">🔧 数据恢复工具</h2>
                <p style={{ color: '#fff', marginBottom: 16, textAlign: 'center' }}>
                    当前环境: <strong style={{ color: isProduction() ? '#20e39a' : '#ffd93d' }}>
                        {isProduction() ? '生产环境' : '开发环境'}
                    </strong>
                    &nbsp;|&nbsp;
                    集合: <strong style={{ color: '#4dabf7' }}>{currentCollection}</strong>
                </p>

                {message && (
                    <p style={{
                        padding: 12,
                        background: message.includes('✅') ? 'rgba(32, 227, 154, 0.2)' : 'rgba(255, 107, 107, 0.2)',
                        borderRadius: 8,
                        textAlign: 'center',
                        color: '#fff',
                        marginBottom: 16
                    }}>
                        {message}
                    </p>
                )}
            </section>

            {loading ? (
                <p style={{ color: '#fff' }}>加载中...</p>
            ) : (
                <>
                    <div style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 800 }}>
                        <DataCard
                            title="🧪 开发环境 (dev_users)"
                            data={devData}
                            isActive={currentCollection === 'dev_users'}
                        />
                        <DataCard
                            title="🚀 生产环境 (users)"
                            data={prodData}
                            isActive={currentCollection === 'users'}
                        />
                    </div>

                    <section className="glass-module" style={{ maxWidth: 800 }}>
                        <h3 className="module-title">数据操作</h3>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="mc-button" onClick={loadAllData}>
                                🔄 刷新数据
                            </button>
                            <button className="mc-button mc-button-gold" onClick={copyDevToProd}>
                                📤 开发 → 生产
                            </button>
                            <button className="mc-button mc-button-primary" onClick={copyProdToDev}>
                                📥 生产 → 开发
                            </button>
                        </div>

                        <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: 12 }}>🗑️ 危险操作</h4>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button
                                    className="mc-button"
                                    onClick={resetCurrentEnv}
                                    style={{ background: '#c0392b', borderColor: '#922b21' }}
                                >
                                    ⚠️ 重置{isProduction() ? '生产' : '开发'}环境数据
                                </button>
                            </div>
                            <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: 12, textAlign: 'center' }}>
                                此操作将清空当前环境的所有学习进度，不可撤销
                            </p>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Restore;
