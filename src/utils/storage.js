/**
 * 本地存储工具 - 学习进度追踪
 */

const STORAGE_KEYS = {
    PROGRESS: 'chinese_literacy_progress',
    SETTINGS: 'chinese_literacy_settings',
    ACHIEVEMENTS: 'chinese_literacy_achievements',
    DAILY_GOAL: 'chinese_literacy_daily_goal',
    LAST_STUDY_DATE: 'chinese_literacy_last_study_date'
};

// 获取学习进度
export const getProgress = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        return data ? JSON.parse(data) : {
            learned: [],      // 已学会的汉字索引
            inProgress: [],   // 正在学习的汉字索引
            reviewNeeded: [], // 需要复习的汉字索引
            totalStudyTime: 0, // 总学习时间（分钟）
            streakDays: 0,    // 连续学习天数
            lastStudyDate: null
        };
    } catch (error) {
        console.error('获取进度失败:', error);
        return { learned: [], inProgress: [], reviewNeeded: [], totalStudyTime: 0, streakDays: 0, lastStudyDate: null };
    }
};

// 保存学习进度
export const saveProgress = (progress) => {
    try {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
        return true;
    } catch (error) {
        console.error('保存进度失败:', error);
        return false;
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

// 获取学习统计
export const getStats = () => {
    const progress = getProgress();
    return {
        learnedCount: progress.learned.length,
        inProgressCount: progress.inProgress.length,
        reviewCount: progress.reviewNeeded.length,
        totalStudyTime: progress.totalStudyTime,
        streakDays: progress.streakDays
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
