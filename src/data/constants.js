/**
 * 共享常量 - 避免循环依赖
 */

// 分类枚举
export const CATEGORIES = {
    FAMILY: '家庭人物',
    ANIMALS: '动物',
    PLANTS: '植物食物',
    PLACES: '场所',
    ACTIONS: '动作',
    DIRECTIONS: '方位',
    MATH: '数学词汇',
    OBJECTS: '物品',
    NATURE: '自然',
    BODY: '身体',
    TIME: '时间',
    COMMON: '常用字'
};

// 扩展分类
export const EXTENDED_CATEGORIES = {
    ...CATEGORIES,
    EXAM: '考试词汇',
    SHAPES: '形状图形',
    EMOTIONS: '情感表达',
    WEATHER: '天气季节',
    CLOTHING: '衣物穿戴'
};

// 难度等级
export const DIFFICULTY = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
};
