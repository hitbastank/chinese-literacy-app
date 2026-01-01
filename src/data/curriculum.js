/**
 * 中文识字课程数据
 * 10个难度级别，字数从30递减到9-10
 * 每个汉字包含Minecraft主题造句
 */

// 难度级别配置
export const LEVEL_CONFIG = [
    { level: 1, charsPerLesson: 30, title: '入门级', description: '最简单的基础汉字' },
    { level: 2, charsPerLesson: 20, title: '基础级', description: '简单的常用字' },
    { level: 3, charsPerLesson: 18, title: '初级', description: '常见动植物词汇' },
    { level: 4, charsPerLesson: 16, title: '进阶级', description: '常用动词形容词' },
    { level: 5, charsPerLesson: 15, title: '中级', description: '方位与时间词汇' },
    { level: 6, charsPerLesson: 14, title: '提高级', description: '抽象概念词汇' },
    { level: 7, charsPerLesson: 12, title: '高级', description: '复杂合体字' },
    { level: 8, charsPerLesson: 11, title: '挑战级', description: '多音字形近字' },
    { level: 9, charsPerLesson: 10, title: '精通级', description: '偏难常用字' },
    { level: 10, charsPerLesson: 9, title: '大师级', description: '最难的常用字' }
];

/**
 * 课程数据
 * 每课包含指定数量的汉字，字与字之间尽量无关联
 */
