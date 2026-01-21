/**
 * 本地存储工具 - 学习进度追踪
 * 
 * 学习状态说明：
 * - studied: 学过的字及学习次数 { char: count }
 * - mastered: 彻底学会的字 [char, ...]
 * - needsReview: 标记为不熟练的字 [char, ...]
 * 
 * 专属用户ID用于确保进度跨会话一致
 * 支持 Firebase 云端同步
 */

import { syncToCloud, loadFromCloud, isFirebaseConfigured } from '../firebase';

// 专属用户ID - 用于持久化存储
const USER_UID = 'user-mantou-2026';

// 同步状态
let syncStatus = 'idle'; // 'idle' | 'syncing' | 'synced' | 'error'
let syncListeners = [];

/**
 * 获取当前用户ID
 * @returns {string} 用户唯一标识符
 */
export const getUserId = () => USER_UID;

/**
 * 获取同步状态
 * @returns {string} 'idle' | 'syncing' | 'synced' | 'error'
 */
export const getSyncStatus = () => syncStatus;

/**
 * 订阅同步状态变化
 * @param {function} listener 
 */
export const onSyncStatusChange = (listener) => {
    syncListeners.push(listener);
    return () => {
        syncListeners = syncListeners.filter(l => l !== listener);
    };
};

const notifySyncStatus = (status) => {
    syncStatus = status;
    syncListeners.forEach(l => l(status));
};

const STORAGE_KEYS = {
    PROGRESS: `${USER_UID}_chinese_literacy_progress`,
    SETTINGS: `${USER_UID}_chinese_literacy_settings`,
    ACHIEVEMENTS: `${USER_UID}_chinese_literacy_achievements`,
    DAILY_GOAL: `${USER_UID}_chinese_literacy_daily_goal`,
    LAST_STUDY_DATE: `${USER_UID}_chinese_literacy_last_study_date`
};

// 获取学习进度
export const getProgress = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        const defaultProgress = {
            learned: [],        // 兼容旧版：已学会的汉字索引
            inProgress: [],     // 兼容旧版：正在学习的汉字索引
            reviewNeeded: [],   // 兼容旧版：需要复习的汉字索引
            // 新版字段
            mastered: [],       // 彻底学会的字 (char string)
            studied: {},        // 学过的字及次数 { char: count }
            needsReview: [],    // 标记为不熟练的字 (char string)
            totalStudyTime: 0,
            streakDays: 0,
            lastStudyDate: null
        };
        return data ? { ...defaultProgress, ...JSON.parse(data) } : defaultProgress;
    } catch (error) {
        console.error('获取进度失败:', error);
        return { learned: [], inProgress: [], reviewNeeded: [], mastered: [], studied: {}, needsReview: [], totalStudyTime: 0, streakDays: 0, lastStudyDate: null };
    }
};

// 保存学习进度（同时同步到云端）
export const saveProgress = (progress) => {
    try {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));

        // 异步同步到云端
        if (isFirebaseConfigured()) {
            notifySyncStatus('syncing');
            syncToCloud(USER_UID, { progress })
                .then(success => {
                    notifySyncStatus(success ? 'synced' : 'error');
                })
                .catch(() => {
                    notifySyncStatus('error');
                });
        }

        return true;
    } catch (error) {
        console.error('保存进度失败:', error);
        return false;
    }
};

/**
 * 从云端加载并合并进度（应用启动时调用）
 * @returns {Promise<object>} 合并后的进度
 */
export const initFromCloud = async () => {
    if (!isFirebaseConfigured()) {
        console.log('Firebase 未配置，使用本地数据');
        return getProgress();
    }

    notifySyncStatus('syncing');
    try {
        const cloudData = await loadFromCloud(USER_UID);
        const localProgress = getProgress();

        if (cloudData && cloudData.progress) {
            // 合并策略：取学习次数和已学会字数更多的版本
            const cloudProgress = cloudData.progress;
            const localStudiedCount = Object.keys(localProgress.studied || {}).length;
            const cloudStudiedCount = Object.keys(cloudProgress.studied || {}).length;

            let mergedProgress;
            if (cloudStudiedCount >= localStudiedCount) {
                // 云端数据更完整，使用云端
                mergedProgress = { ...localProgress, ...cloudProgress };
                console.log('☁️ 使用云端数据（更完整）');
            } else {
                // 本地数据更完整，保留本地并上传
                mergedProgress = localProgress;
                console.log('💾 本地数据更完整，上传到云端');
                await syncToCloud(USER_UID, { progress: localProgress });
            }

            // 保存合并后的数据到本地
            localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(mergedProgress));
            notifySyncStatus('synced');
            return mergedProgress;
        } else {
            // 云端无数据，上传本地数据
            await syncToCloud(USER_UID, { progress: localProgress });
            notifySyncStatus('synced');
            return localProgress;
        }
    } catch (error) {
        console.error('云端同步失败:', error);
        notifySyncStatus('error');
        return getProgress();
    }
};

