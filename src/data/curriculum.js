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
            { char: '外', pinyin: 'wài', meaning: '外面', words: ['外面', '外边'], minecraftSentence: '晚上外面有僵尸。', story: '外字由"夕"和"卜"组成。古时候人们在傍晚时分，需要用占卜来决定是否外出，所以"外"字就这样诞生了。外表示不在里面，在别的地方。' },
            { char: '门', pinyin: 'mén', meaning: '门', words: ['大门', '开门'], minecraftSentence: '关好门防止怪物进来。', story: '门是房屋的入口。古代的门字像两扇门板的样子。人们进出房屋都要经过门，所以门是家的守护者。在游戏里，门可以防止怪物进入你的家。' },
            { char: '窗', pinyin: 'chuāng', meaning: '窗户', words: ['窗户', '窗口'], minecraftSentence: '透过窗户可以看到外面。', story: '窗字上面是"穴"表示洞，下面是"囱"表示烟囱。古代房子的窗户就像墙上的洞，可以让光线和空气进来，还可以让烟出去。' },
            { char: '床', pinyin: 'chuáng', meaning: '床', words: ['床上', '起床'], minecraftSentence: '睡床可以跳过黑夜。', story: '床是用来睡觉休息的家具。床字的"广"像房子，里面是"木"，表示木头做的休息地方。古人说"日出而作，日落而息"，床就是我们休息的地方。' },
            { char: '桌', pinyin: 'zhuō', meaning: '桌子', words: ['桌子', '书桌'], minecraftSentence: '工作台是一种特殊的桌子。', story: '桌子是用来放东西和工作的家具。桌字上面是"卓"表示高，下面是"木"表示木头，合起来就是高高的木头台子。我们在桌子上吃饭、写字、做手工。' },
            { char: '椅', pinyin: 'yǐ', meaning: '椅子', words: ['椅子', '轮椅'], minecraftSentence: '用楼梯方块可以做椅子。', story: '椅子是用来坐的家具。椅字左边是"木"表示木头做的，右边是"奇"。古人坐在椅子上休息、看书、喝茶，比坐在地上舒服多了。' },
            { char: '灯', pinyin: 'dēng', meaning: '灯', words: ['电灯', '灯光'], minecraftSentence: '红石灯可以用红石控制。', story: '灯是用来照明的工具。古代没有电，人们用火把、蜡烛、油灯来照明。灯字左边是"火"，表示灯需要火来发光。现在我们用电灯，按一下开关就亮了。' },
            { char: '家', pinyin: 'jiā', meaning: '家', words: ['家庭', '回家'], minecraftSentence: '我的家建在山顶上。', story: '家是我们住的地方，有爸爸妈妈和小朋友。家字上面是"宀"像房子的屋顶，下面是"豕"表示猪，古代人养猪在屋里，有猪的地方就是家。家是最温暖的地方。' },
            { char: '屋', pinyin: 'wū', meaning: '房屋', words: ['房屋', '屋子'], minecraftSentence: '我用石砖建造了一间屋子。', story: '屋是用来住人的建筑。屋字上面是"尸"像房子的形状，下面是"至"表示到达，合起来表示人到达后休息的地方。屋子可以遮风挡雨，保护我们。' },
            { char: '房', pinyin: 'fáng', meaning: '房子', words: ['房子', '房间'], minecraftSentence: '村民的房子有工作台。', story: '房是住人的建筑物。房字左边是"户"表示门，右边是"方"表示方正，合起来就是有门的方正建筑。每个人都需要一个房子来住。' },
            { char: '园', pinyin: 'yuán', meaning: '园子', words: ['花园', '公园'], minecraftSentence: '我建了一个漂亮的花园。', story: '园是种植花草树木的地方。园字外面是"囗"表示围墙，里面是"元"。古代的园子都有围墙围起来，里面种满了美丽的花草。公园是大家一起玩的地方。' },
            { char: '路', pinyin: 'lù', meaning: '道路', words: ['马路', '走路'], minecraftSentence: '沿着路走可以找到村庄。', story: '路是人们走的道。路字左边是"足"表示脚，右边是"各"表示各处，合起来就是脚走过的各个地方。鲁迅说过："世上本没有路，走的人多了，便成了路。"' },
            { char: '车', pinyin: 'chē', meaning: '车', words: ['汽车', '火车'], minecraftSentence: '矿车可以在铁轨上跑。', story: '车是用来运送人和东西的交通工具。古代的车字像一辆有轮子的车的样子，有两个轮子和车身。现在我们有汽车、火车、电车，出行非常方便。' },
            { char: '船', pinyin: 'chuán', meaning: '船', words: ['小船', '船只'], minecraftSentence: '坐船可以快速过河。', story: '船是在水上行驶的交通工具。船字左边是"舟"表示小船，右边是"几"。古人发现木头可以浮在水上，于是做成船，用来渡河和捕鱼。' },
            { char: '飞', pinyin: 'fēi', meaning: '飞行', words: ['飞机', '飞翔'], minecraftSentence: '用鞘翅可以在天上飞。', story: '飞是在空中移动的动作。飞字像一只鸟张开翅膀在天空飞翔的样子。小鸟会飞，蝴蝶会飞，飞机也会飞。人类一直梦想像鸟儿一样自由飞翔。' },
            { char: '走', pinyin: 'zǒu', meaning: '行走', words: ['走路', '走开'], minecraftSentence: '走在岩浆旁边很危险。', story: '走是用脚移动身体。走字上面是"土"，下面像人迈开腿走路的样子。古人说"千里之行，始于足下"，意思是再远的路也要一步一步走出来。' },
            { char: '跑', pinyin: 'pǎo', meaning: '奔跑', words: ['跑步', '奔跑'], minecraftSentence: '史蒂夫可以跑得很快。', story: '跑是快速移动脚步。跑字左边是"足"表示脚，右边是"包"。跑比走快很多，小朋友们喜欢在操场上跑来跑去。跑步可以让身体更健康。' }
        ]
    },
    {
        id: 'L1-3',
        level: 1,
        title: '第三课：冒险伙伴',
        characters: [
            { char: '爸', pinyin: 'bà', meaning: '父亲', words: ['爸爸', '阿爸'], minecraftSentence: '爸爸教我怎么玩这个游戏。', story: '爸是对父亲的亲切称呼。爸字上面是"父"表示父亲，下面是"巴"表示声音。小朋友叫"爸爸"的时候，声音甜甜的，爸爸听了会很开心。' },
            { char: '妈', pinyin: 'mā', meaning: '母亲', words: ['妈妈', '大妈'], minecraftSentence: '妈妈帮我建了一座城堡。', story: '妈是对母亲的亲切称呼。妈字左边是"女"表示女性，右边是"马"表示声音。妈妈照顾我们长大，是世界上最温暖的人。' },
            { char: '哥', pinyin: 'gē', meaning: '兄长', words: ['哥哥', '大哥'], minecraftSentence: '哥哥和我一起挖矿。', story: '哥是比自己大的男孩子。哥字由两个"可"组成，上下叠放。哥哥会照顾弟弟妹妹，带他们一起玩耍。' },
            { char: '姐', pinyin: 'jiě', meaning: '姐姐', words: ['姐姐', '大姐'], minecraftSentence: '姐姐种了很多南瓜。', story: '姐是比自己大的女孩子。姐字左边是"女"表示女性，右边是"且"。姐姐通常很温柔，会教弟弟妹妹做很多事情。' },
            { char: '弟', pinyin: 'dì', meaning: '弟弟', words: ['弟弟', '兄弟'], minecraftSentence: '弟弟养了很多小猪。', story: '弟是比自己小的男孩子。弟字像一个小孩子在绳子旁边玩耍的样子。弟弟虽然小，但也很聪明，会慢慢长大。' },
            { char: '妹', pinyin: 'mèi', meaning: '妹妹', words: ['妹妹', '姐妹'], minecraftSentence: '妹妹喜欢收集小花。', story: '妹是比自己小的女孩子。妹字左边是"女"表示女性，右边是"未"表示还没长大。妹妹小小的很可爱，大家都喜欢她。' },
            { char: '爷', pinyin: 'yé', meaning: '祖父', words: ['爷爷', '老爷'], minecraftSentence: '爷爷建造的房子最结实。', story: '爷是父亲的父亲，也叫祖父。爷字上面是"父"，下面表示年纪大。爷爷头发白白的，最喜欢给小朋友讲故事。' },
            { char: '奶', pinyin: 'nǎi', meaning: '祖母', words: ['奶奶', '牛奶'], minecraftSentence: '牛可以挤出牛奶喝。', story: '奶是父亲的母亲，也叫祖母。奶字左边是"女"，右边是"乃"表示声音。奶奶做的饭菜最好吃，小朋友都喜欢去奶奶家。' },
            { char: '朋', pinyin: 'péng', meaning: '朋友', words: ['朋友', '亲朋'], minecraftSentence: '和朋友一起建造更有趣。', story: '朋是一起玩耍的伙伴。朋字由两个"月"组成，像两个人肩并肩站在一起。真正的朋友会互相帮助，一起分享快乐。' },
            { char: '友', pinyin: 'yǒu', meaning: '友人', words: ['朋友', '友好'], minecraftSentence: '狼驯服后会成为好友。', story: '友表示友好的人。友字像两只手握在一起的样子，表示互相帮助。有朋友的人不会孤单，生活会更开心。' },
            { char: '你', pinyin: 'nǐ', meaning: '你', words: ['你好', '你们'], minecraftSentence: '你想和我一起冒险吗？', story: '你是对别人的称呼。你字左边是"亻"表示人，右边是"尔"表示那个。说"你好"是很有礼貌的问候方式。' },
            { char: '我', pinyin: 'wǒ', meaning: '我', words: ['我们', '我的'], minecraftSentence: '我找到了钻石！', story: '我是自己称呼自己。我字像一个人拿着武器保护自己的样子。每个人都是独特的"我"，要学会爱自己。' },
            { char: '他', pinyin: 'tā', meaning: '他', words: ['他们', '他的'], minecraftSentence: '他在地下挖到了金矿。', story: '他是指别的男孩子或男人。他字左边是"亻"表示人，右边是"也"。和别人说话时，用"他"来介绍不在场的男性。' },
            { char: '她', pinyin: 'tā', meaning: '她', words: ['她们', '她的'], minecraftSentence: '她建造了一座漂亮的塔。', story: '她是指别的女孩子或女人。她字左边是"女"表示女性，右边是"也"。这个字是现代才有的，专门用来指女性。' },
            { char: '好', pinyin: 'hǎo', meaning: '好', words: ['你好', '好看'], minecraftSentence: '这把剑真是太好了！', story: '好表示美好、喜欢。好字左边是"女"，右边是"子"，表示有女儿有儿子是好事。好还可以用来打招呼，说"你好"。' },
            { char: '是', pinyin: 'shì', meaning: '是', words: ['是', '但是'], minecraftSentence: '这是一块红石矿。', story: '是表示肯定或判断。是字上面是"日"表示太阳，下面是"正"表示正确。太阳照耀是正确的、真实的，所以用来表示肯定。' },
            { char: '的', pinyin: 'de', meaning: '的', words: ['我的', '你的'], minecraftSentence: '这是我的宝剑。', story: '的是连接词语的助词。的字左边是"白"，右边是"勺"。我们说"我的书"、"红色的花"，用"的"来连接。' },
            { char: '有', pinyin: 'yǒu', meaning: '有', words: ['有', '没有'], minecraftSentence: '箱子里有钻石！', story: '有表示拥有、存在。有字上面是"𠂇"像手，下面是"月"像肉，表示手里拿着东西。有东西就是拥有，没有东西就是"没有"。' },
            { char: '在', pinyin: 'zài', meaning: '在', words: ['在', '正在'], minecraftSentence: '宝藏在这里！', story: '在表示存在于某个地方。在字上面是"土"，下面表示人站在土地上。"我在家"表示我存在于家这个地方。' },
            { char: '这', pinyin: 'zhè', meaning: '这个', words: ['这个', '这里'], minecraftSentence: '这个矿洞很深。', story: '这表示靠近自己的事物。这字里面有"文"和"辶"表示行走。用手指着说"这个"，表示离自己近的东西。' },
            { char: '那', pinyin: 'nà', meaning: '那个', words: ['那个', '那里'], minecraftSentence: '那边有一个村庄。', story: '那表示离自己较远的事物。那字左边有"冂"，右边是"阝"。用手指着远方说"那个"，表示远处的东西。' },
            { char: '不', pinyin: 'bù', meaning: '不', words: ['不是', '不要'], minecraftSentence: '晚上不要出门！', story: '不表示否定、拒绝。不字像一只鸟飞向天空但被挡住的样子。"不要"、"不是"、"不行"都是表示否定的意思。' },
            { char: '要', pinyin: 'yào', meaning: '要', words: ['要', '需要'], minecraftSentence: '我要挖更多钻石。', story: '要表示想要或需要。要字上面是"西"，下面是"女"。古代女子梳妆时需要镜子，所以"要"表示需要、想要的意思。' },
            { char: '会', pinyin: 'huì', meaning: '会', words: ['会', '学会'], minecraftSentence: '我会建造红石机器。', story: '会表示能够做到或聚集。会字上面像屋顶，下面是"云"，表示人们聚集在一起。"我会游泳"表示我能够游泳。' },
            { char: '能', pinyin: 'néng', meaning: '能够', words: ['能', '能够'], minecraftSentence: '鞘翅能让你飞起来。', story: '能表示有能力做某事。能字里面有"肉"表示身体的力量。"我能做到"表示我有能力完成这件事。' },
            { char: '来', pinyin: 'lái', meaning: '来', words: ['来', '过来'], minecraftSentence: '怪物向我袭来！', story: '来表示从别处到这里。来字像一棵麦子的样子，麦子成熟了就要收回来。"你来这里"表示请你走到这里来。' },
            { char: '去', pinyin: 'qù', meaning: '去', words: ['去', '回去'], minecraftSentence: '我们去地狱探险吧！', story: '去表示从这里到别处。去字上面是"土"，下面是"厶"像脚步，表示离开土地往别处走。"去学校"表示往学校那里走。' },
            { char: '看', pinyin: 'kàn', meaning: '看', words: ['看书', '看见'], minecraftSentence: '快看！那是末影人！', story: '看表示用眼睛观察。看字上面是"手"放在眼睛上方，像遮阳看远方的样子。我们用眼睛看书、看电视、看风景。' },
            { char: '吃', pinyin: 'chī', meaning: '吃', words: ['吃饭', '好吃'], minecraftSentence: '吃金苹果可以恢复生命。', story: '吃表示把食物放进嘴里。吃字左边是"口"表示嘴巴，右边是"乞"表示需要。人需要吃东西才能有力气，所以吃很重要。' },
            { char: '玩', pinyin: 'wán', meaning: '玩耍', words: ['玩耍', '玩游戏'], minecraftSentence: '我最喜欢玩创造模式。', story: '玩表示做游戏、娱乐。玩字左边是"王"像玉石，右边是"元"。古代小朋友喜欢玩漂亮的玉石，所以"玩"表示娱乐。' }
        ]
    },

    // ============ 第二级 基础级 (每课27字) ============
    {
        id: 'L2-1',
        level: 2,
        title: '第一课：工具与材料',
        characters: [
            { char: '铁', pinyin: 'tiě', meaning: '铁', words: ['铁块', '钢铁'], example: '铁很硬。', minecraftSentence: '铁矿石需要石镐来挖。', story: '铁字左边是"钅"表示金属，右边是"失"。铁是一种很坚硬的金属，可以做成各种工具。古代人发现铁比石头更硬，就用铁来做武器和农具。' },
            { char: '金', pinyin: 'jīn', meaning: '金', words: ['金子', '黄金'], example: '金子闪闪发光。', minecraftSentence: '金苹果需要八块金锭。', story: '金字像一座山下埋着两块金子的样子。金是最珍贵的金属，闪闪发光，从古至今人们都喜欢金子。金色代表高贵和财富。' },
            { char: '钻', pinyin: 'zuān', meaning: '钻石', words: ['钻石', '钻头'], example: '钻石很珍贵。', minecraftSentence: '钻石是最稀有的矿石。', story: '钻字左边是"钅"表示矿物，右边是"占"表示拥有。钻石是世界上最坚硬的宝石，闪闪发亮，非常珍贵稀有。' },
            { char: '煤', pinyin: 'méi', meaning: '煤炭', words: ['煤炭', '煤块'], example: '煤可以燃烧。', minecraftSentence: '煤炭可以用来做火把。', story: '煤字下面是"火"表示可以燃烧，上面是"某"表示某种东西。煤炭是埋在地下的黑色石头，可以燃烧取暖和做饭。' },
            { char: '矿', pinyin: 'kuàng', meaning: '矿石', words: ['矿石', '采矿'], example: '矿山很深。', minecraftSentence: '深处有更多稀有矿石。', story: '矿字左边是"石"表示石头，右边是"广"表示广阔的地方。矿石藏在地下深处，要挖很深才能找到宝贵的矿物。' },
            { char: '剑', pinyin: 'jiàn', meaning: '剑', words: ['宝剑', '剑术'], example: '这把剑很锋利。', minecraftSentence: '钻石剑是最强的武器。', story: '剑字右边是"刂"表示刀刃，左边像剑的形状。剑是古代勇士的武器，又长又尖，可以刺和砍，是很厉害的兵器。' },
            { char: '弓', pinyin: 'gōng', meaning: '弓', words: ['弓箭', '弯弓'], example: '用弓射箭。', minecraftSentence: '弓箭可以远程攻击怪物。', story: '弓字的形状就像一把弯弯的弓。古代人用弓来射箭打猎，拉开弓弦，箭就会飞出去很远。弓箭是古代重要的武器。' },
            { char: '箭', pinyin: 'jiàn', meaning: '箭', words: ['弓箭', '箭头'], example: '箭飞得很远。', minecraftSentence: '骷髅射手会射箭。', story: '箭字上面是"竹"表示竹子做的，下面是"前"表示向前飞。箭是用竹子做的，前面有尖头，用弓射出去可以飞得很远。' },
            { char: '盾', pinyin: 'dùn', meaning: '盾牌', words: ['盾牌', '护盾'], example: '盾可以挡住攻击。', minecraftSentence: '盾牌可以挡住苦力怕的爆炸。', story: '盾字上面像盾牌的形状，下面是"目"表示保护眼睛。盾牌是用来防御的，拿在身前可以挡住敌人的攻击，保护自己。' },
            { char: '甲', pinyin: 'jiǎ', meaning: '盔甲', words: ['盔甲', '装甲'], example: '穿上盔甲保护身体。', minecraftSentence: '钻石甲防御力最高。', story: '甲字像一个人穿着盔甲的样子，中间有十字保护。盔甲穿在身上可以保护身体不受伤害，古代战士都要穿盔甲。' },
            { char: '斧', pinyin: 'fǔ', meaning: '斧头', words: ['斧头', '斧子'], example: '用斧头砍树。', minecraftSentence: '斧头砍木头最快。', story: '斧字上面是"父"表示声音，下面是"斤"表示砍东西。斧头有锋利的刀刃，可以用来砍树木，是很实用的工具。' },
            { char: '镐', pinyin: 'gǎo', meaning: '镐', words: ['铁镐', '镐子'], example: '镐可以挖矿。', minecraftSentence: '用镐挖掘石头和矿石。', story: '镐字左边是"钅"表示金属做的，右边是"高"表示高高举起。镐是用来挖掘的工具，举起来往下砸可以挖开坚硬的石头。' },
            { char: '锹', pinyin: 'qiāo', meaning: '锹铲', words: ['铁锹', '锹子'], example: '用锹挖土。', minecraftSentence: '锹挖泥土和沙子最快。', story: '锹字左边是"钅"表示金属，右边是"秋"表示秋天收获。锹是用来铲土的工具，农民用锹来翻地种庄稼。' },
            { char: '锄', pinyin: 'chú', meaning: '锄头', words: ['锄头', '锄地'], example: '锄头可以锄地。', minecraftSentence: '锄头可以开垦农田。', story: '锄字左边是"钅"表示金属，右边是"助"表示帮助。锄头是农民的好帮手，可以用来除草和翻松土地。' },
            { char: '桶', pinyin: 'tǒng', meaning: '桶', words: ['水桶', '木桶'], example: '桶可以装水。', minecraftSentence: '用桶可以收集水和岩浆。', story: '桶字左边是"木"表示木头做的，右边是"甬"表示空心的容器。桶是圆形的容器，可以装水、装东西，提着走很方便。' },
            { char: '砖', pinyin: 'zhuān', meaning: '砖块', words: ['砖块', '石砖'], example: '砖很结实。', minecraftSentence: '石砖是很好的建筑材料。', story: '砖字左边是"石"表示石头，右边是"专"表示专门。砖是用泥土烧制成的建筑材料，一块一块堆起来可以盖房子。' },
            { char: '板', pinyin: 'bǎn', meaning: '木板', words: ['木板', '地板'], example: '木板很平整。', minecraftSentence: '木板可以做很多东西。', story: '板字左边是"木"表示木头，右边是"反"表示平面。木板是把木头切成薄薄的平板，可以做家具、铺地板。' },
            { char: '棍', pinyin: 'gùn', meaning: '棍子', words: ['棍子', '木棍'], example: '棍子很直。', minecraftSentence: '木棍是制作工具的基础。', story: '棍字左边是"木"表示木头，右边是"昆"表示长长的。棍子是细长的木条，可以做拐杖，也可以做成各种工具的把手。' },
            { char: '绳', pinyin: 'shéng', meaning: '绳子', words: ['绳子', '草绳'], example: '绳子很长。', minecraftSentence: '绳子可以栓住动物。', story: '绳字左边是"纟"表示丝线，右边是"黾"。绳子是把很多细线拧在一起变成粗绳，可以用来捆绑东西，非常结实。' },
            { char: '皮', pinyin: 'pí', meaning: '皮革', words: ['皮革', '牛皮'], example: '皮很柔软。', minecraftSentence: '牛皮可以做皮甲和书。', story: '皮字像一只手在剥动物的皮。皮是动物身上的外层，处理后变成皮革，可以做成皮包、皮鞋、皮衣，又软又耐用。' },
            { char: '羽', pinyin: 'yǔ', meaning: '羽毛', words: ['羽毛', '羽翼'], example: '羽毛很轻。', minecraftSentence: '羽毛可以用来做箭。', story: '羽字像两根羽毛并排的样子。羽毛是鸟身上长的，又轻又软，帮助鸟儿飞翔。羽毛还可以做成羽绒服保暖。' },
            { char: '毛', pinyin: 'máo', meaning: '毛', words: ['羊毛', '毛发'], example: '羊毛很软。', minecraftSentence: '不同颜色的羊毛可以做床。', story: '毛字像动物身上长的毛发。毛是动物身上用来保暖的，羊毛可以织成毛衣，猫毛软软的摸起来很舒服。' },
            { char: '骨', pinyin: 'gǔ', meaning: '骨头', words: ['骨头', '骨骼'], example: '骨头很硬。', minecraftSentence: '骨头可以驯服狼。', story: '骨字上面像骨头的关节，下面是"月"表示身体。骨头在我们身体里面，又硬又结实，支撑着我们的身体。' },
            { char: '粉', pinyin: 'fěn', meaning: '粉末', words: ['粉末', '面粉'], example: '粉很细。', minecraftSentence: '骨粉可以催熟农作物。', story: '粉字左边是"米"表示谷物，右边是"分"表示分成很细。粉是把东西磨得很细很细变成的，像面粉、奶粉都是粉状的。' },
            { char: '药', pinyin: 'yào', meaning: '药水', words: ['药水', '吃药'], example: '药可以治病。', minecraftSentence: '喝药水可以获得特殊效果。', story: '药字上面是"艹"表示草，说明很多药是草做的。药可以帮助我们治病，生病了吃药就会好起来。' },
            { char: '瓶', pinyin: 'píng', meaning: '瓶子', words: ['瓶子', '花瓶'], example: '瓶子可以装水。', minecraftSentence: '玻璃瓶可以装药水。', story: '瓶字左边是"瓦"表示陶瓷做的，右边是"并"表示两边夹着。瓶子有细细的脖子，可以装水、装饮料，不容易洒出来。' },
            { char: '箱', pinyin: 'xiāng', meaning: '箱子', words: ['箱子', '宝箱'], example: '箱子很大。', minecraftSentence: '箱子可以存放物品。', story: '箱字上面是"竹"表示竹子做的，下面是"相"表示样子。箱子是方方正正的容器，有盖子可以打开关上，用来装东西。' }
        ]
    },
    {
        id: 'L2-2',
        level: 2,
        title: '第二课：食物与生活',
        characters: [
            { char: '米', pinyin: 'mǐ', meaning: '大米', words: ['大米', '米饭'], example: '米饭很好吃。', minecraftSentence: '种小麦可以做面包。', story: '米字像一粒一粒米散开的样子。米是从稻子里剥出来的，煮熟了就是白白的米饭，是很多人的主食。' },
            { char: '面', pinyin: 'miàn', meaning: '面条', words: ['面条', '面包'], example: '我喜欢吃面条。', minecraftSentence: '面包可以恢复饥饿值。', story: '面字里面有"麦"表示小麦。面粉是小麦磨成的，可以做成面条、面包、馒头，软软的很好吃。' },
            { char: '菜', pinyin: 'cài', meaning: '蔬菜', words: ['蔬菜', '青菜'], example: '多吃蔬菜身体好。', minecraftSentence: '胡萝卜是很好的蔬菜。', story: '菜字上面是"艹"表示草，说明菜是绿色的植物。多吃蔬菜可以补充维生素，让身体更健康。' },
            { char: '果', pinyin: 'guǒ', meaning: '果实', words: ['水果', '苹果'], example: '苹果是红色的水果。', minecraftSentence: '苹果可以恢复生命值。', story: '果字像一棵树上结满了果实的样子。水果是树上长的，有苹果、梨子、橘子，又甜又有营养。' },
            { char: '肉', pinyin: 'ròu', meaning: '肉类', words: ['牛肉', '猪肉'], example: '肉很好吃。', minecraftSentence: '烤肉比生肉恢复更多饥饿值。', story: '肉字里面的横线像肉的纹理。肉是动物身上的，可以烤着吃、炒着吃，给我们提供蛋白质和能量。' },
            { char: '蛋', pinyin: 'dàn', meaning: '鸡蛋', words: ['鸡蛋', '蛋糕'], example: '鸡蛋很有营养。', minecraftSentence: '鸡会下蛋。', story: '蛋字上面是"疋"像蛋壳的形状，下面是"虫"表示从动物来的。鸡蛋是母鸡下的，可以煮着吃、炒着吃。' },
            { char: '奶', pinyin: 'nǎi', meaning: '牛奶', words: ['牛奶', '奶奶'], example: '牛奶是白色的。', minecraftSentence: '牛奶可以解除负面效果。', story: '奶字左边是"女"，右边是"乃"表示声音。牛奶是奶牛产的，白白的很有营养，每天喝牛奶可以长高。' },
            { char: '糖', pinyin: 'táng', meaning: '糖', words: ['糖果', '白糖'], example: '糖很甜。', minecraftSentence: '甘蔗可以做成糖。', story: '糖字左边是"米"表示谷物做的，右边是"唐"表示声音。糖是甜甜的，吃起来让人开心，但不能吃太多哦。' },
            { char: '盐', pinyin: 'yán', meaning: '盐', words: ['食盐', '盐巴'], example: '菜里要放盐。', minecraftSentence: '海水是咸的因为有盐。', story: '盐字上面是"土"表示从土里来的，下面是"卤"表示咸味。盐是白色的小颗粒，做菜时放一点盐会更好吃。' },
            { char: '油', pinyin: 'yóu', meaning: '油', words: ['食油', '汽油'], example: '炒菜需要油。', minecraftSentence: '岩浆像油一样会燃烧。', story: '油字左边是"氵"表示液体，右边是"由"表示从某处来。油是液体，炒菜时放油可以让菜更香更好吃。' },
            { char: '饭', pinyin: 'fàn', meaning: '米饭', words: ['米饭', '吃饭'], example: '该吃饭了。', minecraftSentence: '吃饱了才有力气冒险。', story: '饭字左边是"饣"表示食物，右边是"反"。饭是用米煮的，一日三餐都要吃饭，吃饱了才有力气。' },
            { char: '汤', pinyin: 'tāng', meaning: '汤', words: ['喝汤', '鸡汤'], example: '这碗汤很热。', minecraftSentence: '蘑菇汤可以恢复饥饿值。', story: '汤字左边是"氵"表示水，右边是"昜"表示热气。汤是用水煮食物熬成的，热热的喝起来很舒服。' },
            { char: '瓜', pinyin: 'guā', meaning: '瓜', words: ['西瓜', '南瓜'], example: '西瓜很甜。', minecraftSentence: '南瓜可以做成南瓜灯。', story: '瓜字像一个瓜挂在藤上的样子。瓜有很多种，西瓜甜甜的解渴，南瓜可以做成南瓜汤，都很好吃。' },
            { char: '豆', pinyin: 'dòu', meaning: '豆子', words: ['豆子', '绿豆'], example: '豆子可以发芽。', minecraftSentence: '可可豆可以做巧克力饼干。', story: '豆字像一个装豆子的容器。豆子圆圆的，有黄豆、绿豆、红豆，可以发芽变成豆芽菜。' },
            { char: '茶', pinyin: 'chá', meaning: '茶', words: ['喝茶', '茶叶'], example: '爷爷喜欢喝茶。', minecraftSentence: '休息一下喝杯茶吧。', story: '茶字上面是"艹"表示草，说明茶叶是一种植物。茶叶用热水泡开，香香的，是中国人喜欢的饮料。' },
            { char: '酒', pinyin: 'jiǔ', meaning: '酒', words: ['白酒', '喝酒'], example: '小孩不能喝酒。', minecraftSentence: '村民会酿造药水。', story: '酒字左边是"氵"表示液体，右边是"酉"表示酿造用的容器。酒是用粮食酿造的，大人喝的饮料，小朋友不能喝。' },
            { char: '杯', pinyin: 'bēi', meaning: '杯子', words: ['杯子', '水杯'], example: '杯子里有水。', minecraftSentence: '玻璃可以做成杯子。', story: '杯字左边是"木"表示木头做的，右边是"不"表示声音。杯子是用来喝水的容器，有玻璃杯、塑料杯。' },
            { char: '碗', pinyin: 'wǎn', meaning: '碗', words: ['饭碗', '碗筷'], example: '碗里有米饭。', minecraftSentence: '用碗可以装蘑菇汤。', story: '碗字左边是"石"说明古代碗是石头做的，右边是"宛"表示弯曲的形状。碗是用来盛饭盛汤的。' },
            { char: '筷', pinyin: 'kuài', meaning: '筷子', words: ['筷子', '碗筷'], example: '用筷子吃饭。', minecraftSentence: '两根棍子像筷子。', story: '筷字上面是"竹"表示竹子做的，下面是"快"表示快速夹菜。筷子是中国人吃饭用的工具，两根一起用。' },
            { char: '勺', pinyin: 'sháo', meaning: '勺子', words: ['勺子', '汤勺'], example: '用勺子喝汤。', minecraftSentence: '铁锹像一把大勺子。', story: '勺字像一把勺子的形状，有长长的柄和圆圆的头。勺子可以用来舀汤、舀饭，很方便。' }
        ]
    },
    {
        id: 'L2-3',
        level: 2,
        title: '第三课：身体与动作',
        characters: [
            { char: '头', pinyin: 'tóu', meaning: '头', words: ['头发', '点头'], example: '我的头很痛。', minecraftSentence: '僵尸的头可以收集。', story: '头字上面像头发，下面是脸和眼睛的形状。头是身体最上面的部分，里面有大脑，帮我们思考问题。' },
            { char: '目', pinyin: 'mù', meaning: '眼睛', words: ['目光', '目标'], example: '目光炯炯有神。', minecraftSentence: '末影人的目光很可怕。', story: '目字像一只眼睛的形状，中间有瞳孔。眼睛可以看东西，是我们认识世界的窗户。' },
            { char: '耳', pinyin: 'ěr', meaning: '耳朵', words: ['耳朵', '耳机'], example: '耳朵可以听声音。', minecraftSentence: '听到怪物的声音要小心。', story: '耳字像一只耳朵的形状，有外耳和耳洞。耳朵用来听声音，要保护好耳朵，不要听太大的声音。' },
            { char: '鼻', pinyin: 'bí', meaning: '鼻子', words: ['鼻子', '鼻孔'], example: '鼻子可以闻味道。', minecraftSentence: '猪有一个大鼻子。', story: '鼻字上面是"自"表示自己，下面是"畀"。鼻子长在脸的中间，可以闻气味，还可以呼吸空气。' },
            { char: '嘴', pinyin: 'zuǐ', meaning: '嘴巴', words: ['嘴巴', '小嘴'], example: '嘴巴用来说话。', minecraftSentence: '僵尸张开嘴想咬人。', story: '嘴字左边是"口"表示嘴巴。嘴巴可以吃东西、说话、唱歌，是很重要的器官。' },
            { char: '牙', pinyin: 'yá', meaning: '牙齿', words: ['牙齿', '刷牙'], example: '要每天刷牙。', minecraftSentence: '狼有锋利的牙齿。', story: '牙字像嘴巴里两排牙齿的样子。牙齿用来咀嚼食物，要早晚刷牙保护牙齿健康。' },
            { char: '舌', pinyin: 'shé', meaning: '舌头', words: ['舌头', '舌尖'], example: '舌头可以尝味道。', minecraftSentence: '青蛙用舌头抓虫子。', story: '舌字上面像舌头的形状，伸出嘴巴外面。舌头可以尝出酸甜苦辣的味道，还帮助我们说话。' },
            { char: '心', pinyin: 'xīn', meaning: '心脏', words: ['心脏', '开心'], example: '我很开心。', minecraftSentence: '生命值像一颗颗心。', story: '心字像一颗心脏跳动的样子。心脏在胸口，每天不停地跳动，把血液输送到全身。开心是心里高兴的意思。' },
            { char: '肚', pinyin: 'dù', meaning: '肚子', words: ['肚子', '肚皮'], example: '我肚子饿了。', minecraftSentence: '饥饿值低了肚子会饿。', story: '肚字左边是"月"表示身体，右边是"土"表示位置。肚子在身体中间，装着胃和肠子，消化我们吃的食物。' },
            { char: '背', pinyin: 'bèi', meaning: '背部', words: ['后背', '背包'], example: '背包很重。', minecraftSentence: '背包可以装很多东西。', story: '背字上面是"北"表示后面，下面是"月"表示身体。背是身体的后面，可以背书包，也可以让别人拍拍背。' },
            { char: '腿', pinyin: 'tuǐ', meaning: '腿', words: ['大腿', '腿脚'], example: '腿可以走路。', minecraftSentence: '史蒂夫有两条腿。', story: '腿字左边是"月"表示身体，右边是"退"的简化。腿连接着脚，让我们可以走路、跑步、跳跃。' },
            { char: '脚', pinyin: 'jiǎo', meaning: '脚', words: ['脚丫', '脚步'], example: '脚可以走路。', minecraftSentence: '穿上靴子保护脚。', story: '脚字左边是"月"表示身体，右边是"却"表示站立。脚在腿的下面，踩在地上让我们可以站立和行走。' },
            { char: '站', pinyin: 'zhàn', meaning: '站立', words: ['站立', '站起'], example: '请站起来。', minecraftSentence: '站在高处可以看得更远。', story: '站字左边是"立"表示站着，右边是"占"表示位置。站是用脚直立在地上的意思，和坐下相反。' },
            { char: '坐', pinyin: 'zuò', meaning: '坐下', words: ['坐下', '坐着'], example: '请坐下。', minecraftSentence: '坐矿车很方便。', story: '坐字像两个人坐在土地上的样子。坐是屁股着地或着椅子，让身体休息的姿势。' },
            { char: '躺', pinyin: 'tǎng', meaning: '躺下', words: ['躺下', '躺着'], example: '躺在床上睡觉。', minecraftSentence: '睡觉时躺在床上。', story: '躺字左边是"身"表示身体，右边是"尚"表示向上。躺是身体平放在床上或地上休息的姿势。' },
            { char: '跳', pinyin: 'tiào', meaning: '跳跃', words: ['跳跃', '跳高'], example: '兔子会跳。', minecraftSentence: '按空格键可以跳跃。', story: '跳字左边是"足"表示脚，右边是"兆"表示高高地。跳是用脚蹬地，让身体离开地面升高的动作。' },
            { char: '打', pinyin: 'dǎ', meaning: '打击', words: ['打人', '打球'], example: '不能打人。', minecraftSentence: '打怪物可以获得经验。', story: '打字左边是"扌"表示手，右边是"丁"表示钉子。打原本是用手敲击的意思，后来用于很多动作词语。' },
            { char: '拿', pinyin: 'ná', meaning: '拿取', words: ['拿起', '拿着'], example: '拿起书本。', minecraftSentence: '拿着盾牌防御攻击。', story: '拿字上面是"合"表示握住，下面是"手"表示手。拿是用手抓住东西的动作，把东西握在手里。' },
            { char: '抱', pinyin: 'bào', meaning: '拥抱', words: ['拥抱', '抱着'], example: '妈妈抱着我。', minecraftSentence: '抱起小猫带回家。', story: '抱字左边是"扌"表示手，右边是"包"表示包围。抱是用两只手臂环绕着某人或某物，表示喜爱和亲密。' },
            { char: '推', pinyin: 'tuī', meaning: '推动', words: ['推开', '推车'], example: '推开门。', minecraftSentence: '活塞可以推动方块。', story: '推字左边是"扌"表示手，右边是"隹"表示鸟。推是用手向前用力，让东西向前移动的动作。' }
        ]
    },
    {
        id: 'L2-4',
        level: 2,
        title: '第四课：颜色与形状',
        characters: [
            { char: '红', pinyin: 'hóng', meaning: '红色', words: ['红色', '红花'], example: '苹果是红色的。', minecraftSentence: '红石是红色的矿石。', story: '红字左边是"纟"表示丝线，右边是"工"。古代用红色丝线做漂亮的衣服。红色像火焰一样热情，代表喜庆和幸运。' },
            { char: '黄', pinyin: 'huáng', meaning: '黄色', words: ['黄色', '黄金'], example: '香蕉是黄色的。', minecraftSentence: '黄金块闪闪发光。', story: '黄字像一个人戴着闪光的头饰。黄色像金子一样闪亮，是尊贵的颜色，在中国古代是皇帝的专用色。' },
            { char: '蓝', pinyin: 'lán', meaning: '蓝色', words: ['蓝色', '蓝天'], example: '天空是蓝色的。', minecraftSentence: '钻石是蓝色的。', story: '蓝字上面是"艹"表示草，下面是"监"。蓝是从一种叫蓝草的植物提取的颜色，像天空和大海一样美丽宁静。' },
            { char: '绿', pinyin: 'lǜ', meaning: '绿色', words: ['绿色', '绿草'], example: '树叶是绿色的。', minecraftSentence: '苦力怕是绿色的。', story: '绿字左边是"纟"表示丝线，右边是"录"。绿色是植物的颜色，春天的树叶草地都是绿绿的，让人感觉清新。' },
            { char: '白', pinyin: 'bái', meaning: '白色', words: ['白色', '白云'], example: '云是白色的。', minecraftSentence: '羊毛是白色的。', story: '白字像太阳放出光芒的样子。白色像雪一样纯洁干净，白云、白雪、白色的羊毛都很漂亮。' },
            { char: '黑', pinyin: 'hēi', meaning: '黑色', words: ['黑色', '黑夜'], example: '头发是黑色的。', minecraftSentence: '黑曜石是黑色的。', story: '黑字上面是"里"，下面像火熏黑的样子。黑色像夜晚一样深沉，头发、眼珠通常是黑色的。' },
            { char: '紫', pinyin: 'zǐ', meaning: '紫色', words: ['紫色', '紫菜'], example: '葡萄是紫色的。', minecraftSentence: '末地传送门是紫色的。', story: '紫字上面是"此"，下面是"糸"表示丝线。紫色是红色和蓝色混合的颜色，葡萄、茄子都是紫色的。' },
            { char: '粉', pinyin: 'fěn', meaning: '粉色', words: ['粉色', '粉红'], example: '樱花是粉色的。', minecraftSentence: '猪是粉色的。', story: '粉字左边是"米"，右边是"分"。粉色是淡淡的红色，像樱花一样柔美可爱，小女孩们都喜欢粉色。' },
            { char: '灰', pinyin: 'huī', meaning: '灰色', words: ['灰色', '灰尘'], example: '石头是灰色的。', minecraftSentence: '石头是灰色的。', story: '灰字上面像手，下面是"火"。灰是火烧完后留下的东西，灰色是黑色和白色混合的颜色。' },
            { char: '棕', pinyin: 'zōng', meaning: '棕色', words: ['棕色', '棕熊'], example: '树干是棕色的。', minecraftSentence: '泥土是棕色的。', story: '棕字左边是"木"表示树，右边是"宗"。棕色像泥土和树干的颜色，是大自然中常见的颜色。' },
            { char: '圆', pinyin: 'yuán', meaning: '圆形', words: ['圆形', '圆圈'], example: '太阳是圆的。', minecraftSentence: '末影珍珠是圆的。', story: '圆字外面是"囗"表示围起来，里面是"员"。圆形没有角，从中心到边缘距离一样，像太阳、月亮、球都是圆的。' },
            { char: '方', pinyin: 'fāng', meaning: '方形', words: ['方形', '方块'], example: '桌子是方的。', minecraftSentence: '所有方块都是方形的。', story: '方字像一个方正的田地。方形有四个角四条边，正方形四边一样长，各种盒子书本都是方形的。' },
            { char: '长', pinyin: 'cháng', meaning: '长的', words: ['长短', '很长'], example: '这条路很长。', minecraftSentence: '挖一个长长的隧道。', story: '长字像一个老人拄着拐杖头发很长的样子。长表示距离远或时间久，和短相反。' },
            { char: '短', pinyin: 'duǎn', meaning: '短的', words: ['短小', '长短'], example: '这根绳子太短了。', minecraftSentence: '短剑攻击速度快。', story: '短字左边是"矢"表示箭，右边是"豆"。箭比弓短，所以用短来表示长度小，和长相反。' },
            { char: '高', pinyin: 'gāo', meaning: '高的', words: ['高大', '身高'], example: '这棵树很高。', minecraftSentence: '建一座高高的塔。', story: '高字像一座高高的城楼或房子的形状。山很高，大树很高，楼房很高，和矮相反。' },
            { char: '低', pinyin: 'dī', meaning: '低的', words: ['低矮', '高低'], example: '这个凳子很低。', minecraftSentence: '低处有更多矿石。', story: '低字左边是"亻"表示人，右边是"氐"表示到底。低表示离地面近，比高的东西要矮。' },
            { char: '粗', pinyin: 'cū', meaning: '粗的', words: ['粗细', '粗壮'], example: '这根木头很粗。', minecraftSentence: '橡树树干很粗。', story: '粗字左边是"米"，右边是"且"。粗表示横截面大，大树的树干很粗，和细相反。' },
            { char: '细', pinyin: 'xì', meaning: '细的', words: ['细小', '粗细'], example: '这根线很细。', minecraftSentence: '蜘蛛丝很细。', story: '细字左边是"纟"表示丝线，右边是"田"。丝线很细，细表示横截面小，和粗相反。' },
            { char: '厚', pinyin: 'hòu', meaning: '厚的', words: ['厚度', '厚重'], example: '这本书很厚。', minecraftSentence: '墙要建得厚一些。', story: '厚字上面是"厂"像山崖，下面表示很多层叠在一起。厚表示从一面到另一面距离大，和薄相反。' },
            { char: '薄', pinyin: 'báo', meaning: '薄的', words: ['薄片', '厚薄'], example: '这张纸很薄。', minecraftSentence: '玻璃板很薄。', story: '薄字上面是"艹"表示草，下面是"溥"表示水面薄。薄表示厚度小，纸张、玻璃都可以做得很薄。' }
        ]
    },
    {
        id: 'L2-5',
        level: 2,
        title: '第五课：自然与天气',
        characters: [
            { char: '春', pinyin: 'chūn', meaning: '春天', words: ['春天', '春风'], example: '春天来了。', minecraftSentence: '春天万物复苏。', story: '春字上面是"艹"表示草，下面是"日"表示太阳。春天太阳暖暖的，草木发芽，是一年的开始。' },
            { char: '夏', pinyin: 'xià', meaning: '夏天', words: ['夏天', '夏日'], example: '夏天很热。', minecraftSentence: '沙漠像夏天一样热。', story: '夏字像一个人头戴帽子在太阳下劳动的样子。夏天天气炎热，可以吃西瓜、游泳消暑。' },
            { char: '秋', pinyin: 'qiū', meaning: '秋天', words: ['秋天', '秋风'], example: '秋天树叶变黄。', minecraftSentence: '秋天可以收获庄稼。', story: '秋字左边是"禾"表示庄稼，右边是"火"表示成熟。秋天树叶变黄，是收获的季节。' },
            { char: '冬', pinyin: 'dōng', meaning: '冬天', words: ['冬天', '冬雪'], example: '冬天会下雪。', minecraftSentence: '雪地生物群落像冬天。', story: '冬字像冰块结住的样子。冬天天气寒冷，会下雪结冰，要穿厚厚的衣服保暖。' },
            { char: '冷', pinyin: 'lěng', meaning: '寒冷', words: ['寒冷', '冷风'], example: '冬天很冷。', minecraftSentence: '冰雪之地很冷。', story: '冷字左边是"冫"表示冰，右边是"令"表示命令。冷是温度低的感觉，冰水是冷的。' },
            { char: '热', pinyin: 'rè', meaning: '炎热', words: ['炎热', '热水'], example: '夏天很热。', minecraftSentence: '岩浆很热。', story: '热字下面是"火"表示火焰，上面像手在烤火。热是温度高的感觉，太阳火焰都是热的。' },
            { char: '暖', pinyin: 'nuǎn', meaning: '温暖', words: ['温暖', '暖和'], example: '春天很暖和。', minecraftSentence: '火把让房间变暖。', story: '暖字左边是"日"表示太阳，右边是"爰"。太阳照在身上暖暖的，暖是不冷不热刚刚好的温度。' },
            { char: '凉', pinyin: 'liáng', meaning: '凉爽', words: ['凉爽', '凉快'], example: '秋天很凉爽。', minecraftSentence: '水里很凉快。', story: '凉字左边是"冫"表示冰，右边是"京"。凉是稍微有点冷但很舒服的感觉，夏天喝凉水很舒服。' },
            { char: '晴', pinyin: 'qíng', meaning: '晴天', words: ['晴天', '晴朗'], example: '今天是晴天。', minecraftSentence: '晴天阳光明媚。', story: '晴字左边是"日"表示太阳，右边是"青"表示蓝色。晴天太阳高挂，天空蓝蓝的没有云。' },
            { char: '阴', pinyin: 'yīn', meaning: '阴天', words: ['阴天', '阴暗'], example: '今天是阴天。', minecraftSentence: '阴天怪物不会燃烧。', story: '阴字左边是"阝"表示山，右边是"月"表示月亮。阴天天空被云遮住，看不到太阳。' },
            { char: '雪', pinyin: 'xuě', meaning: '雪', words: ['下雪', '雪花'], example: '冬天下雪了。', minecraftSentence: '雪球可以打怪物。', story: '雪字上面是"雨"表示从天上落下，下面是"彐"像雪块。雪是冬天从天上落下的白色冰晶，可以堆雪人。' },
            { char: '冰', pinyin: 'bīng', meaning: '冰', words: ['冰块', '冰冷'], example: '冰很滑。', minecraftSentence: '冰块很滑会加速移动。', story: '冰字左边是"冫"表示冷，右边是"水"表示水。冰是水在很冷的时候凝固变成的，硬硬的透明的。' },
            { char: '雷', pinyin: 'léi', meaning: '雷', words: ['打雷', '雷电'], example: '打雷了。', minecraftSentence: '雷电可以把猪变成僵尸猪人。', story: '雷字上面是"雨"表示下雨天，下面是"田"表示广阔。雷是下雨时天空发出的轰隆隆巨响。' },
            { char: '电', pinyin: 'diàn', meaning: '电', words: ['电灯', '闪电'], example: '闪电很亮。', minecraftSentence: '红石像电一样传递能量。', story: '电字像闪电从云层劈下的形状。电是一种能量，可以让电灯发光、让电视工作。' },
            { char: '河', pinyin: 'hé', meaning: '河流', words: ['河流', '小河'], example: '河水清清的。', minecraftSentence: '河里有很多鱼。', story: '河字左边是"氵"表示水，右边是"可"表示声音。河是在陆地上流动的水道，河水从高处流向低处。' },
            { char: '海', pinyin: 'hǎi', meaning: '大海', words: ['大海', '海洋'], example: '大海很大。', minecraftSentence: '海洋里有海底神殿。', story: '海字左边是"氵"表示水，右边是"每"。海是地球上最大的水域，蓝蓝的无边无际，里面有很多鱼和海洋生物。' },
            { char: '湖', pinyin: 'hú', meaning: '湖泊', words: ['湖泊', '湖水'], example: '湖水很平静。', minecraftSentence: '湖边可以钓鱼。', story: '湖字左边是"氵"表示水，右边是"胡"表示声音。湖是四周被陆地包围的静止水域，比海小很多。' },
            { char: '岛', pinyin: 'dǎo', meaning: '岛屿', words: ['小岛', '岛屿'], example: '小岛在海中央。', minecraftSentence: '蘑菇岛是稀有的生物群落。', story: '岛字上面是"山"，下面是"鸟"。岛是海洋中间露出水面的陆地，四周都是水，鸟儿喜欢在岛上休息。' },
            { char: '林', pinyin: 'lín', meaning: '树林', words: ['树林', '森林'], example: '树林里有很多树。', minecraftSentence: '森林里有很多木头。', story: '林字是两个"木"并排，表示很多树在一起。树林里有很多树，是动物们的家园。' },
            { char: '沙', pinyin: 'shā', meaning: '沙子', words: ['沙子', '沙滩'], example: '沙子很细。', minecraftSentence: '沙子可以做成玻璃。', story: '沙字左边是"氵"表示水边，右边是"少"表示细小。沙是很细小的石头颗粒，海边沙滩上都是沙子。' }
        ]
    },

    // ============ 第三级 初级 (每课18字) ============
    {
        id: 'L3-1',
        level: 3,
        title: '第一课：动物世界',
        characters: [
            { char: '猫', pinyin: 'māo', meaning: '猫', words: ['小猫', '猫咪'], example: '小猫很可爱。', minecraftSentence: '猫可以吓跑苦力怕。', story: '猫字左边是"犭"表示动物，右边是"苗"表示声音。猫是可爱的宠物，会喵喵叫，喜欢捉老鼠和睡觉。' },
            { char: '狗', pinyin: 'gǒu', meaning: '狗', words: ['小狗', '狗狗'], example: '狗是人类的好朋友。', minecraftSentence: '驯服狼就变成狗。', story: '狗字左边是"犭"表示动物，右边是"句"表示声音。狗是人类最忠诚的朋友，会汪汪叫，喜欢和主人玩耍。' },
            { char: '猪', pinyin: 'zhū', meaning: '猪', words: ['小猪', '猪肉'], example: '猪很胖。', minecraftSentence: '猪可以用胡萝卜引诱。', story: '猪字左边是"犭"表示动物，右边是"者"表示声音。猪是圆圆胖胖的家畜，粉粉的鼻子很可爱。' },
            { char: '马', pinyin: 'mǎ', meaning: '马', words: ['马儿', '骑马'], example: '马跑得很快。', minecraftSentence: '骑马可以跑得更快。', story: '马字像一匹马的形状，有头有脚有尾巴。马跑得很快，古代人骑马打仗和旅行。' },
            { char: '兔', pinyin: 'tù', meaning: '兔子', words: ['兔子', '白兔'], example: '兔子爱吃萝卜。', minecraftSentence: '兔子会掉落兔脚。', story: '兔字像一只兔子的形状，有长长的耳朵和短短的尾巴。小白兔爱吃萝卜，蹦蹦跳跳很可爱。' },
            { char: '鸡', pinyin: 'jī', meaning: '鸡', words: ['小鸡', '公鸡'], example: '公鸡会打鸣。', minecraftSentence: '鸡可以用种子繁殖。', story: '鸡字左边是"又"，右边是"鸟"的变形。鸡是常见的家禽，公鸡早上会喔喔叫，母鸡会下蛋。' },
            { char: '鸭', pinyin: 'yā', meaning: '鸭子', words: ['鸭子', '野鸭'], example: '鸭子会游泳。', minecraftSentence: '鸡看起来像鸭子。', story: '鸭字左边是"甲"表示嘴巴，右边是"鸟"。鸭子会游泳，扁扁的嘴巴可以在水里找食物。' },
            { char: '鹅', pinyin: 'é', meaning: '鹅', words: ['白鹅', '天鹅'], example: '鹅的脖子很长。', minecraftSentence: '白天鹅优雅地游泳。', story: '鹅字左边是"我"表示声音，右边是"鸟"。鹅有长长的脖子，白色的羽毛，在水里游泳很优雅。' },
            { char: '蛇', pinyin: 'shé', meaning: '蛇', words: ['蛇', '毒蛇'], example: '蛇没有脚。', minecraftSentence: '末影龙像一条大蛇。', story: '蛇字左边是"虫"表示爬行动物，右边是"它"。蛇没有脚，靠身体扭动爬行，有些蛇有毒要小心。' },
            { char: '龟', pinyin: 'guī', meaning: '乌龟', words: ['乌龟', '海龟'], example: '乌龟爬得很慢。', minecraftSentence: '海龟会在沙滩产蛋。', story: '龟字像乌龟的形状，有壳有头有脚。乌龟背着硬硬的壳，爬得很慢但活得很长。' },
            { char: '蜂', pinyin: 'fēng', meaning: '蜜蜂', words: ['蜜蜂', '蜂蜜'], example: '蜜蜂会采蜜。', minecraftSentence: '蜜蜂会帮助花朵授粉。', story: '蜂字左边是"虫"表示昆虫，右边是"峰"的简化。蜜蜂很勤劳，在花丛中采花蜜做成甜甜的蜂蜜。' },
            { char: '蝴', pinyin: 'hú', meaning: '蝴蝶', words: ['蝴蝶', '蝴蝶结'], example: '蝴蝶很美丽。', minecraftSentence: '花丛里有美丽的蝴蝶。', story: '蝴字左边是"虫"表示昆虫，右边是"胡"表示声音。蝴蝶有美丽的翅膀，在花丛中飞舞。' },
            { char: '蝶', pinyin: 'dié', meaning: '蝶', words: ['蝴蝶', '彩蝶'], example: '彩蝶飞舞。', minecraftSentence: '蝴蝶在花间飞舞。', story: '蝶字左边是"虫"表示昆虫，右边是"枼"像叶子。蝴蝶的翅膀像美丽的叶子，五彩缤纷。' },
            { char: '蚂', pinyin: 'mǎ', meaning: '蚂蚁', words: ['蚂蚁', '蚂蚱'], example: '蚂蚁很勤劳。', minecraftSentence: '蚂蚁很小但很勤劳。', story: '蚂字左边是"虫"表示昆虫，右边是"马"表示声音。蚂蚁虽小却很勤劳，团结合作搬运食物。' },
            { char: '蚁', pinyin: 'yǐ', meaning: '蚁', words: ['蚂蚁', '蚁穴'], example: '蚂蚁住在蚁穴里。', minecraftSentence: '蚂蚁会搬运食物。', story: '蚁字左边是"虫"表示昆虫，右边是"义"表示声音。蚂蚁住在地下的巢穴里，是很有组织的小昆虫。' },
            { char: '熊', pinyin: 'xióng', meaning: '熊', words: ['熊', '北极熊'], example: '熊很强壮。', minecraftSentence: '北极熊生活在雪地。', story: '熊字上面是"能"，下面是"灬"像熊的脚印。熊是毛茸茸的大动物，力气很大，喜欢吃蜂蜜。' },
            { char: '狼', pinyin: 'láng', meaning: '狼', words: ['狼', '野狼'], example: '狼会嚎叫。', minecraftSentence: '用骨头驯服狼。', story: '狼字左边是"犭"表示动物，右边是"良"表示声音。狼是群居动物，晚上会对着月亮嚎叫。' },
            { char: '虎', pinyin: 'hǔ', meaning: '老虎', words: ['老虎', '虎王'], example: '老虎是百兽之王。', minecraftSentence: '豹猫像小老虎。', story: '虎字像一只老虎的头，有大嘴巴和条纹。老虎是百兽之王，身上有漂亮的条纹，非常威猛。' }
        ]
    },
    {
        id: 'L3-2',
        level: 3,
        title: '第二课：植物花园',
        characters: [
            { char: '树', pinyin: 'shù', meaning: '树', words: ['大树', '树木'], example: '树很高。', minecraftSentence: '砍树可以获得木头。', story: '树字左边是"木"表示木头，右边是"对"的变形。树从种子长大，有树干、树枝和树叶，给我们遮阴乘凉。' },
            { char: '叶', pinyin: 'yè', meaning: '叶子', words: ['树叶', '叶子'], example: '叶子是绿色的。', minecraftSentence: '树叶可以做成树苗。', story: '叶字上面是"艹"表示草，下面像叶子的形状。叶子大多是绿色的，可以吸收阳光帮助植物生长。' },
            { char: '枝', pinyin: 'zhī', meaning: '树枝', words: ['树枝', '枝条'], example: '树枝很细。', minecraftSentence: '树枝可以做成棍子。', story: '枝字左边是"木"表示树木，右边是"支"表示分开。树枝是从树干分出来的，比树干细。' },
            { char: '根', pinyin: 'gēn', meaning: '根', words: ['树根', '根部'], example: '树根在地下。', minecraftSentence: '树根扎在泥土里。', story: '根字左边是"木"表示植物，右边是"艮"表示稳固。根在地下吸收水分和养分，固定植物不倒。' },
            { char: '苗', pinyin: 'miáo', meaning: '幼苗', words: ['树苗', '幼苗'], example: '幼苗很嫩。', minecraftSentence: '树苗可以种成大树。', story: '苗字上面是"艹"表示草，下面是"田"表示田地。苗是刚发芽的小植物，嫩嫩的绿绿的。' },
            { char: '种', pinyin: 'zhǒng', meaning: '种子', words: ['种子', '种植'], example: '种子发芽了。', minecraftSentence: '用种子可以种植庄稼。', story: '种字左边是"禾"表示庄稼，右边是"中"表示位置。种子埋在土里会发芽长大变成植物。' },
            { char: '麦', pinyin: 'mài', meaning: '小麦', words: ['小麦', '麦子'], example: '麦子成熟了。', minecraftSentence: '小麦可以做成面包。', story: '麦字像一棵麦子的形状，上面是麦穗，下面是根。小麦磨成面粉可以做面包和面条。' },
            { char: '稻', pinyin: 'dào', meaning: '稻子', words: ['稻子', '水稻'], example: '稻子是金色的。', minecraftSentence: '水稻需要水来生长。', story: '稻字左边是"禾"表示庄稼，右边是"舀"表示需要水。稻子长在水田里，成熟后变成金色，碾出来就是大米。' },
            { char: '竹', pinyin: 'zhú', meaning: '竹子', words: ['竹子', '竹林'], example: '竹子很直。', minecraftSentence: '竹子可以做成脚手架。', story: '竹字像两根竹子的样子，有竹节和竹叶。竹子长得又高又直，可以做成竹筷、竹篮。' },
            { char: '松', pinyin: 'sōng', meaning: '松树', words: ['松树', '松果'], example: '松树四季常青。', minecraftSentence: '云杉像松树一样高大。', story: '松字左边是"木"表示树，右边是"公"表示公开。松树一年四季都是绿色的，会结松果。' },
            { char: '柳', pinyin: 'liǔ', meaning: '柳树', words: ['柳树', '柳枝'], example: '柳枝在风中飘动。', minecraftSentence: '柳树的枝条很柔软。', story: '柳字左边是"木"表示树，右边是"卯"表示春天。柳树的枝条长长的软软的，春天发芽飘在风中很美。' },
            { char: '桃', pinyin: 'táo', meaning: '桃子', words: ['桃子', '桃花'], example: '桃子很甜。', minecraftSentence: '樱花像桃花一样美丽。', story: '桃字左边是"木"表示果树，右边是"兆"表示很多。桃树开粉色的花，结的桃子甜甜的多汁。' },
            { char: '梨', pinyin: 'lí', meaning: '梨', words: ['梨子', '雪梨'], example: '梨子多汁。', minecraftSentence: '梨子甜甜的。', story: '梨字上面是"利"表示声音，下面是"木"表示果树。梨子黄黄的，水分很多，吃起来甜甜脆脆的。' },
            { char: '萝', pinyin: 'luó', meaning: '萝卜', words: ['萝卜', '胡萝卜'], example: '萝卜可以吃。', minecraftSentence: '胡萝卜可以钓竿引诱猪。', story: '萝字上面是"艹"表示草本植物，下面是"罗"表示声音。萝卜长在土里，有白萝卜和胡萝卜。' },
            { char: '卜', pinyin: 'bo', meaning: '卜(萝卜)', words: ['萝卜', '胡萝卜'], example: '胡萝卜是橙色的。', minecraftSentence: '兔子喜欢吃胡萝卜。', story: '卜字像萝卜埋在土里的样子。和"萝"合在一起变成萝卜，是很常见的蔬菜。' },
            { char: '葱', pinyin: 'cōng', meaning: '葱', words: ['大葱', '葱花'], example: '葱可以调味。', minecraftSentence: '葱可以增加食物风味。', story: '葱字上面是"艹"表示草本植物，下面是"匆"表示声音。葱是绿色的调味菜，做菜时放一点葱很香。' },
            { char: '姜', pinyin: 'jiāng', meaning: '姜', words: ['生姜', '姜汁'], example: '姜很辣。', minecraftSentence: '姜可以驱寒。', story: '姜字上面是"艹"，下面像姜的形状。姜是黄色的调味品，有点辣，冬天喝姜汤可以驱寒。' },
            { char: '蒜', pinyin: 'suàn', meaning: '大蒜', words: ['大蒜', '蒜头'], example: '蒜味道很重。', minecraftSentence: '大蒜可以驱赶吸血鬼。', story: '蒜字上面是"艹"表示草本植物，下面是"祘"。大蒜有很强的气味，可以杀菌消毒，做菜放蒜很香。' }
        ]
    },
    {
        id: 'L3-3',
        level: 3,
        title: '第三课：情感表达',
        characters: [
            { char: '爱', pinyin: 'ài', meaning: '爱', words: ['爱心', '喜爱'], example: '我爱妈妈。', minecraftSentence: '我爱玩这个游戏。', story: '爱字中间有"心"，表示爱发自内心。爱是世界上最温暖的感情，爸爸妈妈爱我们，我们也要爱他们。' },
            { char: '喜', pinyin: 'xǐ', meaning: '喜欢', words: ['喜欢', '欢喜'], example: '我喜欢画画。', minecraftSentence: '我喜欢建造房子。', story: '喜字像有嘴巴在笑的样子。喜是高兴的意思，遇到开心事就会喜，如喜事、喜欢。' },
            { char: '欢', pinyin: 'huān', meaning: '欢乐', words: ['欢乐', '喜欢'], example: '大家很欢乐。', minecraftSentence: '和朋友一起玩很欢乐。', story: '欢字左边是"又"表示拍手，右边是"欠"表示张嘴笑。欢是开心快乐的意思，大家一起欢笑。' },
            { char: '乐', pinyin: 'lè', meaning: '快乐', words: ['快乐', '音乐'], example: '我很快乐。', minecraftSentence: '挖到钻石很快乐。', story: '乐字像一个人站在木头架子上唱歌跳舞。乐是快乐的意思，做喜欢的事会很快乐。' },
            { char: '笑', pinyin: 'xiào', meaning: '笑', words: ['微笑', '笑容'], example: '她笑得很开心。', minecraftSentence: '打败怪物后开心地笑。', story: '笑字上面是"竹"，下面是"夭"像人弯腰的样子。笑是高兴时嘴角上扬发出声音的表情。' },
            { char: '哭', pinyin: 'kū', meaning: '哭', words: ['哭泣', '哭声'], example: '弟弟哭了。', minecraftSentence: '死掉后不要哭。', story: '哭字上面两个"口"像眼睛，下面是"犬"表示汪汪的声音。哭是伤心时流眼泪发出声音。' },
            { char: '怕', pinyin: 'pà', meaning: '害怕', words: ['害怕', '可怕'], example: '我怕黑。', minecraftSentence: '不要怕苦力怕。', story: '怕字左边是"忄"表示心情，右边是"白"表示脸色发白。害怕时心跳加快，脸色可能发白。' },
            { char: '急', pinyin: 'jí', meaning: '着急', words: ['着急', '急忙'], example: '别着急。', minecraftSentence: '岩浆围住时别着急。', story: '急字上面像紧皱的眉头，下面是"心"。着急时心跳加快，眉头紧锁，想要快点完成事情。' },
            { char: '忙', pinyin: 'máng', meaning: '忙碌', words: ['忙碌', '帮忙'], example: '妈妈很忙。', minecraftSentence: '建造城堡很忙碌。', story: '忙字左边是"忄"表示心，右边是"亡"表示没有。忙是有很多事情要做，没有空闲时间。' },
            { char: '累', pinyin: 'lèi', meaning: '疲劳', words: ['疲劳', '劳累'], example: '我很累。', minecraftSentence: '挖矿挖累了就休息。', story: '累字上面是"田"，下面是"系"。在田里干活很辛苦，累了就要休息恢复体力。' },
            { char: '饿', pinyin: 'è', meaning: '饥饿', words: ['饥饿', '饿了'], example: '我饿了。', minecraftSentence: '饥饿值低了要吃东西。', story: '饿字左边是"饣"表示食物，右边是"我"表示自己。饿是肚子需要食物的感觉，要吃东西。' },
            { char: '渴', pinyin: 'kě', meaning: '口渴', words: ['口渴', '渴望'], example: '我渴了。', minecraftSentence: '沙漠里很容易渴。', story: '渴字左边是"氵"表示水，右边是"葛"表示声音。渴是嘴巴干干的，想要喝水的感觉。' },
            { char: '困', pinyin: 'kùn', meaning: '困倦', words: ['困倦', '困难'], example: '我困了。', minecraftSentence: '天黑了就躺床睡觉。', story: '困字是"木"在"囗"里面，像树被围困。困是想睡觉的感觉，也表示遇到难题。' },
            { char: '想', pinyin: 'xiǎng', meaning: '想', words: ['想念', '思想'], example: '我想妈妈。', minecraftSentence: '我想建一座城堡。', story: '想字上面是"相"表示看，下面是"心"表示心里。想是用心去思考或想念某人某事。' },
            { char: '念', pinyin: 'niàn', meaning: '念', words: ['想念', '念书'], example: '我很想念你。', minecraftSentence: '念念不忘那颗钻石。', story: '念字上面是"今"表示现在，下面是"心"表示心里。念是心里记着某人某事，也表示读书。' },
            { char: '记', pinyin: 'jì', meaning: '记住', words: ['记住', '记忆'], example: '要记住老师说的话。', minecraftSentence: '记住家的坐标。', story: '记字左边是"讠"表示语言，右边是"己"表示自己。记是把学到的东西存在脑子里不忘掉。' },
            { char: '忘', pinyin: 'wàng', meaning: '忘记', words: ['忘记', '忘掉'], example: '不要忘记写作业。', minecraftSentence: '别忘记带上食物。', story: '忘字上面是"亡"表示没有了，下面是"心"。忘是心里不再记得某件事，和记相反。' },
            { char: '懂', pinyin: 'dǒng', meaning: '懂得', words: ['懂得', '听懂'], example: '我听懂了。', minecraftSentence: '终于懂得怎么做了。', story: '懂字左边是"忄"表示心里，右边是"董"表示声音。懂是明白了解某件事的意思，理解了。' }
        ]
    },
    {
        id: 'L3-4',
        level: 3,
        title: '第四课：学校与学习',
        characters: [
            { char: '学', pinyin: 'xué', meaning: '学习', words: ['学习', '学校'], example: '我爱学习。', minecraftSentence: '学习怎么建造更好。', story: '学字上面像两只手在教，下面是"子"表示孩子。学是孩子跟着老师学知识的意思。' },
            { char: '校', pinyin: 'xiào', meaning: '学校', words: ['学校', '校园'], example: '学校很大。', minecraftSentence: '建造一座学校。', story: '校字左边是"木"表示树，右边是"交"表示交流。学校是学生和老师交流学习的地方。' },
            { char: '书', pinyin: 'shū', meaning: '书', words: ['书本', '看书'], example: '我在看书。', minecraftSentence: '附魔书可以附魔装备。', story: '书字像一只手在写字的样子。书是记录知识的纸张装订在一起，我们从书里学知识。' },
            { char: '本', pinyin: 'běn', meaning: '本子', words: ['本子', '书本'], example: '这是我的本子。', minecraftSentence: '书和羽毛笔可以写书。', story: '本字是"木"下面加一横表示树根。本是根本的意思，本子是用来写字的册子。' },
            { char: '笔', pinyin: 'bǐ', meaning: '笔', words: ['铅笔', '毛笔'], example: '用笔写字。', minecraftSentence: '用羽毛笔写字。', story: '笔字上面是"竹"表示竹子做的，下面是"毛"表示毛做的。古代用竹子和毛做成毛笔写字。' },
            { char: '纸', pinyin: 'zhǐ', meaning: '纸', words: ['纸张', '白纸'], example: '纸是白色的。', minecraftSentence: '甘蔗可以做成纸。', story: '纸字左边是"纟"表示丝，右边是"氏"表示声音。纸是用植物纤维做的，可以写字画画。' },
            { char: '字', pinyin: 'zì', meaning: '字', words: ['写字', '汉字'], example: '这个字很难写。', minecraftSentence: '牌子上可以写字。', story: '字字上面是"宀"像房子，下面是"子"表示孩子。字是在家里教孩子认识的符号，用来记录语言。' },
            { char: '画', pinyin: 'huà', meaning: '画', words: ['画画', '图画'], example: '我喜欢画画。', minecraftSentence: '画可以装饰房间。', story: '画字里面像用笔画出的田地和边框。画是用笔在纸上画出图形和颜色，表达想法。' },
            { char: '读', pinyin: 'dú', meaning: '读', words: ['读书', '朗读'], example: '大声读课文。', minecraftSentence: '读懂附魔的意思。', story: '读字左边是"讠"表示语言，右边是"卖"的变形。读是看着书发出声音，把文字变成语言。' },
            { char: '写', pinyin: 'xiě', meaning: '写', words: ['写字', '书写'], example: '认真写作业。', minecraftSentence: '在书上写下冒险日记。', story: '写字上面是"宀"像房子，下面像手拿笔。写是用笔把想法变成文字记录下来。' },
            { char: '算', pinyin: 'suàn', meaning: '计算', words: ['计算', '算数'], example: '算数题很简单。', minecraftSentence: '算一算需要多少材料。', story: '算字上面是"竹"表示算筹，下面是工具。古人用竹签计算数字，后来演变成算盘。' },
            { char: '数', pinyin: 'shù', meaning: '数字', words: ['数字', '数学'], example: '数学很有趣。', minecraftSentence: '数一数收集了多少钻石。', story: '数字左边是"米"表示谷物，右边是"攵"表示动作。古人数米粒来计算数量，后来有了数字。' },
            { char: '考', pinyin: 'kǎo', meaning: '考试', words: ['考试', '思考'], example: '明天要考试。', minecraftSentence: '考验你的建造技术。', story: '考字像一个老人弯着腰的样子。考是检验学习成果，也表示仔细思考问题。' },
            { char: '试', pinyin: 'shì', meaning: '尝试', words: ['考试', '试试'], example: '试试这道题。', minecraftSentence: '试试看能不能打败Boss。', story: '试字左边是"讠"表示语言，右边是"式"表示方式。试是尝试做某事看看结果如何。' },
            { char: '教', pinyin: 'jiāo', meaning: '教', words: ['教书', '教室'], example: '老师教我们。', minecraftSentence: '教朋友怎么玩。', story: '教字左边是"孝"表示孩子，右边是"攵"表示手拿棍子。教是把知识传授给别人学。' },
            { char: '师', pinyin: 'shī', meaning: '老师', words: ['老师', '师傅'], example: '老师很和蔼。', minecraftSentence: '成为建筑大师。', story: '师字像一把刀在布上裁剪。师是有技艺的人，老师是教学生知识的人。' },
            { char: '课', pinyin: 'kè', meaning: '课程', words: ['上课', '课本'], example: '上课要认真。', minecraftSentence: '这是识字课程。', story: '课字左边是"讠"表示语言，右边是"果"表示结果。课是学习的内容安排，上课学知识。' },
            { char: '题', pinyin: 'tí', meaning: '题目', words: ['题目', '问题'], example: '这道题很难。', minecraftSentence: '解决生存问题。', story: '题字左边是"是"，右边是"页"表示头。题是需要思考回答的问题，考试有很多题。' }
        ]
    },
    {
        id: 'L3-5',
        level: 3,
        title: '第五课：交通与出行',
        characters: [
            { char: '骑', pinyin: 'qí', meaning: '骑', words: ['骑马', '骑车'], example: '我会骑自行车。', minecraftSentence: '骑马跑得更快。', story: '骑字左边是"马"，右边是"奇"表示声音。骑是坐在马背上或车座上，用腿夹住移动。' },
            { char: '开', pinyin: 'kāi', meaning: '开', words: ['开门', '开车'], example: '开门进来。', minecraftSentence: '开门进入房子。', story: '开字像两只手把门闩打开的样子。开是打开的意思，和关相反，开门、开灯、开车。' },
            { char: '关', pinyin: 'guān', meaning: '关', words: ['关门', '关灯'], example: '关上门。', minecraftSentence: '关好门防止怪物。', story: '关字像门上有门闩锁住的样子。关是关闭的意思，和开相反，关门、关灯、关窗。' },
            { char: '停', pinyin: 'tíng', meaning: '停', words: ['停车', '停止'], example: '汽车停下来了。', minecraftSentence: '停下来看看周围。', story: '停字左边是"亻"表示人，右边是"亭"表示亭子。停是不再移动，像在亭子里休息一样。' },
            { char: '快', pinyin: 'kuài', meaning: '快', words: ['快速', '快乐'], example: '跑得很快。', minecraftSentence: '用速度药水跑得更快。', story: '快字左边是"忄"表示心，右边是"夬"表示决定。心里决定了就行动快，速度快，也表示开心。' },
            { char: '慢', pinyin: 'màn', meaning: '慢', words: ['慢慢', '缓慢'], example: '乌龟爬得很慢。', minecraftSentence: '灵魂沙让你变慢。', story: '慢字左边是"忄"表示心情，右边是"曼"表示延长。慢是速度低，用时间长，和快相反。' },
            { char: '远', pinyin: 'yuǎn', meaning: '远', words: ['远方', '遥远'], example: '学校离家很远。', minecraftSentence: '远处有一座村庄。', story: '远字里面是"元"表示人走路，外面是"辶"表示行走。远是距离很长，要走很久才能到。' },
            { char: '近', pinyin: 'jìn', meaning: '近', words: ['近处', '附近'], example: '商店离这里很近。', minecraftSentence: '家就在附近。', story: '近字里面是"斤"，外面是"辶"表示行走。近是距离很短，很快就能走到，和远相反。' },
            { char: '过', pinyin: 'guò', meaning: '过', words: ['过去', '经过'], example: '过马路要小心。', minecraftSentence: '穿过传送门去地狱。', story: '过字里面像走路的脚步，外面是"辶"表示行走。过是从一边到另一边，经过某个地方。' },
            { char: '回', pinyin: 'huí', meaning: '回', words: ['回家', '回来'], example: '该回家了。', minecraftSentence: '迷路了要找路回家。', story: '回字是一个方框里面有一个小方框，像水在旋转。回是返回原来地方，回家、回来。' },
            { char: '到', pinyin: 'dào', meaning: '到', words: ['到达', '来到'], example: '我到学校了。', minecraftSentence: '终于到达终点了。', story: '到字左边是"至"表示到达，右边是"刂"表示切断路程。到是经过路程终于抵达目的地。' },
            { char: '送', pinyin: 'sòng', meaning: '送', words: ['送给', '送走'], example: '妈妈送我上学。', minecraftSentence: '把礼物送给朋友。', story: '送字里面是"关"，外面是"辶"表示行走。送是把人或东西带到某处交给别人。' },
            { char: '接', pinyin: 'jiē', meaning: '接', words: ['接人', '迎接'], example: '爸爸来接我。', minecraftSentence: '接住掉落的物品。', story: '接字左边是"扌"表示手，右边是"妾"表示迎接。接是用手接住东西，或去某处迎接人。' },
            { char: '等', pinyin: 'děng', meaning: '等', words: ['等待', '等等'], example: '等一下。', minecraftSentence: '等天亮再出门。', story: '等字上面是"竹"，下面是"寺"表示寺庙。等是停下来等候，像在寺庙前静静等待。' },
            { char: '借', pinyin: 'jiè', meaning: '借', words: ['借书', '借用'], example: '借我一支笔。', minecraftSentence: '借朋友一些材料。', story: '借字左边是"亻"表示人，右边是"昔"表示过去。借是暂时拿别人的东西用，要还回去。' },
            { char: '还', pinyin: 'huán', meaning: '还', words: ['还书', '归还'], example: '把书还给图书馆。', minecraftSentence: '还有更多宝藏。', story: '还字里面是"不"，外面是"辶"表示行走。还是把借的东西送回去，归还给别人。' },
            { char: '找', pinyin: 'zhǎo', meaning: '找', words: ['找到', '寻找'], example: '找到我的书了。', minecraftSentence: '找到钻石矿了！', story: '找字左边是"扌"表示手，右边是"戈"表示武器。找是用手寻找东西，到处寻找某物。' },
            { char: '换', pinyin: 'huàn', meaning: '换', words: ['换衣服', '交换'], example: '换件衣服。', minecraftSentence: '和村民交换物品。', story: '换字左边是"扌"表示手，右边是"奂"表示改变。换是用一样东西交换另一样东西。' }
        ]
    },

    // ============ 第四级 进阶级 (每课16字) ============
    {
        id: 'L4-1',
        level: 4,
        title: '第一课：基础动作',
        characters: [
            { char: '拉', pinyin: 'lā', meaning: '拉动', words: ['拉开', '拉手'], example: '拉开门。', minecraftSentence: '拉动拉杆可以激活红石。', story: '拉字左边是"扌"表示手，右边是"立"。用手抓住东西让它站立起来或移过来，比如拉手。' },
            { char: '扔', pinyin: 'rēng', meaning: '扔掉', words: ['扔掉', '扔球'], example: '把纸扔进垃圾桶。', minecraftSentence: '把末影珍珠扔出去可以传送。', story: '扔字左边是"扌"表示手，右边是"乃"。用手用力把东西丢出去，越远越好。' },
            { char: '放', pinyin: 'fàng', meaning: '放置', words: ['放下', '释放'], example: '把书放在桌上。', minecraftSentence: '把方块放在地上。', story: '放字左边是"方"，右边是"攵"表示动作。把东西方方正正地摆好，就是放。' },
            { char: '拿', pinyin: 'ná', meaning: '拿取', words: ['拿起', '拿走'], example: '拿起你的书包。', minecraftSentence: '拿起钻石剑准备战斗。', story: '拿字上面是"合"，下面是"手"。把手合起来握住东西，就是拿。' },
            { char: '捡', pinyin: 'jiǎn', meaning: '捡起', words: ['捡起', '捡拾'], example: '捡起地上的纸。', minecraftSentence: '捡起掉落的物品。', story: '捡字左边是"扌"表示手，右边是脸的一部分。弯下腰因为脸上看见了，用手把地上的东西捡起来。' },
            { char: '挖', pinyin: 'wā', meaning: '挖掘', words: ['挖洞', '挖土'], example: '用铲子挖土。', minecraftSentence: '往下挖可以找到钻石。', story: '挖字左边是"扌"表示手，右边是"空"的下半部分。用手或工具把土掏空，就是挖。' },
            { char: '砍', pinyin: 'kǎn', meaning: '砍伐', words: ['砍树', '砍柴'], example: '砍树做柴火。', minecraftSentence: '用斧头砍树更快。', story: '砍字左边是"石"表示石头，右边是"欠"。古代人们用石头做的工具用力劈开木头。' },
            { char: '建', pinyin: 'jiàn', meaning: '建造', words: ['建造', '建设'], example: '建造一座房子。', minecraftSentence: '我建造了一座城堡。', story: '建字像一只手拿着笔在画图纸，外面是"廴"表示廷伸。建造高楼大厦需要先画图。' },
            { char: '造', pinyin: 'zào', meaning: '创造', words: ['创造', '制造'], example: '创造美好生活。', minecraftSentence: '创造模式可以自由建造。', story: '造字左边是"告"表示说话，右边是"辶"表示走。造是制作出以前没有的东西，比如造房子。' },
            { char: '修', pinyin: 'xiū', meaning: '修理', words: ['修理', '修补'], example: '修理坏了的椅子。', minecraftSentence: '用铁砧可以修理工具。', story: '修字左边像一个人拿着工具把坏得东西弄好。东西坏了不要扔，修一修还能用。' },
            { char: '补', pinyin: 'bǔ', meaning: '补充', words: ['补充', '修补'], example: '补充水分。', minecraftSentence: '补充饥饿值要吃东西。', story: '补字左边是"衤"表示衣服，右边是"卜"。衣服破了一个洞，用布把它补好。' },
            { char: '破', pinyin: 'pò', meaning: '破坏', words: ['破坏', '打破'], example: '玻璃破了。', minecraftSentence: '用镐可以破坏石头。', story: '破字左边是"石"表示石头，右边是"皮"。石头把皮磨坏了，破就是东西坏了或碎了。' },
            { char: '摔', pinyin: 'shuāi', meaning: '摔倒', words: ['摔倒', '摔跤'], example: '小心别摔倒。', minecraftSentence: '从高处摔下会受伤。', story: '摔字左边是"扌"表示手，右边是率领的率。走路不小心滑倒了，或者用手把东西用力扔下。' },
            { char: '爬', pinyin: 'pá', meaning: '爬行', words: ['爬山', '爬树'], example: '爬上山顶。', minecraftSentence: '用梯子可以往上爬。', story: '爬字左边是"爪"表示爪子，右边是"巴"。像小动物用爪子巴住墙壁往上移动。' },
            { char: '飞', pinyin: 'fēi', meaning: '飞翔', words: ['飞翔', '飞行'], example: '小鸟在天上飞。', minecraftSentence: '穿上鞘翅就能飞翔。', story: '飞字像一只鸟张开翅膀在空中飞翔的样子。鸟儿飞，飞机飞，飞得很高很高。' },
            { char: '游', pinyin: 'yóu', meaning: '游泳', words: ['游泳', '游玩'], example: '在水里游泳。', minecraftSentence: '按住空格键可以向上游。', story: '游字左边是"氵"表示水，右边像举着旗子的孩子。在水里像鱼儿一样游动，或者到处玩耍。' }
        ]
    },
    {
        id: 'L4-2',
        level: 4,
        title: '第二课：日常动词',
        characters: [
            { char: '听', pinyin: 'tīng', meaning: '听', words: ['听话', '听见'], example: '听妈妈的话。', minecraftSentence: '听到僵尸的声音要小心。', story: '听字左边是"口"，右边是"斤"。用耳朵仔细接收声音，不管是说话声还是音乐声。' },
            { char: '说', pinyin: 'shuō', meaning: '说话', words: ['说话', '说明'], example: '请你说一遍。', minecraftSentence: '鹦鹉可以学你说话。', story: '说字左边是"讠"表示语言，右边是"兑"。张开嘴巴把心里的话讲出来让别人听到。' },
            { char: '问', pinyin: 'wèn', meaning: '询问', words: ['问题', '询问'], example: '问老师问题。', minecraftSentence: '问问朋友怎么做。', story: '问字外面是"门"，里面是"口"。不懂的事情要张口问，去敲开知识的大门。' },
            { char: '答', pinyin: 'dá', meaning: '回答', words: ['回答', '答案'], example: '回答问题。', minecraftSentence: '找到谜题的答案。', story: '答字上面是"竹"表示竹简，下面是"合"。回答问题要符合题目，像盖子合上一样。' },
            { char: '唱', pinyin: 'chàng', meaning: '唱歌', words: ['唱歌', '歌唱'], example: '我喜欢唱歌。', minecraftSentence: '音符盒可以播放音乐。', story: '唱字左边是"口"表示嘴巴，右边是两个"日"表示昌盛。张大嘴巴大声发出美妙的歌声。' },
            { char: '睡', pinyin: 'shuì', meaning: '睡觉', words: ['睡觉', '睡眠'], example: '该睡觉了。', minecraftSentence: '睡觉可以跳过黑夜。', story: '睡字左边是"目"表示眼睛，右边是"垂"表示掉下来。眼皮垂下来挡住眼睛，就是因为困了要睡觉。' },
            { char: '醒', pinyin: 'xǐng', meaning: '醒来', words: ['醒来', '清醒'], example: '早上醒来了。', minecraftSentence: '天亮了就醒来继续冒险。', story: '醒字左边是"酉"表示酒，右边是"星"。酒醉过去后清醒了，或者早上睁开眼不再睡觉。' },
            { char: '穿', pinyin: 'chuān', meaning: '穿衣', words: ['穿衣', '穿过'], example: '穿上外套。', minecraftSentence: '穿上盔甲保护自己。', story: '穿字上面是"穴"表示洞，下面是"牙"。像牙齿咬穿东西一样，把手脚伸进衣服鞋子里。' },
            { char: '脱', pinyin: 'tuō', meaning: '脱掉', words: ['脱掉', '脱下'], example: '脱掉外套。', minecraftSentence: '脱下盔甲放进箱子。', story: '脱字左边是"月"表示身体，右边是"兑"表示离开。把衣服从身上取下来，或者皮从肉上掉下来。' },
            { char: '洗', pinyin: 'xǐ', meaning: '洗涤', words: ['洗手', '洗澡'], example: '饭前洗手。', minecraftSentence: '用水把染色羊毛洗白。', story: '洗字左边是"氵"表示水，右边是"先"。用水把脏东西冲掉，洗手、洗澡、洗衣服。' },
            { char: '吹', pinyin: 'chuī', meaning: '吹气', words: ['吹风', '吹灭'], example: '吹灭蜡烛。', minecraftSentence: '风吹动旗帜飘扬。', story: '吹字左边是"口"表示嘴巴，右边是"欠"表示张嘴。嘴巴聚拢用力呼出气流，吹风、吹气球。' },
            { char: '数', pinyin: 'shǔ', meaning: '数数', words: ['数数', '数字'], example: '数一数有几个。', minecraftSentence: '数一数收集了多少钻石。', story: '数字左边是"米"，右边是"攵"表示手。一个一个地点算有多少米粒，就是数数。' },
            { char: '选', pinyin: 'xuǎn', meaning: '选择', words: ['选择', '挑选'], example: '选择你喜欢的。', minecraftSentence: '选择合适的工具开始工作。', story: '选字上面是"先"，外面是"辶"表示走。先走一步去挑出最好的东西，就是选择。' },
            { char: '用', pinyin: 'yòng', meaning: '使用', words: ['使用', '有用'], example: '用铅笔写字。', minecraftSentence: '用镐挖掘矿石。', story: '用字像一个桶的形状。拿工具来做事情，或者东西有价值，就是有用。' },
            { char: '做', pinyin: 'zuò', meaning: '做', words: ['做事', '做饭'], example: '做完作业。', minecraftSentence: '在工作台上做工具。', story: '做字左边是"亻"表示人，右边是"故"。人去处理事情，制造东西，做饭、做作业。' },
            { char: '变', pinyin: 'biàn', meaning: '变化', words: ['变化', '改变'], example: '天气变了。', minecraftSentence: '小鸡长大会变成鸡。', story: '变字上面是"亦"，下面是"攵"表示手。用手改变东西的样子，变魔术、变形。' }
        ]
    },
    {
        id: 'L4-3',
        level: 4,
        title: '第三课：感知动词',
        characters: [
            { char: '想', pinyin: 'xiǎng', meaning: '思考', words: ['想念', '想象'], example: '我想吃苹果。', minecraftSentence: '想想怎么建造更好。', story: '想字上面是"相"表示看，下面是"心"。心里在看在琢磨，思考问题或者怀念亲人。' },
            { char: '知', pinyin: 'zhī', meaning: '知道', words: ['知道', '知识'], example: '我知道答案。', minecraftSentence: '我知道钻石在哪里。', story: '知字左边是"矢"表示箭，右边是"口"。说出的话像箭一样准确，表示心里明白清楚。' },
            { char: '觉', pinyin: 'jué', meaning: '感觉', words: ['感觉', '觉得'], example: '我觉得很开心。', minecraftSentence: '我觉得这里有宝藏。', story: '觉字上面是"学"的头，下面是"见"。通过看和学，心里感到了什么，比如觉得冷、觉得开心。' },
            { char: '怕', pinyin: 'pà', meaning: '害怕', words: ['害怕', '可怕'], example: '不要害怕。', minecraftSentence: '不要怕苦力怕的爆炸。', story: '怕字左边是"忄"表示心情，右边是"白"。遇到危险时吓得脸色发白，心里很恐惧。' },
            { char: '喜', pinyin: 'xǐ', meaning: '喜欢', words: ['喜欢', '欢喜'], example: '我喜欢画画。', minecraftSentence: '我喜欢探险寻宝。', story: '喜字像一个鼓加上嘴巴在笑。听到鼓声，大家开心地笑，表示高兴快乐。' },
            { char: '恨', pinyin: 'hèn', meaning: '讨厌', words: ['讨厌', '恨恶'], example: '不要恨别人。', minecraftSentence: '我恨苦力怕总是偷袭。', story: '恨字左边是"忄"表示心情，右边是"艮"表示硬。心里像有硬块一样不舒服，非常讨厌不喜欢。' },
            { char: '爱', pinyin: 'ài', meaning: '喜爱', words: ['爱心', '可爱'], example: '我爱爸爸妈妈。', minecraftSentence: '我爱建造漂亮的房子。', story: '爱字中间有一个"心"。用真心去对待别人，喜欢到极点，愿意保护和关心。' },
            { char: '懂', pinyin: 'dǒng', meaning: '明白', words: ['懂得', '听懂'], example: '我听懂了。', minecraftSentence: '终于懂得红石电路了。', story: '懂字左边是"忄"表示心情，右边是"董"表示草深。原本像草一样乱，现在心里理清楚了，明白了。' },
            { char: '猜', pinyin: 'cāi', meaning: '猜测', words: ['猜想', '猜谜'], example: '猜猜这是什么。', minecraftSentence: '猜猜箱子里有什么。', story: '猜字左边是"犭"表示动物，右边是"青"。像猎狗一样根据一点气味或痕迹去推测，想出答案。' },
            { char: '信', pinyin: 'xìn', meaning: '相信', words: ['相信', '信任'], example: '我相信你。', minecraftSentence: '相信自己可以打败Boss。', story: '信字左边是"亻"表示人，右边是"言"表示说话。人说话算数，诚实可靠，让人可以依靠。' },
            { char: '疑', pinyin: 'yí', meaning: '怀疑', words: ['怀疑', '疑问'], example: '不要怀疑自己。', minecraftSentence: '这个矿洞看起来很可疑。', story: '疑字像一个人拿着棍子到处张望，不知道往哪里走。心里不确定，不相信，有问题。' },
            { char: '盼', pinyin: 'pàn', meaning: '盼望', words: ['盼望', '期盼'], example: '盼望放假。', minecraftSentence: '盼望找到钻石矿。', story: '盼字左边是"目"表示眼睛，右边是"分"。眼睛睁得大大的看着远方，希望能看到想见的人或事。' },
            { char: '望', pinyin: 'wàng', meaning: '希望', words: ['希望', '期望'], example: '希望你成功。', minecraftSentence: '希望能打败末影龙。', story: '望字上面是"亡"，下面是"月"和"王"。人站在高处看月亮，心里期待着美好的事情发生。' },
            { char: '认', pinyin: 'rèn', meaning: '认识', words: ['认识', '认为'], example: '我认识他。', minecraftSentence: '认得这是什么怪物吗？', story: '认字左边是"讠"表示语言，右边是"人"。通过说话交流，记住了这个人是谁，辨别出来。' },
            { char: '识', pinyin: 'shí', meaning: '识别', words: ['认识', '知识'], example: '识字很重要。', minecraftSentence: '识别不同的矿石。', story: '识字左边是"讠"，右边是"只"。把听到的看到的东西记住并能分辨出来，就是知识。' },
            { char: '明', pinyin: 'míng', meaning: '明白', words: ['明白', '明亮'], example: '我明白了。', minecraftSentence: '终于明白怎么做了。', story: '明字由"日"和"月"组成。太阳和月亮都很亮，照亮了黑暗，让事情变得清楚不糊涂。' }
        ]
    },
    {
        id: 'L4-4',
        level: 4,
        title: '第四课：基础形容词',
        characters: [
            { char: '新', pinyin: 'xīn', meaning: '新的', words: ['新鲜', '新年'], example: '这是新书。', minecraftSentence: '建造一座新房子。', story: '新字左边是"亲"表示亲近，右边是"斤"表示斧头。用斧头砍树做成刚出炉的器具，表示没用过的。' },
            { char: '旧', pinyin: 'jiù', meaning: '旧的', words: ['旧书', '陈旧'], example: '这本书很旧了。', minecraftSentence: '旧工具可以修理。', story: '旧字左边是"l"像棍子，右边是"日"。经过了很多日子的东西，变得不新了，就是旧。' },
            { char: '好', pinyin: 'hǎo', meaning: '好的', words: ['好看', '你好'], example: '这个很好。', minecraftSentence: '这把剑真好用！', story: '好字左边是"女"，右边是"子"。家里有女儿又有儿子，是非常美满的事情，表示让人满意的。' },
            { char: '坏', pinyin: 'huài', meaning: '坏的', words: ['坏人', '损坏'], example: '玩具坏了。', minecraftSentence: '工具用坏了要修理。', story: '坏字左边是"土"，右边是"不"。土墙倒了，不能用了，表示东西受损或者品质恶劣。' },
            { char: '美', pinyin: 'měi', meaning: '美丽', words: ['美丽', '完美'], example: '花很美丽。', minecraftSentence: '建造一座美丽的城堡。', story: '美字上面是"羊"，下面是"大"。古代认为肥大的羊很美很好吃，现在表示好看漂亮的。' },
            { char: '丑', pinyin: 'chǒu', meaning: '丑陋', words: ['丑陋', '丑八怪'], example: '小鸭子变成了天鹅。', minecraftSentence: '僵尸长得很丑。', story: '丑字像一只手在抓鬼的样子。样子难看，不漂亮，让人看了不喜欢。' },
            { char: '香', pinyin: 'xiāng', meaning: '香味', words: ['香味', '花香'], example: '花很香。', minecraftSentence: '烤肉的香味很诱人。', story: '香字上面是"禾"表示庄稼，下面是"日"。太阳晒在庄稼上发出的好闻气味，比如米饭香。' },
            { char: '臭', pinyin: 'chòu', meaning: '臭味', words: ['臭味', '臭气'], example: '垃圾很臭。', minecraftSentence: '僵尸身上有臭味。', story: '臭字上面是"自"（鼻子），下面是"犬"（狗）。狗鼻子很灵，能闻到各种气味，现在专指难闻的味道。' },
            { char: '甜', pinyin: 'tián', meaning: '甜的', words: ['甜蜜', '糖果'], example: '糖很甜。', minecraftSentence: '蜂蜜是甜的。', story: '甜字左边是"舌"表示舌头，右边是"甘"表示美味。舌头尝到了糖或蜂蜜的味道，美滋滋的。' },
            { char: '苦', pinyin: 'kǔ', meaning: '苦的', words: ['苦涩', '辛苦'], example: '药很苦。', minecraftSentence: '苦力怕名字里有苦字。', story: '苦字上面是"艹"，下面是"古"。像吃了一种很久的草药，嘴里感觉很难受的味道。' },
            { char: '辣', pinyin: 'là', meaning: '辣的', words: ['辣椒', '火辣'], example: '辣椒很辣。', minecraftSentence: '岩浆像辣椒一样火辣。', story: '辣字左边是"辛"表示辛苦，右边是"束"。吃了辣椒嘴巴像火烧一样，刺激的感觉。' },
            { char: '酸', pinyin: 'suān', meaning: '酸的', words: ['酸味', '心酸'], example: '柠檬很酸。', minecraftSentence: '史莱姆看起来酸酸的。', story: '酸字左边是"酉"表示酒，右边是"夋"。酒放久了变质的味道，或者吃柠檬时酸得眯眼睛。' },
            { char: '硬', pinyin: 'yìng', meaning: '坚硬', words: ['坚硬', '硬币'], example: '石头很硬。', minecraftSentence: '黑曜石是最硬的方块。', story: '硬字左边是"石"表示石头，右边是"更"。像石头一样坚固，不容易改变形状，敲起来邦邦响。' },
            { char: '软', pinyin: 'ruǎn', meaning: '柔软', words: ['柔软', '软糖'], example: '棉花很软。', minecraftSentence: '羊毛是软的。', story: '软字左边是" 车"，右边是"欠"。软绵绵的，像棉花、羊毛一样容易变形，摸起来舒服。' },
            { char: '干', pinyin: 'gān', meaning: '干燥', words: ['干净', '干燥'], example: '衣服干了。', minecraftSentence: '沙漠很干燥。', story: '干字像一个叉子。没有水分，或者水分晒没了，比如晒干的衣服。' },
            { char: '湿', pinyin: 'shī', meaning: '潮湿', words: ['潮湿', '湿润'], example: '下雨天很湿。', minecraftSentence: '沼泽地很湿润。', story: '湿字左边是"氵"表示水，右边是"显"。东西上有水，或者被水浸泡过，摸起来湿漉漉的。' }
        ]
    },
    {
        id: 'L4-5',
        level: 4,
        title: '第五课：程度形容词',
        characters: [
            { char: '多', pinyin: 'duō', meaning: '多的', words: ['很多', '大多'], example: '很多人在公园。', minecraftSentence: '收集了很多钻石。', story: '多字是两个"夕"叠在一起。晚上星星很多，表示数量大，比"少"要多。' },
            { char: '少', pinyin: 'shǎo', meaning: '少的', words: ['很少', '少量'], example: '今天人很少。', minecraftSentence: '煤炭用得很少。', story: '少字下面是"丿"切掉了一部分。东西不多，数量小，不够分。' },
            { char: '满', pinyin: 'mǎn', meaning: '满的', words: ['满意', '充满'], example: '杯子满了。', minecraftSentence: '背包满了装不下了。', story: '满字左边是"氵"表示水，右边是"???"。水装得太多溢出来了，表示容器装不下东西了。' },
            { char: '空', pinyin: 'kōng', meaning: '空的', words: ['空气', '空间'], example: '瓶子是空的。', minecraftSentence: '这个矿洞已经挖空了。', story: '空字上面是"穴"表示洞，下面是"工"。洞里什么都没有，只有空气，表示没有东西。' },
            { char: '轻', pinyin: 'qīng', meaning: '轻的', words: ['轻松', '轻重'], example: '羽毛很轻。', minecraftSentence: '羽毛落地很轻。', story: '轻字左边是"车"，右边是"经"。分量很小，不费力气就能拿起来，像羽毛一样。' },
            { char: '重', pinyin: 'zhòng', meaning: '重的', words: ['沉重', '重要'], example: '这个箱子很重。', minecraftSentence: '金块比铁块重。', story: '重字像一个人背着很沉的包裹。分量很大，很难拿起来，像大石头一样。' },
            { char: '深', pinyin: 'shēn', meaning: '深的', words: ['深度', '深入'], example: '这条河很深。', minecraftSentence: '往下挖得很深。', story: '深字左边是"氵"表示水，右边是"深"。水面到底部的距离很远，看不到底。' },
            { char: '浅', pinyin: 'qiǎn', meaning: '浅的', words: ['浅色', '浅水'], example: '这里水很浅。', minecraftSentence: '浅水区有很多鱼。', story: '浅字左边是"氵"表示水，右边是"戋"表示少。水面到底部距离很近，一眼能看到底。' },
            { char: '宽', pinyin: 'kuān', meaning: '宽的', words: ['宽阔', '宽度'], example: '这条路很宽。', minecraftSentence: '建造一条宽阔的道路。', story: '宽字上面是"宀"表示房子，下面是"苋"。房子很大很广阔，横向距离大，不拥挤。' },
            { char: '窄', pinyin: 'zhǎi', meaning: '窄的', words: ['狭窄', '窄小'], example: '这条巷子很窄。', minecraftSentence: '矿洞的通道很窄。', story: '窄字上面是"穴"表示洞，下面是"乍"。洞口很小，横向距离小，挤不过去。' },
            { char: '亮', pinyin: 'liàng', meaning: '明亮', words: ['明亮', '亮光'], example: '房间很亮。', minecraftSentence: '火把让房间变亮。', story: '亮字上面是"高"的变形，下面是"儿"。像站在高处的人举着灯火，照得周围很清楚。' },
            { char: '暗', pinyin: 'àn', meaning: '黑暗', words: ['黑暗', '暗处'], example: '洞里很暗。', minecraftSentence: '暗处会刷新怪物。', story: '暗字左边是"日"表示太阳，右边是"音"。太阳下山了，或者被挡住了，周围黑乎乎的。' },
            { char: '静', pinyin: 'jìng', meaning: '安静', words: ['安静', '平静'], example: '图书馆很安静。', minecraftSentence: '夜晚的村庄很安静。', story: '静字左边是"青"，右边是"争"。没有声音，不吵闹，心里平静。' },
            { char: '吵', pinyin: 'chǎo', meaning: '吵闹', words: ['吵闹', '吵架'], example: '不要吵闹。', minecraftSentence: '僵尸的叫声很吵。', story: '吵字左边是"口"，右边是"少"。嘴巴多但是话少？不对，是声音杂乱刺耳，让人听了心烦。' },
            { char: '脏', pinyin: 'zāng', meaning: '脏的', words: ['脏乱', '肮脏'], example: '手很脏。', minecraftSentence: '泥土把衣服弄脏了。', story: '脏字左边是"月"（肉），右边是"庄"。身上沾了泥土灰尘，不干净。' },
            { char: '净', pinyin: 'jìng', meaning: '干净', words: ['干净', '洁净'], example: '房间很干净。', minecraftSentence: '把房间打扫干净。', story: '净字左边是"冫"（冰），右边是"争"。像冰一样透明纯洁，没有灰尘杂质。' }
        ]
    },

    // ============ 第五级 中级 (每课15字) ============
    {
        id: 'L5-1',
        level: 5,
        title: '第一课：时间词汇',
        characters: [
            { char: '早', pinyin: 'zǎo', meaning: '早晨', words: ['早上', '早晨'], example: '早上好！', minecraftSentence: '早上太阳升起怪物消失。', story: '早字上面是"日"表示太阳，下面是"十"。太阳升起照在草木上，新的一天开始了。' },
            { char: '晚', pinyin: 'wǎn', meaning: '晚上', words: ['晚上', '夜晚'], example: '晚上好！', minecraftSentence: '晚上要回家睡觉。', story: '晚字左边是"日"表示太阳，右边是"免"。太阳免得出来了，躲起来了，就是晚上。' },
            { char: '午', pinyin: 'wǔ', meaning: '中午', words: ['中午', '午饭'], example: '中午吃饭。', minecraftSentence: '中午太阳在头顶。', story: '午字像捣米的杵。中午是太阳最高的时候，也是吃饭的时候。' },
            { char: '今', pinyin: 'jīn', meaning: '今天', words: ['今天', '今年'], example: '今天很开心。', minecraftSentence: '今天挖到很多矿石。', story: '今字像个钟罩盖着一点。表示就在此时此刻，今天，现在。' },
            { char: '明', pinyin: 'míng', meaning: '明天', words: ['明天', '明白'], example: '明天见！', minecraftSentence: '明天继续冒险。', story: '明字由"日"和"月"组成。明天是日落月升，然后再日出，新的一天。' },
            { char: '昨', pinyin: 'zuó', meaning: '昨天', words: ['昨天', '昨日'], example: '昨天下雨了。', minecraftSentence: '昨天建了一座塔。', story: '昨字左边是"日"表示日子，右边是"乍"。昨天是刚刚过去的日子。' },
            { char: '年', pinyin: 'nián', meaning: '年', words: ['今年', '新年'], example: '新年快乐！', minecraftSentence: '一年有四个季节。', story: '年字像一个人背着收割的庄稼。古人一年收割一次庄稼，庆祝丰收过年。' },
            { char: '月', pinyin: 'yuè', meaning: '月份', words: ['月份', '月亮'], example: '这个月很忙。', minecraftSentence: '月光照亮夜晚的世界。', story: '月字像弯弯的月亮。月亮圆缺变化一次是一个月。' },
            { char: '周', pinyin: 'zhōu', meaning: '星期', words: ['周末', '一周'], example: '这周有考试。', minecraftSentence: '用一周时间建造城堡。', story: '周字里面是"土"和"口"，外面包围着。周是一圈的意思，一周有七天，是一个循环。' },
            { char: '刻', pinyin: 'kè', meaning: '时刻', words: ['时刻', '立刻'], example: '时刻准备着。', minecraftSentence: '立刻躲避苦力怕！', story: '刻字左边是"亥"，右边是"刂"表示刀。古人在竹子上用刀刻痕迹来记录时间。' },
            { char: '秒', pinyin: 'miǎo', meaning: '秒', words: ['秒钟', '分秒'], example: '只需要几秒。', minecraftSentence: '苦力怕爆炸只需几秒。', story: '秒字左边是"禾"表示庄稼，右边是"少"。秒是时间的最小单位，像禾苗的细毛一样微小。' },
            { char: '分', pinyin: 'fēn', meaning: '分钟', words: ['分钟', '分开'], example: '等我五分钟。', minecraftSentence: '熔炼需要几分钟。', story: '分字上面是"八"，下面是"刀"。用刀把东西切开，把一小时分成60分钟。' },
            { char: '时', pinyin: 'shí', meaning: '小时', words: ['小时', '时间'], example: '一小时后见。', minecraftSentence: '一天在游戏里是20分钟。', story: '时字左边是"日"表示太阳，右边是"寸"。古代看太阳影子的长短来知道时间。' },
            { char: '始', pinyin: 'shǐ', meaning: '开始', words: ['开始', '始终'], example: '游戏开始了。', minecraftSentence: '开始新的冒险！', story: '始字左边是"女"，右边是"台"。始是起初、开头的意思，一切的起点。' },
            { char: '终', pinyin: 'zhōng', meaning: '结束', words: ['终于', '最终'], example: '终于完成了。', minecraftSentence: '终于打败了末影龙。', story: '终字左边是"纟"表示丝线，右边是"冬"。像一卷丝线用完了，或者冬天是一年的结束。' }
        ]
    },
    {
        id: 'L5-2',
        level: 5,
        title: '第二课：空间方位',
        characters: [
            { char: '东', pinyin: 'dōng', meaning: '东方', words: ['东方', '东边'], example: '太阳从东方升起。', minecraftSentence: '朝东边走可以找到村庄。', story: '东字像太阳升起穿过树木的样子。太阳每天从东边出来。' },
            { char: '西', pinyin: 'xī', meaning: '西方', words: ['西方', '西边'], example: '太阳从西边落下。', minecraftSentence: '西边有一片沙漠。', story: '西字像鸟儿归巢的形状。太阳下山，鸟儿回窝，太阳落下的方向是西。' },
            { char: '南', pinyin: 'nán', meaning: '南方', words: ['南方', '南边'], example: '南方比较暖和。', minecraftSentence: '用指南针找到南方。', story: '南字像植物生长茂盛的样子。南方温暖，花草树木长得特别好。' },
            { char: '北', pinyin: 'běi', meaning: '北方', words: ['北方', '北边'], example: '北方很冷。', minecraftSentence: '北方有雪地生物群落。', story: '北字像两个人背靠背坐着。北也表示背部，冷风通常从被方吹来。' },
            { char: '中', pinyin: 'zhōng', meaning: '中间', words: ['中间', '中心'], example: '站在中间。', minecraftSentence: '村庄在地图中心。', story: '中字像一个方框被一根竖线穿过中心。表示正中间，不偏不倚。' },
            { char: '边', pinyin: 'biān', meaning: '边缘', words: ['旁边', '边上'], example: '站在路边。', minecraftSentence: '不要站在悬崖边。', story: '边字里面是"力"，外面是"辶"表示走。边是物体的边缘，比如路边、河边。' },
            { char: '角', pinyin: 'jiǎo', meaning: '角落', words: ['角落', '墙角'], example: '放在角落里。', minecraftSentence: '怪物躲在角落里。', story: '角字像动物头上的角。角是尖尖的地方，或者是两面墙碰在一起的角落。' },
            { char: '旁', pinyin: 'páng', meaning: '旁边', words: ['旁边', '身旁'], example: '坐在旁边。', minecraftSentence: '岩浆就在旁边，小心！', story: '旁字上面是"立"，下面是"方"。旁边是靠近的地方，就在身边。' },
            { char: '内', pinyin: 'nèi', meaning: '里面', words: ['内部', '室内'], example: '在屋内等着。', minecraftSentence: '箱子内有很多宝贝。', story: '内字像一个人走进门口里面。内就是里面，和外相反。' },
            { char: '顶', pinyin: 'dǐng', meaning: '顶部', words: ['顶端', '山顶'], example: '爬到山顶。', minecraftSentence: '在山顶建造瞭望塔。', story: '顶字左边是"丁"，右边是"页"表示头。顶是头的最高处，或者物体的最高点。' },
            { char: '底', pinyin: 'dǐ', meaning: '底部', words: ['底部', '海底'], example: '沉到水底。', minecraftSentence: '海底有沉船宝藏。', story: '底字上面是"广"表示房子，下面是"氐"。底是房子或物体的最下面部分。' },
            { char: '侧', pinyin: 'cè', meaning: '侧面', words: ['侧面', '两侧'], example: '从侧面看。', minecraftSentence: '从侧面攻击更安全。', story: '侧字左边是"亻"表示人，右边是"则"。侧是旁边的一面，不是正面。' },
            { char: '对', pinyin: 'duì', meaning: '对面', words: ['对面', '正对'], example: '对面有一家商店。', minecraftSentence: '对面的山上有羊驼。', story: '对字左边是"又"，右边是"寸"。对面是正对着你的方向。' },
            { char: '处', pinyin: 'chù', meaning: '地方', words: ['处处', '到处'], example: '到处都是花。', minecraftSentence: '这处地方很适合建家。', story: '处字像人坐在凳子上。处是地方所在，比如住处、到处。' },
            { char: '向', pinyin: 'xiàng', meaning: '方向', words: ['方向', '向前'], example: '向前走。', minecraftSentence: '向着日出的方向前进。', story: '向字像房子的窗户朝着一个方向开。向是朝着某个目标或方位。' }
        ]
    },
    {
        id: 'L5-3',
        level: 5,
        title: '第三课：数量词汇',
        characters: [
            { char: '个', pinyin: 'gè', meaning: '个（量词）', words: ['一个', '几个'], example: '一个苹果。', minecraftSentence: '挖到一个钻石。', story: '个字上面是"人"，下面是"丨"。本来表示竹子的一节，现在用来数人或物品，比如一个人。' },
            { char: '只', pinyin: 'zhī', meaning: '只（量词）', words: ['一只', '只有'], example: '一只小鸟。', minecraftSentence: '看到一只狼。', story: '只字上面是"口"，下面是"八"。用来数小动物，比如一只鸡、一只猫。' },
            { char: '条', pinyin: 'tiáo', meaning: '条（量词）', words: ['一条', '条件'], example: '一条鱼。', minecraftSentence: '钓到一条鱼。', story: '条字上面是"夂"，下面是"木"。像树枝细长的样子，用来数长长的东西，如一条鱼、一条路。' },
            { char: '块', pinyin: 'kuài', meaning: '块（量词）', words: ['一块', '块状'], example: '一块石头。', minecraftSentence: '放置一块方块。', story: '块字左边是"土"，右边是"鬼"。像结成一团的泥土，用来数成块的东西，如一块肉、一块地。' },
            { char: '把', pinyin: 'bǎ', meaning: '把（量词）', words: ['一把', '把手'], example: '一把剑。', minecraftSentence: '拿起一把钻石剑。', story: '把字左边是"扌"表示手，右边是"巴"。用手握住东西，用来数有把手的东西，如一把刀。' },
            { char: '双', pinyin: 'shuāng', meaning: '双（量词）', words: ['一双', '成双'], example: '一双手套。', minecraftSentence: '做一双皮靴。', story: '双字是两个"又"在一起。表示成对的，两只在一起，比如一双手、一双鞋。' },
            { char: '对', pinyin: 'duì', meaning: '对（量词）', words: ['一对', '成对'], example: '一对翅膀。', minecraftSentence: '找到一对鞘翅。', story: '对字左边是"又"，右边是"寸"。表示配对的两个东西，或者意见相合。' },
            { char: '群', pinyin: 'qún', meaning: '群（量词）', words: ['一群', '群体'], example: '一群羊。', minecraftSentence: '看到一群僵尸。', story: '群字左边是"君"，右边是"羊"。许多羊聚在一起，表示很多聚集在一起的人或动物。' },
            { char: '堆', pinyin: 'duī', meaning: '堆（量词）', words: ['一堆', '堆积'], example: '一堆沙子。', minecraftSentence: '收集一堆矿石。', story: '堆字左边是"土"，右边是"隹"（小鸟）。像土聚集成小山一样，很多东西叠在一起。' },
            { char: '排', pinyin: 'pái', meaning: '排（量词）', words: ['一排', '排列'], example: '一排树。', minecraftSentence: '种一排小麦。', story: '排字左边是"扌"表示手，右边是"非"。用手把东西摆成一行，整整齐齐的。' },
            { char: '层', pinyin: 'céng', meaning: '层（量词）', words: ['一层', '层次'], example: '三层楼。', minecraftSentence: '建造三层高的房子。', story: '层字上面是"尸"，下面是"云"。像云一样重叠在一起，用来数重叠的东西，如一层楼。' },
            { char: '片', pinyin: 'piàn', meaning: '片（量词）', words: ['一片', '片段'], example: '一片树叶。', minecraftSentence: '开垦一片农田。', story: '片字像劈开的木头的一半。用来数扁平片状的东西，如一片面包、一片叶子。' },
            { char: '颗', pinyin: 'kē', meaning: '颗（量词）', words: ['一颗', '颗粒'], example: '一颗星星。', minecraftSentence: '得到一颗末影珍珠。', story: '颗字左边是"果"，右边是"页"。用来数圆圆小小的东西，如一颗珠子、一颗豆子。' },
            { char: '根', pinyin: 'gēn', meaning: '根（量词）', words: ['一根', '根本'], example: '一根棍子。', minecraftSentence: '两根木棍做成木剑。', story: '根字左边是"木"，右边是"艮"。树木在底下的部分，用来数细长的东西，如一根绳子。' },
            { char: '些', pinyin: 'xiē', meaning: '一些', words: ['一些', '这些'], example: '一些水果。', minecraftSentence: '收集一些木头。', story: '些字上面是"此"，下面是"二"。表示不确定的一小部分，比如一些人、一些事。' }
        ]
    },
    {
        id: 'L5-4',
        level: 5,
        title: '第四课：频率与顺序',
        characters: [
            { char: '常', pinyin: 'cháng', meaning: '经常', words: ['经常', '常常'], example: '我经常看书。', minecraftSentence: '我常常去挖矿。', story: '常字上面是"尚"，下面是"巾"。原本指恒久的裙子？现在表示经常发生，不变的。' },
            { char: '总', pinyin: 'zǒng', meaning: '总是', words: ['总是', '总共'], example: '他总是迟到。', minecraftSentence: '苦力怕总是偷袭。', story: '总字上面是"???"像倒着的胡须，下面是"心"。所有事情都聚在心头，表示全部、一直。' },
            { char: '偶', pinyin: 'ǒu', meaning: '偶尔', words: ['偶尔', '偶然'], example: '我偶尔看电视。', minecraftSentence: '偶尔能找到钻石。', story: '偶字左边是"亻"，右边是"禺"。有时候两个人在一起，或者碰巧发生的事情。' },
            { char: '曾', pinyin: 'céng', meaning: '曾经', words: ['曾经', '曾经'], example: '我曾经去过北京。', minecraftSentence: '我曾经建过一座城堡。', story: '曾字上面像"八"，中间是"田"，下面是"日"。经过了田间的日子，表示过去发生过。' },
            { char: '再', pinyin: 'zài', meaning: '再次', words: ['再见', '再次'], example: '再见！', minecraftSentence: '再试一次！', story: '再字像一个横放的架子。表示第二次，或者重复做某事，比如再见。' },
            { char: '又', pinyin: 'yòu', meaning: '又', words: ['又', '又是'], example: '又下雨了。', minecraftSentence: '又找到一块钻石！', story: '又字像一只手伸出来。表示重复，又来了一次。' },
            { char: '先', pinyin: 'xiān', meaning: '首先', words: ['首先', '先生'], example: '先吃饭再看电视。', minecraftSentence: '先挖木头再做工具。', story: '先字上面是"牛"？下面是"儿"。先人一步走在前面，表示时间在前面。' },
            { char: '后', pinyin: 'hòu', meaning: '之后', words: ['然后', '以后'], example: '然后写作业。', minecraftSentence: '打败怪物后收集经验。', story: '后字左边是"彳"（走），右边是"幺"（小）。走得慢落在后面，表示时间在后面。' },
            { char: '初', pinyin: 'chū', meaning: '最初', words: ['最初', '初级'], example: '最初的想法。', minecraftSentence: '游戏初期要先建庇护所。', story: '初字左边是"衤"（衣服），右边是"刀"。用刀子开始裁剪衣服，表示开始的时候。' },
            { char: '末', pinyin: 'mò', meaning: '末尾', words: ['末尾', '周末'], example: '在末尾签名。', minecraftSentence: '末地是游戏的最后阶段。', story: '末字是"木"字上面加一长横。表示树梢，树的顶端或最后部分，比如周末。' },
            { char: '第', pinyin: 'dì', meaning: '第（序数）', words: ['第一', '第二'], example: '我是第一名。', minecraftSentence: '这是我的第一颗钻石。', story: '第字上面是"竹"，下面是"弟"。古代用竹简按顺序排列，表示次序，如第一。' },
            { char: '次', pinyin: 'cì', meaning: '次（量词）', words: ['一次', '次数'], example: '再来一次。', minecraftSentence: '这是第三次尝试了。', story: '次字左边是"冫"（冰），右边是"欠"。原意不完美，排在第二，引申为回数，如有一次。' },
            { char: '每', pinyin: 'měi', meaning: '每个', words: ['每天', '每个'], example: '每天早起。', minecraftSentence: '每天都要挖矿。', story: '每字上面是"人"，下面是"母"。草木茂盛生长，每一棵都长得好。现在指每一个。' },
            { char: '各', pinyin: 'gè', meaning: '各种', words: ['各种', '各自'], example: '各种颜色。', minecraftSentence: '收集各种矿石。', story: '各字上面是"夂"（脚），下面是"口"。每个人走不同的路，说不同的话，表示各个不同。' },
            { char: '另', pinyin: 'lìng', meaning: '另外', words: ['另外', '另一个'], example: '另外一个。', minecraftSentence: '去另一个地方探险。', story: '另字上面是"口"，下面是"力"。这不是我要说的，我要用力把它分开，表示别的。' }
        ]
    },

    {
        id: 'L5-3',
        level: 5,
        title: '第三课：数量词汇',
        characters: [
            { char: '个', pinyin: 'gè', meaning: '个（量词）', words: ['一个', '几个'], example: '一个苹果。', minecraftSentence: '挖到一个钻石。', story: '个字上面是"人"，下面是"丨"。一个人站着，一个。' },
            { char: '只', pinyin: 'zhī', meaning: '只（量词）', words: ['一只', '只有'], example: '一只小鸟。', minecraftSentence: '看到一只狼。', story: '只字上面是"口"，下面是"八"。只有一张嘴巴？或者一只鸟。' },
            { char: '条', pinyin: 'tiáo', meaning: '条（量词）', words: ['一条', '条件'], example: '一条鱼。', minecraftSentence: '钓到一条鱼。', story: '条字上面是"夂"，下面是"木"。修剪树木的枝条。' },
            { char: '块', pinyin: 'kuài', meaning: '块（量词）', words: ['一块', '块状'], example: '一块石头。', minecraftSentence: '放置一块方块。', story: '块字左边是"土"，右边是"夬"（缺口）。一小块土，土块。' },
            { char: '把', pinyin: 'bǎ', meaning: '把（量词）', words: ['一把', '把手'], example: '一把剑。', minecraftSentence: '拿起一把钻石剑。', story: '把字左边是"扌"，右边是"巴"。手巴在上面，握住，一把。' },
            { char: '双', pinyin: 'shuāng', meaning: '双（量词）', words: ['一双', '成双'], example: '一双手套。', minecraftSentence: '做一双皮靴。', story: '双字是两个"又"（手）。两只手在一起，成双成对。' },
            { char: '对', pinyin: 'duì', meaning: '对（量词）', words: ['一对', '成对'], example: '一对翅膀。', minecraftSentence: '找到一对鞘翅。', story: '对字左边是"又"，右边是"寸"。不仅要动手，还要有分寸，做对了。或者成对。' },
            { char: '群', pinyin: 'qún', meaning: '群（量词）', words: ['一群', '群体'], example: '一群羊。', minecraftSentence: '看到一群僵尸。', story: '群字左边是"君"，右边是"羊"。君王管着很多羊？一群羊。' },
            { char: '堆', pinyin: 'duī', meaning: '堆（量词）', words: ['一堆', '堆积'], example: '一堆沙子。', minecraftSentence: '收集一堆矿石。', story: '堆字左边是"土"，右边是"隹"（鸟）。像土聚集成小山，或鸟聚在一起。' },
            { char: '排', pinyin: 'pái', meaning: '排（量词）', words: ['一排', '排列'], example: '一排树。', minecraftSentence: '种一排小麦。', story: '排字左边是"扌"，右边是"非"。用手把东西摆好，排成行。' },
            { char: '层', pinyin: 'céng', meaning: '层（量词）', words: ['一层', '层次'], example: '三层楼。', minecraftSentence: '建造三层高的房子。', story: '层字上面是"尸"（屋顶），下面是"云"。像云一样重叠，一层层。' },
            { char: '片', pinyin: 'piàn', meaning: '片（量词）', words: ['一片', '片段'], example: '一片树叶。', minecraftSentence: '开垦一片农田。', story: '片字像劈开的木头。用来数扁平片状的东西，如一片面包、一片叶子。' },
            { char: '颗', pinyin: 'kē', meaning: '颗（量词）', words: ['一颗', '颗粒'], example: '一颗星星。', minecraftSentence: '得到一颗末影珍珠。', story: '颗字左边是"果"，右边是"页"（头）。像果实一样圆圆的头，一颗。' },
            { char: '根', pinyin: 'gēn', meaning: '根（量词）', words: ['一根', '根本'], example: '一根棍子。', minecraftSentence: '两根木棍做成木剑。', story: '根字左边是"木"，右边是"艮"。树木在底下的部分，用来数细长的东西，如一根绳子。' },
            { char: '些', pinyin: 'xiē', meaning: '一些', words: ['一些', '这些'], example: '一些水果。', minecraftSentence: '收集一些木头。', story: '些字上面是"此"，下面是"二"。表示不确定的一小部分，比如一些人、一些事。' }
        ]
    },
    {
        id: 'L5-4',
        level: 5,
        title: '第四课：频率与顺序',
        characters: [
            { char: '常', pinyin: 'cháng', meaning: '经常', words: ['经常', '常常'], example: '我经常看书。', minecraftSentence: '我常常去挖矿。', story: '常字上面是"尚"，下面是"巾"。原本指恒久的裙子？现在表示经常发生，不变的。' },
            { char: '总', pinyin: 'zǒng', meaning: '总是', words: ['总是', '总共'], example: '他总是迟到。', minecraftSentence: '苦力怕总是偷袭。', story: '总字上面是倒八字，中间是"口"，下面是"心"。所有事情都聚在心头，表示全部、一直。' },
            { char: '偶', pinyin: 'ǒu', meaning: '偶尔', words: ['偶尔', '偶然'], example: '我偶尔看电视。', minecraftSentence: '偶尔能找到钻石。', story: '偶字左边是"亻"，右边是"禺"。有时候两个人在一起，或者碰巧发生的事情。' },
            { char: '曾', pinyin: 'céng', meaning: '曾经', words: ['曾经', '曾经'], example: '我曾经去过北京。', minecraftSentence: '我曾经建过一座城堡。', story: '曾字上面像"八"，中间是"田"，下面是"日"。经过了田间的日子，表示过去发生过。' },
            { char: '再', pinyin: 'zài', meaning: '再次', words: ['再见', '再次'], example: '再见！', minecraftSentence: '再试一次！', story: '再字像一个横放的架子。表示第二次，或者重复做某事，比如再见。' },
            { char: '又', pinyin: 'yòu', meaning: '又', words: ['又', '又是'], example: '又下雨了。', minecraftSentence: '又找到一块钻石！', story: '又字像一只手伸出来。表示重复，又来了一次。' },
            { char: '先', pinyin: 'xiān', meaning: '首先', words: ['首先', '先生'], example: '先吃饭再看电视。', minecraftSentence: '先挖木头再做工具。', story: '先字上面是"牛"的变形，下面是"儿"。走在孩子前面的牛？首先。' },
            { char: '后', pinyin: 'hòu', meaning: '之后', words: ['然后', '以后'], example: '然后写作业。', minecraftSentence: '打败怪物后收集经验。', story: '后字左边是"彳"（走），右边是"幺"（小）。走得慢落在后面，表示时间在后面。' },
            { char: '初', pinyin: 'chū', meaning: '最初', words: ['最初', '初级'], example: '最初的想法。', minecraftSentence: '游戏初期要先建庇护所。', story: '初字左边是"衤"（衣服），右边是"刀"。用刀子开始裁剪衣服，表示开始的时候。' },
            { char: '末', pinyin: 'mò', meaning: '末尾', words: ['末尾', '周末'], example: '在末尾签名。', minecraftSentence: '末地是游戏的最后阶段。', story: '末字是"木"字上面加一长横。表示树梢，树的顶端或最后部分，比如周末。' },
            { char: '第', pinyin: 'dì', meaning: '第（序数）', words: ['第一', '第二'], example: '我是第一名。', minecraftSentence: '这是我的第一颗钻石。', story: '第字上面是"竹"，下面是"弟"。古代用竹简按顺序排列，表示次序，如第一。' },
            { char: '次', pinyin: 'cì', meaning: '次（量词）', words: ['一次', '次数'], example: '再来一次。', minecraftSentence: '这是第三次尝试了。', story: '次字左边是"冫"（冰），右边是"欠"。原意不完美，排在第二，引申为回数，如有一次。' },
            { char: '每', pinyin: 'měi', meaning: '每个', words: ['每天', '每个'], example: '每天早起。', minecraftSentence: '每天都要挖矿。', story: '每字上面是"人"，下面是"母"。草木茂盛生长，每一棵都长得好。现在指每一个。' },
            { char: '各', pinyin: 'gè', meaning: '各种', words: ['各种', '各自'], example: '各种颜色。', minecraftSentence: '收集各种矿石。', story: '各字上面是"夂"（脚），下面是"口"。每个人走不同的路，说不同的话，表示各个不同。' },
            { char: '另', pinyin: 'lìng', meaning: '另外', words: ['另外', '另一个'], example: '另外一个。', minecraftSentence: '去另一个地方探险。', story: '另字上面是"口"，下面是"力"。这不是我要说的，我要用力把它分开，表示别的。' }
        ]
    },
    {
        id: 'L5-5',
        level: 5,
        title: '第五课：程度与比较',
        characters: [
            { char: '很', pinyin: 'hěn', meaning: '很', words: ['很好', '很多'], example: '很好吃。', minecraftSentence: '这把剑很锋利。', story: '很字左边是"彳"（走），右边是"艮"（回头看）。很不听话？现在表示程度高，比如很好。' },
            { char: '太', pinyin: 'tài', meaning: '太', words: ['太阳', '太好'], example: '太棒了！', minecraftSentence: '这里太危险了！', story: '太字是"大"字下面加一点。比大还要大，大过了头，就是太。' },
            { char: '最', pinyin: 'zuì', meaning: '最', words: ['最好', '最大'], example: '他是最高的。', minecraftSentence: '钻石是最稀有的矿石。', story: '最字上面是"日"，下面是"取"。冒着太阳去夺取，表示想要达到极点，第一名。' },
            { char: '更', pinyin: 'gèng', meaning: '更加', words: ['更好', '更多'], example: '今天更冷了。', minecraftSentence: '钻石镐挖得更快。', story: '更字中间是"日"？表示时间改变，或者程度加深，比如更好。' },
            { char: '比', pinyin: 'bǐ', meaning: '比较', words: ['比较', '对比'], example: '他比我高。', minecraftSentence: '钻石比铁更稀有。', story: '比字像两个人站在一起。两个人放在一起看谁高谁低，就是比较。' },
            { char: '较', pinyin: 'jiào', meaning: '较为', words: ['比较', '较少'], example: '比较好的方法。', minecraftSentence: '这个洞穴较为安全。', story: '较字左边是"车"，右边是"交"。两辆车头碰头比较谁更结实，表示对比。' },
            { char: '极', pinyin: 'jí', meaning: '极其', words: ['极其', '极限'], example: '极其困难。', minecraftSentence: '这个任务极其危险。', story: '极字左边是"木"，右边是"及"。房子的最高处房梁，表示到了顶端，不能再高了。' },
            { char: '相', pinyin: 'xiāng', meaning: '相互', words: ['相同', '互相'], example: '我们相互帮助。', minecraftSentence: '两个箱子相连成大箱子。', story: '相字左边是"木"，右边是"目"。眼睛盯着树木看，或者互相看，表示相互。' },
            { char: '同', pinyin: 'tóng', meaning: '相同', words: ['相同', '同学'], example: '我们同岁。', minecraftSentence: '这两块矿石是同一种。', story: '同字外框是"冂"，里面是"一口"。大家聚在一起说一样的话，表示一样。' },
            { char: '异', pinyin: 'yì', meaning: '不同', words: ['不同', '差异'], example: '大家意见不同。', minecraftSentence: '不同的生物群落。', story: '异字上面是"巳"，下面是"廾"。像一个人戴着奇怪的面具，表示特别，不一样。' },
            { char: '如', pinyin: 'rú', meaning: '如同', words: ['如果', '如同'], example: '如果下雨就不出门。', minecraftSentence: '这座建筑如同真实的城堡。', story: '如字左边是"女"，右边是"口"。女人听从命令？或者像女人说话一样温柔。表示像，如同。' },
            { char: '像', pinyin: 'xiàng', meaning: '像', words: ['好像', '像是'], example: '他像他爸爸。', minecraftSentence: '苦力怕像一根绿色柱子。', story: '像字左边是"亻"，右边是"象"。做一个大象的模型，看起来和大象一模一样。' },
            { char: '似', pinyin: 'sì', meaning: '似乎', words: ['似乎', '相似'], example: '似乎要下雨。', minecraftSentence: '似乎有怪物在附近。', story: '似字左边是"亻"，右边是"以"。那个人好像是我认识的，表示好像。' },
            { char: '般', pinyin: 'bān', meaning: '一般', words: ['一般', '般配'], example: '一般来说。', minecraftSentence: '他建造得像专家一般。', story: '般字左边是"舟"，右边是"殳"。在船上用竹篙划船，引申为像...一样。' },
            { char: '样', pinyin: 'yàng', meaning: '样子', words: ['一样', '样子'], example: '一样的颜色。', minecraftSentence: '所有方块都是一样的形状。', story: '样字左边是"木"，右边是"羊"。用来做样品的木头模型，表示形状、种类。' }
        ]
    },

    // ============ 第六级 提高级 (每课14字) ============
    {
        id: 'L6-1',
        level: 6,
        title: '第一课：动作与互动',
        characters: [
            { char: '攻', pinyin: 'gōng', meaning: '攻击', words: ['攻击', '进攻'], example: '攻击敌人。', minecraftSentence: '用剑攻击僵尸。', story: '攻字左边是"工"，右边是"攵"（指手拿工具）。拿着工具去打击敌人，就是攻击。' },
            { char: '守', pinyin: 'shǒu', meaning: '防守', words: ['守卫', '看守'], example: '守在门口。', minecraftSentence: '铁傀儡守卫村庄。', story: '守字上面是"宀"表示房子，下面是"寸"表示法度。遵守规矩，或者在房子里看守保护。' },
            { char: '进', pinyin: 'jìn', meaning: '前进', words: ['进口', '进去'], example: '进门请敲门。', minecraftSentence: '进到矿洞里面。', story: '进字走之底"辶"加"井"。像走到井边去打水，表示向里面或者向前走。' },
            { char: '退', pinyin: 'tuì', meaning: '后退', words: ['退休', '退步'], example: '向后退。', minecraftSentence: '遇到苦力怕要后退。', story: '退字走之底"辶"加"艮"（回头看）。这路不通，回头向后走，就是退。' },
            { char: '胜', pinyin: 'shèng', meaning: '胜利', words: ['胜利', '获胜'], example: '取得胜利。', minecraftSentence: '打败末影龙就胜利了。', story: '胜字左边是"月"（肉、身体），右边是"生"。身体有力气，就能赢，取得胜利。' },
            { char: '负', pinyin: 'fù', meaning: '失败', words: ['负责', '胜负'], example: '不要怕输。', minecraftSentence: '如果你死了就负了。', story: '负字上面是"刀"？下面是"贝"。背着重重的贝壳，或者欠了钱，表示输了或背负重任。' },
            { char: '赢', pinyin: 'yíng', meaning: '输赢', words: ['赢了', '输赢'], example: '我们赢了。', minecraftSentence: '赢得PVP战斗。', story: '赢字由"亡"、"口"、"月"、"贝"、"凡"组成。要赢需要危机感、口才、时间、金钱和平常心。' },
            { char: '输', pinyin: 'shū', meaning: '输掉', words: ['输赢', '输入'], example: '不要输掉比赛。', minecraftSentence: '在聊天栏输入指令。', story: '输字左边是"车"，右边是"俞"。车子装的好东西被运走了，表示输掉。也可以表示运输、输入。' },
            { char: '互', pinyin: 'hù', meaning: '互相', words: ['互相', '互助'], example: '互相帮助。', minecraftSentence: '和朋友互相交换物品。', story: '互字像两只手互相握在一起。你帮我，我帮你，就是互相。' },
            { char: '相', pinyin: 'xiāng', meaning: '相互', words: ['相信', '相处'], example: '相信自己。', minecraftSentence: '村民们相处得很和谐。', story: '相字左边是"木"，右边是"目"。眼睛盯着树木看，观察。引申为互相看，相互。' },
            { char: '交', pinyin: 'jiāo', meaning: '交流', words: ['交换', '交通'], example: '交换礼物。', minecraftSentence: '把绿宝石交给村民。', story: '交字像一个人双腿交叉站立。表示交叉、交换、交往。' },
            { char: '通', pinyin: 'tōng', meaning: '通过', words: ['交通', '通过'], example: '通过考试。', minecraftSentence: '通过传送门去地狱。', story: '通字走之底"辶"加"甬"。像甬道一样畅通无阻，走得过去，没有阻碍。' },
            { char: '往', pinyin: 'wǎng', meaning: '往来', words: ['来往', '往往'], example: '往这边走。', minecraftSentence: '在这个世界来往探险。', story: '往字左边是"彳"（走），右边是"主"。像主人一样走来走去，表示去往某个方向。' },
            { char: '来', pinyin: 'lái', meaning: '来到', words: ['来到', '回来'], example: '欢迎来到我家。', minecraftSentence: '夜晚怪物会来袭。', story: '来字本来像一棵麦子。后来借用为来去的来，表示从别的地方到这里。' }
        ]
    },
    {
        id: 'L6-2',
        level: 6,
        title: '第二课：物质与状态',
        characters: [
            { char: '固', pinyin: 'gù', meaning: '固定', words: ['固体', '固定'], example: '这是固体。', minecraftSentence: '把方块固定在墙上。', story: '固字外面是"口"（围墙），里面是"古"（坚硬）。围得紧紧的，非常坚固，不变。' },
            { char: '液', pinyin: 'yè', meaning: '液体', words: ['液体', '血液'], example: '水是液体。', minecraftSentence: '岩浆是一种危险的液体。', story: '液字左边是"氵"（水），右边是"夜"。像水一样能流动的物质，比如血液、汁液。' },
            { char: '气', pinyin: 'qì', meaning: '气体', words: ['生气', '空气'], example: '不要生气。', minecraftSentence: '在水下需要换气。', story: '气字像云气飘浮的样子。气体看不见摸不着，像空气。' },
            { char: '燃', pinyin: 'rán', meaning: '燃烧', words: ['燃烧', '燃料'], example: '火在燃烧。', minecraftSentence: '煤炭是很好的燃料。', story: '燃字左边是"火"，右边是"然"。然本身就是烧烤的意思，加个火字更强调燃烧。' },
            { char: '爆', pinyin: 'bào', meaning: '爆炸', words: ['爆炸', '爆发'], example: '气球爆炸了。', minecraftSentence: 'TNT会发生爆炸。', story: '爆字左边是"火"，右边是"暴"（猛烈）。火猛烈地炸开了，发出巨大的声音。' },
            { char: '炸', pinyin: 'zhà', meaning: '炸弹', words: ['炸药', '炸鸡'], example: '小心炸药。', minecraftSentence: '苦力怕会把你炸飞。', story: '炸字左边是"火"，右边是"乍"（突然）。火突然烧起来，发出爆炸声。' },
            { char: '熔', pinyin: 'róng', meaning: '熔化', words: ['熔化', '熔炉'], example: '铁熔化了。', minecraftSentence: '用熔炉烧制金锭。', story: '熔字左边是"火"，右边是"容"。火把金属烧得像水一样在容器里流动，就是熔化。' },
            { char: '凝', pinyin: 'níng', meaning: '凝固', words: ['凝固', '凝聚'], example: '水凝固成冰。', minecraftSentence: '岩浆遇到水会凝固成黑曜石。', story: '凝字左边是"冫"（冰），右边是"疑"。水像犹豫不决停住不动了，结冰了，凝固了。' },
            { char: '蒸', pinyin: 'zhēng', meaning: '蒸发', words: ['蒸汽', '蒸发'], example: '水蒸发了。', minecraftSentence: '水在下界会瞬间蒸发。', story: '蒸字上面是"艹"，中间是"水"，下面是"灬"（火）。用火烧水，热气上升，像草一样冒出来。' },
            { char: '汽', pinyin: 'qì', meaning: '汽水', words: ['汽车', '汽水'], example: '我爱喝汽水。', minecraftSentence: '蒸汽机车像矿车一样。', story: '汽字左边是"氵"，右边是"气"。水受热变成了气，就是蒸汽。' },
            { char: '质', pinyin: 'zhì', meaning: '质量', words: ['质量', '物质'], example: '这个质量很好。', minecraftSentence: '建造高质量的房子。', story: '质字下面是"贝"（钱）。东西的根本性质，或者价值，比如质量。' },
            { char: '量', pinyin: 'liàng', meaning: '数量', words: ['数量', '力量'], example: '数量很多。', minecraftSentence: '收集大量的木头。', story: '量字上面是"曰"（说），下部像"重"。用工具测量东西的轻重多少，就是量。' },
            { char: '形', pinyin: 'xíng', meaning: '形状', words: ['形状', '圆形'], example: '这是什么形状？', minecraftSentence: '所有方块都是方形的。', story: '形字左边是"开"，右边是"彡"（花纹）。物体表现出来的样子和纹理，就是形状。' },
            { char: '态', pinyin: 'tài', meaning: '状态', words: ['态度', '状态'], example: '状态很好。', minecraftSentence: '查看你的饥饿状态。', story: '态字上面是"太"，下面是"心"。心里最真实的想法表现出来，就是态度、神态。' }
        ]
    },
    {
        id: 'L6-3',
        level: 6,
        title: '第三课：智慧与思考',
        characters: [
            { char: '思', pinyin: 'sī', meaning: '思考', words: ['思想', '思考'], example: '认真思考。', minecraftSentence: '思考怎么设计陷阱。', story: '思字上面是"田"，下面是"心"。心里的田地，用心去耕耘思考问题。' },
            { char: '索', pinyin: 'suǒ', meaning: '探索', words: ['线索', '索取'], example: '寻找线索。', minecraftSentence: '去探索未知的世界。', story: '索字上部像绳索。本来指粗绳子，引申为搜寻、寻找线索。' },
            { char: '智', pinyin: 'zhì', meaning: '智慧', words: ['智慧', '智力'], example: '要有智慧。', minecraftSentence: '村民有他们的智慧。', story: '智字上面是"知"（知道），下面是"日"。每天都知道新东西，积累起来就是智慧。' },
            { char: '慧', pinyin: 'huì', meaning: '智慧', words: ['智慧', '聪慧'], example: '聪慧的孩子。', minecraftSentence: '运用智慧打败怪物。', story: '慧字上面是"彗"（扫帚），下面是"心"。心里像扫帚扫过一样干净清楚，明白事理。' },
            { char: '聪', pinyin: 'cōng', meaning: '聪明', words: ['聪明', '失聪'], example: '你真聪明。', minecraftSentence: '聪明的玩家会利用红石。', story: '聪字左边是"耳"，右边是"总"。耳朵总能听到细微的声音，表示听觉灵敏，头脑聪明。' },
            { char: '愚', pinyin: 'yú', meaning: '愚蠢', words: ['愚蠢', '愚人'], example: '不要做愚蠢的事。', minecraftSentence: '僵尸有时候很愚蠢。', story: '愚字上面是"禺"（猴子），下面是"心"。心里像猴子一样不稳重？或者未开化的样子，表示笨拙。' },
            { char: '巧', pinyin: 'qiǎo', meaning: '灵巧', words: ['巧妙', '灵巧'], example: '手很灵巧。', minecraftSentence: '巧妙地利用地形。', story: '巧字左边是"工"，右边是"???"。工作做得非常精细，有技巧，灵巧。' },
            { char: '妙', pinyin: 'miào', meaning: '奇妙', words: ['奇妙', '美妙'], example: '奇妙的世界。', minecraftSentence: '这是一个奇妙的种子。', story: '妙字左边是"女"，右边是"少"。少女是很美好的，表示美妙、奇妙。' },
            { char: '奇', pinyin: 'qí', meaning: '奇怪', words: ['奇怪', '好奇'], example: '奇怪的声音。', minecraftSentence: '奇怪的末地城建筑。', story: '奇字上面是"大"，下面是"可"。大大的，可奇怪了，不同寻常。' },
            { char: '特', pinyin: 'tè', meaning: '特别', words: ['特别', '特殊'], example: '特别的礼物。', minecraftSentence: '寻找特殊的生物群落。', story: '特字左边是"牛"，右边是"寺"。本来指一种特别的公牛，后来表示特别、特殊。' },
            { char: '准', pinyin: 'zhǔn', meaning: '准确', words: ['准备', '准确'], example: '准备好了吗？', minecraftSentence: '准备好迎接挑战。', story: '准字左边是"冫"，右边是"隹"（鸟）。像鸟一样飞得高看得准，定下标准。' },
            { char: '确', pinyin: 'què', meaning: '确定', words: ['确定', '正确'], example: '确定答案。', minecraftSentence: '确定家的位置。', story: '确字左边是"石"，右边是"角"。像石头一样坚硬、坚定，非常确定。' },
            { char: '误', pinyin: 'wù', meaning: '错误', words: ['误会', '错误'], example: '这是个误会。', minecraftSentence: '小心不要误伤村民。', story: '误字左边是"讠"（说话），右边是"吴"。话说得不对，大声争吵，造成了错误。' },
            { char: '差', pinyin: 'chà', meaning: '差别', words: ['差别', '差不多'], example: '差不多一样。', minecraftSentence: '这两种石头差别不大。', story: '差字上面是"羊"，下面是"工"。工作做得不好，有了差距，或者不一致。' }
        ]
    },
    {
        id: 'L6-4',
        level: 6,
        title: '第四课：社会与组织',
        characters: [
            { char: '村', pinyin: 'cūn', meaning: '村庄', words: ['村子', '农村'], example: '住在村子里。', minecraftSentence: '保护村庄不受袭击。', story: '村字左边是"木"，右边是"寸"。树林边的一小块地方，人们聚居的村庄。' },
            { char: '庄', pinyin: 'zhuāng', meaning: '村庄', words: ['庄稼', '庄园'], example: '庄稼长大了。', minecraftSentence: '收割庄稼做面包。', story: '庄字外面是"广"（房子），里面是"土"。有土地的庄园，或者村庄。' },
            { char: '城', pinyin: 'chéng', meaning: '城市', words: ['城市', '城堡'], example: '城市很大。', minecraftSentence: '我建了一座巨大的城堡。', story: '城字左边是"土"，右边是"成"。用土筑成的墙，保护里面的城市。' },
            { char: '堡', pinyin: 'bǎo', meaning: '堡垒', words: ['堡垒', '城堡'], example: '坚固的堡垒。', minecraftSentence: '下界要有堡垒遗迹。', story: '堡字上面是"保"（保护），下面是"土"。用土筑成的小城，用来防守保护。' },
            { char: '队', pinyin: 'duì', meaning: '队伍', words: ['排队', '队长'], example: '大家排队。', minecraftSentence: '组队一起打末影龙。', story: '队字左边是"阝"（山/墙），右边是"人"。人在山坡上排队掉下来？指排成一列的人群。' },
            { char: '伍', pinyin: 'wǔ', meaning: '队伍', words: ['队伍', '入伍'], example: '加入队伍。', minecraftSentence: '加入我们的冒险队伍。', story: '伍字左边是"亻"，右边是"五"。古代军队五个人一伍，指队伍。' },
            { char: '组', pinyin: 'zǔ', meaning: '小组', words: ['组织', '小组'], example: '分小组活动。', minecraftSentence: '组织一次探险活动。', story: '组字左边是"纟"，右边是"且"。本来指编织丝带，后来指把人或东西组织起来。' },
            { char: '织', pinyin: 'zhī', meaning: '编织', words: ['组织', '编织'], example: '织毛衣。', minecraftSentence: '用蜘蛛丝织成羊毛。', story: '织字左边是"纟"，右边是"只"。用丝线编织布匹或衣物。' },
            { char: '规', pinyin: 'guī', meaning: '规则', words: ['规定', '圆规'], example: '遵守规则。', minecraftSentence: '服务器有自己的规则。', story: '规字左边是"夫"，右边是"见"。画圆的工具，引申为规则、法度。' },
            { char: '则', pinyin: 'zé', meaning: '规则', words: ['规则', '否则'], example: '否则会输。', minecraftSentence: '了解游戏规则才能赢。', story: '则字左边是"贝"，右边是"刂"（刀）。用刀分贝壳（钱），要遵守公平的法则。' },
            { char: '法', pinyin: 'fǎ', meaning: '方法', words: ['办法', '法律'], example: '想个办法。', minecraftSentence: '这是合成的正确方法。', story: '法字左边是"氵"，右边是"去"。法律像水一样平，要把坏人去除掉。' },
            { char: '律', pinyin: 'lǜ', meaning: '规律', words: ['法律', '规律'], example: '很有规律。', minecraftSentence: '红石电路有它的规律。', story: '律字左边是"彳"（走），右边是"聿"（笔）。用笔写下来的必须遵守的行为准则，法律。' },
            { char: '命', pinyin: 'mìng', meaning: '生命', words: ['命令', '生命'], example: '生命很宝贵。', minecraftSentence: '输入命令改变天气。', story: '命字上面是"人"和"一"，下面是"叩"。上级对下级发号施令。也指生命。' },
            { char: '令', pinyin: 'lìng', meaning: '命令', words: ['命令', '令人'], example: '听从命令。', minecraftSentence: '命令方块可以执行指令。', story: '令字上面是"今"多一点。发号施令，让大家今天要听从。' }
        ]
    },
    {
        id: 'L6-5',
        level: 6,
        title: '第五课：生命与健康',
        characters: [
            { char: '生', pinyin: 'shēng', meaning: '生命', words: ['生存', '生命'], example: '生日快乐。', minecraftSentence: '生存模式很有挑战性。', story: '生字像草木从土里生长出来的样子。表示生长、生命。' },
            { char: '存', pinyin: 'cún', meaning: '生存', words: ['存在', '保存'], example: '保存一下。', minecraftSentence: '保存你的物品在箱子里。', story: '存字除了"子"，还有"???"。孩子在家里受保护，生存、保存下来。' },
            { char: '死', pinyin: 'sǐ', meaning: '死亡', words: ['死亡', '死去'], example: '不要怕死。', minecraftSentence: '死亡后会掉落物品。', story: '死字左边是"歹"（骨头），右边是"匕"（人）。人变成了骨头，表示死亡。' },
            { char: '亡', pinyin: 'wáng', meaning: '死亡', words: ['灭亡', '逃亡'], example: '国家灭亡。', minecraftSentence: '僵尸是亡灵生物。', story: '亡字像锋芒折断了，或者人躲起来没有了。表示死亡、逃跑、丢失。' },
            { char: '健', pinyin: 'jiàn', meaning: '健康', words: ['健康', '健身'], example: '祝你健康。', minecraftSentence: '保持满血状态更健康。', story: '健字左边是"亻"，右边是"建"。人身体强壮有力，有活力，就是健康。' },
            { char: '康', pinyin: 'kāng', meaning: '健康', words: ['健康', '小康'], example: '身体健康。', minecraftSentence: '金苹果让你迅速恢复健康。', story: '康字里面是"水"的变形。把糠皮像水一样筛掉？本义指谷皮，引申为安乐、健康。' },
            { char: '疾', pinyin: 'jí', meaning: '疾病', words: ['疾病', '疾跑'], example: '预防疾病。', minecraftSentence: '双击前进键疾跑。', story: '疾字外面是"疒"，里面是"矢"（箭）。病像箭一样来得快，或者中箭受伤了。' },
            { char: '病', pinyin: 'bìng', meaning: '生病', words: ['病人', '看病'], example: '生病要吃药。', minecraftSentence: '不要吃腐肉，会生病。', story: '病字外面是"疒"，里面是"丙"（火）。身体发热如果不退，就是生病了。' },
            { char: '治', pinyin: 'zhì', meaning: '治疗', words: ['治病', '治安'], example: '治好病了。', minecraftSentence: '治疗药水可以恢复生命。', story: '治字左边是"氵"，右边是"台"。用水治理，让事情变得平稳，比如治水、治病。' },
            { char: '疗', pinyin: 'liáo', meaning: '治疗', words: ['治疗', '疗伤'], example: '疗伤药。', minecraftSentence: '用金苹果治疗僵尸村民。', story: '疗字外面是"疒"，里面是"了"（孩子）。把病治好了，了结了。' },
            { char: '恢', pinyin: 'huī', meaning: '恢复', words: ['恢复', '恢弘'], example: '恢复健康。', minecraftSentence: '吃食物恢复饥饿值。', story: '恢字左边是"忄"，右边是"灰"。本来指心情广大，现在多用在恢复，变回原来的样子。' },
            { char: '复', pinyin: 'fù', meaning: '重复', words: ['复习', '重复'], example: '复习功课。', minecraftSentence: '那是重生锚。', story: '复字上面是"彳"，下面是"复"。走出去又回来，往返，重复。' },
            { char: '营', pinyin: 'yíng', meaning: '营养', words: ['营养', '露营'], example: '很有营养。', minecraftSentence: '去森林里露营。', story: '营字上面是"???"（火光），下面是"宫"。军队晚上生火扎寨，表示军营、经营。' },
            { char: '养', pinyin: 'yǎng', meaning: '养育', words: ['养成', '养育'], example: '养成好习惯。', minecraftSentence: '养一群牛和羊。', story: '养字上面是"羊"，下面是"食"。给羊吃东西，把它们养大，表示养育。' }
        ]
    },

    // ============ 第七级 高级 (每课12字) ============
    {
        id: 'L7-1',
        level: 7,
        title: '第一课：高级动作',
        characters: [
            { char: '攀', pinyin: 'pān', meaning: '攀爬', words: ['攀登', '攀比'], example: '攀登高峰。', minecraftSentence: '沿着藤蔓向上攀爬。', story: '攀字这下面是"手"（大手），上面是"樊"（许多交叉的树枝）。用大手抓住树枝向上爬。' },
            { char: '登', pinyin: 'dēng', meaning: '登高', words: ['登山', '登录'], example: '登上山顶。', minecraftSentence: '登上高塔眺望远方。', story: '登字上面是"癶"（两只脚），下面的"豆"像登高用的礼器。双脚踩着登上去。' },
            { char: '潜', pinyin: 'qián', meaning: '潜水', words: ['潜水', '潜力'], example: '在水里潜水。', minecraftSentence: '按Shift键可以潜行。', story: '潜字左边是"氵"，右边是"替"。像人替换了身份，没入水中，不让人认出来。' },
            { char: '伏', pinyin: 'fú', meaning: '埋伏', words: ['埋伏', '伏击'], example: '埋伏起来。', minecraftSentence: '潜影贝会潜伏在壳里。', story: '伏字左边是"亻"，右边是"犬"。像人像狗一样趴在地上，躲藏起来埋伏。' },
            { char: '偷', pinyin: 'tōu', meaning: '偷窃', words: ['小偷', '偷看'], example: '不要偷东西。', minecraftSentence: '狐狸会偷走掉落物。', story: '偷字左边是"亻"，右边是"俞"。把别人的东西拿走了（俞），这种人就是小偷。' },
            { char: '袭', pinyin: 'xí', meaning: '袭击', words: ['袭击', '偷袭'], example: '突然袭击。', minecraftSentence: '这是袭击队的前哨站。', story: '袭字上面是"龙"，下面是"衣"。穿上龙衣？本义是继承，现在多指偷袭，突然打击。' },
            { char: '躲', pinyin: 'duǒ', meaning: '躲藏', words: ['躲避', '躲猫猫'], example: '躲起来。', minecraftSentence: '躲在掩体后面。', story: '躲字左边是"身"，右边是"朵"。身体藏在花朵或者树木后面，躲起来。' },
            { char: '避', pinyin: 'bì', meaning: '躲避', words: ['避开', '避免'], example: '避开危险。', minecraftSentence: '避开苦力怕的爆炸。', story: '避字走之底"辶"加"辟"。走开，躲到偏僻的地方，避开危险。' },
            { char: '追', pinyin: 'zhuī', meaning: '追赶', words: ['追逐', '追求'], example: '追赶跑跳。', minecraftSentence: '僵尸会追着你跑。', story: '追字走之底"辶"加"???"（屁股？）。跟着别人的屁股后面跑，就是追。' },
            { char: '逐', pinyin: 'zhú', meaning: '驱逐', words: ['逐渐', '追逐'], example: '逐渐长大。', minecraftSentence: '互相追逐玩耍。', story: '逐字走之底"辶"加"豕"（猪）。去追赶跑掉的猪。' },
            { char: '逃', pinyin: 'táo', meaning: '逃跑', words: ['逃跑', '逃走'], example: '赶快逃跑。', minecraftSentence: '快逃！有苦力怕！', story: '逃字走之底"辶"加"兆"。跑得远远的（兆指远或者多），逃跑。' },
            { char: '逸', pinyin: 'yì', meaning: '逃逸', words: ['逃逸', '安逸'], example: '生活安逸。', minecraftSentence: '末影龙逃逸到空中。', story: '逸字走之底"辶"加"免"（兔子）。像兔子一样跑得快，逃逸。' }
        ]
    },
    {
        id: 'L7-2',
        level: 7,
        title: '第二课：魔法与附魔',
        characters: [
            { char: '咒', pinyin: 'zhòu', meaning: '咒语', words: ['诅咒', '咒语'], example: '念咒语。', minecraftSentence: '这是绑定诅咒的装备。', story: '咒字上面是两个"口"，下面是"几"？或者"兄"。很多人张口祈祷或诅咒。' },
            { char: '语', pinyin: 'yǔ', meaning: '语言', words: ['语文', '语言'], example: '学习外语。', minecraftSentence: '附魔台上的神秘语言。', story: '语字左边是"讠"，右边是"吾"（我）。我说的话，就是语言。' },
            { char: '召', pinyin: 'zhào', meaning: '召唤', words: ['召唤', '号召'], example: '召唤神龙。', minecraftSentence: '召唤铁傀儡保护村庄。', story: '召字上面是"刀"，下面是"口"。用口呼唤，像刀一样有力地号召大家。' },
            { char: '唤', pinyin: 'huàn', meaning: '呼唤', words: ['叫唤', '呼唤'], example: '大声呼唤。', minecraftSentence: '唤魔者能召唤恼鬼。', story: '唤字左边是"口"，右边是"奂"（盛大）。大声地叫喊，呼唤。' },
            { char: '献', pinyin: 'xiàn', meaning: '奉献', words: ['贡献', '奉献'], example: '无私奉献。', minecraftSentence: '在这张桌子上献祭物品。', story: '献字左边是"南"，右边是"犬"。古代把南方进贡的狗献给皇帝？表示进献、奉献。' },
            { char: '祭', pinyin: 'jì', meaning: '祭祀', words: ['祭祀', '节日'], example: '祭祀祖先。', minecraftSentence: '丛林神庙是祭祀的地方。', story: '祭字上面是"月"（肉）和"又"（手），下面是"示"（神）。手拿着肉去敬神，就是祭祀。' },
            { char: '传', pinyin: 'chuán', meaning: '传递', words: ['传说', '传递'], example: '古老的传说。', minecraftSentence: '通过传送门去另一个世界。', story: '传字左边是"亻"，右边是"专"。人把专门的东西递给别人，表示传递、传送。' },
            { char: '送', pinyin: 'sòng', meaning: '送给', words: ['赠送', '欢送'], example: '欢送朋友。', minecraftSentence: '把你送到末地。', story: '送字走之底"辶"加"关"（送行）。把人送到关口，或者把东西拿给别人。' },
            { char: '瞬', pinyin: 'shùn', meaning: '瞬间', words: ['瞬间', '瞬移'], example: '瞬间消失。', minecraftSentence: '末影人会瞬间移动。', story: '瞬字左边是"目"，右边是"舜"。眼睛一眨的时间，非常快，瞬间。' },
            { char: '移', pinyin: 'yí', meaning: '移动', words: ['移动', '移民'], example: '移动桌子。', minecraftSentence: '移动鼠标控制视角。', story: '移字左边是"禾"，右边是"多"。禾苗太多了，把它们移开种到别的地方。' },
            { char: '漂', pinyin: 'piāo', meaning: '漂浮', words: ['漂浮', '漂亮'], example: '气球漂浮着。', minecraftSentence: '潜影贝会让你漂浮起来。', story: '漂字左边是"氵"，右边是"票"。像票据一样轻，在水面上漂浮。' },
            { char: '浮', pinyin: 'fú', meaning: '浮动', words: ['浮力', '漂浮'], example: '有浮力。', minecraftSentence: '水里有浮力。', story: '浮字左边是"氵"，右边是"孚"（孩子）。孩子在水里游泳浮起来，或者像用手把孩子托起来。' }
        ]
    },
    {
        id: 'L7-3',
        level: 7,
        title: '第三课：机械与红石',
        characters: [
            { char: '机', pinyin: 'jī', meaning: '机器', words: ['机会', '机器'], example: '抓住机会。', minecraftSentence: '做一个自动收割机。', story: '机字左边是"木"，右边是"几"。古代用木头做的小机关。' },
            { char: '械', pinyin: 'xiè', meaning: '机械', words: ['机械', '器械'], example: '机械手臂。', minecraftSentence: '这是个复杂的机械装置。', story: '械字左边是"木"，右边是"戒"（武器）。木制兵器，或者器械。' },
            { char: '装', pinyin: 'zhuāng', meaning: '装置', words: ['服装', '装置'], example: '漂亮的服装。', minecraftSentence: '红石装置很精妙。', story: '装字上面是"壮"，下面是"衣"。壮士穿上衣服，打扮、装饰。' },
            { char: '置', pinyin: 'zhì', meaning: '放置', words: ['位置', '布置'], example: '布置房间。', minecraftSentence: '放置红石中继器。', story: '置字上面是"四"（网）？下面是"直"。把东西放正，放置。' },
            { char: '脉', pinyin: 'mài', meaning: '脉冲', words: ['脉搏', '山脉'], example: '摸摸脉搏。', minecraftSentence: '制造一个红石脉冲。', story: '脉字左边是"月"（肉），右边是"永"。血脉像水流一样永远流动在身体里。' },
            { char: '冲', pinyin: 'chōng', meaning: '冲动', words: ['冲洗', '冲击'], example: '不要冲动。', minecraftSentence: '水流会冲走物品。', story: '冲字左边是"冫"，右边是"中"。像冰水直直地流下来冲击，或者向中间冲。' },
            { char: '延', pinyin: 'yán', meaning: '延迟', words: ['延长', '延迟'], example: '延长假期。', minecraftSentence: '设置中继器的延迟。', story: '延字走之底"廴"加"正"。把路走得很长，伸展，延长。' },
            { char: '迟', pinyin: 'chí', meaning: '迟到', words: ['迟到', '迟早'], example: '上学别迟到。', minecraftSentence: '信号会有延迟。', story: '迟字走之底"辶"加"尺"。走路像量尺子一样慢，来晚了，迟到。' },
            { char: '激', pinyin: 'jī', meaning: '激动', words: ['激动', '激烈'], example: '心情激动。', minecraftSentence: '激活活塞推动方块。', story: '激字左边是"氵"，右边是"???"（放光）。水碰上石头激起浪花。' },
            { char: '活', pinyin: 'huó', meaning: '活动', words: ['生活', '活动'], example: '参加活动。', minecraftSentence: '在生存模式里生活。', story: '活字左边是"氵"，右边是"舌"。舌头有水（口水），才能灵活说话，表示活着、活动。' },
            { char: '连', pinyin: 'lián', meaning: '连接', words: ['连接', '连线'], example: '连线题。', minecraftSentence: '把红石线路连接起来。', story: '连字走之底"辶"加"车"。车子连成一排，连接在一起。' },
            { char: '接', pinyin: 'jiē', meaning: '接触', words: ['接受', '直接'], example: '接受礼物。', minecraftSentence: '直接连接到服务器。', story: '接字左边是"扌"，右边是"妾"。用手把东西接过来，或者连接。' }
        ]
    },
    {
        id: 'L7-4',
        level: 7,
        title: '第四课：地形与环境',
        characters: [
            { char: '沼', pinyin: 'zhǎo', meaning: '沼泽', words: ['沼泽', '池沼'], example: '陷入沼泽。', minecraftSentence: '沼泽里有史莱姆。', story: '沼字左边是"氵"，右边是"召"。水池，像在召唤你（小心陷下去？），沼泽。' },
            { char: '泽', pinyin: 'zé', meaning: '沼泽', words: ['光泽', '恩泽'], example: '有光泽。', minecraftSentence: '沼泽地有女巫小屋。', story: '泽字左边是"氵"，右边是"???"。水聚积的地方，光润，恩泽。' },
            { char: '荒', pinyin: 'huāng', meaning: '荒地', words: ['荒凉', '慌张'], example: '一片荒凉。', minecraftSentence: '不要在荒野迷路。', story: '荒字上面是"艹"，中间是"亡"，下面是"川"。草死了，水干了，一片荒凉。' },
            { char: '漠', pinyin: 'mò', meaning: '沙漠', words: ['沙漠', '冷漠'], example: '沙漠很热。', minecraftSentence: '沙漠里有神殿。', story: '漠字左边是"氵"，右边是"莫"（没有）。没有水的地方，沙漠。' },
            { char: '悬', pinyin: 'xuán', meaning: '悬空', words: ['悬崖', '悬挂'], example: '悬在空中。', minecraftSentence: '小心别掉下悬崖。', story: '悬字上面是"县"，下面是"心"。心里挂念，或者悬挂在空中。' },
            { char: '崖', pinyin: 'yá', meaning: '悬崖', words: ['山崖', '悬崖'], example: '爬上山崖。', minecraftSentence: '在悬崖边建造房子。', story: '崖字上面是"山"，下面是"厂"和"圭"。山边陡峭的地方，像工厂的墙壁一样直。' },
            { char: '峡', pinyin: 'xiá', meaning: '峡谷', words: ['海峡', '三峡'], example: '长江三峡。', minecraftSentence: '峡谷下面有岩浆。', story: '峡字左边是"山"，右边是"夹"。两山夹着水，峡谷。' },
            { char: '谷', pinyin: 'gǔ', meaning: '山谷', words: ['谷物', '山谷'], example: '山谷里有花。', minecraftSentence: '在山谷里种庄稼。', story: '谷字上面是"八"，下面是"人"和"口"。像山谷的口子，两山之间的低地。' },
            { char: '洞', pinyin: 'dòng', meaning: '洞穴', words: ['山洞', '洞口'], example: '住在山洞里。', minecraftSentence: '探索黑暗的洞窟。', story: '洞字左边是"氵"，右边是"同"。水流汇聚的地方，或者深深的洞穴。' },
            { char: '窟', pinyin: 'kū', meaning: '洞窟', words: ['石窟', '窟窿'], example: '有个大窟窿。', minecraftSentence: '繁茂的洞窟很漂亮。', story: '窟字上面是"穴"，下面是"屈"。人弯腰屈身才能进去的洞穴。' },
            { char: '废', pinyin: 'fèi', meaning: '废弃', words: ['废话', '作废'], example: '变废为宝。', minecraftSentence: '探索废弃矿井。', story: '废字外面是"广"，里面是"发"。房子发霉坏了？表示废弃、没有用了。' },
            { char: '墟', pinyin: 'xū', meaning: '废墟', words: ['废墟', '丘墟'], example: '一片废墟。', minecraftSentence: '古城废墟里有宝藏。', story: '墟字左边是"土"，右边是"虚"。变成空虚的土地，没有了建筑，废墟。' }
        ]
    },
    {
        id: 'L7-5',
        level: 7,
        title: '第五课：维度与结构',
        characters: [
            { char: '冥', pinyin: 'míng', meaning: '幽暗', words: ['冥想', '幽冥'], example: '闭眼冥想。', minecraftSentence: '这里像冥界一样可怕。', story: '冥字上面是"冖"（覆盖），下面是"日"和"六"。太阳被盖住了，非常幽暗。' },
            { char: '界', pinyin: 'jiè', meaning: '世界', words: ['世界', '边界'], example: '世界很大。', minecraftSentence: '去下界（地狱）探险。', story: '界字上面是"田"，下面是"介"。给田地划分界限，世界。' },
            { char: '监', pinyin: 'jiān', meaning: '监视', words: ['监督', '监视'], example: '互相监督。', minecraftSentence: '远古守卫者在监视你。', story: '监字上面是"卧"（躺看），下面是"皿"。低头看盘子里的水（照镜子），引申为监视、监督。' },
            { char: '守', pinyin: 'shǒu', meaning: '守护', words: ['守护', '保守'], example: '保守秘密。', minecraftSentence: '守卫海底神殿。', story: '守字上面是"宀"，下面是"寸"。在房子里守护法度，保护家园。' },
            { char: '遗', pinyin: 'yí', meaning: '遗留', words: ['遗憾', '遗产'], example: '不要遗憾。', minecraftSentence: '寻找沙漠遗迹。', story: '遗字走之底"辶"加"贵"。贵重的东西（比如知识、财物）留下了传给后人，遗留。' },
            { char: '迹', pinyin: 'jì', meaning: '痕迹', words: ['足迹', '奇迹'], example: '留下足迹。', minecraftSentence: '这是古人留下的遗迹。', story: '迹字走之底"辶"加"亦"。走过留下的脚印，痕迹。' },
            { char: '圣', pinyin: 'shèng', meaning: '神圣', words: ['圣诞', '神圣'], example: '圣诞快乐。', minecraftSentence: '沙漠圣殿里有陷阱。', story: '圣字上面是"又"，下面是"土"。也有说是"耳"和"呈"。本义通达事理，神圣。' },
            { char: '殿', pinyin: 'diàn', meaning: '宫殿', words: ['宫殿', '大殿'], example: '宏伟的宫殿。', minecraftSentence: '海底神殿是蓝色的。', story: '殿字左边是"尸"和"共"，右边是"殳"。高大的建筑物，供奉神像或帝王居住。' },
            { char: '废', pinyin: 'fèi', meaning: '荒废', words: ['废物', '废弃'], example: '不要浪费。', minecraftSentence: '这个村庄已经废弃了。', story: '废字外面是"广"，里面是"发"。房子发霉坏了？表示废弃、没有用了。' },
            { char: '弃', pinyin: 'qì', meaning: '放弃', words: ['丢弃', '抛弃'], example: '不要放弃。', minecraftSentence: '被抛弃的传送门。', story: '弃字上面是"云"？中间是"???"，下面是"廾"（双手）。双手把像孩子一样的东西扔掉？抛弃。' },
            { char: '探', pinyin: 'tàn', meaning: '探索', words: ['探险', '侦探'], example: '名侦探。', minecraftSentence: '去未知的地方探险。', story: '探字左边是"扌"，右边是"深"的右边。用手去深处摸索，探索。' },
            { char: '险', pinyin: 'xiǎn', meaning: '危险', words: ['危险', '保险'], example: '这里很危险。', minecraftSentence: '冒险家不怕危险。', story: '险字左边是"阝"（山/险阻），右边是"佥"。山路陡峭，大家都不敢走，很危险。' }
        ]
    },

    // ============ 第八级 挑战级 (每课11字) ============
    {
        id: 'L8-1',
        level: 8,
        title: '第一课：形近字辨析一',
        characters: [
            { char: '幻', pinyin: 'huàn', meaning: '幻影', words: ['幻想', '梦幻'], example: '梦幻的世界。', minecraftSentence: '幻翼在三天不睡觉后出现。', story: '幻字左边是"幺"（小），右边是"???"。像变魔术一样变化无穷，虚幻。' },
            { char: '幼', pinyin: 'yòu', meaning: '幼小', words: ['幼儿', '幼小'], example: '幼小的树苗。', minecraftSentence: '幼年僵尸跑得非常快。', story: '幼字左边是"幺"（小），右边是"力"。力气很小，因为还年幼。' },
            { char: '狠', pinyin: 'hěn', meaning: '凶狠', words: ['狠心', '凶狠'], example: '凶狠的眼神。', minecraftSentence: '狼群凶狠地攻击骷髅。', story: '狠字左边是"犭"（动物），右边是"艮"。像野兽一样凶恶，凶狠。' },
            { char: '染', pinyin: 'rǎn', meaning: '染色', words: ['染料', '污染'], example: '染色的衣服。', minecraftSentence: '用染料给羊毛染色。', story: '染字左边是"氵"，右边是"九"和"木"。把木草放在水里煮九次？提取颜色来染色。' },
            { char: '梁', pinyin: 'liáng', meaning: '桥梁', words: ['桥梁', '房梁'], example: '一座大桥。', minecraftSentence: '在悬崖间架起桥梁。', story: '梁字下面是"木"，上面是"水"和"刀"（其实是"???"）。用木头架在水面上，就是桥梁。' },
            { char: '柱', pinyin: 'zhù', meaning: '柱子', words: ['石柱', '支柱'], example: '高大的柱子。', minecraftSentence: '用磨制玄武岩做柱子。', story: '柱字左边是"木"，右边是"主"。起主要支撑作用的木头，柱子。' },
            { char: '坚', pinyin: 'jiān', meaning: '坚固', words: ['坚持', '坚固'], example: '坚固的堡垒。', minecraftSentence: '基岩是坚不可摧的。', story: '坚字下面是"土"，上面是"臣"和"又"（手）。像把你抓得紧紧的，像土一样硬，坚固。' },
            { char: '竖', pinyin: 'shù', meaning: '竖立', words: ['竖立', '横竖'], example: '竖着放。', minecraftSentence: '把半砖竖起来放（模组）。', story: '竖字下面是"立"，上面是"臣"和"又"。把东西扶起来站立，竖立。' },
            { char: '贫', pinyin: 'pín', meaning: '贫穷', words: ['贫苦', '贫乏'], example: '资源贫乏。', minecraftSentence: '贫瘠的土地长不出庄稼。', story: '贫字上面是"分"，下面是"贝"（钱）。钱分完了，就没有了，贫穷。' },
            { char: '贪', pinyin: 'tān', meaning: '贪心', words: ['贪玩', '贪吃'], example: '不要贪心。', minecraftSentence: '贪心地想要所有宝藏。', story: '贪字上面是"今"，下面是"贝"。今天就想要所有的钱，太贪心了。' },
            { char: '贷', pinyin: 'dài', meaning: '贷款', words: ['贷款', '借贷'], example: '借贷东西。', minecraftSentence: '向村民借贷绿宝石（交易）。', story: '贷字上面是"代"，下面是"贝"。代替钱使用？或者借钱，贷款。' }
        ]
    },
    {
        id: 'L8-2',
        level: 8,
        title: '第二课：形近字辨析二',
        characters: [
            { char: '拾', pinyin: 'shí', meaning: '捡拾', words: ['拾取', '收拾'], example: '收拾房间。', minecraftSentence: '拾取地上的掉落物。', story: '拾字左边是"扌"，右边是"合"。手把东西合拢起来，捡拾。' },
            { char: '抬', pinyin: 'tái', meaning: '抬起', words: ['抬头', '抬手'], example: '抬起头看。', minecraftSentence: '抬起头看天上的幻翼。', story: '抬字左边是"扌"，右边是"台"。用手把平台或者重物举起来，抬起。' },
            { char: '投', pinyin: 'tóu', meaning: '投掷', words: ['投入', '投降'], example: '投篮。', minecraftSentence: '投掷三叉戟攻击敌人。', story: '投字左边是"扌"，右边是"殳"（兵器）。手拿着兵器扔出去，投掷。' },
            { char: '抗', pinyin: 'kàng', meaning: '抵抗', words: ['反抗', '抗击'], example: '抵抗敌人。', minecraftSentence: '喝抗火药水抵抗岩浆伤害。', story: '抗字左边是"扌"，右边是"亢"。高高举起手，表示抵抗、对抗。' },
            { char: '护', pinyin: 'hù', meaning: '保护', words: ['爱护', '护盾'], example: '保护环境。', minecraftSentence: '保护村民免受僵尸攻击。', story: '护字左边是"扌"，右边是"户"（门）。手守在门口，保护家里。' },
            { char: '挡', pinyin: 'dǎng', meaning: '阻挡', words: ['挡住', '抵挡'], example: '挡住去路。', minecraftSentence: '用盾牌挡住骷髅的箭。', story: '挡字左边是"扌"，右边是"当"。手当在前面，阻挡。' },
            { char: '担', pinyin: 'dān', meaning: '担负', words: ['担心', '担保'], example: '不用担心。', minecraftSentence: '不用担心食物不够。', story: '担字左边是"扌"，右边是"旦"（早晨/重担）。用手挑起重担，或者承担。' },
            { char: '责', pinyin: 'zé', meaning: '责任', words: ['责任', '负责'], example: '负责任。', minecraftSentence: '这片区域由铁傀儡负责。', story: '责字上面是"主"的变形（生长），下面是"贝"。钱财不仅是财富，也是一种责任。' },
            { char: '任', pinyin: 'rèn', meaning: '任务', words: ['任务', '任何'], example: '完成任务。', minecraftSentence: '在这个世界只有生存任务。', story: '任字左边是"亻"，右边是"壬"。人承担重任，任务。' },
            { char: '辨', pinyin: 'biàn', meaning: '分辨', words: ['辨别', '分辨'], example: '分辨方向。', minecraftSentence: '辨别真假箱子（陷阱箱）。', story: '辨字两边是"辛"，中间是"刂"（刀）。用刀把两个纠缠在一起的东西分开，辨别。' },
            { char: '瓣', pinyin: 'bàn', meaning: '花瓣', words: ['花瓣', '蒜瓣'], example: '美丽的花瓣。', minecraftSentence: '收集花瓣做染料。', story: '瓣字两边是"辛"，中间是"瓜"。像瓜里面可以分开的一瓣一瓣，花瓣。' }
        ]
    },
    {
        id: 'L8-3',
        level: 8,
        title: '第三课：易错字',
        characters: [
            { char: '冒', pinyin: 'mào', meaning: '冒险', words: ['感冒', '冒险'], example: '去冒险。', minecraftSentence: '勇敢的冒险家。', story: '冒字上面是"曰"（说），下面的"目"不封口。冒险时要睁大眼睛看，或者冒着危险说话？' },
            { char: '毒', pinyin: 'dú', meaning: '中毒', words: ['毒药', '病毒'], example: '小心有毒。', minecraftSentence: '中毒后生命值会下降。', story: '毒字上面是"生"（生长），下面是"母"。有些生长的植物（比如蘑菇）是有毒的，妈妈说不能吃。' },
            { char: '霉', pinyin: 'méi', meaning: '发霉', words: ['倒霉', '发霉'], example: '面包发霉了。', minecraftSentence: '在这倒霉的一天遇到了苦力怕。', story: '霉字上面是"雨"，下面是"每"。每天都下雨，东西都潮湿发霉了。' },
            { char: '菌', pinyin: 'jūn', meaning: '真菌', words: ['细菌', '真菌'], example: '蘑菇是真菌。', minecraftSentence: '下界的绯红菌。', story: '菌字上面是"艹"，下面是"囷"（粮仓）。像草一样长在粮仓里的真菌。' },
            { char: '菇', pinyin: 'gū', meaning: '蘑菇', words: ['香菇', '蘑菇'], example: '采蘑菇。', minecraftSentence: '哞菇身上长满了蘑菇。', story: '菇字上面是"艹"，下面是"姑"。姑娘采的蘑菇？或者长得像姑娘一样漂亮的蘑菇。' },
            { char: '浆', pinyin: 'jiāng', meaning: '岩浆', words: ['豆浆', '泥浆'], example: '岩浆很烫。', minecraftSentence: '岩浆膏是打败岩浆怪掉落的。', story: '浆字上面是"将"，下面是"水"。将来要做成饮料的水？或者像水一样粘稠的液体。' },
            { char: '粘', pinyin: 'nián', meaning: '粘液', words: ['粘住', '粘液'], example: '胶水很粘。', minecraftSentence: '粘液球可以做粘性活塞。', story: '粘字左边是"米"，右边是"占"。像煮烂的米饭一样粘，或者是把东西占住不放。' },
            { char: '贴', pinyin: 'tiē', meaning: '粘贴', words: ['贴画', '粘贴'], example: '贴一张画。', minecraftSentence: '把画贴在墙上装饰。', story: '贴字左边是"贝"（钱），右边是"占"。把钱贴身放好？或者用东西粘住。' },
            { char: '战', pinyin: 'zhàn', meaning: '战斗', words: ['战争', '挑战'], example: '迎接挑战。', minecraftSentence: '做好战斗准备。', story: '战字左边是"占"，右边是"戈"（兵器）。拿着兵器去占领土地，战斗。' },
            { char: '旱', pinyin: 'hàn', meaning: '干旱', words: ['旱灾', '干旱'], example: '天气干旱。', minecraftSentence: '沙漠是干旱的生物群落。', story: '旱字上面是"日"，下面是"干"。太阳太大了，把水都晒干了，干旱。' },
            { char: '裂', pinyin: 'liè', meaning: '裂开', words: ['裂缝', '破裂'], example: '墙裂开了。', minecraftSentence: '峡谷是大地的裂缝。', story: '裂字上面是"列"，下面是"衣"。把衣服列开（撕开），裂开。' }
        ]
    },
    {
        id: 'L8-4',
        level: 8,
        title: '第四课：复杂动作',
        characters: [
            { char: '掘', pinyin: 'jué', meaning: '挖掘', words: ['发掘', '挖掘'], example: '挖掘宝藏。', minecraftSentence: '快速挖掘矿石。', story: '掘字左边是"扌"，右边是"屈"。手弯曲着挖土，挖掘。' },
            { char: '撞', pinyin: 'zhuàng', meaning: '碰撞', words: ['撞击', '碰撞'], example: '撞到了头。', minecraftSentence: '鞘翅飞行小心撞墙。', story: '撞字左边是"扌"，右边是"童"。像小孩（童）一样乱跑乱撞。' },
            { char: '敲', pinyin: 'qiāo', meaning: '敲打', words: ['敲门', '敲击'], example: '敲门声。', minecraftSentence: '敲掉这个方块。', story: '敲字左边是"高"，右边是"攴"（手拿棍子）。举高棍子敲打。' },
            { char: '劈', pinyin: 'pī', meaning: '劈开', words: ['劈柴', '雷劈'], example: '劈开木头。', minecraftSentence: '雷电劈中村民会变女巫。', story: '劈字上面是"辟"，下面是"刀"。用刀把东西辟开，劈开。' },
            { char: '刺', pinyin: 'cì', meaning: '刺杀', words: ['刺客', '刺眼'], example: '阳光刺眼。', minecraftSentence: '用剑刺向敌人。', story: '刺字左边是"朿"（刺），右边是"刂"（刀）。带刺的刀，刺杀。' },
            { char: '挑', pinyin: 'tiāo', meaning: '挑战', words: ['挑选', '挑战'], example: '挑战自我。', minecraftSentence: '挑战凋灵Boss。', story: '挑字左边是"扌"，右边是"兆"。用手挑起很多（兆）东西？或者挑战。' },
            { char: '瞄', pinyin: 'miáo', meaning: '瞄准', words: ['瞄准', '瞄一眼'], example: '瞄准目标。', minecraftSentence: '用弓箭瞄准远处的骷髅。', story: '瞄字左边是"目"，右边是"苗"。眼睛盯着像苗一样细小的目标，瞄准。' },
            { char: '备', pinyin: 'bèi', meaning: '准备', words: ['准备', '备用'], example: '准备出发。', minecraftSentence: '带上备用的食物和工具。', story: '备字上面是"夂"（走），下面是"田"。准备下田去。' },
            { char: '碎', pinyin: 'suì', meaning: '破碎', words: ['打碎', '碎片'], example: '玻璃碎了。', minecraftSentence: '打碎玻璃不会掉落物品。', story: '碎字左边是"石"，右边是"卒"（兵/死）。石头碰碎了，破碎。' },
            { char: '缝', pinyin: 'féng', meaning: '缝隙', words: ['缝补', '裂缝'], example: '缝衣服。', minecraftSentence: '从门缝里看外面。', story: '缝字左边是"纟"，右边是"逢"。用丝线把相逢的两块布连起来，缝补。' },
            { char: '补', pinyin: 'bǔ', meaning: '修补', words: ['补充', '修补'], example: '修补衣服。', minecraftSentence: '经验修补是最好的附魔。', story: '补字左边是"衤"（衣），右边是"卜"。衣服破了，补一补。' }
        ]
    },
    {
        id: 'L8-5',
        level: 8,
        title: '第五课：状态与属性',
        characters: [
            { char: '虚', pinyin: 'xū', meaning: '虚弱', words: ['虚假', '虚弱'], example: '身体虚弱。', minecraftSentence: '虚弱药水可以治愈僵尸村民。', story: '虚字上面是"虍"（虎头），下面是"业"。老虎走了，只剩下空虚的基业？虚假。' },
            { char: '实', pinyin: 'shí', meaning: '真实', words: ['诚实', '果实'], example: '说实话。', minecraftSentence: '这个世界看起来很真实。', story: '实字上面是"宀"（房子），下面是"头"。家里头有东西，实实在在。' },
            { char: '弱', pinyin: 'ruò', meaning: '弱小', words: ['弱点', '微弱'], example: '光线微弱。', minecraftSentence: '找出Boss的弱点。', story: '弱字是两个"弓"和两个点。像两把软弱的弓，拉不开。' },
            { char: '强', pinyin: 'qiáng', meaning: '强大', words: ['坚强', '强壮'], example: '身体强壮。', minecraftSentence: '末影龙是非常强大的敌人。', story: '强字左边是"弓"，右边是"口"和"虫"。像强壮的虫子只有一张嘴？或者强有力的弓。' },
            { char: '稀', pinyin: 'xī', meaning: '稀有', words: ['稀少', '稀饭'], example: '稀有的宝石。', minecraftSentence: '粉色羊是很稀有的。', story: '稀字左边是"禾"，右边是"希"。禾苗很稀疏，希望多长点。' },
            { char: '密', pinyin: 'mì', meaning: '茂密', words: ['秘密', '茂密'], example: '保守秘密。', minecraftSentence: '丛林里树木很茂密。', story: '密字上面是"宀"（房子），中间是"必"，下面是"山"。房子里一定要有山？或者是隐秘。' },
            { char: '阔', pinyin: 'kuò', meaning: '宽阔', words: ['广阔', '宽阔'], example: '广阔的天地。', minecraftSentence: '广阔的草原适合骑马。', story: '阔字门里面是个"活"字。开阔的地方，生活得更宽敞。' },
            { char: '封', pinyin: 'fēng', meaning: '封闭', words: ['信封', '封印'], example: '写一封信。', minecraftSentence: '把洞口封闭起来。', story: '封字左边是"圭"（土），右边是"寸"。分封土地，要有法度。' },
            { char: '锁', pinyin: 'suǒ', meaning: '锁定', words: ['锁门', '枷锁'], example: '把门锁上。', minecraftSentence: '锁定难度级别。', story: '锁字左边是"钅"，右边像"小"贝壳。金做的锁，锁住宝贝。' },
            { char: '稳', pinyin: 'wěn', meaning: '平稳', words: ['稳定', '平稳'], example: '走路要稳。', minecraftSentence: '着陆要平稳，小心摔伤。', story: '稳字左边是"禾"，右边是"急"。禾苗长势急，但是很稳？或者心里急也要稳住。' },
            { char: '乱', pinyin: 'luàn', meaning: '混乱', words: ['乱跑', '杂乱'], example: '房间很乱。', minecraftSentence: '被苦力怕炸得一片混乱。', story: '乱字左边是"舌"，右边是"乚"（弯钩）。舌头打结了，说话很乱。' }
        ]
    },

    // ============ 第九级 精通级 (每课10字) ============
    {
        id: 'L9-1',
        level: 9,
        title: '第一课：建筑大师',
        characters: [
            { char: '筑', pinyin: 'zhù', meaning: '建筑', words: ['建筑', '修筑'], example: '伟大的建筑。', minecraftSentence: '建筑师也需要生存技能。', story: '筑字上面是"竹"，下面是"巩"（工+凡）。用竹子和工具建筑房屋。' },
            { char: '构', pinyin: 'gòu', meaning: '结构', words: ['构造', '机构'], example: '复杂的结构。', minecraftSentence: '研究地牢的构造。', story: '构字左边是"木"，右边是"勾"。木头勾连在一起，形成结构。' },
            { char: '瓦', pinyin: 'wǎ', meaning: '瓦片', words: ['瓦房', '砖瓦'], example: '红色的瓦片。', minecraftSentence: '用深板岩瓦做屋顶。', story: '瓦字像两片瓦扣在一起的样子。盖房顶用的瓦片。' },
            { char: '墙', pinyin: 'qiáng', meaning: '墙壁', words: ['城墙', '围墙'], example: '白色的墙。', minecraftSentence: '建一堵墙挡住怪物。', story: '墙字左边是"土"，右边是"啬"。用土筑成的屏障，墙壁。' },
            { char: '壁', pinyin: 'bì', meaning: '墙壁', words: ['墙壁', '峭壁'], example: '挂在墙壁上。', minecraftSentence: '在峭壁上挖掘矿石。', story: '壁字上面是"辟"，下面是"土"。像墙壁一样直立的土崖，或者墙壁。' },
            { char: '阶', pinyin: 'jiē', meaning: '台阶', words: ['阶段', '台阶'], example: '登上台阶。', minecraftSentence: '用楼梯做屋顶的台阶。', story: '阶字左边是"阝"，右边是"介"。人走在山坡的台阶上。' },
            { char: '梯', pinyin: 'tī', meaning: '梯子', words: ['楼梯', '电梯'], example: '爬梯子。', minecraftSentence: '用木头合成梯子。', story: '梯字左边是"木"，右边是"弟"。像弟弟（次第）一样一阶一阶的木头，梯子。' },
            { char: '栏', pinyin: 'lán', meaning: '围栏', words: ['栏杆', '栅栏'], example: '扶着栏杆。', minecraftSentence: '用栅栏围住动物。', story: '栏字左边是"木"，右边是"兰"（阻拦）。用木头做成的阻拦物，栏杆。' },
            { char: '饰', pinyin: 'shì', meaning: '装饰', words: ['装饰', '服饰'], example: '装饰房间。', minecraftSentence: '用花盆装饰窗台。', story: '饰字左边是"饣"（食），右边是"巾"（布）。吃饱了还要穿得好看，装饰一下。' },
            { char: '基', pinyin: 'jī', meaning: '基础', words: ['基本', '地基'], example: '打好基础。', minecraftSentence: '打好房子的地基。', story: '基字上面是"其"，下面是"土"。房子的根基在土里，基础。' }
        ]
    },
    {
        id: 'L9-2',
        level: 9,
        title: '第二课：探索发现',
        characters: [
            { char: '域', pinyin: 'yù', meaning: '区域', words: ['地域', '领域'], example: '未知的领域。', minecraftSentence: '这是雪原地域。', story: '域字左边是"土"，右边是"或"（国）。有土有人守卫的地方，区域。' },
            { char: '境', pinyin: 'jìng', meaning: '环境', words: ['环境', '边境'], example: '保护环境。', minecraftSentence: '进入末地传送门的环境。', story: '境字左边是"土"，右边是"竟"（终了）。土地的尽头，边界，环境。' },
            { char: '标', pinyin: 'biāo', meaning: '标记', words: ['标准', '标志'], example: '做个标记。', minecraftSentence: '用地标标记家的位置。', story: '标字左边是"木"，右边是"示"。树立木头作为指示，标记。' },
            { char: '志', pinyin: 'zhì', meaning: '标志', words: ['志向', '标志'], example: '远大的志向。', minecraftSentence: '记住这个地形标志。', story: '志字上面是"士"，下面是"心"。心里的向往，志向。也指记号。' },
            { char: '航', pinyin: 'háng', meaning: '航行', words: ['航空', '航海'], example: '出海航行。', minecraftSentence: '开船在大海航行。', story: '航字左边是"舟"，右边是"亢"。船在水上高高地行驶，航行。' },
            { char: '驶', pinyin: 'shǐ', meaning: '驾驶', words: ['行驶', '驾驶'], example: '驾驶汽车。', minecraftSentence: '驾驶船只寻找沉船。', story: '驶字左边是"马"，右边是"史"。骑马让它快走，驾驶。' },
            { char: '径', pinyin: 'jìng', meaning: '路径', words: ['小径', '直径'], example: '林间小径。', minecraftSentence: '用铲子开辟一条小径。', story: '径字左边是"彳"（走），右边是"巛"（水）和"工"。沿着水边的小路走，路径。' },
            { char: '途', pinyin: 'tú', meaning: '路途', words: ['前途', '路途'], example: '路途遥远。', minecraftSentence: '在探险的旅途中。', story: '途字走之底"辶"加"余"。走过的剩下的路？路途。' },
            { char: '荒', pinyin: 'huāng', meaning: '荒芜', words: ['荒地', '开荒'], example: '开垦荒地。', minecraftSentence: '在荒芜之地生存。', story: '荒字上面是"艹"，中间是"亡"，下面是"川"。草死了，水干了，一片荒凉。' },
            { char: '源', pinyin: 'yuán', meaning: '来源', words: ['资源', '水源'], example: '珍惜水源。', minecraftSentence: '制作一个无限水源。', story: '源字左边是"氵"，右边是"原"。水的源头，来源。' }
        ]
    },
    {
        id: 'L9-3',
        level: 9,
        title: '第三课：战斗技巧',
        characters: [
            { char: '略', pinyin: 'lüè', meaning: '策略', words: ['省略', '战略'], example: '制定战略。', minecraftSentence: '懂点战斗策略。', story: '略字左边是"田"，右边是"各"。经营田地各有各的方法，策略。' },
            { char: '术', pinyin: 'shù', meaning: '技术', words: ['各种', '法术'], example: '变魔术。', minecraftSentence: '练习PVP技术。', story: '术字是"木"字加一点。对木头进行加工的技术，法术。' },
            { char: '陷', pinyin: 'xiàn', meaning: '陷阱', words: ['陷入', '陷阱'], example: '掉进陷阱。', minecraftSentence: '制作一个掉落陷阱。', story: '陷字左边是"阝"，右边是"臽"（像人掉进臼里）。掉进坑里，陷阱。' },
            { char: '阱', pinyin: 'jǐng', meaning: '陷阱', words: ['深阱', '陷阱'], example: '布置陷阱。', minecraftSentence: '沙漠神殿有TNT陷阱。', story: '阱字左边是"阝"，右边是"井"。在土里挖井做陷阱。' },
            { char: '策', pinyin: 'cè', meaning: '策划', words: ['计策', '策划'], example: '想个计策。', minecraftSentence: '策划一次突袭。', story: '策字上面是"竹"，下面是"朿"（刺）。用竹简记下计谋，或者用竹鞭驱赶，策划。' },
            { char: '猛', pinyin: 'měng', meaning: '猛烈', words: ['凶猛', '猛烈'], example: '猛兽来了。', minecraftSentence: '猛烈攻击Boss。', story: '猛字左边是"犭"，右边是"孟"（大）。像老大哥一样凶猛的野兽。' },
            { char: '烈', pinyin: 'liè', meaning: '强烈', words: ['热烈', '剧烈'], example: '烈火燃烧。', minecraftSentence: '烈焰人会发射火球。', story: '烈字上面是"列"，下面是"灬"（火）。火烧得很猛，排列整齐？猛烈。' },
            { char: '牺', pinyin: 'xī', meaning: '牺牲', words: ['牺牲', '牺尊'], example: '不怕牺牲。', minecraftSentence: '为了保护队友而牺牲。', story: '牺字左边是"牛"，右边是"西"。祭祀用的纯色牛，牺牲。' },
            { char: '牲', pinyin: 'shēng', meaning: '牺牲', words: ['畜牲', '牺牲'], example: '家畜。', minecraftSentence: '圈养牲畜获取食物。', story: '牲字左边是"牛"，右边是"生"。活着的用来祭祀的牛，牲口。' },
            { char: '威', pinyin: 'wēi', meaning: '威力', words: ['威风', '威力'], example: '威力巨大。', minecraftSentence: 'TNT爆炸威力很大。', story: '威字里面是"女"，外面是"戌"（兵器）。女人拿着兵器，很有威风。' }
        ]
    },
    {
        id: 'L9-4',
        level: 9,
        title: '第四课：珍贵资源',
        characters: [
            { char: '晶', pinyin: 'jīng', meaning: '水晶', words: ['结晶', '水晶'], example: '水晶闪亮。', minecraftSentence: '末地水晶可以复活末影龙。', story: '晶字是三个"日"。光亮闪耀，就像水晶一样。' },
            { char: '莹', pinyin: 'yíng', meaning: '晶莹', words: ['晶莹', '萤火虫'], example: '晶莹剔透。', minecraftSentence: '晶莹的钻石。', story: '莹字上面是"艹"，中间是"冖"，下面是"玉"。像玉一样受保护，晶莹剔透。' },
            { char: '剔', pinyin: 'tī', meaning: '剔除', words: ['挑剔', '剔透'], example: '晶莹剔透。', minecraftSentence: '挑剔的附魔。', story: '剔字左边是"易"，右边是"刂"。很容易把骨肉分开？剔除。' },
            { char: '透', pinyin: 'tòu', meaning: '透明', words: ['透过', '透明'], example: '玻璃是透明的。', minecraftSentence: '遮光玻璃是不透明的。', story: '透字走之底"辶"加"秀"。光线能秀气地穿过去？透明，透过。' },
            { char: '宝', pinyin: 'bǎo', meaning: '宝贝', words: ['宝石', '宝贝'], example: '珍贵的宝贝。', minecraftSentence: '藏宝图指向宝藏。', story: '宝字上面是"宀"，下面是"玉"。家里藏着玉石，宝贝。' },
            { char: '藏', pinyin: 'cáng', meaning: '收藏', words: ['躲藏', '宝藏'], example: '捉迷藏。', minecraftSentence: '宝藏埋在沙子下面。', story: '藏字上面是"艹"，下面是"臧"（善/收起来）。把好东西用草盖起来，收藏、躲藏。' },
            { char: '财', pinyin: 'cái', meaning: '财富', words: ['发财', '财富'], example: '积累财富。', minecraftSentence: '绿宝石是村民的财富。', story: '财字左边是"贝"（钱），右边是"才"。有钱又有才，发财。' },
            { char: '富', pinyin: 'fù', meaning: '富有', words: ['丰富', '富强'], example: '经验丰富。', minecraftSentence: '富有矿产的矿洞。', story: '富字上面是"宀"，下面是"一口田"。家里有一大块田，富有。' },
            { char: '缺', pinyin: 'quē', meaning: '缺乏', words: ['缺少', '缺点'], example: '缺少食物。', minecraftSentence: '缺乏材料无法合成。', story: '缺字左边是"缶"（瓦罐），右边是"夬"（决口）。瓦罐破了个口，残缺。' },
            { char: '稀', pinyin: 'xī', meaning: '稀奇', words: ['稀有', '稀少'], example: '稀奇古怪。', minecraftSentence: '在这里发现稀有矿石。', story: '稀字左边是"禾"，右边是"希"。禾苗稀少，希望多长点。' }
        ]
    },
    {
        id: 'L9-5',
        level: 9,
        title: '第五课：最终挑战',
        characters: [
            { char: '荣', pinyin: 'róng', meaning: '光荣', words: ['荣幸', '光荣'], example: '光荣的任务。', minecraftSentence: '这是属于你的荣耀。', story: '荣字上面是"艹"，中间是"冖"，下面是"木"。树木开花很茂盛，光荣。' },
            { char: '耀', pinyin: 'yào', meaning: '照耀', words: ['闪耀', '照耀'], example: '阳光照耀。', minecraftSentence: '附魔书闪耀着光芒。', story: '耀字左边是"光"，右边是"翟"（野鸡，羽毛漂亮）。像漂亮的羽毛在光下闪耀。' },
            { char: '辉', pinyin: 'huī', meaning: '光辉', words: ['辉煌', '光辉'], example: '光辉岁月。', minecraftSentence: '辉煌的建筑。', story: '辉字左边是"光"，右边是"军"。军队的铠甲在阳光下发光，光辉。' },
            { char: '煌', pinyin: 'huáng', meaning: '辉煌', words: ['辉煌', '灯火'], example: '灯火辉煌。', minecraftSentence: '创造辉煌的成就。', story: '煌字左边是"火"，右边是"皇"。像皇帝一样盛大的火光，辉煌。' },
            { char: '历', pinyin: 'lì', meaning: '历史', words: ['经历', '历史'], example: '经历风雨。', minecraftSentence: '查看游戏更新历史。', story: '历字上面是"厂"，下面是"力"。在工厂里出力干活，经历磨练。' },
            { char: '史', pinyin: 'shǐ', meaning: '历史', words: ['史书', '历史'], example: '学习历史。', minecraftSentence: '史蒂夫是传奇人物。', story: '史字是"口"和"乂"（手拿笔）。手拿笔记录口说的话，历史。' },
            { char: '录', pinyin: 'lù', meaning: '记录', words: ['目录', '记录'], example: '打破记录。', minecraftSentence: '记录下你的坐标。', story: '录字上面是"彐"，下面是"水"（氺）。把事情刻在竹简上用水洗不掉？记录。' },
            { char: '程', pinyin: 'chéng', meaning: '过程', words: ['工程', '路程'], example: '路程很远。', minecraftSentence: '漫长的冒险旅程。', story: '程字左边是"禾"，右边是"呈"。根据禾苗的生长计算路程或规矩。' },
            { char: '序', pinyin: 'xù', meaning: '顺序', words: ['秩序', '顺序'], example: '遵守秩序。', minecraftSentence: '按顺序摆放物品。', story: '序字上面是"广"，下面是"予"。给予一个宽敞的地方按次序排队？' },
            { char: '章', pinyin: 'zhāng', meaning: '章节', words: ['文章', '徽章'], example: '写文章。', minecraftSentence: '开启新的冒险篇章。', story: '章字上面是"立"，下面是"早"。文章立意要早？或者音乐的一章。' }
        ]
    },

    // ============ 第十级 大师级 (每课9字) ============
    {
        id: 'L10-1',
        level: 10,
        title: '第一课：挑战巅峰',
        characters: [
            { char: '凋', pinyin: 'diāo', meaning: '凋零', words: ['凋零', '凋谢'], example: '花儿凋谢了。', minecraftSentence: '凋灵是最危险的Boss之一。', story: '凋字左边是"冫"，右边是"周"。天气冷了，周而复始，花木凋零。' },
            { char: '灵', pinyin: 'líng', meaning: '灵魂', words: ['灵魂', '精灵'], example: '灵魂是看不见的。', minecraftSentence: '凋灵需要灵魂沙来召唤。', story: '灵字上面是"彐"，下面是"火"。火光像神奇的精灵在跳动？灵巧。' },
            { char: '魂', pinyin: 'hún', meaning: '魂魄', words: ['灵魂', '魂魄'], example: '魂飞魄散。', minecraftSentence: '灵魂沙会让你走得更慢。', story: '魂字左边是"云"，右边是"鬼"。像云一样飘渺的鬼魂？魂魄。' },
            { char: '末', pinyin: 'mò', meaning: '末端', words: ['末日', '末尾'], example: '末日来临。', minecraftSentence: '末地是最后的维度。', story: '末字是"木"字上面加一横。树梢，表示末端、最后。' },
            { char: '影', pinyin: 'yǐng', meaning: '影子', words: ['影子', '影响'], example: '影子很长。', minecraftSentence: '末影人被看会瞬移攻击。', story: '影字左边是"景"（风景），右边是"彡"（毛发/光影）。光照射物体产生的影子。' },
            { char: '龙', pinyin: 'lóng', meaning: '龙', words: ['龙', '恐龙'], example: '龙是传说中的生物。', minecraftSentence: '末影龙是最终Boss。', story: '龙字像一条飞舞的龙。传说中的神兽。' },
            { char: '蛋', pinyin: 'dàn', meaning: '蛋', words: ['鸡蛋', '龙蛋'], example: '蛋可以孵化。', minecraftSentence: '打败末影龙会掉落龙蛋。', story: '蛋字上面是"疋"（脚），下面是"虫"。虫子（动物）生的蛋。' },
            { char: '翅', pinyin: 'chì', meaning: '翅膀', words: ['翅膀', '鞘翅'], example: '翅膀可以飞翔。', minecraftSentence: '鞘翅可以让你在空中滑翔。', story: '翅字左边是"支"，右边是"羽"。用来支撑飞行的羽毛，翅膀。' },
            { char: '隐', pinyin: 'yǐn', meaning: '隐藏', words: ['隐藏', '隐身'], example: '隐藏起来。', minecraftSentence: '喝隐身药水可以躲避怪物。', story: '隐字左边是"阝"，右边是"急"。心里急着找地方藏起来，隐蔽。' }
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
