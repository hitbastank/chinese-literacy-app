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
    // ============ 第一级 入门级（一年级全量覆盖，顺序已锁定） ============
    {
        id: 'L1-1',
        level: 1,
        title: '第1课：一年级识字·入门级',
        characters: [
            { char: '皂', pinyin: 'zào', meaning: '肥皂，用来清洗', words: ['肥皂', '香皂'], example: '妈妈用肥皂洗衣服。', minecraftSentence: '史蒂夫从矿洞回来满身泥，赶紧用肥皂把脸和手洗干净。' },
            { char: '票', pinyin: 'piào', meaning: '凭证，入场券', words: ['门票', '车票'], example: '去动物园要买门票。', minecraftSentence: '村民交易需要绿宝石当票，没有票就换不到好装备。' },
            { char: '在', pinyin: 'zài', meaning: '存在，表示位置', words: ['现在', '在家'], example: '我现在在家里。', minecraftSentence: '宝箱就在瀑布后面的洞穴里，史蒂夫找了好久才发现。' },
            { char: '门', pinyin: 'mén', meaning: '出入口', words: ['大门', '开门'], example: '请帮我开门。', minecraftSentence: '天黑之前一定要把木门装好，不然僵尸会闯进屋子。' },
            { char: '你', pinyin: 'nǐ', meaning: '称呼对方', words: ['你好', '你们'], example: '你好，很高兴认识你。', minecraftSentence: '史蒂夫对新来的小伙伴说：你先挖矿，我去砍树。' },
            { char: '多', pinyin: 'duō', meaning: '数量大', words: ['很多', '多少'], example: '花园里有很多花。', minecraftSentence: '这个矿洞里钻石真多，史蒂夫的背包都快装不下了。' },
            { char: '赶', pinyin: 'gǎn', meaning: '追，抓紧时间', words: ['赶快', '赶路'], example: '快要迟到了，赶快走吧。', minecraftSentence: '太阳快落山了，史蒂夫赶紧往家跑，再晚怪物就出来了。' },
            { char: '大', pinyin: 'dà', meaning: '体积或规模大', words: ['大小', '大人'], example: '这棵树真大。', minecraftSentence: '史蒂夫盖了一座大房子，足够放下所有的工作台和熔炉。' },
            { char: '七', pinyin: 'qī', meaning: '数字7', words: ['七天', '七个'], example: '一个星期有七天。', minecraftSentence: '史蒂夫花了七天时间，终于把铁轨从家修到了矿洞。' },
            { char: '白', pinyin: 'bái', meaning: '像雪一样的颜色', words: ['白色', '白天'], example: '白天太阳很亮。', minecraftSentence: '白色的羊毛最好找，史蒂夫用它铺满了新房子的地板。' },
            { char: '惊', pinyin: 'jīng', meaning: '受到突然刺激而害怕', words: ['吃惊', '惊喜'], example: '他吓了一大跳，非常吃惊。', minecraftSentence: '挖着挖着突然掉进岩浆坑，史蒂夫惊出一身冷汗。' },
            { char: '闷', pinyin: 'mèn', meaning: '不透气，心情不畅', words: ['闷热', '烦闷'], example: '今天天气好闷热。', minecraftSentence: '在地下矿洞待久了又闷又暗，史蒂夫决定先回地面透透气。' },
            { char: '耳', pinyin: 'ěr', meaning: '听觉器官', words: ['耳朵', '耳机'], example: '兔子的耳朵长长的。', minecraftSentence: '史蒂夫竖起耳朵仔细听，远处传来了僵尸的脚步声。' },
            { char: '西', pinyin: 'xī', meaning: '方向，太阳落下的一边', words: ['西边', '东西'], example: '太阳从西边落下。', minecraftSentence: '太阳往西边沉下去，史蒂夫知道夜晚马上就要来了。' },
            { char: '姑', pinyin: 'gū', meaning: '父亲的姐妹', words: ['姑姑', '姑娘'], example: '姑姑送了我一本书。', minecraftSentence: '村庄里的姑娘是图书管理员，史蒂夫常去找她换附魔书。' },
            { char: '象', pinyin: 'xiàng', meaning: '大型动物；样子', words: ['大象', '好像'], example: '大象的鼻子很长。', minecraftSentence: '远处那只铁傀儡走路的样子好像一头大象，又高又壮。' },
            { char: '写', pinyin: 'xiě', meaning: '用笔记录文字', words: ['写字', '书写'], example: '我每天练习写字。', minecraftSentence: '史蒂夫在告示牌上写下坐标，方便下次找到这个村庄。' },
            { char: '咕', pinyin: 'gū', meaning: '象声词，形容声响', words: ['咕噜', '咕咕'], example: '肚子饿得咕咕叫。', minecraftSentence: '挖了一整天矿，史蒂夫的肚子咕噜咕噜响，得赶紧吃面包。' },
            { char: '刷', pinyin: 'shuā', meaning: '用刷子清洁或涂抹', words: ['刷牙', '刷子'], example: '每天早晚都要刷牙。', minecraftSentence: '史蒂夫拿刷子把盔甲上的泥刷干净，装备保养好才能用得久。' },
            { char: '牵', pinyin: 'qiān', meaning: '拉着，领着走', words: ['牵手', '牵挂'], example: '妈妈牵着我的手过马路。', minecraftSentence: '史蒂夫用拴绳牵着驯化好的马，慢慢走回自己的牧场。' },
            { char: '果', pinyin: 'guǒ', meaning: '植物结出的果实', words: ['水果', '苹果'], example: '苹果是一种水果。', minecraftSentence: '橡树上掉下来一个苹果，史蒂夫捡起这颗果子补充了体力。' },
            { char: '棉', pinyin: 'mián', meaning: '棉花，柔软保暖', words: ['棉花', '棉衣'], example: '冬天穿棉衣很暖和。', minecraftSentence: '史蒂夫收集了好多羊毛，像棉花一样软，做成白色的床铺。' },
            { char: '顶', pinyin: 'dǐng', meaning: '最高处', words: ['山顶', '屋顶'], example: '我们爬到了山顶。', minecraftSentence: '史蒂夫站在山顶往下看，整个村庄和农田都一览无余。' },
            { char: '伙', pinyin: 'huǒ', meaning: '同伴，一起做事的人', words: ['伙伴', '小伙'], example: '他是我最好的伙伴。', minecraftSentence: '史蒂夫和他的伙伴一起下矿，两个人合作比一个人安全多了。' },
            { char: '百', pinyin: 'bǎi', meaning: '数字100', words: ['一百', '百分'], example: '我考了一百分。', minecraftSentence: '史蒂夫的箱子里攒了上百块铁锭，够打一整套铁装备了。' },
            { char: '用', pinyin: 'yòng', meaning: '使用', words: ['用处', '使用'], example: '这把尺子很有用。', minecraftSentence: '钻石镐比铁镐好用多了，挖黑曜石又快又省力。' },
            { char: '亮', pinyin: 'liàng', meaning: '有光，明亮', words: ['明亮', '亮光'], example: '教室里很明亮。', minecraftSentence: '史蒂夫在矿洞里插上火把，四周一下子就亮了起来。' },
            { char: '心', pinyin: 'xīn', meaning: '内心，心脏', words: ['开心', '小心'], example: '今天我很开心。', minecraftSentence: '走在悬崖边上要小心，史蒂夫提醒自己每一步都不能大意。' },
            { char: '澡', pinyin: 'zǎo', meaning: '洗身体', words: ['洗澡', '澡堂'], example: '睡觉前要洗澡。', minecraftSentence: '从下界回来浑身烟灰味，史蒂夫跳进河里痛痛快快洗了个澡。' },
            { char: '妈', pinyin: 'mā', meaning: '母亲', words: ['妈妈', '大妈'], example: '妈妈做的饭最好吃。', minecraftSentence: '村庄里的铁傀儡就像妈妈一样，一直守护着村民不受怪物伤害。' }
        ]
    },
    {
        id: 'L1-2',        level: 1,
        title: '第2课：一年级识字·入门级',
        characters: [
            { char: '羊', pinyin: 'yáng', meaning: '一种家畜', words: ['山羊', '羊毛'], example: '草地上有一群羊。', minecraftSentence: '草原上到处都是羊，史蒂夫剪了好多羊毛回去做床。' },
            { char: '吗', pinyin: 'ma', meaning: '疑问语气词', words: ['好吗', '是吗'], example: '你吃饭了吗？', minecraftSentence: '史蒂夫问伙伴：你带够火把了吗？矿洞里可黑了。' },
            { char: '秋', pinyin: 'qiū', meaning: '秋天，一年第三季', words: ['秋天', '秋风'], example: '秋天树叶变黄了。', minecraftSentence: '秋天到了，农田里的小麦全变成金黄色，可以收割了。' },
            { char: '坪', pinyin: 'píng', meaning: '平坦的场地', words: ['草坪', '坪地'], example: '孩子们在草坪上玩耍。', minecraftSentence: '史蒂夫把门前的草坪整理平整，准备在上面建一个花园。' },
            { char: '字', pinyin: 'zì', meaning: '文字，书写符号', words: ['写字', '汉字'], example: '这个字写得真漂亮。', minecraftSentence: '告示牌上的字太小了，史蒂夫凑近才看清写的是"小心岩浆"。' },
            { char: '熟', pinyin: 'shú', meaning: '食物煮好；熟练', words: ['成熟', '熟悉'], example: '西瓜熟了，又大又甜。', minecraftSentence: '小麦长到金黄就是熟了，这时候收割才能拿到最多的种子。' },
            { char: '和', pinyin: 'hé', meaning: '跟，与；和平', words: ['和平', '和好'], example: '我和弟弟一起玩。', minecraftSentence: '史蒂夫和村民和平相处，用绿宝石和他们交换面包。' },
            { char: '牙', pinyin: 'yá', meaning: '嘴里咀嚼的器官', words: ['牙齿', '刷牙'], example: '小朋友要保护好牙齿。', minecraftSentence: '僵尸张开嘴露出尖尖的牙，史蒂夫赶紧举起剑防御。' },
            { char: '钟', pinyin: 'zhōng', meaning: '计时器；铃', words: ['时钟', '钟声'], example: '墙上的钟指向八点。', minecraftSentence: '村庄中央挂着一口大钟，敲响钟声村民就会跑回家躲避。' },
            { char: '五', pinyin: 'wǔ', meaning: '数字5', words: ['五个', '五颜六色'], example: '我有五个好朋友。', minecraftSentence: '史蒂夫在工作台上摆了五块铁锭，合成了一个铁头盔。' },
            { char: '咬', pinyin: 'yǎo', meaning: '用牙齿夹住', words: ['咬住', '咬人'], example: '小狗轻轻咬住了骨头。', minecraftSentence: '野狼扑过来一口咬住了史蒂夫的手臂，他赶紧拿剑反击。' },
            { char: '猴', pinyin: 'hóu', meaning: '灵活的灵长类动物', words: ['猴子', '猴王'], example: '猴子最爱吃香蕉。', minecraftSentence: '丛林里的鹦鹉上蹿下跳，活泼得像一群小猴子。' },
            { char: '头', pinyin: 'tóu', meaning: '身体最上面的部分', words: ['头发', '点头'], example: '他点了点头表示同意。', minecraftSentence: '苦力怕悄悄走到史蒂夫头顶上方，差点把他吓一跳。' },
            { char: '咚', pinyin: 'dōng', meaning: '象声词，沉重的撞击声', words: ['咚咚', '咕咚'], example: '有人咚咚咚地敲门。', minecraftSentence: '半夜传来咚咚的敲门声，史蒂夫从窗户一看，是僵尸在撞门。' },
            { char: '爸', pinyin: 'bà', meaning: '父亲', words: ['爸爸', '爸妈'], example: '爸爸教我骑自行车。', minecraftSentence: '史蒂夫的爸爸教他怎么用熔炉炼铁，这是生存的第一课。' },
            { char: '牛', pinyin: 'niú', meaning: '一种大型家畜', words: ['牛奶', '水牛'], example: '牛在草地上吃草。', minecraftSentence: '史蒂夫拿着桶靠近牛，挤了满满一桶牛奶带回家。' },
            { char: '叶', pinyin: 'yè', meaning: '植物的叶片', words: ['树叶', '叶子'], example: '秋天树叶纷纷落下。', minecraftSentence: '砍倒橡树后，树叶慢慢消失，偶尔会掉下苹果和树苗。' },
            { char: '自', pinyin: 'zì', meaning: '自己', words: ['自己', '自然'], example: '这件事我自己能做。', minecraftSentence: '生存模式里什么都要靠自己，没人会帮你挖矿盖房子。' },
            { char: '已', pinyin: 'yǐ', meaning: '已经，表示完成', words: ['已经', '已知'], example: '作业已经写完了。', minecraftSentence: '天已经黑了，史蒂夫赶紧关上门，怪物随时会出现。' },
            { char: '娘', pinyin: 'niáng', meaning: '母亲；年轻女子', words: ['姑娘', '娘亲'], example: '那个姑娘唱歌真好听。', minecraftSentence: '村庄里有个姑娘专门卖地图，史蒂夫找她买了一张海洋探险图。' },
            { char: '迟', pinyin: 'chí', meaning: '晚，慢', words: ['迟到', '迟早'], example: '今天上学迟到了。', minecraftSentence: '回家的路太远，史蒂夫走得太迟，天黑后被骷髅射了一箭。' },
            { char: '通', pinyin: 'tōng', meaning: '没有阻碍，可以穿过', words: ['通过', '交通'], example: '这条路可以通到学校。', minecraftSentence: '史蒂夫挖了一条隧道，直接通到矿洞深处，再也不用绕路了。' },
            { char: '风', pinyin: 'fēng', meaning: '空气流动', words: ['大风', '风景'], example: '今天风很大。', minecraftSentence: '站在高山上风呼呼地吹，史蒂夫差点被吹下悬崖。' },
            { char: '儿', pinyin: 'ér', meaning: '小孩；儿子', words: ['儿子', '女儿'], example: '他是家里最小的儿子。', minecraftSentence: '村民家的小儿子跟在铁傀儡身后跑来跑去，一点也不怕。' },
            { char: '九', pinyin: 'jiǔ', meaning: '数字9', words: ['九个', '九月'], example: '九月开学了。', minecraftSentence: '史蒂夫连续挖了九层才到基岩，背包里装满了各种矿石。' },
            { char: '舌', pinyin: 'shé', meaning: '口腔里辨味的器官', words: ['舌头', '口舌'], example: '吃了辣椒舌头好辣。', minecraftSentence: '史蒂夫尝了一口河豚，舌头又麻又痛，还中了毒。' },
            { char: '地', pinyin: 'dì', meaning: '大地，地面', words: ['土地', '地方'], example: '种子种在地里会发芽。', minecraftSentence: '史蒂夫用锄头翻好地，在松软的土里种下了胡萝卜种子。' },
            { char: '手', pinyin: 'shǒu', meaning: '人体上肢前端', words: ['双手', '手指'], example: '我用手画了一幅画。', minecraftSentence: '史蒂夫空着手打不过怪物，得赶紧合成一把木剑拿在手里。' },
            { char: '开', pinyin: 'kāi', meaning: '打开，开始', words: ['开门', '开心'], example: '请把窗户打开。', minecraftSentence: '史蒂夫打开宝箱，里面竟然有一颗钻石，太开心了！' },
            { char: '熊', pinyin: 'xióng', meaning: '一种大型哺乳动物', words: ['熊猫', '北极熊'], example: '熊猫最爱吃竹子。', minecraftSentence: '雪地里遇到一只北极熊，史蒂夫不敢靠近，远远地绕开了。' }
        ]
    },
    {
        id: 'L1-3',        level: 1,
        title: '第3课：一年级识字·入门级',
        characters: [
            { char: '追', pinyin: 'zhuī', meaning: '跟在后面赶', words: ['追赶', '追上'], example: '小猫追着蝴蝶跑。', minecraftSentence: '苦力怕在后面追，史蒂夫拼命跑，差一点就被炸到了。' },
            { char: '不', pinyin: 'bù', meaning: '否定，表示没有', words: ['不行', '不要'], example: '我不想吃青菜。', minecraftSentence: '晚上出门不带剑可不行，到处都是怪物。' },
            { char: '空', pinyin: 'kōng', meaning: '里面没有东西；天空', words: ['天空', '空气'], example: '天空中飘着白云。', minecraftSentence: '背包空了，史蒂夫得回家把东西放进箱子再出发。' },
            { char: '他', pinyin: 'tā', meaning: '指另一个男性', words: ['他们', '其他'], example: '他是我的同学。', minecraftSentence: '史蒂夫让他的伙伴守在洞口，自己一个人下去探路。' },
            { char: '左', pinyin: 'zuǒ', meaning: '方向，与右相对', words: ['左边', '左手'], example: '学校在路的左边。', minecraftSentence: '到了岔路口往左走是矿洞，往右走是村庄，史蒂夫选了左边。' },
            { char: '少', pinyin: 'shǎo', meaning: '数量小，不多', words: ['多少', '少年'], example: '今天作业很少。', minecraftSentence: '食物越来越少，史蒂夫得赶紧去种地，不然要饿肚子了。' },
            { char: '正', pinyin: 'zhèng', meaning: '不偏，端正；正在', words: ['正好', '正在'], example: '他坐得很端正。', minecraftSentence: '史蒂夫正在挖矿，突然脚下的石头塌了，掉进了一个洞穴。' },
            { char: '膀', pinyin: 'bǎng', meaning: '胳膊上部', words: ['肩膀', '臂膀'], example: '爸爸的肩膀又宽又厚。', minecraftSentence: '搬了一天石头，史蒂夫的肩膀又酸又疼，得好好休息。' },
            { char: '二', pinyin: 'èr', meaning: '数字2', words: ['第二', '二月'], example: '我排在第二名。', minecraftSentence: '史蒂夫合成了第二把铁剑，一把自己用，一把给伙伴。' },
            { char: '翅', pinyin: 'chì', meaning: '鸟类或昆虫飞行的部分', words: ['翅膀', '鸡翅'], example: '小鸟张开翅膀飞走了。', minecraftSentence: '末影龙展开巨大的翅膀从天上俯冲下来，气势吓人极了。' },
            { char: '那', pinyin: 'nà', meaning: '指较远的事物', words: ['那个', '那里'], example: '那朵花真漂亮。', minecraftSentence: '那座山后面藏着一个村庄，史蒂夫翻过去就能找到。' },
            { char: '背', pinyin: 'bèi', meaning: '身体后面；用背驮', words: ['背包', '后背'], example: '他背着书包上学。', minecraftSentence: '史蒂夫背着满满一背包矿石，沿着梯子慢慢爬出矿洞。' },
            { char: '见', pinyin: 'jiàn', meaning: '看到', words: ['看见', '再见'], example: '我看见一只小鸟。', minecraftSentence: '走出森林，史蒂夫终于看见了远处家的屋顶，松了一口气。' },
            { char: '虎', pinyin: 'hǔ', meaning: '大型猫科猛兽', words: ['老虎', '虎口'], example: '老虎是森林之王。', minecraftSentence: '丛林里的豹猫动作敏捷，像一只小老虎在树丛间穿梭。' },
            { char: '园', pinyin: 'yuán', meaning: '种植花草树木的地方', words: ['花园', '公园'], example: '公园里有很多大树。', minecraftSentence: '史蒂夫在家旁边围了一个小花园，种满了各种颜色的花。' },
            { char: '几', pinyin: 'jǐ', meaning: '询问数量；一些', words: ['几个', '几天'], example: '你有几支铅笔？', minecraftSentence: '史蒂夫数了数箱子里还剩几块钻石，刚好够合成一把剑。' },
            { char: '中', pinyin: 'zhōng', meaning: '中间，里面', words: ['中间', '中午'], example: '他站在队伍中间。', minecraftSentence: '村庄中间有一口水井，史蒂夫发现井底下藏着一个地牢。' },
            { char: '读', pinyin: 'dú', meaning: '看文字并理解', words: ['读书', '朗读'], example: '我每天都读课外书。', minecraftSentence: '史蒂夫读了附魔台上的神秘文字，给钻石剑加上了锋利效果。' },
            { char: '别', pinyin: 'bié', meaning: '不要；区分', words: ['别人', '告别'], example: '别着急，慢慢来。', minecraftSentence: '别靠近苦力怕！它一发现你就会膨胀爆炸。' },
            { char: '摆', pinyin: 'bǎi', meaning: '放置，排列', words: ['摆放', '摇摆'], example: '把玩具摆整齐。', minecraftSentence: '史蒂夫把收集的方块整齐地摆在展示架上，像一个小博物馆。' },
            { char: '年', pinyin: 'nián', meaning: '时间单位，365天', words: ['今年', '新年'], example: '新年快乐！', minecraftSentence: '史蒂夫在这个世界生存了一年，从泥巴屋住到了石头城堡。' },
            { char: '因', pinyin: 'yīn', meaning: '原因，由于', words: ['因为', '原因'], example: '因为下雨，我们没出去玩。', minecraftSentence: '因为忘了带火把，史蒂夫在漆黑的矿洞里迷了路。' },
            { char: '六', pinyin: 'liù', meaning: '数字6', words: ['六个', '六月'], example: '骰子最大是六点。', minecraftSentence: '工作台有六个格子可以放材料，史蒂夫用它合成了一张床。' },
            { char: '仔', pinyin: 'zǎi', meaning: '仔细；幼小的', words: ['仔细', '仔猪'], example: '做作业要仔细。', minecraftSentence: '拆除红石电路要仔细，接错一根线整个机关就不灵了。' },
            { char: '蚊', pinyin: 'wén', meaning: '吸血的小飞虫', words: ['蚊子', '蚊虫'], example: '夏天蚊子特别多。', minecraftSentence: '沼泽地里到处飞着像蚊子一样烦人的幻翼，嗡嗡叫个不停。' },
            { char: '目', pinyin: 'mù', meaning: '眼睛；条目', words: ['目光', '节目'], example: '他的目光很温柔。', minecraftSentence: '末影人最怕别人的目光，你一盯着它的眼睛看，它就会发怒。' },
            { char: '沉', pinyin: 'chén', meaning: '往下落，重', words: ['沉重', '下沉'], example: '石头扔进水里就沉下去了。', minecraftSentence: '穿着铁甲掉进深水里，史蒂夫像石头一样往下沉，差点淹死。' },
            { char: '马', pinyin: 'mǎ', meaning: '一种可骑乘的动物', words: ['马匹', '骑马'], example: '草原上有一匹白马。', minecraftSentence: '史蒂夫用金苹果驯服了一匹野马，骑着它跑得比走路快多了。' },
            { char: '叫', pinyin: 'jiào', meaning: '发出声音；称呼', words: ['叫声', '叫做'], example: '公鸡天亮就叫。', minecraftSentence: '远处传来僵尸低沉的叫声，史蒂夫握紧了手里的剑。' },
            { char: '力', pinyin: 'lì', meaning: '力量，能量', words: ['力气', '努力'], example: '他力气很大。', minecraftSentence: '信标给了史蒂夫额外的力量，挖矿的速度一下子快了好多。' }
        ]
    },
    {
        id: 'L1-4',        level: 1,
        title: '第4课：一年级识字·入门级',
        characters: [
            { char: '尺', pinyin: 'chǐ', meaning: '尺字', words: ['尺字卡', '尺方块'], example: '我们正在学习“尺”这个汉字。', minecraftSentence: '在Minecraft里，我用“尺”记录这次方块冒险。' },
            { char: '们', pinyin: 'men', meaning: '们字', words: ['们字卡', '们方块'], example: '我们正在学习“们”这个汉字。', minecraftSentence: '在Minecraft里，我用“们”记录这次方块冒险。' },
            { char: '摘', pinyin: 'zhāi', meaning: '摘字', words: ['摘字卡', '摘方块'], example: '我们正在学习“摘”这个汉字。', minecraftSentence: '在Minecraft里，我用“摘”记录这次方块冒险。' },
            { char: '阴', pinyin: 'yīn', meaning: '阴字', words: ['阴字卡', '阴方块'], example: '我们正在学习“阴”这个汉字。', minecraftSentence: '在Minecraft里，我用“阴”记录这次方块冒险。' },
            { char: '哪', pinyin: 'nǎ', meaning: '哪字', words: ['哪字卡', '哪方块'], example: '我们正在学习“哪”这个汉字。', minecraftSentence: '在Minecraft里，我用“哪”记录这次方块冒险。' },
            { char: '出', pinyin: 'chū', meaning: '出字', words: ['出字卡', '出方块'], example: '我们正在学习“出”这个汉字。', minecraftSentence: '在Minecraft里，我用“出”记录这次方块冒险。' },
            { char: '八', pinyin: 'bā', meaning: '八字', words: ['八字卡', '八方块'], example: '我们正在学习“八”这个汉字。', minecraftSentence: '在Minecraft里，我用“八”记录这次方块冒险。' },
            { char: '为', pinyin: 'wèi', meaning: '为字', words: ['为字卡', '为方块'], example: '我们正在学习“为”这个汉字。', minecraftSentence: '在Minecraft里，我用“为”记录这次方块冒险。' },
            { char: '害', pinyin: 'hài', meaning: '害字', words: ['害字卡', '害方块'], example: '我们正在学习“害”这个汉字。', minecraftSentence: '在Minecraft里，我用“害”记录这次方块冒险。' },
            { char: '口', pinyin: 'kǒu', meaning: '口字', words: ['口字卡', '口方块'], example: '我们正在学习“口”这个汉字。', minecraftSentence: '在Minecraft里，我用“口”记录这次方块冒险。' },
            { char: '鸟', pinyin: 'niǎo', meaning: '鸟字', words: ['鸟字卡', '鸟方块'], example: '我们正在学习“鸟”这个汉字。', minecraftSentence: '在Minecraft里，我用“鸟”记录这次方块冒险。' },
            { char: '鹿', pinyin: 'lù', meaning: '鹿字', words: ['鹿字卡', '鹿方块'], example: '我们正在学习“鹿”这个汉字。', minecraftSentence: '在Minecraft里，我用“鹿”记录这次方块冒险。' },
            { char: '从', pinyin: 'cóng', meaning: '从字', words: ['从字卡', '从方块'], example: '我们正在学习“从”这个汉字。', minecraftSentence: '在Minecraft里，我用“从”记录这次方块冒险。' },
            { char: '语', pinyin: 'yǔ', meaning: '语字', words: ['语字卡', '语方块'], example: '我们正在学习“语”这个汉字。', minecraftSentence: '在Minecraft里，我用“语”记录这次方块冒险。' },
            { char: '扔', pinyin: 'rēng', meaning: '扔字', words: ['扔字卡', '扔方块'], example: '我们正在学习“扔”这个汉字。', minecraftSentence: '在Minecraft里，我用“扔”记录这次方块冒险。' },
            { char: '吵', pinyin: 'chǎo', meaning: '吵字', words: ['吵字卡', '吵方块'], example: '我们正在学习“吵”这个汉字。', minecraftSentence: '在Minecraft里，我用“吵”记录这次方块冒险。' },
            { char: '此', pinyin: 'cǐ', meaning: '此字', words: ['此字卡', '此方块'], example: '我们正在学习“此”这个汉字。', minecraftSentence: '在Minecraft里，我用“此”记录这次方块冒险。' },
            { char: '回', pinyin: 'huí', meaning: '回字', words: ['回字卡', '回方块'], example: '我们正在学习“回”这个汉字。', minecraftSentence: '在Minecraft里，我用“回”记录这次方块冒险。' },
            { char: '午', pinyin: 'wǔ', meaning: '午字', words: ['午字卡', '午方块'], example: '我们正在学习“午”这个汉字。', minecraftSentence: '在Minecraft里，我用“午”记录这次方块冒险。' },
            { char: '文', pinyin: 'wén', meaning: '文字', words: ['文字卡', '文方块'], example: '我们正在学习“文”这个汉字。', minecraftSentence: '在Minecraft里，我用“文”记录这次方块冒险。' },
            { char: '一', pinyin: 'yī', meaning: '一字', words: ['一字卡', '一方块'], example: '我们正在学习“一”这个汉字。', minecraftSentence: '在Minecraft里，我用“一”记录这次方块冒险。' },
            { char: '巴', pinyin: 'bā', meaning: '巴字', words: ['巴字卡', '巴方块'], example: '我们正在学习“巴”这个汉字。', minecraftSentence: '在Minecraft里，我用“巴”记录这次方块冒险。' },
            { char: '毛', pinyin: 'máo', meaning: '毛字', words: ['毛字卡', '毛方块'], example: '我们正在学习“毛”这个汉字。', minecraftSentence: '在Minecraft里，我用“毛”记录这次方块冒险。' },
            { char: '只', pinyin: 'zhǐ', meaning: '只字', words: ['只字卡', '只方块'], example: '我们正在学习“只”这个汉字。', minecraftSentence: '在Minecraft里，我用“只”记录这次方块冒险。' },
            { char: '干', pinyin: 'gàn', meaning: '干字', words: ['干字卡', '干方块'], example: '我们正在学习“干”这个汉字。', minecraftSentence: '在Minecraft里，我用“干”记录这次方块冒险。' },
            { char: '掉', pinyin: 'diào', meaning: '掉字', words: ['掉字卡', '掉方块'], example: '我们正在学习“掉”这个汉字。', minecraftSentence: '在Minecraft里，我用“掉”记录这次方块冒险。' },
            { char: '决', pinyin: 'jué', meaning: '决字', words: ['决字卡', '决方块'], example: '我们正在学习“决”这个汉字。', minecraftSentence: '在Minecraft里，我用“决”记录这次方块冒险。' },
            { char: '右', pinyin: 'yòu', meaning: '右字', words: ['右字卡', '右方块'], example: '我们正在学习“右”这个汉字。', minecraftSentence: '在Minecraft里，我用“右”记录这次方块冒险。' },
            { char: '遍', pinyin: 'biàn', meaning: '遍字', words: ['遍字卡', '遍方块'], example: '我们正在学习“遍”这个汉字。', minecraftSentence: '在Minecraft里，我用“遍”记录这次方块冒险。' },
            { char: '拼', pinyin: 'pīn', meaning: '拼字', words: ['拼字卡', '拼方块'], example: '我们正在学习“拼”这个汉字。', minecraftSentence: '在Minecraft里，我用“拼”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-5',
        level: 1,
        title: '第5课：一年级识字·入门级',
        characters: [
            { char: '经', pinyin: 'jīng', meaning: '经字', words: ['经字卡', '经方块'], example: '我们正在学习“经”这个汉字。', minecraftSentence: '在Minecraft里，我用“经”记录这次方块冒险。' },
            { char: '月', pinyin: 'yuè', meaning: '月字', words: ['月字卡', '月方块'], example: '我们正在学习“月”这个汉字。', minecraftSentence: '在Minecraft里，我用“月”记录这次方块冒险。' },
            { char: '十', pinyin: 'shí', meaning: '十字', words: ['十字卡', '十方块'], example: '我们正在学习“十”这个汉字。', minecraftSentence: '在Minecraft里，我用“十”记录这次方块冒险。' },
            { char: '晶', pinyin: 'jīng', meaning: '晶字', words: ['晶字卡', '晶方块'], example: '我们正在学习“晶”这个汉字。', minecraftSentence: '在Minecraft里，我用“晶”记录这次方块冒险。' },
            { char: '本', pinyin: 'běn', meaning: '本字', words: ['本字卡', '本方块'], example: '我们正在学习“本”这个汉字。', minecraftSentence: '在Minecraft里，我用“本”记录这次方块冒险。' },
            { char: '啊', pinyin: 'a', meaning: '啊字', words: ['啊字卡', '啊方块'], example: '我们正在学习“啊”这个汉字。', minecraftSentence: '在Minecraft里，我用“啊”记录这次方块冒险。' },
            { char: '王', pinyin: 'wáng', meaning: '王字', words: ['王字卡', '王方块'], example: '我们正在学习“王”这个汉字。', minecraftSentence: '在Minecraft里，我用“王”记录这次方块冒险。' },
            { char: '啦', pinyin: 'la', meaning: '啦字', words: ['啦字卡', '啦方块'], example: '我们正在学习“啦”这个汉字。', minecraftSentence: '在Minecraft里，我用“啦”记录这次方块冒险。' },
            { char: '可', pinyin: 'kě', meaning: '可字', words: ['可字卡', '可方块'], example: '我们正在学习“可”这个汉字。', minecraftSentence: '在Minecraft里，我用“可”记录这次方块冒险。' },
            { char: '才', pinyin: 'cái', meaning: '才字', words: ['才字卡', '才方块'], example: '我们正在学习“才”这个汉字。', minecraftSentence: '在Minecraft里，我用“才”记录这次方块冒险。' },
            { char: '盒', pinyin: 'hé', meaning: '盒字', words: ['盒字卡', '盒方块'], example: '我们正在学习“盒”这个汉字。', minecraftSentence: '在Minecraft里，我用“盒”记录这次方块冒险。' },
            { char: '领', pinyin: 'lǐng', meaning: '领字', words: ['领字卡', '领方块'], example: '我们正在学习“领”这个汉字。', minecraftSentence: '在Minecraft里，我用“领”记录这次方块冒险。' },
            { char: '盆', pinyin: 'pén', meaning: '盆字', words: ['盆字卡', '盆方块'], example: '我们正在学习“盆”这个汉字。', minecraftSentence: '在Minecraft里，我用“盆”记录这次方块冒险。' },
            { char: '展', pinyin: 'zhǎn', meaning: '展字', words: ['展字卡', '展方块'], example: '我们正在学习“展”这个汉字。', minecraftSentence: '在Minecraft里，我用“展”记录这次方块冒险。' },
            { char: '三', pinyin: 'sān', meaning: '三字', words: ['三字卡', '三方块'], example: '我们正在学习“三”这个汉字。', minecraftSentence: '在Minecraft里，我用“三”记录这次方块冒险。' },
            { char: '石', pinyin: 'shí', meaning: '石字', words: ['石字卡', '石方块'], example: '我们正在学习“石”这个汉字。', minecraftSentence: '在Minecraft里，我用“石”记录这次方块冒险。' },
            { char: '平', pinyin: 'píng', meaning: '平字', words: ['平字卡', '平方块'], example: '我们正在学习“平”这个汉字。', minecraftSentence: '在Minecraft里，我用“平”记录这次方块冒险。' },
            { char: '公', pinyin: 'gōng', meaning: '公字', words: ['公字卡', '公方块'], example: '我们正在学习“公”这个汉字。', minecraftSentence: '在Minecraft里，我用“公”记录这次方块冒险。' },
            { char: '父', pinyin: 'fù', meaning: '父字', words: ['父字卡', '父方块'], example: '我们正在学习“父”这个汉字。', minecraftSentence: '在Minecraft里，我用“父”记录这次方块冒险。' },
            { char: '您', pinyin: 'nín', meaning: '您字', words: ['您字卡', '您方块'], example: '我们正在学习“您”这个汉字。', minecraftSentence: '在Minecraft里，我用“您”记录这次方块冒险。' },
            { char: '卫', pinyin: 'wèi', meaning: '卫字', words: ['卫字卡', '卫方块'], example: '我们正在学习“卫”这个汉字。', minecraftSentence: '在Minecraft里，我用“卫”记录这次方块冒险。' },
            { char: '木', pinyin: 'mù', meaning: '木字', words: ['木字卡', '木方块'], example: '我们正在学习“木”这个汉字。', minecraftSentence: '在Minecraft里，我用“木”记录这次方块冒险。' },
            { char: '让', pinyin: 'ràng', meaning: '让字', words: ['让字卡', '让方块'], example: '我们正在学习“让”这个汉字。', minecraftSentence: '在Minecraft里，我用“让”记录这次方块冒险。' },
            { char: '先', pinyin: 'xiān', meaning: '先字', words: ['先字卡', '先方块'], example: '我们正在学习“先”这个汉字。', minecraftSentence: '在Minecraft里，我用“先”记录这次方块冒险。' },
            { char: '人', pinyin: 'rén', meaning: '人字', words: ['人字卡', '人方块'], example: '我们正在学习“人”这个汉字。', minecraftSentence: '在Minecraft里，我用“人”记录这次方块冒险。' },
            { char: '病', pinyin: 'bìng', meaning: '病字', words: ['病字卡', '病方块'], example: '我们正在学习“病”这个汉字。', minecraftSentence: '在Minecraft里，我用“病”记录这次方块冒险。' },
            { char: '四', pinyin: 'sì', meaning: '四字', words: ['四字卡', '四方块'], example: '我们正在学习“四”这个汉字。', minecraftSentence: '在Minecraft里，我用“四”记录这次方块冒险。' },
            { char: '豆', pinyin: 'dòu', meaning: '豆字', words: ['豆字卡', '豆方块'], example: '我们正在学习“豆”这个汉字。', minecraftSentence: '在Minecraft里，我用“豆”记录这次方块冒险。' },
            { char: '椅', pinyin: 'yǐ', meaning: '椅字', words: ['椅字卡', '椅方块'], example: '我们正在学习“椅”这个汉字。', minecraftSentence: '在Minecraft里，我用“椅”记录这次方块冒险。' },
            { char: '竹', pinyin: 'zhú', meaning: '竹字', words: ['竹字卡', '竹方块'], example: '我们正在学习“竹”这个汉字。', minecraftSentence: '在Minecraft里，我用“竹”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-6',
        level: 1,
        title: '第6课：一年级识字·入门级',
        characters: [
            { char: '掰', pinyin: 'bāi', meaning: '掰字', words: ['掰字卡', '掰方块'], example: '我们正在学习“掰”这个汉字。', minecraftSentence: '在Minecraft里，我用“掰”记录这次方块冒险。' },
            { char: '满', pinyin: 'mǎn', meaning: '满字', words: ['满字卡', '满方块'], example: '我们正在学习“满”这个汉字。', minecraftSentence: '在Minecraft里，我用“满”记录这次方块冒险。' },
            { char: '半', pinyin: 'bàn', meaning: '半字', words: ['半字卡', '半方块'], example: '我们正在学习“半”这个汉字。', minecraftSentence: '在Minecraft里，我用“半”记录这次方块冒险。' },
            { char: '户', pinyin: 'hù', meaning: '户字', words: ['户字卡', '户方块'], example: '我们正在学习“户”这个汉字。', minecraftSentence: '在Minecraft里，我用“户”记录这次方块冒险。' },
            { char: '野', pinyin: 'yě', meaning: '野字', words: ['野字卡', '野方块'], example: '我们正在学习“野”这个汉字。', minecraftSentence: '在Minecraft里，我用“野”记录这次方块冒险。' },
            { char: '块', pinyin: 'kuài', meaning: '块字', words: ['块字卡', '块方块'], example: '我们正在学习“块”这个汉字。', minecraftSentence: '在Minecraft里，我用“块”记录这次方块冒险。' },
            { char: '等', pinyin: 'děng', meaning: '等字', words: ['等字卡', '等方块'], example: '我们正在学习“等”这个汉字。', minecraftSentence: '在Minecraft里，我用“等”记录这次方块冒险。' },
            { char: '又', pinyin: 'yòu', meaning: '又字', words: ['又字卡', '又方块'], example: '我们正在学习“又”这个汉字。', minecraftSentence: '在Minecraft里，我用“又”记录这次方块冒险。' },
            { char: '所', pinyin: 'suǒ', meaning: '所字', words: ['所字卡', '所方块'], example: '我们正在学习“所”这个汉字。', minecraftSentence: '在Minecraft里，我用“所”记录这次方块冒险。' },
            { char: '要', pinyin: 'yào', meaning: '要字', words: ['要字卡', '要方块'], example: '我们正在学习“要”这个汉字。', minecraftSentence: '在Minecraft里，我用“要”记录这次方块冒险。' },
            { char: '朵', pinyin: 'duǒ', meaning: '朵字', words: ['朵字卡', '朵方块'], example: '我们正在学习“朵”这个汉字。', minecraftSentence: '在Minecraft里，我用“朵”记录这次方块冒险。' },
            { char: '天', pinyin: 'tiān', meaning: '天字', words: ['天字卡', '天方块'], example: '我们正在学习“天”这个汉字。', minecraftSentence: '在Minecraft里，我用“天”记录这次方块冒险。' },
            { char: '当', pinyin: 'dāng', meaning: '当字', words: ['当字卡', '当方块'], example: '我们正在学习“当”这个汉字。', minecraftSentence: '在Minecraft里，我用“当”记录这次方块冒险。' },
            { char: '捧', pinyin: 'pěng', meaning: '捧字', words: ['捧字卡', '捧方块'], example: '我们正在学习“捧”这个汉字。', minecraftSentence: '在Minecraft里，我用“捧”记录这次方块冒险。' },
            { char: '珠', pinyin: 'zhū', meaning: '珠字', words: ['珠字卡', '珠方块'], example: '我们正在学习“珠”这个汉字。', minecraftSentence: '在Minecraft里，我用“珠”记录这次方块冒险。' },
            { char: '来', pinyin: 'lái', meaning: '来字', words: ['来字卡', '来方块'], example: '我们正在学习“来”这个汉字。', minecraftSentence: '在Minecraft里，我用“来”记录这次方块冒险。' },
            { char: '去', pinyin: 'qù', meaning: '去字', words: ['去字卡', '去方块'], example: '我们正在学习“去”这个汉字。', minecraftSentence: '在Minecraft里，我用“去”记录这次方块冒险。' },
            { char: '理', pinyin: 'lǐ', meaning: '理字', words: ['理字卡', '理方块'], example: '我们正在学习“理”这个汉字。', minecraftSentence: '在Minecraft里，我用“理”记录这次方块冒险。' },
            { char: '湖', pinyin: 'hú', meaning: '湖字', words: ['湖字卡', '湖方块'], example: '我们正在学习“湖”这个汉字。', minecraftSentence: '在Minecraft里，我用“湖”记录这次方块冒险。' },
            { char: '注', pinyin: 'zhù', meaning: '注字', words: ['注字卡', '注方块'], example: '我们正在学习“注”这个汉字。', minecraftSentence: '在Minecraft里，我用“注”记录这次方块冒险。' },
            { char: '子', pinyin: 'zi', meaning: '子字', words: ['子字卡', '子方块'], example: '我们正在学习“子”这个汉字。', minecraftSentence: '在Minecraft里，我用“子”记录这次方块冒险。' },
            { char: '也', pinyin: 'yě', meaning: '也字', words: ['也字卡', '也方块'], example: '我们正在学习“也”这个汉字。', minecraftSentence: '在Minecraft里，我用“也”记录这次方块冒险。' },
            { char: '棍', pinyin: 'gùn', meaning: '棍字', words: ['棍字卡', '棍方块'], example: '我们正在学习“棍”这个汉字。', minecraftSentence: '在Minecraft里，我用“棍”记录这次方块冒险。' },
            { char: '比', pinyin: 'bǐ', meaning: '比字', words: ['比字卡', '比方块'], example: '我们正在学习“比”这个汉字。', minecraftSentence: '在Minecraft里，我用“比”记录这次方块冒险。' },
            { char: '刀', pinyin: 'dāo', meaning: '刀字', words: ['刀字卡', '刀方块'], example: '我们正在学习“刀”这个汉字。', minecraftSentence: '在Minecraft里，我用“刀”记录这次方块冒险。' },
            { char: '立', pinyin: 'lì', meaning: '立字', words: ['立字卡', '立方块'], example: '我们正在学习“立”这个汉字。', minecraftSentence: '在Minecraft里，我用“立”记录这次方块冒险。' },
            { char: '音', pinyin: 'yīn', meaning: '音字', words: ['音字卡', '音方块'], example: '我们正在学习“音”这个汉字。', minecraftSentence: '在Minecraft里，我用“音”记录这次方块冒险。' },
            { char: '梳', pinyin: 'shū', meaning: '梳字', words: ['梳字卡', '梳方块'], example: '我们正在学习“梳”这个汉字。', minecraftSentence: '在Minecraft里，我用“梳”记录这次方块冒险。' },
            { char: '水', pinyin: 'shuǐ', meaning: '水字', words: ['水字卡', '水方块'], example: '我们正在学习“水”这个汉字。', minecraftSentence: '在Minecraft里，我用“水”记录这次方块冒险。' },
            { char: '检', pinyin: 'jiǎn', meaning: '检字', words: ['检字卡', '检方块'], example: '我们正在学习“检”这个汉字。', minecraftSentence: '在Minecraft里，我用“检”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-7',
        level: 1,
        title: '第7课：一年级识字·入门级',
        characters: [
            { char: '新', pinyin: 'xīn', meaning: '新字', words: ['新字卡', '新方块'], example: '我们正在学习“新”这个汉字。', minecraftSentence: '在Minecraft里，我用“新”记录这次方块冒险。' },
            { char: '过', pinyin: 'guò', meaning: '过字', words: ['过字卡', '过方块'], example: '我们正在学习“过”这个汉字。', minecraftSentence: '在Minecraft里，我用“过”记录这次方块冒险。' },
            { char: '男', pinyin: 'nán', meaning: '男字', words: ['男字卡', '男方块'], example: '我们正在学习“男”这个汉字。', minecraftSentence: '在Minecraft里，我用“男”记录这次方块冒险。' },
            { char: '雨', pinyin: 'yǔ', meaning: '雨字', words: ['雨字卡', '雨方块'], example: '我们正在学习“雨”这个汉字。', minecraftSentence: '在Minecraft里，我用“雨”记录这次方块冒险。' },
            { char: '织', pinyin: 'zhī', meaning: '织字', words: ['织字卡', '织方块'], example: '我们正在学习“织”这个汉字。', minecraftSentence: '在Minecraft里，我用“织”记录这次方块冒险。' },
            { char: '孩', pinyin: 'hái', meaning: '孩字', words: ['孩字卡', '孩方块'], example: '我们正在学习“孩”这个汉字。', minecraftSentence: '在Minecraft里，我用“孩”记录这次方块冒险。' },
            { char: '呀', pinyin: 'ya', meaning: '呀字', words: ['呀字卡', '呀方块'], example: '我们正在学习“呀”这个汉字。', minecraftSentence: '在Minecraft里，我用“呀”记录这次方块冒险。' },
            { char: '伴', pinyin: 'bàn', meaning: '伴字', words: ['伴字卡', '伴方块'], example: '我们正在学习“伴”这个汉字。', minecraftSentence: '在Minecraft里，我用“伴”记录这次方块冒险。' },
            { char: '兴', pinyin: 'xīng', meaning: '兴字', words: ['兴字卡', '兴方块'], example: '我们正在学习“兴”这个汉字。', minecraftSentence: '在Minecraft里，我用“兴”记录这次方块冒险。' },
            { char: '篮', pinyin: 'lán', meaning: '篮字', words: ['篮字卡', '篮方块'], example: '我们正在学习“篮”这个汉字。', minecraftSentence: '在Minecraft里，我用“篮”记录这次方块冒险。' },
            { char: '定', pinyin: 'dìng', meaning: '定字', words: ['定字卡', '定方块'], example: '我们正在学习“定”这个汉字。', minecraftSentence: '在Minecraft里，我用“定”记录这次方块冒险。' },
            { char: '壁', pinyin: 'bì', meaning: '壁字', words: ['壁字卡', '壁方块'], example: '我们正在学习“壁”这个汉字。', minecraftSentence: '在Minecraft里，我用“壁”记录这次方块冒险。' },
            { char: '个', pinyin: 'gè', meaning: '个字', words: ['个字卡', '个方块'], example: '我们正在学习“个”这个汉字。', minecraftSentence: '在Minecraft里，我用“个”记录这次方块冒险。' },
            { char: '有', pinyin: 'yǒu', meaning: '有字', words: ['有字卡', '有方块'], example: '我们正在学习“有”这个汉字。', minecraftSentence: '在Minecraft里，我用“有”记录这次方块冒险。' },
            { char: '扛', pinyin: 'káng', meaning: '扛字', words: ['扛字卡', '扛方块'], example: '我们正在学习“扛”这个汉字。', minecraftSentence: '在Minecraft里，我用“扛”记录这次方块冒险。' },
            { char: '吧', pinyin: 'ba', meaning: '吧字', words: ['吧字卡', '吧方块'], example: '我们正在学习“吧”这个汉字。', minecraftSentence: '在Minecraft里，我用“吧”记录这次方块冒险。' },
            { char: '山', pinyin: 'shān', meaning: '山字', words: ['山字卡', '山方块'], example: '我们正在学习“山”这个汉字。', minecraftSentence: '在Minecraft里，我用“山”记录这次方块冒险。' },
            { char: '生', pinyin: 'shēng', meaning: '生字', words: ['生字卡', '生方块'], example: '我们正在学习“生”这个汉字。', minecraftSentence: '在Minecraft里，我用“生”记录这次方块冒险。' },
            { char: '斗', pinyin: 'dòu', meaning: '斗字', words: ['斗字卡', '斗方块'], example: '我们正在学习“斗”这个汉字。', minecraftSentence: '在Minecraft里，我用“斗”记录这次方块冒险。' },
            { char: '拦', pinyin: 'lán', meaning: '拦字', words: ['拦字卡', '拦方块'], example: '我们正在学习“拦”这个汉字。', minecraftSentence: '在Minecraft里，我用“拦”记录这次方块冒险。' },
            { char: '长', pinyin: 'zhǎng', meaning: '长字', words: ['长字卡', '长方块'], example: '我们正在学习“长”这个汉字。', minecraftSentence: '在Minecraft里，我用“长”记录这次方块冒险。' },
            { char: '转', pinyin: 'zhuǎn', meaning: '转字', words: ['转字卡', '转方块'], example: '我们正在学习“转”这个汉字。', minecraftSentence: '在Minecraft里，我用“转”记录这次方块冒险。' },
            { char: '表', pinyin: 'biǎo', meaning: '表字', words: ['表字卡', '表方块'], example: '我们正在学习“表”这个汉字。', minecraftSentence: '在Minecraft里，我用“表”记录这次方块冒险。' },
            { char: '爬', pinyin: 'pá', meaning: '爬字', words: ['爬字卡', '爬方块'], example: '我们正在学习“爬”这个汉字。', minecraftSentence: '在Minecraft里，我用“爬”记录这次方块冒险。' },
            { char: '查', pinyin: 'chá', meaning: '查字', words: ['查字卡', '查方块'], example: '我们正在学习“查”这个汉字。', minecraftSentence: '在Minecraft里，我用“查”记录这次方块冒险。' },
            { char: '云', pinyin: 'yún', meaning: '云字', words: ['云字卡', '云方块'], example: '我们正在学习“云”这个汉字。', minecraftSentence: '在Minecraft里，我用“云”记录这次方块冒险。' },
            { char: '胖', pinyin: 'pàng', meaning: '胖字', words: ['胖字卡', '胖方块'], example: '我们正在学习“胖”这个汉字。', minecraftSentence: '在Minecraft里，我用“胖”记录这次方块冒险。' },
            { char: '女', pinyin: 'nǚ', meaning: '女字', words: ['女字卡', '女方块'], example: '我们正在学习“女”这个汉字。', minecraftSentence: '在Minecraft里，我用“女”记录这次方块冒险。' },
            { char: '息', pinyin: 'xī', meaning: '息字', words: ['息字卡', '息方块'], example: '我们正在学习“息”这个汉字。', minecraftSentence: '在Minecraft里，我用“息”记录这次方块冒险。' },
            { char: '吓', pinyin: 'xià', meaning: '吓字', words: ['吓字卡', '吓方块'], example: '我们正在学习“吓”这个汉字。', minecraftSentence: '在Minecraft里，我用“吓”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-8',
        level: 1,
        title: '第8课：一年级识字·入门级',
        characters: [
            { char: '交', pinyin: 'jiāo', meaning: '交字', words: ['交字卡', '交方块'], example: '我们正在学习“交”这个汉字。', minecraftSentence: '在Minecraft里，我用“交”记录这次方块冒险。' },
            { char: '洗', pinyin: 'xǐ', meaning: '洗字', words: ['洗字卡', '洗方块'], example: '我们正在学习“洗”这个汉字。', minecraftSentence: '在Minecraft里，我用“洗”记录这次方块冒险。' },
            { char: '第', pinyin: 'dì', meaning: '第字', words: ['第字卡', '第方块'], example: '我们正在学习“第”这个汉字。', minecraftSentence: '在Minecraft里，我用“第”记录这次方块冒险。' },
            { char: '汉', pinyin: 'hàn', meaning: '汉字', words: ['汉字卡', '汉方块'], example: '我们正在学习“汉”这个汉字。', minecraftSentence: '在Minecraft里，我用“汉”记录这次方块冒险。' },
            { char: '具', pinyin: 'jù', meaning: '具字', words: ['具字卡', '具方块'], example: '我们正在学习“具”这个汉字。', minecraftSentence: '在Minecraft里，我用“具”记录这次方块冒险。' },
            { char: '小', pinyin: 'xiǎo', meaning: '小字', words: ['小字卡', '小方块'], example: '我们正在学习“小”这个汉字。', minecraftSentence: '在Minecraft里，我用“小”记录这次方块冒险。' },
            { char: '现', pinyin: 'xiàn', meaning: '现字', words: ['现字卡', '现方块'], example: '我们正在学习“现”这个汉字。', minecraftSentence: '在Minecraft里，我用“现”记录这次方块冒险。' },
            { char: '奇', pinyin: 'qí', meaning: '奇字', words: ['奇字卡', '奇方块'], example: '我们正在学习“奇”这个汉字。', minecraftSentence: '在Minecraft里，我用“奇”记录这次方块冒险。' },
            { char: '下', pinyin: 'xià', meaning: '下字', words: ['下字卡', '下方块'], example: '我们正在学习“下”这个汉字。', minecraftSentence: '在Minecraft里，我用“下”记录这次方块冒险。' },
            { char: '借', pinyin: 'jiè', meaning: '借字', words: ['借字卡', '借方块'], example: '我们正在学习“借”这个汉字。', minecraftSentence: '在Minecraft里，我用“借”记录这次方块冒险。' },
            { char: '停', pinyin: 'tíng', meaning: '停字', words: ['停字卡', '停方块'], example: '我们正在学习“停”这个汉字。', minecraftSentence: '在Minecraft里，我用“停”记录这次方块冒险。' },
            { char: '拨', pinyin: 'bō', meaning: '拨字', words: ['拨字卡', '拨方块'], example: '我们正在学习“拨”这个汉字。', minecraftSentence: '在Minecraft里，我用“拨”记录这次方块冒险。' },
            { char: '乐', pinyin: 'lè', meaning: '乐字', words: ['乐字卡', '乐方块'], example: '我们正在学习“乐”这个汉字。', minecraftSentence: '在Minecraft里，我用“乐”记录这次方块冒险。' },
            { char: '里', pinyin: 'lǐ', meaning: '里字', words: ['里字卡', '里方块'], example: '我们正在学习“里”这个汉字。', minecraftSentence: '在Minecraft里，我用“里”记录这次方块冒险。' },
            { char: '识', pinyin: 'shí', meaning: '识字', words: ['识字卡', '识方块'], example: '我们正在学习“识”这个汉字。', minecraftSentence: '在Minecraft里，我用“识”记录这次方块冒险。' },
            { char: '治', pinyin: 'zhì', meaning: '治字', words: ['治字卡', '治方块'], example: '我们正在学习“治”这个汉字。', minecraftSentence: '在Minecraft里，我用“治”记录这次方块冒险。' },
            { char: '阅', pinyin: 'yuè', meaning: '阅字', words: ['阅字卡', '阅方块'], example: '我们正在学习“阅”这个汉字。', minecraftSentence: '在Minecraft里，我用“阅”记录这次方块冒险。' },
            { char: '摇', pinyin: 'yáo', meaning: '摇字', words: ['摇字卡', '摇方块'], example: '我们正在学习“摇”这个汉字。', minecraftSentence: '在Minecraft里，我用“摇”记录这次方块冒险。' },
            { char: '铅', pinyin: 'qiān', meaning: '铅字', words: ['铅字卡', '铅方块'], example: '我们正在学习“铅”这个汉字。', minecraftSentence: '在Minecraft里，我用“铅”记录这次方块冒险。' },
            { char: '透', pinyin: 'tòu', meaning: '透字', words: ['透字卡', '透方块'], example: '我们正在学习“透”这个汉字。', minecraftSentence: '在Minecraft里，我用“透”记录这次方块冒险。' },
            { char: '燕', pinyin: 'yàn', meaning: '燕字', words: ['燕字卡', '燕方块'], example: '我们正在学习“燕”这个汉字。', minecraftSentence: '在Minecraft里，我用“燕”记录这次方块冒险。' },
            { char: '帮', pinyin: 'bāng', meaning: '帮字', words: ['帮字卡', '帮方块'], example: '我们正在学习“帮”这个汉字。', minecraftSentence: '在Minecraft里，我用“帮”记录这次方块冒险。' },
            { char: '土', pinyin: 'tǔ', meaning: '土字', words: ['土字卡', '土方块'], example: '我们正在学习“土”这个汉字。', minecraftSentence: '在Minecraft里，我用“土”记录这次方块冒险。' },
            { char: '面', pinyin: 'miàn', meaning: '面字', words: ['面字卡', '面方块'], example: '我们正在学习“面”这个汉字。', minecraftSentence: '在Minecraft里，我用“面”记录这次方块冒险。' },
            { char: '了', pinyin: 'le', meaning: '了字', words: ['了字卡', '了方块'], example: '我们正在学习“了”这个汉字。', minecraftSentence: '在Minecraft里，我用“了”记录这次方块冒险。' },
            { char: '日', pinyin: 'rì', meaning: '日字', words: ['日字卡', '日方块'], example: '我们正在学习“日”这个汉字。', minecraftSentence: '在Minecraft里，我用“日”记录这次方块冒险。' },
            { char: '己', pinyin: 'jǐ', meaning: '己字', words: ['己字卡', '己方块'], example: '我们正在学习“己”这个汉字。', minecraftSentence: '在Minecraft里，我用“己”记录这次方块冒险。' },
            { char: '好', pinyin: 'hǎo', meaning: '好字', words: ['好字卡', '好方块'], example: '我们正在学习“好”这个汉字。', minecraftSentence: '在Minecraft里，我用“好”记录这次方块冒险。' },
            { char: '工', pinyin: 'gōng', meaning: '工字', words: ['工字卡', '工方块'], example: '我们正在学习“工”这个汉字。', minecraftSentence: '在Minecraft里，我用“工”记录这次方块冒险。' },
            { char: '东', pinyin: 'dōng', meaning: '东字', words: ['东字卡', '东方块'], example: '我们正在学习“东”这个汉字。', minecraftSentence: '在Minecraft里，我用“东”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-9',
        level: 1,
        title: '第9课：一年级识字·入门级',
        characters: [
            { char: '关', pinyin: 'guān', meaning: '关字', words: ['关字卡', '关方块'], example: '我们正在学习“关”这个汉字。', minecraftSentence: '在Minecraft里，我用“关”记录这次方块冒险。' },
            { char: '消', pinyin: 'xiāo', meaning: '消字', words: ['消字卡', '消方块'], example: '我们正在学习“消”这个汉字。', minecraftSentence: '在Minecraft里，我用“消”记录这次方块冒险。' },
            { char: '厂', pinyin: 'chǎng', meaning: '厂字', words: ['厂字卡', '厂方块'], example: '我们正在学习“厂”这个汉字。', minecraftSentence: '在Minecraft里，我用“厂”记录这次方块冒险。' },
            { char: '腰', pinyin: 'yāo', meaning: '腰字', words: ['腰字卡', '腰方块'], example: '我们正在学习“腰”这个汉字。', minecraftSentence: '在Minecraft里，我用“腰”记录这次方块冒险。' },
            { char: '火', pinyin: 'huǒ', meaning: '火字', words: ['火字卡', '火方块'], example: '我们正在学习“火”这个汉字。', minecraftSentence: '在Minecraft里，我用“火”记录这次方块冒险。' },
            { char: '忙', pinyin: 'máng', meaning: '忙字', words: ['忙字卡', '忙方块'], example: '我们正在学习“忙”这个汉字。', minecraftSentence: '在Minecraft里，我用“忙”记录这次方块冒险。' },
            { char: '难', pinyin: 'nán', meaning: '难字', words: ['难字卡', '难方块'], example: '我们正在学习“难”这个汉字。', minecraftSentence: '在Minecraft里，我用“难”记录这次方块冒险。' },
            { char: '意', pinyin: 'yì', meaning: '意字', words: ['意字卡', '意方块'], example: '我们正在学习“意”这个汉字。', minecraftSentence: '在Minecraft里，我用“意”记录这次方块冒险。' },
            { char: '汤', pinyin: 'tāng', meaning: '汤字', words: ['汤字卡', '汤方块'], example: '我们正在学习“汤”这个汉字。', minecraftSentence: '在Minecraft里，我用“汤”记录这次方块冒险。' },
            { char: '是', pinyin: 'shì', meaning: '是字', words: ['是字卡', '是方块'], example: '我们正在学习“是”这个汉字。', minecraftSentence: '在Minecraft里，我用“是”记录这次方块冒险。' },
            { char: '巾', pinyin: 'jīn', meaning: '巾字', words: ['巾字卡', '巾方块'], example: '我们正在学习“巾”这个汉字。', minecraftSentence: '在Minecraft里，我用“巾”记录这次方块冒险。' },
            { char: '些', pinyin: 'xiē', meaning: '些字', words: ['些字卡', '些方块'], example: '我们正在学习“些”这个汉字。', minecraftSentence: '在Minecraft里，我用“些”记录这次方块冒险。' },
            { char: '脸', pinyin: 'liǎn', meaning: '脸字', words: ['脸字卡', '脸方块'], example: '我们正在学习“脸”这个汉字。', minecraftSentence: '在Minecraft里，我用“脸”记录这次方块冒险。' },
            { char: '棵', pinyin: 'kē', meaning: '棵字', words: ['棵字卡', '棵方块'], example: '我们正在学习“棵”这个汉字。', minecraftSentence: '在Minecraft里，我用“棵”记录这次方块冒险。' },
            { char: '上', pinyin: 'shàng', meaning: '上字', words: ['上字卡', '上方块'], example: '我们正在学习“上”这个汉字。', minecraftSentence: '在Minecraft里，我用“上”记录这次方块冒险。' },
            { char: '呢', pinyin: 'ne', meaning: '呢字', words: ['呢字卡', '呢方块'], example: '我们正在学习“呢”这个汉字。', minecraftSentence: '在Minecraft里，我用“呢”记录这次方块冒险。' },
            { char: '往', pinyin: 'wǎng', meaning: '往字', words: ['往字卡', '往方块'], example: '我们正在学习“往”这个汉字。', minecraftSentence: '在Minecraft里，我用“往”记录这次方块冒险。' },
            { char: '共', pinyin: 'gòng', meaning: '共字', words: ['共字卡', '共方块'], example: '我们正在学习“共”这个汉字。', minecraftSentence: '在Minecraft里，我用“共”记录这次方块冒险。' },
            { char: '快', pinyin: 'kuài', meaning: '快字', words: ['快字卡', '快方块'], example: '我们正在学习“快”这个汉字。', minecraftSentence: '在Minecraft里，我用“快”记录这次方块冒险。' },
            { char: '灯', pinyin: 'dēng', meaning: '灯字', words: ['灯字卡', '灯方块'], example: '我们正在学习“灯”这个汉字。', minecraftSentence: '在Minecraft里，我用“灯”记录这次方块冒险。' },
            { char: '扇', pinyin: 'shàn', meaning: '扇字', words: ['扇字卡', '扇方块'], example: '我们正在学习“扇”这个汉字。', minecraftSentence: '在Minecraft里，我用“扇”记录这次方块冒险。' },
            { char: '位', pinyin: 'wèi', meaning: '位字', words: ['位字卡', '位方块'], example: '我们正在学习“位”这个汉字。', minecraftSentence: '在Minecraft里，我用“位”记录这次方块冒险。' },
            { char: '她', pinyin: 'tā', meaning: '她字', words: ['她字卡', '她方块'], example: '我们正在学习“她”这个汉字。', minecraftSentence: '在Minecraft里，我用“她”记录这次方块冒险。' },
            { char: '书', pinyin: 'shū', meaning: '书字', words: ['书字卡', '书方块'], example: '我们正在学习“书”这个汉字。', minecraftSentence: '在Minecraft里，我用“书”记录这次方块冒险。' },
            { char: '虫', pinyin: 'chóng', meaning: '虫字', words: ['虫字卡', '虫方块'], example: '我们正在学习“虫”这个汉字。', minecraftSentence: '在Minecraft里，我用“虫”记录这次方块冒险。' },
            { char: '忘', pinyin: 'wàng', meaning: '忘字', words: ['忘字卡', '忘方块'], example: '我们正在学习“忘”这个汉字。', minecraftSentence: '在Minecraft里，我用“忘”记录这次方块冒险。' },
            { char: '我', pinyin: 'wǒ', meaning: '我字', words: ['我字卡', '我方块'], example: '我们正在学习“我”这个汉字。', minecraftSentence: '在Minecraft里，我用“我”记录这次方块冒险。' },
            { char: '结', pinyin: 'jié', meaning: '结字', words: ['结字卡', '结方块'], example: '我们正在学习“结”这个汉字。', minecraftSentence: '在Minecraft里，我用“结”记录这次方块冒险。' },
            { char: '画', pinyin: 'huà', meaning: '画字', words: ['画字卡', '画方块'], example: '我们正在学习“画”这个汉字。', minecraftSentence: '在Minecraft里，我用“画”记录这次方块冒险。' },
            { char: '田', pinyin: 'tián', meaning: '田字', words: ['田字卡', '田方块'], example: '我们正在学习“田”这个汉字。', minecraftSentence: '在Minecraft里，我用“田”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L1-10',
        level: 1,
        title: '第10课：一年级识字·入门级',
        characters: [
            { char: '禾', pinyin: 'hé', meaning: '禾字', words: ['禾字卡', '禾方块'], example: '我们正在学习“禾”这个汉字。', minecraftSentence: '在Minecraft里，我用“禾”记录这次方块冒险。' }
        ]
    },

    // ============ 第二级 基础级（一年级全量覆盖，顺序已锁定） ============
    {
        id: 'L2-1',
        level: 2,
        title: '第1课：一年级识字·基础级',
        characters: [
            { char: '足', pinyin: 'zú', meaning: '足字', words: ['足字卡', '足方块'], example: '我们正在学习“足”这个汉字。', minecraftSentence: '在Minecraft里，我用“足”记录这次方块冒险。' },
            { char: '极', pinyin: 'jí', meaning: '极字', words: ['极字卡', '极方块'], example: '我们正在学习“极”这个汉字。', minecraftSentence: '在Minecraft里，我用“极”记录这次方块冒险。' },
            { char: '丁', pinyin: 'dīng', meaning: '丁字', words: ['丁字卡', '丁方块'], example: '我们正在学习“丁”这个汉字。', minecraftSentence: '在Minecraft里，我用“丁”记录这次方块冒险。' },
            { char: '河', pinyin: 'hé', meaning: '河字', words: ['河字卡', '河方块'], example: '我们正在学习“河”这个汉字。', minecraftSentence: '在Minecraft里，我用“河”记录这次方块冒险。' },
            { char: '刘', pinyin: 'liú', meaning: '刘字', words: ['刘字卡', '刘方块'], example: '我们正在学习“刘”这个汉字。', minecraftSentence: '在Minecraft里，我用“刘”记录这次方块冒险。' },
            { char: '红', pinyin: 'hóng', meaning: '红字', words: ['红字卡', '红方块'], example: '我们正在学习“红”这个汉字。', minecraftSentence: '在Minecraft里，我用“红”记录这次方块冒险。' },
            { char: '物', pinyin: 'wù', meaning: '物字', words: ['物字卡', '物方块'], example: '我们正在学习“物”这个汉字。', minecraftSentence: '在Minecraft里，我用“物”记录这次方块冒险。' },
            { char: '兔', pinyin: 'tù', meaning: '兔字', words: ['兔字卡', '兔方块'], example: '我们正在学习“兔”这个汉字。', minecraftSentence: '在Minecraft里，我用“兔”记录这次方块冒险。' },
            { char: '万', pinyin: 'wàn', meaning: '万字', words: ['万字卡', '万方块'], example: '我们正在学习“万”这个汉字。', minecraftSentence: '在Minecraft里，我用“万”记录这次方块冒险。' },
            { char: '屋', pinyin: 'wū', meaning: '屋字', words: ['屋字卡', '屋方块'], example: '我们正在学习“屋”这个汉字。', minecraftSentence: '在Minecraft里，我用“屋”记录这次方块冒险。' },
            { char: '江', pinyin: 'jiāng', meaning: '江字', words: ['江字卡', '江方块'], example: '我们正在学习“江”这个汉字。', minecraftSentence: '在Minecraft里，我用“江”记录这次方块冒险。' },
            { char: '做', pinyin: 'zuò', meaning: '做字', words: ['做字卡', '做方块'], example: '我们正在学习“做”这个汉字。', minecraftSentence: '在Minecraft里，我用“做”记录这次方块冒险。' },
            { char: '谁', pinyin: 'shuí', meaning: '谁字', words: ['谁字卡', '谁方块'], example: '我们正在学习“谁”这个汉字。', minecraftSentence: '在Minecraft里，我用“谁”记录这次方块冒险。' },
            { char: '看', pinyin: 'kàn', meaning: '看字', words: ['看字卡', '看方块'], example: '我们正在学习“看”这个汉字。', minecraftSentence: '在Minecraft里，我用“看”记录这次方块冒险。' },
            { char: '夕', pinyin: 'xī', meaning: '夕字', words: ['夕字卡', '夕方块'], example: '我们正在学习“夕”这个汉字。', minecraftSentence: '在Minecraft里，我用“夕”记录这次方块冒险。' },
            { char: '肚', pinyin: 'dù', meaning: '肚字', words: ['肚字卡', '肚方块'], example: '我们正在学习“肚”这个汉字。', minecraftSentence: '在Minecraft里，我用“肚”记录这次方块冒险。' },
            { char: '夜', pinyin: 'yè', meaning: '夜字', words: ['夜字卡', '夜方块'], example: '我们正在学习“夜”这个汉字。', minecraftSentence: '在Minecraft里，我用“夜”记录这次方块冒险。' },
            { char: '苦', pinyin: 'kǔ', meaning: '苦字', words: ['苦字卡', '苦方块'], example: '我们正在学习“苦”这个汉字。', minecraftSentence: '在Minecraft里，我用“苦”记录这次方块冒险。' },
            { char: '住', pinyin: 'zhù', meaning: '住字', words: ['住字卡', '住方块'], example: '我们正在学习“住”这个汉字。', minecraftSentence: '在Minecraft里，我用“住”记录这次方块冒险。' },
            { char: '美', pinyin: 'měi', meaning: '美字', words: ['美字卡', '美方块'], example: '我们正在学习“美”这个汉字。', minecraftSentence: '在Minecraft里，我用“美”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-2',
        level: 2,
        title: '第2课：一年级识字·基础级',
        characters: [
            { char: '高', pinyin: 'gāo', meaning: '高字', words: ['高字卡', '高方块'], example: '我们正在学习“高”这个汉字。', minecraftSentence: '在Minecraft里，我用“高”记录这次方块冒险。' },
            { char: '猫', pinyin: 'māo', meaning: '猫字', words: ['猫字卡', '猫方块'], example: '我们正在学习“猫”这个汉字。', minecraftSentence: '在Minecraft里，我用“猫”记录这次方块冒险。' },
            { char: '千', pinyin: 'qiān', meaning: '千字', words: ['千字卡', '千方块'], example: '我们正在学习“千”这个汉字。', minecraftSentence: '在Minecraft里，我用“千”记录这次方块冒险。' },
            { char: '危', pinyin: 'wēi', meaning: '危字', words: ['危字卡', '危方块'], example: '我们正在学习“危”这个汉字。', minecraftSentence: '在Minecraft里，我用“危”记录这次方块冒险。' },
            { char: '朋', pinyin: 'péng', meaning: '朋字', words: ['朋字卡', '朋方块'], example: '我们正在学习“朋”这个汉字。', minecraftSentence: '在Minecraft里，我用“朋”记录这次方块冒险。' },
            { char: '怪', pinyin: 'guài', meaning: '怪字', words: ['怪字卡', '怪方块'], example: '我们正在学习“怪”这个汉字。', minecraftSentence: '在Minecraft里，我用“怪”记录这次方块冒险。' },
            { char: '气', pinyin: 'qì', meaning: '气字', words: ['气字卡', '气方块'], example: '我们正在学习“气”这个汉字。', minecraftSentence: '在Minecraft里，我用“气”记录这次方块冒险。' },
            { char: '村', pinyin: 'cūn', meaning: '村字', words: ['村字卡', '村方块'], example: '我们正在学习“村”这个汉字。', minecraftSentence: '在Minecraft里，我用“村”记录这次方块冒险。' },
            { char: '广', pinyin: 'guǎng', meaning: '广字', words: ['广字卡', '广方块'], example: '我们正在学习“广”这个汉字。', minecraftSentence: '在Minecraft里，我用“广”记录这次方块冒险。' },
            { char: '汽', pinyin: 'qì', meaning: '汽字', words: ['汽字卡', '汽方块'], example: '我们正在学习“汽”这个汉字。', minecraftSentence: '在Minecraft里，我用“汽”记录这次方块冒险。' },
            { char: '方', pinyin: 'fāng', meaning: '方字', words: ['方字卡', '方方块'], example: '我们正在学习“方”这个汉字。', minecraftSentence: '在Minecraft里，我用“方”记录这次方块冒险。' },
            { char: '泪', pinyin: 'lèi', meaning: '泪字', words: ['泪字卡', '泪方块'], example: '我们正在学习“泪”这个汉字。', minecraftSentence: '在Minecraft里，我用“泪”记录这次方块冒险。' },
            { char: '花', pinyin: 'huā', meaning: '花字', words: ['花字卡', '花方块'], example: '我们正在学习“花”这个汉字。', minecraftSentence: '在Minecraft里，我用“花”记录这次方块冒险。' },
            { char: '合', pinyin: 'hé', meaning: '合字', words: ['合字卡', '合方块'], example: '我们正在学习“合”这个汉字。', minecraftSentence: '在Minecraft里，我用“合”记录这次方块冒险。' },
            { char: '盯', pinyin: 'dīng', meaning: '盯字', words: ['盯字卡', '盯方块'], example: '我们正在学习“盯”这个汉字。', minecraftSentence: '在Minecraft里，我用“盯”记录这次方块冒险。' },
            { char: '太', pinyin: 'tài', meaning: '太字', words: ['太字卡', '太方块'], example: '我们正在学习“太”这个汉字。', minecraftSentence: '在Minecraft里，我用“太”记录这次方块冒险。' },
            { char: '坐', pinyin: 'zuò', meaning: '坐字', words: ['坐字卡', '坐方块'], example: '我们正在学习“坐”这个汉字。', minecraftSentence: '在Minecraft里，我用“坐”记录这次方块冒险。' },
            { char: '身', pinyin: 'shēn', meaning: '身字', words: ['身字卡', '身方块'], example: '我们正在学习“身”这个汉字。', minecraftSentence: '在Minecraft里，我用“身”记录这次方块冒险。' },
            { char: '句', pinyin: 'jù', meaning: '句字', words: ['句字卡', '句方块'], example: '我们正在学习“句”这个汉字。', minecraftSentence: '在Minecraft里，我用“句”记录这次方块冒险。' },
            { char: '放', pinyin: 'fàng', meaning: '放字', words: ['放字卡', '放方块'], example: '我们正在学习“放”这个汉字。', minecraftSentence: '在Minecraft里，我用“放”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-3',
        level: 2,
        title: '第3课：一年级识字·基础级',
        characters: [
            { char: '娃', pinyin: 'wá', meaning: '娃字', words: ['娃字卡', '娃方块'], example: '我们正在学习“娃”这个汉字。', minecraftSentence: '在Minecraft里，我用“娃”记录这次方块冒险。' },
            { char: '师', pinyin: 'shī', meaning: '师字', words: ['师字卡', '师方块'], example: '我们正在学习“师”这个汉字。', minecraftSentence: '在Minecraft里，我用“师”记录这次方块冒险。' },
            { char: '玩', pinyin: 'wán', meaning: '玩字', words: ['玩字卡', '玩方块'], example: '我们正在学习“玩”这个汉字。', minecraftSentence: '在Minecraft里，我用“玩”记录这次方块冒险。' },
            { char: '松', pinyin: 'sōng', meaning: '松字', words: ['松字卡', '松方块'], example: '我们正在学习“松”这个汉字。', minecraftSentence: '在Minecraft里，我用“松”记录这次方块冒险。' },
            { char: '被', pinyin: 'bèi', meaning: '被字', words: ['被字卡', '被方块'], example: '我们正在学习“被”这个汉字。', minecraftSentence: '在Minecraft里，我用“被”记录这次方块冒险。' },
            { char: '会', pinyin: 'huì', meaning: '会字', words: ['会字卡', '会方块'], example: '我们正在学习“会”这个汉字。', minecraftSentence: '在Minecraft里，我用“会”记录这次方块冒险。' },
            { char: '衣', pinyin: 'yī', meaning: '衣字', words: ['衣字卡', '衣方块'], example: '我们正在学习“衣”这个汉字。', minecraftSentence: '在Minecraft里，我用“衣”记录这次方块冒险。' },
            { char: '切', pinyin: 'qiè', meaning: '切字', words: ['切字卡', '切方块'], example: '我们正在学习“切”这个汉字。', minecraftSentence: '在Minecraft里，我用“切”记录这次方块冒险。' },
            { char: '安', pinyin: 'ān', meaning: '安字', words: ['安字卡', '安方块'], example: '我们正在学习“安”这个汉字。', minecraftSentence: '在Minecraft里，我用“安”记录这次方块冒险。' },
            { char: '产', pinyin: 'chǎn', meaning: '产字', words: ['产字卡', '产方块'], example: '我们正在学习“产”这个汉字。', minecraftSentence: '在Minecraft里，我用“产”记录这次方块冒险。' },
            { char: '军', pinyin: 'jūn', meaning: '军字', words: ['军字卡', '军方块'], example: '我们正在学习“军”这个汉字。', minecraftSentence: '在Minecraft里，我用“军”记录这次方块冒险。' },
            { char: '册', pinyin: 'cè', meaning: '册字', words: ['册字卡', '册方块'], example: '我们正在学习“册”这个汉字。', minecraftSentence: '在Minecraft里，我用“册”记录这次方块冒险。' },
            { char: '点', pinyin: 'diǎn', meaning: '点字', words: ['点字卡', '点方块'], example: '我们正在学习“点”这个汉字。', minecraftSentence: '在Minecraft里，我用“点”记录这次方块冒险。' },
            { char: '丛', pinyin: 'cóng', meaning: '丛字', words: ['丛字卡', '丛方块'], example: '我们正在学习“丛”这个汉字。', minecraftSentence: '在Minecraft里，我用“丛”记录这次方块冒险。' },
            { char: '散', pinyin: 'sàn', meaning: '散字', words: ['散字卡', '散方块'], example: '我们正在学习“散”这个汉字。', minecraftSentence: '在Minecraft里，我用“散”记录这次方块冒险。' },
            { char: '还', pinyin: 'hái', meaning: '还字', words: ['还字卡', '还方块'], example: '我们正在学习“还”这个汉字。', minecraftSentence: '在Minecraft里，我用“还”记录这次方块冒险。' },
            { char: '事', pinyin: 'shì', meaning: '事字', words: ['事字卡', '事方块'], example: '我们正在学习“事”这个汉字。', minecraftSentence: '在Minecraft里，我用“事”记录这次方块冒险。' },
            { char: '止', pinyin: 'zhǐ', meaning: '止字', words: ['止字卡', '止方块'], example: '我们正在学习“止”这个汉字。', minecraftSentence: '在Minecraft里，我用“止”记录这次方块冒险。' },
            { char: '信', pinyin: 'xìn', meaning: '信字', words: ['信字卡', '信方块'], example: '我们正在学习“信”这个汉字。', minecraftSentence: '在Minecraft里，我用“信”记录这次方块冒险。' },
            { char: '披', pinyin: 'pī', meaning: '披字', words: ['披字卡', '披方块'], example: '我们正在学习“披”这个汉字。', minecraftSentence: '在Minecraft里，我用“披”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-4',
        level: 2,
        title: '第4课：一年级识字·基础级',
        characters: [
            { char: '卡', pinyin: 'kǎ', meaning: '卡字', words: ['卡字卡', '卡方块'], example: '我们正在学习“卡”这个汉字。', minecraftSentence: '在Minecraft里，我用“卡”记录这次方块冒险。' },
            { char: '池', pinyin: 'chí', meaning: '池字', words: ['池字卡', '池方块'], example: '我们正在学习“池”这个汉字。', minecraftSentence: '在Minecraft里，我用“池”记录这次方块冒险。' },
            { char: '道', pinyin: 'dào', meaning: '道字', words: ['道字卡', '道方块'], example: '我们正在学习“道”这个汉字。', minecraftSentence: '在Minecraft里，我用“道”记录这次方块冒险。' },
            { char: '样', pinyin: 'yàng', meaning: '样字', words: ['样字卡', '样方块'], example: '我们正在学习“样”这个汉字。', minecraftSentence: '在Minecraft里，我用“样”记录这次方块冒险。' },
            { char: '它', pinyin: 'tā', meaning: '它字', words: ['它字卡', '它方块'], example: '我们正在学习“它”这个汉字。', minecraftSentence: '在Minecraft里，我用“它”记录这次方块冒险。' },
            { char: '海', pinyin: 'hǎi', meaning: '海字', words: ['海字卡', '海方块'], example: '我们正在学习“海”这个汉字。', minecraftSentence: '在Minecraft里，我用“海”记录这次方块冒险。' },
            { char: '今', pinyin: 'jīn', meaning: '今字', words: ['今字卡', '今方块'], example: '我们正在学习“今”这个汉字。', minecraftSentence: '在Minecraft里，我用“今”记录这次方块冒险。' },
            { char: '幅', pinyin: 'fú', meaning: '幅字', words: ['幅字卡', '幅方块'], example: '我们正在学习“幅”这个汉字。', minecraftSentence: '在Minecraft里，我用“幅”记录这次方块冒险。' },
            { char: '纸', pinyin: 'zhǐ', meaning: '纸字', words: ['纸字卡', '纸方块'], example: '我们正在学习“纸”这个汉字。', minecraftSentence: '在Minecraft里，我用“纸”记录这次方块冒险。' },
            { char: '饱', pinyin: 'bǎo', meaning: '饱字', words: ['饱字卡', '饱方块'], example: '我们正在学习“饱”这个汉字。', minecraftSentence: '在Minecraft里，我用“饱”记录这次方块冒险。' },
            { char: '伞', pinyin: 'sǎn', meaning: '伞字', words: ['伞字卡', '伞方块'], example: '我们正在学习“伞”这个汉字。', minecraftSentence: '在Minecraft里，我用“伞”记录这次方块冒险。' },
            { char: '清', pinyin: 'qīng', meaning: '清字', words: ['清字卡', '清方块'], example: '我们正在学习“清”这个汉字。', minecraftSentence: '在Minecraft里，我用“清”记录这次方块冒险。' },
            { char: '春', pinyin: 'chūn', meaning: '春字', words: ['春字卡', '春方块'], example: '我们正在学习“春”这个汉字。', minecraftSentence: '在Minecraft里，我用“春”记录这次方块冒险。' },
            { char: '鱼', pinyin: 'yú', meaning: '鱼字', words: ['鱼字卡', '鱼方块'], example: '我们正在学习“鱼”这个汉字。', minecraftSentence: '在Minecraft里，我用“鱼”记录这次方块冒险。' },
            { char: '泼', pinyin: 'pō', meaning: '泼字', words: ['泼字卡', '泼方块'], example: '我们正在学习“泼”这个汉字。', minecraftSentence: '在Minecraft里，我用“泼”记录这次方块冒险。' },
            { char: '报', pinyin: 'bào', meaning: '报字', words: ['报字卡', '报方块'], example: '我们正在学习“报”这个汉字。', minecraftSentence: '在Minecraft里，我用“报”记录这次方块冒险。' },
            { char: '阳', pinyin: 'yáng', meaning: '阳字', words: ['阳字卡', '阳方块'], example: '我们正在学习“阳”这个汉字。', minecraftSentence: '在Minecraft里，我用“阳”记录这次方块冒险。' },
            { char: '瓜', pinyin: 'guā', meaning: '瓜字', words: ['瓜字卡', '瓜方块'], example: '我们正在学习“瓜”这个汉字。', minecraftSentence: '在Minecraft里，我用“瓜”记录这次方块冒险。' },
            { char: '眼', pinyin: 'yǎn', meaning: '眼字', words: ['眼字卡', '眼方块'], example: '我们正在学习“眼”这个汉字。', minecraftSentence: '在Minecraft里，我用“眼”记录这次方块冒险。' },
            { char: '尖', pinyin: 'jiān', meaning: '尖字', words: ['尖字卡', '尖方块'], example: '我们正在学习“尖”这个汉字。', minecraftSentence: '在Minecraft里，我用“尖”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-5',
        level: 2,
        title: '第5课：一年级识字·基础级',
        characters: [
            { char: '似', pinyin: 'shì', meaning: '似字', words: ['似字卡', '似方块'], example: '我们正在学习“似”这个汉字。', minecraftSentence: '在Minecraft里，我用“似”记录这次方块冒险。' },
            { char: '欢', pinyin: 'huān', meaning: '欢字', words: ['欢字卡', '欢方块'], example: '我们正在学习“欢”这个汉字。', minecraftSentence: '在Minecraft里，我用“欢”记录这次方块冒险。' },
            { char: '敢', pinyin: 'gǎn', meaning: '敢字', words: ['敢字卡', '敢方块'], example: '我们正在学习“敢”这个汉字。', minecraftSentence: '在Minecraft里，我用“敢”记录这次方块冒险。' },
            { char: '床', pinyin: 'chuáng', meaning: '床字', words: ['床字卡', '床方块'], example: '我们正在学习“床”这个汉字。', minecraftSentence: '在Minecraft里，我用“床”记录这次方块冒险。' },
            { char: '玉', pinyin: 'yù', meaning: '玉字', words: ['玉字卡', '玉方块'], example: '我们正在学习“玉”这个汉字。', minecraftSentence: '在Minecraft里，我用“玉”记录这次方块冒险。' },
            { char: '机', pinyin: 'jī', meaning: '机字', words: ['机字卡', '机方块'], example: '我们正在学习“机”这个汉字。', minecraftSentence: '在Minecraft里，我用“机”记录这次方块冒险。' },
            { char: '早', pinyin: 'zǎo', meaning: '早字', words: ['早字卡', '早方块'], example: '我们正在学习“早”这个汉字。', minecraftSentence: '在Minecraft里，我用“早”记录这次方块冒险。' },
            { char: '片', pinyin: 'piàn', meaning: '片字', words: ['片字卡', '片方块'], example: '我们正在学习“片”这个汉字。', minecraftSentence: '在Minecraft里，我用“片”记录这次方块冒险。' },
            { char: '桐', pinyin: 'tóng', meaning: '桐字', words: ['桐字卡', '桐方块'], example: '我们正在学习“桐”这个汉字。', minecraftSentence: '在Minecraft里，我用“桐”记录这次方块冒险。' },
            { char: '坏', pinyin: 'huài', meaning: '坏字', words: ['坏字卡', '坏方块'], example: '我们正在学习“坏”这个汉字。', minecraftSentence: '在Minecraft里，我用“坏”记录这次方块冒险。' },
            { char: '旗', pinyin: 'qí', meaning: '旗字', words: ['旗字卡', '旗方块'], example: '我们正在学习“旗”这个汉字。', minecraftSentence: '在Minecraft里，我用“旗”记录这次方块冒险。' },
            { char: '习', pinyin: 'xí', meaning: '习字', words: ['习字卡', '习方块'], example: '我们正在学习“习”这个汉字。', minecraftSentence: '在Minecraft里，我用“习”记录这次方块冒险。' },
            { char: '都', pinyin: 'dōu', meaning: '都字', words: ['都字卡', '都方块'], example: '我们正在学习“都”这个汉字。', minecraftSentence: '在Minecraft里，我用“都”记录这次方块冒险。' },
            { char: '杆', pinyin: 'gān', meaning: '杆字', words: ['杆字卡', '杆方块'], example: '我们正在学习“杆”这个汉字。', minecraftSentence: '在Minecraft里，我用“杆”记录这次方块冒险。' },
            { char: '于', pinyin: 'yú', meaning: '于字', words: ['于字卡', '于方块'], example: '我们正在学习“于”这个汉字。', minecraftSentence: '在Minecraft里，我用“于”记录这次方块冒险。' },
            { char: '支', pinyin: 'zhī', meaning: '支字', words: ['支字卡', '支方块'], example: '我们正在学习“支”这个汉字。', minecraftSentence: '在Minecraft里，我用“支”记录这次方块冒险。' },
            { char: '寸', pinyin: 'cùn', meaning: '寸字', words: ['寸字卡', '寸方块'], example: '我们正在学习“寸”这个汉字。', minecraftSentence: '在Minecraft里，我用“寸”记录这次方块冒险。' },
            { char: '到', pinyin: 'dào', meaning: '到字', words: ['到字卡', '到方块'], example: '我们正在学习“到”这个汉字。', minecraftSentence: '在Minecraft里，我用“到”记录这次方块冒险。' },
            { char: '桥', pinyin: 'qiáo', meaning: '桥字', words: ['桥字卡', '桥方块'], example: '我们正在学习“桥”这个汉字。', minecraftSentence: '在Minecraft里，我用“桥”记录这次方块冒险。' },
            { char: '言', pinyin: 'yán', meaning: '言字', words: ['言字卡', '言方块'], example: '我们正在学习“言”这个汉字。', minecraftSentence: '在Minecraft里，我用“言”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-6',
        level: 2,
        title: '第6课：一年级识字·基础级',
        characters: [
            { char: '加', pinyin: 'jiā', meaning: '加字', words: ['加字卡', '加方块'], example: '我们正在学习“加”这个汉字。', minecraftSentence: '在Minecraft里，我用“加”记录这次方块冒险。' },
            { char: '歌', pinyin: 'gē', meaning: '歌字', words: ['歌字卡', '歌方块'], example: '我们正在学习“歌”这个汉字。', minecraftSentence: '在Minecraft里，我用“歌”记录这次方块冒险。' },
            { char: '皮', pinyin: 'pí', meaning: '皮字', words: ['皮字卡', '皮方块'], example: '我们正在学习“皮”这个汉字。', minecraftSentence: '在Minecraft里，我用“皮”记录这次方块冒险。' },
            { char: '兰', pinyin: 'lán', meaning: '兰字', words: ['兰字卡', '兰方块'], example: '我们正在学习“兰”这个汉字。', minecraftSentence: '在Minecraft里，我用“兰”记录这次方块冒险。' },
            { char: '国', pinyin: 'guó', meaning: '国字', words: ['国字卡', '国方块'], example: '我们正在学习“国”这个汉字。', minecraftSentence: '在Minecraft里，我用“国”记录这次方块冒险。' },
            { char: '造', pinyin: 'zào', meaning: '造字', words: ['造字卡', '造方块'], example: '我们正在学习“造”这个汉字。', minecraftSentence: '在Minecraft里，我用“造”记录这次方块冒险。' },
            { char: '间', pinyin: 'jiān', meaning: '间字', words: ['间字卡', '间方块'], example: '我们正在学习“间”这个汉字。', minecraftSentence: '在Minecraft里，我用“间”记录这次方块冒险。' },
            { char: '胡', pinyin: 'hú', meaning: '胡字', words: ['胡字卡', '胡方块'], example: '我们正在学习“胡”这个汉字。', minecraftSentence: '在Minecraft里，我用“胡”记录这次方块冒险。' },
            { char: '评', pinyin: 'píng', meaning: '评字', words: ['评字卡', '评方块'], example: '我们正在学习“评”这个汉字。', minecraftSentence: '在Minecraft里，我用“评”记录这次方块冒险。' },
            { char: '杨', pinyin: 'yáng', meaning: '杨字', words: ['杨字卡', '杨方块'], example: '我们正在学习“杨”这个汉字。', minecraftSentence: '在Minecraft里，我用“杨”记录这次方块冒险。' },
            { char: '主', pinyin: 'zhǔ', meaning: '主字', words: ['主字卡', '主方块'], example: '我们正在学习“主”这个汉字。', minecraftSentence: '在Minecraft里，我用“主”记录这次方块冒险。' },
            { char: '听', pinyin: 'tīng', meaning: '听字', words: ['听字卡', '听方块'], example: '我们正在学习“听”这个汉字。', minecraftSentence: '在Minecraft里，我用“听”记录这次方块冒险。' },
            { char: '给', pinyin: 'gěi', meaning: '给字', words: ['给字卡', '给方块'], example: '我们正在学习“给”这个汉字。', minecraftSentence: '在Minecraft里，我用“给”记录这次方块冒险。' },
            { char: '课', pinyin: 'kè', meaning: '课字', words: ['课字卡', '课方块'], example: '我们正在学习“课”这个汉字。', minecraftSentence: '在Minecraft里，我用“课”记录这次方块冒险。' },
            { char: '打', pinyin: 'dǎ', meaning: '打字', words: ['打字卡', '打方块'], example: '我们正在学习“打”这个汉字。', minecraftSentence: '在Minecraft里，我用“打”记录这次方块冒险。' },
            { char: '向', pinyin: 'xiàng', meaning: '向字', words: ['向字卡', '向方块'], example: '我们正在学习“向”这个汉字。', minecraftSentence: '在Minecraft里，我用“向”记录这次方块冒险。' },
            { char: '的', pinyin: 'de', meaning: '的字', words: ['的字卡', '的方块'], example: '我们正在学习“的”这个汉字。', minecraftSentence: '在Minecraft里，我用“的”记录这次方块冒险。' },
            { char: '思', pinyin: 'sī', meaning: '思字', words: ['思字卡', '思方块'], example: '我们正在学习“思”这个汉字。', minecraftSentence: '在Minecraft里，我用“思”记录这次方块冒险。' },
            { char: '细', pinyin: 'xì', meaning: '细字', words: ['细字卡', '细方块'], example: '我们正在学习“细”这个汉字。', minecraftSentence: '在Minecraft里，我用“细”记录这次方块冒险。' },
            { char: '始', pinyin: 'shǐ', meaning: '始字', words: ['始字卡', '始方块'], example: '我们正在学习“始”这个汉字。', minecraftSentence: '在Minecraft里，我用“始”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-7',
        level: 2,
        title: '第7课：一年级识字·基础级',
        characters: [
            { char: '另', pinyin: 'lìng', meaning: '另字', words: ['另字卡', '另方块'], example: '我们正在学习“另”这个汉字。', minecraftSentence: '在Minecraft里，我用“另”记录这次方块冒险。' },
            { char: '青', pinyin: 'qīng', meaning: '青字', words: ['青字卡', '青方块'], example: '我们正在学习“青”这个汉字。', minecraftSentence: '在Minecraft里，我用“青”记录这次方块冒险。' },
            { char: '肥', pinyin: 'féi', meaning: '肥字', words: ['肥字卡', '肥方块'], example: '我们正在学习“肥”这个汉字。', minecraftSentence: '在Minecraft里，我用“肥”记录这次方块冒险。' },
            { char: '学', pinyin: 'xué', meaning: '学字', words: ['学字卡', '学方块'], example: '我们正在学习“学”这个汉字。', minecraftSentence: '在Minecraft里，我用“学”记录这次方块冒险。' },
            { char: '网', pinyin: 'wǎng', meaning: '网字', words: ['网字卡', '网方块'], example: '我们正在学习“网”这个汉字。', minecraftSentence: '在Minecraft里，我用“网”记录这次方块冒险。' },
            { char: '车', pinyin: 'chē', meaning: '车字', words: ['车字卡', '车方块'], example: '我们正在学习“车”这个汉字。', minecraftSentence: '在Minecraft里，我用“车”记录这次方块冒险。' },
            { char: '斤', pinyin: 'jīn', meaning: '斤字', words: ['斤字卡', '斤方块'], example: '我们正在学习“斤”这个汉字。', minecraftSentence: '在Minecraft里，我用“斤”记录这次方块冒险。' },
            { char: '后', pinyin: 'hòu', meaning: '后字', words: ['后字卡', '后方块'], example: '我们正在学习“后”这个汉字。', minecraftSentence: '在Minecraft里，我用“后”记录这次方块冒险。' },
            { char: '称', pinyin: 'chēng', meaning: '称字', words: ['称字卡', '称方块'], example: '我们正在学习“称”这个汉字。', minecraftSentence: '在Minecraft里，我用“称”记录这次方块冒险。' },
            { char: '请', pinyin: 'qǐng', meaning: '请字', words: ['请字卡', '请方块'], example: '我们正在学习“请”这个汉字。', minecraftSentence: '在Minecraft里，我用“请”记录这次方块冒险。' },
            { char: '什', pinyin: 'shén', meaning: '什字', words: ['什字卡', '什方块'], example: '我们正在学习“什”这个汉字。', minecraftSentence: '在Minecraft里，我用“什”记录这次方块冒险。' },
            { char: '两', pinyin: 'liǎng', meaning: '两字', words: ['两字卡', '两方块'], example: '我们正在学习“两”这个汉字。', minecraftSentence: '在Minecraft里，我用“两”记录这次方块冒险。' },
            { char: '壮', pinyin: 'zhuàng', meaning: '壮字', words: ['壮字卡', '壮方块'], example: '我们正在学习“壮”这个汉字。', minecraftSentence: '在Minecraft里，我用“壮”记录这次方块冒险。' },
            { char: '义', pinyin: 'yì', meaning: '义字', words: ['义字卡', '义方块'], example: '我们正在学习“义”这个汉字。', minecraftSentence: '在Minecraft里，我用“义”记录这次方块冒险。' },
            { char: '旁', pinyin: 'páng', meaning: '旁字', words: ['旁字卡', '旁方块'], example: '我们正在学习“旁”这个汉字。', minecraftSentence: '在Minecraft里，我用“旁”记录这次方块冒险。' },
            { char: '远', pinyin: 'yuǎn', meaning: '远字', words: ['远字卡', '远方块'], example: '我们正在学习“远”这个汉字。', minecraftSentence: '在Minecraft里，我用“远”记录这次方块冒险。' },
            { char: '反', pinyin: 'fǎn', meaning: '反字', words: ['反字卡', '反方块'], example: '我们正在学习“反”这个汉字。', minecraftSentence: '在Minecraft里，我用“反”记录这次方块冒险。' },
            { char: '房', pinyin: 'fáng', meaning: '房字', words: ['房字卡', '房方块'], example: '我们正在学习“房”这个汉字。', minecraftSentence: '在Minecraft里，我用“房”记录这次方块冒险。' },
            { char: '雪', pinyin: 'xuě', meaning: '雪字', words: ['雪字卡', '雪方块'], example: '我们正在学习“雪”这个汉字。', minecraftSentence: '在Minecraft里，我用“雪”记录这次方块冒险。' },
            { char: '认', pinyin: 'rèn', meaning: '认字', words: ['认字卡', '认方块'], example: '我们正在学习“认”这个汉字。', minecraftSentence: '在Minecraft里，我用“认”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-8',
        level: 2,
        title: '第8课：一年级识字·基础级',
        characters: [
            { char: '晴', pinyin: 'qíng', meaning: '晴字', words: ['晴字卡', '晴方块'], example: '我们正在学习“晴”这个汉字。', minecraftSentence: '在Minecraft里，我用“晴”记录这次方块冒险。' },
            { char: '然', pinyin: 'rán', meaning: '然字', words: ['然字卡', '然方块'], example: '我们正在学习“然”这个汉字。', minecraftSentence: '在Minecraft里，我用“然”记录这次方块冒险。' },
            { char: '群', pinyin: 'qún', meaning: '群字', words: ['群字卡', '群方块'], example: '我们正在学习“群”这个汉字。', minecraftSentence: '在Minecraft里，我用“群”记录这次方块冒险。' },
            { char: '唱', pinyin: 'chàng', meaning: '唱字', words: ['唱字卡', '唱方块'], example: '我们正在学习“唱”这个汉字。', minecraftSentence: '在Minecraft里，我用“唱”记录这次方块冒险。' },
            { char: '柏', pinyin: 'bǎi', meaning: '柏字', words: ['柏字卡', '柏方块'], example: '我们正在学习“柏”这个汉字。', minecraftSentence: '在Minecraft里，我用“柏”记录这次方块冒险。' },
            { char: '页', pinyin: 'yè', meaning: '页字', words: ['页字卡', '页方块'], example: '我们正在学习“页”这个汉字。', minecraftSentence: '在Minecraft里，我用“页”记录这次方块冒险。' },
            { char: '令', pinyin: 'lìng', meaning: '令字', words: ['令字卡', '令方块'], example: '我们正在学习“令”这个汉字。', minecraftSentence: '在Minecraft里，我用“令”记录这次方块冒险。' },
            { char: '邻', pinyin: 'lín', meaning: '邻字', words: ['邻字卡', '邻方块'], example: '我们正在学习“邻”这个汉字。', minecraftSentence: '在Minecraft里，我用“邻”记录这次方块冒险。' },
            { char: '角', pinyin: 'jiǎo', meaning: '角字', words: ['角字卡', '角方块'], example: '我们正在学习“角”这个汉字。', minecraftSentence: '在Minecraft里，我用“角”记录这次方块冒险。' },
            { char: '轻', pinyin: 'qīng', meaning: '轻字', words: ['轻字卡', '轻方块'], example: '我们正在学习“轻”这个汉字。', minecraftSentence: '在Minecraft里，我用“轻”记录这次方块冒险。' },
            { char: '穿', pinyin: 'chuān', meaning: '穿字', words: ['穿字卡', '穿方块'], example: '我们正在学习“穿”这个汉字。', minecraftSentence: '在Minecraft里，我用“穿”记录这次方块冒险。' },
            { char: '古', pinyin: 'gǔ', meaning: '古字', words: ['古字卡', '古方块'], example: '我们正在学习“古”这个汉字。', minecraftSentence: '在Minecraft里，我用“古”记录这次方块冒险。' },
            { char: '光', pinyin: 'guāng', meaning: '光字', words: ['光字卡', '光方块'], example: '我们正在学习“光”这个汉字。', minecraftSentence: '在Minecraft里，我用“光”记录这次方块冒险。' },
            { char: '跳', pinyin: 'tiào', meaning: '跳字', words: ['跳字卡', '跳方块'], example: '我们正在学习“跳”这个汉字。', minecraftSentence: '在Minecraft里，我用“跳”记录这次方块冒险。' },
            { char: '傍', pinyin: 'bàng', meaning: '傍字', words: ['傍字卡', '傍方块'], example: '我们正在学习“傍”这个汉字。', minecraftSentence: '在Minecraft里，我用“傍”记录这次方块冒险。' },
            { char: '时', pinyin: 'shí', meaning: '时字', words: ['时字卡', '时方块'], example: '我们正在学习“时”这个汉字。', minecraftSentence: '在Minecraft里，我用“时”记录这次方块冒险。' },
            { char: '说', pinyin: 'shuō', meaning: '说字', words: ['说字卡', '说方块'], example: '我们正在学习“说”这个汉字。', minecraftSentence: '在Minecraft里，我用“说”记录这次方块冒险。' },
            { char: '老', pinyin: 'lǎo', meaning: '老字', words: ['老字卡', '老方块'], example: '我们正在学习“老”这个汉字。', minecraftSentence: '在Minecraft里，我用“老”记录这次方块冒险。' },
            { char: '入', pinyin: 'rù', meaning: '入字', words: ['入字卡', '入方块'], example: '我们正在学习“入”这个汉字。', minecraftSentence: '在Minecraft里，我用“入”记录这次方块冒险。' },
            { char: '志', pinyin: 'zhì', meaning: '志字', words: ['志字卡', '志方块'], example: '我们正在学习“志”这个汉字。', minecraftSentence: '在Minecraft里，我用“志”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-9',
        level: 2,
        title: '第9课：一年级识字·基础级',
        characters: [
            { char: '底', pinyin: 'dǐ', meaning: '底字', words: ['底字卡', '底方块'], example: '我们正在学习“底”这个汉字。', minecraftSentence: '在Minecraft里，我用“底”记录这次方块冒险。' },
            { char: '井', pinyin: 'jǐng', meaning: '井字', words: ['井字卡', '井方块'], example: '我们正在学习“井”这个汉字。', minecraftSentence: '在Minecraft里，我用“井”记录这次方块冒险。' },
            { char: '草', pinyin: 'cǎo', meaning: '草字', words: ['草字卡', '草方块'], example: '我们正在学习“草”这个汉字。', minecraftSentence: '在Minecraft里，我用“草”记录这次方块冒险。' },
            { char: '电', pinyin: 'diàn', meaning: '电字', words: ['电字卡', '电方块'], example: '我们正在学习“电”这个汉字。', minecraftSentence: '在Minecraft里，我用“电”记录这次方块冒险。' },
            { char: '久', pinyin: 'jiǔ', meaning: '久字', words: ['久字卡', '久方块'], example: '我们正在学习“久”这个汉字。', minecraftSentence: '在Minecraft里，我用“久”记录这次方块冒险。' },
            { char: '动', pinyin: 'dòng', meaning: '动字', words: ['动字卡', '动方块'], example: '我们正在学习“动”这个汉字。', minecraftSentence: '在Minecraft里，我用“动”记录这次方块冒险。' },
            { char: '分', pinyin: 'fēn', meaning: '分字', words: ['分字卡', '分方块'], example: '我们正在学习“分”这个汉字。', minecraftSentence: '在Minecraft里，我用“分”记录这次方块冒险。' },
            { char: '奖', pinyin: 'jiǎng', meaning: '奖字', words: ['奖字卡', '奖方块'], example: '我们正在学习“奖”这个汉字。', minecraftSentence: '在Minecraft里，我用“奖”记录这次方块冒险。' },
            { char: '行', pinyin: 'xíng', meaning: '行字', words: ['行字卡', '行方块'], example: '我们正在学习“行”这个汉字。', minecraftSentence: '在Minecraft里，我用“行”记录这次方块冒险。' },
            { char: '知', pinyin: 'zhī', meaning: '知字', words: ['知字卡', '知方块'], example: '我们正在学习“知”这个汉字。', minecraftSentence: '在Minecraft里，我用“知”记录这次方块冒险。' },
            { char: '对', pinyin: 'duì', meaning: '对字', words: ['对字卡', '对方块'], example: '我们正在学习“对”这个汉字。', minecraftSentence: '在Minecraft里，我用“对”记录这次方块冒险。' },
            { char: '双', pinyin: 'shuāng', meaning: '双字', words: ['双字卡', '双方块'], example: '我们正在学习“双”这个汉字。', minecraftSentence: '在Minecraft里，我用“双”记录这次方块冒险。' },
            { char: '季', pinyin: 'jì', meaning: '季字', words: ['季字卡', '季方块'], example: '我们正在学习“季”这个汉字。', minecraftSentence: '在Minecraft里，我用“季”记录这次方块冒险。' },
            { char: '步', pinyin: 'bù', meaning: '步字', words: ['步字卡', '步方块'], example: '我们正在学习“步”这个汉字。', minecraftSentence: '在Minecraft里，我用“步”记录这次方块冒险。' },
            { char: '睛', pinyin: 'jīng', meaning: '睛字', words: ['睛字卡', '睛方块'], example: '我们正在学习“睛”这个汉字。', minecraftSentence: '在Minecraft里，我用“睛”记录这次方块冒险。' },
            { char: '化', pinyin: 'huà', meaning: '化字', words: ['化字卡', '化方块'], example: '我们正在学习“化”这个汉字。', minecraftSentence: '在Minecraft里，我用“化”记录这次方块冒险。' },
            { char: '无', pinyin: 'wú', meaning: '无字', words: ['无字卡', '无方块'], example: '我们正在学习“无”这个汉字。', minecraftSentence: '在Minecraft里，我用“无”记录这次方块冒险。' },
            { char: '贝', pinyin: 'bèi', meaning: '贝字', words: ['贝字卡', '贝方块'], example: '我们正在学习“贝”这个汉字。', minecraftSentence: '在Minecraft里，我用“贝”记录这次方块冒险。' },
            { char: '及', pinyin: 'jí', meaning: '及字', words: ['及字卡', '及方块'], example: '我们正在学习“及”这个汉字。', minecraftSentence: '在Minecraft里，我用“及”记录这次方块冒险。' },
            { char: '把', pinyin: 'bǎ', meaning: '把字', words: ['把字卡', '把方块'], example: '我们正在学习“把”这个汉字。', minecraftSentence: '在Minecraft里，我用“把”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-10',
        level: 2,
        title: '第10课：一年级识字·基础级',
        characters: [
            { char: '跑', pinyin: 'pǎo', meaning: '跑字', words: ['跑字卡', '跑方块'], example: '我们正在学习“跑”这个汉字。', minecraftSentence: '在Minecraft里，我用“跑”记录这次方块冒险。' },
            { char: '封', pinyin: 'fēng', meaning: '封字', words: ['封字卡', '封方块'], example: '我们正在学习“封”这个汉字。', minecraftSentence: '在Minecraft里，我用“封”记录这次方块冒险。' },
            { char: '么', pinyin: 'me', meaning: '么字', words: ['么字卡', '么方块'], example: '我们正在学习“么”这个汉字。', minecraftSentence: '在Minecraft里，我用“么”记录这次方块冒险。' },
            { char: '归', pinyin: 'guī', meaning: '归字', words: ['归字卡', '归方块'], example: '我们正在学习“归”这个汉字。', minecraftSentence: '在Minecraft里，我用“归”记录这次方块冒险。' },
            { char: '北', pinyin: 'běi', meaning: '北字', words: ['北字卡', '北方块'], example: '我们正在学习“北”这个汉字。', minecraftSentence: '在Minecraft里，我用“北”记录这次方块冒险。' },
            { char: '告', pinyin: 'gào', meaning: '告字', words: ['告字卡', '告方块'], example: '我们正在学习“告”这个汉字。', minecraftSentence: '在Minecraft里，我用“告”记录这次方块冒险。' },
            { char: '京', pinyin: 'jīng', meaning: '京字', words: ['京字卡', '京方块'], example: '我们正在学习“京”这个汉字。', minecraftSentence: '在Minecraft里，我用“京”记录这次方块冒险。' },
            { char: '讲', pinyin: 'jiǎng', meaning: '讲字', words: ['讲字卡', '讲方块'], example: '我们正在学习“讲”这个汉字。', minecraftSentence: '在Minecraft里，我用“讲”记录这次方块冒险。' },
            { char: '站', pinyin: 'zhàn', meaning: '站字', words: ['站字卡', '站方块'], example: '我们正在学习“站”这个汉字。', minecraftSentence: '在Minecraft里，我用“站”记录这次方块冒险。' },
            { char: '着', pinyin: 'zhe', meaning: '着字', words: ['着字卡', '着方块'], example: '我们正在学习“着”这个汉字。', minecraftSentence: '在Minecraft里，我用“着”记录这次方块冒险。' },
            { char: '戴', pinyin: 'dài', meaning: '戴字', words: ['戴字卡', '戴方块'], example: '我们正在学习“戴”这个汉字。', minecraftSentence: '在Minecraft里，我用“戴”记录这次方块冒险。' },
            { char: '影', pinyin: 'yǐng', meaning: '影字', words: ['影字卡', '影方块'], example: '我们正在学习“影”这个汉字。', minecraftSentence: '在Minecraft里，我用“影”记录这次方块冒险。' },
            { char: '抱', pinyin: 'bào', meaning: '抱字', words: ['抱字卡', '抱方块'], example: '我们正在学习“抱”这个汉字。', minecraftSentence: '在Minecraft里，我用“抱”记录这次方块冒险。' },
            { char: '桂', pinyin: 'guì', meaning: '桂字', words: ['桂字卡', '桂方块'], example: '我们正在学习“桂”这个汉字。', minecraftSentence: '在Minecraft里，我用“桂”记录这次方块冒险。' },
            { char: '队', pinyin: 'duì', meaning: '队字', words: ['队字卡', '队方块'], example: '我们正在学习“队”这个汉字。', minecraftSentence: '在Minecraft里，我用“队”记录这次方块冒险。' },
            { char: '星', pinyin: 'xīng', meaning: '星字', words: ['星字卡', '星方块'], example: '我们正在学习“星”这个汉字。', minecraftSentence: '在Minecraft里，我用“星”记录这次方块冒险。' },
            { char: '再', pinyin: 'zài', meaning: '再字', words: ['再字卡', '再方块'], example: '我们正在学习“再”这个汉字。', minecraftSentence: '在Minecraft里，我用“再”记录这次方块冒险。' },
            { char: '没', pinyin: 'méi', meaning: '没字', words: ['没字卡', '没方块'], example: '我们正在学习“没”这个汉字。', minecraftSentence: '在Minecraft里，我用“没”记录这次方块冒险。' },
            { char: '宽', pinyin: 'kuān', meaning: '宽字', words: ['宽字卡', '宽方块'], example: '我们正在学习“宽”这个汉字。', minecraftSentence: '在Minecraft里，我用“宽”记录这次方块冒险。' },
            { char: '问', pinyin: 'wèn', meaning: '问字', words: ['问字卡', '问方块'], example: '我们正在学习“问”这个汉字。', minecraftSentence: '在Minecraft里，我用“问”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-11',
        level: 2,
        title: '第11课：一年级识字·基础级',
        characters: [
            { char: '台', pinyin: 'tái', meaning: '台字', words: ['台字卡', '台方块'], example: '我们正在学习“台”这个汉字。', minecraftSentence: '在Minecraft里，我用“台”记录这次方块冒险。' },
            { char: '吃', pinyin: 'chī', meaning: '吃字', words: ['吃字卡', '吃方块'], example: '我们正在学习“吃”这个汉字。', minecraftSentence: '在Minecraft里，我用“吃”记录这次方块冒险。' },
            { char: '岸', pinyin: 'àn', meaning: '岸字', words: ['岸字卡', '岸方块'], example: '我们正在学习“岸”这个汉字。', minecraftSentence: '在Minecraft里，我用“岸”记录这次方块冒险。' },
            { char: '并', pinyin: 'bìng', meaning: '并字', words: ['并字卡', '并方块'], example: '我们正在学习“并”这个汉字。', minecraftSentence: '在Minecraft里，我用“并”记录这次方块冒险。' },
            { char: '这', pinyin: 'zhè', meaning: '这字', words: ['这字卡', '这方块'], example: '我们正在学习“这”这个汉字。', minecraftSentence: '在Minecraft里，我用“这”记录这次方块冒险。' },
            { char: '扁', pinyin: 'biǎn', meaning: '扁字', words: ['扁字卡', '扁方块'], example: '我们正在学习“扁”这个汉字。', minecraftSentence: '在Minecraft里，我用“扁”记录这次方块冒险。' },
            { char: '拿', pinyin: 'ná', meaning: '拿字', words: ['拿字卡', '拿方块'], example: '我们正在学习“拿”这个汉字。', minecraftSentence: '在Minecraft里，我用“拿”记录这次方块冒险。' },
            { char: '候', pinyin: 'hòu', meaning: '候字', words: ['候字卡', '候方块'], example: '我们正在学习“候”这个汉字。', minecraftSentence: '在Minecraft里，我用“候”记录这次方块冒险。' },
            { char: '更', pinyin: 'gèng', meaning: '更字', words: ['更字卡', '更方块'], example: '我们正在学习“更”这个汉字。', minecraftSentence: '在Minecraft里，我用“更”记录这次方块冒险。' },
            { char: '龙', pinyin: 'lóng', meaning: '龙字', words: ['龙字卡', '龙方块'], example: '我们正在学习“龙”这个汉字。', minecraftSentence: '在Minecraft里，我用“龙”记录这次方块冒险。' },
            { char: '找', pinyin: 'zhǎo', meaning: '找字', words: ['找字卡', '找方块'], example: '我们正在学习“找”这个汉字。', minecraftSentence: '在Minecraft里，我用“找”记录这次方块冒险。' },
            { char: '故', pinyin: 'gù', meaning: '故字', words: ['故字卡', '故方块'], example: '我们正在学习“故”这个汉字。', minecraftSentence: '在Minecraft里，我用“故”记录这次方块冒险。' },
            { char: '炮', pinyin: 'pào', meaning: '炮字', words: ['炮字卡', '炮方块'], example: '我们正在学习“炮”这个汉字。', minecraftSentence: '在Minecraft里，我用“炮”记录这次方块冒险。' },
            { char: '杉', pinyin: 'shān', meaning: '杉字', words: ['杉字卡', '杉方块'], example: '我们正在学习“杉”这个汉字。', minecraftSentence: '在Minecraft里，我用“杉”记录这次方块冒险。' },
            { char: '走', pinyin: 'zǒu', meaning: '走字', words: ['走字卡', '走方块'], example: '我们正在学习“走”这个汉字。', minecraftSentence: '在Minecraft里，我用“走”记录这次方块冒险。' },
            { char: '进', pinyin: 'jìn', meaning: '进字', words: ['进字卡', '进方块'], example: '我们正在学习“进”这个汉字。', minecraftSentence: '在Minecraft里，我用“进”记录这次方块冒险。' },
            { char: '乡', pinyin: 'xiāng', meaning: '乡字', words: ['乡字卡', '乡方块'], example: '我们正在学习“乡”这个汉字。', minecraftSentence: '在Minecraft里，我用“乡”记录这次方块冒险。' },
            { char: '柱', pinyin: 'zhù', meaning: '柱字', words: ['柱字卡', '柱方块'], example: '我们正在学习“柱”这个汉字。', minecraftSentence: '在Minecraft里，我用“柱”记录这次方块冒险。' },
            { char: '农', pinyin: 'nóng', meaning: '农字', words: ['农字卡', '农方块'], example: '我们正在学习“农”这个汉字。', minecraftSentence: '在Minecraft里，我用“农”记录这次方块冒险。' },
            { char: '元', pinyin: 'yuán', meaning: '元字', words: ['元字卡', '元方块'], example: '我们正在学习“元”这个汉字。', minecraftSentence: '在Minecraft里，我用“元”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-12',
        level: 2,
        title: '第12课：一年级识字·基础级',
        characters: [
            { char: '论', pinyin: 'lùn', meaning: '论字', words: ['论字卡', '论方块'], example: '我们正在学习“论”这个汉字。', minecraftSentence: '在Minecraft里，我用“论”记录这次方块冒险。' },
            { char: '士', pinyin: 'shì', meaning: '士字', words: ['士字卡', '士方块'], example: '我们正在学习“士”这个汉字。', minecraftSentence: '在Minecraft里，我用“士”记录这次方块冒险。' },
            { char: '洋', pinyin: 'yáng', meaning: '洋字', words: ['洋字卡', '洋方块'], example: '我们正在学习“洋”这个汉字。', minecraftSentence: '在Minecraft里，我用“洋”记录这次方块冒险。' },
            { char: '船', pinyin: 'chuán', meaning: '船字', words: ['船字卡', '船方块'], example: '我们正在学习“船”这个汉字。', minecraftSentence: '在Minecraft里，我用“船”记录这次方块冒险。' },
            { char: '运', pinyin: 'yùn', meaning: '运字', words: ['运字卡', '运方块'], example: '我们正在学习“运”这个汉字。', minecraftSentence: '在Minecraft里，我用“运”记录这次方块冒险。' },
            { char: '明', pinyin: 'míng', meaning: '明字', words: ['明字卡', '明方块'], example: '我们正在学习“明”这个汉字。', minecraftSentence: '在Minecraft里，我用“明”记录这次方块冒险。' },
            { char: '苗', pinyin: 'miáo', meaning: '苗字', words: ['苗字卡', '苗方块'], example: '我们正在学习“苗”这个汉字。', minecraftSentence: '在Minecraft里，我用“苗”记录这次方块冒险。' },
            { char: '节', pinyin: 'jié', meaning: '节字', words: ['节字卡', '节方块'], example: '我们正在学习“节”这个汉字。', minecraftSentence: '在Minecraft里，我用“节”记录这次方块冒险。' },
            { char: '岁', pinyin: 'suì', meaning: '岁字', words: ['岁字卡', '岁方块'], example: '我们正在学习“岁”这个汉字。', minecraftSentence: '在Minecraft里，我用“岁”记录这次方块冒险。' },
            { char: '铜', pinyin: 'tóng', meaning: '铜字', words: ['铜字卡', '铜方块'], example: '我们正在学习“铜”这个汉字。', minecraftSentence: '在Minecraft里，我用“铜”记录这次方块冒险。' },
            { char: '秤', pinyin: 'chèng', meaning: '秤字', words: ['秤字卡', '秤方块'], example: '我们正在学习“秤”这个汉字。', minecraftSentence: '在Minecraft里，我用“秤”记录这次方块冒险。' },
            { char: '飞', pinyin: 'fēi', meaning: '飞字', words: ['飞字卡', '飞方块'], example: '我们正在学习“飞”这个汉字。', minecraftSentence: '在Minecraft里，我用“飞”记录这次方块冒险。' },
            { char: '战', pinyin: 'zhàn', meaning: '战字', words: ['战字卡', '战方块'], example: '我们正在学习“战”这个汉字。', minecraftSentence: '在Minecraft里，我用“战”记录这次方块冒险。' },
            { char: '怕', pinyin: 'pà', meaning: '怕字', words: ['怕字卡', '怕方块'], example: '我们正在学习“怕”这个汉字。', minecraftSentence: '在Minecraft里，我用“怕”记录这次方块冒险。' },
            { char: '近', pinyin: 'jìn', meaning: '近字', words: ['近字卡', '近方块'], example: '我们正在学习“近”这个汉字。', minecraftSentence: '在Minecraft里，我用“近”记录这次方块冒险。' },
            { char: '旺', pinyin: 'wàng', meaning: '旺字', words: ['旺字卡', '旺方块'], example: '我们正在学习“旺”这个汉字。', minecraftSentence: '在Minecraft里，我用“旺”记录这次方块冒险。' },
            { char: '色', pinyin: 'sè', meaning: '色字', words: ['色字卡', '色方块'], example: '我们正在学习“色”这个汉字。', minecraftSentence: '在Minecraft里，我用“色”记录这次方块冒险。' },
            { char: '家', pinyin: 'jiā', meaning: '家字', words: ['家字卡', '家方块'], example: '我们正在学习“家”这个汉字。', minecraftSentence: '在Minecraft里，我用“家”记录这次方块冒险。' },
            { char: '伍', pinyin: 'wǔ', meaning: '伍字', words: ['伍字卡', '伍方块'], example: '我们正在学习“伍”这个汉字。', minecraftSentence: '在Minecraft里，我用“伍”记录这次方块冒险。' },
            { char: '枫', pinyin: 'fēng', meaning: '枫字', words: ['枫字卡', '枫方块'], example: '我们正在学习“枫”这个汉字。', minecraftSentence: '在Minecraft里，我用“枫”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-13',
        level: 2,
        title: '第13课：一年级识字·基础级',
        characters: [
            { char: '作', pinyin: 'zuò', meaning: '作字', words: ['作字卡', '作方块'], example: '我们正在学习“作”这个汉字。', minecraftSentence: '在Minecraft里，我用“作”记录这次方块冒险。' },
            { char: '利', pinyin: 'lì', meaning: '利字', words: ['利字卡', '利方块'], example: '我们正在学习“利”这个汉字。', minecraftSentence: '在Minecraft里，我用“利”记录这次方块冒险。' },
            { char: '圆', pinyin: 'yuán', meaning: '圆字', words: ['圆字卡', '圆方块'], example: '我们正在学习“圆”这个汉字。', minecraftSentence: '在Minecraft里，我用“圆”记录这次方块冒险。' },
            { char: '边', pinyin: 'biān', meaning: '边字', words: ['边字卡', '边方块'], example: '我们正在学习“边”这个汉字。', minecraftSentence: '在Minecraft里，我用“边”记录这次方块冒险。' },
            { char: '首', pinyin: 'shǒu', meaning: '首字', words: ['首字卡', '首方块'], example: '我们正在学习“首”这个汉字。', minecraftSentence: '在Minecraft里，我用“首”记录这次方块冒险。' },
            { char: '冬', pinyin: 'dōng', meaning: '冬字', words: ['冬字卡', '冬方块'], example: '我们正在学习“冬”这个汉字。', minecraftSentence: '在Minecraft里，我用“冬”记录这次方块冒险。' },
            { char: '担', pinyin: 'dān', meaning: '担字', words: ['担字卡', '担方块'], example: '我们正在学习“担”这个汉字。', minecraftSentence: '在Minecraft里，我用“担”记录这次方块冒险。' },
            { char: '楼', pinyin: 'lóu', meaning: '楼字', words: ['楼字卡', '楼方块'], example: '我们正在学习“楼”这个汉字。', minecraftSentence: '在Minecraft里，我用“楼”记录这次方块冒险。' },
            { char: '号', pinyin: 'hào', meaning: '号字', words: ['号字卡', '号方块'], example: '我们正在学习“号”这个汉字。', minecraftSentence: '在Minecraft里，我用“号”记录这次方块冒险。' },
            { char: '变', pinyin: 'biàn', meaning: '变字', words: ['变字卡', '变方块'], example: '我们正在学习“变”这个汉字。', minecraftSentence: '在Minecraft里，我用“变”记录这次方块冒险。' },
            { char: '法', pinyin: 'fǎ', meaning: '法字', words: ['法字卡', '法方块'], example: '我们正在学习“法”这个汉字。', minecraftSentence: '在Minecraft里，我用“法”记录这次方块冒险。' },
            { char: '前', pinyin: 'qián', meaning: '前字', words: ['前字卡', '前方块'], example: '我们正在学习“前”这个汉字。', minecraftSentence: '在Minecraft里，我用“前”记录这次方块冒险。' },
            { char: '度', pinyin: 'dù', meaning: '度字', words: ['度字卡', '度方块'], example: '我们正在学习“度”这个汉字。', minecraftSentence: '在Minecraft里，我用“度”记录这次方块冒险。' },
            { char: '采', pinyin: 'cǎi', meaning: '采字', words: ['采字卡', '采方块'], example: '我们正在学习“采”这个汉字。', minecraftSentence: '在Minecraft里，我用“采”记录这次方块冒险。' },
            { char: '吹', pinyin: 'chuī', meaning: '吹字', words: ['吹字卡', '吹方块'], example: '我们正在学习“吹”这个汉字。', minecraftSentence: '在Minecraft里，我用“吹”记录这次方块冒险。' },
            { char: '米', pinyin: 'mǐ', meaning: '米字', words: ['米字卡', '米方块'], example: '我们正在学习“米”这个汉字。', minecraftSentence: '在Minecraft里，我用“米”记录这次方块冒险。' },
            { char: '林', pinyin: 'lín', meaning: '林字', words: ['林字卡', '林方块'], example: '我们正在学习“林”这个汉字。', minecraftSentence: '在Minecraft里，我用“林”记录这次方块冒险。' },
            { char: '笔', pinyin: 'bǐ', meaning: '笔字', words: ['笔字卡', '笔方块'], example: '我们正在学习“笔”这个汉字。', minecraftSentence: '在Minecraft里，我用“笔”记录这次方块冒险。' },
            { char: '深', pinyin: 'shēn', meaning: '深字', words: ['深字卡', '深方块'], example: '我们正在学习“深”这个汉字。', minecraftSentence: '在Minecraft里，我用“深”记录这次方块冒险。' },
            { char: '浑', pinyin: 'hún', meaning: '浑字', words: ['浑字卡', '浑方块'], example: '我们正在学习“浑”这个汉字。', minecraftSentence: '在Minecraft里，我用“浑”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L2-14',
        level: 2,
        title: '第14课：一年级识字·基础级',
        characters: [
            { char: '党', pinyin: 'dǎng', meaning: '党字', words: ['党字卡', '党方块'], example: '我们正在学习“党”这个汉字。', minecraftSentence: '在Minecraft里，我用“党”记录这次方块冒险。' },
            { char: '沙', pinyin: 'shā', meaning: '沙字', words: ['沙字卡', '沙方块'], example: '我们正在学习“沙”这个汉字。', minecraftSentence: '在Minecraft里，我用“沙”记录这次方块冒险。' },
            { char: '茫', pinyin: 'máng', meaning: '茫字', words: ['茫字卡', '茫方块'], example: '我们正在学习“茫”这个汉字。', minecraftSentence: '在Minecraft里，我用“茫”记录这次方块冒险。' },
            { char: '友', pinyin: 'yǒu', meaning: '友字', words: ['友字卡', '友方块'], example: '我们正在学习“友”这个汉字。', minecraftSentence: '在Minecraft里，我用“友”记录这次方块冒险。' },
            { char: '肉', pinyin: 'ròu', meaning: '肉字', words: ['肉字卡', '肉方块'], example: '我们正在学习“肉”这个汉字。', minecraftSentence: '在Minecraft里，我用“肉”记录这次方块冒险。' },
            { char: '处', pinyin: 'chù', meaning: '处字', words: ['处字卡', '处方块'], example: '我们正在学习“处”这个汉字。', minecraftSentence: '在Minecraft里，我用“处”记录这次方块冒险。' },
            { char: '如', pinyin: 'rú', meaning: '如字', words: ['如字卡', '如方块'], example: '我们正在学习“如”这个汉字。', minecraftSentence: '在Minecraft里，我用“如”记录这次方块冒险。' },
            { char: '带', pinyin: 'dài', meaning: '带字', words: ['带字卡', '带方块'], example: '我们正在学习“带”这个汉字。', minecraftSentence: '在Minecraft里，我用“带”记录这次方块冒险。' },
            { char: '笑', pinyin: 'xiào', meaning: '笑字', words: ['笑字卡', '笑方块'], example: '我们正在学习“笑”这个汉字。', minecraftSentence: '在Minecraft里，我用“笑”记录这次方块冒险。' },
            { char: '苍', pinyin: 'cāng', meaning: '苍字', words: ['苍字卡', '苍方块'], example: '我们正在学习“苍”这个汉字。', minecraftSentence: '在Minecraft里，我用“苍”记录这次方块冒险。' },
            { char: '包', pinyin: 'bāo', meaning: '包字', words: ['包字卡', '包方块'], example: '我们正在学习“包”这个汉字。', minecraftSentence: '在Minecraft里，我用“包”记录这次方块冒险。' },
            { char: '辛', pinyin: 'xīn', meaning: '辛字', words: ['辛字卡', '辛方块'], example: '我们正在学习“辛”这个汉字。', minecraftSentence: '在Minecraft里，我用“辛”记录这次方块冒险。' }
        ]
    },

    // ============ 第三级 初级（一年级全量覆盖，顺序已锁定） ============
    {
        id: 'L3-1',
        level: 3,
        title: '第1课：一年级识字·初级',
        characters: [
            { char: '积', pinyin: 'jī', meaning: '积字', words: ['积字卡', '积方块'], example: '我们正在学习“积”这个汉字。', minecraftSentence: '在Minecraft里，我用“积”记录这次方块冒险。' },
            { char: '蓝', pinyin: 'lán', meaning: '蓝字', words: ['蓝字卡', '蓝方块'], example: '我们正在学习“蓝”这个汉字。', minecraftSentence: '在Minecraft里，我用“蓝”记录这次方块冒险。' },
            { char: '桌', pinyin: 'zhuō', meaning: '桌字', words: ['桌字卡', '桌方块'], example: '我们正在学习“桌”这个汉字。', minecraftSentence: '在Minecraft里，我用“桌”记录这次方块冒险。' },
            { char: '川', pinyin: 'chuān', meaning: '川字', words: ['川字卡', '川方块'], example: '我们正在学习“川”这个汉字。', minecraftSentence: '在Minecraft里，我用“川”记录这次方块冒险。' },
            { char: '喜', pinyin: 'xǐ', meaning: '喜字', words: ['喜字卡', '喜方块'], example: '我们正在学习“喜”这个汉字。', minecraftSentence: '在Minecraft里，我用“喜”记录这次方块冒险。' },
            { char: '条', pinyin: 'tiáo', meaning: '条字', words: ['条字卡', '条方块'], example: '我们正在学习“条”这个汉字。', minecraftSentence: '在Minecraft里，我用“条”记录这次方块冒险。' },
            { char: '脚', pinyin: 'jiǎo', meaning: '脚字', words: ['脚字卡', '脚方块'], example: '我们正在学习“脚”这个汉字。', minecraftSentence: '在Minecraft里，我用“脚”记录这次方块冒险。' },
            { char: '铃', pinyin: 'líng', meaning: '铃字', words: ['铃字卡', '铃方块'], example: '我们正在学习“铃”这个汉字。', minecraftSentence: '在Minecraft里，我用“铃”记录这次方块冒险。' },
            { char: '萍', pinyin: 'píng', meaning: '萍字', words: ['萍字卡', '萍方块'], example: '我们正在学习“萍”这个汉字。', minecraftSentence: '在Minecraft里，我用“萍”记录这次方块冒险。' },
            { char: '姐', pinyin: 'jiě', meaning: '姐字', words: ['姐字卡', '姐方块'], example: '我们正在学习“姐”这个汉字。', minecraftSentence: '在Minecraft里，我用“姐”记录这次方块冒险。' },
            { char: '蚁', pinyin: 'yǐ', meaning: '蚁字', words: ['蚁字卡', '蚁方块'], example: '我们正在学习“蚁”这个汉字。', minecraftSentence: '在Minecraft里，我用“蚁”记录这次方块冒险。' },
            { char: '招', pinyin: 'zhāo', meaning: '招字', words: ['招字卡', '招方块'], example: '我们正在学习“招”这个汉字。', minecraftSentence: '在Minecraft里，我用“招”记录这次方块冒险。' },
            { char: '金', pinyin: 'jīn', meaning: '金字', words: ['金字卡', '金方块'], example: '我们正在学习“金”这个汉字。', minecraftSentence: '在Minecraft里，我用“金”记录这次方块冒险。' },
            { char: '烟', pinyin: 'yān', meaning: '烟字', words: ['烟字卡', '烟方块'], example: '我们正在学习“烟”这个汉字。', minecraftSentence: '在Minecraft里，我用“烟”记录这次方块冒险。' },
            { char: '医', pinyin: 'yī', meaning: '医字', words: ['医字卡', '医方块'], example: '我们正在学习“医”这个汉字。', minecraftSentence: '在Minecraft里，我用“医”记录这次方块冒险。' },
            { char: '浮', pinyin: 'fú', meaning: '浮字', words: ['浮字卡', '浮方块'], example: '我们正在学习“浮”这个汉字。', minecraftSentence: '在Minecraft里，我用“浮”记录这次方块冒险。' },
            { char: '绿', pinyin: 'lǜ', meaning: '绿字', words: ['绿字卡', '绿方块'], example: '我们正在学习“绿”这个汉字。', minecraftSentence: '在Minecraft里，我用“绿”记录这次方块冒险。' },
            { char: '睡', pinyin: 'shuì', meaning: '睡字', words: ['睡字卡', '睡方块'], example: '我们正在学习“睡”这个汉字。', minecraftSentence: '在Minecraft里，我用“睡”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-2',
        level: 3,
        title: '第2课：一年级识字·初级',
        characters: [
            { char: '怎', pinyin: 'zěn', meaning: '怎字', words: ['怎字卡', '怎方块'], example: '我们正在学习“怎”这个汉字。', minecraftSentence: '在Minecraft里，我用“怎”记录这次方块冒险。' },
            { char: '浪', pinyin: 'làng', meaning: '浪字', words: ['浪字卡', '浪方块'], example: '我们正在学习“浪”这个汉字。', minecraftSentence: '在Minecraft里，我用“浪”记录这次方块冒险。' },
            { char: '球', pinyin: 'qiú', meaning: '球字', words: ['球字卡', '球方块'], example: '我们正在学习“球”这个汉字。', minecraftSentence: '在Minecraft里，我用“球”记录这次方块冒险。' },
            { char: '选', pinyin: 'xuǎn', meaning: '选字', words: ['选字卡', '选方块'], example: '我们正在学习“选”这个汉字。', minecraftSentence: '在Minecraft里，我用“选”记录这次方块冒险。' },
            { char: '连', pinyin: 'lián', meaning: '连字', words: ['连字卡', '连方块'], example: '我们正在学习“连”这个汉字。', minecraftSentence: '在Minecraft里，我用“连”记录这次方块冒险。' },
            { char: '弟', pinyin: 'dì', meaning: '弟字', words: ['弟字卡', '弟方块'], example: '我们正在学习“弟”这个汉字。', minecraftSentence: '在Minecraft里，我用“弟”记录这次方块冒险。' },
            { char: '蚂', pinyin: 'mǎ', meaning: '蚂字', words: ['蚂字卡', '蚂方块'], example: '我们正在学习“蚂”这个汉字。', minecraftSentence: '在Minecraft里，我用“蚂”记录这次方块冒险。' },
            { char: '觉', pinyin: 'jué', meaning: '觉字', words: ['觉字卡', '觉方块'], example: '我们正在学习“觉”这个汉字。', minecraftSentence: '在Minecraft里，我用“觉”记录这次方块冒险。' },
            { char: '神', pinyin: 'shén', meaning: '神字', words: ['神字卡', '神方块'], example: '我们正在学习“神”这个汉字。', minecraftSentence: '在Minecraft里，我用“神”记录这次方块冒险。' },
            { char: '丽', pinyin: 'lì', meaning: '丽字', words: ['丽字卡', '丽方块'], example: '我们正在学习“丽”这个汉字。', minecraftSentence: '在Minecraft里，我用“丽”记录这次方块冒险。' },
            { char: '粽', pinyin: 'zòng', meaning: '粽字', words: ['粽字卡', '粽方块'], example: '我们正在学习“粽”这个汉字。', minecraftSentence: '在Minecraft里，我用“粽”记录这次方块冒险。' },
            { char: '露', pinyin: 'lù', meaning: '露字', words: ['露字卡', '露方块'], example: '我们正在学习“露”这个汉字。', minecraftSentence: '在Minecraft里，我用“露”记录这次方块冒险。' },
            { char: '黑', pinyin: 'hēi', meaning: '黑字', words: ['黑字卡', '黑方块'], example: '我们正在学习“黑”这个汉字。', minecraftSentence: '在Minecraft里，我用“黑”记录这次方块冒险。' },
            { char: '式', pinyin: 'shì', meaning: '式字', words: ['式字卡', '式方块'], example: '我们正在学习“式”这个汉字。', minecraftSentence: '在Minecraft里，我用“式”记录这次方块冒险。' },
            { char: '城', pinyin: 'chéng', meaning: '城字', words: ['城字卡', '城方块'], example: '我们正在学习“城”这个汉字。', minecraftSentence: '在Minecraft里，我用“城”记录这次方块冒险。' },
            { char: '汗', pinyin: 'hàn', meaning: '汗字', words: ['汗字卡', '汗方块'], example: '我们正在学习“汗”这个汉字。', minecraftSentence: '在Minecraft里，我用“汗”记录这次方块冒险。' },
            { char: '孤', pinyin: 'gū', meaning: '孤字', words: ['孤字卡', '孤方块'], example: '我们正在学习“孤”这个汉字。', minecraftSentence: '在Minecraft里，我用“孤”记录这次方块冒险。' },
            { char: '层', pinyin: 'céng', meaning: '层字', words: ['层字卡', '层方块'], example: '我们正在学习“层”这个汉字。', minecraftSentence: '在Minecraft里，我用“层”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-3',
        level: 3,
        title: '第3课：一年级识字·初级',
        characters: [
            { char: '闭', pinyin: 'bì', meaning: '闭字', words: ['闭字卡', '闭方块'], example: '我们正在学习“闭”这个汉字。', minecraftSentence: '在Minecraft里，我用“闭”记录这次方块冒险。' },
            { char: '哥', pinyin: 'gē', meaning: '哥字', words: ['哥字卡', '哥方块'], example: '我们正在学习“哥”这个汉字。', minecraftSentence: '在Minecraft里，我用“哥”记录这次方块冒险。' },
            { char: '鸡', pinyin: 'jī', meaning: '鸡字', words: ['鸡字卡', '鸡方块'], example: '我们正在学习“鸡”这个汉字。', minecraftSentence: '在Minecraft里，我用“鸡”记录这次方块冒险。' },
            { char: '偷', pinyin: 'tōu', meaning: '偷字', words: ['偷字卡', '偷方块'], example: '我们正在学习“偷”这个汉字。', minecraftSentence: '在Minecraft里，我用“偷”记录这次方块冒险。' },
            { char: '鸦', pinyin: 'yā', meaning: '鸦字', words: ['鸦字卡', '鸦方块'], example: '我们正在学习“鸦”这个汉字。', minecraftSentence: '在Minecraft里，我用“鸦”记录这次方块冒险。' },
            { char: '依', pinyin: 'yī', meaning: '依字', words: ['依字卡', '依方块'], example: '我们正在学习“依”这个汉字。', minecraftSentence: '在Minecraft里，我用“依”记录这次方块冒险。' },
            { char: '拉', pinyin: 'lā', meaning: '拉字', words: ['拉字卡', '拉方块'], example: '我们正在学习“拉”这个汉字。', minecraftSentence: '在Minecraft里，我用“拉”记录这次方块冒险。' },
            { char: '朝', pinyin: 'cháo', meaning: '朝字', words: ['朝字卡', '朝方块'], example: '我们正在学习“朝”这个汉字。', minecraftSentence: '在Minecraft里，我用“朝”记录这次方块冒险。' },
            { char: '黄', pinyin: 'huáng', meaning: '黄字', words: ['黄字卡', '黄方块'], example: '我们正在学习“黄”这个汉字。', minecraftSentence: '在Minecraft里，我用“黄”记录这次方块冒险。' },
            { char: '蛙', pinyin: 'wā', meaning: '蛙字', words: ['蛙字卡', '蛙方块'], example: '我们正在学习“蛙”这个汉字。', minecraftSentence: '在Minecraft里，我用“蛙”记录这次方块冒险。' },
            { char: '姓', pinyin: 'xìng', meaning: '姓字', words: ['姓字卡', '姓方块'], example: '我们正在学习“姓”这个汉字。', minecraftSentence: '在Minecraft里，我用“姓”记录这次方块冒险。' },
            { char: '淘', pinyin: 'táo', meaning: '淘字', words: ['淘字卡', '淘方块'], example: '我们正在学习“淘”这个汉字。', minecraftSentence: '在Minecraft里，我用“淘”记录这次方块冒险。' },
            { char: '鞭', pinyin: 'biān', meaning: '鞭字', words: ['鞭字卡', '鞭方块'], example: '我们正在学习“鞭”这个汉字。', minecraftSentence: '在Minecraft里，我用“鞭”记录这次方块冒险。' },
            { char: '升', pinyin: 'shēng', meaning: '升字', words: ['升字卡', '升方块'], example: '我们正在学习“升”这个汉字。', minecraftSentence: '在Minecraft里，我用“升”记录这次方块冒险。' },
            { char: '李', pinyin: 'lǐ', meaning: '李字', words: ['李字卡', '李方块'], example: '我们正在学习“李”这个汉字。', minecraftSentence: '在Minecraft里，我用“李”记录这次方块冒险。' },
            { char: '奶', pinyin: 'nǎi', meaning: '奶字', words: ['奶字卡', '奶方块'], example: '我们正在学习“奶”这个汉字。', minecraftSentence: '在Minecraft里，我用“奶”记录这次方块冒险。' },
            { char: '狗', pinyin: 'gǒu', meaning: '狗字', words: ['狗字卡', '狗方块'], example: '我们正在学习“狗”这个汉字。', minecraftSentence: '在Minecraft里，我用“狗”记录这次方块冒险。' },
            { char: '件', pinyin: 'jiàn', meaning: '件字', words: ['件字卡', '件方块'], example: '我们正在学习“件”这个汉字。', minecraftSentence: '在Minecraft里，我用“件”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-4',
        level: 3,
        title: '第4课：一年级识字·初级',
        characters: [
            { char: '荷', pinyin: 'hé', meaning: '荷字', words: ['荷字卡', '荷方块'], example: '我们正在学习“荷”这个汉字。', minecraftSentence: '在Minecraft里，我用“荷”记录这次方块冒险。' },
            { char: '洁', pinyin: 'jié', meaning: '洁字', words: ['洁字卡', '洁方块'], example: '我们正在学习“洁”这个汉字。', minecraftSentence: '在Minecraft里，我用“洁”记录这次方块冒险。' },
            { char: '暑', pinyin: 'shǔ', meaning: '暑字', words: ['暑字卡', '暑方块'], example: '我们正在学习“暑”这个汉字。', minecraftSentence: '在Minecraft里，我用“暑”记录这次方块冒险。' },
            { char: '数', pinyin: 'shù', meaning: '数字', words: ['数字卡', '数方块'], example: '我们正在学习“数”这个汉字。', minecraftSentence: '在Minecraft里，我用“数”记录这次方块冒险。' },
            { char: '排', pinyin: 'pái', meaning: '排字', words: ['排字卡', '排方块'], example: '我们正在学习“排”这个汉字。', minecraftSentence: '在Minecraft里，我用“排”记录这次方块冒险。' },
            { char: '绳', pinyin: 'shéng', meaning: '绳字', words: ['绳字卡', '绳方块'], example: '我们正在学习“绳”这个汉字。', minecraftSentence: '在Minecraft里，我用“绳”记录这次方块冒险。' },
            { char: '凉', pinyin: 'liáng', meaning: '凉字', words: ['凉字卡', '凉方块'], example: '我们正在学习“凉”这个汉字。', minecraftSentence: '在Minecraft里，我用“凉”记录这次方块冒险。' },
            { char: '胜', pinyin: 'shèng', meaning: '胜字', words: ['胜字卡', '胜方块'], example: '我们正在学习“胜”这个汉字。', minecraftSentence: '在Minecraft里，我用“胜”记录这次方块冒险。' },
            { char: '冰', pinyin: 'bīng', meaning: '冰字', words: ['冰字卡', '冰方块'], example: '我们正在学习“冰”这个汉字。', minecraftSentence: '在Minecraft里，我用“冰”记录这次方块冒险。' },
            { char: '弯', pinyin: 'wān', meaning: '弯字', words: ['弯字卡', '弯方块'], example: '我们正在学习“弯”这个汉字。', minecraftSentence: '在Minecraft里，我用“弯”记录这次方块冒险。' },
            { char: '叔', pinyin: 'shū', meaning: '叔字', words: ['叔字卡', '叔方块'], example: '我们正在学习“叔”这个汉字。', minecraftSentence: '在Minecraft里，我用“叔”记录这次方块冒险。' },
            { char: '猪', pinyin: 'zhū', meaning: '猪字', words: ['猪字卡', '猪方块'], example: '我们正在学习“猪”这个汉字。', minecraftSentence: '在Minecraft里，我用“猪”记录这次方块冒险。' },
            { char: '茶', pinyin: 'chá', meaning: '茶字', words: ['茶字卡', '茶方块'], example: '我们正在学习“茶”这个汉字。', minecraftSentence: '在Minecraft里，我用“茶”记录这次方块冒险。' },
            { char: '图', pinyin: 'tú', meaning: '图字', words: ['图字卡', '图方块'], example: '我们正在学习“图”这个汉字。', minecraftSentence: '在Minecraft里，我用“图”记录这次方块冒险。' },
            { char: '氏', pinyin: 'shì', meaning: '氏字', words: ['氏字卡', '氏方块'], example: '我们正在学习“氏”这个汉字。', minecraftSentence: '在Minecraft里，我用“氏”记录这次方块冒险。' },
            { char: '观', pinyin: 'guān', meaning: '观字', words: ['观字卡', '观方块'], example: '我们正在学习“观”这个汉字。', minecraftSentence: '在Minecraft里，我用“观”记录这次方块冒险。' },
            { char: '办', pinyin: 'bàn', meaning: '办字', words: ['办字卡', '办方块'], example: '我们正在学习“办”这个汉字。', minecraftSentence: '在Minecraft里，我用“办”记录这次方块冒险。' },
            { char: '参', pinyin: 'cān', meaning: '参字', words: ['参字卡', '参方块'], example: '我们正在学习“参”这个汉字。', minecraftSentence: '在Minecraft里，我用“参”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-5',
        level: 3,
        title: '第5课：一年级识字·初级',
        characters: [
            { char: '喝', pinyin: 'hē', meaning: '喝字', words: ['喝字卡', '喝方块'], example: '我们正在学习“喝”这个汉字。', minecraftSentence: '在Minecraft里，我用“喝”记录这次方块冒险。' },
            { char: '校', pinyin: 'xiào', meaning: '校字', words: ['校字卡', '校方块'], example: '我们正在学习“校”这个汉字。', minecraftSentence: '在Minecraft里，我用“校”记录这次方块冒险。' },
            { char: '但', pinyin: 'dàn', meaning: '但字', words: ['但字卡', '但方块'], example: '我们正在学习“但”这个汉字。', minecraftSentence: '在Minecraft里，我用“但”记录这次方块冒险。' },
            { char: '疑', pinyin: 'yí', meaning: '疑字', words: ['疑字卡', '疑方块'], example: '我们正在学习“疑”这个汉字。', minecraftSentence: '在Minecraft里，我用“疑”记录这次方块冒险。' },
            { char: '路', pinyin: 'lù', meaning: '路字', words: ['路字卡', '路方块'], example: '我们正在学习“路”这个汉字。', minecraftSentence: '在Minecraft里，我用“路”记录这次方块冒险。' },
            { char: '妹', pinyin: 'mèi', meaning: '妹字', words: ['妹字卡', '妹方块'], example: '我们正在学习“妹”这个汉字。', minecraftSentence: '在Minecraft里，我用“妹”记录这次方块冒险。' },
            { char: '鸭', pinyin: 'yā', meaning: '鸭字', words: ['鸭字卡', '鸭方块'], example: '我们正在学习“鸭”这个汉字。', minecraftSentence: '在Minecraft里，我用“鸭”记录这次方块冒险。' },
            { char: '粮', pinyin: 'liáng', meaning: '粮字', words: ['粮字卡', '粮方块'], example: '我们正在学习“粮”这个汉字。', minecraftSentence: '在Minecraft里，我用“粮”记录这次方块冒险。' },
            { char: '乱', pinyin: 'luàn', meaning: '乱字', words: ['乱字卡', '乱方块'], example: '我们正在学习“乱”这个汉字。', minecraftSentence: '在Minecraft里，我用“乱”记录这次方块冒险。' },
            { char: '裤', pinyin: 'kù', meaning: '裤字', words: ['裤字卡', '裤方块'], example: '我们正在学习“裤”这个汉字。', minecraftSentence: '在Minecraft里，我用“裤”记录这次方块冒险。' },
            { char: '团', pinyin: 'tuán', meaning: '团字', words: ['团字卡', '团方块'], example: '我们正在学习“团”这个汉字。', minecraftSentence: '在Minecraft里，我用“团”记录这次方块冒险。' },
            { char: '鲜', pinyin: 'xiān', meaning: '鲜字', words: ['鲜字卡', '鲜方块'], example: '我们正在学习“鲜”这个汉字。', minecraftSentence: '在Minecraft里，我用“鲜”记录这次方块冒险。' },
            { char: '份', pinyin: 'fèn', meaning: '份字', words: ['份字卡', '份方块'], example: '我们正在学习“份”这个汉字。', minecraftSentence: '在Minecraft里，我用“份”记录这次方块冒险。' },
            { char: '央', pinyin: 'yāng', meaning: '央字', words: ['央字卡', '央方块'], example: '我们正在学习“央”这个汉字。', minecraftSentence: '在Minecraft里，我用“央”记录这次方块冒险。' },
            { char: '直', pinyin: 'zhí', meaning: '直字', words: ['直字卡', '直方块'], example: '我们正在学习“直”这个汉字。', minecraftSentence: '在Minecraft里，我用“直”记录这次方块冒险。' },
            { char: '孙', pinyin: 'sūn', meaning: '孙字', words: ['孙字卡', '孙方块'], example: '我们正在学习“孙”这个汉字。', minecraftSentence: '在Minecraft里，我用“孙”记录这次方块冒险。' },
            { char: '盼', pinyin: 'pàn', meaning: '盼字', words: ['盼字卡', '盼方块'], example: '我们正在学习“盼”这个汉字。', minecraftSentence: '在Minecraft里，我用“盼”记录这次方块冒险。' },
            { char: '念', pinyin: 'niàn', meaning: '念字', words: ['念字卡', '念方块'], example: '我们正在学习“念”这个汉字。', minecraftSentence: '在Minecraft里，我用“念”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-6',
        level: 3,
        title: '第6课：一年级识字·初级',
        characters: [
            { char: '爷', pinyin: 'yé', meaning: '爷字', words: ['爷字卡', '爷方块'], example: '我们正在学习“爷”这个汉字。', minecraftSentence: '在Minecraft里，我用“爷”记录这次方块冒险。' },
            { char: '严', pinyin: 'yán', meaning: '严字', words: ['严字卡', '严方块'], example: '我们正在学习“严”这个汉字。', minecraftSentence: '在Minecraft里，我用“严”记录这次方块冒险。' },
            { char: '幸', pinyin: 'xìng', meaning: '幸字', words: ['幸字卡', '幸方块'], example: '我们正在学习“幸”这个汉字。', minecraftSentence: '在Minecraft里，我用“幸”记录这次方块冒险。' },
            { char: '形', pinyin: 'xíng', meaning: '形字', words: ['形字卡', '形方块'], example: '我们正在学习“形”这个汉字。', minecraftSentence: '在Minecraft里，我用“形”记录这次方块冒险。' },
            { char: '晚', pinyin: 'wǎn', meaning: '晚字', words: ['晚字卡', '晚方块'], example: '我们正在学习“晚”这个汉字。', minecraftSentence: '在Minecraft里，我用“晚”记录这次方块冒险。' },
            { char: '跟', pinyin: 'gēn', meaning: '跟字', words: ['跟字卡', '跟方块'], example: '我们正在学习“跟”这个汉字。', minecraftSentence: '在Minecraft里，我用“跟”记录这次方块冒险。' },
            { char: '算', pinyin: 'suàn', meaning: '算字', words: ['算字卡', '算方块'], example: '我们正在学习“算”这个汉字。', minecraftSentence: '在Minecraft里，我用“算”记录这次方块冒险。' },
            { char: '诗', pinyin: 'shī', meaning: '诗字', words: ['诗字卡', '诗方块'], example: '我们正在学习“诗”这个汉字。', minecraftSentence: '在Minecraft里，我用“诗”记录这次方块冒险。' },
            { char: '丢', pinyin: 'diū', meaning: '丢字', words: ['丢字卡', '丢方块'], example: '我们正在学习“丢”这个汉字。', minecraftSentence: '在Minecraft里，我用“丢”记录这次方块冒险。' },
            { char: '忽', pinyin: 'hū', meaning: '忽字', words: ['忽字卡', '忽方块'], example: '我们正在学习“忽”这个汉字。', minecraftSentence: '在Minecraft里，我用“忽”记录这次方块冒险。' },
            { char: '情', pinyin: 'qíng', meaning: '情字', words: ['情字卡', '情方块'], example: '我们正在学习“情”这个汉字。', minecraftSentence: '在Minecraft里，我用“情”记录这次方块冒险。' },
            { char: '际', pinyin: 'jì', meaning: '际字', words: ['际字卡', '际方块'], example: '我们正在学习“际”这个汉字。', minecraftSentence: '在Minecraft里，我用“际”记录这次方块冒险。' },
            { char: '香', pinyin: 'xiāng', meaning: '香字', words: ['香字卡', '香方块'], example: '我们正在学习“香”这个汉字。', minecraftSentence: '在Minecraft里，我用“香”记录这次方块冒险。' },
            { char: '劲', pinyin: 'jìn', meaning: '劲字', words: ['劲字卡', '劲方块'], example: '我们正在学习“劲”这个汉字。', minecraftSentence: '在Minecraft里，我用“劲”记录这次方块冒险。' },
            { char: '踢', pinyin: 'tī', meaning: '踢字', words: ['踢字卡', '踢方块'], example: '我们正在学习“踢”这个汉字。', minecraftSentence: '在Minecraft里，我用“踢”记录这次方块冒险。' },
            { char: '话', pinyin: 'huà', meaning: '话字', words: ['话字卡', '话方块'], example: '我们正在学习“话”这个汉字。', minecraftSentence: '在Minecraft里，我用“话”记录这次方块冒险。' },
            { char: '尾', pinyin: 'wěi', meaning: '尾字', words: ['尾字卡', '尾方块'], example: '我们正在学习“尾”这个汉字。', minecraftSentence: '在Minecraft里，我用“尾”记录这次方块冒险。' },
            { char: '外', pinyin: 'wài', meaning: '外字', words: ['外字卡', '外方块'], example: '我们正在学习“外”这个汉字。', minecraftSentence: '在Minecraft里，我用“外”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-7',
        level: 3,
        title: '第7课：一年级识字·初级',
        characters: [
            { char: '巨', pinyin: 'jù', meaning: '巨字', words: ['巨字卡', '巨方块'], example: '我们正在学习“巨”这个汉字。', minecraftSentence: '在Minecraft里，我用“巨”记录这次方块冒险。' },
            { char: '枝', pinyin: 'zhī', meaning: '枝字', words: ['枝字卡', '枝方块'], example: '我们正在学习“枝”这个汉字。', minecraftSentence: '在Minecraft里，我用“枝”记录这次方块冒险。' },
            { char: '霞', pinyin: 'xiá', meaning: '霞字', words: ['霞字卡', '霞方块'], example: '我们正在学习“霞”这个汉字。', minecraftSentence: '在Minecraft里，我用“霞”记录这次方块冒险。' },
            { char: '藏', pinyin: 'cáng', meaning: '藏字', words: ['藏字卡', '藏方块'], example: '我们正在学习“藏”这个汉字。', minecraftSentence: '在Minecraft里，我用“藏”记录这次方块冒险。' },
            { char: '却', pinyin: 'què', meaning: '却字', words: ['却字卡', '却方块'], example: '我们正在学习“却”这个汉字。', minecraftSentence: '在Minecraft里，我用“却”记录这次方块冒险。' },
            { char: '教', pinyin: 'jiào', meaning: '教字', words: ['教字卡', '教方块'], example: '我们正在学习“教”这个汉字。', minecraftSentence: '在Minecraft里，我用“教”记录这次方块冒险。' },
            { char: '全', pinyin: 'quán', meaning: '全字', words: ['全字卡', '全方块'], example: '我们正在学习“全”这个汉字。', minecraftSentence: '在Minecraft里，我用“全”记录这次方块冒险。' },
            { char: '沿', pinyin: 'yán', meaning: '沿字', words: ['沿字卡', '沿方块'], example: '我们正在学习“沿”这个汉字。', minecraftSentence: '在Minecraft里，我用“沿”记录这次方块冒险。' },
            { char: '福', pinyin: 'fú', meaning: '福字', words: ['福字卡', '福方块'], example: '我们正在学习“福”这个汉字。', minecraftSentence: '在Minecraft里，我用“福”记录这次方块冒险。' },
            { char: '食', pinyin: 'shí', meaning: '食字', words: ['食字卡', '食方块'], example: '我们正在学习“食”这个汉字。', minecraftSentence: '在Minecraft里，我用“食”记录这次方块冒险。' },
            { char: '真', pinyin: 'zhēn', meaning: '真字', words: ['真字卡', '真方块'], example: '我们正在学习“真”这个汉字。', minecraftSentence: '在Minecraft里，我用“真”记录这次方块冒险。' },
            { char: '湾', pinyin: 'wān', meaning: '湾字', words: ['湾字卡', '湾方块'], example: '我们正在学习“湾”这个汉字。', minecraftSentence: '在Minecraft里，我用“湾”记录这次方块冒险。' },
            { char: '居', pinyin: 'jū', meaning: '居字', words: ['居字卡', '居方块'], example: '我们正在学习“居”这个汉字。', minecraftSentence: '在Minecraft里，我用“居”记录这次方块冒险。' },
            { char: '泡', pinyin: 'pào', meaning: '泡字', words: ['泡字卡', '泡方块'], example: '我们正在学习“泡”这个汉字。', minecraftSentence: '在Minecraft里，我用“泡”记录这次方块冒险。' },
            { char: '最', pinyin: 'zuì', meaning: '最字', words: ['最字卡', '最方块'], example: '我们正在学习“最”这个汉字。', minecraftSentence: '在Minecraft里，我用“最”记录这次方块冒险。' },
            { char: '怀', pinyin: 'huái', meaning: '怀字', words: ['怀字卡', '怀方块'], example: '我们正在学习“怀”这个汉字。', minecraftSentence: '在Minecraft里，我用“怀”记录这次方块冒险。' },
            { char: '夏', pinyin: 'xià', meaning: '夏字', words: ['夏字卡', '夏方块'], example: '我们正在学习“夏”这个汉字。', minecraftSentence: '在Minecraft里，我用“夏”记录这次方块冒险。' },
            { char: '词', pinyin: 'cí', meaning: '词字', words: ['词字卡', '词方块'], example: '我们正在学习“词”这个汉字。', minecraftSentence: '在Minecraft里，我用“词”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-8',
        level: 3,
        title: '第8课：一年级识字·初级',
        characters: [
            { char: '羽', pinyin: 'yǔ', meaning: '羽字', words: ['羽字卡', '羽方块'], example: '我们正在学习“羽”这个汉字。', minecraftSentence: '在Minecraft里，我用“羽”记录这次方块冒险。' },
            { char: '短', pinyin: 'duǎn', meaning: '短字', words: ['短字卡', '短方块'], example: '我们正在学习“短”这个汉字。', minecraftSentence: '在Minecraft里，我用“短”记录这次方块冒险。' },
            { char: '菜', pinyin: 'cài', meaning: '菜字', words: ['菜字卡', '菜方块'], example: '我们正在学习“菜”这个汉字。', minecraftSentence: '在Minecraft里，我用“菜”记录这次方块冒险。' },
            { char: '静', pinyin: 'jìng', meaning: '静字', words: ['静字卡', '静方块'], example: '我们正在学习“静”这个汉字。', minecraftSentence: '在Minecraft里，我用“静”记录这次方块冒险。' },
            { char: '亲', pinyin: 'qīn', meaning: '亲字', words: ['亲字卡', '亲方块'], example: '我们正在学习“亲”这个汉字。', minecraftSentence: '在Minecraft里，我用“亲”记录这次方块冒险。' },
            { char: '单', pinyin: 'dān', meaning: '单字', words: ['单字卡', '单方块'], example: '我们正在学习“单”这个汉字。', minecraftSentence: '在Minecraft里，我用“单”记录这次方块冒险。' },
            { char: '树', pinyin: 'shù', meaning: '树字', words: ['树字卡', '树方块'], example: '我们正在学习“树”这个汉字。', minecraftSentence: '在Minecraft里，我用“树”记录这次方块冒险。' },
            { char: '游', pinyin: 'yóu', meaning: '游字', words: ['游字卡', '游方块'], example: '我们正在学习“游”这个汉字。', minecraftSentence: '在Minecraft里，我用“游”记录这次方块冒险。' },
            { char: '挂', pinyin: 'guà', meaning: '挂字', words: ['挂字卡', '挂方块'], example: '我们正在学习“挂”这个汉字。', minecraftSentence: '在Minecraft里，我用“挂”记录这次方块冒险。' },
            { char: '发', pinyin: 'fā', meaning: '发字', words: ['发字卡', '发方块'], example: '我们正在学习“发”这个汉字。', minecraftSentence: '在Minecraft里，我用“发”记录这次方块冒险。' },
            { char: '级', pinyin: 'jí', meaning: '级字', words: ['级字卡', '级方块'], example: '我们正在学习“级”这个汉字。', minecraftSentence: '在Minecraft里，我用“级”记录这次方块冒险。' },
            { char: '棋', pinyin: 'qí', meaning: '棋字', words: ['棋字卡', '棋方块'], example: '我们正在学习“棋”这个汉字。', minecraftSentence: '在Minecraft里，我用“棋”记录这次方块冒险。' },
            { char: '场', pinyin: 'chǎng', meaning: '场字', words: ['场字卡', '场方块'], example: '我们正在学习“场”这个汉字。', minecraftSentence: '在Minecraft里，我用“场”记录这次方块冒险。' },
            { char: '常', pinyin: 'cháng', meaning: '常字', words: ['常字卡', '常方块'], example: '我们正在学习“常”这个汉字。', minecraftSentence: '在Minecraft里，我用“常”记录这次方块冒险。' },
            { char: '晨', pinyin: 'chén', meaning: '晨字', words: ['晨字卡', '晨方块'], example: '我们正在学习“晨”这个汉字。', minecraftSentence: '在Minecraft里，我用“晨”记录这次方块冒险。' },
            { char: '暖', pinyin: 'nuǎn', meaning: '暖字', words: ['暖字卡', '暖方块'], example: '我们正在学习“暖”这个汉字。', minecraftSentence: '在Minecraft里，我用“暖”记录这次方块冒险。' },
            { char: '拍', pinyin: 'pāi', meaning: '拍字', words: ['拍字卡', '拍方块'], example: '我们正在学习“拍”这个汉字。', minecraftSentence: '在Minecraft里，我用“拍”记录这次方块冒险。' },
            { char: '减', pinyin: 'jiǎn', meaning: '减字', words: ['减字卡', '减方块'], example: '我们正在学习“减”这个汉字。', minecraftSentence: '在Minecraft里，我用“减”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-9',
        level: 3,
        title: '第9课：一年级识字·初级',
        characters: [
            { char: '热', pinyin: 'rè', meaning: '热字', words: ['热字卡', '热方块'], example: '我们正在学习“热”这个汉字。', minecraftSentence: '在Minecraft里，我用“热”记录这次方块冒险。' },
            { char: '呼', pinyin: 'hū', meaning: '呼字', words: ['呼字卡', '呼方块'], example: '我们正在学习“呼”这个汉字。', minecraftSentence: '在Minecraft里，我用“呼”记录这次方块冒险。' },
            { char: '流', pinyin: 'liú', meaning: '流字', words: ['流字卡', '流方块'], example: '我们正在学习“流”这个汉字。', minecraftSentence: '在Minecraft里，我用“流”记录这次方块冒险。' },
            { char: '望', pinyin: 'wàng', meaning: '望字', words: ['望字卡', '望方块'], example: '我们正在学习“望”这个汉字。', minecraftSentence: '在Minecraft里，我用“望”记录这次方块冒险。' },
            { char: '煮', pinyin: 'zhǔ', meaning: '煮字', words: ['煮字卡', '煮方块'], example: '我们正在学习“煮”这个汉字。', minecraftSentence: '在Minecraft里，我用“煮”记录这次方块冒险。' },
            { char: '枯', pinyin: 'kū', meaning: '枯字', words: ['枯字卡', '枯方块'], example: '我们正在学习“枯”这个汉字。', minecraftSentence: '在Minecraft里，我用“枯”记录这次方块冒险。' },
            { char: '霜', pinyin: 'shuāng', meaning: '霜字', words: ['霜字卡', '霜方块'], example: '我们正在学习“霜”这个汉字。', minecraftSentence: '在Minecraft里，我用“霜”记录这次方块冒险。' },
            { char: '想', pinyin: 'xiǎng', meaning: '想字', words: ['想字卡', '想方块'], example: '我们正在学习“想”这个汉字。', minecraftSentence: '在Minecraft里，我用“想”记录这次方块冒险。' },
            { char: '彩', pinyin: 'cǎi', meaning: '彩字', words: ['彩字卡', '彩方块'], example: '我们正在学习“彩”这个汉字。', minecraftSentence: '在Minecraft里，我用“彩”记录这次方块冒险。' },
            { char: '酷', pinyin: 'kù', meaning: '酷字', words: ['酷字卡', '酷方块'], example: '我们正在学习“酷”这个汉字。', minecraftSentence: '在Minecraft里，我用“酷”记录这次方块冒险。' },
            { char: '莲', pinyin: 'lián', meaning: '莲字', words: ['莲字卡', '莲方块'], example: '我们正在学习“莲”这个汉字。', minecraftSentence: '在Minecraft里，我用“莲”记录这次方块冒险。' },
            { char: '原', pinyin: 'yuán', meaning: '原字', words: ['原字卡', '原方块'], example: '我们正在学习“原”这个汉字。', minecraftSentence: '在Minecraft里，我用“原”记录这次方块冒险。' },
            { char: '乌', pinyin: 'wū', meaning: '乌字', words: ['乌字卡', '乌方块'], example: '我们正在学习“乌”这个汉字。', minecraftSentence: '在Minecraft里，我用“乌”记录这次方块冒险。' },
            { char: '饭', pinyin: 'fàn', meaning: '饭字', words: ['饭字卡', '饭方块'], example: '我们正在学习“饭”这个汉字。', minecraftSentence: '在Minecraft里，我用“饭”记录这次方块冒险。' },
            { char: '折', pinyin: 'zhé', meaning: '折字', words: ['折字卡', '折方块'], example: '我们正在学习“折”这个汉字。', minecraftSentence: '在Minecraft里，我用“折”记录这次方块冒险。' },
            { char: '伤', pinyin: 'shāng', meaning: '伤字', words: ['伤字卡', '伤方块'], example: '我们正在学习“伤”这个汉字。', minecraftSentence: '在Minecraft里，我用“伤”记录这次方块冒险。' },
            { char: '每', pinyin: 'měi', meaning: '每字', words: ['每字卡', '每方块'], example: '我们正在学习“每”这个汉字。', minecraftSentence: '在Minecraft里，我用“每”记录这次方块冒险。' },
            { char: '相', pinyin: 'xiāng', meaning: '相字', words: ['相字卡', '相方块'], example: '我们正在学习“相”这个汉字。', minecraftSentence: '在Minecraft里，我用“相”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-10',
        level: 3,
        title: '第10课：一年级识字·初级',
        characters: [
            { char: '谢', pinyin: 'xiè', meaning: '谢字', words: ['谢字卡', '谢方块'], example: '我们正在学习“谢”这个汉字。', minecraftSentence: '在Minecraft里，我用“谢”记录这次方块冒险。' },
            { char: '桃', pinyin: 'táo', meaning: '桃字', words: ['桃字卡', '桃方块'], example: '我们正在学习“桃”这个汉字。', minecraftSentence: '在Minecraft里，我用“桃”记录这次方块冒险。' },
            { char: '视', pinyin: 'shì', meaning: '视字', words: ['视字卡', '视方块'], example: '我们正在学习“视”这个汉字。', minecraftSentence: '在Minecraft里，我用“视”记录这次方块冒险。' },
            { char: '幼', pinyin: 'yòu', meaning: '幼字', words: ['幼字卡', '幼方块'], example: '我们正在学习“幼”这个汉字。', minecraftSentence: '在Minecraft里，我用“幼”记录这次方块冒险。' },
            { char: '体', pinyin: 'tǐ', meaning: '体字', words: ['体字卡', '体方块'], example: '我们正在学习“体”这个汉字。', minecraftSentence: '在Minecraft里，我用“体”记录这次方块冒险。' },
            { char: '组', pinyin: 'zǔ', meaning: '组字', words: ['组字卡', '组方块'], example: '我们正在学习“组”这个汉字。', minecraftSentence: '在Minecraft里，我用“组”记录这次方块冒险。' },
            { char: '捉', pinyin: 'zhuō', meaning: '捉字', words: ['捉字卡', '捉方块'], example: '我们正在学习“捉”这个汉字。', minecraftSentence: '在Minecraft里，我用“捉”记录这次方块冒险。' },
            { char: '落', pinyin: 'luò', meaning: '落字', words: ['落字卡', '落方块'], example: '我们正在学习“落”这个汉字。', minecraftSentence: '在Minecraft里，我用“落”记录这次方块冒险。' },
            { char: '座', pinyin: 'zuò', meaning: '座字', words: ['座字卡', '座方块'], example: '我们正在学习“座”这个汉字。', minecraftSentence: '在Minecraft里，我用“座”记录这次方块冒险。' },
            { char: '轮', pinyin: 'lún', meaning: '轮字', words: ['轮字卡', '轮方块'], example: '我们正在学习“轮”这个汉字。', minecraftSentence: '在Minecraft里，我用“轮”记录这次方块冒险。' },
            { char: '席', pinyin: 'xí', meaning: '席字', words: ['席字卡', '席方块'], example: '我们正在学习“席”这个汉字。', minecraftSentence: '在Minecraft里，我用“席”记录这次方块冒险。' },
            { char: '闹', pinyin: 'nào', meaning: '闹字', words: ['闹字卡', '闹方块'], example: '我们正在学习“闹”这个汉字。', minecraftSentence: '在Minecraft里，我用“闹”记录这次方块冒险。' },
            { char: '祝', pinyin: 'zhù', meaning: '祝字', words: ['祝字卡', '祝方块'], example: '我们正在学习“祝”这个汉字。', minecraftSentence: '在Minecraft里，我用“祝”记录这次方块冒险。' },
            { char: '柔', pinyin: 'róu', meaning: '柔字', words: ['柔字卡', '柔方块'], example: '我们正在学习“柔”这个汉字。', minecraftSentence: '在Minecraft里，我用“柔”记录这次方块冒险。' },
            { char: '寒', pinyin: 'hán', meaning: '寒字', words: ['寒字卡', '寒方块'], example: '我们正在学习“寒”这个汉字。', minecraftSentence: '在Minecraft里，我用“寒”记录这次方块冒险。' },
            { char: '练', pinyin: 'liàn', meaning: '练字', words: ['练字卡', '练方块'], example: '我们正在学习“练”这个汉字。', minecraftSentence: '在Minecraft里，我用“练”记录这次方块冒险。' },
            { char: '次', pinyin: 'cì', meaning: '次字', words: ['次字卡', '次方块'], example: '我们正在学习“次”这个汉字。', minecraftSentence: '在Minecraft里，我用“次”记录这次方块冒险。' },
            { char: '保', pinyin: 'bǎo', meaning: '保字', words: ['保字卡', '保方块'], example: '我们正在学习“保”这个汉字。', minecraftSentence: '在Minecraft里，我用“保”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-11',
        level: 3,
        title: '第11课：一年级识字·初级',
        characters: [
            { char: '涂', pinyin: 'tú', meaning: '涂字', words: ['涂字卡', '涂方块'], example: '我们正在学习“涂”这个汉字。', minecraftSentence: '在Minecraft里，我用“涂”记录这次方块冒险。' },
            { char: '市', pinyin: 'shì', meaning: '市字', words: ['市字卡', '市方块'], example: '我们正在学习“市”这个汉字。', minecraftSentence: '在Minecraft里，我用“市”记录这次方块冒险。' },
            { char: '炉', pinyin: 'lú', meaning: '炉字', words: ['炉字卡', '炉方块'], example: '我们正在学习“炉”这个汉字。', minecraftSentence: '在Minecraft里，我用“炉”记录这次方块冒险。' },
            { char: '非', pinyin: 'fēi', meaning: '非字', words: ['非字卡', '非方块'], example: '我们正在学习“非”这个汉字。', minecraftSentence: '在Minecraft里，我用“非”记录这次方块冒险。' },
            { char: '起', pinyin: 'qǐ', meaning: '起字', words: ['起字卡', '起方块'], example: '我们正在学习“起”这个汉字。', minecraftSentence: '在Minecraft里，我用“起”记录这次方块冒险。' },
            { char: '圈', pinyin: 'quān', meaning: '圈字', words: ['圈字卡', '圈方块'], example: '我们正在学习“圈”这个汉字。', minecraftSentence: '在Minecraft里，我用“圈”记录这次方块冒险。' },
            { char: '部', pinyin: 'bù', meaning: '部字', words: ['部字卡', '部方块'], example: '我们正在学习“部”这个汉字。', minecraftSentence: '在Minecraft里，我用“部”记录这次方块冒险。' },
            { char: '猜', pinyin: 'cāi', meaning: '猜字', words: ['猜字卡', '猜方块'], example: '我们正在学习“猜”这个汉字。', minecraftSentence: '在Minecraft里，我用“猜”记录这次方块冒险。' },
            { char: '抓', pinyin: 'zhuā', meaning: '抓字', words: ['抓字卡', '抓方块'], example: '我们正在学习“抓”这个汉字。', minecraftSentence: '在Minecraft里，我用“抓”记录这次方块冒险。' },
            { char: '成', pinyin: 'chéng', meaning: '成字', words: ['成字卡', '成方块'], example: '我们正在学习“成”这个汉字。', minecraftSentence: '在Minecraft里，我用“成”记录这次方块冒险。' },
            { char: '吴', pinyin: 'wú', meaning: '吴字', words: ['吴字卡', '吴方块'], example: '我们正在学习“吴”这个汉字。', minecraftSentence: '在Minecraft里，我用“吴”记录这次方块冒险。' },
            { char: '总', pinyin: 'zǒng', meaning: '总字', words: ['总字卡', '总方块'], example: '我们正在学习“总”这个汉字。', minecraftSentence: '在Minecraft里，我用“总”记录这次方块冒险。' },
            { char: '院', pinyin: 'yuàn', meaning: '院字', words: ['院字卡', '院方块'], example: '我们正在学习“院”这个汉字。', minecraftSentence: '在Minecraft里，我用“院”记录这次方块冒险。' },
            { char: '森', pinyin: 'sēn', meaning: '森字', words: ['森字卡', '森方块'], example: '我们正在学习“森”这个汉字。', minecraftSentence: '在Minecraft里，我用“森”记录这次方块冒险。' },
            { char: '泉', pinyin: 'quán', meaning: '泉字', words: ['泉字卡', '泉方块'], example: '我们正在学习“泉”这个汉字。', minecraftSentence: '在Minecraft里，我用“泉”记录这次方块冒险。' },
            { char: '感', pinyin: 'gǎn', meaning: '感字', words: ['感字卡', '感方块'], example: '我们正在学习“感”这个汉字。', minecraftSentence: '在Minecraft里，我用“感”记录这次方块冒险。' },
            { char: '勇', pinyin: 'yǒng', meaning: '勇字', words: ['勇字卡', '勇方块'], example: '我们正在学习“勇”这个汉字。', minecraftSentence: '在Minecraft里，我用“勇”记录这次方块冒险。' },
            { char: '班', pinyin: 'bān', meaning: '班字', words: ['班字卡', '班方块'], example: '我们正在学习“班”这个汉字。', minecraftSentence: '在Minecraft里，我用“班”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-12',
        level: 3,
        title: '第12课：一年级识字·初级',
        characters: [
            { char: '之', pinyin: 'zhī', meaning: '之字', words: ['之字卡', '之方块'], example: '我们正在学习“之”这个汉字。', minecraftSentence: '在Minecraft里，我用“之”记录这次方块冒险。' },
            { char: '悄', pinyin: 'qiāo', meaning: '悄字', words: ['悄字卡', '悄方块'], example: '我们正在学习“悄”这个汉字。', minecraftSentence: '在Minecraft里，我用“悄”记录这次方块冒险。' },
            { char: '许', pinyin: 'xǔ', meaning: '许字', words: ['许字卡', '许方块'], example: '我们正在学习“许”这个汉字。', minecraftSentence: '在Minecraft里，我用“许”记录这次方块冒险。' },
            { char: '急', pinyin: 'jí', meaning: '急字', words: ['急字卡', '急方块'], example: '我们正在学习“急”这个汉字。', minecraftSentence: '在Minecraft里，我用“急”记录这次方块冒险。' },
            { char: '张', pinyin: 'zhāng', meaning: '张字', words: ['张字卡', '张方块'], example: '我们正在学习“张”这个汉字。', minecraftSentence: '在Minecraft里，我用“张”记录这次方块冒险。' },
            { char: '装', pinyin: 'zhuāng', meaning: '装字', words: ['装字卡', '装方块'], example: '我们正在学习“装”这个汉字。', minecraftSentence: '在Minecraft里，我用“装”记录这次方块冒险。' },
            { char: '渴', pinyin: 'kě', meaning: '渴字', words: ['渴字卡', '渴方块'], example: '我们正在学习“渴”这个汉字。', minecraftSentence: '在Minecraft里，我用“渴”记录这次方块冒险。' },
            { char: '试', pinyin: 'shì', meaning: '试字', words: ['试字卡', '试方块'], example: '我们正在学习“试”这个汉字。', minecraftSentence: '在Minecraft里，我用“试”记录这次方块冒险。' },
            { char: '迷', pinyin: 'mí', meaning: '迷字', words: ['迷字卡', '迷方块'], example: '我们正在学习“迷”这个汉字。', minecraftSentence: '在Minecraft里，我用“迷”记录这次方块冒险。' },
            { char: '操', pinyin: 'cāo', meaning: '操字', words: ['操字卡', '操方块'], example: '我们正在学习“操”这个汉字。', minecraftSentence: '在Minecraft里，我用“操”记录这次方块冒险。' },
            { char: '壳', pinyin: 'ké', meaning: '壳字', words: ['壳字卡', '壳方块'], example: '我们正在学习“壳”这个汉字。', minecraftSentence: '在Minecraft里，我用“壳”记录这次方块冒险。' },
            { char: '朗', pinyin: 'lǎng', meaning: '朗字', words: ['朗字卡', '朗方块'], example: '我们正在学习“朗”这个汉字。', minecraftSentence: '在Minecraft里，我用“朗”记录这次方块冒险。' },
            { char: '低', pinyin: 'dī', meaning: '低字', words: ['低字卡', '低方块'], example: '我们正在学习“低”这个汉字。', minecraftSentence: '在Minecraft里，我用“低”记录这次方块冒险。' },
            { char: '客', pinyin: 'kè', meaning: '客字', words: ['客字卡', '客方块'], example: '我们正在学习“客”这个汉字。', minecraftSentence: '在Minecraft里，我用“客”记录这次方块冒险。' },
            { char: '母', pinyin: 'mǔ', meaning: '母字', words: ['母字卡', '母方块'], example: '我们正在学习“母”这个汉字。', minecraftSentence: '在Minecraft里，我用“母”记录这次方块冒险。' },
            { char: '纷', pinyin: 'fēn', meaning: '纷字', words: ['纷字卡', '纷方块'], example: '我们正在学习“纷”这个汉字。', minecraftSentence: '在Minecraft里，我用“纷”记录这次方块冒险。' },
            { char: '哄', pinyin: 'hǒng', meaning: '哄字', words: ['哄字卡', '哄方块'], example: '我们正在学习“哄”这个汉字。', minecraftSentence: '在Minecraft里，我用“哄”记录这次方块冒险。' },
            { char: '尘', pinyin: 'chén', meaning: '尘字', words: ['尘字卡', '尘方块'], example: '我们正在学习“尘”这个汉字。', minecraftSentence: '在Minecraft里，我用“尘”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-13',
        level: 3,
        title: '第13课：一年级识字·初级',
        characters: [
            { char: '哭', pinyin: 'kū', meaning: '哭字', words: ['哭字卡', '哭方块'], example: '我们正在学习“哭”这个汉字。', minecraftSentence: '在Minecraft里，我用“哭”记录这次方块冒险。' },
            { char: '爪', pinyin: 'zhǎo', meaning: '爪字', words: ['爪字卡', '爪方块'], example: '我们正在学习“爪”这个汉字。', minecraftSentence: '在Minecraft里，我用“爪”记录这次方块冒险。' },
            { char: '名', pinyin: 'míng', meaning: '名字', words: ['名字卡', '名方块'], example: '我们正在学习“名”这个汉字。', minecraftSentence: '在Minecraft里，我用“名”记录这次方块冒险。' },
            { char: '迈', pinyin: 'mài', meaning: '迈字', words: ['迈字卡', '迈方块'], example: '我们正在学习“迈”这个汉字。', minecraftSentence: '在Minecraft里，我用“迈”记录这次方块冒险。' },
            { char: '业', pinyin: 'yè', meaning: '业字', words: ['业字卡', '业方块'], example: '我们正在学习“业”这个汉字。', minecraftSentence: '在Minecraft里，我用“业”记录这次方块冒险。' },
            { char: '计', pinyin: 'jì', meaning: '计字', words: ['计字卡', '计方块'], example: '我们正在学习“计”这个汉字。', minecraftSentence: '在Minecraft里，我用“计”记录这次方块冒险。' },
            { char: '声', pinyin: 'shēng', meaning: '声字', words: ['声字卡', '声方块'], example: '我们正在学习“声”这个汉字。', minecraftSentence: '在Minecraft里，我用“声”记录这次方块冒险。' },
            { char: '窗', pinyin: 'chuāng', meaning: '窗字', words: ['窗字卡', '窗方块'], example: '我们正在学习“窗”这个汉字。', minecraftSentence: '在Minecraft里，我用“窗”记录这次方块冒险。' },
            { char: '填', pinyin: 'tián', meaning: '填字', words: ['填字卡', '填方块'], example: '我们正在学习“填”这个汉字。', minecraftSentence: '在Minecraft里，我用“填”记录这次方块冒险。' },
            { char: '很', pinyin: 'hěn', meaning: '很字', words: ['很字卡', '很方块'], example: '我们正在学习“很”这个汉字。', minecraftSentence: '在Minecraft里，我用“很”记录这次方块冒险。' },
            { char: '收', pinyin: 'shōu', meaning: '收字', words: ['收字卡', '收方块'], example: '我们正在学习“收”这个汉字。', minecraftSentence: '在Minecraft里，我用“收”记录这次方块冒险。' },
            { char: '胆', pinyin: 'dǎn', meaning: '胆字', words: ['胆字卡', '胆方块'], example: '我们正在学习“胆”这个汉字。', minecraftSentence: '在Minecraft里，我用“胆”记录这次方块冒险。' },
            { char: '活', pinyin: 'huó', meaning: '活字', words: ['活字卡', '活方块'], example: '我们正在学习“活”这个汉字。', minecraftSentence: '在Minecraft里，我用“活”记录这次方块冒险。' },
            { char: '答', pinyin: 'dá', meaning: '答字', words: ['答字卡', '答方块'], example: '我们正在学习“答”这个汉字。', minecraftSentence: '在Minecraft里，我用“答”记录这次方块冒险。' },
            { char: '尽', pinyin: 'jǐn', meaning: '尽字', words: ['尽字卡', '尽方块'], example: '我们正在学习“尽”这个汉字。', minecraftSentence: '在Minecraft里，我用“尽”记录这次方块冒险。' },
            { char: '独', pinyin: 'dú', meaning: '独字', words: ['独字卡', '独方块'], example: '我们正在学习“独”这个汉字。', minecraftSentence: '在Minecraft里，我用“独”记录这次方块冒险。' },
            { char: '扎', pinyin: 'zhā', meaning: '扎字', words: ['扎字卡', '扎方块'], example: '我们正在学习“扎”这个汉字。', minecraftSentence: '在Minecraft里，我用“扎”记录这次方块冒险。' },
            { char: '专', pinyin: 'zhuān', meaning: '专字', words: ['专字卡', '专方块'], example: '我们正在学习“专”这个汉字。', minecraftSentence: '在Minecraft里，我用“专”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-14',
        level: 3,
        title: '第14课：一年级识字·初级',
        characters: [
            { char: '阵', pinyin: 'zhèn', meaning: '阵字', words: ['阵字卡', '阵方块'], example: '我们正在学习“阵”这个汉字。', minecraftSentence: '在Minecraft里，我用“阵”记录这次方块冒险。' },
            { char: '旦', pinyin: 'dàn', meaning: '旦字', words: ['旦字卡', '旦方块'], example: '我们正在学习“旦”这个汉字。', minecraftSentence: '在Minecraft里，我用“旦”记录这次方块冒险。' },
            { char: '袍', pinyin: 'páo', meaning: '袍字', words: ['袍字卡', '袍方块'], example: '我们正在学习“袍”这个汉字。', minecraftSentence: '在Minecraft里，我用“袍”记录这次方块冒险。' },
            { char: '戏', pinyin: 'xì', meaning: '戏字', words: ['戏字卡', '戏方块'], example: '我们正在学习“戏”这个汉字。', minecraftSentence: '在Minecraft里，我用“戏”记录这次方块冒险。' },
            { char: '诉', pinyin: 'sù', meaning: '诉字', words: ['诉字卡', '诉方块'], example: '我们正在学习“诉”这个汉字。', minecraftSentence: '在Minecraft里，我用“诉”记录这次方块冒险。' },
            { char: '将', pinyin: 'jiāng', meaning: '将字', words: ['将字卡', '将方块'], example: '我们正在学习“将”这个汉字。', minecraftSentence: '在Minecraft里，我用“将”记录这次方块冒险。' },
            { char: '南', pinyin: 'nán', meaning: '南字', words: ['南字卡', '南方块'], example: '我们正在学习“南”这个汉字。', minecraftSentence: '在Minecraft里，我用“南”记录这次方块冒险。' },
            { char: '初', pinyin: 'chū', meaning: '初字', words: ['初字卡', '初方块'], example: '我们正在学习“初”这个汉字。', minecraftSentence: '在Minecraft里，我用“初”记录这次方块冒险。' },
            { char: '喊', pinyin: 'hǎn', meaning: '喊字', words: ['喊字卡', '喊方块'], example: '我们正在学习“喊”这个汉字。', minecraftSentence: '在Minecraft里，我用“喊”记录这次方块冒险。' },
            { char: '昨', pinyin: 'zuó', meaning: '昨字', words: ['昨字卡', '昨方块'], example: '我们正在学习“昨”这个汉字。', minecraftSentence: '在Minecraft里，我用“昨”记录这次方块冒险。' },
            { char: '攻', pinyin: 'gōng', meaning: '攻字', words: ['攻字卡', '攻方块'], example: '我们正在学习“攻”这个汉字。', minecraftSentence: '在Minecraft里，我用“攻”记录这次方块冒险。' },
            { char: '宝', pinyin: 'bǎo', meaning: '宝字', words: ['宝字卡', '宝方块'], example: '我们正在学习“宝”这个汉字。', minecraftSentence: '在Minecraft里，我用“宝”记录这次方块冒险。' },
            { char: '柳', pinyin: 'liǔ', meaning: '柳字', words: ['柳字卡', '柳方块'], example: '我们正在学习“柳”这个汉字。', minecraftSentence: '在Minecraft里，我用“柳”记录这次方块冒险。' },
            { char: '迹', pinyin: 'jì', meaning: '迹字', words: ['迹字卡', '迹方块'], example: '我们正在学习“迹”这个汉字。', minecraftSentence: '在Minecraft里，我用“迹”记录这次方块冒险。' },
            { char: '坡', pinyin: 'pō', meaning: '坡字', words: ['坡字卡', '坡方块'], example: '我们正在学习“坡”这个汉字。', minecraftSentence: '在Minecraft里，我用“坡”记录这次方块冒险。' },
            { char: '秧', pinyin: 'yāng', meaning: '秧字', words: ['秧字卡', '秧方块'], example: '我们正在学习“秧”这个汉字。', minecraftSentence: '在Minecraft里，我用“秧”记录这次方块冒险。' },
            { char: '甜', pinyin: 'tián', meaning: '甜字', words: ['甜字卡', '甜方块'], example: '我们正在学习“甜”这个汉字。', minecraftSentence: '在Minecraft里，我用“甜”记录这次方块冒险。' },
            { char: '枣', pinyin: 'zǎo', meaning: '枣字', words: ['枣字卡', '枣方块'], example: '我们正在学习“枣”这个汉字。', minecraftSentence: '在Minecraft里，我用“枣”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-15',
        level: 3,
        title: '第15课：一年级识字·初级',
        characters: [
            { char: '飘', pinyin: 'piāo', meaning: '飘字', words: ['飘字卡', '飘方块'], example: '我们正在学习“飘”这个汉字。', minecraftSentence: '在Minecraft里，我用“飘”记录这次方块冒险。' },
            { char: '惜', pinyin: 'xī', meaning: '惜字', words: ['惜字卡', '惜方块'], example: '我们正在学习“惜”这个汉字。', minecraftSentence: '在Minecraft里，我用“惜”记录这次方块冒险。' },
            { char: '护', pinyin: 'hù', meaning: '护字', words: ['护字卡', '护方块'], example: '我们正在学习“护”这个汉字。', minecraftSentence: '在Minecraft里，我用“护”记录这次方块冒险。' },
            { char: '爱', pinyin: 'ài', meaning: '爱字', words: ['爱字卡', '爱方块'], example: '我们正在学习“爱”这个汉字。', minecraftSentence: '在Minecraft里，我用“爱”记录这次方块冒险。' },
            { char: '端', pinyin: 'duān', meaning: '端字', words: ['端字卡', '端方块'], example: '我们正在学习“端”这个汉字。', minecraftSentence: '在Minecraft里，我用“端”记录这次方块冒险。' },
            { char: '降', pinyin: 'jiàng', meaning: '降字', words: ['降字卡', '降方块'], example: '我们正在学习“降”这个汉字。', minecraftSentence: '在Minecraft里，我用“降”记录这次方块冒险。' },
            { char: '内', pinyin: 'nèi', meaning: '内字', words: ['内字卡', '内方块'], example: '我们正在学习“内”这个汉字。', minecraftSentence: '在Minecraft里，我用“内”记录这次方块冒险。' },
            { char: '弓', pinyin: 'gōng', meaning: '弓字', words: ['弓字卡', '弓方块'], example: '我们正在学习“弓”这个汉字。', minecraftSentence: '在Minecraft里，我用“弓”记录这次方块冒险。' },
            { char: '就', pinyin: 'jiù', meaning: '就字', words: ['就字卡', '就方块'], example: '我们正在学习“就”这个汉字。', minecraftSentence: '在Minecraft里，我用“就”记录这次方块冒险。' },
            { char: '虾', pinyin: 'xiā', meaning: '虾字', words: ['虾字卡', '虾方块'], example: '我们正在学习“虾”这个汉字。', minecraftSentence: '在Minecraft里，我用“虾”记录这次方块冒险。' },
            { char: '能', pinyin: 'néng', meaning: '能字', words: ['能字卡', '能方块'], example: '我们正在学习“能”这个汉字。', minecraftSentence: '在Minecraft里，我用“能”记录这次方块冒险。' },
            { char: '照', pinyin: 'zhào', meaning: '照字', words: ['照字卡', '照方块'], example: '我们正在学习“照”这个汉字。', minecraftSentence: '在Minecraft里，我用“照”记录这次方块冒险。' },
            { char: '像', pinyin: 'xiàng', meaning: '像字', words: ['像字卡', '像方块'], example: '我们正在学习“像”这个汉字。', minecraftSentence: '在Minecraft里，我用“像”记录这次方块冒险。' },
            { char: '拔', pinyin: 'bá', meaning: '拔字', words: ['拔字卡', '拔方块'], example: '我们正在学习“拔”这个汉字。', minecraftSentence: '在Minecraft里，我用“拔”记录这次方块冒险。' },
            { char: '期', pinyin: 'qī', meaning: '期字', words: ['期字卡', '期方块'], example: '我们正在学习“期”这个汉字。', minecraftSentence: '在Minecraft里，我用“期”记录这次方块冒险。' },
            { char: '众', pinyin: 'zhòng', meaning: '众字', words: ['众字卡', '众方块'], example: '我们正在学习“众”这个汉字。', minecraftSentence: '在Minecraft里，我用“众”记录这次方块冒险。' },
            { char: '闪', pinyin: 'shǎn', meaning: '闪字', words: ['闪字卡', '闪方块'], example: '我们正在学习“闪”这个汉字。', minecraftSentence: '在Minecraft里，我用“闪”记录这次方块冒险。' },
            { char: '种', pinyin: 'zhǒng', meaning: '种字', words: ['种字卡', '种方块'], example: '我们正在学习“种”这个汉字。', minecraftSentence: '在Minecraft里，我用“种”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L3-16',
        level: 3,
        title: '第16课：一年级识字·初级',
        characters: [
            { char: '举', pinyin: 'jǔ', meaning: '举字', words: ['举字卡', '举方块'], example: '我们正在学习“举”这个汉字。', minecraftSentence: '在Minecraft里，我用“举”记录这次方块冒险。' },
            { char: '得', pinyin: 'dé', meaning: '得字', words: ['得字卡', '得方块'], example: '我们正在学习“得”这个汉字。', minecraftSentence: '在Minecraft里，我用“得”记录这次方块冒险。' }
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
 * 规范化 Minecraft 例句：
 * - 保留已有优质例句
 * - 对模板化占位句自动替换为更有世界观的句子
 */
const PLACEHOLDER_PATTERN = /^在Minecraft里，我用“.+”记录这次方块冒险。$/;

const SPECIAL_MINECRAFT_SENTENCE_BY_CHAR = {
    皂: '做完下界探险后，史蒂夫用皂角把盔甲擦干净，顺手记住了“皂”字。',
    刷: '史蒂夫用野猪毛把他的武器刷干净了，这正是“刷”字最典型的用法。',
    你: '队友在语音里喊“你先架盾，我来补火把”，大家一下就记住了“你”字。',
    果: '果园收成后，史蒂夫把苹果和甜浆果分进箱子，边分边读“果”字。',
    用: '合成新工具前，史蒂夫先想清楚每种材料怎么用，这样就把“用”字记牢了。'
};

const LEARNING_SCENE_TEMPLATES = [
    '出发前，史蒂夫把今天要学的“{char}”写在练习板上，读顺了再去冒险。',
    '营地晚自习时，大家围着火把练“{char}”，谁写得稳谁就当记录员。',
    '任务简报里先标出“{char}”，史蒂夫确认读音和意思后才开始行动。',
    '铁砧旁的小黑板写着“{char}”，这是今天识字训练的重点。'
];

const getTemplateIndexByChar = (char) => {
    if (!char || typeof char !== 'string') return 0;
    const code = char.codePointAt(0) || 0;
    return code % LEARNING_SCENE_TEMPLATES.length;
};

const buildLearningSentence = (character) => {
    const template = LEARNING_SCENE_TEMPLATES[getTemplateIndexByChar(character.char)];
    return template.replace('{char}', character.char);
};

const buildMinecraftSentence = (character) => {
    const { char, meaning = '', words = [] } = character;

    if (SPECIAL_MINECRAFT_SENTENCE_BY_CHAR[char]) {
        return SPECIAL_MINECRAFT_SENTENCE_BY_CHAR[char];
    }

    const lexicalHint = `${meaning} ${Array.isArray(words) ? words.join(' ') : ''}`;

    if (/你|您|称呼/.test(lexicalHint)) {
        return '队伍分工时，大家会说“你守左边、我守右边”，在实战里自然就懂了“你”字。';
    }

    if (/用|使用|用途|工具/.test(lexicalHint)) {
        return '制作装备前先讨论材料怎么用，史蒂夫边做边说“用”，这个字就不容易忘。';
    }

    if (/果|苹果|果实|甜浆果|水果/.test(lexicalHint)) {
        return '采集完苹果和甜浆果后，史蒂夫按类别装箱，顺便把“果”字读得很熟。';
    }

    if (/皂|清洁|洗/.test(lexicalHint)) {
        return '训练结束要保养装备，史蒂夫一边清洁一边复习“皂”字，记忆特别牢。';
    }

    return buildLearningSentence(character);
};

const normalizeCharacter = (character) => {
    const sourceSentence = character.minecraftSentence || '';
    const shouldReplace = !sourceSentence || PLACEHOLDER_PATTERN.test(sourceSentence);

    return {
        ...character,
        minecraftSentence: shouldReplace
            ? buildMinecraftSentence(character)
            : sourceSentence
    };
};

const normalizedLessons = lessons.map(lesson => ({
    ...lesson,
    characters: lesson.characters.map(normalizeCharacter)
}));

/**
 * 获取指定级别的所有课程
 */
export const getLessonsByLevel = (level) => {
    return normalizedLessons.filter(lesson => lesson.level === level);
};

/**
 * 获取指定课程
 */
export const getLessonById = (lessonId) => {
    return normalizedLessons.find(lesson => lesson.id === lessonId);
};

/**
 * 获取课程总数
 */
export const getTotalLessons = () => normalizedLessons.length;

/**
 * 获取所有级别信息
 */
export const getAllLevels = () => LEVEL_CONFIG;

/**
 * 获取上一课和下一课
 */
export const getAdjacentLessons = (currentLessonId) => {
    const currentIndex = normalizedLessons.findIndex(l => l.id === currentLessonId);
    return {
        prev: currentIndex > 0 ? normalizedLessons[currentIndex - 1] : null,
        next: currentIndex < normalizedLessons.length - 1 ? normalizedLessons[currentIndex + 1] : null
    };
};

export default normalizedLessons;
