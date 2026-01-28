import React, { useState, useEffect } from 'react';
import { lessons } from '../data/curriculum';
import { saveProgress, getProgress, getUserId, getStats } from '../utils/storage';
import { syncToCloud, loadFromCloud, isFirebaseConfigured, isProduction, getCollectionName } from '../firebase';

const Restore = () => {
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    // Diagnostic State
    const [localCount, setLocalCount] = useState(0);
    const [cloudCount, setCloudCount] = useState('Checking...');
    const [diffInfo, setDiffInfo] = useState('');

    // Environment Safety State
    const isProd = isProduction();
    const currentCollection = getCollectionName();

    const userId = getUserId();

    // Check data on mount
    useEffect(() => {
        checkData();
    }, []);

    const checkData = async () => {
        // Check Local
        const localStats = getStats();
        setLocalCount(localStats.chineseLearnedCount || localStats.learnedCount);

        // Check Cloud
        if (isFirebaseConfigured()) {
            try {
                const cloudData = await loadFromCloud(userId);
                if (cloudData && cloudData.progress) {
                    const learned = cloudData.progress.mastered || cloudData.progress.learned || [];
                    const count = learned.length;
                    setCloudCount(count);

                    if (count !== localStats.learnedCount) {
                        setDiffInfo(`⚠️ 数据不一致: 本地(${localStats.learnedCount}) vs 云端(${count})`);
                    } else {
                        setDiffInfo('✅ 本地与云端数据一致');
                    }
                } else {
                    setCloudCount('无数据');
                }
            } catch (e) {
                setCloudCount('读取失败');
            }
        } else {
            setCloudCount('Firebase 未配置');
        }
    };

    const forceRestore = async () => {
        if (isProd) {
            alert('安全警告：当前为正式生产环境，禁止执行重置操作！');
            return;
        }
        await executeRestore(155);
    };

    const resetToZero = async () => {
        if (isProd) {
            alert('安全警告：当前为正式生产环境，禁止执行重置操作！');
            return;
        }
        if (!confirm('确定要清空所有进度吗？此操作无法撤销。')) return;
        await executeRestore(0);
    };

    const executeRestore = async (targetCount) => {
        try {
            setError('');
            setStatus(`🚀 开始重置流程 (目标: ${targetCount}字)...`);

            // 1. Calculate Target Characters
            let newStudied = {};
            let newMastered = [];
            let newLearned = [];

            if (targetCount > 0) {
                const allChars = [];
                lessons.forEach(lesson => {
                    lesson.characters.forEach(charObj => {
                        allChars.push(charObj.char);
                    });
                });

                const charsToRestore = allChars.slice(0, targetCount);
                console.log(`Target restoration: ${charsToRestore.length} chars`);

                charsToRestore.forEach(char => {
                    newStudied[char] = 5;
                    newMastered.push(char);
                    newLearned.push(char);
                });
            } else {
                console.log('Target restoration: 0 chars (Clear All)');
            }

            // 2. Construct Clean Progress Object
            const newProgress = {
                learned: newLearned,
                inProgress: [],
                reviewNeeded: [],
                mastered: newMastered,
                studied: newStudied,
                needsReview: [],
                totalStudyTime: targetCount > 0 ? 1200 : 0,
                streakDays: targetCount > 0 ? 1 : 0,
                lastStudyDate: new Date().toDateString(),
            };

            // 3. NUCLEAR WRITES

            // Write to Local Storage
            localStorage.setItem(`${userId}_chinese_literacy_progress`, JSON.stringify(newProgress));
            setStatus((s) => s + '\n✅ 本地存储已强制覆盖');

            // Write to Cloud
            if (isFirebaseConfigured()) {
                setStatus((s) => s + `\n☁️ 正在强制推送到云端 [${currentCollection}]...`);
                await syncToCloud(userId, { progress: newProgress });
                setStatus((s) => s + '\n✅ 云端数据已强制覆盖');
            }

            // 4. Verification and Reload
            setStatus((s) => s + '\n🎉 操作成功！正在重新加载数据...');

            await checkData();

            setTimeout(() => {
                alert('操作成功！即将刷新页面。');
                window.location.reload();
            }, 1000);

        } catch (err) {
            console.error(err);
            setError('致命错误: ' + err.message);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                数据诊断与恢复控制台 (v3.1 - 包含清空功能)
            </h2>

            {/* Environment Status Banner */}
            <div style={{
                padding: '10px 15px',
                marginBottom: '20px',
                borderRadius: '6px',
                backgroundColor: isProd ? '#e3f2fd' : '#fff3e0',
                border: `1px solid ${isProd ? '#2196f3' : '#ff9800'}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <strong>当前环境: </strong>
                    <span style={{ color: isProd ? '#1976d2' : '#e65100', fontWeight: 'bold' }}>
                        {isProd ? '正式生产环境 (Production)' : '测试开发环境 (Development)'}
                    </span>
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                    数据库集合: <code>{currentCollection}</code>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
                <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h3>📱 本地数据 (Local)</h3>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>
                        {localCount} <span style={{ fontSize: '16px', color: '#666' }}>字</span>
                    </div>
                </div>
                <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
                    <h3>☁️ 云端数据 (Cloud)</h3>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2' }}>
                        {cloudCount} <span style={{ fontSize: '16px', color: '#666' }}>字</span>
                    </div>
                </div>
            </div>

            {diffInfo && <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>{diffInfo}</div>}

            {/* Critical Operations Section */}
            <div style={{
                padding: '20px',
                border: `2px solid ${isProd ? '#ccc' : '#d32f2f'}`,
                borderRadius: '8px',
                background: isProd ? '#f5f5f5' : '#fffbee',
                opacity: isProd ? 0.8 : 1
            }}>
                <h3 style={{ marginTop: 0, color: isProd ? '#666' : '#d32f2f', display: 'flex', alignItems: 'center' }}>
                    {isProd ? '🔒 操作已在正式环境禁用' : '⚠️ 紧急恢复操作'}
                </h3>

                {isProd ? (
                    <p>正式环境保护已开启。需要修改数据请使用开发环境。</p>
                ) : (
                    <p>请选择要执行的操作：</p>
                )}

                <div style={{ display: 'grid', gap: '10px' }}>
                    <button
                        onClick={forceRestore}
                        disabled={isProd}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '18px',
                            backgroundColor: isProd ? '#ccc' : '#d32f2f',
                            color: isProd ? '#666' : 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: isProd ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold',
                            boxShadow: isProd ? 'none' : '0 2px 5px rgba(0,0,0,0.2)'
                        }}
                    >
                        {isProd ? '🚫 禁止重置 (正式环境保护中)' : '🚨 恢复到 155 字'}
                    </button>

                    <button
                        onClick={resetToZero}
                        disabled={isProd}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '18px',
                            backgroundColor: isProd ? '#ccc' : '#f57c00', // Orange for clear
                            color: isProd ? '#666' : 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: isProd ? 'not-allowed' : 'pointer',
                            fontWeight: 'bold',
                            boxShadow: isProd ? 'none' : '0 2px 5px rgba(0,0,0,0.2)',
                            marginTop: '10px'
                        }}
                    >
                        {isProd ? '🚫 禁止清空' : '🧹 清空所有进度 (重置为0)'}
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '20px', whiteSpace: 'pre-line', color: '#2e7d32', lineHeight: '1.6' }}>
                {status}
            </div>

            {error && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#ffebee', color: '#c62828', borderRadius: '6px' }}>
                    ❌ {error}
                </div>
            )}
        </div>
    );
};

export default Restore;
