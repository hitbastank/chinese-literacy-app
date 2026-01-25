/**
 * 英语词汇数据 - 增强版
 * 基于 Scholastic 100 Words Kids Need to Read 教学法
 * 
 * 特色：
 * 1. 语境化学习 - 每个单词有完整故事场景
 * 2. 图文场景描述 - 详细的视觉化描述帮助建立画面感
 * 3. 年级分级 - 按 Grade 1-5 分级，每级 100 词
 * 4. 主题丰富 - Minecraft, Transformers, Ninjago, One Piece, Daily Life
 * 5. 动词变形对比 - 展示现在时/过去时
 */

import grade1Words from './grade1Words';
// Future imports:
// import grade2Words from './grade2Words';
// import grade3Words from './grade3Words';
// import grade4Words from './grade4Words';
// import grade5Words from './grade5Words';

// 年级定义
export const gradeDefinitions = {
    1: {
        name: 'Grade 1',
        label: '一年级',
        emoji: '🌟',
        description: '100 Words Kids Need to Read by 1st Grade',
        wordCount: 100,
        wordsPerLesson: 10
    },
    2: {
        name: 'Grade 2',
        label: '二年级',
        emoji: '⭐',
        description: '100 Words Kids Need to Read by 2nd Grade',
        wordCount: 100,
        wordsPerLesson: 10,
        comingSoon: true
    },
    3: {
        name: 'Grade 3',
        label: '三年级',
        emoji: '🌙',
        description: '100 Words Kids Need to Read by 3rd Grade',
        wordCount: 100,
        wordsPerLesson: 10,
        comingSoon: true
    },
    4: {
        name: 'Grade 4',
        label: '四年级',
        emoji: '💫',
        description: '100 Vocabulary Words Kids Need to Know by 4th Grade',
        wordCount: 100,
        wordsPerLesson: 10,
        comingSoon: true
    },
    5: {
        name: 'Grade 5',
        label: '五年级',
        emoji: '🔥',
        description: '100 Vocabulary Words Kids Need to Know by 5th Grade',
        wordCount: 100,
        wordsPerLesson: 10,
        comingSoon: true
    }
};

// 按年级获取单词
export const getWordsByGrade = (grade) => {
    switch (grade) {
        case 1: return grade1Words;
        // case 2: return grade2Words;
        // case 3: return grade3Words;
        // case 4: return grade4Words;
        // case 5: return grade5Words;
        default: return grade1Words;
    }
};

// 随机打乱并分课
export const getLessonWords = (grade, lessonIndex, wordsPerLesson = 10) => {
    const words = getWordsByGrade(grade);
    const start = lessonIndex * wordsPerLesson;
    const end = start + wordsPerLesson;
    return words.slice(start, end);
};

// 获取年级课程数量
export const getLessonCount = (grade) => {
    const gradeDef = gradeDefinitions[grade];
    if (!gradeDef) return 0;
    return Math.ceil(gradeDef.wordCount / gradeDef.wordsPerLesson);
};

// 单词分组定义
export const wordGroups = {
    linking: { name: 'Linking Words', label: '系动词', emoji: '🔗', description: '连接主语和描述的词' },
    helping: { name: 'Helping Words', label: '助动词', emoji: '🤝', description: '帮助表达能力和时间的词' },
    action: { name: 'Action Words', label: '动作词', emoji: '🏃', description: '表示动作的词' },
    direction: { name: 'Direction Words', label: '方位词', emoji: '📍', description: '表示位置和方向的词' },
    describing: { name: 'Describing Words', label: '描述词', emoji: '✨', description: '描述事物特点的词' }
};

// 合并所有年级的单词
const englishWords = [
    ...grade1Words
];

/**
 * 获取所有单词
 */
export const getAllWords = () => englishWords;

/**
 * 获取单词总数
 */
export const getTotalCount = () => englishWords.length;

/**
 * 根据索引获取单词
 */
export const getWordByIndex = (index) => {
    if (index < 0 || index >= englishWords.length) {
        return null;
    }
    return englishWords[index];
};

/**
 * 按词性筛选单词
 */
export const getWordsByPartOfSpeech = (partOfSpeech) => {
    return englishWords.filter(word => word.partOfSpeech === partOfSpeech);
};

/**
 * 按分组获取单词
 */
export const getWordsByGroup = (group) => {
    return englishWords.filter(word => word.group === group);
};

/**
 * 获取所有分组及其单词数量
 */
export const getGroupStats = () => {
    const stats = {};
    Object.keys(wordGroups).forEach(groupKey => {
        const words = getWordsByGroup(groupKey);
        stats[groupKey] = {
            ...wordGroups[groupKey],
            count: words.length,
            words: words.map(w => w.word)
        };
    });
    return stats;
};

/**
 * 随机打乱单词顺序
 */
export const getShuffledWords = () => {
    const shuffled = [...englishWords];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default englishWords;
