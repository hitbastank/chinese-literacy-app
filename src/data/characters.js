/**
 * 汉字数据库 - 小学一二年级考试常见字
 * 根据用户提供的试卷内容整理
 */

// 从常量文件导入分类和难度
import { CATEGORIES, EXTENDED_CATEGORIES, DIFFICULTY } from './constants.js';
// 导入扩展汉字库
import extendedCharacters from './extendedCharacters.js';

// 重新导出常量供其他模块使用
export { CATEGORIES, EXTENDED_CATEGORIES, DIFFICULTY };

/**
 * 汉字数据结构
 * @typedef {Object} Character
 * @property {string} char - 汉字
 * @property {string} pinyin - 拼音
 * @property {string} meaning - 释义
 * @property {string} category - 分类
 * @property {number} difficulty - 难度 1-3
 * @property {string[]} words - 常见词组
 * @property {string} sentence - 例句
 */

// 核心汉字库 - 考试常见字
export const characters = [
    // ============ 家庭人物 ============
    { char: '妈', pinyin: 'mā', meaning: '母亲', category: CATEGORIES.FAMILY, difficulty: 1, words: ['妈妈', '大妈'], sentence: '妈妈去买菜了。' },
    { char: '爸', pinyin: 'bà', meaning: '父亲', category: CATEGORIES.FAMILY, difficulty: 1, words: ['爸爸', '阿爸'], sentence: '爸爸在工作。' },
    { char: '哥', pinyin: 'gē', meaning: '兄长', category: CATEGORIES.FAMILY, difficulty: 1, words: ['哥哥', '大哥'], sentence: '哥哥比我大两岁。' },
    { char: '弟', pinyin: 'dì', meaning: '弟弟', category: CATEGORIES.FAMILY, difficulty: 1, words: ['弟弟', '兄弟'], sentence: '弟弟在玩游戏。' },
    { char: '姐', pinyin: 'jiě', meaning: '姐姐', category: CATEGORIES.FAMILY, difficulty: 1, words: ['姐姐', '大姐'], sentence: '姐姐教我写字。' },
    { char: '妹', pinyin: 'mèi', meaning: '妹妹', category: CATEGORIES.FAMILY, difficulty: 1, words: ['妹妹', '姐妹'], sentence: '妹妹很可爱。' },
    { char: '爷', pinyin: 'yé', meaning: '祖父', category: CATEGORIES.FAMILY, difficulty: 1, words: ['爷爷', '老爷'], sentence: '爷爷给我讲故事。' },
    { char: '奶', pinyin: 'nǎi', meaning: '祖母', category: CATEGORIES.FAMILY, difficulty: 1, words: ['奶奶', '牛奶'], sentence: '奶奶做的饭很好吃。' },
    { char: '朋', pinyin: 'péng', meaning: '朋友', category: CATEGORIES.FAMILY, difficulty: 2, words: ['朋友', '亲朋'], sentence: '我有很多朋友。' },
    { char: '友', pinyin: 'yǒu', meaning: '友人', category: CATEGORIES.FAMILY, difficulty: 1, words: ['朋友', '友好'], sentence: '我们是好朋友。' },
    { char: '同', pinyin: 'tóng', meaning: '相同', category: CATEGORIES.FAMILY, difficulty: 2, words: ['同学', '同时'], sentence: '我们是同学。' },
    { char: '学', pinyin: 'xué', meaning: '学习', category: CATEGORIES.FAMILY, difficulty: 1, words: ['学习', '同学', '学校'], sentence: '我爱学习。' },

    // ============ 动物 ============
    { char: '兔', pinyin: 'tù', meaning: '兔子', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['兔子', '小兔', '白兔'], sentence: '小白兔爱吃萝卜。' },
    { char: '虎', pinyin: 'hǔ', meaning: '老虎', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['老虎', '虎牙'], sentence: '老虎是百兽之王。' },
    { char: '鼠', pinyin: 'shǔ', meaning: '老鼠', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['老鼠', '松鼠'], sentence: '小老鼠很机灵。' },
    { char: '羊', pinyin: 'yáng', meaning: '羊', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['小羊', '山羊', '绵羊'], sentence: '小羊在草地上吃草。' },
    { char: '牛', pinyin: 'niú', meaning: '牛', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['牛奶', '水牛', '黄牛'], sentence: '牛在田里耕地。' },
    { char: '马', pinyin: 'mǎ', meaning: '马', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['小马', '马路', '马上'], sentence: '马跑得很快。' },
    { char: '鸟', pinyin: 'niǎo', meaning: '鸟', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['小鸟', '鸟儿', '飞鸟'], sentence: '小鸟在树上唱歌。' },
    { char: '鱼', pinyin: 'yú', meaning: '鱼', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['小鱼', '金鱼', '鱼儿'], sentence: '鱼儿在水里游。' },
    { char: '虫', pinyin: 'chóng', meaning: '昆虫', category: CATEGORIES.ANIMALS, difficulty: 1, words: ['虫子', '昆虫', '毛虫'], sentence: '这条虫子很长。' },
    { char: '蝌', pinyin: 'kē', meaning: '蝌蚪', category: CATEGORIES.ANIMALS, difficulty: 3, words: ['蝌蚪'], sentence: '蝌蚪是青蛙的宝宝。' },
    { char: '蚪', pinyin: 'dǒu', meaning: '蝌蚪', category: CATEGORIES.ANIMALS, difficulty: 3, words: ['蝌蚪'], sentence: '池塘里有很多蝌蚪。' },
    { char: '蛙', pinyin: 'wā', meaning: '青蛙', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['青蛙', '蛙鸣'], sentence: '青蛙呱呱叫。' },
    { char: '猫', pinyin: 'māo', meaning: '猫', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['小猫', '猫咪'], sentence: '小猫在睡觉。' },
    { char: '狗', pinyin: 'gǒu', meaning: '狗', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['小狗', '狗狗'], sentence: '小狗汪汪叫。' },
    { char: '鹿', pinyin: 'lù', meaning: '鹿', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['小鹿', '长颈鹿'], sentence: '长颈鹿脖子很长。' },
    { char: '象', pinyin: 'xiàng', meaning: '大象', category: CATEGORIES.ANIMALS, difficulty: 2, words: ['大象', '象牙'], sentence: '大象有长长的鼻子。' },

    // ============ 植物食物 ============
    { char: '菇', pinyin: 'gū', meaning: '蘑菇', category: CATEGORIES.PLANTS, difficulty: 2, words: ['蘑菇', '香菇'], sentence: '蘑菇可以吃。' },
    { char: '蘑', pinyin: 'mó', meaning: '蘑菇', category: CATEGORIES.PLANTS, difficulty: 3, words: ['蘑菇'], sentence: '小白兔采蘑菇。' },
    { char: '瓜', pinyin: 'guā', meaning: '瓜果', category: CATEGORIES.PLANTS, difficulty: 1, words: ['南瓜', '西瓜', '黄瓜'], sentence: '南瓜很甜。' },
    { char: '南', pinyin: 'nán', meaning: '南方', category: CATEGORIES.PLANTS, difficulty: 1, words: ['南瓜', '南方', '南边'], sentence: '南瓜是橙色的。' },
    { char: '苹', pinyin: 'píng', meaning: '苹果', category: CATEGORIES.PLANTS, difficulty: 2, words: ['苹果'], sentence: '我爱吃苹果。' },
    { char: '果', pinyin: 'guǒ', meaning: '果实', category: CATEGORIES.PLANTS, difficulty: 1, words: ['苹果', '水果', '果子'], sentence: '苹果是红色的。' },
    { char: '桃', pinyin: 'táo', meaning: '桃子', category: CATEGORIES.PLANTS, difficulty: 2, words: ['桃子', '桃花'], sentence: '桃子很好吃。' },
    { char: '梨', pinyin: 'lí', meaning: '梨子', category: CATEGORIES.PLANTS, difficulty: 2, words: ['梨子', '雪梨'], sentence: '梨子水分多。' },
    { char: '栗', pinyin: 'lì', meaning: '栗子', category: CATEGORIES.PLANTS, difficulty: 3, words: ['栗子', '板栗'], sentence: '栗子很香。' },
    { char: '花', pinyin: 'huā', meaning: '花朵', category: CATEGORIES.PLANTS, difficulty: 1, words: ['花朵', '花儿', '鲜花'], sentence: '花儿真美丽。' },
    { char: '草', pinyin: 'cǎo', meaning: '草', category: CATEGORIES.PLANTS, difficulty: 1, words: ['青草', '小草', '草地'], sentence: '小草绿绿的。' },
    { char: '树', pinyin: 'shù', meaning: '树木', category: CATEGORIES.PLANTS, difficulty: 2, words: ['大树', '松树', '树木'], sentence: '大树很高大。' },
    { char: '松', pinyin: 'sōng', meaning: '松树', category: CATEGORIES.PLANTS, difficulty: 2, words: ['松树', '松鼠'], sentence: '松树一年四季常青。' },
    { char: '叶', pinyin: 'yè', meaning: '叶子', category: CATEGORIES.PLANTS, difficulty: 2, words: ['叶子', '树叶', '绿叶'], sentence: '树叶落下来了。' },

    // ============ 场所 ============
    { char: '操', pinyin: 'cāo', meaning: '操场', category: CATEGORIES.PLACES, difficulty: 2, words: ['操场', '做操'], sentence: '我们在操场上跑步。' },
    { char: '场', pinyin: 'chǎng', meaning: '场地', category: CATEGORIES.PLACES, difficulty: 2, words: ['操场', '广场', '商场'], sentence: '操场很大。' },
    { char: '池', pinyin: 'chí', meaning: '池塘', category: CATEGORIES.PLACES, difficulty: 2, words: ['池塘', '水池', '游泳池'], sentence: '池塘里有荷花。' },
    { char: '塘', pinyin: 'táng', meaning: '池塘', category: CATEGORIES.PLACES, difficulty: 3, words: ['池塘', '鱼塘'], sentence: '池塘里有金鱼。' },
    { char: '教', pinyin: 'jiào', meaning: '教学', category: CATEGORIES.PLACES, difficulty: 2, words: ['教室', '教师', '教学'], sentence: '教室里很安静。' },
    { char: '室', pinyin: 'shì', meaning: '房间', category: CATEGORIES.PLACES, difficulty: 2, words: ['教室', '卧室', '房室'], sentence: '教室有三十个座位。' },
    { char: '校', pinyin: 'xiào', meaning: '学校', category: CATEGORIES.PLACES, difficulty: 2, words: ['学校', '校园', '校长'], sentence: '我的学校很漂亮。' },
    { char: '园', pinyin: 'yuán', meaning: '园子', category: CATEGORIES.PLACES, difficulty: 2, words: ['校园', '花园', '公园'], sentence: '校园里有很多花。' },
    { char: '家', pinyin: 'jiā', meaning: '家庭', category: CATEGORIES.PLACES, difficulty: 1, words: ['家庭', '回家', '家人'], sentence: '我爱我家。' },
    { char: '门', pinyin: 'mén', meaning: '门', category: CATEGORIES.PLACES, difficulty: 1, words: ['大门', '门口', '开门'], sentence: '请开门。' },

    // ============ 动作 ============
    { char: '摘', pinyin: 'zhāi', meaning: '采摘', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['摘花', '采摘'], sentence: '小兔子去摘蘑菇。' },
    { char: '排', pinyin: 'pái', meaning: '排列', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['排队', '排列', '排名'], sentence: '我们排好队。' },
    { char: '队', pinyin: 'duì', meaning: '队伍', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['排队', '队伍', '合唱队'], sentence: '大家排成一队。' },
    { char: '折', pinyin: 'zhé', meaning: '折叠', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['折纸', '折叠'], sentence: '我会折纸飞机。' },
    { char: '飞', pinyin: 'fēi', meaning: '飞翔', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['飞机', '飞翔', '起飞'], sentence: '小鸟飞走了。' },
    { char: '站', pinyin: 'zhàn', meaning: '站立', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['站立', '车站', '站起来'], sentence: '请站好。' },
    { char: '坐', pinyin: 'zuò', meaning: '坐下', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['坐下', '坐车', '座位'], sentence: '请坐下。' },
    { char: '走', pinyin: 'zǒu', meaning: '行走', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['走路', '走开', '行走'], sentence: '我们一起走。' },
    { char: '跑', pinyin: 'pǎo', meaning: '奔跑', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['跑步', '奔跑'], sentence: '我跑得很快。' },
    { char: '跳', pinyin: 'tiào', meaning: '跳跃', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['跳绳', '跳高', '跳跃'], sentence: '我会跳绳。' },
    { char: '唱', pinyin: 'chàng', meaning: '歌唱', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['唱歌', '合唱'], sentence: '我们一起唱歌。' },
    { char: '买', pinyin: 'mǎi', meaning: '购买', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['买菜', '购买'], sentence: '妈妈去买菜。' },
    { char: '送', pinyin: 'sòng', meaning: '赠送', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['送给', '赠送', '送别'], sentence: '我送你回家。' },
    { char: '吃', pinyin: 'chī', meaning: '吃东西', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['吃饭', '好吃'], sentence: '我在吃饭。' },
    { char: '喝', pinyin: 'hē', meaning: '喝水', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['喝水', '喝茶'], sentence: '我要喝水。' },
    { char: '看', pinyin: 'kàn', meaning: '观看', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['看书', '观看', '看见'], sentence: '我在看书。' },
    { char: '听', pinyin: 'tīng', meaning: '聆听', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['听话', '听见', '聆听'], sentence: '我听见了。' },
    { char: '说', pinyin: 'shuō', meaning: '说话', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['说话', '说明'], sentence: '请你说。' },
    { char: '读', pinyin: 'dú', meaning: '阅读', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['读书', '阅读', '朗读'], sentence: '我爱读书。' },
    { char: '写', pinyin: 'xiě', meaning: '书写', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['写字', '书写'], sentence: '我在写字。' },
    { char: '画', pinyin: 'huà', meaning: '绘画', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['画画', '绘画', '图画'], sentence: '我爱画画。' },
    { char: '玩', pinyin: 'wán', meaning: '玩耍', category: CATEGORIES.ACTIONS, difficulty: 1, words: ['玩耍', '玩游戏'], sentence: '我们一起玩。' },
    { char: '做', pinyin: 'zuò', meaning: '做事', category: CATEGORIES.ACTIONS, difficulty: 2, words: ['做操', '做作业', '做饭'], sentence: '我在做作业。' },

    // ============ 方位 ============
    { char: '东', pinyin: 'dōng', meaning: '东方', category: CATEGORIES.DIRECTIONS, difficulty: 2, words: ['东方', '东边', '东西'], sentence: '太阳从东边升起。' },
    { char: '西', pinyin: 'xī', meaning: '西方', category: CATEGORIES.DIRECTIONS, difficulty: 2, words: ['西方', '西边', '东西'], sentence: '太阳从西边落下。' },
    { char: '南', pinyin: 'nán', meaning: '南方', category: CATEGORIES.DIRECTIONS, difficulty: 2, words: ['南方', '南边'], sentence: '燕子飞向南方。' },
    { char: '北', pinyin: 'běi', meaning: '北方', category: CATEGORIES.DIRECTIONS, difficulty: 2, words: ['北方', '北边'], sentence: '北京在北方。' },
    { char: '左', pinyin: 'zuǒ', meaning: '左边', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['左边', '左手', '左右'], sentence: '请向左转。' },
    { char: '右', pinyin: 'yòu', meaning: '右边', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['右边', '右手', '左右'], sentence: '请向右转。' },
    { char: '前', pinyin: 'qián', meaning: '前面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['前面', '前进', '以前'], sentence: '向前走。' },
    { char: '后', pinyin: 'hòu', meaning: '后面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['后面', '后来', '以后'], sentence: '站在后面。' },
    { char: '上', pinyin: 'shàng', meaning: '上面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['上面', '上学', '上课'], sentence: '书在桌子上面。' },
    { char: '下', pinyin: 'xià', meaning: '下面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['下面', '下课', '下雨'], sentence: '猫在桌子下面。' },
    { char: '里', pinyin: 'lǐ', meaning: '里面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['里面', '这里', '那里'], sentence: '书包里有书。' },
    { char: '外', pinyin: 'wài', meaning: '外面', category: CATEGORIES.DIRECTIONS, difficulty: 1, words: ['外面', '外边', '课外'], sentence: '我在外面玩。' },

    // ============ 数学词汇 ============
    { char: '算', pinyin: 'suàn', meaning: '计算', category: CATEGORIES.MATH, difficulty: 2, words: ['算术', '计算', '算式'], sentence: '我会算术。' },
    { char: '式', pinyin: 'shì', meaning: '样式', category: CATEGORIES.MATH, difficulty: 2, words: ['算式', '公式', '形式'], sentence: '请写出算式。' },
    { char: '加', pinyin: 'jiā', meaning: '加法', category: CATEGORIES.MATH, difficulty: 1, words: ['加法', '加上', '增加'], sentence: '三加二等于五。' },
    { char: '减', pinyin: 'jiǎn', meaning: '减法', category: CATEGORIES.MATH, difficulty: 2, words: ['减法', '减去', '减少'], sentence: '五减三等于二。' },
    { char: '乘', pinyin: 'chéng', meaning: '乘法', category: CATEGORIES.MATH, difficulty: 2, words: ['乘法', '乘以'], sentence: '三乘二等于六。' },
    { char: '除', pinyin: 'chú', meaning: '除法', category: CATEGORIES.MATH, difficulty: 2, words: ['除法', '除以'], sentence: '六除以二等于三。' },
    { char: '等', pinyin: 'děng', meaning: '等于', category: CATEGORIES.MATH, difficulty: 2, words: ['等于', '等待', '平等'], sentence: '一加一等于二。' },
    { char: '被', pinyin: 'bèi', meaning: '被动', category: CATEGORIES.MATH, difficulty: 2, words: ['被减数', '被除数'], sentence: '十是被减数。' },
    { char: '差', pinyin: 'chā', meaning: '差别', category: CATEGORIES.MATH, difficulty: 2, words: ['差', '差别', '误差'], sentence: '差是五。' },
    { char: '和', pinyin: 'hé', meaning: '和', category: CATEGORIES.MATH, difficulty: 1, words: ['和', '总和', '求和'], sentence: '和是十。' },
    { char: '倍', pinyin: 'bèi', meaning: '倍数', category: CATEGORIES.MATH, difficulty: 2, words: ['倍', '倍数', '加倍'], sentence: '六是三的二倍。' },
    { char: '共', pinyin: 'gòng', meaning: '一共', category: CATEGORIES.MATH, difficulty: 2, words: ['一共', '共同', '总共'], sentence: '一共有十个。' },
    { char: '剩', pinyin: 'shèng', meaning: '剩余', category: CATEGORIES.MATH, difficulty: 3, words: ['剩下', '剩余'], sentence: '还剩五个。' },
    { char: '比', pinyin: 'bǐ', meaning: '比较', category: CATEGORIES.MATH, difficulty: 2, words: ['比较', '相比'], sentence: '五比三大。' },

    // ============ 物品 ============
    { char: '笔', pinyin: 'bǐ', meaning: '笔', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['钢笔', '铅笔', '毛笔'], sentence: '我用笔写字。' },
    { char: '钢', pinyin: 'gāng', meaning: '钢铁', category: CATEGORIES.OBJECTS, difficulty: 3, words: ['钢笔', '钢铁'], sentence: '这是一支钢笔。' },
    { char: '铅', pinyin: 'qiān', meaning: '铅', category: CATEGORIES.OBJECTS, difficulty: 3, words: ['铅笔'], sentence: '我用铅笔画画。' },
    { char: '刷', pinyin: 'shuā', meaning: '刷子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['牙刷', '刷子', '刷牙'], sentence: '我有一把牙刷。' },
    { char: '牙', pinyin: 'yá', meaning: '牙齿', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['牙刷', '牙齿', '刷牙'], sentence: '我每天刷牙。' },
    { char: '元', pinyin: 'yuán', meaning: '元钱', category: CATEGORIES.OBJECTS, difficulty: 1, words: ['元', '元钱'], sentence: '这个五元钱。' },
    { char: '钱', pinyin: 'qián', meaning: '金钱', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['钱', '金钱', '花钱'], sentence: '我有零花钱。' },
    { char: '盘', pinyin: 'pán', meaning: '盘子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['盘子', '一盘'], sentence: '盘子里有苹果。' },
    { char: '瓶', pinyin: 'píng', meaning: '瓶子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['花瓶', '瓶子', '水瓶'], sentence: '花瓶里有花。' },
    { char: '纸', pinyin: 'zhǐ', meaning: '纸张', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['纸张', '折纸', '白纸'], sentence: '我要一张纸。' },
    { char: '机', pinyin: 'jī', meaning: '机器', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['飞机', '机器', '手机'], sentence: '飞机飞得很高。' },
    { char: '车', pinyin: 'chē', meaning: '车辆', category: CATEGORIES.OBJECTS, difficulty: 1, words: ['汽车', '火车', '车站'], sentence: '汽车在路上跑。' },
    { char: '风', pinyin: 'fēng', meaning: '风', category: CATEGORIES.OBJECTS, difficulty: 1, words: ['风车', '大风', '风筝'], sentence: '风吹动风车。' },
    { char: '书', pinyin: 'shū', meaning: '书本', category: CATEGORIES.OBJECTS, difficulty: 1, words: ['书本', '读书', '书包'], sentence: '我爱看书。' },
    { char: '包', pinyin: 'bāo', meaning: '包裹', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['书包', '包裹', '钱包'], sentence: '我背着书包。' },
    { char: '桌', pinyin: 'zhuō', meaning: '桌子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['桌子', '书桌', '餐桌'], sentence: '书在桌子上。' },
    { char: '椅', pinyin: 'yǐ', meaning: '椅子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['椅子', '轮椅'], sentence: '请坐在椅子上。' },
    { char: '棒', pinyin: 'bàng', meaning: '棒子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['小棒', '木棒'], sentence: '我有二十四根小棒。' },
    { char: '具', pinyin: 'jù', meaning: '工具', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['文具', '工具', '玩具'], sentence: '这是一盒文具。' },
    { char: '盒', pinyin: 'hé', meaning: '盒子', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['盒子', '文具盒'], sentence: '盒子里有五支笔。' },
    { char: '支', pinyin: 'zhī', meaning: '支', category: CATEGORIES.OBJECTS, difficulty: 2, words: ['一支', '支持'], sentence: '我有一支笔。' },

    // ============ 自然 ============
    { char: '天', pinyin: 'tiān', meaning: '天空', category: CATEGORIES.NATURE, difficulty: 1, words: ['天空', '今天', '明天'], sentence: '天空很蓝。' },
    { char: '地', pinyin: 'dì', meaning: '大地', category: CATEGORIES.NATURE, difficulty: 1, words: ['大地', '土地', '草地'], sentence: '草地上有花。' },
    { char: '水', pinyin: 'shuǐ', meaning: '水', category: CATEGORIES.NATURE, difficulty: 1, words: ['水', '河水', '喝水'], sentence: '河水清清的。' },
    { char: '火', pinyin: 'huǒ', meaning: '火焰', category: CATEGORIES.NATURE, difficulty: 1, words: ['火焰', '火车', '着火'], sentence: '火很热。' },
    { char: '山', pinyin: 'shān', meaning: '山', category: CATEGORIES.NATURE, difficulty: 1, words: ['大山', '山上', '爬山'], sentence: '山很高。' },
    { char: '云', pinyin: 'yún', meaning: '云彩', category: CATEGORIES.NATURE, difficulty: 1, words: ['白云', '云彩', '乌云'], sentence: '白云在天上飘。' },
    { char: '雨', pinyin: 'yǔ', meaning: '雨水', category: CATEGORIES.NATURE, difficulty: 1, words: ['下雨', '雨水', '大雨'], sentence: '今天下雨了。' },
    { char: '雪', pinyin: 'xuě', meaning: '雪花', category: CATEGORIES.NATURE, difficulty: 2, words: ['下雪', '雪花', '雪人'], sentence: '冬天下雪了。' },
    { char: '河', pinyin: 'hé', meaning: '河流', category: CATEGORIES.NATURE, difficulty: 2, words: ['河流', '小河', '河边'], sentence: '小河边有柳树。' },
    { char: '阳', pinyin: 'yáng', meaning: '阳光', category: CATEGORIES.NATURE, difficulty: 2, words: ['太阳', '阳光'], sentence: '太阳出来了。' },
    { char: '月', pinyin: 'yuè', meaning: '月亮', category: CATEGORIES.NATURE, difficulty: 1, words: ['月亮', '月光', '一月'], sentence: '月亮圆圆的。' },
    { char: '星', pinyin: 'xīng', meaning: '星星', category: CATEGORIES.NATURE, difficulty: 2, words: ['星星', '明星'], sentence: '天上有很多星星。' },

    // ============ 身体 ============
    { char: '头', pinyin: 'tóu', meaning: '头部', category: CATEGORIES.BODY, difficulty: 1, words: ['头发', '点头', '摇头'], sentence: '我点点头。' },
    { char: '手', pinyin: 'shǒu', meaning: '手', category: CATEGORIES.BODY, difficulty: 1, words: ['手', '左手', '右手'], sentence: '我有两只手。' },
    { char: '脚', pinyin: 'jiǎo', meaning: '脚', category: CATEGORIES.BODY, difficulty: 2, words: ['脚', '小脚', '脚步'], sentence: '我用脚走路。' },
    { char: '眼', pinyin: 'yǎn', meaning: '眼睛', category: CATEGORIES.BODY, difficulty: 2, words: ['眼睛', '眼光'], sentence: '眼睛是心灵的窗户。' },
    { char: '耳', pinyin: 'ěr', meaning: '耳朵', category: CATEGORIES.BODY, difficulty: 1, words: ['耳朵', '耳机'], sentence: '我有两只耳朵。' },
    { char: '口', pinyin: 'kǒu', meaning: '嘴巴', category: CATEGORIES.BODY, difficulty: 1, words: ['嘴巴', '开口', '门口'], sentence: '我张开口说话。' },
    { char: '心', pinyin: 'xīn', meaning: '心脏', category: CATEGORIES.BODY, difficulty: 1, words: ['心', '开心', '爱心'], sentence: '我很开心。' },

    // ============ 时间 ============
    { char: '年', pinyin: 'nián', meaning: '年', category: CATEGORIES.TIME, difficulty: 1, words: ['今年', '明年', '新年'], sentence: '新年快乐！' },
    { char: '月', pinyin: 'yuè', meaning: '月份', category: CATEGORIES.TIME, difficulty: 1, words: ['月份', '一月', '二月'], sentence: '一年有十二个月。' },
    { char: '日', pinyin: 'rì', meaning: '日子', category: CATEGORIES.TIME, difficulty: 1, words: ['日子', '今日', '生日'], sentence: '今天是我的生日。' },
    { char: '今', pinyin: 'jīn', meaning: '今天', category: CATEGORIES.TIME, difficulty: 1, words: ['今天', '今年', '今日'], sentence: '今天天气很好。' },
    { char: '明', pinyin: 'míng', meaning: '明天', category: CATEGORIES.TIME, difficulty: 1, words: ['明天', '明年', '明亮'], sentence: '明天我去上学。' },
    { char: '早', pinyin: 'zǎo', meaning: '早晨', category: CATEGORIES.TIME, difficulty: 1, words: ['早上', '早晨', '早安'], sentence: '早上好！' },
    { char: '晚', pinyin: 'wǎn', meaning: '晚上', category: CATEGORIES.TIME, difficulty: 2, words: ['晚上', '晚安', '晚饭'], sentence: '晚上好！' },
    { char: '午', pinyin: 'wǔ', meaning: '中午', category: CATEGORIES.TIME, difficulty: 2, words: ['中午', '上午', '下午'], sentence: '中午吃饭了。' },
    { char: '分', pinyin: 'fēn', meaning: '分钟', category: CATEGORIES.TIME, difficulty: 1, words: ['分钟', '十分', '分数'], sentence: '一小时有六十分钟。' },
    { char: '点', pinyin: 'diǎn', meaning: '点钟', category: CATEGORIES.TIME, difficulty: 1, words: ['点钟', '一点', '点头'], sentence: '现在是八点钟。' },
    { char: '钟', pinyin: 'zhōng', meaning: '时钟', category: CATEGORIES.TIME, difficulty: 2, words: ['时钟', '钟表', '分钟'], sentence: '时钟在墙上。' },

    // ============ 常用字 ============
    { char: '是', pinyin: 'shì', meaning: '是', category: CATEGORIES.COMMON, difficulty: 1, words: ['是', '但是', '还是'], sentence: '我是学生。' },
    { char: '的', pinyin: 'de', meaning: '的', category: CATEGORIES.COMMON, difficulty: 1, words: ['我的', '你的', '他的'], sentence: '这是我的书。' },
    { char: '有', pinyin: 'yǒu', meaning: '有', category: CATEGORIES.COMMON, difficulty: 1, words: ['有', '没有', '拥有'], sentence: '我有一本书。' },
    { char: '没', pinyin: 'méi', meaning: '没有', category: CATEGORIES.COMMON, difficulty: 1, words: ['没有', '没关系'], sentence: '我没有铅笔。' },
    { char: '在', pinyin: 'zài', meaning: '在', category: CATEGORIES.COMMON, difficulty: 1, words: ['在', '正在', '存在'], sentence: '我在家里。' },
    { char: '这', pinyin: 'zhè', meaning: '这个', category: CATEGORIES.COMMON, difficulty: 1, words: ['这个', '这里', '这样'], sentence: '这是什么？' },
    { char: '那', pinyin: 'nà', meaning: '那个', category: CATEGORIES.COMMON, difficulty: 1, words: ['那个', '那里', '那样'], sentence: '那是学校。' },
    { char: '个', pinyin: 'gè', meaning: '个', category: CATEGORIES.COMMON, difficulty: 1, words: ['一个', '几个', '个人'], sentence: '我有三个苹果。' },
    { char: '只', pinyin: 'zhī', meaning: '只', category: CATEGORIES.COMMON, difficulty: 1, words: ['一只', '只有'], sentence: '一只小鸟。' },
    { char: '多', pinyin: 'duō', meaning: '很多', category: CATEGORIES.COMMON, difficulty: 1, words: ['很多', '多少', '许多'], sentence: '我有很多书。' },
    { char: '少', pinyin: 'shǎo', meaning: '很少', category: CATEGORIES.COMMON, difficulty: 1, words: ['很少', '多少', '少数'], sentence: '这里人很少。' },
    { char: '大', pinyin: 'dà', meaning: '大', category: CATEGORIES.COMMON, difficulty: 1, words: ['大', '大人', '大小'], sentence: '这棵树很大。' },
    { char: '小', pinyin: 'xiǎo', meaning: '小', category: CATEGORIES.COMMON, difficulty: 1, words: ['小', '大小', '小孩'], sentence: '这只猫很小。' },
    { char: '长', pinyin: 'cháng', meaning: '长', category: CATEGORIES.COMMON, difficulty: 1, words: ['长', '长短', '校长'], sentence: '这条路很长。' },
    { char: '短', pinyin: 'duǎn', meaning: '短', category: CATEGORIES.COMMON, difficulty: 2, words: ['短', '长短', '短小'], sentence: '这根绳子很短。' },
    { char: '高', pinyin: 'gāo', meaning: '高', category: CATEGORIES.COMMON, difficulty: 1, words: ['高', '高低', '高大'], sentence: '这座山很高。' },
    { char: '低', pinyin: 'dī', meaning: '低', category: CATEGORIES.COMMON, difficulty: 2, words: ['低', '高低', '降低'], sentence: '声音很低。' },
    { char: '快', pinyin: 'kuài', meaning: '快速', category: CATEGORIES.COMMON, difficulty: 1, words: ['快', '快乐', '快速'], sentence: '我跑得很快。' },
    { char: '慢', pinyin: 'màn', meaning: '慢', category: CATEGORIES.COMMON, difficulty: 2, words: ['慢', '慢慢', '缓慢'], sentence: '乌龟爬得很慢。' },
    { char: '好', pinyin: 'hǎo', meaning: '好', category: CATEGORIES.COMMON, difficulty: 1, words: ['好', '你好', '好看'], sentence: '你好！' },
    { char: '美', pinyin: 'měi', meaning: '美丽', category: CATEGORIES.COMMON, difficulty: 2, words: ['美丽', '美好', '美术'], sentence: '这朵花很美。' },
    { char: '可', pinyin: 'kě', meaning: '可以', category: CATEGORIES.COMMON, difficulty: 1, words: ['可以', '可爱', '可是'], sentence: '我可以去吗？' },
    { char: '爱', pinyin: 'ài', meaning: '爱', category: CATEGORIES.COMMON, difficulty: 1, words: ['爱', '可爱', '爱心'], sentence: '我爱妈妈。' },
    { char: '白', pinyin: 'bái', meaning: '白色', category: CATEGORIES.COMMON, difficulty: 1, words: ['白色', '白云', '白天'], sentence: '白云很美。' },
    { char: '红', pinyin: 'hóng', meaning: '红色', category: CATEGORIES.COMMON, difficulty: 1, words: ['红色', '红花', '红旗'], sentence: '苹果是红色的。' },
    { char: '绿', pinyin: 'lǜ', meaning: '绿色', category: CATEGORIES.COMMON, difficulty: 2, words: ['绿色', '绿叶', '绿草'], sentence: '小草是绿色的。' },
    { char: '蓝', pinyin: 'lán', meaning: '蓝色', category: CATEGORIES.COMMON, difficulty: 2, words: ['蓝色', '蓝天'], sentence: '天空是蓝色的。' },
    { char: '黄', pinyin: 'huáng', meaning: '黄色', category: CATEGORIES.COMMON, difficulty: 2, words: ['黄色', '黄瓜', '黄金'], sentence: '香蕉是黄色的。' },
    { char: '黑', pinyin: 'hēi', meaning: '黑色', category: CATEGORIES.COMMON, difficulty: 2, words: ['黑色', '黑夜', '黑板'], sentence: '黑板是黑色的。' },
    { char: '男', pinyin: 'nán', meaning: '男', category: CATEGORIES.COMMON, difficulty: 2, words: ['男生', '男孩', '男人'], sentence: '班里有十个男生。' },
    { char: '女', pinyin: 'nǚ', meaning: '女', category: CATEGORIES.COMMON, difficulty: 1, words: ['女生', '女孩', '女人'], sentence: '班里有八个女生。' },
    { char: '生', pinyin: 'shēng', meaning: '生', category: CATEGORIES.COMMON, difficulty: 1, words: ['学生', '生日', '生活'], sentence: '我是学生。' },
    { char: '师', pinyin: 'shī', meaning: '老师', category: CATEGORIES.COMMON, difficulty: 2, words: ['老师', '师傅', '教师'], sentence: '老师教我们知识。' },
    { char: '老', pinyin: 'lǎo', meaning: '年老', category: CATEGORIES.COMMON, difficulty: 1, words: ['老师', '老人', '老虎'], sentence: '老师很和蔼。' },
    { char: '新', pinyin: 'xīn', meaning: '新', category: CATEGORIES.COMMON, difficulty: 2, words: ['新', '新年', '新的'], sentence: '我有一本新书。' },
    { char: '能', pinyin: 'néng', meaning: '能够', category: CATEGORIES.COMMON, difficulty: 2, words: ['能', '能够', '才能'], sentence: '我能做到。' },
    { char: '会', pinyin: 'huì', meaning: '会', category: CATEGORIES.COMMON, difficulty: 1, words: ['会', '学会', '开会'], sentence: '我会写字。' },
    { char: '要', pinyin: 'yào', meaning: '要', category: CATEGORIES.COMMON, difficulty: 1, words: ['要', '需要', '不要'], sentence: '我要去学校。' },
    { char: '请', pinyin: 'qǐng', meaning: '请', category: CATEGORIES.COMMON, difficulty: 2, words: ['请', '请问', '请坐'], sentence: '请进。' },
    { char: '谢', pinyin: 'xiè', meaning: '感谢', category: CATEGORIES.COMMON, difficulty: 2, words: ['谢谢', '感谢'], sentence: '谢谢你！' },
    { char: '对', pinyin: 'duì', meaning: '正确', category: CATEGORIES.COMMON, difficulty: 1, words: ['对', '对不起', '正确'], sentence: '你说得对。' },
    { char: '错', pinyin: 'cuò', meaning: '错误', category: CATEGORIES.COMMON, difficulty: 2, words: ['错', '错误', '不错'], sentence: '这道题做错了。' },
    { char: '问', pinyin: 'wèn', meaning: '问', category: CATEGORIES.COMMON, difficulty: 2, words: ['问', '问题', '请问'], sentence: '我问你一个问题。' },
    { char: '答', pinyin: 'dá', meaning: '回答', category: CATEGORIES.COMMON, difficulty: 2, words: ['回答', '问答', '答案'], sentence: '请回答问题。' },
    { char: '题', pinyin: 'tí', meaning: '题目', category: CATEGORIES.COMMON, difficulty: 2, words: ['问题', '题目', '难题'], sentence: '这道题很难。' },
    { char: '本', pinyin: 'běn', meaning: '本子', category: CATEGORIES.COMMON, difficulty: 1, words: ['本子', '课本', '书本'], sentence: '我有一本书。' },
    { char: '课', pinyin: 'kè', meaning: '课程', category: CATEGORIES.COMMON, difficulty: 2, words: ['上课', '下课', '课本'], sentence: '我们开始上课。' }
];


// 合并所有分类
export const ALL_CATEGORIES = { ...CATEGORIES, ...EXTENDED_CATEGORIES };

// 合并核心汉字库和扩展汉字库（去重）
const seenChars = new Set();
const baseCharacters = characters.filter(char => {
    if (seenChars.has(char.char)) return false;
    seenChars.add(char.char);
    return true;
});

const additionalCharacters = extendedCharacters.filter(char => {
    if (seenChars.has(char.char)) return false;
    seenChars.add(char.char);
    return true;
});

// 完整汉字库
export const allCharacters = [...baseCharacters, ...additionalCharacters];

// 获取所有分类
export const getAllCategories = () => Object.values(ALL_CATEGORIES);

// 按分类筛选
export const getCharactersByCategory = (category) => {
    return allCharacters.filter(char => char.category === category);
};

// 按难度筛选
export const getCharactersByDifficulty = (difficulty) => {
    return allCharacters.filter(char => char.difficulty === difficulty);
};

// 随机获取指定数量的汉字
export const getRandomCharacters = (count, excludeIds = []) => {
    const available = allCharacters.filter((_, index) => !excludeIds.includes(index));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

// 搜索汉字
export const searchCharacters = (query) => {
    const lowerQuery = query.toLowerCase();
    return allCharacters.filter(char =>
        char.char.includes(query) ||
        char.pinyin.toLowerCase().includes(lowerQuery) ||
        char.meaning.includes(query) ||
        char.words.some(word => word.includes(query))
    );
};

// 获取汉字总数
export const getTotalCount = () => allCharacters.length;

// 获取分类统计
export const getCategoryStats = () => {
    const stats = {};
    Object.values(ALL_CATEGORIES).forEach(cat => {
        stats[cat] = allCharacters.filter(c => c.category === cat).length;
    });
    return stats;
};

// 默认导出完整汉字库
export default allCharacters;