export const lessons = [
    // ============ 第一级 入门级 (每课30字) ============
    {
        id: 'L1-1',
        level: 1,
        title: '第一课：基础世界',
        characters: [
            { char: '一', pinyin: 'yī', meaning: '数字1', words: ['一个', '一天'], example: '我有一本书。', minecraftSentence: '史蒂夫挖到了一块钻石。' },
            { char: '二', pinyin: 'èr', meaning: '数字2', words: ['二月', '第二'], example: '二加三等于五。', minecraftSentence: '我需要二根木棍做工具。' },
            { char: '三', pinyin: 'sān', meaning: '数字3', words: ['三个', '三月'], example: '桌上有三个苹果。', minecraftSentence: '用三块羊毛合成一张床。' },
            { char: '大', pinyin: 'dà', meaning: '大的', words: ['大小', '大人'], example: '这棵树很大。', minecraftSentence: '我建造了一座大房子。' },
            { char: '小', pinyin: 'xiǎo', meaning: '小的', words: ['小鸟', '大小'], example: '小猫很可爱。', minecraftSentence: '小鸡跟着我走来走去。' },
            { char: '上', pinyin: 'shàng', meaning: '上面', words: ['上面', '上学'], example: '书在桌子上。', minecraftSentence: '我爬上了高山看风景。' },
            { char: '下', pinyin: 'xià', meaning: '下面', words: ['下面', '下雨'], example: '猫在桌子下面。', minecraftSentence: '钻石在地下很深的地方。' },
            { char: '人', pinyin: 'rén', meaning: '人类', words: ['人们', '大人'], example: '公园里有很多人。', minecraftSentence: '村庄里住着很多村民。' },
            { char: '口', pinyin: 'kǒu', meaning: '嘴巴', words: ['门口', '开口'], example: '我张开口说话。', minecraftSentence: '僵尸张开口想咬我！' },
            { char: '手', pinyin: 'shǒu', meaning: '手', words: ['左手', '右手'], example: '我有两只手。', minecraftSentence: '用手拿着钻石剑战斗。' },
            { char: '日', pinyin: 'rì', meaning: '太阳/日子', words: ['日子', '生日'], example: '今天是我的生日。', minecraftSentence: '白日里怪物不会出现。' },
            { char: '月', pinyin: 'yuè', meaning: '月亮', words: ['月亮', '一月'], example: '月亮圆圆的。', minecraftSentence: '月光照亮了我的农场。' },
            { char: '水', pinyin: 'shuǐ', meaning: '水', words: ['喝水', '河水'], example: '河水清清的。', minecraftSentence: '水桶可以装水浇灭岩浆。' },
            { char: '火', pinyin: 'huǒ', meaning: '火焰', words: ['火焰', '着火'], example: '火很热。', minecraftSentence: '用打火石点燃火把照明。' },
            { char: '山', pinyin: 'shān', meaning: '山', words: ['大山', '爬山'], example: '山很高。', minecraftSentence: '我在山顶建了一座瞭望塔。' },
            { char: '石', pinyin: 'shí', meaning: '石头', words: ['石头', '宝石'], example: '这块石头很硬。', minecraftSentence: '用木镐可以挖掘石头。' },
            { char: '田', pinyin: 'tián', meaning: '田地', words: ['田地', '农田'], example: '农民在田里干活。', minecraftSentence: '我开垦了一片田地种小麦。' },
            { char: '土', pinyin: 'tǔ', meaning: '泥土', words: ['土地', '泥土'], example: '土是棕色的。', minecraftSentence: '用锄头把土变成耕地。' },
            { char: '木', pinyin: 'mù', meaning: '木头', words: ['木头', '树木'], example: '这是一块木头。', minecraftSentence: '砍树可以获得木头方块。' },
            { char: '天', pinyin: 'tiān', meaning: '天空', words: ['天空', '今天'], example: '天空很蓝。', minecraftSentence: '末影龙在天上飞来飞去。' },
            { char: '云', pinyin: 'yún', meaning: '云彩', words: ['白云', '云彩'], example: '白云在天上飘。', minecraftSentence: '飞得太高会穿过云层。' },
            { char: '雨', pinyin: 'yǔ', meaning: '雨水', words: ['下雨', '大雨'], example: '今天下雨了。', minecraftSentence: '下雨天骷髅不会着火。' },
            { char: '风', pinyin: 'fēng', meaning: '风', words: ['大风', '风车'], example: '风吹动树叶。', minecraftSentence: '风吹动旗帜飘扬。' },
            { char: '花', pinyin: 'huā', meaning: '花朵', words: ['花朵', '红花'], example: '花儿真美丽。', minecraftSentence: '用各种花做成染料。' },
            { char: '草', pinyin: 'cǎo', meaning: '草', words: ['小草', '草地'], example: '小草绿绿的。', minecraftSentence: '羊喜欢吃草地上的草。' },
            { char: '虫', pinyin: 'chóng', meaning: '虫子', words: ['虫子', '昆虫'], example: '这条虫子很长。', minecraftSentence: '蜘蛛是一种大虫子。' },
            { char: '鱼', pinyin: 'yú', meaning: '鱼', words: ['小鱼', '金鱼'], example: '鱼儿在水里游。', minecraftSentence: '用钓竿可以钓到鱼。' },
            { char: '鸟', pinyin: 'niǎo', meaning: '鸟', words: ['小鸟', '飞鸟'], example: '小鸟在树上唱歌。', minecraftSentence: '鹦鹉是一种会说话的鸟。' },
            { char: '牛', pinyin: 'niú', meaning: '牛', words: ['牛奶', '水牛'], example: '牛在田里耕地。', minecraftSentence: '牛可以用小麦来繁殖。' },
            { char: '羊', pinyin: 'yáng', meaning: '羊', words: ['小羊', '山羊'], example: '小羊在草地上吃草。', minecraftSentence: '剪刀可以给羊剪毛。' }
        ]
    },
    {
        id: 'L1-2',
        level: 1,
        title: '第二课：家园探索',
        characters: [
            { char: '四', pinyin: 'sì', meaning: '数字4', words: ['四个', '四月'], example: '一年有四季。', minecraftSentence: '四根木棍可以做一个梯子。' },
            { char: '五', pinyin: 'wǔ', meaning: '数字5', words: ['五个', '五月'], example: '我有五本书。', minecraftSentence: '五块铁锭可以做一个铁桶。' },
            { char: '六', pinyin: 'liù', meaning: '数字6', words: ['六个', '六月'], example: '六加四等于十。', minecraftSentence: '六块木板可以做一扇门。' },
            { char: '七', pinyin: 'qī', meaning: '数字7', words: ['七个', '七月'], example: '一周有七天。', minecraftSentence: '七个铁块可以做一个铁傀儡。' },
            { char: '八', pinyin: 'bā', meaning: '数字8', words: ['八个', '八月'], example: '八减三等于五。', minecraftSentence: '八块石头可以做一个熔炉。' },
            { char: '九', pinyin: 'jiǔ', meaning: '数字9', words: ['九个', '九月'], example: '九是最大的个位数。', minecraftSentence: '需要十四块黑曜石做传送门。' },
            { char: '十', pinyin: 'shí', meaning: '数字10', words: ['十个', '十月'], example: '十个手指。', minecraftSentence: '十块雪球可以做一个雪傀儡。' },
            { char: '百', pinyin: 'bǎi', meaning: '数字100', words: ['一百', '百花'], example: '一百个苹果。', minecraftSentence: '我收集了一百块钻石！' },
            { char: '左', pinyin: 'zuǒ', meaning: '左边', words: ['左边', '左手'], example: '请向左转。', minecraftSentence: '宝箱在左边的房间里。' },
            { char: '右', pinyin: 'yòu', meaning: '右边', words: ['右边', '右手'], example: '请向右转。', minecraftSentence: '右边有一个村庄。' },
            { char: '前', pinyin: 'qián', meaning: '前面', words: ['前面', '前进'], example: '向前走。', minecraftSentence: '前方有一个矿洞入口。' },
            { char: '后', pinyin: 'hòu', meaning: '后面', words: ['后面', '后来'], example: '站在后面。', minecraftSentence: '小心后面有苦力怕！' },
            { char: '里', pinyin: 'lǐ', meaning: '里面', words: ['里面', '这里'], example: '书包里有书。', minecraftSentence: '箱子里装满了宝贝。' },
            { char: '外', pinyin: 'wài', meaning: '外面', words: ['外面', '外边'], example: '我在外面玩。', minecraftSentence: '晚上外面有僵尸。' },
            { char: '门', pinyin: 'mén', meaning: '门', words: ['大门', '开门'], example: '请开门。', minecraftSentence: '关好门防止怪物进来。' },
            { char: '窗', pinyin: 'chuāng', meaning: '窗户', words: ['窗户', '窗口'], example: '窗户很明亮。', minecraftSentence: '透过窗户可以看到外面。' },
            { char: '床', pinyin: 'chuáng', meaning: '床', words: ['床上', '起床'], example: '我在床上睡觉。', minecraftSentence: '睡床可以跳过黑夜。' },
            { char: '桌', pinyin: 'zhuō', meaning: '桌子', words: ['桌子', '书桌'], example: '书在桌子上。', minecraftSentence: '工作台是一种特殊的桌子。' },
            { char: '椅', pinyin: 'yǐ', meaning: '椅子', words: ['椅子', '轮椅'], example: '请坐在椅子上。', minecraftSentence: '用楼梯方块可以做椅子。' },
            { char: '灯', pinyin: 'dēng', meaning: '灯', words: ['电灯', '灯光'], example: '灯很亮。', minecraftSentence: '红石灯可以用红石控制。' },
            { char: '家', pinyin: 'jiā', meaning: '家', words: ['家庭', '回家'], example: '我爱我家。', minecraftSentence: '我的家建在山顶上。' },
            { char: '屋', pinyin: 'wū', meaning: '房屋', words: ['房屋', '屋子'], example: '这间屋子很大。', minecraftSentence: '我用石砖建造了一间屋子。' },
            { char: '房', pinyin: 'fáng', meaning: '房子', words: ['房子', '房间'], example: '这是我的房子。', minecraftSentence: '村民的房子有工作台。' },
            { char: '园', pinyin: 'yuán', meaning: '园子', words: ['花园', '公园'], example: '公园里有很多花。', minecraftSentence: '我建了一个漂亮的花园。' },
            { char: '路', pinyin: 'lù', meaning: '道路', words: ['马路', '走路'], example: '这条路很长。', minecraftSentence: '沿着路走可以找到村庄。' },
            { char: '车', pinyin: 'chē', meaning: '车', words: ['汽车', '火车'], example: '汽车在路上跑。', minecraftSentence: '矿车可以在铁轨上跑。' },
            { char: '船', pinyin: 'chuán', meaning: '船', words: ['小船', '船只'], example: '船在水上漂。', minecraftSentence: '坐船可以快速过河。' },
            { char: '飞', pinyin: 'fēi', meaning: '飞行', words: ['飞机', '飞翔'], example: '小鸟飞走了。', minecraftSentence: '用鞘翅可以在天上飞。' },
            { char: '走', pinyin: 'zǒu', meaning: '行走', words: ['走路', '走开'], example: '我们一起走。', minecraftSentence: '走在岩浆旁边很危险。' },
            { char: '跑', pinyin: 'pǎo', meaning: '奔跑', words: ['跑步', '奔跑'], example: '我跑得很快。', minecraftSentence: '史蒂夫可以跑得很快。' }
        ]
    },
    {
        id: 'L1-3',
        level: 1,
        title: '第三课：冒险伙伴',
        characters: [
            { char: '爸', pinyin: 'bà', meaning: '父亲', words: ['爸爸', '阿爸'], example: '爸爸在工作。', minecraftSentence: '爸爸教我怎么玩这个游戏。' },
            { char: '妈', pinyin: 'mā', meaning: '母亲', words: ['妈妈', '大妈'], example: '妈妈去买菜了。', minecraftSentence: '妈妈帮我建了一座城堡。' },
            { char: '哥', pinyin: 'gē', meaning: '兄长', words: ['哥哥', '大哥'], example: '哥哥比我大两岁。', minecraftSentence: '哥哥和我一起挖矿。' },
            { char: '姐', pinyin: 'jiě', meaning: '姐姐', words: ['姐姐', '大姐'], example: '姐姐教我写字。', minecraftSentence: '姐姐种了很多南瓜。' },
            { char: '弟', pinyin: 'dì', meaning: '弟弟', words: ['弟弟', '兄弟'], example: '弟弟在玩游戏。', minecraftSentence: '弟弟养了很多小猪。' },
            { char: '妹', pinyin: 'mèi', meaning: '妹妹', words: ['妹妹', '姐妹'], example: '妹妹很可爱。', minecraftSentence: '妹妹喜欢收集小花。' },
            { char: '爷', pinyin: 'yé', meaning: '祖父', words: ['爷爷', '老爷'], example: '爷爷给我讲故事。', minecraftSentence: '爷爷建造的房子最结实。' },
            { char: '奶', pinyin: 'nǎi', meaning: '祖母', words: ['奶奶', '牛奶'], example: '奶奶做的饭很好吃。', minecraftSentence: '牛可以挤出牛奶喝。' },
            { char: '朋', pinyin: 'péng', meaning: '朋友', words: ['朋友', '亲朋'], example: '我有很多朋友。', minecraftSentence: '和朋友一起建造更有趣。' },
            { char: '友', pinyin: 'yǒu', meaning: '友人', words: ['朋友', '友好'], example: '我们是好朋友。', minecraftSentence: '狼驯服后会成为好友。' },
            { char: '你', pinyin: 'nǐ', meaning: '你', words: ['你好', '你们'], example: '你好！', minecraftSentence: '你想和我一起冒险吗？' },
            { char: '我', pinyin: 'wǒ', meaning: '我', words: ['我们', '我的'], example: '我是学生。', minecraftSentence: '我找到了钻石！' },
            { char: '他', pinyin: 'tā', meaning: '他', words: ['他们', '他的'], example: '他是我的同学。', minecraftSentence: '他在地下挖到了金矿。' },
            { char: '她', pinyin: 'tā', meaning: '她', words: ['她们', '她的'], example: '她很漂亮。', minecraftSentence: '她建造了一座漂亮的塔。' },
            { char: '好', pinyin: 'hǎo', meaning: '好', words: ['你好', '好看'], example: '你好！', minecraftSentence: '这把剑真是太好了！' },
            { char: '是', pinyin: 'shì', meaning: '是', words: ['是', '但是'], example: '我是学生。', minecraftSentence: '这是一块红石矿。' },
            { char: '的', pinyin: 'de', meaning: '的', words: ['我的', '你的'], example: '这是我的书。', minecraftSentence: '这是我的宝剑。' },
            { char: '有', pinyin: 'yǒu', meaning: '有', words: ['有', '没有'], example: '我有一本书。', minecraftSentence: '箱子里有钻石！' },
            { char: '在', pinyin: 'zài', meaning: '在', words: ['在', '正在'], example: '我在家里。', minecraftSentence: '宝藏在这里！' },
            { char: '这', pinyin: 'zhè', meaning: '这个', words: ['这个', '这里'], example: '这是什么？', minecraftSentence: '这个矿洞很深。' },
            { char: '那', pinyin: 'nà', meaning: '那个', words: ['那个', '那里'], example: '那是学校。', minecraftSentence: '那边有一个村庄。' },
            { char: '不', pinyin: 'bù', meaning: '不', words: ['不是', '不要'], example: '我不知道。', minecraftSentence: '晚上不要出门！' },
            { char: '要', pinyin: 'yào', meaning: '要', words: ['要', '需要'], example: '我要去学校。', minecraftSentence: '我要挖更多钻石。' },
            { char: '会', pinyin: 'huì', meaning: '会', words: ['会', '学会'], example: '我会写字。', minecraftSentence: '我会建造红石机器。' },
            { char: '能', pinyin: 'néng', meaning: '能够', words: ['能', '能够'], example: '我能做到。', minecraftSentence: '鞘翅能让你飞起来。' },
            { char: '来', pinyin: 'lái', meaning: '来', words: ['来', '过来'], example: '你来这里。', minecraftSentence: '怪物向我袭来！' },
            { char: '去', pinyin: 'qù', meaning: '去', words: ['去', '回去'], example: '我去学校。', minecraftSentence: '我们去地狱探险吧！' },
            { char: '看', pinyin: 'kàn', meaning: '看', words: ['看书', '看见'], example: '我在看书。', minecraftSentence: '快看！那是末影人！' },
            { char: '吃', pinyin: 'chī', meaning: '吃', words: ['吃饭', '好吃'], example: '我在吃饭。', minecraftSentence: '吃金苹果可以恢复生命。' },
            { char: '玩', pinyin: 'wán', meaning: '玩耍', words: ['玩耍', '玩游戏'], example: '我们一起玩。', minecraftSentence: '我最喜欢玩创造模式。' }
        ]
    },

    // ============ 第二级 基础级 (每课27字) ============
    {
        id: 'L2-1',
        level: 2,
        title: '第一课：工具与材料',
        characters: [
            { char: '铁', pinyin: 'tiě', meaning: '铁', words: ['铁块', '钢铁'], example: '铁很硬。', minecraftSentence: '铁矿石需要石镐来挖。' },
            { char: '金', pinyin: 'jīn', meaning: '金', words: ['金子', '黄金'], example: '金子闪闪发光。', minecraftSentence: '金苹果需要八块金锭。' },
            { char: '钻', pinyin: 'zuān', meaning: '钻石', words: ['钻石', '钻头'], example: '钻石很珍贵。', minecraftSentence: '钻石是最稀有的矿石。' },
            { char: '煤', pinyin: 'méi', meaning: '煤炭', words: ['煤炭', '煤块'], example: '煤可以燃烧。', minecraftSentence: '煤炭可以用来做火把。' },
            { char: '矿', pinyin: 'kuàng', meaning: '矿石', words: ['矿石', '采矿'], example: '矿山很深。', minecraftSentence: '深处有更多稀有矿石。' },
            { char: '剑', pinyin: 'jiàn', meaning: '剑', words: ['宝剑', '剑术'], example: '这把剑很锋利。', minecraftSentence: '钻石剑是最强的武器。' },
            { char: '弓', pinyin: 'gōng', meaning: '弓', words: ['弓箭', '弯弓'], example: '用弓射箭。', minecraftSentence: '弓箭可以远程攻击怪物。' },
            { char: '箭', pinyin: 'jiàn', meaning: '箭', words: ['弓箭', '箭头'], example: '箭飞得很远。', minecraftSentence: '骷髅射手会射箭。' },
            { char: '盾', pinyin: 'dùn', meaning: '盾牌', words: ['盾牌', '护盾'], example: '盾可以挡住攻击。', minecraftSentence: '盾牌可以挡住苦力怕的爆炸。' },
            { char: '甲', pinyin: 'jiǎ', meaning: '盔甲', words: ['盔甲', '装甲'], example: '穿上盔甲保护身体。', minecraftSentence: '钻石甲防御力最高。' },
            { char: '斧', pinyin: 'fǔ', meaning: '斧头', words: ['斧头', '斧子'], example: '用斧头砍树。', minecraftSentence: '斧头砍木头最快。' },
            { char: '镐', pinyin: 'gǎo', meaning: '镐', words: ['铁镐', '镐子'], example: '镐可以挖矿。', minecraftSentence: '用镐挖掘石头和矿石。' },
            { char: '锹', pinyin: 'qiāo', meaning: '锹铲', words: ['铁锹', '锹子'], example: '用锹挖土。', minecraftSentence: '锹挖泥土和沙子最快。' },
            { char: '锄', pinyin: 'chú', meaning: '锄头', words: ['锄头', '锄地'], example: '锄头可以锄地。', minecraftSentence: '锄头可以开垦农田。' },
            { char: '桶', pinyin: 'tǒng', meaning: '桶', words: ['水桶', '木桶'], example: '桶可以装水。', minecraftSentence: '用桶可以收集水和岩浆。' },
            { char: '砖', pinyin: 'zhuān', meaning: '砖块', words: ['砖块', '石砖'], example: '砖很结实。', minecraftSentence: '石砖是很好的建筑材料。' },
            { char: '板', pinyin: 'bǎn', meaning: '木板', words: ['木板', '地板'], example: '木板很平整。', minecraftSentence: '木板可以做很多东西。' },
            { char: '棍', pinyin: 'gùn', meaning: '棍子', words: ['棍子', '木棍'], example: '棍子很直。', minecraftSentence: '木棍是制作工具的基础。' },
            { char: '绳', pinyin: 'shéng', meaning: '绳子', words: ['绳子', '草绳'], example: '绳子很长。', minecraftSentence: '绳子可以栓住动物。' },
            { char: '皮', pinyin: 'pí', meaning: '皮革', words: ['皮革', '牛皮'], example: '皮很柔软。', minecraftSentence: '牛皮可以做皮甲和书。' },
            { char: '羽', pinyin: 'yǔ', meaning: '羽毛', words: ['羽毛', '羽翼'], example: '羽毛很轻。', minecraftSentence: '羽毛可以用来做箭。' },
            { char: '毛', pinyin: 'máo', meaning: '毛', words: ['羊毛', '毛发'], example: '羊毛很软。', minecraftSentence: '不同颜色的羊毛可以做床。' },
            { char: '骨', pinyin: 'gǔ', meaning: '骨头', words: ['骨头', '骨骼'], example: '骨头很硬。', minecraftSentence: '骨头可以驯服狼。' },
            { char: '粉', pinyin: 'fěn', meaning: '粉末', words: ['粉末', '面粉'], example: '粉很细。', minecraftSentence: '骨粉可以催熟农作物。' },
            { char: '药', pinyin: 'yào', meaning: '药水', words: ['药水', '吃药'], example: '药可以治病。', minecraftSentence: '喝药水可以获得特殊效果。' },
            { char: '瓶', pinyin: 'píng', meaning: '瓶子', words: ['瓶子', '花瓶'], example: '瓶子可以装水。', minecraftSentence: '玻璃瓶可以装药水。' },
            { char: '箱', pinyin: 'xiāng', meaning: '箱子', words: ['箱子', '宝箱'], example: '箱子很大。', minecraftSentence: '箱子可以存放物品。' }
        ]
    },
    {
        id: 'L2-2',
        level: 2,
        title: '第二课：食物与生活',
        characters: [
            { char: '米', pinyin: 'mǐ', meaning: '大米', words: ['大米', '米饭'], example: '米饭很好吃。', minecraftSentence: '种小麦可以做面包。' },
            { char: '面', pinyin: 'miàn', meaning: '面条', words: ['面条', '面包'], example: '我喜欢吃面条。', minecraftSentence: '面包可以恢复饥饿值。' },
            { char: '菜', pinyin: 'cài', meaning: '蔬菜', words: ['蔬菜', '青菜'], example: '多吃蔬菜身体好。', minecraftSentence: '胡萝卜是很好的蔬菜。' },
            { char: '果', pinyin: 'guǒ', meaning: '果实', words: ['水果', '苹果'], example: '苹果是红色的水果。', minecraftSentence: '苹果可以恢复生命值。' },
            { char: '肉', pinyin: 'ròu', meaning: '肉类', words: ['牛肉', '猪肉'], example: '肉很好吃。', minecraftSentence: '烤肉比生肉恢复更多饥饿值。' },
            { char: '蛋', pinyin: 'dàn', meaning: '鸡蛋', words: ['鸡蛋', '蛋糕'], example: '鸡蛋很有营养。', minecraftSentence: '鸡会下蛋。' },
            { char: '奶', pinyin: 'nǎi', meaning: '牛奶', words: ['牛奶', '奶奶'], example: '牛奶是白色的。', minecraftSentence: '牛奶可以解除负面效果。' },
            { char: '糖', pinyin: 'táng', meaning: '糖', words: ['糖果', '白糖'], example: '糖很甜。', minecraftSentence: '甘蔗可以做成糖。' },
            { char: '盐', pinyin: 'yán', meaning: '盐', words: ['食盐', '盐巴'], example: '菜里要放盐。', minecraftSentence: '海水是咸的因为有盐。' },
            { char: '油', pinyin: 'yóu', meaning: '油', words: ['食油', '汽油'], example: '炒菜需要油。', minecraftSentence: '岩浆像油一样会燃烧。' },
            { char: '饭', pinyin: 'fàn', meaning: '米饭', words: ['米饭', '吃饭'], example: '该吃饭了。', minecraftSentence: '吃饱了才有力气冒险。' },
            { char: '汤', pinyin: 'tāng', meaning: '汤', words: ['喝汤', '鸡汤'], example: '这碗汤很热。', minecraftSentence: '蘑菇汤可以恢复饥饿值。' },
            { char: '瓜', pinyin: 'guā', meaning: '瓜', words: ['西瓜', '南瓜'], example: '西瓜很甜。', minecraftSentence: '南瓜可以做成南瓜灯。' },
            { char: '豆', pinyin: 'dòu', meaning: '豆子', words: ['豆子', '绿豆'], example: '豆子可以发芽。', minecraftSentence: '可可豆可以做巧克力饼干。' },
            { char: '茶', pinyin: 'chá', meaning: '茶', words: ['喝茶', '茶叶'], example: '爷爷喜欢喝茶。', minecraftSentence: '休息一下喝杯茶吧。' },
            { char: '酒', pinyin: 'jiǔ', meaning: '酒', words: ['白酒', '喝酒'], example: '小孩不能喝酒。', minecraftSentence: '村民会酿造药水。' },
            { char: '杯', pinyin: 'bēi', meaning: '杯子', words: ['杯子', '水杯'], example: '杯子里有水。', minecraftSentence: '玻璃可以做成杯子。' },
            { char: '碗', pinyin: 'wǎn', meaning: '碗', words: ['饭碗', '碗筷'], example: '碗里有米饭。', minecraftSentence: '用碗可以装蘑菇汤。' },
            { char: '筷', pinyin: 'kuài', meaning: '筷子', words: ['筷子', '碗筷'], example: '用筷子吃饭。', minecraftSentence: '两根棍子像筷子。' },
            { char: '勺', pinyin: 'sháo', meaning: '勺子', words: ['勺子', '汤勺'], example: '用勺子喝汤。', minecraftSentence: '铁锹像一把大勺子。' }
        ]
    },
    {
        id: 'L2-3',
        level: 2,
        title: '第三课：身体与动作',
        characters: [
            { char: '头', pinyin: 'tóu', meaning: '头', words: ['头发', '点头'], example: '我的头很痛。', minecraftSentence: '僵尸的头可以收集。' },
            { char: '目', pinyin: 'mù', meaning: '眼睛', words: ['目光', '目标'], example: '目光炯炯有神。', minecraftSentence: '末影人的目光很可怕。' },
            { char: '耳', pinyin: 'ěr', meaning: '耳朵', words: ['耳朵', '耳机'], example: '耳朵可以听声音。', minecraftSentence: '听到怪物的声音要小心。' },
            { char: '鼻', pinyin: 'bí', meaning: '鼻子', words: ['鼻子', '鼻孔'], example: '鼻子可以闻味道。', minecraftSentence: '猪有一个大鼻子。' },
            { char: '嘴', pinyin: 'zuǐ', meaning: '嘴巴', words: ['嘴巴', '小嘴'], example: '嘴巴用来说话。', minecraftSentence: '僵尸张开嘴想咬人。' },
            { char: '牙', pinyin: 'yá', meaning: '牙齿', words: ['牙齿', '刷牙'], example: '要每天刷牙。', minecraftSentence: '狼有锋利的牙齿。' },
            { char: '舌', pinyin: 'shé', meaning: '舌头', words: ['舌头', '舌尖'], example: '舌头可以尝味道。', minecraftSentence: '青蛙用舌头抓虫子。' },
            { char: '心', pinyin: 'xīn', meaning: '心脏', words: ['心脏', '开心'], example: '我很开心。', minecraftSentence: '生命值像一颗颗心。' },
            { char: '肚', pinyin: 'dù', meaning: '肚子', words: ['肚子', '肚皮'], example: '我肚子饿了。', minecraftSentence: '饥饿值低了肚子会饿。' },
            { char: '背', pinyin: 'bèi', meaning: '背部', words: ['后背', '背包'], example: '背包很重。', minecraftSentence: '背包可以装很多东西。' },
            { char: '腿', pinyin: 'tuǐ', meaning: '腿', words: ['大腿', '腿脚'], example: '腿可以走路。', minecraftSentence: '史蒂夫有两条腿。' },
            { char: '脚', pinyin: 'jiǎo', meaning: '脚', words: ['脚丫', '脚步'], example: '脚可以走路。', minecraftSentence: '穿上靴子保护脚。' },
            { char: '站', pinyin: 'zhàn', meaning: '站立', words: ['站立', '站起'], example: '请站起来。', minecraftSentence: '站在高处可以看得更远。' },
            { char: '坐', pinyin: 'zuò', meaning: '坐下', words: ['坐下', '坐着'], example: '请坐下。', minecraftSentence: '坐矿车很方便。' },
            { char: '躺', pinyin: 'tǎng', meaning: '躺下', words: ['躺下', '躺着'], example: '躺在床上睡觉。', minecraftSentence: '睡觉时躺在床上。' },
            { char: '跳', pinyin: 'tiào', meaning: '跳跃', words: ['跳跃', '跳高'], example: '兔子会跳。', minecraftSentence: '按空格键可以跳跃。' },
            { char: '打', pinyin: 'dǎ', meaning: '打击', words: ['打人', '打球'], example: '不能打人。', minecraftSentence: '打怪物可以获得经验。' },
            { char: '拿', pinyin: 'ná', meaning: '拿取', words: ['拿起', '拿着'], example: '拿起书本。', minecraftSentence: '拿着盾牌防御攻击。' },
            { char: '抱', pinyin: 'bào', meaning: '拥抱', words: ['拥抱', '抱着'], example: '妈妈抱着我。', minecraftSentence: '抱起小猫带回家。' },
            { char: '推', pinyin: 'tuī', meaning: '推动', words: ['推开', '推车'], example: '推开门。', minecraftSentence: '活塞可以推动方块。' }
        ]
    },
    {
        id: 'L2-4',
        level: 2,
        title: '第四课：颜色与形状',
        characters: [
            { char: '红', pinyin: 'hóng', meaning: '红色', words: ['红色', '红花'], example: '苹果是红色的。', minecraftSentence: '红石是红色的矿石。' },
            { char: '黄', pinyin: 'huáng', meaning: '黄色', words: ['黄色', '黄金'], example: '香蕉是黄色的。', minecraftSentence: '黄金块闪闪发光。' },
            { char: '蓝', pinyin: 'lán', meaning: '蓝色', words: ['蓝色', '蓝天'], example: '天空是蓝色的。', minecraftSentence: '钻石是蓝色的。' },
            { char: '绿', pinyin: 'lǜ', meaning: '绿色', words: ['绿色', '绿草'], example: '树叶是绿色的。', minecraftSentence: '苦力怕是绿色的。' },
            { char: '白', pinyin: 'bái', meaning: '白色', words: ['白色', '白云'], example: '云是白色的。', minecraftSentence: '羊毛是白色的。' },
            { char: '黑', pinyin: 'hēi', meaning: '黑色', words: ['黑色', '黑夜'], example: '头发是黑色的。', minecraftSentence: '黑曜石是黑色的。' },
            { char: '紫', pinyin: 'zǐ', meaning: '紫色', words: ['紫色', '紫菜'], example: '葡萄是紫色的。', minecraftSentence: '末地传送门是紫色的。' },
            { char: '粉', pinyin: 'fěn', meaning: '粉色', words: ['粉色', '粉红'], example: '樱花是粉色的。', minecraftSentence: '猪是粉色的。' },
            { char: '灰', pinyin: 'huī', meaning: '灰色', words: ['灰色', '灰尘'], example: '石头是灰色的。', minecraftSentence: '石头是灰色的。' },
            { char: '棕', pinyin: 'zōng', meaning: '棕色', words: ['棕色', '棕熊'], example: '树干是棕色的。', minecraftSentence: '泥土是棕色的。' },
            { char: '圆', pinyin: 'yuán', meaning: '圆形', words: ['圆形', '圆圈'], example: '太阳是圆的。', minecraftSentence: '末影珍珠是圆的。' },
            { char: '方', pinyin: 'fāng', meaning: '方形', words: ['方形', '方块'], example: '桌子是方的。', minecraftSentence: '所有方块都是方形的。' },
            { char: '长', pinyin: 'cháng', meaning: '长的', words: ['长短', '很长'], example: '这条路很长。', minecraftSentence: '挖一个长长的隧道。' },
            { char: '短', pinyin: 'duǎn', meaning: '短的', words: ['短小', '长短'], example: '这根绳子太短了。', minecraftSentence: '短剑攻击速度快。' },
            { char: '高', pinyin: 'gāo', meaning: '高的', words: ['高大', '身高'], example: '这棵树很高。', minecraftSentence: '建一座高高的塔。' },
            { char: '低', pinyin: 'dī', meaning: '低的', words: ['低矮', '高低'], example: '这个凳子很低。', minecraftSentence: '低处有更多矿石。' },
            { char: '粗', pinyin: 'cū', meaning: '粗的', words: ['粗细', '粗壮'], example: '这根木头很粗。', minecraftSentence: '橡树树干很粗。' },
            { char: '细', pinyin: 'xì', meaning: '细的', words: ['细小', '粗细'], example: '这根线很细。', minecraftSentence: '蜘蛛丝很细。' },
            { char: '厚', pinyin: 'hòu', meaning: '厚的', words: ['厚度', '厚重'], example: '这本书很厚。', minecraftSentence: '墙要建得厚一些。' },
            { char: '薄', pinyin: 'báo', meaning: '薄的', words: ['薄片', '厚薄'], example: '这张纸很薄。', minecraftSentence: '玻璃板很薄。' }
        ]
    },
    {
        id: 'L2-5',
        level: 2,
        title: '第五课：自然与天气',
        characters: [
            { char: '春', pinyin: 'chūn', meaning: '春天', words: ['春天', '春风'], example: '春天来了。', minecraftSentence: '春天万物复苏。' },
            { char: '夏', pinyin: 'xià', meaning: '夏天', words: ['夏天', '夏日'], example: '夏天很热。', minecraftSentence: '沙漠像夏天一样热。' },
            { char: '秋', pinyin: 'qiū', meaning: '秋天', words: ['秋天', '秋风'], example: '秋天树叶变黄。', minecraftSentence: '秋天可以收获庄稼。' },
            { char: '冬', pinyin: 'dōng', meaning: '冬天', words: ['冬天', '冬雪'], example: '冬天会下雪。', minecraftSentence: '雪地生物群落像冬天。' },
            { char: '冷', pinyin: 'lěng', meaning: '寒冷', words: ['寒冷', '冷风'], example: '冬天很冷。', minecraftSentence: '冰雪之地很冷。' },
            { char: '热', pinyin: 'rè', meaning: '炎热', words: ['炎热', '热水'], example: '夏天很热。', minecraftSentence: '岩浆很热。' },
            { char: '暖', pinyin: 'nuǎn', meaning: '温暖', words: ['温暖', '暖和'], example: '春天很暖和。', minecraftSentence: '火把让房间变暖。' },
            { char: '凉', pinyin: 'liáng', meaning: '凉爽', words: ['凉爽', '凉快'], example: '秋天很凉爽。', minecraftSentence: '水里很凉快。' },
            { char: '晴', pinyin: 'qíng', meaning: '晴天', words: ['晴天', '晴朗'], example: '今天是晴天。', minecraftSentence: '晴天阳光明媚。' },
            { char: '阴', pinyin: 'yīn', meaning: '阴天', words: ['阴天', '阴暗'], example: '今天是阴天。', minecraftSentence: '阴天怪物不会燃烧。' },
            { char: '雪', pinyin: 'xuě', meaning: '雪', words: ['下雪', '雪花'], example: '冬天下雪了。', minecraftSentence: '雪球可以打怪物。' },
            { char: '冰', pinyin: 'bīng', meaning: '冰', words: ['冰块', '冰冷'], example: '冰很滑。', minecraftSentence: '冰块很滑会加速移动。' },
            { char: '雷', pinyin: 'léi', meaning: '雷', words: ['打雷', '雷电'], example: '打雷了。', minecraftSentence: '雷电可以把猪变成僵尸猪人。' },
            { char: '电', pinyin: 'diàn', meaning: '电', words: ['电灯', '闪电'], example: '闪电很亮。', minecraftSentence: '红石像电一样传递能量。' },
            { char: '河', pinyin: 'hé', meaning: '河流', words: ['河流', '小河'], example: '河水清清的。', minecraftSentence: '河里有很多鱼。' },
            { char: '海', pinyin: 'hǎi', meaning: '大海', words: ['大海', '海洋'], example: '大海很大。', minecraftSentence: '海洋里有海底神殿。' },
            { char: '湖', pinyin: 'hú', meaning: '湖泊', words: ['湖泊', '湖水'], example: '湖水很平静。', minecraftSentence: '湖边可以钓鱼。' },
            { char: '岛', pinyin: 'dǎo', meaning: '岛屿', words: ['小岛', '岛屿'], example: '小岛在海中央。', minecraftSentence: '蘑菇岛是稀有的生物群落。' },
            { char: '林', pinyin: 'lín', meaning: '树林', words: ['树林', '森林'], example: '树林里有很多树。', minecraftSentence: '森林里有很多木头。' },
            { char: '沙', pinyin: 'shā', meaning: '沙子', words: ['沙子', '沙滩'], example: '沙子很细。', minecraftSentence: '沙子可以做成玻璃。' }
        ]
    },

    // ============ 第三级 初级 (每课18字) ============
    {
        id: 'L3-1',
        level: 3,
        title: '第一课：动物世界',
        characters: [
            { char: '猫', pinyin: 'māo', meaning: '猫', words: ['小猫', '猫咪'], example: '小猫很可爱。', minecraftSentence: '猫可以吓跑苦力怕。' },
            { char: '狗', pinyin: 'gǒu', meaning: '狗', words: ['小狗', '狗狗'], example: '狗是人类的好朋友。', minecraftSentence: '驯服狼就变成狗。' },
            { char: '猪', pinyin: 'zhū', meaning: '猪', words: ['小猪', '猪肉'], example: '猪很胖。', minecraftSentence: '猪可以用胡萝卜引诱。' },
            { char: '马', pinyin: 'mǎ', meaning: '马', words: ['马儿', '骑马'], example: '马跑得很快。', minecraftSentence: '骑马可以跑得更快。' },
            { char: '兔', pinyin: 'tù', meaning: '兔子', words: ['兔子', '白兔'], example: '兔子爱吃萝卜。', minecraftSentence: '兔子会掉落兔脚。' },
            { char: '鸡', pinyin: 'jī', meaning: '鸡', words: ['小鸡', '公鸡'], example: '公鸡会打鸣。', minecraftSentence: '鸡可以用种子繁殖。' },
            { char: '鸭', pinyin: 'yā', meaning: '鸭子', words: ['鸭子', '野鸭'], example: '鸭子会游泳。', minecraftSentence: '鸡看起来像鸭子。' },
            { char: '鹅', pinyin: 'é', meaning: '鹅', words: ['白鹅', '天鹅'], example: '鹅的脖子很长。', minecraftSentence: '白天鹅优雅地游泳。' },
            { char: '蛇', pinyin: 'shé', meaning: '蛇', words: ['蛇', '毒蛇'], example: '蛇没有脚。', minecraftSentence: '末影龙像一条大蛇。' },
            { char: '龟', pinyin: 'guī', meaning: '乌龟', words: ['乌龟', '海龟'], example: '乌龟爬得很慢。', minecraftSentence: '海龟会在沙滩产蛋。' },
            { char: '蜂', pinyin: 'fēng', meaning: '蜜蜂', words: ['蜜蜂', '蜂蜜'], example: '蜜蜂会采蜜。', minecraftSentence: '蜜蜂会帮助花朵授粉。' },
            { char: '蝴', pinyin: 'hú', meaning: '蝴蝶', words: ['蝴蝶', '蝴蝶结'], example: '蝴蝶很美丽。', minecraftSentence: '花丛里有美丽的蝴蝶。' },
            { char: '蝶', pinyin: 'dié', meaning: '蝶', words: ['蝴蝶', '彩蝶'], example: '彩蝶飞舞。', minecraftSentence: '蝴蝶在花间飞舞。' },
            { char: '蚂', pinyin: 'mǎ', meaning: '蚂蚁', words: ['蚂蚁', '蚂蚱'], example: '蚂蚁很勤劳。', minecraftSentence: '蚂蚁很小但很勤劳。' },
            { char: '蚁', pinyin: 'yǐ', meaning: '蚁', words: ['蚂蚁', '蚁穴'], example: '蚂蚁住在蚁穴里。', minecraftSentence: '蚂蚁会搬运食物。' },
            { char: '熊', pinyin: 'xióng', meaning: '熊', words: ['熊', '北极熊'], example: '熊很强壮。', minecraftSentence: '北极熊生活在雪地。' },
            { char: '狼', pinyin: 'láng', meaning: '狼', words: ['狼', '野狼'], example: '狼会嚎叫。', minecraftSentence: '用骨头驯服狼。' },
            { char: '虎', pinyin: 'hǔ', meaning: '老虎', words: ['老虎', '虎王'], example: '老虎是百兽之王。', minecraftSentence: '豹猫像小老虎。' }
        ]
    },
    {
        id: 'L3-2',
        level: 3,
        title: '第二课：植物花园',
        characters: [
            { char: '树', pinyin: 'shù', meaning: '树', words: ['大树', '树木'], example: '树很高。', minecraftSentence: '砍树可以获得木头。' },
            { char: '叶', pinyin: 'yè', meaning: '叶子', words: ['树叶', '叶子'], example: '叶子是绿色的。', minecraftSentence: '树叶可以做成树苗。' },
            { char: '枝', pinyin: 'zhī', meaning: '树枝', words: ['树枝', '枝条'], example: '树枝很细。', minecraftSentence: '树枝可以做成棍子。' },
            { char: '根', pinyin: 'gēn', meaning: '根', words: ['树根', '根部'], example: '树根在地下。', minecraftSentence: '树根扎在泥土里。' },
            { char: '苗', pinyin: 'miáo', meaning: '幼苗', words: ['树苗', '幼苗'], example: '幼苗很嫩。', minecraftSentence: '树苗可以种成大树。' },
            { char: '种', pinyin: 'zhǒng', meaning: '种子', words: ['种子', '种植'], example: '种子发芽了。', minecraftSentence: '用种子可以种植庄稼。' },
            { char: '麦', pinyin: 'mài', meaning: '小麦', words: ['小麦', '麦子'], example: '麦子成熟了。', minecraftSentence: '小麦可以做成面包。' },
            { char: '稻', pinyin: 'dào', meaning: '稻子', words: ['稻子', '水稻'], example: '稻子是金色的。', minecraftSentence: '水稻需要水来生长。' },
            { char: '竹', pinyin: 'zhú', meaning: '竹子', words: ['竹子', '竹林'], example: '竹子很直。', minecraftSentence: '竹子可以做成脚手架。' },
            { char: '松', pinyin: 'sōng', meaning: '松树', words: ['松树', '松果'], example: '松树四季常青。', minecraftSentence: '云杉像松树一样高大。' },
            { char: '柳', pinyin: 'liǔ', meaning: '柳树', words: ['柳树', '柳枝'], example: '柳枝在风中飘动。', minecraftSentence: '柳树的枝条很柔软。' },
            { char: '桃', pinyin: 'táo', meaning: '桃子', words: ['桃子', '桃花'], example: '桃子很甜。', minecraftSentence: '樱花像桃花一样美丽。' },
            { char: '梨', pinyin: 'lí', meaning: '梨', words: ['梨子', '雪梨'], example: '梨子多汁。', minecraftSentence: '梨子甜甜的。' },
            { char: '萝', pinyin: 'luó', meaning: '萝卜', words: ['萝卜', '胡萝卜'], example: '萝卜可以吃。', minecraftSentence: '胡萝卜可以钓竿引诱猪。' },
            { char: '卜', pinyin: 'bo', meaning: '卜(萝卜)', words: ['萝卜', '胡萝卜'], example: '胡萝卜是橙色的。', minecraftSentence: '兔子喜欢吃胡萝卜。' },
            { char: '葱', pinyin: 'cōng', meaning: '葱', words: ['大葱', '葱花'], example: '葱可以调味。', minecraftSentence: '葱可以增加食物风味。' },
            { char: '姜', pinyin: 'jiāng', meaning: '姜', words: ['生姜', '姜汁'], example: '姜很辣。', minecraftSentence: '姜可以驱寒。' },
            { char: '蒜', pinyin: 'suàn', meaning: '大蒜', words: ['大蒜', '蒜头'], example: '蒜味道很重。', minecraftSentence: '大蒜可以驱赶吸血鬼。' }
        ]
    },
    {
        id: 'L3-3',
        level: 3,
        title: '第三课：情感表达',
        characters: [
            { char: '爱', pinyin: 'ài', meaning: '爱', words: ['爱心', '喜爱'], example: '我爱妈妈。', minecraftSentence: '我爱玩这个游戏。' },
            { char: '喜', pinyin: 'xǐ', meaning: '喜欢', words: ['喜欢', '欢喜'], example: '我喜欢画画。', minecraftSentence: '我喜欢建造房子。' },
            { char: '欢', pinyin: 'huān', meaning: '欢乐', words: ['欢乐', '喜欢'], example: '大家很欢乐。', minecraftSentence: '和朋友一起玩很欢乐。' },
            { char: '乐', pinyin: 'lè', meaning: '快乐', words: ['快乐', '音乐'], example: '我很快乐。', minecraftSentence: '挖到钻石很快乐。' },
            { char: '笑', pinyin: 'xiào', meaning: '笑', words: ['微笑', '笑容'], example: '她笑得很开心。', minecraftSentence: '打败怪物后开心地笑。' },
            { char: '哭', pinyin: 'kū', meaning: '哭', words: ['哭泣', '哭声'], example: '弟弟哭了。', minecraftSentence: '死掉后不要哭。' },
            { char: '怕', pinyin: 'pà', meaning: '害怕', words: ['害怕', '可怕'], example: '我怕黑。', minecraftSentence: '不要怕苦力怕。' },
            { char: '急', pinyin: 'jí', meaning: '着急', words: ['着急', '急忙'], example: '别着急。', minecraftSentence: '岩浆围住时别着急。' },
            { char: '忙', pinyin: 'máng', meaning: '忙碌', words: ['忙碌', '帮忙'], example: '妈妈很忙。', minecraftSentence: '建造城堡很忙碌。' },
            { char: '累', pinyin: 'lèi', meaning: '疲劳', words: ['疲劳', '劳累'], example: '我很累。', minecraftSentence: '挖矿挖累了就休息。' },
            { char: '饿', pinyin: 'è', meaning: '饥饿', words: ['饥饿', '饿了'], example: '我饿了。', minecraftSentence: '饥饿值低了要吃东西。' },
            { char: '渴', pinyin: 'kě', meaning: '口渴', words: ['口渴', '渴望'], example: '我渴了。', minecraftSentence: '沙漠里很容易渴。' },
            { char: '困', pinyin: 'kùn', meaning: '困倦', words: ['困倦', '困难'], example: '我困了。', minecraftSentence: '天黑了就躺床睡觉。' },
            { char: '想', pinyin: 'xiǎng', meaning: '想', words: ['想念', '思想'], example: '我想妈妈。', minecraftSentence: '我想建一座城堡。' },
            { char: '念', pinyin: 'niàn', meaning: '念', words: ['想念', '念书'], example: '我很想念你。', minecraftSentence: '念念不忘那颗钻石。' },
            { char: '记', pinyin: 'jì', meaning: '记住', words: ['记住', '记忆'], example: '要记住老师说的话。', minecraftSentence: '记住家的坐标。' },
            { char: '忘', pinyin: 'wàng', meaning: '忘记', words: ['忘记', '忘掉'], example: '不要忘记写作业。', minecraftSentence: '别忘记带上食物。' },
            { char: '懂', pinyin: 'dǒng', meaning: '懂得', words: ['懂得', '听懂'], example: '我听懂了。', minecraftSentence: '终于懂得怎么做了。' }
        ]
    },
    {
        id: 'L3-4',
        level: 3,
        title: '第四课：学校与学习',
        characters: [
            { char: '学', pinyin: 'xué', meaning: '学习', words: ['学习', '学校'], example: '我爱学习。', minecraftSentence: '学习怎么建造更好。' },
            { char: '校', pinyin: 'xiào', meaning: '学校', words: ['学校', '校园'], example: '学校很大。', minecraftSentence: '建造一座学校。' },
            { char: '书', pinyin: 'shū', meaning: '书', words: ['书本', '看书'], example: '我在看书。', minecraftSentence: '附魔书可以附魔装备。' },
            { char: '本', pinyin: 'běn', meaning: '本子', words: ['本子', '书本'], example: '这是我的本子。', minecraftSentence: '书和羽毛笔可以写书。' },
            { char: '笔', pinyin: 'bǐ', meaning: '笔', words: ['铅笔', '毛笔'], example: '用笔写字。', minecraftSentence: '用羽毛笔写字。' },
            { char: '纸', pinyin: 'zhǐ', meaning: '纸', words: ['纸张', '白纸'], example: '纸是白色的。', minecraftSentence: '甘蔗可以做成纸。' },
            { char: '字', pinyin: 'zì', meaning: '字', words: ['写字', '汉字'], example: '这个字很难写。', minecraftSentence: '牌子上可以写字。' },
            { char: '画', pinyin: 'huà', meaning: '画', words: ['画画', '图画'], example: '我喜欢画画。', minecraftSentence: '画可以装饰房间。' },
            { char: '读', pinyin: 'dú', meaning: '读', words: ['读书', '朗读'], example: '大声读课文。', minecraftSentence: '读懂附魔的意思。' },
            { char: '写', pinyin: 'xiě', meaning: '写', words: ['写字', '书写'], example: '认真写作业。', minecraftSentence: '在书上写下冒险日记。' },
            { char: '算', pinyin: 'suàn', meaning: '计算', words: ['计算', '算数'], example: '算数题很简单。', minecraftSentence: '算一算需要多少材料。' },
            { char: '数', pinyin: 'shù', meaning: '数字', words: ['数字', '数学'], example: '数学很有趣。', minecraftSentence: '数一数收集了多少钻石。' },
            { char: '考', pinyin: 'kǎo', meaning: '考试', words: ['考试', '思考'], example: '明天要考试。', minecraftSentence: '考验你的建造技术。' },
            { char: '试', pinyin: 'shì', meaning: '尝试', words: ['考试', '试试'], example: '试试这道题。', minecraftSentence: '试试看能不能打败Boss。' },
            { char: '教', pinyin: 'jiāo', meaning: '教', words: ['教书', '教室'], example: '老师教我们。', minecraftSentence: '教朋友怎么玩。' },
            { char: '师', pinyin: 'shī', meaning: '老师', words: ['老师', '师傅'], example: '老师很和蔼。', minecraftSentence: '成为建筑大师。' },
            { char: '课', pinyin: 'kè', meaning: '课程', words: ['上课', '课本'], example: '上课要认真。', minecraftSentence: '这是识字课程。' },
            { char: '题', pinyin: 'tí', meaning: '题目', words: ['题目', '问题'], example: '这道题很难。', minecraftSentence: '解决生存问题。' }
        ]
    },
    {
        id: 'L3-5',
        level: 3,
        title: '第五课：交通与出行',
        characters: [
            { char: '骑', pinyin: 'qí', meaning: '骑', words: ['骑马', '骑车'], example: '我会骑自行车。', minecraftSentence: '骑马跑得更快。' },
            { char: '开', pinyin: 'kāi', meaning: '开', words: ['开门', '开车'], example: '开门进来。', minecraftSentence: '开门进入房子。' },
            { char: '关', pinyin: 'guān', meaning: '关', words: ['关门', '关灯'], example: '关上门。', minecraftSentence: '关好门防止怪物。' },
            { char: '停', pinyin: 'tíng', meaning: '停', words: ['停车', '停止'], example: '汽车停下来了。', minecraftSentence: '停下来看看周围。' },
            { char: '快', pinyin: 'kuài', meaning: '快', words: ['快速', '快乐'], example: '跑得很快。', minecraftSentence: '用速度药水跑得更快。' },
            { char: '慢', pinyin: 'màn', meaning: '慢', words: ['慢慢', '缓慢'], example: '乌龟爬得很慢。', minecraftSentence: '灵魂沙让你变慢。' },
            { char: '远', pinyin: 'yuǎn', meaning: '远', words: ['远方', '遥远'], example: '学校离家很远。', minecraftSentence: '远处有一座村庄。' },
            { char: '近', pinyin: 'jìn', meaning: '近', words: ['近处', '附近'], example: '商店离这里很近。', minecraftSentence: '家就在附近。' },
            { char: '过', pinyin: 'guò', meaning: '过', words: ['过去', '经过'], example: '过马路要小心。', minecraftSentence: '穿过传送门去地狱。' },
            { char: '回', pinyin: 'huí', meaning: '回', words: ['回家', '回来'], example: '该回家了。', minecraftSentence: '迷路了要找路回家。' },
            { char: '到', pinyin: 'dào', meaning: '到', words: ['到达', '来到'], example: '我到学校了。', minecraftSentence: '终于到达终点了。' },
            { char: '送', pinyin: 'sòng', meaning: '送', words: ['送给', '送走'], example: '妈妈送我上学。', minecraftSentence: '把礼物送给朋友。' },
            { char: '接', pinyin: 'jiē', meaning: '接', words: ['接人', '迎接'], example: '爸爸来接我。', minecraftSentence: '接住掉落的物品。' },
            { char: '等', pinyin: 'děng', meaning: '等', words: ['等待', '等等'], example: '等一下。', minecraftSentence: '等天亮再出门。' },
            { char: '借', pinyin: 'jiè', meaning: '借', words: ['借书', '借用'], example: '借我一支笔。', minecraftSentence: '借朋友一些材料。' },
            { char: '还', pinyin: 'huán', meaning: '还', words: ['还书', '归还'], example: '把书还给图书馆。', minecraftSentence: '还有更多宝藏。' },
            { char: '找', pinyin: 'zhǎo', meaning: '找', words: ['找到', '寻找'], example: '找到我的书了。', minecraftSentence: '找到钻石矿了！' },
            { char: '换', pinyin: 'huàn', meaning: '换', words: ['换衣服', '交换'], example: '换件衣服。', minecraftSentence: '和村民交换物品。' }
        ]
    },

    // ============ 第十级 大师级 (每课9字) ============
    {
        id: 'L10-1',
        level: 10,
        title: '第一课：挑战巅峰',
        characters: [
            { char: '凋', pinyin: 'diāo', meaning: '凋零', words: ['凋零', '凋谢'], example: '花儿凋谢了。', minecraftSentence: '凋灵是最危险的Boss之一。' },
            { char: '灵', pinyin: 'líng', meaning: '灵魂', words: ['灵魂', '精灵'], example: '灵魂是看不见的。', minecraftSentence: '凋灵需要灵魂沙来召唤。' },
            { char: '魂', pinyin: 'hún', meaning: '魂魄', words: ['灵魂', '魂魄'], example: '魂飞魄散。', minecraftSentence: '灵魂沙会让你走得更慢。' },
            { char: '末', pinyin: 'mò', meaning: '末端', words: ['末日', '末尾'], example: '末日来临。', minecraftSentence: '末地是最后的维度。' },
            { char: '影', pinyin: 'yǐng', meaning: '影子', words: ['影子', '影响'], example: '影子很长。', minecraftSentence: '末影人被看会瞬移攻击。' },
            { char: '龙', pinyin: 'lóng', meaning: '龙', words: ['龙', '恐龙'], example: '龙是传说中的生物。', minecraftSentence: '末影龙是最终Boss。' },
            { char: '蛋', pinyin: 'dàn', meaning: '蛋', words: ['鸡蛋', '龙蛋'], example: '蛋可以孵化。', minecraftSentence: '打败末影龙会掉落龙蛋。' },
            { char: '翅', pinyin: 'chì', meaning: '翅膀', words: ['翅膀', '鞘翅'], example: '翅膀可以飞翔。', minecraftSentence: '鞘翅可以让你在空中滑翔。' },
            { char: '隐', pinyin: 'yǐn', meaning: '隐藏', words: ['隐藏', '隐身'], example: '隐藏起来。', minecraftSentence: '喝隐身药水可以躲避怪物。' }
        ]
    }
];

/**
 * 获取指定级别的所有课程
 */
export const getLessonsByLevel = (level) => {
    return lessons.filter(lesson => lesson.level === level);
};

/**
 * 获取指定课程
 */
export const getLessonById = (lessonId) => {
    return lessons.find(lesson => lesson.id === lessonId);
};

/**
 * 获取课程总数
 */
export const getTotalLessons = () => lessons.length;

/**
 * 获取所有级别信息
 */
export const getAllLevels = () => LEVEL_CONFIG;

/**
 * 获取上一课和下一课
 */
export const getAdjacentLessons = (currentLessonId) => {
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
    return {
        prev: currentIndex > 0 ? lessons[currentIndex - 1] : null,
        next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
    };
};

export default lessons;
