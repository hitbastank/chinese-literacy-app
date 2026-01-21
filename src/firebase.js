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
 * 同步数据到云端
 * @param {string} userId - 用户ID
 * @param {object} data - 要同步的数据
 * @returns {Promise<boolean>} 是否成功
 */
export const syncToCloud = async (userId, data) => {
    if (!db) return false;

    try {
        const docRef = doc(db, 'users', userId);
        await setDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
        console.log('☁️ 数据已同步到云端');
        return true;
    } catch (error) {
        console.error('同步失败:', error);
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
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log('☁️ 从云端加载数据成功');
            return docSnap.data();
        } else {
            console.log('☁️ 云端无数据，使用本地数据');
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