// 标记汉字为已学习
export const markAsLearned = (charIndex) => {
    const progress = getProgress();
    if (!progress.learned.includes(charIndex)) {
        progress.learned.push(charIndex);
    }
    // 从进行中列表移除
    progress.inProgress = progress.inProgress.filter(i => i !== charIndex);
    saveProgress(progress);
    return progress;
};

// 标记汉字为正在学习
export const markAsInProgress = (charIndex) => {
    const progress = getProgress();
    if (!progress.inProgress.includes(charIndex) && !progress.learned.includes(charIndex)) {
        progress.inProgress.push(charIndex);
    }
    saveProgress(progress);
    return progress;
};

// 标记汉字需要复习
export const markForReview = (charIndex) => {
    const progress = getProgress();
    if (!progress.reviewNeeded.includes(charIndex)) {
        progress.reviewNeeded.push(charIndex);
    }
    saveProgress(progress);
    return progress;
};

// 从复习列表移除
export const removeFromReview = (charIndex) => {
    const progress = getProgress();
    progress.reviewNeeded = progress.reviewNeeded.filter(i => i !== charIndex);
    saveProgress(progress);
    return progress;
};

// ========== 新版进度管理函数 ==========

/**
 * 记录学过的字（点击下一个时调用）
 * @param {string} char - 汉字
 * @returns {number} 该字的学习次数
 */
export const markAsStudied = (char) => {
    const progress = getProgress();
    const currentCount = progress.studied[char] || 0;
    progress.studied[char] = currentCount + 1;

    // 学习两次后自动标记为彻底学会（如果没有标记为不熟练）
    if (progress.studied[char] >= 2 && !progress.needsReview.includes(char)) {
        if (!progress.mastered.includes(char)) {
            progress.mastered.push(char);
        }
    }

    saveProgress(progress);
    return progress.studied[char];
};

/**
 * 标记为彻底学会（点击"已学会"按钮）
 * @param {string} char - 汉字
 */
export const markAsMastered = (char) => {
    const progress = getProgress();
    if (!progress.mastered.includes(char)) {
        progress.mastered.push(char);
    }
    // 从不熟练列表移除
    progress.needsReview = progress.needsReview.filter(c => c !== char);
    saveProgress(progress);
    return progress;
};

/**
 * 标记为不熟练（第二次学习时勾选checkbox）
 * @param {string} char - 汉字
 */
export const markAsNeedsReviewNew = (char) => {
    const progress = getProgress();
    if (!progress.needsReview.includes(char)) {
        progress.needsReview.push(char);
    }
    // 从彻底学会列表移除
    progress.mastered = progress.mastered.filter(c => c !== char);
    saveProgress(progress);
    return progress;
};

/**
 * 取消不熟练标记
 * @param {string} char - 汉字
 */
export const unmarkNeedsReview = (char) => {
    const progress = getProgress();
    progress.needsReview = progress.needsReview.filter(c => c !== char);
    saveProgress(progress);
    return progress;
};

/**
 * 获取学过但未彻底学会的字（用于隔课复习）
 * @returns {string[]} 需要复习的字列表
 */
export const getCharsForReview = () => {
    const progress = getProgress();
    return Object.keys(progress.studied).filter(char =>
        !progress.mastered.includes(char)
    );
};

/**
 * 获取某个字的学习次数
 * @param {string} char - 汉字
 * @returns {number} 学习次数
 */
export const getStudyCount = (char) => {
    const progress = getProgress();
    return progress.studied[char] || 0;
};

/**
 * 检查字是否彻底学会
 * @param {string} char - 汉字
 * @returns {boolean}
 */
export const isMastered = (char) => {
    const progress = getProgress();
    return progress.mastered.includes(char);
};

/**
 * 检查字是否标记为不熟练
 * @param {string} char - 汉字
 * @returns {boolean}
 */
export const isNeedsReview = (char) => {
    const progress = getProgress();
    return progress.needsReview.includes(char);
};

// 获取学习统计
export const getStats = () => {
    const progress = getProgress();
    return {
        learnedCount: progress.mastered.length || progress.learned.length, // 优先使用新版
        inProgressCount: progress.inProgress.length,
        reviewCount: progress.needsReview.length,
        totalStudyTime: progress.totalStudyTime,
        streakDays: progress.streakDays,
        // 新增统计
        masteredCount: progress.mastered.length,
        studiedCount: Object.keys(progress.studied).length,
        needsReviewCount: progress.needsReview.length
    };
};

