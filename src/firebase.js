/**
 * Firebase 配置和初始化
 * 
 * 使用说明：
 * 1. 访问 https://console.firebase.google.com
 * 2. 创建新项目（或使用现有项目）
 * 3. 在项目设置中找到 "您的应用" -> "Web应用"
 * 4. 复制 firebaseConfig 对象的值替换下方配置
 * 5. 在 Firestore Database 中创建数据库（选择生产模式）
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

// Firebase 配置 - 来自 chinese-literacy-app 项目
const firebaseConfig = {
    apiKey: "AIzaSyA7Js86mrZkuqUChUT6sAL_jT0ffj81yjQ",
    authDomain: "chinese-literacy-app.firebaseapp.com",
    projectId: "chinese-literacy-app",
    storageBucket: "chinese-literacy-app.firebasestorage.app",
    messagingSenderId: "942539086421",
    appId: "1:942539086421:web:d7c6ea63ac428c6ff692dc",
    measurementId: "G-3D9X34HGDP"
};

// 检查是否已配置
const isConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

// ========== 环境隔离逻辑 ==========
// 【重要】明确列出生产环境的域名，避免误判
const PRODUCTION_DOMAINS = [
    'chinese-literacy-app.vercel.app',  // Vercel 生产域名
    // 如果有自定义域名，在这里添加
];

const getEnvironmentInfo = () => {
    if (typeof window === 'undefined') return { isDev: true, collectionName: 'dev_users' };

    const hostname = window.location.hostname;

    // 【方案1】检查是否在生产域名白名单中
    const isProduction = PRODUCTION_DOMAINS.includes(hostname);

    // 如果不在白名单中，则视为开发环境
    const isDev = !isProduction;

    // 开发环境使用 dev_users，生产环境使用 users
    const collectionName = isDev ? 'dev_users' : 'users';

    console.log(`[Firebase] Hostname: ${hostname}`);
    console.log(`[Firebase] Is in production whitelist: ${isProduction}`);
    console.log(`[Firebase] Environment: ${isDev ? 'Development' : 'Production'}`);
    console.log(`[Firebase] Collection: ${collectionName}`);

    return { isDev, collectionName };
};

const { isDev, collectionName } = getEnvironmentInfo();

console.log(`[Firebase] Current Environment: ${isDev ? 'Development/Test' : 'Production'}`);
console.log(`[Firebase] Using Collection: ${collectionName}`);

let app = null;
let db = null;

if (isConfigured) {
    try {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        console.log('✅ Firebase 已连接');
    } catch (error) {
        console.error('❌ Firebase 初始化失败:', error);
    }
} else {
    console.warn('⚠️ Firebase 未配置，使用本地存储模式');
}

/**
 * 判断是否为正式生产环境
 * @returns {boolean}
 */
export const isProduction = () => !isDev;

/**
 * 获取当前使用的集合名称
 * @returns {string}
 */
export const getCollectionName = () => collectionName;

/**
 * 【硬性保护】验证当前环境是否允许写入指定集合
 * 开发环境只能写 dev_users，生产环境只能写 users
 */
const validateWritePermission = (targetCollection) => {
    const currentEnv = isDev ? 'development' : 'production';
    const expectedCollection = isDev ? 'dev_users' : 'users';

    if (targetCollection !== expectedCollection) {
        console.error(`🚫 [BLOCKED] 环境保护：${currentEnv} 环境禁止写入 ${targetCollection} 集合`);
        return false;
    }
    return true;
};

/**
 * 同步数据到云端
 * 【安全保护】只能写入当前环境对应的集合
 * @param {string} userId - 用户ID
 * @param {object} data - 要同步的数据
 * @returns {Promise<boolean>} 是否成功
 */
export const syncToCloud = async (userId, data) => {
    if (!db) return false;

    // 【硬性保护】验证写入权限
    if (!validateWritePermission(collectionName)) {
        return false;
    }

    try {
        const docRef = doc(db, collectionName, userId);
        await setDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp(),
            _env: isDev ? 'dev' : 'prod',  // 标记数据来源环境
            _hostname: typeof window !== 'undefined' ? window.location.hostname : 'server'
        }, { merge: true });
        console.log(`☁️ 数据已同步到云端 (${collectionName})`);
        return true;
    } catch (error) {
        console.error('同步失败:', error);
        return false;
    }
};

/**
 * 重置用户数据（仅限当前环境的集合）
 * @param {string} userId - 用户ID
 * @returns {Promise<boolean>} 是否成功
 */
export const resetUserData = async (userId) => {
    if (!db) return false;

    // 【硬性保护】只能重置当前环境的数据
    if (!validateWritePermission(collectionName)) {
        return false;
    }

    try {
        const docRef = doc(db, collectionName, userId);
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
            _env: isDev ? 'dev' : 'prod'
        };
        await setDoc(docRef, emptyData);
        console.log(`🗑️ 用户数据已重置 (${collectionName})`);
        return true;
    } catch (error) {
        console.error('重置失败:', error);
        return false;
    }
};

/**
 * 从云端加载数据
 * @param {string} userId - 用户ID
 * @returns {Promise<object|null>} 云端数据
 */
export const loadFromCloud = async (userId) => {
    if (!db) return null;

    try {
        // 使用动态集合名称
        const docRef = doc(db, collectionName, userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(`☁️ 从云端加载数据成功 (${collectionName})`);
            return docSnap.data();
        } else {
            console.log(`☁️ 云端无数据 (${collectionName})，使用本地数据`);
            return null;
        }
    } catch (error) {
        console.error('加载云端数据失败:', error);
        return null;
    }
};

/**
 * 检查 Firebase 是否已配置
 * @returns {boolean}
 */
export const isFirebaseConfigured = () => isConfigured && db !== null;

export { db };