// 更新学习时间
export const updateStudyTime = (minutes) => {
    const progress = getProgress();
    progress.totalStudyTime += minutes;

    // 检查是否是新的一天
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (progress.lastStudyDate === yesterday.toDateString()) {
            // 连续学习
            progress.streakDays += 1;
        } else if (progress.lastStudyDate !== today) {
            // 断了连续
            progress.streakDays = 1;
        }
        progress.lastStudyDate = today;
    }

    saveProgress(progress);
    return progress;
};

// 获取成就
export const getAchievements = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('获取成就失败:', error);
        return [];
    }
};

// 解锁成就
export const unlockAchievement = (achievementId) => {
    const achievements = getAchievements();
    if (!achievements.includes(achievementId)) {
        achievements.push(achievementId);
        localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
        return true; // 新解锁
    }
    return false; // 已解锁
};

// 成就定义
export const ACHIEVEMENTS = {
    FIRST_CHAR: { id: 'first_char', name: '初学者', description: '学习第一个汉字', icon: '🌱' },
    TEN_CHARS: { id: 'ten_chars', name: '好学生', description: '学习10个汉字', icon: '📖' },
    FIFTY_CHARS: { id: 'fifty_chars', name: '识字小能手', description: '学习50个汉字', icon: '🌟' },
    HUNDRED_CHARS: { id: 'hundred_chars', name: '识字大师', description: '学习100个汉字', icon: '🏆' },
    STREAK_3: { id: 'streak_3', name: '坚持不懈', description: '连续学习3天', icon: '🔥' },
    STREAK_7: { id: 'streak_7', name: '一周达人', description: '连续学习7天', icon: '⭐' },
    PERFECT_QUIZ: { id: 'perfect_quiz', name: '全对达人', description: '测试全部答对', icon: '💯' },
    GAME_MASTER: { id: 'game_master', name: '游戏高手', description: '完成所有游戏类型', icon: '🎮' }
};

// 检查并解锁成就
export const checkAndUnlockAchievements = () => {
    const progress = getProgress();
    const newAchievements = [];

    if (progress.learned.length >= 1) {
        if (unlockAchievement(ACHIEVEMENTS.FIRST_CHAR.id)) {
            newAchievements.push(ACHIEVEMENTS.FIRST_CHAR);
        }
    }
    if (progress.learned.length >= 10) {
        if (unlockAchievement(ACHIEVEMENTS.TEN_CHARS.id)) {
            newAchievements.push(ACHIEVEMENTS.TEN_CHARS);
        }
    }
    if (progress.learned.length >= 50) {
        if (unlockAchievement(ACHIEVEMENTS.FIFTY_CHARS.id)) {
            newAchievements.push(ACHIEVEMENTS.FIFTY_CHARS);
        }
    }
    if (progress.learned.length >= 100) {
        if (unlockAchievement(ACHIEVEMENTS.HUNDRED_CHARS.id)) {
            newAchievements.push(ACHIEVEMENTS.HUNDRED_CHARS);
        }
    }
    if (progress.streakDays >= 3) {
        if (unlockAchievement(ACHIEVEMENTS.STREAK_3.id)) {
            newAchievements.push(ACHIEVEMENTS.STREAK_3);
        }
    }
    if (progress.streakDays >= 7) {
        if (unlockAchievement(ACHIEVEMENTS.STREAK_7.id)) {
            newAchievements.push(ACHIEVEMENTS.STREAK_7);
        }
    }

    return newAchievements;
};

// 获取设置
export const getSettings = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : {
            dailyGoal: 10,
            soundEnabled: true,
            autoPlayPinyin: false
        };
    } catch (error) {
        console.error('获取设置失败:', error);
        return { dailyGoal: 10, soundEnabled: true, autoPlayPinyin: false };
    }
};

// 保存设置
export const saveSettings = (settings) => {
    try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
        return true;
    } catch (error) {
        console.error('保存设置失败:', error);
        return false;
    }
};

// 重置所有数据
export const resetAllData = () => {
    Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
    });
};

export default {
    getProgress,
    saveProgress,
    markAsLearned,
    markAsInProgress,
    markForReview,
    removeFromReview,
    getStats,
    updateStudyTime,
    getAchievements,
    unlockAchievement,
    checkAndUnlockAchievements,
    getSettings,
    saveSettings,
    resetAllData,
    ACHIEVEMENTS
};
