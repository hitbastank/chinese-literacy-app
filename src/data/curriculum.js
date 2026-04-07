/**
 * 中文识字课程数据
 * 8个难度级别，已按去重后的1045个汉字重排为每级10课
 * 每个汉字包含Minecraft主题造句
 */

// 难度级别配置
export const LEVEL_CONFIG = [
    { level: 1, charsPerLesson: 14, title: '入门级', description: '一年级汉字优先，起步识字' },
    { level: 2, charsPerLesson: 13, title: '基础级', description: '一年级汉字优先，巩固常用字' },
    { level: 3, charsPerLesson: 13, title: '初级', description: '一年级汉字优先，扩展高频字' },
    { level: 4, charsPerLesson: 13, title: '进阶级', description: '小学常用字扩展，保持均衡课量' },
    { level: 5, charsPerLesson: 13, title: '中级', description: '小学常用字扩展，保持均衡课量' },
    { level: 6, charsPerLesson: 13, title: '挑战级', description: '小学进阶常用字，保持均衡课量' },
    { level: 7, charsPerLesson: 13, title: '精通级', description: '偏难常用字，保持均衡课量' },
    { level: 8, charsPerLesson: 13, title: '大师级', description: '剩余常用字收束，保持均衡课量' }
];

/**
 * 课程数据
 * 每课包含指定数量的汉字，字与字之间尽量无关联
 */
export const lessons = [
    // ============ 第1级 入门级（一年级汉字优先） ============
    {
        id: 'L1-1',
        level: 1,
        title: '第1课：入门级',
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
            { char: '西', pinyin: 'xī', meaning: '方向，太阳落下的一边', words: ['西边', '东西'], example: '太阳从西边落下。', minecraftSentence: '太阳往西边沉下去，史蒂夫知道夜晚马上就要来了。' }
        ]
    },
    {
        id: 'L1-2',
        level: 1,
        title: '第2课：入门级',
        characters: [
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
            { char: '心', pinyin: 'xīn', meaning: '内心，心脏', words: ['开心', '小心'], example: '今天我很开心。', minecraftSentence: '走在悬崖边上要小心，史蒂夫提醒自己每一步都不能大意。' }
        ]
    },
    {
        id: 'L1-3',
        level: 1,
        title: '第3课：入门级',
        characters: [
            { char: '澡', pinyin: 'zǎo', meaning: '洗身体', words: ['洗澡', '澡堂'], example: '睡觉前要洗澡。', minecraftSentence: '从下界回来浑身烟灰味，史蒂夫跳进河里痛痛快快洗了个澡。' },
            { char: '妈', pinyin: 'mā', meaning: '母亲', words: ['妈妈', '大妈'], example: '妈妈做的饭最好吃。', minecraftSentence: '村庄里的铁傀儡就像妈妈一样，一直守护着村民不受怪物伤害。' },
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
            { char: '猴', pinyin: 'hóu', meaning: '灵活的灵长类动物', words: ['猴子', '猴王'], example: '猴子最爱吃香蕉。', minecraftSentence: '丛林里的鹦鹉上蹿下跳，活泼得像一群小猴子。' }
        ]
    },
    {
        id: 'L1-4',
        level: 1,
        title: '第4课：入门级',
        characters: [
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
            { char: '舌', pinyin: 'shé', meaning: '口腔里辨味的器官', words: ['舌头', '口舌'], example: '吃了辣椒舌头好辣。', minecraftSentence: '史蒂夫尝了一口河豚，舌头又麻又痛，还中了毒。' }
        ]
    },
    {
        id: 'L1-5',
        level: 1,
        title: '第5课：入门级',
        characters: [
            { char: '地', pinyin: 'dì', meaning: '大地，地面', words: ['土地', '地方'], example: '种子种在地里会发芽。', minecraftSentence: '史蒂夫用锄头翻好地，在松软的土里种下了胡萝卜种子。' },
            { char: '手', pinyin: 'shǒu', meaning: '人体上肢前端', words: ['双手', '手指'], example: '我用手画了一幅画。', minecraftSentence: '史蒂夫空着手打不过怪物，得赶紧合成一把木剑拿在手里。' },
            { char: '开', pinyin: 'kāi', meaning: '打开，开始', words: ['开门', '开心'], example: '请把窗户打开。', minecraftSentence: '史蒂夫打开宝箱，里面竟然有一颗钻石，太开心了！' },
            { char: '熊', pinyin: 'xióng', meaning: '一种大型哺乳动物', words: ['熊猫', '北极熊'], example: '熊猫最爱吃竹子。', minecraftSentence: '雪地里遇到一只北极熊，史蒂夫不敢靠近，远远地绕开了。' },
            { char: '追', pinyin: 'zhuī', meaning: '跟在后面赶', words: ['追赶', '追上'], example: '小猫追着蝴蝶跑。', minecraftSentence: '苦力怕在后面追，史蒂夫拼命跑，差一点就被炸到了。' },
            { char: '不', pinyin: 'bù', meaning: '否定，表示没有', words: ['不行', '不要'], example: '我不想吃青菜。', minecraftSentence: '晚上出门不带剑可不行，到处都是怪物。' },
            { char: '空', pinyin: 'kōng', meaning: '里面没有东西；天空', words: ['天空', '空气'], example: '天空中飘着白云。', minecraftSentence: '背包空了，史蒂夫得回家把东西放进箱子再出发。' },
            { char: '他', pinyin: 'tā', meaning: '指另一个男性', words: ['他们', '其他'], example: '他是我的同学。', minecraftSentence: '史蒂夫让他的伙伴守在洞口，自己一个人下去探路。' },
            { char: '左', pinyin: 'zuǒ', meaning: '方向，与右相对', words: ['左边', '左手'], example: '学校在路的左边。', minecraftSentence: '到了岔路口往左走是矿洞，往右走是村庄，史蒂夫选了左边。' },
            { char: '少', pinyin: 'shǎo', meaning: '数量小，不多', words: ['多少', '少年'], example: '今天作业很少。', minecraftSentence: '食物越来越少，史蒂夫得赶紧去种地，不然要饿肚子了。' },
            { char: '正', pinyin: 'zhèng', meaning: '不偏，端正；正在', words: ['正好', '正在'], example: '他坐得很端正。', minecraftSentence: '史蒂夫正在挖矿，突然脚下的石头塌了，掉进了一个洞穴。' },
            { char: '膀', pinyin: 'bǎng', meaning: '胳膊上部', words: ['肩膀', '臂膀'], example: '爸爸的肩膀又宽又厚。', minecraftSentence: '搬了一天石头，史蒂夫的肩膀又酸又疼，得好好休息。' },
            { char: '二', pinyin: 'èr', meaning: '数字2', words: ['第二', '二月'], example: '我排在第二名。', minecraftSentence: '史蒂夫合成了第二把铁剑，一把自己用，一把给伙伴。' },
            { char: '翅', pinyin: 'chì', meaning: '鸟类或昆虫飞行的部分', words: ['翅膀', '鸡翅'], example: '小鸟张开翅膀飞走了。', minecraftSentence: '末影龙展开巨大的翅膀从天上俯冲下来，气势吓人极了。' }
        ]
    },
    {
        id: 'L1-6',
        level: 1,
        title: '第6课：入门级',
        characters: [
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
            { char: '六', pinyin: 'liù', meaning: '数字6', words: ['六个', '六月'], example: '骰子最大是六点。', minecraftSentence: '工作台有六个格子可以放材料，史蒂夫用它合成了一张床。' }
        ]
    },
    {
        id: 'L1-7',
        level: 1,
        title: '第7课：入门级',
        characters: [
            { char: '仔', pinyin: 'zǎi', meaning: '仔细；幼小的', words: ['仔细', '仔猪'], example: '做作业要仔细。', minecraftSentence: '拆除红石电路要仔细，接错一根线整个机关就不灵了。' },
            { char: '蚊', pinyin: 'wén', meaning: '吸血的小飞虫', words: ['蚊子', '蚊虫'], example: '夏天蚊子特别多。', minecraftSentence: '沼泽地里到处飞着像蚊子一样烦人的幻翼，嗡嗡叫个不停。' },
            { char: '目', pinyin: 'mù', meaning: '眼睛；条目', words: ['目光', '节目'], example: '他的目光很温柔。', minecraftSentence: '末影人最怕别人的目光，你一盯着它的眼睛看，它就会发怒。' },
            { char: '沉', pinyin: 'chén', meaning: '往下落，重', words: ['沉重', '下沉'], example: '石头扔进水里就沉下去了。', minecraftSentence: '穿着铁甲掉进深水里，史蒂夫像石头一样往下沉，差点淹死。' },
            { char: '马', pinyin: 'mǎ', meaning: '一种可骑乘的动物', words: ['马匹', '骑马'], example: '草原上有一匹白马。', minecraftSentence: '史蒂夫用金苹果驯服了一匹野马，骑着它跑得比走路快多了。' },
            { char: '叫', pinyin: 'jiào', meaning: '发出声音；称呼', words: ['叫声', '叫做'], example: '公鸡天亮就叫。', minecraftSentence: '远处传来僵尸低沉的叫声，史蒂夫握紧了手里的剑。' },
            { char: '力', pinyin: 'lì', meaning: '力量，能量', words: ['力气', '努力'], example: '他力气很大。', minecraftSentence: '信标给了史蒂夫额外的力量，挖矿的速度一下子快了好多。' },
            { char: '尺', pinyin: 'chǐ', meaning: '量长度的工具；长度单位', words: ['尺子', '一尺'], example: '用尺子量一量桌子有多长。', minecraftSentence: '每个方块刚好一米见方，史蒂夫不用尺子也能量出房子的大小。' },
            { char: '们', pinyin: 'men', meaning: '表示复数的词尾', words: ['我们', '他们'], example: '我们一起去公园吧。', minecraftSentence: '村民们白天在外面走来走去，一到晚上就全跑回屋里躲着。' },
            { char: '摘', pinyin: 'zhāi', meaning: '用手采取', words: ['摘花', '采摘'], example: '妈妈在果园里摘苹果。', minecraftSentence: '史蒂夫爬上树把成熟的苹果一个个摘下来，塞满了背包。' },
            { char: '阴', pinyin: 'yīn', meaning: '没有阳光，暗', words: ['阴天', '阴暗'], example: '今天是阴天，没有太阳。', minecraftSentence: '阴天的时候怪物不会被阳光烧死，白天出门也要小心。' },
            { char: '哪', pinyin: 'nǎ', meaning: '疑问词，问处所', words: ['哪里', '哪个'], example: '你家在哪里？', minecraftSentence: '钻石到底藏在哪里？史蒂夫挖了好久都没找到。' },
            { char: '出', pinyin: 'chū', meaning: '从里面到外面', words: ['出去', '出发'], example: '太阳从东边出来了。', minecraftSentence: '天一亮史蒂夫就出门探险，趁着白天怪物少赶紧赶路。' }
        ]
    },
    {
        id: 'L1-8',
        level: 1,
        title: '第8课：入门级',
        characters: [
            { char: '八', pinyin: 'bā', meaning: '数字8', words: ['八个', '八月'], example: '蜘蛛有八条腿。', minecraftSentence: '洞穴蜘蛛有八只眼睛，在黑暗中闪着绿光，看着就吓人。' },
            { char: '为', pinyin: 'wèi', meaning: '为了，因为', words: ['因为', '为了'], example: '为了考好成绩，我努力学习。', minecraftSentence: '为了保护村庄不被袭击，史蒂夫在四周围上了高高的围墙。' },
            { char: '害', pinyin: 'hài', meaning: '损伤；害怕', words: ['害怕', '伤害'], example: '弟弟害怕打雷。', minecraftSentence: '史蒂夫第一次见到末影龙，害怕得腿都软了。' },
            { char: '口', pinyin: 'kǒu', meaning: '嘴巴；出入的地方', words: ['门口', '人口'], example: '他站在门口等我。', minecraftSentence: '矿洞的洞口很窄，史蒂夫侧着身子才挤了进去。' },
            { char: '鸟', pinyin: 'niǎo', meaning: '有翅膀会飞的动物', words: ['小鸟', '鸟窝'], example: '树上有一只小鸟在唱歌。', minecraftSentence: '丛林里五颜六色的鹦鹉是最漂亮的鸟，喂它饼干就能驯服。' },
            { char: '鹿', pinyin: 'lù', meaning: '一种有角的哺乳动物', words: ['小鹿', '鹿角'], example: '小鹿在林间奔跑。', minecraftSentence: '草原上跑过一群鹿，史蒂夫不忍心伤害它们，远远地看着。' },
            { char: '从', pinyin: 'cóng', meaning: '自，由', words: ['从前', '从来'], example: '从前有座山。', minecraftSentence: '史蒂夫从山顶一路滑下来，速度快得像坐滑梯。' },
            { char: '语', pinyin: 'yǔ', meaning: '说的话；语言', words: ['语文', '成语'], example: '我最喜欢上语文课。', minecraftSentence: '村民说话的语气很奇怪，嗯嗯哼哼的，史蒂夫一句也听不懂。' },
            { char: '扔', pinyin: 'rēng', meaning: '投掷，丢弃', words: ['扔掉', '扔球'], example: '垃圾要扔进垃圾桶。', minecraftSentence: '史蒂夫朝末影龙扔了一颗雪球，可惜没造成任何伤害。' },
            { char: '吵', pinyin: 'chǎo', meaning: '声音大而杂乱', words: ['吵闹', '吵架'], example: '教室里太吵了。', minecraftSentence: '一群僵尸在门外吵个不停，史蒂夫整晚都没睡好。' },
            { char: '此', pinyin: 'cǐ', meaning: '这，这个', words: ['从此', '因此'], example: '从此他们成了好朋友。', minecraftSentence: '找到钻石矿脉后，史蒂夫在地图上标记了此处的位置。' },
            { char: '回', pinyin: 'huí', meaning: '返回，回去', words: ['回家', '回来'], example: '放学了，我们回家吧。', minecraftSentence: '天快黑了，史蒂夫赶紧沿着火把的标记回到了家。' },
            { char: '午', pinyin: 'wǔ', meaning: '中午，一天的中间', words: ['中午', '上午'], example: '中午吃了一碗面条。', minecraftSentence: '中午太阳最高的时候，僵尸和骷髅都会被阳光烧着。' }
        ]
    },
    {
        id: 'L1-9',
        level: 1,
        title: '第9课：入门级',
        characters: [
            { char: '文', pinyin: 'wén', meaning: '文字；文章', words: ['语文', '作文'], example: '他写了一篇好作文。', minecraftSentence: '附魔台上刻着奇怪的文字，散发着紫色的光芒。' },
            { char: '一', pinyin: 'yī', meaning: '数字1，最小的正整数', words: ['一个', '第一'], example: '我是第一个到学校的。', minecraftSentence: '史蒂夫第一天来到这个世界，什么都没有，只能先撸树。' },
            { char: '巴', pinyin: 'bā', meaning: '盼望；尾巴的巴', words: ['尾巴', '巴望'], example: '小狗摇着尾巴迎接主人。', minecraftSentence: '驯服的狼摇着尾巴跟在史蒂夫身后，走到哪儿跟到哪儿。' },
            { char: '毛', pinyin: 'máo', meaning: '动植物表面的丝状物', words: ['羽毛', '毛衣'], example: '小鸡身上的毛软软的。', minecraftSentence: '杀了鸡之后会掉落羽毛，史蒂夫收集羽毛做了好多箭。' },
            { char: '只', pinyin: 'zhǐ', meaning: '仅仅；量词', words: ['只有', '一只'], example: '我只有一块橡皮。', minecraftSentence: '背包里只剩下最后一块面包了，史蒂夫得省着点吃。' },
            { char: '干', pinyin: 'gàn', meaning: '做事；没有水分', words: ['干活', '干燥'], example: '大家一起干活，很快就完成了。', minecraftSentence: '史蒂夫干了一整天的活，把木屋扩建成了两层楼。' },
            { char: '掉', pinyin: 'diào', meaning: '落下，丢失', words: ['掉落', '掉下'], example: '苹果从树上掉下来了。', minecraftSentence: '史蒂夫不小心从悬崖掉了下去，幸好水池接住了他。' },
            { char: '决', pinyin: 'jué', meaning: '决定，下定主意', words: ['决定', '解决'], example: '我决定明天早起。', minecraftSentence: '面对末影龙，史蒂夫深吸一口气，决定勇敢地冲上去战斗。' },
            { char: '右', pinyin: 'yòu', meaning: '方向，与左相对', words: ['右边', '右手'], example: '写字要用右手。', minecraftSentence: '岔路口右边通向村庄，史蒂夫转向右边去找村民交易。' },
            { char: '遍', pinyin: 'biàn', meaning: '一次，全面', words: ['一遍', '遍地'], example: '这首诗我读了三遍。', minecraftSentence: '史蒂夫把整个矿洞走了一遍，确认没有遗漏的矿石。' },
            { char: '拼', pinyin: 'pīn', meaning: '合在一起；拼命', words: ['拼图', '拼命'], example: '我喜欢玩拼图游戏。', minecraftSentence: '史蒂夫把不同颜色的羊毛拼在一起，在地上拼出了一幅画。' },
            { char: '经', pinyin: 'jīng', meaning: '经过；已经', words: ['已经', '经过'], example: '我已经吃过饭了。', minecraftSentence: '经过三天三夜的挖掘，史蒂夫终于找到了钻石矿。' },
            { char: '月', pinyin: 'yuè', meaning: '月亮；月份', words: ['月亮', '月光'], example: '今晚的月亮又圆又亮。', minecraftSentence: '月光照亮了平原，史蒂夫借着月色赶路回家。' }
        ]
    },
    {
        id: 'L1-10',
        level: 1,
        title: '第10课：入门级',
        characters: [
            { char: '十', pinyin: 'shí', meaning: '数字10', words: ['十个', '十分'], example: '我有十颗糖。', minecraftSentence: '史蒂夫收集了十块铁锭，刚好够做一套铁甲。' },
            { char: '晶', pinyin: 'jīng', meaning: '光亮透明', words: ['水晶', '亮晶晶'], example: '露珠亮晶晶的。', minecraftSentence: '地底深处藏着亮晶晶的水晶矿，发出淡紫色的光。' },
            { char: '本', pinyin: 'běn', meaning: '根本；书本', words: ['本来', '课本'], example: '这本书很好看。', minecraftSentence: '史蒂夫本来想去挖矿，结果在路上发现了一座神殿。' },
            { char: '啊', pinyin: 'a', meaning: '感叹词，表示惊讶', words: ['啊呀', '好啊'], example: '啊，好漂亮的花！', minecraftSentence: '啊，岩浆就在脚下！史蒂夫吓得赶紧往后跳。' },
            { char: '王', pinyin: 'wáng', meaning: '国王，最高统治者', words: ['国王', '大王'], example: '国王住在城堡里。', minecraftSentence: '末影龙是末地的王，所有末影人都围着它转。' },
            { char: '啦', pinyin: 'la', meaning: '语气词，表示完成', words: ['好啦', '来啦'], example: '我做完作业啦！', minecraftSentence: '房子终于盖好啦！史蒂夫高兴得在门口跳了起来。' },
            { char: '可', pinyin: 'kě', meaning: '可以；表示转折', words: ['可以', '可是'], example: '你可以和我一起玩。', minecraftSentence: '这把钻石剑可以劈开任何方块，是史蒂夫最宝贝的武器。' },
            { char: '才', pinyin: 'cái', meaning: '刚刚；能力', words: ['才能', '刚才'], example: '他刚才还在这里。', minecraftSentence: '挖了整整一天，史蒂夫才找到三颗钻石，真不容易。' },
            { char: '盒', pinyin: 'hé', meaning: '装东西的小容器', words: ['盒子', '铅笔盒'], example: '铅笔盒里有三支笔。', minecraftSentence: '潜影盒就像一个魔法盒子，放进去的东西拿出来也不会消失。' },
            { char: '领', pinyin: 'lǐng', meaning: '带领；衣领', words: ['领路', '带领'], example: '老师领着我们参观。', minecraftSentence: '驯服的狼领着史蒂夫穿过黑暗的森林，帮他找到了回家的路。' },
            { char: '盆', pinyin: 'pén', meaning: '敞口的容器', words: ['脸盆', '花盆'], example: '妈妈在花盆里种了花。', minecraftSentence: '史蒂夫用花盆种了一棵小树苗，摆在窗台上当装饰。' },
            { char: '展', pinyin: 'zhǎn', meaning: '张开；展示', words: ['展开', '展览'], example: '孔雀展开了美丽的尾巴。', minecraftSentence: '鹦鹉展开五彩的翅膀飞到史蒂夫肩上，跟着他一起冒险。' },
            { char: '三', pinyin: 'sān', meaning: '数字3', words: ['三个', '三月'], example: '桌上有三个苹果。', minecraftSentence: '合成一把镐需要三块材料放在最上面一排。' }
        ]
    },
    // ============ 第2级 基础级（一年级汉字优先） ============
    {
        id: 'L2-1',
        level: 2,
        title: '第1课：基础级',
        characters: [
            { char: '石', pinyin: 'shí', meaning: '石头，坚硬的矿物', words: ['石头', '石块'], example: '河边有很多石头。', minecraftSentence: '用木镐敲碎石头就能得到圆石，这是建房子最基本的材料。' },
            { char: '平', pinyin: 'píng', meaning: '不倾斜，平坦', words: ['平地', '公平'], example: '操场很平坦。', minecraftSentence: '史蒂夫把山坡铲平，腾出一大块平地来盖农场。' },
            { char: '公', pinyin: 'gōng', meaning: '公共的；公正', words: ['公平', '公鸡'], example: '大家要公平竞争。', minecraftSentence: '两个人分战利品要公平，史蒂夫和伙伴各拿一半。' },
            { char: '父', pinyin: 'fù', meaning: '爸爸', words: ['父亲', '父母'], example: '父亲每天送我上学。', minecraftSentence: '史蒂夫像父亲保护孩子一样，守护着村庄里的每一个村民。' },
            { char: '您', pinyin: 'nín', meaning: '"你"的尊称', words: ['您好', '您请'], example: '老师您好！', minecraftSentence: '村民对铁傀儡很尊敬，见面好像在说"您辛苦了"。' },
            { char: '卫', pinyin: 'wèi', meaning: '保卫，守护', words: ['保卫', '卫士'], example: '战士保卫祖国。', minecraftSentence: '铁傀儡是村庄的卫士，日夜巡逻保护村民不受怪物侵害。' },
            { char: '木', pinyin: 'mù', meaning: '树木；木头', words: ['木头', '树木'], example: '这张桌子是木头做的。', minecraftSentence: '砍倒一棵树就能得到木头，木头是生存第一天最重要的材料。' },
            { char: '让', pinyin: 'ràng', meaning: '允许；使得', words: ['让开', '让步'], example: '妈妈让我早点睡觉。', minecraftSentence: '红石火把让活塞伸了出来，把门打开了。' },
            { char: '先', pinyin: 'xiān', meaning: '在前面，首先', words: ['先后', '首先'], example: '你先走，我随后就来。', minecraftSentence: '下矿洞之前先放好火把，不然黑漆漆的什么都看不见。' },
            { char: '人', pinyin: 'rén', meaning: '人类', words: ['人们', '大人'], example: '公园里有很多人。', minecraftSentence: '多人服务器里到处都是人，大家一起建造了一座巨大的城市。' },
            { char: '病', pinyin: 'bìng', meaning: '身体不舒服', words: ['生病', '病人'], example: '他生病了，今天没来上学。', minecraftSentence: '僵尸村民好像生了病，皮肤发绿，喂它金苹果就能治好。' },
            { char: '四', pinyin: 'sì', meaning: '数字4', words: ['四个', '四方'], example: '一年有四个季节。', minecraftSentence: '工作台是四块木板合成的，有了它才能做更多东西。' },
            { char: '豆', pinyin: 'dòu', meaning: '豆类植物的种子', words: ['豆子', '绿豆'], example: '妈妈煮了一锅绿豆汤。', minecraftSentence: '可可豆长在丛林的树干上，摘下来可以做饼干和棕色染料。' }
        ]
    },
    {
        id: 'L2-2',
        level: 2,
        title: '第2课：基础级',
        characters: [
            { char: '椅', pinyin: 'yǐ', meaning: '供人坐的家具', words: ['椅子', '桌椅'], example: '请坐到椅子上。', minecraftSentence: '史蒂夫用楼梯方块当椅子，在门口坐着看日落。' },
            { char: '竹', pinyin: 'zhú', meaning: '一种常绿植物', words: ['竹子', '竹林'], example: '熊猫最爱吃竹子。', minecraftSentence: '熊猫抱着竹子啃得津津有味，史蒂夫用竹子搭了个脚手架。' },
            { char: '掰', pinyin: 'bāi', meaning: '用手把东西分开', words: ['掰开', '掰断'], example: '他把面包掰成两半分给弟弟。', minecraftSentence: '史蒂夫把面包掰成两半，一半自己吃，一半喂给受伤的狼。' },
            { char: '满', pinyin: 'mǎn', meaning: '全部充实，达到容量', words: ['满了', '满意'], example: '杯子里的水满了。', minecraftSentence: '背包塞得满满的，史蒂夫只好把不值钱的圆石扔掉。' },
            { char: '半', pinyin: 'bàn', meaning: '二分之一', words: ['一半', '半天'], example: '蛋糕分成两半。', minecraftSentence: '太阳落到半山腰的时候，史蒂夫知道离天黑只剩一半时间了。' },
            { char: '户', pinyin: 'hù', meaning: '门；人家', words: ['窗户', '住户'], example: '请把窗户打开通通风。', minecraftSentence: '史蒂夫在墙上装了玻璃窗户，屋里一下子亮堂了许多。' },
            { char: '野', pinyin: 'yě', meaning: '野外；不驯服的', words: ['野外', '野生'], example: '我们去野外郊游。', minecraftSentence: '野生的狼在雪地里成群出没，扔块骨头就能把它驯服。' },
            { char: '块', pinyin: 'kuài', meaning: '成片成团的东西', words: ['一块', '石块'], example: '地上有一块石头。', minecraftSentence: '整个世界都是一块一块的方块组成的，连太阳都是方的。' },
            { char: '等', pinyin: 'děng', meaning: '等候；等级', words: ['等待', '等一下'], example: '请等我一下。', minecraftSentence: '史蒂夫在矿洞口等天亮，等太阳出来怪物烧光了再出发。' },
            { char: '又', pinyin: 'yòu', meaning: '再一次，表示重复', words: ['又是', '又来'], example: '他又迟到了。', minecraftSentence: '苦力怕又偷偷摸到了身后，史蒂夫听到嘶嘶声赶紧跑开。' },
            { char: '所', pinyin: 'suǒ', meaning: '地方；表示被动', words: ['所以', '住所'], example: '所以我们要早点出发。', minecraftSentence: '因为晚上太危险，所以史蒂夫天黑前一定要赶回家。' },
            { char: '要', pinyin: 'yào', meaning: '想要；重要', words: ['要求', '重要'], example: '我要一杯水。', minecraftSentence: '要打败末影龙，首先要收集足够的末影珍珠。' },
            { char: '朵', pinyin: 'duǒ', meaning: '花朵的量词', words: ['花朵', '一朵'], example: '花园里开了好多朵花。', minecraftSentence: '草地上长着一朵朵小花，红的黄的蓝的，史蒂夫摘了几朵做染料。' }
        ]
    },
    {
        id: 'L2-3',
        level: 2,
        title: '第3课：基础级',
        characters: [
            { char: '天', pinyin: 'tiān', meaning: '天空；一昼夜', words: ['天空', '今天'], example: '今天天气真好。', minecraftSentence: '天一黑怪物就会刷新，史蒂夫必须在天黑前找到躲避的地方。' },
            { char: '当', pinyin: 'dāng', meaning: '担任；在那个时候', words: ['当时', '当心'], example: '过马路要当心。', minecraftSentence: '挖矿的时候当心脚下，一不留神就会掉进岩浆里。' },
            { char: '捧', pinyin: 'pěng', meaning: '双手托着', words: ['捧着', '捧起'], example: '她捧着一束花。', minecraftSentence: '史蒂夫小心翼翼地捧着龙蛋，生怕一不小心把它弄碎。' },
            { char: '珠', pinyin: 'zhū', meaning: '圆形的小颗粒', words: ['珍珠', '水珠'], example: '项链上镶着一颗珍珠。', minecraftSentence: '末影人被打败后掉落了一颗末影珍珠，这是去末地的关键材料。' },
            { char: '来', pinyin: 'lái', meaning: '从别处到这里', words: ['过来', '回来'], example: '快过来看！', minecraftSentence: '一群僵尸朝着村庄涌来，铁傀儡冲上去挡住了它们。' },
            { char: '去', pinyin: 'qù', meaning: '从这里到别处', words: ['去年', '出去'], example: '我们去公园玩吧。', minecraftSentence: '史蒂夫带上干粮和武器，准备去沙漠寻找神殿。' },
            { char: '理', pinyin: 'lǐ', meaning: '道理；整理', words: ['道理', '整理'], example: '这个道理我明白了。', minecraftSentence: '史蒂夫整理好箱子里的物品，把矿石和食物分开存放。' },
            { char: '湖', pinyin: 'hú', meaning: '被陆地围着的大片水域', words: ['湖水', '湖边'], example: '湖水清澈见底。', minecraftSentence: '村庄旁边有一片湖，湖水碧蓝碧蓝的，里面还有鱼。' },
            { char: '注', pinyin: 'zhù', meaning: '集中；灌入', words: ['注意', '注视'], example: '上课要注意听讲。', minecraftSentence: '史蒂夫注意到墙角有个裂缝，凑近一看，里面竟然是个矿洞。' },
            { char: '子', pinyin: 'zi', meaning: '儿女；小的', words: ['孩子', '种子'], example: '孩子们在操场上玩。', minecraftSentence: '史蒂夫把小麦种子撒进耕好的田里，等着它们慢慢长大。' },
            { char: '也', pinyin: 'yě', meaning: '表示同样', words: ['也是', '也好'], example: '我也想去。', minecraftSentence: '猫也能帮忙赶走苦力怕，所以史蒂夫在家里养了好几只。' },
            { char: '棍', pinyin: 'gùn', meaning: '棒状的东西', words: ['棍子', '木棍'], example: '他捡了一根棍子。', minecraftSentence: '两根木棍加三块圆石就能合成一把石镐，这是挖矿的基本工具。' },
            { char: '比', pinyin: 'bǐ', meaning: '比较', words: ['比赛', '对比'], example: '我们来比一比谁跑得快。', minecraftSentence: '钻石剑比铁剑厉害多了，一刀就能砍掉僵尸大半条命。' }
        ]
    },
    {
        id: 'L2-4',
        level: 2,
        title: '第4课：基础级',
        characters: [
            { char: '刀', pinyin: 'dāo', meaning: '切割的工具', words: ['小刀', '菜刀'], example: '用刀把苹果切开。', minecraftSentence: '史蒂夫用铁锭打了一把刀，专门用来切南瓜做南瓜灯。' },
            { char: '立', pinyin: 'lì', meaning: '站着；建立', words: ['站立', '建立'], example: '同学们立正站好。', minecraftSentence: '史蒂夫在山顶立了一根火把当标记，远远就能看到家的方向。' },
            { char: '音', pinyin: 'yīn', meaning: '声音', words: ['声音', '音乐'], example: '教室里传来读书的声音。', minecraftSentence: '唱片机放出美妙的音乐，连附近的鹦鹉都跟着跳起舞来。' },
            { char: '梳', pinyin: 'shū', meaning: '整理头发的工具和动作', words: ['梳子', '梳头'], example: '早上起来先梳头。', minecraftSentence: '史蒂夫的头发被树枝刮得乱七八糟，可惜背包里没有梳子。' },
            { char: '水', pinyin: 'shuǐ', meaning: '无色透明的液体', words: ['水桶', '喝水'], example: '多喝水对身体好。', minecraftSentence: '用铁桶装一桶水倒在高处，水就会哗哗地往下流成瀑布。' },
            { char: '检', pinyin: 'jiǎn', meaning: '查看，检查', words: ['检查', '体检'], example: '出门前检查一下书包。', minecraftSentence: '出发前史蒂夫仔细检查了一遍装备，确认剑和盾牌都带齐了。' },
            { char: '新', pinyin: 'xīn', meaning: '刚出现的，没用过的', words: ['新年', '新鲜'], example: '新年到了，大家穿上新衣服。', minecraftSentence: '史蒂夫搬进了新盖的房子，墙壁还散着橡木的清香。' },
            { char: '过', pinyin: 'guò', meaning: '经过；超过', words: ['过去', '经过'], example: '时间过得真快。', minecraftSentence: '一只苦力怕从门口经过，幸好没有发现躲在角落的史蒂夫。' },
            { char: '男', pinyin: 'nán', meaning: '男性', words: ['男孩', '男生'], example: '班里有二十个男生。', minecraftSentence: '村庄里的男村民穿着棕色长袍，在田里忙着种地。' },
            { char: '雨', pinyin: 'yǔ', meaning: '从云中降落的水滴', words: ['下雨', '雨水'], example: '外面下雨了，记得带伞。', minecraftSentence: '突然下起了大雨，骷髅躲到树下避雨，史蒂夫趁机溜走了。' },
            { char: '织', pinyin: 'zhī', meaning: '用线编成布或其他东西', words: ['编织', '织布'], example: '奶奶在织毛衣。', minecraftSentence: '用四根线就能织成一块羊毛，再拿去做成床铺。' },
            { char: '孩', pinyin: 'hái', meaning: '小孩，儿童', words: ['孩子', '小孩'], example: '孩子们在草地上玩耍。', minecraftSentence: '小僵尸比大僵尸跑得快多了，像个调皮的孩子到处乱窜。' },
            { char: '呀', pinyin: 'ya', meaning: '语气词，表示惊讶', words: ['哎呀', '好呀'], example: '哎呀，我忘带钥匙了！', minecraftSentence: '哎呀，挖着挖着脚下突然塌了，差点掉进地牢里！' }
        ]
    },
    {
        id: 'L2-5',
        level: 2,
        title: '第5课：基础级',
        characters: [
            { char: '伴', pinyin: 'bàn', meaning: '同伴，陪伴', words: ['伙伴', '陪伴'], example: '好伙伴要互相帮助。', minecraftSentence: '驯服的狼是最忠实的伙伴，不管去哪儿都跟在身边。' },
            { char: '兴', pinyin: 'xīng', meaning: '高兴；兴旺', words: ['高兴', '兴奋'], example: '他考了一百分，非常高兴。', minecraftSentence: '挖到钻石的那一刻，史蒂夫高兴得跳了起来。' },
            { char: '篮', pinyin: 'lán', meaning: '用竹或藤编的容器', words: ['篮子', '篮球'], example: '篮子里装满了水果。', minecraftSentence: '史蒂夫提着一篮子苹果回到村庄，分给饥饿的村民们。' },
            { char: '定', pinyin: 'dìng', meaning: '确定；稳定', words: ['一定', '决定'], example: '我一定会努力的。', minecraftSentence: '史蒂夫决定今天一定要找到钻石，不找到不回家。' },
            { char: '壁', pinyin: 'bì', meaning: '墙壁', words: ['墙壁', '壁画'], example: '墙壁上挂着一幅画。', minecraftSentence: '矿洞的墙壁上嵌着闪闪发光的金矿石，看得人眼馋。' },
            { char: '个', pinyin: 'gè', meaning: '量词，用于人或物', words: ['一个', '个子'], example: '给我一个苹果。', minecraftSentence: '史蒂夫一个人守着村庄大门，挡住了一波又一波的僵尸。' },
            { char: '有', pinyin: 'yǒu', meaning: '拥有；存在', words: ['有人', '没有'], example: '我有一只小猫。', minecraftSentence: '这个矿洞里有好多铁矿，够史蒂夫用很久了。' },
            { char: '扛', pinyin: 'káng', meaning: '用肩膀承担', words: ['扛起', '扛着'], example: '爸爸扛着一袋米回来了。', minecraftSentence: '史蒂夫扛起钻石镐，朝着最深的矿洞走去。' },
            { char: '吧', pinyin: 'ba', meaning: '语气词，表示建议', words: ['走吧', '好吧'], example: '我们走吧。', minecraftSentence: '天快黑了，赶紧回家吧，不然怪物就要出来了。' },
            { char: '山', pinyin: 'shān', meaning: '地面上高耸的部分', words: ['高山', '山洞'], example: '远处有一座高山。', minecraftSentence: '翻过这座山就能看到大海，史蒂夫加快了脚步。' },
            { char: '生', pinyin: 'shēng', meaning: '生长；生命', words: ['生活', '花生'], example: '种子发芽生长了。', minecraftSentence: '小麦从种子慢慢生长，过几天就能收割做面包了。' },
            { char: '斗', pinyin: 'dòu', meaning: '战斗；争斗', words: ['战斗', '奋斗'], example: '勇士们奋勇战斗。', minecraftSentence: '史蒂夫和末影龙展开了一场激烈的战斗，剑光闪闪。' },
            { char: '拦', pinyin: 'lán', meaning: '阻挡，不让通过', words: ['拦住', '阻拦'], example: '大树拦住了去路。', minecraftSentence: '铁傀儡张开双臂拦住了僵尸，不让它们靠近村民。' }
        ]
    },
    {
        id: 'L2-6',
        level: 2,
        title: '第6课：基础级',
        characters: [
            { char: '长', pinyin: 'zhǎng', meaning: '生长；长度大', words: ['长大', '长长'], example: '小树苗慢慢长大了。', minecraftSentence: '甘蔗长得很快，种在水边一会儿就长到三格高了。' },
            { char: '转', pinyin: 'zhuǎn', meaning: '改变方向；旋转', words: ['转身', '旋转'], example: '他转过身来看我。', minecraftSentence: '史蒂夫听到身后有脚步声，猛地转过身，发现是一只苦力怕。' },
            { char: '表', pinyin: 'biǎo', meaning: '外面；表示', words: ['表面', '手表'], example: '不能只看表面。', minecraftSentence: '地表看起来平平无奇，挖下去才发现地底藏着巨大的洞穴。' },
            { char: '爬', pinyin: 'pá', meaning: '手脚并用向上移动', words: ['爬山', '爬行'], example: '我们一起去爬山。', minecraftSentence: '蜘蛛能爬上垂直的墙壁，连围墙都挡不住它。' },
            { char: '查', pinyin: 'chá', meaning: '仔细看，调查', words: ['检查', '查看'], example: '老师在查作业。', minecraftSentence: '史蒂夫打开地图查看周围的地形，发现东边有一座村庄。' },
            { char: '云', pinyin: 'yún', meaning: '天空中的水汽凝结物', words: ['白云', '云朵'], example: '天上飘着白云。', minecraftSentence: '爬到山顶就能摸到云，白白的云朵从身边飘过。' },
            { char: '胖', pinyin: 'pàng', meaning: '身体肥胖', words: ['胖子', '胖乎乎'], example: '小猪胖乎乎的真可爱。', minecraftSentence: '喂了太多胡萝卜的猪变得胖乎乎的，走路都一摇一摆。' },
            { char: '女', pinyin: 'nǚ', meaning: '女性', words: ['女孩', '女生'], example: '她是一个勇敢的女孩。', minecraftSentence: '女巫住在沼泽的小屋里，桌上摆满了各种药水瓶。' },
            { char: '息', pinyin: 'xī', meaning: '呼吸；休息', words: ['休息', '消息'], example: '跑累了就休息一会儿。', minecraftSentence: '打了一整天的怪，史蒂夫躺到床上休息，体力慢慢恢复了。' },
            { char: '吓', pinyin: 'xià', meaning: '使害怕', words: ['吓人', '惊吓'], example: '突然跳出来吓了我一跳。', minecraftSentence: '苦力怕从暗处冲出来，把史蒂夫吓了一大跳。' },
            { char: '交', pinyin: 'jiāo', meaning: '交给；交往', words: ['交朋友', '交换'], example: '我们交换了礼物。', minecraftSentence: '史蒂夫和村民交换了三颗绿宝石，换来一把锋利的铁剑。' },
            { char: '洗', pinyin: 'xǐ', meaning: '用水去掉脏东西', words: ['洗手', '洗澡'], example: '吃饭前要洗手。', minecraftSentence: '从矿洞出来浑身是灰，史蒂夫跳进河里把自己洗干净。' },
            { char: '第', pinyin: 'dì', meaning: '表示次序', words: ['第一', '第二'], example: '他跑了第一名。', minecraftSentence: '史蒂夫第一次见到末影龙的时候，腿都吓软了。' }
        ]
    },
    {
        id: 'L2-7',
        level: 2,
        title: '第7课：基础级',
        characters: [
            { char: '汉', pinyin: 'hàn', meaning: '汉族；男子', words: ['汉字', '好汉'], example: '我们学习汉字。', minecraftSentence: '史蒂夫是个勇敢的好汉，什么怪物都不怕。' },
            { char: '具', pinyin: 'jù', meaning: '器具，工具', words: ['工具', '玩具'], example: '这套工具很好用。', minecraftSentence: '工作台是最重要的工具，没有它什么都合成不了。' },
            { char: '小', pinyin: 'xiǎo', meaning: '体积少，与"大"相反', words: ['小鸟', '大小'], example: '小鸟在树上唱歌。', minecraftSentence: '小僵尸个头虽小，跑起来却比大僵尸快得多。' },
            { char: '现', pinyin: 'xiàn', meaning: '此刻；出现', words: ['现在', '发现'], example: '现在几点了？', minecraftSentence: '史蒂夫发现了一个隐藏的地牢，里面有个刷怪笼。' },
            { char: '奇', pinyin: 'qí', meaning: '罕见的，特殊的', words: ['奇怪', '好奇'], example: '这件事真奇怪。', minecraftSentence: '蘑菇岛是最奇特的地方，地上全是巨大的蘑菇，连牛身上都长着蘑菇。' },
            { char: '下', pinyin: 'xià', meaning: '位置低的；往低处', words: ['下面', '下雨'], example: '桌子下面有只猫。', minecraftSentence: '往下挖到十六层就有机会碰到钻石，但也可能挖到岩浆。' },
            { char: '借', pinyin: 'jiè', meaning: '暂时使用别人的东西', words: ['借书', '借用'], example: '我想借你的橡皮用一下。', minecraftSentence: '史蒂夫向伙伴借了一把铁镐，自己的在矿洞里用坏了。' },
            { char: '停', pinyin: 'tíng', meaning: '不再运动', words: ['停下', '停止'], example: '车停在路边。', minecraftSentence: '雨终于停了，太阳出来把僵尸和骷髅都烧成了灰。' },
            { char: '拨', pinyin: 'bō', meaning: '用手指拨动', words: ['拨开', '拨动'], example: '他拨开草丛往前走。', minecraftSentence: '史蒂夫拨开茂密的树叶，发现后面藏着一座丛林神殿。' },
            { char: '乐', pinyin: 'lè', meaning: '快乐；音乐', words: ['快乐', '音乐'], example: '大家玩得很快乐。', minecraftSentence: '和朋友一起建造城堡是最快乐的事，比一个人冒险有趣多了。' },
            { char: '里', pinyin: 'lǐ', meaning: '内部；距离单位', words: ['里面', '这里'], example: '盒子里面有什么？', minecraftSentence: '箱子里面装满了各种矿石，史蒂夫舍不得用。' },
            { char: '识', pinyin: 'shí', meaning: '认识；知识', words: ['认识', '知识'], example: '我认识很多汉字了。', minecraftSentence: '史蒂夫学会了辨认各种矿石，一眼就能认出哪个是钻石。' },
            { char: '治', pinyin: 'zhì', meaning: '治疗；管理', words: ['治病', '治理'], example: '医生给病人治病。', minecraftSentence: '喝一瓶治疗药水，受的伤立刻就好了。' }
        ]
    },
    {
        id: 'L2-8',
        level: 2,
        title: '第8课：基础级',
        characters: [
            { char: '阅', pinyin: 'yuè', meaning: '看，读', words: ['阅读', '翻阅'], example: '我喜欢阅读故事书。', minecraftSentence: '附魔台上的书页不停翻动，好像有人在阅读一样。' },
            { char: '摇', pinyin: 'yáo', meaning: '来回晃动', words: ['摇头', '摇晃'], example: '小狗高兴地摇尾巴。', minecraftSentence: '狼看到史蒂夫拿出骨头，兴奋地摇起了尾巴。' },
            { char: '铅', pinyin: 'qiān', meaning: '一种金属元素', words: ['铅笔', '铅块'], example: '用铅笔写字。', minecraftSentence: '拴绳就像一根铅笔粗的绳子，牵着动物走到哪儿都行。' },
            { char: '透', pinyin: 'tòu', meaning: '穿过；透明', words: ['透明', '看透'], example: '玻璃是透明的。', minecraftSentence: '玻璃方块是透明的，装在墙上就能看到外面的风景。' },
            { char: '燕', pinyin: 'yàn', meaning: '一种候鸟', words: ['燕子', '飞燕'], example: '春天来了，燕子飞回来了。', minecraftSentence: '鹦鹉像燕子一样灵活，在丛林的大树之间穿来穿去。' },
            { char: '帮', pinyin: 'bāng', meaning: '帮助', words: ['帮忙', '帮助'], example: '请你帮我拿一下。', minecraftSentence: '铁傀儡总是帮村民赶走怪物，是村庄最可靠的守护者。' },
            { char: '土', pinyin: 'tǔ', meaning: '泥土，地面的松软物质', words: ['泥土', '土地'], example: '花盆里装满了泥土。', minecraftSentence: '用锄头翻好土，再种上种子，浇点水就等着庄稼长大。' },
            { char: '面', pinyin: 'miàn', meaning: '脸；表面；面条', words: ['面条', '前面'], example: '妈妈煮了一碗面条。', minecraftSentence: '小麦磨成面粉再烤成面包，是最方便的食物。' },
            { char: '了', pinyin: 'le', meaning: '表示完成', words: ['好了', '到了'], example: '作业写完了。', minecraftSentence: '房子终于建好了，史蒂夫在门口插上火把庆祝。' },
            { char: '日', pinyin: 'rì', meaning: '太阳；一天', words: ['日出', '日记'], example: '日出的时候天空很美。', minecraftSentence: '每到日出，阳光就会把夜里的僵尸和骷髅烧成灰烬。' },
            { char: '己', pinyin: 'jǐ', meaning: '自己', words: ['自己', '知己'], example: '自己的事情自己做。', minecraftSentence: '生存模式里一切都要靠自己，从砍树到打怪全得亲手来。' },
            { char: '好', pinyin: 'hǎo', meaning: '优秀；表示赞同', words: ['好人', '好吃'], example: '这个苹果真好吃。', minecraftSentence: '金苹果是最好的食物，吃下去不但回血还能获得护盾。' },
            { char: '工', pinyin: 'gōng', meaning: '劳动；工人', words: ['工人', '手工'], example: '工人们在盖房子。', minecraftSentence: '工作台就是史蒂夫的工坊，所有装备都在这里打造。' }
        ]
    },
    {
        id: 'L2-9',
        level: 2,
        title: '第9课：基础级',
        characters: [
            { char: '东', pinyin: 'dōng', meaning: '方向，太阳升起的一边', words: ['东方', '东西'], example: '太阳从东方升起。', minecraftSentence: '太阳从东边升起，史蒂夫朝着东方出发去寻找新大陆。' },
            { char: '关', pinyin: 'guān', meaning: '关闭；关系', words: ['关门', '关心'], example: '出门记得关灯。', minecraftSentence: '天黑之前赶紧关上门，不然僵尸会闯进来。' },
            { char: '消', pinyin: 'xiāo', meaning: '消失；消除', words: ['消失', '消灭'], example: '雪人在太阳下慢慢消失了。', minecraftSentence: '太阳一出来，夜里的怪物就消失得无影无踪。' },
            { char: '厂', pinyin: 'chǎng', meaning: '工厂', words: ['工厂', '厂房'], example: '工厂里有很多机器。', minecraftSentence: '史蒂夫用红石建了一座自动农场，像个小工厂一样不停运转。' },
            { char: '腰', pinyin: 'yāo', meaning: '身体中间部分', words: ['腰带', '弯腰'], example: '弯腰捡起地上的东西。', minecraftSentence: '史蒂夫弯下腰从地上捡起掉落的钻石，小心翼翼放进背包。' },
            { char: '火', pinyin: 'huǒ', meaning: '燃烧产生的光和热', words: ['火把', '火焰'], example: '不要玩火，很危险。', minecraftSentence: '火把是矿洞里最重要的东西，没有火就什么都看不见。' },
            { char: '忙', pinyin: 'máng', meaning: '事情多，没有空闲', words: ['忙碌', '帮忙'], example: '妈妈每天都很忙。', minecraftSentence: '收获季节村民们忙得不停，在田里收小麦、种胡萝卜。' },
            { char: '难', pinyin: 'nán', meaning: '不容易', words: ['困难', '难题'], example: '这道题好难啊。', minecraftSentence: '末影龙是最难打败的怪物，没有好装备根本靠不近。' },
            { char: '意', pinyin: 'yì', meaning: '心里的想法', words: ['意思', '注意'], example: '你明白我的意思吗？', minecraftSentence: '村民点头摇头表达不同的意思，想交易就伸出双手。' },
            { char: '汤', pinyin: 'tāng', meaning: '煮食物的汁液', words: ['鸡汤', '汤圆'], example: '妈妈煮了一锅鸡汤。', minecraftSentence: '用蘑菇和碗就能做一碗热腾腾的蘑菇汤，喝了恢复体力。' },
            { char: '是', pinyin: 'shì', meaning: '表示肯定', words: ['是的', '但是'], example: '他是我的好朋友。', minecraftSentence: '钻石是最珍贵的矿石，也是每个冒险家梦寐以求的宝贝。' },
            { char: '巾', pinyin: 'jīn', meaning: '擦东西或包东西的布', words: ['毛巾', '围巾'], example: '用毛巾擦擦脸。', minecraftSentence: '旗帜就像一面彩色的方巾，插在屋顶上随风飘扬。' },
            { char: '些', pinyin: 'xiē', meaning: '表示不定的数量', words: ['一些', '这些'], example: '给我一些糖果吧。', minecraftSentence: '史蒂夫在矿洞里捡到了一些红石粉，够做几个红石火把了。' }
        ]
    },
    {
        id: 'L2-10',
        level: 2,
        title: '第10课：基础级',
        characters: [
            { char: '脸', pinyin: 'liǎn', meaning: '头的前部', words: ['脸蛋', '笑脸'], example: '她的脸红红的。', minecraftSentence: '苦力怕的脸上永远是一副伤心的表情，可它一靠近就会爆炸。' },
            { char: '棵', pinyin: 'kē', meaning: '量词，用于树木', words: ['一棵树', '几棵'], example: '院子里有一棵大树。', minecraftSentence: '史蒂夫种了一棵橡树苗，过了一会儿就长成了参天大树。' },
            { char: '上', pinyin: 'shàng', meaning: '位置高的；往高处', words: ['上面', '上学'], example: '书放在桌子上面。', minecraftSentence: '爬上山顶就能看到远处的村庄，烟囱里冒着炊烟。' },
            { char: '呢', pinyin: 'ne', meaning: '语气词，表示疑问', words: ['你呢', '哪里呢'], example: '我做完了，你呢？', minecraftSentence: '铁矿找到了，可是钻石在哪里呢？史蒂夫继续往下挖。' },
            { char: '往', pinyin: 'wǎng', meaning: '朝某个方向去', words: ['往前', '来往'], example: '一直往前走就到了。', minecraftSentence: '史蒂夫沿着火把的方向往回走，终于找到了矿洞的出口。' },
            { char: '共', pinyin: 'gòng', meaning: '一起；总计', words: ['一共', '共同'], example: '我们一共有五个人。', minecraftSentence: '三个伙伴一共凑了六十四块铁锭，够给每人打一套铁甲。' },
            { char: '快', pinyin: 'kuài', meaning: '速度高', words: ['快跑', '快乐'], example: '他跑得真快。', minecraftSentence: '史蒂夫喝了速度药水，跑得比豹猫还快。' },
            { char: '灯', pinyin: 'dēng', meaning: '照明的器具', words: ['电灯', '灯笼'], example: '天黑了，开灯吧。', minecraftSentence: '南瓜灯又亮又好看，放在门口既能照明又能装饰。' },
            { char: '扇', pinyin: 'shàn', meaning: '扇子；量词用于门窗', words: ['扇子', '电扇'], example: '奶奶拿着扇子扇风。', minecraftSentence: '史蒂夫给房子装了两扇橡木门，进出方便又安全。' },
            { char: '位', pinyin: 'wèi', meaning: '位置；量词表示尊敬', words: ['座位', '一位'], example: '请坐到自己的座位上。', minecraftSentence: '这位村民是个图书管理员，用绿宝石就能换到附魔书。' },
            { char: '她', pinyin: 'tā', meaning: '女性第三人称', words: ['她的', '她们'], example: '她是我的姐姐。', minecraftSentence: '女巫虽然可怕，但她酿的药水确实厉害，一瓶就能让人中毒。' },
            { char: '书', pinyin: 'shū', meaning: '装订成册的著作', words: ['书本', '读书'], example: '我最喜欢读故事书。', minecraftSentence: '附魔台旁边摆满了书架，书越多附魔的等级就越高。' },
            { char: '虫', pinyin: 'chóng', meaning: '昆虫等小动物', words: ['虫子', '毛虫'], example: '叶子上有一条毛虫。', minecraftSentence: '蠹虫藏在石砖里面，一敲碎石头就会有一群虫子钻出来。' }
        ]
    },
    // ============ 第3级 初级（一年级汉字优先） ============
    {
        id: 'L3-1',
        level: 3,
        title: '第1课：初级',
        characters: [
            { char: '忘', pinyin: 'wàng', meaning: '记不住，遗忘', words: ['忘记', '忘了'], example: '别忘了带作业。', minecraftSentence: '千万别忘了在矿洞里插火把，不然就找不到回去的路了。' },
            { char: '我', pinyin: 'wǒ', meaning: '自己，第一人称', words: ['我们', '我的'], example: '我叫小明。', minecraftSentence: '我要成为最厉害的冒险家，打败末影龙！' },
            { char: '结', pinyin: 'jié', meaning: '系；结束', words: ['结果', '结束'], example: '故事的结局很感人。', minecraftSentence: '打败末影龙之后，天空中飘下了结局诗，冒险终于结束了。' },
            { char: '画', pinyin: 'huà', meaning: '用笔描绘图形', words: ['画画', '图画'], example: '我画了一幅画。', minecraftSentence: '墙上挂着各种各样的画，有的画着山，有的画着日落。' },
            { char: '田', pinyin: 'tián', meaning: '种庄稼的土地', words: ['田地', '稻田'], example: '农民在田里种稻子。', minecraftSentence: '村庄外面有大片的田地，种着小麦和胡萝卜，一片金黄。' },
            { char: '禾', pinyin: 'hé', meaning: '谷类植物的总称', words: ['禾苗', '禾田'], example: '田里的禾苗绿油油的。', minecraftSentence: '史蒂夫种的小麦长出了嫩绿的禾苗，再过几天就能收割了。' },
            { char: '足', pinyin: 'zú', meaning: '脚；充足', words: ['足够', '满足'], example: '这些水果足够大家吃了。', minecraftSentence: '背包里的食物足够吃三天，史蒂夫放心地出发了。' },
            { char: '极', pinyin: 'jí', meaning: '最高程度；尽头', words: ['极好', '北极'], example: '今天的天气极好。', minecraftSentence: '钻石剑的攻击力极强，一剑就能砍倒一只僵尸。' },
            { char: '丁', pinyin: 'dīng', meaning: '人口；钉子状的东西', words: ['园丁', '丁点'], example: '园丁在花园里浇花。', minecraftSentence: '史蒂夫像个勤劳的园丁，每天给农田里的庄稼浇水施肥。' },
            { char: '河', pinyin: 'hé', meaning: '天然的水道', words: ['小河', '河水'], example: '小河里的水清清的。', minecraftSentence: '村庄旁边有一条小河，河水清澈见底，还能看到鱼在游。' },
            { char: '刘', pinyin: 'liú', meaning: '姓氏', words: ['刘海', '姓刘'], example: '刘老师教我们数学。', minecraftSentence: '村庄里有个村民大家都叫他老刘，他是最好的铁匠。' },
            { char: '红', pinyin: 'hóng', meaning: '像血一样的颜色', words: ['红色', '红花'], example: '她穿了一件红色的裙子。', minecraftSentence: '红石粉是红色的，铺在地上可以传递信号，像电线一样。' },
            { char: '物', pinyin: 'wù', meaning: '东西；生物', words: ['动物', '食物'], example: '动物园里有很多动物。', minecraftSentence: '森林里有各种各样的动物，有猪、牛、羊，还有狼和狐狸。' }
        ]
    },
    {
        id: 'L3-2',
        level: 3,
        title: '第2课：初级',
        characters: [
            { char: '兔', pinyin: 'tù', meaning: '一种长耳朵的动物', words: ['兔子', '白兔'], example: '小白兔蹦蹦跳跳真可爱。', minecraftSentence: '沙漠里的兔子跑得飞快，史蒂夫追了半天也没追上。' },
            { char: '万', pinyin: 'wàn', meaning: '数目，十个千', words: ['一万', '万一'], example: '这座城市有一万多人。', minecraftSentence: '这个世界有万千种方块，每一种都有不同的用处。' },
            { char: '屋', pinyin: 'wū', meaning: '房子', words: ['屋子', '房屋'], example: '屋子里很暖和。', minecraftSentence: '史蒂夫在山坡上盖了一间小屋，窗户正对着日落的方向。' },
            { char: '江', pinyin: 'jiāng', meaning: '大河', words: ['长江', '江水'], example: '长江是中国最长的河。', minecraftSentence: '眼前是一条宽阔的大江，史蒂夫得造一条船才能渡过去。' },
            { char: '做', pinyin: 'zuò', meaning: '制造；从事', words: ['做饭', '做事'], example: '妈妈在厨房做饭。', minecraftSentence: '史蒂夫用三块铁锭做了一把铁桶，可以装水也可以装岩浆。' },
            { char: '谁', pinyin: 'shuí', meaning: '疑问代词，问人', words: ['谁的', '是谁'], example: '这是谁的书包？', minecraftSentence: '是谁在夜里敲门？史蒂夫拿起剑小心翼翼地打开了门。' },
            { char: '看', pinyin: 'kàn', meaning: '用眼睛观察', words: ['看见', '看书'], example: '我看见一只小鸟。', minecraftSentence: '站在高塔上往远处看，能看见大片的森林和一座雪山。' },
            { char: '夕', pinyin: 'xī', meaning: '傍晚，日落时分', words: ['夕阳', '除夕'], example: '夕阳把天空染成了橘红色。', minecraftSentence: '夕阳西下，天边一片金黄，史蒂夫赶紧往家跑，天黑怪物就来了。' },
            { char: '肚', pinyin: 'dù', meaning: '腹部', words: ['肚子', '肚皮'], example: '我的肚子好饿啊。', minecraftSentence: '饥饿值掉光了，史蒂夫的肚子咕咕叫，赶紧啃了一个面包。' },
            { char: '夜', pinyin: 'yè', meaning: '天黑到天亮的时间', words: ['夜晚', '黑夜'], example: '夜晚的星空很美。', minecraftSentence: '黑夜一降临，僵尸和骷髅就从四面八方冒了出来。' },
            { char: '苦', pinyin: 'kǔ', meaning: '味道不好；辛苦', words: ['苦味', '辛苦'], example: '这药好苦啊。', minecraftSentence: '挖矿虽然辛苦，但一想到能找到钻石，史蒂夫就充满了干劲。' },
            { char: '住', pinyin: 'zhù', meaning: '居住；停住', words: ['住在', '记住'], example: '我住在学校旁边。', minecraftSentence: '史蒂夫住在海边的木屋里，每天醒来就能听到海浪声。' },
            { char: '美', pinyin: 'měi', meaning: '好看；令人满意', words: ['美丽', '美好'], example: '花园里的花真美丽。', minecraftSentence: '日出时分，阳光洒在雪山上，景色美得让人舍不得眨眼。' }
        ]
    },
    {
        id: 'L3-3',
        level: 3,
        title: '第3课：初级',
        characters: [
            { char: '高', pinyin: 'gāo', meaning: '从下到上距离大', words: ['高山', '高兴'], example: '这棵树长得真高。', minecraftSentence: '史蒂夫建了一座高塔，站在塔顶能看到整个世界的边际。' },
            { char: '猫', pinyin: 'māo', meaning: '一种家养动物', words: ['小猫', '猫咪'], example: '小猫在沙发上睡觉。', minecraftSentence: '丛林里的豹猫很怕人，要蹲下来慢慢靠近才能喂它生鱼。' },
            { char: '千', pinyin: 'qiān', meaning: '数目，十个百', words: ['一千', '千万'], example: '操场上有一千多人。', minecraftSentence: '史蒂夫挖了上千块石头，终于凑够了建城堡的材料。' },
            { char: '危', pinyin: 'wēi', meaning: '不安全', words: ['危险', '危害'], example: '过马路要注意危险。', minecraftSentence: '岩浆湖旁边非常危险，一不小心掉下去就什么都没了。' },
            { char: '朋', pinyin: 'péng', meaning: '朋友', words: ['朋友', '亲朋'], example: '他是我最好的朋友。', minecraftSentence: '史蒂夫和他的朋友一起建了一座巨大的城堡，比一个人建快多了。' },
            { char: '怪', pinyin: 'guài', meaning: '奇怪；妖怪', words: ['怪物', '奇怪'], example: '这件事真奇怪。', minecraftSentence: '天一黑，各种怪物就从暗处冒出来，僵尸、骷髅、苦力怕全来了。' },
            { char: '气', pinyin: 'qì', meaning: '气体；生气', words: ['空气', '生气'], example: '不要生气了。', minecraftSentence: '史蒂夫潜入水底太久，快要没气了，赶紧浮上水面呼吸。' },
            { char: '村', pinyin: 'cūn', meaning: '乡下聚居的地方', words: ['村庄', '农村'], example: '我的老家在一个小村庄。', minecraftSentence: '翻过山丘就看到了一个村庄，村里的村民正在田里干活。' },
            { char: '广', pinyin: 'guǎng', meaning: '面积大；范围宽', words: ['广大', '广场'], example: '广场上人很多。', minecraftSentence: '平原地形一望无际，广阔的草地上到处是牛羊。' },
            { char: '汽', pinyin: 'qì', meaning: '液体变成的气体', words: ['汽水', '汽车'], example: '夏天喝汽水真爽。', minecraftSentence: '炼药锅里的水咕嘟咕嘟冒着汽泡，药水快要炼好了。' },
            { char: '方', pinyin: 'fāng', meaning: '四角都是直角的形状', words: ['方块', '方向'], example: '桌子是方形的。', minecraftSentence: '这个世界里所有东西都是方的，连太阳和月亮都是方块。' },
            { char: '泪', pinyin: 'lèi', meaning: '眼泪', words: ['眼泪', '泪水'], example: '她感动得流下了眼泪。', minecraftSentence: '辛辛苦苦建的房子被苦力怕炸了个大洞，史蒂夫差点掉眼泪。' },
            { char: '花', pinyin: 'huā', meaning: '植物的繁殖器官', words: ['花朵', '开花'], example: '春天花园里开满了花。', minecraftSentence: '草地上开满了各种颜色的花，摘下来可以做成染料。' }
        ]
    },
    {
        id: 'L3-4',
        level: 3,
        title: '第4课：初级',
        characters: [
            { char: '合', pinyin: 'hé', meaning: '关闭；合在一起', words: ['合作', '合上'], example: '大家合作完成了任务。', minecraftSentence: '把木板和木棍合在一起，就能在工作台上合成一把木剑。' },
            { char: '盯', pinyin: 'dīng', meaning: '集中目光看', words: ['盯着', '盯住'], example: '他盯着黑板看。', minecraftSentence: '末影人最怕被人盯着看，你一盯它的眼睛，它就会发怒攻击。' },
            { char: '太', pinyin: 'tài', meaning: '过分；极', words: ['太阳', '太大'], example: '这个西瓜太大了。', minecraftSentence: '这个洞穴太深了，火把都不够用，史蒂夫决定先回去补给。' },
            { char: '坐', pinyin: 'zuò', meaning: '把臀部放在椅子上', words: ['坐下', '坐车'], example: '请坐下来休息。', minecraftSentence: '史蒂夫坐上矿车，沿着铁轨飞速滑进了矿洞深处。' },
            { char: '身', pinyin: 'shēn', meaning: '人的躯体', words: ['身体', '全身'], example: '锻炼身体很重要。', minecraftSentence: '穿上一整套钻石甲，全身上下闪闪发光，防御力拉满。' },
            { char: '句', pinyin: 'jù', meaning: '语言的基本单位', words: ['句子', '一句'], example: '老师说了一句话。', minecraftSentence: '附魔台上的文字谁也看不懂，每一句都像神秘的咒语。' },
            { char: '放', pinyin: 'fàng', meaning: '解除约束；搁置', words: ['放下', '放学'], example: '放学了，大家回家吧。', minecraftSentence: '史蒂夫把多余的矿石放进箱子里，背包终于腾出了空间。' },
            { char: '娃', pinyin: 'wá', meaning: '小孩子', words: ['娃娃', '女娃'], example: '她抱着一个布娃娃。', minecraftSentence: '村庄里的小娃娃跟在大人身后跑来跑去，好奇地看着史蒂夫。' },
            { char: '师', pinyin: 'shī', meaning: '老师；有专长的人', words: ['老师', '师傅'], example: '老师教我们写字。', minecraftSentence: '村庄里的图书管理员就像一位老师，能教史蒂夫各种附魔知识。' },
            { char: '玩', pinyin: 'wán', meaning: '做游戏；娱乐', words: ['玩耍', '好玩'], example: '小朋友们在一起玩耍。', minecraftSentence: '和朋友一起玩生存模式最有趣，大家分工合作建房子打怪物。' },
            { char: '松', pinyin: 'sōng', meaning: '一种常绿树；放松', words: ['松树', '轻松'], example: '山上有很多松树。', minecraftSentence: '针叶林里长满了高大的松树，砍下来的木头颜色比橡木深。' },
            { char: '被', pinyin: 'bèi', meaning: '表示被动；被子', words: ['被子', '被动'], example: '晚上盖好被子别着凉。', minecraftSentence: '史蒂夫的房子被苦力怕炸了一个大洞，只好连夜修补。' },
            { char: '会', pinyin: 'huì', meaning: '能够；聚会', words: ['学会', '开会'], example: '我学会了骑自行车。', minecraftSentence: '史蒂夫终于学会了用红石做自动门，一踩压力板门就开了。' }
        ]
    },
    {
        id: 'L3-5',
        level: 3,
        title: '第5课：初级',
        characters: [
            { char: '衣', pinyin: 'yī', meaning: '穿在身上的东西', words: ['衣服', '上衣'], example: '天冷了，多穿件衣服。', minecraftSentence: '皮革可以做成衣服穿在身上，虽然防御不高，但总比没有强。' },
            { char: '切', pinyin: 'qiè', meaning: '用刀分开；密切', words: ['一切', '亲切'], example: '一切都准备好了。', minecraftSentence: '出发前要检查一切装备：剑、镐、食物、火把，一样都不能少。' },
            { char: '安', pinyin: 'ān', meaning: '平安；安静', words: ['安全', '平安'], example: '注意安全。', minecraftSentence: '围上栅栏、插满火把，村庄就安全多了，怪物进不来。' },
            { char: '产', pinyin: 'chǎn', meaning: '生产；出产', words: ['产品', '生产'], example: '工厂生产了很多产品。', minecraftSentence: '自动农场不停地生产小麦，箱子里堆得满满的。' },
            { char: '军', pinyin: 'jūn', meaning: '军队；军人', words: ['军人', '军队'], example: '军人保卫祖国。', minecraftSentence: '一排铁傀儡站在村口，像一支钢铁军队守护着村庄。' },
            { char: '册', pinyin: 'cè', meaning: '书本', words: ['手册', '画册'], example: '这本画册很好看。', minecraftSentence: '附魔书就像一本神奇的手册，里面藏着各种强大的魔法。' },
            { char: '点', pinyin: 'diǎn', meaning: '小的痕迹；点燃', words: ['一点', '点火'], example: '给我一点时间。', minecraftSentence: '用打火石点燃下界传送门，紫色的火焰一下子就亮了。' },
            { char: '丛', pinyin: 'cóng', meaning: '聚集在一起的', words: ['丛林', '草丛'], example: '丛林里有很多动物。', minecraftSentence: '丛林生物群系里树木茂密，藤蔓从树顶一直垂到地面。' },
            { char: '散', pinyin: 'sàn', meaning: '分开；散步', words: ['散步', '散开'], example: '吃完饭出去散散步。', minecraftSentence: '打败怪物后，经验球四散开来，史蒂夫赶紧跑过去收集。' },
            { char: '还', pinyin: 'hái', meaning: '仍然；归还', words: ['还有', '还是'], example: '书包里还有一本书。', minecraftSentence: '箱子里还有几块铁锭，正好够再做一把铁剑。' },
            { char: '事', pinyin: 'shì', meaning: '事情', words: ['事情', '故事'], example: '这件事我来做。', minecraftSentence: '在生存模式里，最重要的事就是天黑之前找到或建好一个庇护所。' },
            { char: '止', pinyin: 'zhǐ', meaning: '停止；禁止', words: ['停止', '禁止'], example: '禁止在这里游泳。', minecraftSentence: '仙人掌能阻止怪物靠近，种一圈在房子周围就是天然的防线。' },
            { char: '信', pinyin: 'xìn', meaning: '相信；书信', words: ['相信', '信心'], example: '我相信你能做到。', minecraftSentence: '史蒂夫相信只要坚持往下挖，一定能找到钻石。' }
        ]
    },
    {
        id: 'L3-6',
        level: 3,
        title: '第6课：初级',
        characters: [
            { char: '披', pinyin: 'pī', meaning: '覆盖在肩上', words: ['披上', '披风'], example: '她披上了一件外套。', minecraftSentence: '穿上鞘翅就像披上了一对翅膀，从高处跳下就能在空中滑翔。' },
            { char: '卡', pinyin: 'kǎ', meaning: '夹住；卡片', words: ['卡片', '卡住'], example: '门被什么东西卡住了。', minecraftSentence: '活塞推出的方块把僵尸卡住了，它怎么也走不动。' },
            { char: '池', pinyin: 'chí', meaning: '水塘', words: ['水池', '池塘'], example: '池塘里有很多小鱼。', minecraftSentence: '史蒂夫在院子里挖了一个小水池，养了几条热带鱼。' },
            { char: '道', pinyin: 'dào', meaning: '道路；知道', words: ['知道', '道路'], example: '你知道答案吗？', minecraftSentence: '史蒂夫不知道这条矿道通向哪里，但还是鼓起勇气走了进去。' },
            { char: '样', pinyin: 'yàng', meaning: '形状；种类', words: ['一样', '样子'], example: '这两个苹果一样大。', minecraftSentence: '每种矿石的样子都不一样，铁矿是米色斑点，金矿是黄色斑点。' },
            { char: '它', pinyin: 'tā', meaning: '动物或事物的代词', words: ['它的', '它们'], example: '小狗摇着它的尾巴。', minecraftSentence: '这只狼被驯服后就一直跟着史蒂夫，它会帮忙攻击怪物。' },
            { char: '海', pinyin: 'hǎi', meaning: '大片的咸水', words: ['大海', '海洋'], example: '大海一望无际。', minecraftSentence: '站在海边望去，蓝色的大海一直延伸到天边，海底还藏着神殿。' },
            { char: '今', pinyin: 'jīn', meaning: '现在，这个时候', words: ['今天', '今年'], example: '今天天气真好。', minecraftSentence: '今天运气真好，刚下矿就挖到了一大片钻石矿。' },
            { char: '幅', pinyin: 'fú', meaning: '量词，用于画等', words: ['一幅', '幅度'], example: '墙上挂着一幅画。', minecraftSentence: '史蒂夫在墙上挂了一幅画，把后面丑丑的石墙遮住了。' },
            { char: '纸', pinyin: 'zhǐ', meaning: '写字画画用的薄片', words: ['纸张', '白纸'], example: '给我一张白纸。', minecraftSentence: '用甘蔗可以做成纸，再和皮革合在一起就能做成书。' },
            { char: '饱', pinyin: 'bǎo', meaning: '吃足了', words: ['吃饱', '饱满'], example: '我已经吃饱了。', minecraftSentence: '吃了一块牛排，饥饿值一下子就满了，史蒂夫终于吃饱了。' },
            { char: '伞', pinyin: 'sǎn', meaning: '遮雨的工具', words: ['雨伞', '打伞'], example: '下雨了，记得带伞。', minecraftSentence: '大蘑菇的顶部像一把巨大的伞，下雨时躲在下面刚好不会淋湿。' },
            { char: '清', pinyin: 'qīng', meaning: '干净；清楚', words: ['清水', '清楚'], example: '河水很清，能看到鱼。', minecraftSentence: '用玻璃瓶装一瓶清水，就可以拿去炼药锅里酿药水了。' }
        ]
    },
    {
        id: 'L3-7',
        level: 3,
        title: '第7课：初级',
        characters: [
            { char: '春', pinyin: 'chūn', meaning: '一年的第一个季节', words: ['春天', '春风'], example: '春天来了，花开了。', minecraftSentence: '繁花森林就像永远的春天，到处开满了五颜六色的花朵。' },
            { char: '鱼', pinyin: 'yú', meaning: '生活在水中的动物', words: ['小鱼', '钓鱼'], example: '我喜欢吃鱼。', minecraftSentence: '拿着钓鱼竿坐在河边钓鱼，不光能钓到鱼，有时还能钓到宝贝。' },
            { char: '泼', pinyin: 'pō', meaning: '把液体洒出去', words: ['泼水', '活泼'], example: '小妹妹很活泼。', minecraftSentence: '史蒂夫把一桶水泼在岩浆上，岩浆立刻变成了黑曜石。' },
            { char: '报', pinyin: 'bào', meaning: '告诉；报纸', words: ['报告', '报纸'], example: '老师让我做报告。', minecraftSentence: '铁傀儡发现了僵尸，立刻冲上去，像在向村民报告"有敌人"。' },
            { char: '阳', pinyin: 'yáng', meaning: '太阳；阳光', words: ['太阳', '阳光'], example: '阳光照在身上暖洋洋的。', minecraftSentence: '阳光是僵尸和骷髅的克星，太阳一出来它们就会着火。' },
            { char: '瓜', pinyin: 'guā', meaning: '蔓生植物的果实', words: ['西瓜', '南瓜'], example: '夏天吃西瓜最解渴。', minecraftSentence: '南瓜和西瓜都能种在田里，长大后一刀砍下来就是一整个瓜。' },
            { char: '眼', pinyin: 'yǎn', meaning: '视觉器官', words: ['眼睛', '眼光'], example: '她的眼睛又大又亮。', minecraftSentence: '末影之眼抛向天空后会飘向要塞的方向，跟着它走就能找到。' },
            { char: '尖', pinyin: 'jiān', meaning: '末端细小', words: ['尖尖', '笔尖'], example: '铅笔的笔尖断了。', minecraftSentence: '钟乳石的尖端非常锋利，从高处掉下来能把怪物扎伤。' },
            { char: '似', pinyin: 'shì', meaning: '像，好像', words: ['似乎', '相似'], example: '这两朵花长得很相似。', minecraftSentence: '远处的山丘似乎在动，走近一看原来是一群羊在吃草。' },
            { char: '欢', pinyin: 'huān', meaning: '快乐；喜欢', words: ['欢乐', '喜欢'], example: '我喜欢画画。', minecraftSentence: '史蒂夫最喜欢探索新的洞穴，每次都能发现不一样的宝藏。' },
            { char: '敢', pinyin: 'gǎn', meaning: '有勇气', words: ['勇敢', '不敢'], example: '他是个勇敢的孩子。', minecraftSentence: '史蒂夫鼓起勇气，敢一个人走进漆黑的矿洞深处。' },
            { char: '床', pinyin: 'chuáng', meaning: '睡觉用的家具', words: ['床铺', '起床'], example: '该起床了。', minecraftSentence: '用三块羊毛和三块木板就能做一张床，睡一觉天就亮了。' },
            { char: '玉', pinyin: 'yù', meaning: '一种美丽的石头', words: ['玉石', '宝玉'], example: '这块玉石很漂亮。', minecraftSentence: '绿宝石晶莹剔透像一块美玉，是和村民交易的货币。' }
        ]
    },
    {
        id: 'L3-8',
        level: 3,
        title: '第8课：初级',
        characters: [
            { char: '机', pinyin: 'jī', meaning: '机器；机会', words: ['机会', '飞机'], example: '这是一个好机会。', minecraftSentence: '发射器是一种红石机器，装上箭就能自动射击靠近的怪物。' },
            { char: '早', pinyin: 'zǎo', meaning: '太阳刚出来的时候', words: ['早上', '早晨'], example: '早上好！', minecraftSentence: '早上醒来推开门，阳光洒满大地，昨夜的怪物全都不见了。' },
            { char: '片', pinyin: 'piàn', meaning: '薄而平的东西', words: ['一片', '碎片'], example: '地上有一片落叶。', minecraftSentence: '一大片金黄的小麦田在阳光下随风摇摆，丰收的时候到了。' },
            { char: '桐', pinyin: 'tóng', meaning: '一种落叶乔木', words: ['梧桐', '桐树'], example: '路边种着一排梧桐树。', minecraftSentence: '丛林里的大树比梧桐还高，树干粗得要好几个人才能抱住。' },
            { char: '坏', pinyin: 'huài', meaning: '不好的；损坏', words: ['坏人', '损坏'], example: '这个玩具坏了。', minecraftSentence: '铁镐用久了耐久度就会降低，再不修就要坏了。' },
            { char: '旗', pinyin: 'qí', meaning: '用布做的标志', words: ['旗帜', '红旗'], example: '操场上飘着红旗。', minecraftSentence: '史蒂夫在城堡顶上插了一面旗帜，远远就能看到自己的家。' },
            { char: '习', pinyin: 'xí', meaning: '学习；练习', words: ['学习', '练习'], example: '我每天都认真学习。', minecraftSentence: '多练习用弓箭射击，慢慢就能习惯瞄准移动的怪物了。' },
            { char: '都', pinyin: 'dōu', meaning: '全部', words: ['都是', '全都'], example: '大家都到齐了。', minecraftSentence: '箱子里的食物都吃完了，史蒂夫得赶紧去打猎补充。' },
            { char: '杆', pinyin: 'gān', meaning: '细长的棍状物', words: ['旗杆', '栏杆'], example: '旗杆上飘着国旗。', minecraftSentence: '钓鱼竿是用木棍和线做成的，坐在河边一钓就是一下午。' },
            { char: '于', pinyin: 'yú', meaning: '在；对于', words: ['对于', '由于'], example: '对于这件事，我有话说。', minecraftSentence: '由于天黑得太快，史蒂夫来不及回家，只好就地挖洞躲一夜。' },
            { char: '支', pinyin: 'zhī', meaning: '撑住；量词', words: ['支撑', '一支'], example: '给我一支铅笔。', minecraftSentence: '一支箭射中了骷髅的头，它晃了晃就倒下了。' },
            { char: '寸', pinyin: 'cùn', meaning: '长度单位，很短', words: ['尺寸', '寸步'], example: '这块布的尺寸刚好。', minecraftSentence: '苦力怕已经靠到跟前了，寸步不离，史蒂夫赶紧转身就跑。' },
            { char: '到', pinyin: 'dào', meaning: '达到；来到', words: ['到达', '看到'], example: '我们到学校了。', minecraftSentence: '终于挖到了基岩层，这是世界的最底部，再也挖不下去了。' }
        ]
    },
    {
        id: 'L3-9',
        level: 3,
        title: '第9课：初级',
        characters: [
            { char: '桥', pinyin: 'qiáo', meaning: '架在水上的建筑', words: ['大桥', '石桥'], example: '河上有一座石桥。', minecraftSentence: '史蒂夫用橡木板搭了一座桥，横跨峡谷两岸，再也不用绕路了。' },
            { char: '言', pinyin: 'yán', meaning: '说话', words: ['语言', '发言'], example: '他的发言很精彩。', minecraftSentence: '村民虽然不会说人类的语言，但"嗯嗯"的声音表示它愿意交易。' },
            { char: '加', pinyin: 'jiā', meaning: '增多；添上', words: ['加油', '增加'], example: '加油，你能行！', minecraftSentence: '给铁剑附上锋利魔法，攻击力一下子就增加了不少。' },
            { char: '歌', pinyin: 'gē', meaning: '唱的曲子', words: ['唱歌', '歌曲'], example: '她唱了一首好听的歌。', minecraftSentence: '唱片机放出悠扬的歌曲，连附近的鹦鹉都跟着跳起了舞。' },
            { char: '皮', pinyin: 'pí', meaning: '动植物体表的组织', words: ['皮肤', '皮革'], example: '苹果皮是红色的。', minecraftSentence: '打败牛可以获得皮革，用皮革能做成简单的护甲。' },
            { char: '兰', pinyin: 'lán', meaning: '一种植物', words: ['兰花', '玉兰'], example: '兰花开得真香。', minecraftSentence: '繁花森林里有一种蓝色的花，像兰花一样优雅，摘下来可以做蓝色染料。' },
            { char: '国', pinyin: 'guó', meaning: '国家', words: ['国家', '中国'], example: '我爱我的国家。', minecraftSentence: '史蒂夫建了一座巨大的城堡，围上城墙，就像一个小小的王国。' },
            { char: '造', pinyin: 'zào', meaning: '制作；建造', words: ['建造', '制造'], example: '工人们在建造大桥。', minecraftSentence: '史蒂夫花了三天时间建造了一座跨海大桥，连接两座岛屿。' },
            { char: '间', pinyin: 'jiān', meaning: '中间；房间', words: ['房间', '中间'], example: '我的房间很整洁。', minecraftSentence: '史蒂夫在家里隔出了好几个房间，有卧室、仓库，还有附魔室。' },
            { char: '胡', pinyin: 'hú', meaning: '胡须；乱来', words: ['胡萝卜', '胡说'], example: '兔子爱吃胡萝卜。', minecraftSentence: '用胡萝卜可以吸引猪跟着你走，还能给猪戴上鞍骑着跑。' },
            { char: '评', pinyin: 'píng', meaning: '评论；评价', words: ['评价', '批评'], example: '老师给了我很好的评价。', minecraftSentence: '这座城堡建得真不错，如果让村民来评价，一定会竖起大拇指。' },
            { char: '杨', pinyin: 'yáng', meaning: '一种落叶乔木', words: ['杨树', '白杨'], example: '路边种着一排杨树。', minecraftSentence: '白桦林里的树又高又直，像一排排白杨树整齐地站在那里。' },
            { char: '主', pinyin: 'zhǔ', meaning: '最重要的；主人', words: ['主人', '主要'], example: '小狗认出了它的主人。', minecraftSentence: '驯服的狼认定了史蒂夫是主人，走到哪儿都忠心耿耿地跟着。' }
        ]
    },
    {
        id: 'L3-10',
        level: 3,
        title: '第10课：初级',
        characters: [
            { char: '听', pinyin: 'tīng', meaning: '用耳朵接收声音', words: ['听见', '好听'], example: '你听到了吗？', minecraftSentence: '夜里安静下来，仔细听能听到僵尸在门外低沉的呻吟声。' },
            { char: '给', pinyin: 'gěi', meaning: '交付；送', words: ['给你', '送给'], example: '我把苹果给你。', minecraftSentence: '史蒂夫把一颗绿宝石给了村民，换来了一张藏宝图。' },
            { char: '课', pinyin: 'kè', meaning: '教学的一个段落', words: ['上课', '课本'], example: '上课要认真听讲。', minecraftSentence: '生存的第一课就是学会砍树，没有木头什么工具都做不了。' },
            { char: '打', pinyin: 'dǎ', meaning: '击；做', words: ['打开', '打败'], example: '请打开窗户。', minecraftSentence: '史蒂夫举起铁剑，一口气打败了三只僵尸。' },
            { char: '向', pinyin: 'xiàng', meaning: '朝着某个方向', words: ['方向', '向前'], example: '我们向前走。', minecraftSentence: '指南针的指针永远指向出生点的方向，迷路了就看看它。' },
            { char: '的', pinyin: 'de', meaning: '助词，表示所属', words: ['我的', '红色的'], example: '这是我的书包。', minecraftSentence: '钻石做的剑是最锋利的武器，也是每个冒险家的梦想。' },
            { char: '思', pinyin: 'sī', meaning: '想；思考', words: ['思考', '意思'], example: '让我想一想。', minecraftSentence: '面对复杂的红石电路，史蒂夫坐下来仔细思考该怎么接线。' },
            { char: '细', pinyin: 'xì', meaning: '小的；仔细', words: ['仔细', '细心'], example: '做事要仔细。', minecraftSentence: '挖矿的时候要仔细看脚下，一不小心就会掉进岩浆里。' },
            { char: '始', pinyin: 'shǐ', meaning: '开始', words: ['开始', '始终'], example: '比赛开始了。', minecraftSentence: '一切准备就绪，史蒂夫深吸一口气，开始向末影龙发起挑战。' },
            { char: '另', pinyin: 'lìng', meaning: '别的，其他的', words: ['另外', '另一个'], example: '另外还有一个办法。', minecraftSentence: '这条路被岩浆堵住了，史蒂夫决定找另一条路绕过去。' },
            { char: '青', pinyin: 'qīng', meaning: '蓝绿色', words: ['青草', '青蛙'], example: '青草地上开满了花。', minecraftSentence: '雨后的草地一片青绿，史蒂夫在上面种了一排甜浆果丛。' },
            { char: '肥', pinyin: 'féi', meaning: '脂肪多；肥料', words: ['肥料', '肥胖'], example: '给花施点肥料。', minecraftSentence: '用骨粉当肥料撒在庄稼上，小麦一下子就长到了最高。' },
            { char: '学', pinyin: 'xué', meaning: '学习；模仿', words: ['学校', '学会'], example: '我在学校学到了很多。', minecraftSentence: '史蒂夫跟着老玩家学会了用红石做自动收割机，效率高多了。' }
        ]
    },
    // ============ 第4级 进阶级 ============
    {
        id: 'L4-1',
        level: 4,
        title: '第1课：进阶级',
        characters: [
            { char: '网', pinyin: 'wǎng', meaning: '用绳线编成的东西', words: ['蜘蛛网', '渔网'], example: '蜘蛛在角落里结了一张网。', minecraftSentence: '矿洞里到处是蜘蛛网，走进去就会被粘住，速度变得很慢。' },
            { char: '车', pinyin: 'chē', meaning: '有轮子的交通工具', words: ['火车', '汽车'], example: '马路上有很多汽车。', minecraftSentence: '矿车沿着铁轨飞速滑行，比走路快多了，还不用费体力。' },
            { char: '斤', pinyin: 'jīn', meaning: '重量单位', words: ['公斤', '斤两'], example: '这个西瓜有十斤重。', minecraftSentence: '一整组六十四块金锭沉甸甸的，怕是有好几十斤重。' },
            { char: '后', pinyin: 'hòu', meaning: '在背面；以后', words: ['后面', '以后'], example: '学校后面有一片树林。', minecraftSentence: '史蒂夫回头一看，身后面跟着一大群僵尸，吓得拔腿就跑。' },
            { char: '称', pinyin: 'chēng', meaning: '叫做；称赞', words: ['称呼', '称赞'], example: '大家都称赞他做得好。', minecraftSentence: '这把剑附了五级锋利，堪称神器，一剑就能秒杀僵尸。' },
            { char: '请', pinyin: 'qǐng', meaning: '敬辞，表示客气', words: ['请问', '请坐'], example: '请问图书馆怎么走？', minecraftSentence: '请进来坐坐吧，史蒂夫热情地邀请路过的伙伴到家里歇脚。' },
            { char: '什', pinyin: 'shén', meaning: '疑问词的一部分', words: ['什么', '为什么'], example: '你在找什么？', minecraftSentence: '这个奇怪的声音是什么？史蒂夫竖起耳朵仔细听。' },
            { char: '两', pinyin: 'liǎng', meaning: '数目，二', words: ['两个', '两边'], example: '我有两个好朋友。', minecraftSentence: '两只苦力怕同时从两边冲过来，史蒂夫左躲右闪险险避开。' },
            { char: '壮', pinyin: 'zhuàng', meaning: '强壮；雄壮', words: ['强壮', '壮大'], example: '他长得又高又壮。', minecraftSentence: '铁傀儡身材高大强壮，一拳就能把怪物打飞到半空中。' },
            { char: '义', pinyin: 'yì', meaning: '正义；意义', words: ['意义', '正义'], example: '帮助别人很有意义。', minecraftSentence: '铁傀儡是正义的守护者，只要看到怪物欺负村民就会冲上去。' },
            { char: '旁', pinyin: 'páng', meaning: '侧面；附近', words: ['旁边', '路旁'], example: '学校旁边有一家书店。', minecraftSentence: '矿洞旁边有一条暗河，河水哗哗地流向更深的地方。' },
            { char: '远', pinyin: 'yuǎn', meaning: '距离长', words: ['远方', '遥远'], example: '他家离学校很远。', minecraftSentence: '末地城在很远很远的地方，要穿过虚空才能到达。' },
            { char: '反', pinyin: 'fǎn', meaning: '翻转；相反', words: ['反面', '相反'], example: '把纸翻到反面。', minecraftSentence: '活塞可以推出方块，也可以反过来把方块拉回来。' }
        ]
    },
    {
        id: 'L4-2',
        level: 4,
        title: '第2课：进阶级',
        characters: [
            { char: '房', pinyin: 'fáng', meaning: '住人的建筑', words: ['房子', '房间'], example: '我们家的房子很大。', minecraftSentence: '第一个夜晚最重要的事就是赶紧建一间房子，哪怕只是个土房。' },
            { char: '雪', pinyin: 'xuě', meaning: '白色的冰晶', words: ['下雪', '雪花'], example: '冬天下雪了，好美啊。', minecraftSentence: '雪地生物群系里白茫茫一片，踩在雪上会留下一串脚印。' },
            { char: '认', pinyin: 'rèn', meaning: '辨别；承认', words: ['认识', '认真'], example: '我认识这个字。', minecraftSentence: '史蒂夫已经能认出每一种矿石了，再也不会把铁矿和石头搞混。' },
            { char: '晴', pinyin: 'qíng', meaning: '天空无云', words: ['晴天', '晴朗'], example: '今天是个大晴天。', minecraftSentence: '晴天的时候视野特别好，站在山顶能看到好远好远的地方。' },
            { char: '然', pinyin: 'rán', meaning: '这样；表示转折', words: ['突然', '当然'], example: '突然下起了大雨。', minecraftSentence: '挖着挖着，脚下突然塌了，史蒂夫掉进了一个巨大的洞穴。' },
            { char: '群', pinyin: 'qún', meaning: '聚在一起的', words: ['一群', '群体'], example: '一群小鸟飞过天空。', minecraftSentence: '一群僵尸从黑暗中涌出来，史蒂夫举起剑准备迎战。' },
            { char: '唱', pinyin: 'chàng', meaning: '发出歌声', words: ['唱歌', '合唱'], example: '小鸟在树上唱歌。', minecraftSentence: '鹦鹉站在史蒂夫肩膀上，跟着唱片机的音乐唱个不停。' },
            { char: '柏', pinyin: 'bǎi', meaning: '一种常绿乔木', words: ['柏树', '松柏'], example: '公园里有几棵柏树。', minecraftSentence: '针叶林里的云杉像柏树一样四季常青，冬天也不会落叶。' },
            { char: '页', pinyin: 'yè', meaning: '书本的一面', words: ['页码', '一页'], example: '请翻到第五页。', minecraftSentence: '附魔台上的书自动翻着页，每一页上都写满了神秘的符号。' },
            { char: '令', pinyin: 'lìng', meaning: '命令；使得', words: ['命令', '令人'], example: '这个消息令人高兴。', minecraftSentence: '命令方块能执行各种指令，一个命令就能改变整个世界。' },
            { char: '邻', pinyin: 'lín', meaning: '住处相近的人', words: ['邻居', '相邻'], example: '我的邻居很友好。', minecraftSentence: '两个村庄离得很近，村民们像邻居一样经常来往。' },
            { char: '角', pinyin: 'jiǎo', meaning: '尖端；角落', words: ['角落', '牛角'], example: '猫躲在角落里。', minecraftSentence: '史蒂夫在房间的每个角落都插上了火把，不留一点暗处。' },
            { char: '轻', pinyin: 'qīng', meaning: '重量小', words: ['轻轻', '年轻'], example: '羽毛很轻。', minecraftSentence: '史蒂夫轻轻推开门，生怕惊动了门外巡逻的骷髅。' }
        ]
    },
    {
        id: 'L4-3',
        level: 4,
        title: '第3课：进阶级',
        characters: [
            { char: '穿', pinyin: 'chuān', meaning: '把衣服套在身上', words: ['穿衣', '穿过'], example: '快穿上外套，外面冷。', minecraftSentence: '穿上钻石靴子走在灵魂沙上，速度就不会变慢了。' },
            { char: '古', pinyin: 'gǔ', meaning: '很久以前的', words: ['古代', '古老'], example: '这座桥很古老。', minecraftSentence: '海底神殿是一座古老的建筑，里面住着守卫者和远古守卫者。' },
            { char: '光', pinyin: 'guāng', meaning: '明亮的射线', words: ['阳光', '光明'], example: '阳光照进了房间。', minecraftSentence: '荧石发出温暖的光，放在水底也能把周围照得亮堂堂的。' },
            { char: '跳', pinyin: 'tiào', meaning: '两脚离地弹起', words: ['跳高', '跳远'], example: '兔子一蹦一跳的。', minecraftSentence: '史蒂夫从一个方块跳到另一个方块，小心翼翼地穿过岩浆湖。' },
            { char: '傍', pinyin: 'bàng', meaning: '靠近；接近', words: ['傍晚', '依傍'], example: '傍晚的天空很美。', minecraftSentence: '傍晚时分天色渐暗，史蒂夫加快脚步赶在天黑前回到家。' },
            { char: '时', pinyin: 'shí', meaning: '时间；时候', words: ['时间', '小时'], example: '时间过得真快。', minecraftSentence: '白天的时间很短，感觉刚出门没多久太阳就要落山了。' },
            { char: '说', pinyin: 'shuō', meaning: '用话表达意思', words: ['说话', '听说'], example: '妈妈说要早点睡。', minecraftSentence: '听说末地城里藏着鞘翅，史蒂夫决定去闯一闯。' },
            { char: '老', pinyin: 'lǎo', meaning: '年纪大；旧的', words: ['老人', '老师'], example: '爷爷是个慈祥的老人。', minecraftSentence: '这把铁镐已经很老旧了，耐久度快见底，该换一把新的了。' },
            { char: '入', pinyin: 'rù', meaning: '进去', words: ['进入', '加入'], example: '请从正门进入。', minecraftSentence: '史蒂夫深吸一口气，踏入了下界传送门，紫光一闪就到了另一个世界。' },
            { char: '志', pinyin: 'zhì', meaning: '志向；记录', words: ['志气', '日志'], example: '他从小就有远大的志向。', minecraftSentence: '史蒂夫立下志向，一定要打败末影龙，成为最强的冒险家。' },
            { char: '底', pinyin: 'dǐ', meaning: '最下面的部分', words: ['底下', '到底'], example: '箱子底下有一只蚂蚁。', minecraftSentence: '挖到世界的最底层就是基岩，怎么挖也挖不穿。' },
            { char: '井', pinyin: 'jǐng', meaning: '从地面挖的深洞取水', words: ['水井', '井口'], example: '村子里有一口老井。', minecraftSentence: '村庄中央有一口水井，井底有时候能发现通往矿洞的入口。' },
            { char: '草', pinyin: 'cǎo', meaning: '矮小的绿色植物', words: ['小草', '草地'], example: '小草从泥土里钻出来了。', minecraftSentence: '打掉草丛偶尔会掉出种子，拿去种在田里就能长出小麦。' }
        ]
    },
    {
        id: 'L4-4',
        level: 4,
        title: '第4课：进阶级',
        characters: [
            { char: '电', pinyin: 'diàn', meaning: '一种能量形式', words: ['电灯', '闪电'], example: '闪电划过天空。', minecraftSentence: '雷雨天的闪电劈中猪会变成僵尸猪灵，劈中苦力怕会变成闪电苦力怕。' },
            { char: '久', pinyin: 'jiǔ', meaning: '时间长', words: ['很久', '长久'], example: '好久不见了。', minecraftSentence: '这座废弃矿井看起来已经很久没人来过了，到处是蜘蛛网和碎木头。' },
            { char: '动', pinyin: 'dòng', meaning: '改变位置；行动', words: ['动物', '运动'], example: '小兔子动了动耳朵。', minecraftSentence: '红石信号一通，活塞就开始动起来，大门缓缓打开了。' },
            { char: '分', pinyin: 'fēn', meaning: '分开；部分', words: ['分开', '十分'], example: '把蛋糕分成两半。', minecraftSentence: '史蒂夫把挖到的矿石分成两份，一份自己用，一份存进箱子。' },
            { char: '奖', pinyin: 'jiǎng', meaning: '奖励；奖品', words: ['奖品', '奖励'], example: '他得了一等奖。', minecraftSentence: '打败末影龙后获得了大量经验值，这是最好的奖励。' },
            { char: '行', pinyin: 'xíng', meaning: '走；可以', words: ['行走', '不行'], example: '这样做行不行？', minecraftSentence: '穿上鞘翅从高处起飞，在天空中自由飞行的感觉太棒了。' },
            { char: '知', pinyin: 'zhī', meaning: '了解；知道', words: ['知道', '知识'], example: '我知道答案了。', minecraftSentence: '史蒂夫知道岩浆下面经常藏着钻石，但挖的时候要格外小心。' },
            { char: '对', pinyin: 'duì', meaning: '正确；面对', words: ['对面', '对不起'], example: '你说得对。', minecraftSentence: '面对一大群怪物，史蒂夫毫不退缩，举起剑冲了上去。' },
            { char: '双', pinyin: 'shuāng', meaning: '两个一组', words: ['一双', '双手'], example: '我有一双新鞋。', minecraftSentence: '史蒂夫双手握紧钻石剑，准备和凋灵进行最后的决战。' },
            { char: '季', pinyin: 'jì', meaning: '一年中的四分之一', words: ['季节', '四季'], example: '春天是万物复苏的季节。', minecraftSentence: '不同的生物群系就像不同的季节，有的像夏天一样炎热，有的像冬天一样寒冷。' },
            { char: '步', pinyin: 'bù', meaning: '行走时两脚的动作', words: ['脚步', '散步'], example: '一步一步往前走。', minecraftSentence: '史蒂夫一步一步小心翼翼地走在悬崖边，生怕掉下去。' },
            { char: '睛', pinyin: 'jīng', meaning: '眼珠', words: ['眼睛', '目不转睛'], example: '她的眼睛亮亮的。', minecraftSentence: '末影人有一双紫色的眼睛，在黑暗中闪闪发光，格外吓人。' },
            { char: '化', pinyin: 'huà', meaning: '变化；融化', words: ['变化', '融化'], example: '冰在太阳下融化了。', minecraftSentence: '雪放在火把旁边会慢慢融化成水，变成一滩水洼。' }
        ]
    },
    {
        id: 'L4-5',
        level: 4,
        title: '第5课：进阶级',
        characters: [
            { char: '无', pinyin: 'wú', meaning: '没有', words: ['无法', '无数'], example: '这里无人看管。', minecraftSentence: '虚空是一片无底的黑暗，掉下去就什么都没有了。' },
            { char: '贝', pinyin: 'bèi', meaning: '有壳的软体动物', words: ['宝贝', '贝壳'], example: '海边有很多贝壳。', minecraftSentence: '鹦鹉螺壳是海底的宝贝，收集够了可以用来合成潮涌核心。' },
            { char: '及', pinyin: 'jí', meaning: '达到；和', words: ['以及', '来不及'], example: '来不及了，快跑！', minecraftSentence: '苦力怕已经开始膨胀了，史蒂夫来不及跑远，赶紧躲到墙后面。' },
            { char: '把', pinyin: 'bǎ', meaning: '握住；量词', words: ['把手', '一把'], example: '把门关上。', minecraftSentence: '史蒂夫把最后一块方块放上去，城堡的大门终于完工了。' },
            { char: '跑', pinyin: 'pǎo', meaning: '快速移动', words: ['跑步', '奔跑'], example: '他跑得很快。', minecraftSentence: '苦力怕嘶嘶作响，史蒂夫撒腿就跑，跑得比兔子还快。' },
            { char: '封', pinyin: 'fēng', meaning: '密闭；量词用于信', words: ['封住', '一封信'], example: '我收到了一封信。', minecraftSentence: '史蒂夫用石头把矿洞的入口封住，不让怪物跟出来。' },
            { char: '么', pinyin: 'me', meaning: '疑问词的一部分', words: ['什么', '怎么'], example: '你在做什么？', minecraftSentence: '怎么回事？箱子里的钻石不见了，是不是有人偷走了？' },
            { char: '归', pinyin: 'guī', meaning: '返回', words: ['回归', '归来'], example: '小鸟归巢了。', minecraftSentence: '冒险了一整天，史蒂夫终于踏上了归途，远远就看到了家门口的火把。' },
            { char: '北', pinyin: 'běi', meaning: '方向，与"南"相反', words: ['北方', '北边'], example: '北方的冬天很冷。', minecraftSentence: '往北走就能到达雪地，那里白茫茫一片，还有北极熊出没。' },
            { char: '告', pinyin: 'gào', meaning: '说给别人听', words: ['告诉', '报告'], example: '我告诉你一个秘密。', minecraftSentence: '史蒂夫告诉伙伴，在十二层深处发现了一大片钻石矿。' },
            { char: '京', pinyin: 'jīng', meaning: '首都', words: ['北京', '京城'], example: '北京是中国的首都。', minecraftSentence: '史蒂夫把自己建的城堡当作京城，在最高的塔楼上插满了旗帜。' },
            { char: '讲', pinyin: 'jiǎng', meaning: '说；讲述', words: ['讲话', '讲故事'], example: '爷爷给我讲故事。', minecraftSentence: '围着篝火坐下来，史蒂夫给伙伴们讲起了第一次遇到末影龙的故事。' },
            { char: '站', pinyin: 'zhàn', meaning: '直立；车站', words: ['站立', '车站'], example: '请站起来回答问题。', minecraftSentence: '铁傀儡站在村口一动不动，像一尊雕像守护着村庄。' }
        ]
    },
    {
        id: 'L4-6',
        level: 4,
        title: '第6课：进阶级',
        characters: [
            { char: '着', pinyin: 'zhe', meaning: '表示动作持续', words: ['看着', '走着'], example: '他笑着说。', minecraftSentence: '史蒂夫举着火把照着路，一步步走进了漆黑的矿洞。' },
            { char: '戴', pinyin: 'dài', meaning: '把东西放在头上或身上', words: ['戴帽子', '穿戴'], example: '出门记得戴帽子。', minecraftSentence: '史蒂夫戴上钻石头盔，全身的防御力又提升了一大截。' },
            { char: '影', pinyin: 'yǐng', meaning: '物体挡光形成的暗像', words: ['影子', '电影'], example: '树下有一片阴影。', minecraftSentence: '末影人的身影在月光下若隐若现，一眨眼就瞬移到了别处。' },
            { char: '抱', pinyin: 'bào', meaning: '用手臂围住', words: ['拥抱', '抱着'], example: '妈妈抱着小宝宝。', minecraftSentence: '史蒂夫抱起一只小羊放进围栏里，免得它跑丢了。' },
            { char: '桂', pinyin: 'guì', meaning: '一种常绿乔木', words: ['桂花', '桂树'], example: '桂花开了，好香啊。', minecraftSentence: '繁花森林里有一种金黄色的花，香气扑鼻，像桂花一样好闻。' },
            { char: '队', pinyin: 'duì', meaning: '有组织的集体', words: ['队伍', '排队'], example: '大家排好队。', minecraftSentence: '三个伙伴组成一支小队，分工合作去攻打下界堡垒。' },
            { char: '星', pinyin: 'xīng', meaning: '天空中发光的天体', words: ['星星', '星空'], example: '夜晚的星星真多。', minecraftSentence: '下界之星是凋灵掉落的宝物，用它可以做成信标照亮整片天空。' },
            { char: '再', pinyin: 'zài', meaning: '又一次', words: ['再见', '再来'], example: '明天再见！', minecraftSentence: '铁镐坏了没关系，再做一把就行，矿洞里有的是铁矿。' },
            { char: '没', pinyin: 'méi', meaning: '没有', words: ['没有', '没关系'], example: '我没有看到。', minecraftSentence: '背包里没有食物了，史蒂夫的饥饿值一直在往下掉。' },
            { char: '宽', pinyin: 'kuān', meaning: '横的距离大', words: ['宽阔', '宽广'], example: '这条马路很宽。', minecraftSentence: '眼前是一片宽阔的平原，一望无际，特别适合建一座大城堡。' },
            { char: '问', pinyin: 'wèn', meaning: '提出疑问', words: ['问题', '提问'], example: '有问题请举手。', minecraftSentence: '史蒂夫走到村民面前，想问问它有没有好东西可以交换。' },
            { char: '台', pinyin: 'tái', meaning: '高出地面的平面', words: ['台阶', '讲台'], example: '老师站在讲台上。', minecraftSentence: '史蒂夫用石砖砌了几级台阶，通往城堡的大门。' },
            { char: '吃', pinyin: 'chī', meaning: '把食物放进嘴里', words: ['吃饭', '好吃'], example: '该吃饭了。', minecraftSentence: '饥饿值快掉光了，赶紧吃块面包补充体力。' }
        ]
    },
    {
        id: 'L4-7',
        level: 4,
        title: '第7课：进阶级',
        characters: [
            { char: '岸', pinyin: 'àn', meaning: '水边的陆地', words: ['河岸', '海岸'], example: '河岸上种着柳树。', minecraftSentence: '史蒂夫游到对岸，发现那边有一片从未探索过的丛林。' },
            { char: '并', pinyin: 'bìng', meaning: '合在一起；并且', words: ['并且', '合并'], example: '他不但聪明，并且很努力。', minecraftSentence: '史蒂夫把两个箱子并排放在一起，变成了一个大箱子，能装更多东西。' },
            { char: '这', pinyin: 'zhè', meaning: '指示代词，指近处', words: ['这里', '这个'], example: '这是我的书。', minecraftSentence: '这个洞穴比之前发现的都大，里面一定藏着不少宝贝。' },
            { char: '扁', pinyin: 'biǎn', meaning: '物体宽而薄', words: ['扁平', '扁豆'], example: '这个盒子是扁的。', minecraftSentence: '地毯薄薄扁扁的，铺在地上既好看又能防止怪物生成。' },
            { char: '拿', pinyin: 'ná', meaning: '用手取', words: ['拿起', '拿走'], example: '请把书拿过来。', minecraftSentence: '史蒂夫从箱子里拿出钻石剑和盾牌，准备出门冒险。' },
            { char: '候', pinyin: 'hòu', meaning: '等待；时候', words: ['时候', '等候'], example: '什么时候出发？', minecraftSentence: '等到天亮的时候再出门，夜里外面全是怪物太危险了。' },
            { char: '更', pinyin: 'gèng', meaning: '更加', words: ['更好', '更多'], example: '明天会更好。', minecraftSentence: '附了魔的钻石剑比普通钻石剑更厉害，一剑的伤害翻了一倍。' },
            { char: '龙', pinyin: 'lóng', meaning: '传说中的神异动物', words: ['龙王', '恐龙'], example: '龙是中国的象征。', minecraftSentence: '末影龙是末地的霸主，它张开巨大的翅膀在天空中盘旋。' },
            { char: '找', pinyin: 'zhǎo', meaning: '寻找', words: ['找到', '寻找'], example: '我在找我的钥匙。', minecraftSentence: '史蒂夫在矿洞里找了半天，终于找到了一块钻石矿。' },
            { char: '故', pinyin: 'gù', meaning: '原因；过去的', words: ['故事', '故乡'], example: '奶奶讲了一个故事。', minecraftSentence: '每一次冒险都是一个精彩的故事，值得和朋友们分享。' },
            { char: '炮', pinyin: 'pào', meaning: '发射弹丸的武器', words: ['大炮', '鞭炮'], example: '过年放鞭炮。', minecraftSentence: 'TNT大炮是用红石和活塞做的，能把TNT发射到很远的地方。' },
            { char: '杉', pinyin: 'shān', meaning: '一种常绿乔木', words: ['杉树', '水杉'], example: '山上有很多杉树。', minecraftSentence: '针叶林里的云杉树又高又直，砍下来的木头适合建大房子。' },
            { char: '走', pinyin: 'zǒu', meaning: '行走；离开', words: ['走路', '走开'], example: '我们走路去学校。', minecraftSentence: '史蒂夫沿着河边一直走，走了很远才看到一座村庄。' }
        ]
    },
    {
        id: 'L4-8',
        level: 4,
        title: '第8课：进阶级',
        characters: [
            { char: '进', pinyin: 'jìn', meaning: '向前移动；进入', words: ['进去', '前进'], example: '请进来坐。', minecraftSentence: '史蒂夫鼓起勇气走进了下界堡垒，里面到处是烈焰人。' },
            { char: '乡', pinyin: 'xiāng', meaning: '农村；家乡', words: ['家乡', '乡村'], example: '我的家乡很美。', minecraftSentence: '每次冒险回来看到自己建的村庄，就像回到了家乡一样温暖。' },
            { char: '柱', pinyin: 'zhù', meaning: '直立的支撑物', words: ['柱子', '石柱'], example: '大厅里有四根柱子。', minecraftSentence: '末地里矗立着高高的黑曜石柱子，顶上放着末影水晶。' },
            { char: '农', pinyin: 'nóng', meaning: '种地的人；农业', words: ['农民', '农田'], example: '农民伯伯在种地。', minecraftSentence: '村庄里的农民村民每天都在田里忙碌，种小麦、收胡萝卜。' },
            { char: '元', pinyin: 'yuán', meaning: '开始；货币单位', words: ['元旦', '一元'], example: '元旦是新年的第一天。', minecraftSentence: '绿宝石是村庄里的货币，一颗绿宝石就能换到不少好东西。' },
            { char: '论', pinyin: 'lùn', meaning: '讨论；观点', words: ['讨论', '无论'], example: '大家在讨论这个问题。', minecraftSentence: '无论遇到什么困难，史蒂夫都不会放弃，继续往前走。' },
            { char: '士', pinyin: 'shì', meaning: '有才能的人；战士', words: ['战士', '勇士'], example: '他是一名勇敢的战士。', minecraftSentence: '史蒂夫穿上全套钻石甲，像一名真正的勇士走向末地。' },
            { char: '洋', pinyin: 'yáng', meaning: '比海更大的水域', words: ['海洋', '大洋'], example: '海洋里有很多生物。', minecraftSentence: '深海里有海洋遗迹，藏着宝藏，但也有守卫者在巡逻。' },
            { char: '船', pinyin: 'chuán', meaning: '水上交通工具', words: ['小船', '轮船'], example: '小船在河上漂着。', minecraftSentence: '用五块木板就能做一条小船，划着它在海上探险又快又方便。' },
            { char: '运', pinyin: 'yùn', meaning: '搬运；运气', words: ['运气', '运输'], example: '今天运气真好。', minecraftSentence: '用矿车在铁轨上运矿石，比一趟趟背着跑省力多了。' },
            { char: '明', pinyin: 'míng', meaning: '光亮；明白', words: ['明天', '聪明'], example: '明天我们去公园。', minecraftSentence: '荧石发出明亮的光芒，放在家门口比火把还要亮。' },
            { char: '苗', pinyin: 'miáo', meaning: '初生的植物', words: ['树苗', '禾苗'], example: '春天种下了树苗。', minecraftSentence: '史蒂夫种下一棵橡树苗，撒上骨粉，树苗瞬间长成了大树。' },
            { char: '节', pinyin: 'jié', meaning: '节日；段落', words: ['节日', '季节'], example: '春节是最热闹的节日。', minecraftSentence: '每次打败末影龙都像过节一样开心，天空中绽放出绚丽的光芒。' }
        ]
    },
    {
        id: 'L4-9',
        level: 4,
        title: '第9课：进阶级',
        characters: [
            { char: '岁', pinyin: 'suì', meaning: '年龄', words: ['岁月', '几岁'], example: '我今年七岁了。', minecraftSentence: '这座村庄看起来有好多岁了，房子的木头都已经发黑了。' },
            { char: '铜', pinyin: 'tóng', meaning: '一种金属', words: ['铜矿', '青铜'], example: '这个铜壶很古老。', minecraftSentence: '铜矿挖出来是橙色的，放久了会慢慢氧化变成绿色。' },
            { char: '秤', pinyin: 'chèng', meaning: '称重量的器具', words: ['秤杆', '天秤'], example: '用秤称一下有多重。', minecraftSentence: '村民交易就像用秤称东西一样公平，多少绿宝石换多少货物。' },
            { char: '飞', pinyin: 'fēi', meaning: '在空中移动', words: ['飞行', '飞鸟'], example: '小鸟在天上飞。', minecraftSentence: '穿上鞘翅从高处跳下，就能像鸟一样在天空中飞翔。' },
            { char: '战', pinyin: 'zhàn', meaning: '打仗；战争', words: ['战争', '挑战'], example: '勇士们赢得了战争。', minecraftSentence: '和凋灵的战斗是最艰难的挑战，需要准备大量的药水和金苹果。' },
            { char: '怕', pinyin: 'pà', meaning: '害怕', words: ['害怕', '可怕'], example: '不要害怕，有我在。', minecraftSentence: '苦力怕最怕猫，只要有猫在身边，苦力怕就不敢靠近。' },
            { char: '近', pinyin: 'jìn', meaning: '距离短', words: ['附近', '靠近'], example: '学校离我家很近。', minecraftSentence: '听到嘶嘶声越来越近，史蒂夫知道苦力怕就在附近。' },
            { char: '旺', pinyin: 'wàng', meaning: '旺盛；兴旺', words: ['旺盛', '兴旺'], example: '炉火烧得很旺。', minecraftSentence: '熔炉里的火烧得正旺，铁矿石很快就炼成了铁锭。' },
            { char: '色', pinyin: 'sè', meaning: '颜色', words: ['颜色', '红色'], example: '彩虹有七种颜色。', minecraftSentence: '用不同的花可以做出不同颜色的染料，把羊毛染成五颜六色。' },
            { char: '家', pinyin: 'jiā', meaning: '住的地方；家庭', words: ['回家', '大家'], example: '放学了，我要回家。', minecraftSentence: '不管冒险走多远，看到家门口的火把就觉得安心了。' },
            { char: '伍', pinyin: 'wǔ', meaning: '队伍；同伴', words: ['队伍', '行伍'], example: '大家排好队伍。', minecraftSentence: '一队掠夺者排着整齐的队伍向村庄进发，手里举着旗帜。' },
            { char: '枫', pinyin: 'fēng', meaning: '一种落叶乔木', words: ['枫叶', '枫树'], example: '秋天枫叶变红了。', minecraftSentence: '秋天的森林里，橡树的叶子变成了金黄色，像枫叶一样美丽。' },
            { char: '作', pinyin: 'zuò', meaning: '做；工作', words: ['工作', '作业'], example: '我在写作业。', minecraftSentence: '建造一座城堡是个大工程，史蒂夫每天都在努力工作。' }
        ]
    },
    {
        id: 'L4-10',
        level: 4,
        title: '第10课：进阶级',
        characters: [
            { char: '利', pinyin: 'lì', meaning: '锋利；有好处', words: ['锋利', '顺利'], example: '这把刀很锋利。', minecraftSentence: '附了锋利魔法的钻石剑削铁如泥，打怪又快又利索。' },
            { char: '圆', pinyin: 'yuán', meaning: '形状像球或环', words: ['圆形', '团圆'], example: '月亮圆圆的。', minecraftSentence: '月亮升上天空，圆圆的挂在方块世界的上方，照亮了大地。' },
            { char: '边', pinyin: 'biān', meaning: '旁边；边缘', words: ['旁边', '河边'], example: '河边有一棵大树。', minecraftSentence: '悬崖边上千万不能往下看，一失足就会掉进深渊。' },
            { char: '首', pinyin: 'shǒu', meaning: '头；第一', words: ['首先', '首领'], example: '首先要把手洗干净。', minecraftSentence: '首先要做的事是砍树，有了木头才能做工作台和工具。' },
            { char: '冬', pinyin: 'dōng', meaning: '一年的最后一个季节', words: ['冬天', '冬季'], example: '冬天下雪了。', minecraftSentence: '雪地生物群系永远是冬天的样子，到处白雪皑皑，河面都结了冰。' },
            { char: '担', pinyin: 'dān', meaning: '用肩挑；担心', words: ['担心', '担当'], example: '妈妈总是担心我。', minecraftSentence: '天黑了还没回家，伙伴们一定很担心史蒂夫的安全。' },
            { char: '楼', pinyin: 'lóu', meaning: '两层以上的房屋', words: ['楼房', '高楼'], example: '我家住在五楼。', minecraftSentence: '史蒂夫建了一栋三层高的楼房，一楼是仓库，二楼是卧室，三楼是瞭望台。' },
            { char: '号', pinyin: 'hào', meaning: '名称；号码', words: ['号码', '信号'], example: '你的电话号码是多少？', minecraftSentence: '红石信号灯亮了，说明有怪物踩到了门口的压力板。' },
            { char: '变', pinyin: 'biàn', meaning: '和原来不同', words: ['变化', '改变'], example: '天气变冷了。', minecraftSentence: '铜块放在外面会慢慢氧化，颜色从橙色变成了青绿色。' },
            { char: '法', pinyin: 'fǎ', meaning: '方法；法律', words: ['办法', '方法'], example: '我想到了一个好办法。', minecraftSentence: '对付末影龙有个好办法：先把末影水晶全部打掉，它就没法回血了。' },
            { char: '前', pinyin: 'qián', meaning: '正面；以前', words: ['前面', '以前'], example: '学校就在前面。', minecraftSentence: '前面就是末地传送门了，史蒂夫深吸一口气跳了进去。' },
            { char: '度', pinyin: 'dù', meaning: '程度；温度', words: ['温度', '速度'], example: '今天温度很高。', minecraftSentence: '下界的温度极高，到处是岩浆和火焰，热得让人喘不过气。' },
            { char: '采', pinyin: 'cǎi', meaning: '摘取；开采', words: ['采花', '采矿'], example: '小姑娘在采花。', minecraftSentence: '史蒂夫拿着铁镐去采矿，一口气挖了满满一背包的铁矿石。' }
        ]
    },
    // ============ 第5级 中级 ============
    {
        id: 'L5-1',
        level: 5,
        title: '第1课：中级',
        characters: [
            { char: '吹', pinyin: 'chuī', meaning: '嘴里出气', words: ['吹风', '吹灭'], example: '风吹得树叶沙沙响。', minecraftSentence: '大风吹过平原，草地上的花朵随风摇摆，像在跳舞。' },
            { char: '米', pinyin: 'mǐ', meaning: '谷物；长度单位', words: ['大米', '米饭'], example: '我们吃米饭。', minecraftSentence: '小麦收割后磨成面粉做面包，就像把大米煮成米饭一样。' },
            { char: '林', pinyin: 'lín', meaning: '成片的树木', words: ['森林', '树林'], example: '森林里有很多动物。', minecraftSentence: '白桦林里的树木又密又高，阳光从树叶缝隙中洒下来。' },
            { char: '笔', pinyin: 'bǐ', meaning: '写字画画的工具', words: ['铅笔', '毛笔'], example: '我用铅笔写字。', minecraftSentence: '史蒂夫用羽毛和墨囊做了一支笔，在书上记录冒险日志。' },
            { char: '深', pinyin: 'shēn', meaning: '从上到下距离大', words: ['深处', '深夜'], example: '这条河很深。', minecraftSentence: '矿洞越挖越深，周围越来越暗，只有火把的光在闪烁。' },
            { char: '浑', pinyin: 'hún', meaning: '浑浊；全', words: ['浑身', '浑浊'], example: '他摔了一跤，浑身是泥。', minecraftSentence: '从矿洞里爬出来，史蒂夫浑身沾满了灰尘和泥土。' },
            { char: '党', pinyin: 'dǎng', meaning: '政党；团体', words: ['党员', '同党'], example: '爷爷是一名老党员。', minecraftSentence: '掠夺者们像一伙同党，成群结队地向村庄发起进攻。' },
            { char: '沙', pinyin: 'shā', meaning: '细小的石粒', words: ['沙子', '沙漠'], example: '海边有很多沙子。', minecraftSentence: '沙漠里全是沙子，挖的时候要小心，沙子会往下塌。' },
            { char: '茫', pinyin: 'máng', meaning: '看不清楚；广大', words: ['茫茫', '迷茫'], example: '大海茫茫一片。', minecraftSentence: '站在雪原上放眼望去，白茫茫一片，分不清哪里是天哪里是地。' },
            { char: '友', pinyin: 'yǒu', meaning: '朋友', words: ['朋友', '友好'], example: '我们是好朋友。', minecraftSentence: '驯服的狼是史蒂夫最好的朋友，不管去哪儿都形影不离。' },
            { char: '肉', pinyin: 'ròu', meaning: '动物的肌肉组织', words: ['牛肉', '猪肉'], example: '红烧肉真好吃。', minecraftSentence: '烤熟的牛肉能恢复大量饥饿值，是冒险路上最好的干粮。' },
            { char: '处', pinyin: 'chù', meaning: '地方；处理', words: ['到处', '处理'], example: '到处都是花。', minecraftSentence: '丛林里到处都是藤蔓和大树，走几步就会迷路。' },
            { char: '如', pinyin: 'rú', meaning: '像；如果', words: ['如果', '如同'], example: '如果明天不下雨，我们就去公园。', minecraftSentence: '如果在矿洞里迷了路，就沿着火把的方向往回走。' }
        ]
    },
    {
        id: 'L5-2',
        level: 5,
        title: '第2课：中级',
        characters: [
            { char: '带', pinyin: 'dài', meaning: '随身拿着；带子', words: ['带上', '皮带'], example: '出门记得带钥匙。', minecraftSentence: '去下界之前一定要带够食物和药水，不然很难活着回来。' },
            { char: '笑', pinyin: 'xiào', meaning: '露出愉快的表情', words: ['笑容', '微笑'], example: '她笑得很开心。', minecraftSentence: '终于打败了末影龙，史蒂夫开心地笑了，这是最有成就感的时刻。' },
            { char: '苍', pinyin: 'cāng', meaning: '深绿色；苍老', words: ['苍翠', '苍白'], example: '山上的松树苍翠欲滴。', minecraftSentence: '远处的针叶林苍翠一片，在夕阳下显得格外壮观。' },
            { char: '包', pinyin: 'bāo', meaning: '用纸或布裹起来', words: ['书包', '包裹'], example: '我的书包是蓝色的。', minecraftSentence: '史蒂夫的背包里塞满了各种宝贝，再也装不下了。' },
            { char: '辛', pinyin: 'xīn', meaning: '辣味；辛苦', words: ['辛苦', '辛辣'], example: '爸爸工作很辛苦。', minecraftSentence: '辛辛苦苦挖了一整天的矿，终于凑够了做一套钻石甲的材料。' },
            { char: '积', pinyin: 'jī', meaning: '积字', words: ['积字卡', '积方块'], example: '我们正在学习“积”这个汉字。', minecraftSentence: '在Minecraft里，我用“积”记录这次方块冒险。' },
            { char: '蓝', pinyin: 'lán', meaning: '蓝字', words: ['蓝字卡', '蓝方块'], example: '我们正在学习“蓝”这个汉字。', minecraftSentence: '在Minecraft里，我用“蓝”记录这次方块冒险。' },
            { char: '桌', pinyin: 'zhuō', meaning: '桌字', words: ['桌字卡', '桌方块'], example: '我们正在学习“桌”这个汉字。', minecraftSentence: '在Minecraft里，我用“桌”记录这次方块冒险。' },
            { char: '川', pinyin: 'chuān', meaning: '川字', words: ['川字卡', '川方块'], example: '我们正在学习“川”这个汉字。', minecraftSentence: '在Minecraft里，我用“川”记录这次方块冒险。' },
            { char: '喜', pinyin: 'xǐ', meaning: '喜字', words: ['喜字卡', '喜方块'], example: '我们正在学习“喜”这个汉字。', minecraftSentence: '在Minecraft里，我用“喜”记录这次方块冒险。' },
            { char: '条', pinyin: 'tiáo', meaning: '条字', words: ['条字卡', '条方块'], example: '我们正在学习“条”这个汉字。', minecraftSentence: '在Minecraft里，我用“条”记录这次方块冒险。' },
            { char: '脚', pinyin: 'jiǎo', meaning: '脚字', words: ['脚字卡', '脚方块'], example: '我们正在学习“脚”这个汉字。', minecraftSentence: '在Minecraft里，我用“脚”记录这次方块冒险。' },
            { char: '铃', pinyin: 'líng', meaning: '铃字', words: ['铃字卡', '铃方块'], example: '我们正在学习“铃”这个汉字。', minecraftSentence: '在Minecraft里，我用“铃”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-3',
        level: 5,
        title: '第3课：中级',
        characters: [
            { char: '萍', pinyin: 'píng', meaning: '萍字', words: ['萍字卡', '萍方块'], example: '我们正在学习“萍”这个汉字。', minecraftSentence: '在Minecraft里，我用“萍”记录这次方块冒险。' },
            { char: '姐', pinyin: 'jiě', meaning: '姐字', words: ['姐字卡', '姐方块'], example: '我们正在学习“姐”这个汉字。', minecraftSentence: '在Minecraft里，我用“姐”记录这次方块冒险。' },
            { char: '蚁', pinyin: 'yǐ', meaning: '蚁字', words: ['蚁字卡', '蚁方块'], example: '我们正在学习“蚁”这个汉字。', minecraftSentence: '在Minecraft里，我用“蚁”记录这次方块冒险。' },
            { char: '招', pinyin: 'zhāo', meaning: '招字', words: ['招字卡', '招方块'], example: '我们正在学习“招”这个汉字。', minecraftSentence: '在Minecraft里，我用“招”记录这次方块冒险。' },
            { char: '金', pinyin: 'jīn', meaning: '金字', words: ['金字卡', '金方块'], example: '我们正在学习“金”这个汉字。', minecraftSentence: '在Minecraft里，我用“金”记录这次方块冒险。' },
            { char: '烟', pinyin: 'yān', meaning: '烟字', words: ['烟字卡', '烟方块'], example: '我们正在学习“烟”这个汉字。', minecraftSentence: '在Minecraft里，我用“烟”记录这次方块冒险。' },
            { char: '医', pinyin: 'yī', meaning: '医字', words: ['医字卡', '医方块'], example: '我们正在学习“医”这个汉字。', minecraftSentence: '在Minecraft里，我用“医”记录这次方块冒险。' },
            { char: '浮', pinyin: 'fú', meaning: '浮字', words: ['浮字卡', '浮方块'], example: '我们正在学习“浮”这个汉字。', minecraftSentence: '在Minecraft里，我用“浮”记录这次方块冒险。' },
            { char: '绿', pinyin: 'lǜ', meaning: '绿字', words: ['绿字卡', '绿方块'], example: '我们正在学习“绿”这个汉字。', minecraftSentence: '在Minecraft里，我用“绿”记录这次方块冒险。' },
            { char: '睡', pinyin: 'shuì', meaning: '睡字', words: ['睡字卡', '睡方块'], example: '我们正在学习“睡”这个汉字。', minecraftSentence: '在Minecraft里，我用“睡”记录这次方块冒险。' },
            { char: '怎', pinyin: 'zěn', meaning: '怎字', words: ['怎字卡', '怎方块'], example: '我们正在学习“怎”这个汉字。', minecraftSentence: '在Minecraft里，我用“怎”记录这次方块冒险。' },
            { char: '浪', pinyin: 'làng', meaning: '浪字', words: ['浪字卡', '浪方块'], example: '我们正在学习“浪”这个汉字。', minecraftSentence: '在Minecraft里，我用“浪”记录这次方块冒险。' },
            { char: '球', pinyin: 'qiú', meaning: '球字', words: ['球字卡', '球方块'], example: '我们正在学习“球”这个汉字。', minecraftSentence: '在Minecraft里，我用“球”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-4',
        level: 5,
        title: '第4课：中级',
        characters: [
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
            { char: '汗', pinyin: 'hàn', meaning: '汗字', words: ['汗字卡', '汗方块'], example: '我们正在学习“汗”这个汉字。', minecraftSentence: '在Minecraft里，我用“汗”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-5',
        level: 5,
        title: '第5课：中级',
        characters: [
            { char: '孤', pinyin: 'gū', meaning: '孤字', words: ['孤字卡', '孤方块'], example: '我们正在学习“孤”这个汉字。', minecraftSentence: '在Minecraft里，我用“孤”记录这次方块冒险。' },
            { char: '层', pinyin: 'céng', meaning: '层字', words: ['层字卡', '层方块'], example: '我们正在学习“层”这个汉字。', minecraftSentence: '在Minecraft里，我用“层”记录这次方块冒险。' },
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
            { char: '姓', pinyin: 'xìng', meaning: '姓字', words: ['姓字卡', '姓方块'], example: '我们正在学习“姓”这个汉字。', minecraftSentence: '在Minecraft里，我用“姓”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-6',
        level: 5,
        title: '第6课：中级',
        characters: [
            { char: '淘', pinyin: 'táo', meaning: '淘字', words: ['淘字卡', '淘方块'], example: '我们正在学习“淘”这个汉字。', minecraftSentence: '在Minecraft里，我用“淘”记录这次方块冒险。' },
            { char: '鞭', pinyin: 'biān', meaning: '鞭字', words: ['鞭字卡', '鞭方块'], example: '我们正在学习“鞭”这个汉字。', minecraftSentence: '在Minecraft里，我用“鞭”记录这次方块冒险。' },
            { char: '升', pinyin: 'shēng', meaning: '升字', words: ['升字卡', '升方块'], example: '我们正在学习“升”这个汉字。', minecraftSentence: '在Minecraft里，我用“升”记录这次方块冒险。' },
            { char: '李', pinyin: 'lǐ', meaning: '李字', words: ['李字卡', '李方块'], example: '我们正在学习“李”这个汉字。', minecraftSentence: '在Minecraft里，我用“李”记录这次方块冒险。' },
            { char: '奶', pinyin: 'nǎi', meaning: '奶字', words: ['奶字卡', '奶方块'], example: '我们正在学习“奶”这个汉字。', minecraftSentence: '在Minecraft里，我用“奶”记录这次方块冒险。' },
            { char: '狗', pinyin: 'gǒu', meaning: '狗字', words: ['狗字卡', '狗方块'], example: '我们正在学习“狗”这个汉字。', minecraftSentence: '在Minecraft里，我用“狗”记录这次方块冒险。' },
            { char: '件', pinyin: 'jiàn', meaning: '件字', words: ['件字卡', '件方块'], example: '我们正在学习“件”这个汉字。', minecraftSentence: '在Minecraft里，我用“件”记录这次方块冒险。' },
            { char: '荷', pinyin: 'hé', meaning: '荷字', words: ['荷字卡', '荷方块'], example: '我们正在学习“荷”这个汉字。', minecraftSentence: '在Minecraft里，我用“荷”记录这次方块冒险。' },
            { char: '洁', pinyin: 'jié', meaning: '洁字', words: ['洁字卡', '洁方块'], example: '我们正在学习“洁”这个汉字。', minecraftSentence: '在Minecraft里，我用“洁”记录这次方块冒险。' },
            { char: '暑', pinyin: 'shǔ', meaning: '暑字', words: ['暑字卡', '暑方块'], example: '我们正在学习“暑”这个汉字。', minecraftSentence: '在Minecraft里，我用“暑”记录这次方块冒险。' },
            { char: '数', pinyin: 'shù', meaning: '数字', words: ['数字卡', '数方块'], example: '我们正在学习“数”这个汉字。', minecraftSentence: '在Minecraft里，我用“数”记录这次方块冒险。' },
            { char: '排', pinyin: 'pái', meaning: '排字', words: ['排字卡', '排方块'], example: '我们正在学习“排”这个汉字。', minecraftSentence: '在Minecraft里，我用“排”记录这次方块冒险。' },
            { char: '绳', pinyin: 'shéng', meaning: '绳字', words: ['绳字卡', '绳方块'], example: '我们正在学习“绳”这个汉字。', minecraftSentence: '在Minecraft里，我用“绳”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-7',
        level: 5,
        title: '第7课：中级',
        characters: [
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
            { char: '参', pinyin: 'cān', meaning: '参字', words: ['参字卡', '参方块'], example: '我们正在学习“参”这个汉字。', minecraftSentence: '在Minecraft里，我用“参”记录这次方块冒险。' },
            { char: '喝', pinyin: 'hē', meaning: '喝字', words: ['喝字卡', '喝方块'], example: '我们正在学习“喝”这个汉字。', minecraftSentence: '在Minecraft里，我用“喝”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-8',
        level: 5,
        title: '第8课：中级',
        characters: [
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
            { char: '央', pinyin: 'yāng', meaning: '央字', words: ['央字卡', '央方块'], example: '我们正在学习“央”这个汉字。', minecraftSentence: '在Minecraft里，我用“央”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-9',
        level: 5,
        title: '第9课：中级',
        characters: [
            { char: '直', pinyin: 'zhí', meaning: '直字', words: ['直字卡', '直方块'], example: '我们正在学习“直”这个汉字。', minecraftSentence: '在Minecraft里，我用“直”记录这次方块冒险。' },
            { char: '孙', pinyin: 'sūn', meaning: '孙字', words: ['孙字卡', '孙方块'], example: '我们正在学习“孙”这个汉字。', minecraftSentence: '在Minecraft里，我用“孙”记录这次方块冒险。' },
            { char: '盼', pinyin: 'pàn', meaning: '盼字', words: ['盼字卡', '盼方块'], example: '我们正在学习“盼”这个汉字。', minecraftSentence: '在Minecraft里，我用“盼”记录这次方块冒险。' },
            { char: '念', pinyin: 'niàn', meaning: '念字', words: ['念字卡', '念方块'], example: '我们正在学习“念”这个汉字。', minecraftSentence: '在Minecraft里，我用“念”记录这次方块冒险。' },
            { char: '爷', pinyin: 'yé', meaning: '爷字', words: ['爷字卡', '爷方块'], example: '我们正在学习“爷”这个汉字。', minecraftSentence: '在Minecraft里，我用“爷”记录这次方块冒险。' },
            { char: '严', pinyin: 'yán', meaning: '严字', words: ['严字卡', '严方块'], example: '我们正在学习“严”这个汉字。', minecraftSentence: '在Minecraft里，我用“严”记录这次方块冒险。' },
            { char: '幸', pinyin: 'xìng', meaning: '幸字', words: ['幸字卡', '幸方块'], example: '我们正在学习“幸”这个汉字。', minecraftSentence: '在Minecraft里，我用“幸”记录这次方块冒险。' },
            { char: '形', pinyin: 'xíng', meaning: '形字', words: ['形字卡', '形方块'], example: '我们正在学习“形”这个汉字。', minecraftSentence: '在Minecraft里，我用“形”记录这次方块冒险。' },
            { char: '晚', pinyin: 'wǎn', meaning: '晚字', words: ['晚字卡', '晚方块'], example: '我们正在学习“晚”这个汉字。', minecraftSentence: '在Minecraft里，我用“晚”记录这次方块冒险。' },
            { char: '跟', pinyin: 'gēn', meaning: '跟字', words: ['跟字卡', '跟方块'], example: '我们正在学习“跟”这个汉字。', minecraftSentence: '在Minecraft里，我用“跟”记录这次方块冒险。' },
            { char: '算', pinyin: 'suàn', meaning: '算字', words: ['算字卡', '算方块'], example: '我们正在学习“算”这个汉字。', minecraftSentence: '在Minecraft里，我用“算”记录这次方块冒险。' },
            { char: '诗', pinyin: 'shī', meaning: '诗字', words: ['诗字卡', '诗方块'], example: '我们正在学习“诗”这个汉字。', minecraftSentence: '在Minecraft里，我用“诗”记录这次方块冒险。' },
            { char: '丢', pinyin: 'diū', meaning: '丢字', words: ['丢字卡', '丢方块'], example: '我们正在学习“丢”这个汉字。', minecraftSentence: '在Minecraft里，我用“丢”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L5-10',
        level: 5,
        title: '第10课：中级',
        characters: [
            { char: '忽', pinyin: 'hū', meaning: '忽字', words: ['忽字卡', '忽方块'], example: '我们正在学习“忽”这个汉字。', minecraftSentence: '在Minecraft里，我用“忽”记录这次方块冒险。' },
            { char: '情', pinyin: 'qíng', meaning: '情字', words: ['情字卡', '情方块'], example: '我们正在学习“情”这个汉字。', minecraftSentence: '在Minecraft里，我用“情”记录这次方块冒险。' },
            { char: '际', pinyin: 'jì', meaning: '际字', words: ['际字卡', '际方块'], example: '我们正在学习“际”这个汉字。', minecraftSentence: '在Minecraft里，我用“际”记录这次方块冒险。' },
            { char: '香', pinyin: 'xiāng', meaning: '香字', words: ['香字卡', '香方块'], example: '我们正在学习“香”这个汉字。', minecraftSentence: '在Minecraft里，我用“香”记录这次方块冒险。' },
            { char: '劲', pinyin: 'jìn', meaning: '劲字', words: ['劲字卡', '劲方块'], example: '我们正在学习“劲”这个汉字。', minecraftSentence: '在Minecraft里，我用“劲”记录这次方块冒险。' },
            { char: '踢', pinyin: 'tī', meaning: '踢字', words: ['踢字卡', '踢方块'], example: '我们正在学习“踢”这个汉字。', minecraftSentence: '在Minecraft里，我用“踢”记录这次方块冒险。' },
            { char: '话', pinyin: 'huà', meaning: '话字', words: ['话字卡', '话方块'], example: '我们正在学习“话”这个汉字。', minecraftSentence: '在Minecraft里，我用“话”记录这次方块冒险。' },
            { char: '尾', pinyin: 'wěi', meaning: '尾字', words: ['尾字卡', '尾方块'], example: '我们正在学习“尾”这个汉字。', minecraftSentence: '在Minecraft里，我用“尾”记录这次方块冒险。' },
            { char: '外', pinyin: 'wài', meaning: '外字', words: ['外字卡', '外方块'], example: '我们正在学习“外”这个汉字。', minecraftSentence: '在Minecraft里，我用“外”记录这次方块冒险。' },
            { char: '巨', pinyin: 'jù', meaning: '巨字', words: ['巨字卡', '巨方块'], example: '我们正在学习“巨”这个汉字。', minecraftSentence: '在Minecraft里，我用“巨”记录这次方块冒险。' },
            { char: '枝', pinyin: 'zhī', meaning: '枝字', words: ['枝字卡', '枝方块'], example: '我们正在学习“枝”这个汉字。', minecraftSentence: '在Minecraft里，我用“枝”记录这次方块冒险。' },
            { char: '霞', pinyin: 'xiá', meaning: '霞字', words: ['霞字卡', '霞方块'], example: '我们正在学习“霞”这个汉字。', minecraftSentence: '在Minecraft里，我用“霞”记录这次方块冒险。' },
            { char: '藏', pinyin: 'cáng', meaning: '藏字', words: ['藏字卡', '藏方块'], example: '我们正在学习“藏”这个汉字。', minecraftSentence: '在Minecraft里，我用“藏”记录这次方块冒险。' }
        ]
    },
    // ============ 第6级 挑战级 ============
    {
        id: 'L6-1',
        level: 6,
        title: '第1课：挑战级',
        characters: [
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
            { char: '夏', pinyin: 'xià', meaning: '夏字', words: ['夏字卡', '夏方块'], example: '我们正在学习“夏”这个汉字。', minecraftSentence: '在Minecraft里，我用“夏”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-2',
        level: 6,
        title: '第2课：挑战级',
        characters: [
            { char: '词', pinyin: 'cí', meaning: '词字', words: ['词字卡', '词方块'], example: '我们正在学习“词”这个汉字。', minecraftSentence: '在Minecraft里，我用“词”记录这次方块冒险。' },
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
            { char: '棋', pinyin: 'qí', meaning: '棋字', words: ['棋字卡', '棋方块'], example: '我们正在学习“棋”这个汉字。', minecraftSentence: '在Minecraft里，我用“棋”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-3',
        level: 6,
        title: '第3课：挑战级',
        characters: [
            { char: '场', pinyin: 'chǎng', meaning: '场字', words: ['场字卡', '场方块'], example: '我们正在学习“场”这个汉字。', minecraftSentence: '在Minecraft里，我用“场”记录这次方块冒险。' },
            { char: '常', pinyin: 'cháng', meaning: '常字', words: ['常字卡', '常方块'], example: '我们正在学习“常”这个汉字。', minecraftSentence: '在Minecraft里，我用“常”记录这次方块冒险。' },
            { char: '晨', pinyin: 'chén', meaning: '晨字', words: ['晨字卡', '晨方块'], example: '我们正在学习“晨”这个汉字。', minecraftSentence: '在Minecraft里，我用“晨”记录这次方块冒险。' },
            { char: '暖', pinyin: 'nuǎn', meaning: '暖字', words: ['暖字卡', '暖方块'], example: '我们正在学习“暖”这个汉字。', minecraftSentence: '在Minecraft里，我用“暖”记录这次方块冒险。' },
            { char: '拍', pinyin: 'pāi', meaning: '拍字', words: ['拍字卡', '拍方块'], example: '我们正在学习“拍”这个汉字。', minecraftSentence: '在Minecraft里，我用“拍”记录这次方块冒险。' },
            { char: '减', pinyin: 'jiǎn', meaning: '减字', words: ['减字卡', '减方块'], example: '我们正在学习“减”这个汉字。', minecraftSentence: '在Minecraft里，我用“减”记录这次方块冒险。' },
            { char: '热', pinyin: 'rè', meaning: '热字', words: ['热字卡', '热方块'], example: '我们正在学习“热”这个汉字。', minecraftSentence: '在Minecraft里，我用“热”记录这次方块冒险。' },
            { char: '呼', pinyin: 'hū', meaning: '呼字', words: ['呼字卡', '呼方块'], example: '我们正在学习“呼”这个汉字。', minecraftSentence: '在Minecraft里，我用“呼”记录这次方块冒险。' },
            { char: '流', pinyin: 'liú', meaning: '流字', words: ['流字卡', '流方块'], example: '我们正在学习“流”这个汉字。', minecraftSentence: '在Minecraft里，我用“流”记录这次方块冒险。' },
            { char: '望', pinyin: 'wàng', meaning: '望字', words: ['望字卡', '望方块'], example: '我们正在学习“望”这个汉字。', minecraftSentence: '在Minecraft里，我用“望”记录这次方块冒险。' },
            { char: '煮', pinyin: 'zhǔ', meaning: '煮字', words: ['煮字卡', '煮方块'], example: '我们正在学习“煮”这个汉字。', minecraftSentence: '在Minecraft里，我用“煮”记录这次方块冒险。' },
            { char: '枯', pinyin: 'kū', meaning: '枯字', words: ['枯字卡', '枯方块'], example: '我们正在学习“枯”这个汉字。', minecraftSentence: '在Minecraft里，我用“枯”记录这次方块冒险。' },
            { char: '霜', pinyin: 'shuāng', meaning: '霜字', words: ['霜字卡', '霜方块'], example: '我们正在学习“霜”这个汉字。', minecraftSentence: '在Minecraft里，我用“霜”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-4',
        level: 6,
        title: '第4课：挑战级',
        characters: [
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
            { char: '相', pinyin: 'xiāng', meaning: '相字', words: ['相字卡', '相方块'], example: '我们正在学习“相”这个汉字。', minecraftSentence: '在Minecraft里，我用“相”记录这次方块冒险。' },
            { char: '谢', pinyin: 'xiè', meaning: '谢字', words: ['谢字卡', '谢方块'], example: '我们正在学习“谢”这个汉字。', minecraftSentence: '在Minecraft里，我用“谢”记录这次方块冒险。' },
            { char: '桃', pinyin: 'táo', meaning: '桃字', words: ['桃字卡', '桃方块'], example: '我们正在学习“桃”这个汉字。', minecraftSentence: '在Minecraft里，我用“桃”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-5',
        level: 6,
        title: '第5课：挑战级',
        characters: [
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
            { char: '寒', pinyin: 'hán', meaning: '寒字', words: ['寒字卡', '寒方块'], example: '我们正在学习“寒”这个汉字。', minecraftSentence: '在Minecraft里，我用“寒”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-6',
        level: 6,
        title: '第6课：挑战级',
        characters: [
            { char: '练', pinyin: 'liàn', meaning: '练字', words: ['练字卡', '练方块'], example: '我们正在学习“练”这个汉字。', minecraftSentence: '在Minecraft里，我用“练”记录这次方块冒险。' },
            { char: '次', pinyin: 'cì', meaning: '次字', words: ['次字卡', '次方块'], example: '我们正在学习“次”这个汉字。', minecraftSentence: '在Minecraft里，我用“次”记录这次方块冒险。' },
            { char: '保', pinyin: 'bǎo', meaning: '保字', words: ['保字卡', '保方块'], example: '我们正在学习“保”这个汉字。', minecraftSentence: '在Minecraft里，我用“保”记录这次方块冒险。' },
            { char: '涂', pinyin: 'tú', meaning: '涂字', words: ['涂字卡', '涂方块'], example: '我们正在学习“涂”这个汉字。', minecraftSentence: '在Minecraft里，我用“涂”记录这次方块冒险。' },
            { char: '市', pinyin: 'shì', meaning: '市字', words: ['市字卡', '市方块'], example: '我们正在学习“市”这个汉字。', minecraftSentence: '在Minecraft里，我用“市”记录这次方块冒险。' },
            { char: '炉', pinyin: 'lú', meaning: '炉字', words: ['炉字卡', '炉方块'], example: '我们正在学习“炉”这个汉字。', minecraftSentence: '在Minecraft里，我用“炉”记录这次方块冒险。' },
            { char: '非', pinyin: 'fēi', meaning: '非字', words: ['非字卡', '非方块'], example: '我们正在学习“非”这个汉字。', minecraftSentence: '在Minecraft里，我用“非”记录这次方块冒险。' },
            { char: '起', pinyin: 'qǐ', meaning: '起字', words: ['起字卡', '起方块'], example: '我们正在学习“起”这个汉字。', minecraftSentence: '在Minecraft里，我用“起”记录这次方块冒险。' },
            { char: '圈', pinyin: 'quān', meaning: '圈字', words: ['圈字卡', '圈方块'], example: '我们正在学习“圈”这个汉字。', minecraftSentence: '在Minecraft里，我用“圈”记录这次方块冒险。' },
            { char: '部', pinyin: 'bù', meaning: '部字', words: ['部字卡', '部方块'], example: '我们正在学习“部”这个汉字。', minecraftSentence: '在Minecraft里，我用“部”记录这次方块冒险。' },
            { char: '猜', pinyin: 'cāi', meaning: '猜字', words: ['猜字卡', '猜方块'], example: '我们正在学习“猜”这个汉字。', minecraftSentence: '在Minecraft里，我用“猜”记录这次方块冒险。' },
            { char: '抓', pinyin: 'zhuā', meaning: '抓字', words: ['抓字卡', '抓方块'], example: '我们正在学习“抓”这个汉字。', minecraftSentence: '在Minecraft里，我用“抓”记录这次方块冒险。' },
            { char: '成', pinyin: 'chéng', meaning: '成字', words: ['成字卡', '成方块'], example: '我们正在学习“成”这个汉字。', minecraftSentence: '在Minecraft里，我用“成”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-7',
        level: 6,
        title: '第7课：挑战级',
        characters: [
            { char: '吴', pinyin: 'wú', meaning: '吴字', words: ['吴字卡', '吴方块'], example: '我们正在学习“吴”这个汉字。', minecraftSentence: '在Minecraft里，我用“吴”记录这次方块冒险。' },
            { char: '总', pinyin: 'zǒng', meaning: '总字', words: ['总字卡', '总方块'], example: '我们正在学习“总”这个汉字。', minecraftSentence: '在Minecraft里，我用“总”记录这次方块冒险。' },
            { char: '院', pinyin: 'yuàn', meaning: '院字', words: ['院字卡', '院方块'], example: '我们正在学习“院”这个汉字。', minecraftSentence: '在Minecraft里，我用“院”记录这次方块冒险。' },
            { char: '森', pinyin: 'sēn', meaning: '森字', words: ['森字卡', '森方块'], example: '我们正在学习“森”这个汉字。', minecraftSentence: '在Minecraft里，我用“森”记录这次方块冒险。' },
            { char: '泉', pinyin: 'quán', meaning: '泉字', words: ['泉字卡', '泉方块'], example: '我们正在学习“泉”这个汉字。', minecraftSentence: '在Minecraft里，我用“泉”记录这次方块冒险。' },
            { char: '感', pinyin: 'gǎn', meaning: '感字', words: ['感字卡', '感方块'], example: '我们正在学习“感”这个汉字。', minecraftSentence: '在Minecraft里，我用“感”记录这次方块冒险。' },
            { char: '勇', pinyin: 'yǒng', meaning: '勇字', words: ['勇字卡', '勇方块'], example: '我们正在学习“勇”这个汉字。', minecraftSentence: '在Minecraft里，我用“勇”记录这次方块冒险。' },
            { char: '班', pinyin: 'bān', meaning: '班字', words: ['班字卡', '班方块'], example: '我们正在学习“班”这个汉字。', minecraftSentence: '在Minecraft里，我用“班”记录这次方块冒险。' },
            { char: '之', pinyin: 'zhī', meaning: '之字', words: ['之字卡', '之方块'], example: '我们正在学习“之”这个汉字。', minecraftSentence: '在Minecraft里，我用“之”记录这次方块冒险。' },
            { char: '悄', pinyin: 'qiāo', meaning: '悄字', words: ['悄字卡', '悄方块'], example: '我们正在学习“悄”这个汉字。', minecraftSentence: '在Minecraft里，我用“悄”记录这次方块冒险。' },
            { char: '许', pinyin: 'xǔ', meaning: '许字', words: ['许字卡', '许方块'], example: '我们正在学习“许”这个汉字。', minecraftSentence: '在Minecraft里，我用“许”记录这次方块冒险。' },
            { char: '急', pinyin: 'jí', meaning: '急字', words: ['急字卡', '急方块'], example: '我们正在学习“急”这个汉字。', minecraftSentence: '在Minecraft里，我用“急”记录这次方块冒险。' },
            { char: '张', pinyin: 'zhāng', meaning: '张字', words: ['张字卡', '张方块'], example: '我们正在学习“张”这个汉字。', minecraftSentence: '在Minecraft里，我用“张”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-8',
        level: 6,
        title: '第8课：挑战级',
        characters: [
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
        id: 'L6-9',
        level: 6,
        title: '第9课：挑战级',
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
            { char: '活', pinyin: 'huó', meaning: '活字', words: ['活字卡', '活方块'], example: '我们正在学习“活”这个汉字。', minecraftSentence: '在Minecraft里，我用“活”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L6-10',
        level: 6,
        title: '第10课：挑战级',
        characters: [
            { char: '答', pinyin: 'dá', meaning: '答字', words: ['答字卡', '答方块'], example: '我们正在学习“答”这个汉字。', minecraftSentence: '在Minecraft里，我用“答”记录这次方块冒险。' },
            { char: '尽', pinyin: 'jǐn', meaning: '尽字', words: ['尽字卡', '尽方块'], example: '我们正在学习“尽”这个汉字。', minecraftSentence: '在Minecraft里，我用“尽”记录这次方块冒险。' },
            { char: '独', pinyin: 'dú', meaning: '独字', words: ['独字卡', '独方块'], example: '我们正在学习“独”这个汉字。', minecraftSentence: '在Minecraft里，我用“独”记录这次方块冒险。' },
            { char: '扎', pinyin: 'zhā', meaning: '扎字', words: ['扎字卡', '扎方块'], example: '我们正在学习“扎”这个汉字。', minecraftSentence: '在Minecraft里，我用“扎”记录这次方块冒险。' },
            { char: '专', pinyin: 'zhuān', meaning: '专字', words: ['专字卡', '专方块'], example: '我们正在学习“专”这个汉字。', minecraftSentence: '在Minecraft里，我用“专”记录这次方块冒险。' },
            { char: '阵', pinyin: 'zhèn', meaning: '阵字', words: ['阵字卡', '阵方块'], example: '我们正在学习“阵”这个汉字。', minecraftSentence: '在Minecraft里，我用“阵”记录这次方块冒险。' },
            { char: '旦', pinyin: 'dàn', meaning: '旦字', words: ['旦字卡', '旦方块'], example: '我们正在学习“旦”这个汉字。', minecraftSentence: '在Minecraft里，我用“旦”记录这次方块冒险。' },
            { char: '袍', pinyin: 'páo', meaning: '袍字', words: ['袍字卡', '袍方块'], example: '我们正在学习“袍”这个汉字。', minecraftSentence: '在Minecraft里，我用“袍”记录这次方块冒险。' },
            { char: '戏', pinyin: 'xì', meaning: '戏字', words: ['戏字卡', '戏方块'], example: '我们正在学习“戏”这个汉字。', minecraftSentence: '在Minecraft里，我用“戏”记录这次方块冒险。' },
            { char: '诉', pinyin: 'sù', meaning: '诉字', words: ['诉字卡', '诉方块'], example: '我们正在学习“诉”这个汉字。', minecraftSentence: '在Minecraft里，我用“诉”记录这次方块冒险。' },
            { char: '将', pinyin: 'jiāng', meaning: '将字', words: ['将字卡', '将方块'], example: '我们正在学习“将”这个汉字。', minecraftSentence: '在Minecraft里，我用“将”记录这次方块冒险。' },
            { char: '南', pinyin: 'nán', meaning: '南字', words: ['南字卡', '南方块'], example: '我们正在学习“南”这个汉字。', minecraftSentence: '在Minecraft里，我用“南”记录这次方块冒险。' },
            { char: '初', pinyin: 'chū', meaning: '初字', words: ['初字卡', '初方块'], example: '我们正在学习“初”这个汉字。', minecraftSentence: '在Minecraft里，我用“初”记录这次方块冒险。' }
        ]
    },
    // ============ 第7级 精通级 ============
    {
        id: 'L7-1',
        level: 7,
        title: '第1课：精通级',
        characters: [
            { char: '喊', pinyin: 'hǎn', meaning: '喊字', words: ['喊字卡', '喊方块'], example: '我们正在学习“喊”这个汉字。', minecraftSentence: '在Minecraft里，我用“喊”记录这次方块冒险。' },
            { char: '昨', pinyin: 'zuó', meaning: '昨字', words: ['昨字卡', '昨方块'], example: '我们正在学习“昨”这个汉字。', minecraftSentence: '在Minecraft里，我用“昨”记录这次方块冒险。' },
            { char: '攻', pinyin: 'gōng', meaning: '攻字', words: ['攻字卡', '攻方块'], example: '我们正在学习“攻”这个汉字。', minecraftSentence: '在Minecraft里，我用“攻”记录这次方块冒险。' },
            { char: '宝', pinyin: 'bǎo', meaning: '宝字', words: ['宝字卡', '宝方块'], example: '我们正在学习“宝”这个汉字。', minecraftSentence: '在Minecraft里，我用“宝”记录这次方块冒险。' },
            { char: '柳', pinyin: 'liǔ', meaning: '柳字', words: ['柳字卡', '柳方块'], example: '我们正在学习“柳”这个汉字。', minecraftSentence: '在Minecraft里，我用“柳”记录这次方块冒险。' },
            { char: '迹', pinyin: 'jì', meaning: '迹字', words: ['迹字卡', '迹方块'], example: '我们正在学习“迹”这个汉字。', minecraftSentence: '在Minecraft里，我用“迹”记录这次方块冒险。' },
            { char: '坡', pinyin: 'pō', meaning: '坡字', words: ['坡字卡', '坡方块'], example: '我们正在学习“坡”这个汉字。', minecraftSentence: '在Minecraft里，我用“坡”记录这次方块冒险。' },
            { char: '秧', pinyin: 'yāng', meaning: '秧字', words: ['秧字卡', '秧方块'], example: '我们正在学习“秧”这个汉字。', minecraftSentence: '在Minecraft里，我用“秧”记录这次方块冒险。' },
            { char: '甜', pinyin: 'tián', meaning: '甜字', words: ['甜字卡', '甜方块'], example: '我们正在学习“甜”这个汉字。', minecraftSentence: '在Minecraft里，我用“甜”记录这次方块冒险。' },
            { char: '枣', pinyin: 'zǎo', meaning: '枣字', words: ['枣字卡', '枣方块'], example: '我们正在学习“枣”这个汉字。', minecraftSentence: '在Minecraft里，我用“枣”记录这次方块冒险。' },
            { char: '飘', pinyin: 'piāo', meaning: '飘字', words: ['飘字卡', '飘方块'], example: '我们正在学习“飘”这个汉字。', minecraftSentence: '在Minecraft里，我用“飘”记录这次方块冒险。' },
            { char: '惜', pinyin: 'xī', meaning: '惜字', words: ['惜字卡', '惜方块'], example: '我们正在学习“惜”这个汉字。', minecraftSentence: '在Minecraft里，我用“惜”记录这次方块冒险。' },
            { char: '护', pinyin: 'hù', meaning: '护字', words: ['护字卡', '护方块'], example: '我们正在学习“护”这个汉字。', minecraftSentence: '在Minecraft里，我用“护”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L7-2',
        level: 7,
        title: '第2课：精通级',
        characters: [
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
            { char: '众', pinyin: 'zhòng', meaning: '众字', words: ['众字卡', '众方块'], example: '我们正在学习“众”这个汉字。', minecraftSentence: '在Minecraft里，我用“众”记录这次方块冒险。' }
        ]
    },
    {
        id: 'L7-3',
        level: 7,
        title: '第3课：精通级',
        characters: [
            { char: '闪', pinyin: 'shǎn', meaning: '闪字', words: ['闪字卡', '闪方块'], example: '我们正在学习“闪”这个汉字。', minecraftSentence: '在Minecraft里，我用“闪”记录这次方块冒险。' },
            { char: '种', pinyin: 'zhǒng', meaning: '种字', words: ['种字卡', '种方块'], example: '我们正在学习“种”这个汉字。', minecraftSentence: '在Minecraft里，我用“种”记录这次方块冒险。' },
            { char: '举', pinyin: 'jǔ', meaning: '举字', words: ['举字卡', '举方块'], example: '我们正在学习“举”这个汉字。', minecraftSentence: '在Minecraft里，我用“举”记录这次方块冒险。' },
            { char: '得', pinyin: 'dé', meaning: '得字', words: ['得字卡', '得方块'], example: '我们正在学习“得”这个汉字。', minecraftSentence: '在Minecraft里，我用“得”记录这次方块冒险。' },
            { char: '捡', pinyin: 'jiǎn', meaning: '捡起', words: ['捡起', '捡拾'], example: '捡起地上的纸。', minecraftSentence: '捡起掉落的物品。', story: '捡字左边是"扌"表示手，右边是脸的一部分。弯下腰因为脸上看见了，用手把地上的东西捡起来。' },
            { char: '挖', pinyin: 'wā', meaning: '挖掘', words: ['挖洞', '挖土'], example: '用铲子挖土。', minecraftSentence: '往下挖可以找到钻石。', story: '挖字左边是"扌"表示手，右边是"空"的下半部分。用手或工具把土掏空，就是挖。' },
            { char: '砍', pinyin: 'kǎn', meaning: '砍伐', words: ['砍树', '砍柴'], example: '砍树做柴火。', minecraftSentence: '用斧头砍树更快。', story: '砍字左边是"石"表示石头，右边是"欠"。古代人们用石头做的工具用力劈开木头。' },
            { char: '建', pinyin: 'jiàn', meaning: '建造', words: ['建造', '建设'], example: '建造一座房子。', minecraftSentence: '我建造了一座城堡。', story: '建字像一只手拿着笔在画图纸，外面是"廴"表示廷伸。建造高楼大厦需要先画图。' },
            { char: '修', pinyin: 'xiū', meaning: '修理', words: ['修理', '修补'], example: '修理坏了的椅子。', minecraftSentence: '用铁砧可以修理工具。', story: '修字左边像一个人拿着工具把坏得东西弄好。东西坏了不要扔，修一修还能用。' },
            { char: '补', pinyin: 'bǔ', meaning: '补充', words: ['补充', '修补'], example: '补充水分。', minecraftSentence: '补充饥饿值要吃东西。', story: '补字左边是"衤"表示衣服，右边是"卜"。衣服破了一个洞，用布把它补好。' },
            { char: '破', pinyin: 'pò', meaning: '破坏', words: ['破坏', '打破'], example: '玻璃破了。', minecraftSentence: '用镐可以破坏石头。', story: '破字左边是"石"表示石头，右边是"皮"。石头把皮磨坏了，破就是东西坏了或碎了。' },
            { char: '摔', pinyin: 'shuāi', meaning: '摔倒', words: ['摔倒', '摔跤'], example: '小心别摔倒。', minecraftSentence: '从高处摔下会受伤。', story: '摔字左边是"扌"表示手，右边是率领的率。走路不小心滑倒了，或者用手把东西用力扔下。' },
            { char: '醒', pinyin: 'xǐng', meaning: '醒来', words: ['醒来', '清醒'], example: '早上醒来了。', minecraftSentence: '天亮了就醒来继续冒险。', story: '醒字左边是"酉"表示酒，右边是"星"。酒醉过去后清醒了，或者早上睁开眼不再睡觉。' }
        ]
    },
    {
        id: 'L7-4',
        level: 7,
        title: '第4课：精通级',
        characters: [
            { char: '脱', pinyin: 'tuō', meaning: '脱掉', words: ['脱掉', '脱下'], example: '脱掉外套。', minecraftSentence: '脱下盔甲放进箱子。', story: '脱字左边是"月"表示身体，右边是"兑"表示离开。把衣服从身上取下来，或者皮从肉上掉下来。' },
            { char: '恨', pinyin: 'hèn', meaning: '讨厌', words: ['讨厌', '恨恶'], example: '不要恨别人。', minecraftSentence: '我恨苦力怕总是偷袭。', story: '恨字左边是"忄"表示心情，右边是"艮"表示硬。心里像有硬块一样不舒服，非常讨厌不喜欢。' },
            { char: '懂', pinyin: 'dǒng', meaning: '明白', words: ['懂得', '听懂'], example: '我听懂了。', minecraftSentence: '终于懂得红石电路了。', story: '懂字左边是"忄"表示心情，右边是"董"表示草深。原本像草一样乱，现在心里理清楚了，明白了。' },
            { char: '旧', pinyin: 'jiù', meaning: '旧的', words: ['旧书', '陈旧'], example: '这本书很旧了。', minecraftSentence: '旧工具可以修理。', story: '旧字左边是"l"像棍子，右边是"日"。经过了很多日子的东西，变得不新了，就是旧。' },
            { char: '丑', pinyin: 'chǒu', meaning: '丑陋', words: ['丑陋', '丑八怪'], example: '小鸭子变成了天鹅。', minecraftSentence: '僵尸长得很丑。', story: '丑字像一只手在抓鬼的样子。样子难看，不漂亮，让人看了不喜欢。' },
            { char: '臭', pinyin: 'chòu', meaning: '臭味', words: ['臭味', '臭气'], example: '垃圾很臭。', minecraftSentence: '僵尸身上有臭味。', story: '臭字上面是"自"（鼻子），下面是"犬"（狗）。狗鼻子很灵，能闻到各种气味，现在专指难闻的味道。' },
            { char: '辣', pinyin: 'là', meaning: '辣的', words: ['辣椒', '火辣'], example: '辣椒很辣。', minecraftSentence: '岩浆像辣椒一样火辣。', story: '辣字左边是"辛"表示辛苦，右边是"束"。吃了辣椒嘴巴像火烧一样，刺激的感觉。' },
            { char: '酸', pinyin: 'suān', meaning: '酸的', words: ['酸味', '心酸'], example: '柠檬很酸。', minecraftSentence: '史莱姆看起来酸酸的。', story: '酸字左边是"酉"表示酒，右边是"夋"。酒放久了变质的味道，或者吃柠檬时酸得眯眼睛。' },
            { char: '硬', pinyin: 'yìng', meaning: '坚硬', words: ['坚硬', '硬币'], example: '石头很硬。', minecraftSentence: '黑曜石是最硬的方块。', story: '硬字左边是"石"表示石头，右边是"更"。像石头一样坚固，不容易改变形状，敲起来邦邦响。' },
            { char: '软', pinyin: 'ruǎn', meaning: '柔软', words: ['柔软', '软糖'], example: '棉花很软。', minecraftSentence: '羊毛是软的。', story: '软字左边是" 车"，右边是"欠"。软绵绵的，像棉花、羊毛一样容易变形，摸起来舒服。' },
            { char: '湿', pinyin: 'shī', meaning: '潮湿', words: ['潮湿', '湿润'], example: '下雨天很湿。', minecraftSentence: '沼泽地很湿润。', story: '湿字左边是"氵"表示水，右边是"显"。东西上有水，或者被水浸泡过，摸起来湿漉漉的。' },
            { char: '重', pinyin: 'zhòng', meaning: '重的', words: ['沉重', '重要'], example: '这个箱子很重。', minecraftSentence: '金块比铁块重。', story: '重字像一个人背着很沉的包裹。分量很大，很难拿起来，像大石头一样。' },
            { char: '浅', pinyin: 'qiǎn', meaning: '浅的', words: ['浅色', '浅水'], example: '这里水很浅。', minecraftSentence: '浅水区有很多鱼。', story: '浅字左边是"氵"表示水，右边是"戋"表示少。水面到底部距离很近，一眼能看到底。' }
        ]
    },
    {
        id: 'L7-5',
        level: 7,
        title: '第5课：精通级',
        characters: [
            { char: '窄', pinyin: 'zhǎi', meaning: '窄的', words: ['狭窄', '窄小'], example: '这条巷子很窄。', minecraftSentence: '矿洞的通道很窄。', story: '窄字上面是"穴"表示洞，下面是"乍"。洞口很小，横向距离小，挤不过去。' },
            { char: '暗', pinyin: 'àn', meaning: '黑暗', words: ['黑暗', '暗处'], example: '洞里很暗。', minecraftSentence: '暗处会刷新怪物。', story: '暗字左边是"日"表示太阳，右边是"音"。太阳下山了，或者被挡住了，周围黑乎乎的。' },
            { char: '脏', pinyin: 'zāng', meaning: '脏的', words: ['脏乱', '肮脏'], example: '手很脏。', minecraftSentence: '泥土把衣服弄脏了。', story: '脏字左边是"月"（肉），右边是"庄"。身上沾了泥土灰尘，不干净。' },
            { char: '净', pinyin: 'jìng', meaning: '干净', words: ['干净', '洁净'], example: '房间很干净。', minecraftSentence: '把房间打扫干净。', story: '净字左边是"冫"（冰），右边是"争"。像冰一样透明纯洁，没有灰尘杂质。' },
            { char: '周', pinyin: 'zhōu', meaning: '星期', words: ['周末', '一周'], example: '这周有考试。', minecraftSentence: '用一周时间建造城堡。', story: '周字里面是"土"和"口"，外面包围着。周是一圈的意思，一周有七天，是一个循环。' },
            { char: '刻', pinyin: 'kè', meaning: '时刻', words: ['时刻', '立刻'], example: '时刻准备着。', minecraftSentence: '立刻躲避苦力怕！', story: '刻字左边是"亥"，右边是"刂"表示刀。古人在竹子上用刀刻痕迹来记录时间。' },
            { char: '秒', pinyin: 'miǎo', meaning: '秒', words: ['秒钟', '分秒'], example: '只需要几秒。', minecraftSentence: '苦力怕爆炸只需几秒。', story: '秒字左边是"禾"表示庄稼，右边是"少"。秒是时间的最小单位，像禾苗的细毛一样微小。' },
            { char: '终', pinyin: 'zhōng', meaning: '结束', words: ['终于', '最终'], example: '终于完成了。', minecraftSentence: '终于打败了末影龙。', story: '终字左边是"纟"表示丝线，右边是"冬"。像一卷丝线用完了，或者冬天是一年的结束。' },
            { char: '侧', pinyin: 'cè', meaning: '侧面', words: ['侧面', '两侧'], example: '从侧面看。', minecraftSentence: '从侧面攻击更安全。', story: '侧字左边是"亻"表示人，右边是"则"。侧是旁边的一面，不是正面。' },
            { char: '堆', pinyin: 'duī', meaning: '堆（量词）', words: ['一堆', '堆积'], example: '一堆沙子。', minecraftSentence: '收集一堆矿石。', story: '堆字左边是"土"，右边是"隹"（小鸟）。像土聚集成小山一样，很多东西叠在一起。' },
            { char: '颗', pinyin: 'kē', meaning: '颗（量词）', words: ['一颗', '颗粒'], example: '一颗星星。', minecraftSentence: '得到一颗末影珍珠。', story: '颗字左边是"果"，右边是"页"。用来数圆圆小小的东西，如一颗珠子、一颗豆子。' },
            { char: '根', pinyin: 'gēn', meaning: '根（量词）', words: ['一根', '根本'], example: '一根棍子。', minecraftSentence: '两根木棍做成木剑。', story: '根字左边是"木"，右边是"艮"。树木在底下的部分，用来数细长的东西，如一根绳子。' },
            { char: '偶', pinyin: 'ǒu', meaning: '偶尔', words: ['偶尔', '偶然'], example: '我偶尔看电视。', minecraftSentence: '偶尔能找到钻石。', story: '偶字左边是"亻"，右边是"禺"。有时候两个人在一起，或者碰巧发生的事情。' }
        ]
    },
    {
        id: 'L7-6',
        level: 7,
        title: '第6课：精通级',
        characters: [
            { char: '曾', pinyin: 'céng', meaning: '曾经', words: ['曾经', '曾经'], example: '我曾经去过北京。', minecraftSentence: '我曾经建过一座城堡。', story: '曾字上面像"八"，中间是"田"，下面是"日"。经过了田间的日子，表示过去发生过。' },
            { char: '末', pinyin: 'mò', meaning: '末尾', words: ['末尾', '周末'], example: '在末尾签名。', minecraftSentence: '末地是游戏的最后阶段。', story: '末字是"木"字上面加一长横。表示树梢，树的顶端或最后部分，比如周末。' },
            { char: '各', pinyin: 'gè', meaning: '各种', words: ['各种', '各自'], example: '各种颜色。', minecraftSentence: '收集各种矿石。', story: '各字上面是"夂"（脚），下面是"口"。每个人走不同的路，说不同的话，表示各个不同。' },
            { char: '较', pinyin: 'jiào', meaning: '较为', words: ['比较', '较少'], example: '比较好的方法。', minecraftSentence: '这个洞穴较为安全。', story: '较字左边是"车"，右边是"交"。两辆车头碰头比较谁更结实，表示对比。' },
            { char: '同', pinyin: 'tóng', meaning: '相同', words: ['相同', '同学'], example: '我们同岁。', minecraftSentence: '这两块矿石是同一种。', story: '同字外框是"冂"，里面是"一口"。大家聚在一起说一样的话，表示一样。' },
            { char: '异', pinyin: 'yì', meaning: '不同', words: ['不同', '差异'], example: '大家意见不同。', minecraftSentence: '不同的生物群落。', story: '异字上面是"巳"，下面是"廾"。像一个人戴着奇怪的面具，表示特别，不一样。' },
            { char: '般', pinyin: 'bān', meaning: '一般', words: ['一般', '般配'], example: '一般来说。', minecraftSentence: '他建造得像专家一般。', story: '般字左边是"舟"，右边是"殳"。在船上用竹篙划船，引申为像...一样。' },
            { char: '守', pinyin: 'shǒu', meaning: '防守', words: ['守卫', '看守'], example: '守在门口。', minecraftSentence: '铁傀儡守卫村庄。', story: '守字上面是"宀"表示房子，下面是"寸"表示法度。遵守规矩，或者在房子里看守保护。' },
            { char: '退', pinyin: 'tuì', meaning: '后退', words: ['退休', '退步'], example: '向后退。', minecraftSentence: '遇到苦力怕要后退。', story: '退字走之底"辶"加"艮"（回头看）。这路不通，回头向后走，就是退。' },
            { char: '负', pinyin: 'fù', meaning: '失败', words: ['负责', '胜负'], example: '不要怕输。', minecraftSentence: '如果你死了就负了。', story: '负字上面是"刀"？下面是"贝"。背着重重的贝壳，或者欠了钱，表示输了或背负重任。' },
            { char: '赢', pinyin: 'yíng', meaning: '输赢', words: ['赢了', '输赢'], example: '我们赢了。', minecraftSentence: '赢得PVP战斗。', story: '赢字由"亡"、"口"、"月"、"贝"、"凡"组成。要赢需要危机感、口才、时间、金钱和平常心。' },
            { char: '输', pinyin: 'shū', meaning: '输掉', words: ['输赢', '输入'], example: '不要输掉比赛。', minecraftSentence: '在聊天栏输入指令。', story: '输字左边是"车"，右边是"俞"。车子装的好东西被运走了，表示输掉。也可以表示运输、输入。' },
            { char: '互', pinyin: 'hù', meaning: '互相', words: ['互相', '互助'], example: '互相帮助。', minecraftSentence: '和朋友互相交换物品。', story: '互字像两只手互相握在一起。你帮我，我帮你，就是互相。' }
        ]
    },
    {
        id: 'L7-7',
        level: 7,
        title: '第7课：精通级',
        characters: [
            { char: '固', pinyin: 'gù', meaning: '固定', words: ['固体', '固定'], example: '这是固体。', minecraftSentence: '把方块固定在墙上。', story: '固字外面是"口"（围墙），里面是"古"（坚硬）。围得紧紧的，非常坚固，不变。' },
            { char: '液', pinyin: 'yè', meaning: '液体', words: ['液体', '血液'], example: '水是液体。', minecraftSentence: '岩浆是一种危险的液体。', story: '液字左边是"氵"（水），右边是"夜"。像水一样能流动的物质，比如血液、汁液。' },
            { char: '燃', pinyin: 'rán', meaning: '燃烧', words: ['燃烧', '燃料'], example: '火在燃烧。', minecraftSentence: '煤炭是很好的燃料。', story: '燃字左边是"火"，右边是"然"。然本身就是烧烤的意思，加个火字更强调燃烧。' },
            { char: '爆', pinyin: 'bào', meaning: '爆炸', words: ['爆炸', '爆发'], example: '气球爆炸了。', minecraftSentence: 'TNT会发生爆炸。', story: '爆字左边是"火"，右边是"暴"（猛烈）。火猛烈地炸开了，发出巨大的声音。' },
            { char: '炸', pinyin: 'zhà', meaning: '炸弹', words: ['炸药', '炸鸡'], example: '小心炸药。', minecraftSentence: '苦力怕会把你炸飞。', story: '炸字左边是"火"，右边是"乍"（突然）。火突然烧起来，发出爆炸声。' },
            { char: '熔', pinyin: 'róng', meaning: '熔化', words: ['熔化', '熔炉'], example: '铁熔化了。', minecraftSentence: '用熔炉烧制金锭。', story: '熔字左边是"火"，右边是"容"。火把金属烧得像水一样在容器里流动，就是熔化。' },
            { char: '凝', pinyin: 'níng', meaning: '凝固', words: ['凝固', '凝聚'], example: '水凝固成冰。', minecraftSentence: '岩浆遇到水会凝固成黑曜石。', story: '凝字左边是"冫"（冰），右边是"疑"。水像犹豫不决停住不动了，结冰了，凝固了。' },
            { char: '蒸', pinyin: 'zhēng', meaning: '蒸发', words: ['蒸汽', '蒸发'], example: '水蒸发了。', minecraftSentence: '水在下界会瞬间蒸发。', story: '蒸字上面是"艹"，中间是"水"，下面是"灬"（火）。用火烧水，热气上升，像草一样冒出来。' },
            { char: '质', pinyin: 'zhì', meaning: '质量', words: ['质量', '物质'], example: '这个质量很好。', minecraftSentence: '建造高质量的房子。', story: '质字下面是"贝"（钱）。东西的根本性质，或者价值，比如质量。' },
            { char: '量', pinyin: 'liàng', meaning: '数量', words: ['数量', '力量'], example: '数量很多。', minecraftSentence: '收集大量的木头。', story: '量字上面是"曰"（说），下部像"重"。用工具测量东西的轻重多少，就是量。' },
            { char: '态', pinyin: 'tài', meaning: '状态', words: ['态度', '状态'], example: '状态很好。', minecraftSentence: '查看你的饥饿状态。', story: '态字上面是"太"，下面是"心"。心里最真实的想法表现出来，就是态度、神态。' },
            { char: '索', pinyin: 'suǒ', meaning: '探索', words: ['线索', '索取'], example: '寻找线索。', minecraftSentence: '去探索未知的世界。', story: '索字上部像绳索。本来指粗绳子，引申为搜寻、寻找线索。' },
            { char: '智', pinyin: 'zhì', meaning: '智慧', words: ['智慧', '智力'], example: '要有智慧。', minecraftSentence: '村民有他们的智慧。', story: '智字上面是"知"（知道），下面是"日"。每天都知道新东西，积累起来就是智慧。' }
        ]
    },
    {
        id: 'L7-8',
        level: 7,
        title: '第8课：精通级',
        characters: [
            { char: '慧', pinyin: 'huì', meaning: '智慧', words: ['智慧', '聪慧'], example: '聪慧的孩子。', minecraftSentence: '运用智慧打败怪物。', story: '慧字上面是"彗"（扫帚），下面是"心"。心里像扫帚扫过一样干净清楚，明白事理。' },
            { char: '聪', pinyin: 'cōng', meaning: '聪明', words: ['聪明', '失聪'], example: '你真聪明。', minecraftSentence: '聪明的玩家会利用红石。', story: '聪字左边是"耳"，右边是"总"。耳朵总能听到细微的声音，表示听觉灵敏，头脑聪明。' },
            { char: '愚', pinyin: 'yú', meaning: '愚蠢', words: ['愚蠢', '愚人'], example: '不要做愚蠢的事。', minecraftSentence: '僵尸有时候很愚蠢。', story: '愚字上面是"禺"（猴子），下面是"心"。心里像猴子一样不稳重？或者未开化的样子，表示笨拙。' },
            { char: '巧', pinyin: 'qiǎo', meaning: '灵巧', words: ['巧妙', '灵巧'], example: '手很灵巧。', minecraftSentence: '巧妙地利用地形。', story: '巧字左边是"工"，右边是"???"。工作做得非常精细，有技巧，灵巧。' },
            { char: '妙', pinyin: 'miào', meaning: '奇妙', words: ['奇妙', '美妙'], example: '奇妙的世界。', minecraftSentence: '这是一个奇妙的种子。', story: '妙字左边是"女"，右边是"少"。少女是很美好的，表示美妙、奇妙。' },
            { char: '特', pinyin: 'tè', meaning: '特别', words: ['特别', '特殊'], example: '特别的礼物。', minecraftSentence: '寻找特殊的生物群落。', story: '特字左边是"牛"，右边是"寺"。本来指一种特别的公牛，后来表示特别、特殊。' },
            { char: '准', pinyin: 'zhǔn', meaning: '准确', words: ['准备', '准确'], example: '准备好了吗？', minecraftSentence: '准备好迎接挑战。', story: '准字左边是"冫"，右边是"隹"（鸟）。像鸟一样飞得高看得准，定下标准。' },
            { char: '确', pinyin: 'què', meaning: '确定', words: ['确定', '正确'], example: '确定答案。', minecraftSentence: '确定家的位置。', story: '确字左边是"石"，右边是"角"。像石头一样坚硬、坚定，非常确定。' },
            { char: '误', pinyin: 'wù', meaning: '错误', words: ['误会', '错误'], example: '这是个误会。', minecraftSentence: '小心不要误伤村民。', story: '误字左边是"讠"（说话），右边是"吴"。话说得不对，大声争吵，造成了错误。' },
            { char: '差', pinyin: 'chà', meaning: '差别', words: ['差别', '差不多'], example: '差不多一样。', minecraftSentence: '这两种石头差别不大。', story: '差字上面是"羊"，下面是"工"。工作做得不好，有了差距，或者不一致。' },
            { char: '庄', pinyin: 'zhuāng', meaning: '村庄', words: ['庄稼', '庄园'], example: '庄稼长大了。', minecraftSentence: '收割庄稼做面包。', story: '庄字外面是"广"（房子），里面是"土"。有土地的庄园，或者村庄。' },
            { char: '堡', pinyin: 'bǎo', meaning: '堡垒', words: ['堡垒', '城堡'], example: '坚固的堡垒。', minecraftSentence: '下界要有堡垒遗迹。', story: '堡字上面是"保"（保护），下面是"土"。用土筑成的小城，用来防守保护。' },
            { char: '规', pinyin: 'guī', meaning: '规则', words: ['规定', '圆规'], example: '遵守规则。', minecraftSentence: '服务器有自己的规则。', story: '规字左边是"夫"，右边是"见"。画圆的工具，引申为规则、法度。' }
        ]
    },
    {
        id: 'L7-9',
        level: 7,
        title: '第9课：精通级',
        characters: [
            { char: '则', pinyin: 'zé', meaning: '规则', words: ['规则', '否则'], example: '否则会输。', minecraftSentence: '了解游戏规则才能赢。', story: '则字左边是"贝"，右边是"刂"（刀）。用刀分贝壳（钱），要遵守公平的法则。' },
            { char: '律', pinyin: 'lǜ', meaning: '规律', words: ['法律', '规律'], example: '很有规律。', minecraftSentence: '红石电路有它的规律。', story: '律字左边是"彳"（走），右边是"聿"（笔）。用笔写下来的必须遵守的行为准则，法律。' },
            { char: '命', pinyin: 'mìng', meaning: '生命', words: ['命令', '生命'], example: '生命很宝贵。', minecraftSentence: '输入命令改变天气。', story: '命字上面是"人"和"一"，下面是"叩"。上级对下级发号施令。也指生命。' },
            { char: '存', pinyin: 'cún', meaning: '生存', words: ['存在', '保存'], example: '保存一下。', minecraftSentence: '保存你的物品在箱子里。', story: '存字除了"子"，还有"???"。孩子在家里受保护，生存、保存下来。' },
            { char: '死', pinyin: 'sǐ', meaning: '死亡', words: ['死亡', '死去'], example: '不要怕死。', minecraftSentence: '死亡后会掉落物品。', story: '死字左边是"歹"（骨头），右边是"匕"（人）。人变成了骨头，表示死亡。' },
            { char: '亡', pinyin: 'wáng', meaning: '死亡', words: ['灭亡', '逃亡'], example: '国家灭亡。', minecraftSentence: '僵尸是亡灵生物。', story: '亡字像锋芒折断了，或者人躲起来没有了。表示死亡、逃跑、丢失。' },
            { char: '健', pinyin: 'jiàn', meaning: '健康', words: ['健康', '健身'], example: '祝你健康。', minecraftSentence: '保持满血状态更健康。', story: '健字左边是"亻"，右边是"建"。人身体强壮有力，有活力，就是健康。' },
            { char: '康', pinyin: 'kāng', meaning: '健康', words: ['健康', '小康'], example: '身体健康。', minecraftSentence: '金苹果让你迅速恢复健康。', story: '康字里面是"水"的变形。把糠皮像水一样筛掉？本义指谷皮，引申为安乐、健康。' },
            { char: '疾', pinyin: 'jí', meaning: '疾病', words: ['疾病', '疾跑'], example: '预防疾病。', minecraftSentence: '双击前进键疾跑。', story: '疾字外面是"疒"，里面是"矢"（箭）。病像箭一样来得快，或者中箭受伤了。' },
            { char: '疗', pinyin: 'liáo', meaning: '治疗', words: ['治疗', '疗伤'], example: '疗伤药。', minecraftSentence: '用金苹果治疗僵尸村民。', story: '疗字外面是"疒"，里面是"了"（孩子）。把病治好了，了结了。' },
            { char: '恢', pinyin: 'huī', meaning: '恢复', words: ['恢复', '恢弘'], example: '恢复健康。', minecraftSentence: '吃食物恢复饥饿值。', story: '恢字左边是"忄"，右边是"灰"。本来指心情广大，现在多用在恢复，变回原来的样子。' },
            { char: '复', pinyin: 'fù', meaning: '重复', words: ['复习', '重复'], example: '复习功课。', minecraftSentence: '那是重生锚。', story: '复字上面是"彳"，下面是"复"。走出去又回来，往返，重复。' },
            { char: '营', pinyin: 'yíng', meaning: '营养', words: ['营养', '露营'], example: '很有营养。', minecraftSentence: '去森林里露营。', story: '营字上面是"???"（火光），下面是"宫"。军队晚上生火扎寨，表示军营、经营。' }
        ]
    },
    {
        id: 'L7-10',
        level: 7,
        title: '第10课：精通级',
        characters: [
            { char: '养', pinyin: 'yǎng', meaning: '养育', words: ['养成', '养育'], example: '养成好习惯。', minecraftSentence: '养一群牛和羊。', story: '养字上面是"羊"，下面是"食"。给羊吃东西，把它们养大，表示养育。' },
            { char: '攀', pinyin: 'pān', meaning: '攀爬', words: ['攀登', '攀比'], example: '攀登高峰。', minecraftSentence: '沿着藤蔓向上攀爬。', story: '攀字这下面是"手"（大手），上面是"樊"（许多交叉的树枝）。用大手抓住树枝向上爬。' },
            { char: '登', pinyin: 'dēng', meaning: '登高', words: ['登山', '登录'], example: '登上山顶。', minecraftSentence: '登上高塔眺望远方。', story: '登字上面是"癶"（两只脚），下面的"豆"像登高用的礼器。双脚踩着登上去。' },
            { char: '潜', pinyin: 'qián', meaning: '潜水', words: ['潜水', '潜力'], example: '在水里潜水。', minecraftSentence: '按Shift键可以潜行。', story: '潜字左边是"氵"，右边是"替"。像人替换了身份，没入水中，不让人认出来。' },
            { char: '伏', pinyin: 'fú', meaning: '埋伏', words: ['埋伏', '伏击'], example: '埋伏起来。', minecraftSentence: '潜影贝会潜伏在壳里。', story: '伏字左边是"亻"，右边是"犬"。像人像狗一样趴在地上，躲藏起来埋伏。' },
            { char: '袭', pinyin: 'xí', meaning: '袭击', words: ['袭击', '偷袭'], example: '突然袭击。', minecraftSentence: '这是袭击队的前哨站。', story: '袭字上面是"龙"，下面是"衣"。穿上龙衣？本义是继承，现在多指偷袭，突然打击。' },
            { char: '躲', pinyin: 'duǒ', meaning: '躲藏', words: ['躲避', '躲猫猫'], example: '躲起来。', minecraftSentence: '躲在掩体后面。', story: '躲字左边是"身"，右边是"朵"。身体藏在花朵或者树木后面，躲起来。' },
            { char: '避', pinyin: 'bì', meaning: '躲避', words: ['避开', '避免'], example: '避开危险。', minecraftSentence: '避开苦力怕的爆炸。', story: '避字走之底"辶"加"辟"。走开，躲到偏僻的地方，避开危险。' },
            { char: '逐', pinyin: 'zhú', meaning: '驱逐', words: ['逐渐', '追逐'], example: '逐渐长大。', minecraftSentence: '互相追逐玩耍。', story: '逐字走之底"辶"加"豕"（猪）。去追赶跑掉的猪。' },
            { char: '逃', pinyin: 'táo', meaning: '逃跑', words: ['逃跑', '逃走'], example: '赶快逃跑。', minecraftSentence: '快逃！有苦力怕！', story: '逃字走之底"辶"加"兆"。跑得远远的（兆指远或者多），逃跑。' },
            { char: '逸', pinyin: 'yì', meaning: '逃逸', words: ['逃逸', '安逸'], example: '生活安逸。', minecraftSentence: '末影龙逃逸到空中。', story: '逸字走之底"辶"加"免"（兔子）。像兔子一样跑得快，逃逸。' },
            { char: '咒', pinyin: 'zhòu', meaning: '咒语', words: ['诅咒', '咒语'], example: '念咒语。', minecraftSentence: '这是绑定诅咒的装备。', story: '咒字上面是两个"口"，下面是"几"？或者"兄"。很多人张口祈祷或诅咒。' },
            { char: '召', pinyin: 'zhào', meaning: '召唤', words: ['召唤', '号召'], example: '召唤神龙。', minecraftSentence: '召唤铁傀儡保护村庄。', story: '召字上面是"刀"，下面是"口"。用口呼唤，像刀一样有力地号召大家。' }
        ]
    },
    // ============ 第8级 大师级 ============
    {
        id: 'L8-1',
        level: 8,
        title: '第1课：大师级',
        characters: [
            { char: '唤', pinyin: 'huàn', meaning: '呼唤', words: ['叫唤', '呼唤'], example: '大声呼唤。', minecraftSentence: '唤魔者能召唤恼鬼。', story: '唤字左边是"口"，右边是"奂"（盛大）。大声地叫喊，呼唤。' },
            { char: '献', pinyin: 'xiàn', meaning: '奉献', words: ['贡献', '奉献'], example: '无私奉献。', minecraftSentence: '在这张桌子上献祭物品。', story: '献字左边是"南"，右边是"犬"。古代把南方进贡的狗献给皇帝？表示进献、奉献。' },
            { char: '祭', pinyin: 'jì', meaning: '祭祀', words: ['祭祀', '节日'], example: '祭祀祖先。', minecraftSentence: '丛林神庙是祭祀的地方。', story: '祭字上面是"月"（肉）和"又"（手），下面是"示"（神）。手拿着肉去敬神，就是祭祀。' },
            { char: '传', pinyin: 'chuán', meaning: '传递', words: ['传说', '传递'], example: '古老的传说。', minecraftSentence: '通过传送门去另一个世界。', story: '传字左边是"亻"，右边是"专"。人把专门的东西递给别人，表示传递、传送。' },
            { char: '送', pinyin: 'sòng', meaning: '送给', words: ['赠送', '欢送'], example: '欢送朋友。', minecraftSentence: '把你送到末地。', story: '送字走之底"辶"加"关"（送行）。把人送到关口，或者把东西拿给别人。' },
            { char: '瞬', pinyin: 'shùn', meaning: '瞬间', words: ['瞬间', '瞬移'], example: '瞬间消失。', minecraftSentence: '末影人会瞬间移动。', story: '瞬字左边是"目"，右边是"舜"。眼睛一眨的时间，非常快，瞬间。' },
            { char: '移', pinyin: 'yí', meaning: '移动', words: ['移动', '移民'], example: '移动桌子。', minecraftSentence: '移动鼠标控制视角。', story: '移字左边是"禾"，右边是"多"。禾苗太多了，把它们移开种到别的地方。' },
            { char: '漂', pinyin: 'piāo', meaning: '漂浮', words: ['漂浮', '漂亮'], example: '气球漂浮着。', minecraftSentence: '潜影贝会让你漂浮起来。', story: '漂字左边是"氵"，右边是"票"。像票据一样轻，在水面上漂浮。' },
            { char: '械', pinyin: 'xiè', meaning: '机械', words: ['机械', '器械'], example: '机械手臂。', minecraftSentence: '这是个复杂的机械装置。', story: '械字左边是"木"，右边是"戒"（武器）。木制兵器，或者器械。' },
            { char: '置', pinyin: 'zhì', meaning: '放置', words: ['位置', '布置'], example: '布置房间。', minecraftSentence: '放置红石中继器。', story: '置字上面是"四"（网）？下面是"直"。把东西放正，放置。' },
            { char: '脉', pinyin: 'mài', meaning: '脉冲', words: ['脉搏', '山脉'], example: '摸摸脉搏。', minecraftSentence: '制造一个红石脉冲。', story: '脉字左边是"月"（肉），右边是"永"。血脉像水流一样永远流动在身体里。' },
            { char: '冲', pinyin: 'chōng', meaning: '冲动', words: ['冲洗', '冲击'], example: '不要冲动。', minecraftSentence: '水流会冲走物品。', story: '冲字左边是"冫"，右边是"中"。像冰水直直地流下来冲击，或者向中间冲。' },
            { char: '延', pinyin: 'yán', meaning: '延迟', words: ['延长', '延迟'], example: '延长假期。', minecraftSentence: '设置中继器的延迟。', story: '延字走之底"廴"加"正"。把路走得很长，伸展，延长。' }
        ]
    },
    {
        id: 'L8-2',
        level: 8,
        title: '第2课：大师级',
        characters: [
            { char: '激', pinyin: 'jī', meaning: '激动', words: ['激动', '激烈'], example: '心情激动。', minecraftSentence: '激活活塞推动方块。', story: '激字左边是"氵"，右边是"???"（放光）。水碰上石头激起浪花。' },
            { char: '接', pinyin: 'jiē', meaning: '接触', words: ['接受', '直接'], example: '接受礼物。', minecraftSentence: '直接连接到服务器。', story: '接字左边是"扌"，右边是"妾"。用手把东西接过来，或者连接。' },
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
            { char: '废', pinyin: 'fèi', meaning: '废弃', words: ['废话', '作废'], example: '变废为宝。', minecraftSentence: '探索废弃矿井。', story: '废字外面是"广"，里面是"发"。房子发霉坏了？表示废弃、没有用了。' }
        ]
    },
    {
        id: 'L8-3',
        level: 8,
        title: '第3课：大师级',
        characters: [
            { char: '墟', pinyin: 'xū', meaning: '废墟', words: ['废墟', '丘墟'], example: '一片废墟。', minecraftSentence: '古城废墟里有宝藏。', story: '墟字左边是"土"，右边是"虚"。变成空虚的土地，没有了建筑，废墟。' },
            { char: '冥', pinyin: 'míng', meaning: '幽暗', words: ['冥想', '幽冥'], example: '闭眼冥想。', minecraftSentence: '这里像冥界一样可怕。', story: '冥字上面是"冖"（覆盖），下面是"日"和"六"。太阳被盖住了，非常幽暗。' },
            { char: '界', pinyin: 'jiè', meaning: '世界', words: ['世界', '边界'], example: '世界很大。', minecraftSentence: '去下界（地狱）探险。', story: '界字上面是"田"，下面是"介"。给田地划分界限，世界。' },
            { char: '监', pinyin: 'jiān', meaning: '监视', words: ['监督', '监视'], example: '互相监督。', minecraftSentence: '远古守卫者在监视你。', story: '监字上面是"卧"（躺看），下面是"皿"。低头看盘子里的水（照镜子），引申为监视、监督。' },
            { char: '遗', pinyin: 'yí', meaning: '遗留', words: ['遗憾', '遗产'], example: '不要遗憾。', minecraftSentence: '寻找沙漠遗迹。', story: '遗字走之底"辶"加"贵"。贵重的东西（比如知识、财物）留下了传给后人，遗留。' },
            { char: '圣', pinyin: 'shèng', meaning: '神圣', words: ['圣诞', '神圣'], example: '圣诞快乐。', minecraftSentence: '沙漠圣殿里有陷阱。', story: '圣字上面是"又"，下面是"土"。也有说是"耳"和"呈"。本义通达事理，神圣。' },
            { char: '殿', pinyin: 'diàn', meaning: '宫殿', words: ['宫殿', '大殿'], example: '宏伟的宫殿。', minecraftSentence: '海底神殿是蓝色的。', story: '殿字左边是"尸"和"共"，右边是"殳"。高大的建筑物，供奉神像或帝王居住。' },
            { char: '弃', pinyin: 'qì', meaning: '放弃', words: ['丢弃', '抛弃'], example: '不要放弃。', minecraftSentence: '被抛弃的传送门。', story: '弃字上面是"云"？中间是"???"，下面是"廾"（双手）。双手把像孩子一样的东西扔掉？抛弃。' },
            { char: '探', pinyin: 'tàn', meaning: '探索', words: ['探险', '侦探'], example: '名侦探。', minecraftSentence: '去未知的地方探险。', story: '探字左边是"扌"，右边是"深"的右边。用手去深处摸索，探索。' },
            { char: '险', pinyin: 'xiǎn', meaning: '危险', words: ['危险', '保险'], example: '这里很危险。', minecraftSentence: '冒险家不怕危险。', story: '险字左边是"阝"（山/险阻），右边是"佥"。山路陡峭，大家都不敢走，很危险。' },
            { char: '幻', pinyin: 'huàn', meaning: '幻影', words: ['幻想', '梦幻'], example: '梦幻的世界。', minecraftSentence: '幻翼在三天不睡觉后出现。', story: '幻字左边是"幺"（小），右边是"???"。像变魔术一样变化无穷，虚幻。' },
            { char: '狠', pinyin: 'hěn', meaning: '凶狠', words: ['狠心', '凶狠'], example: '凶狠的眼神。', minecraftSentence: '狼群凶狠地攻击骷髅。', story: '狠字左边是"犭"（动物），右边是"艮"。像野兽一样凶恶，凶狠。' },
            { char: '染', pinyin: 'rǎn', meaning: '染色', words: ['染料', '污染'], example: '染色的衣服。', minecraftSentence: '用染料给羊毛染色。', story: '染字左边是"氵"，右边是"九"和"木"。把木草放在水里煮九次？提取颜色来染色。' }
        ]
    },
    {
        id: 'L8-4',
        level: 8,
        title: '第4课：大师级',
        characters: [
            { char: '梁', pinyin: 'liáng', meaning: '桥梁', words: ['桥梁', '房梁'], example: '一座大桥。', minecraftSentence: '在悬崖间架起桥梁。', story: '梁字下面是"木"，上面是"水"和"刀"（其实是"???"）。用木头架在水面上，就是桥梁。' },
            { char: '坚', pinyin: 'jiān', meaning: '坚固', words: ['坚持', '坚固'], example: '坚固的堡垒。', minecraftSentence: '基岩是坚不可摧的。', story: '坚字下面是"土"，上面是"臣"和"又"（手）。像把你抓得紧紧的，像土一样硬，坚固。' },
            { char: '竖', pinyin: 'shù', meaning: '竖立', words: ['竖立', '横竖'], example: '竖着放。', minecraftSentence: '把半砖竖起来放（模组）。', story: '竖字下面是"立"，上面是"臣"和"又"。把东西扶起来站立，竖立。' },
            { char: '贫', pinyin: 'pín', meaning: '贫穷', words: ['贫苦', '贫乏'], example: '资源贫乏。', minecraftSentence: '贫瘠的土地长不出庄稼。', story: '贫字上面是"分"，下面是"贝"（钱）。钱分完了，就没有了，贫穷。' },
            { char: '贪', pinyin: 'tān', meaning: '贪心', words: ['贪玩', '贪吃'], example: '不要贪心。', minecraftSentence: '贪心地想要所有宝藏。', story: '贪字上面是"今"，下面是"贝"。今天就想要所有的钱，太贪心了。' },
            { char: '贷', pinyin: 'dài', meaning: '贷款', words: ['贷款', '借贷'], example: '借贷东西。', minecraftSentence: '向村民借贷绿宝石（交易）。', story: '贷字上面是"代"，下面是"贝"。代替钱使用？或者借钱，贷款。' },
            { char: '拾', pinyin: 'shí', meaning: '捡拾', words: ['拾取', '收拾'], example: '收拾房间。', minecraftSentence: '拾取地上的掉落物。', story: '拾字左边是"扌"，右边是"合"。手把东西合拢起来，捡拾。' },
            { char: '抬', pinyin: 'tái', meaning: '抬起', words: ['抬头', '抬手'], example: '抬起头看。', minecraftSentence: '抬起头看天上的幻翼。', story: '抬字左边是"扌"，右边是"台"。用手把平台或者重物举起来，抬起。' },
            { char: '投', pinyin: 'tóu', meaning: '投掷', words: ['投入', '投降'], example: '投篮。', minecraftSentence: '投掷三叉戟攻击敌人。', story: '投字左边是"扌"，右边是"殳"（兵器）。手拿着兵器扔出去，投掷。' },
            { char: '抗', pinyin: 'kàng', meaning: '抵抗', words: ['反抗', '抗击'], example: '抵抗敌人。', minecraftSentence: '喝抗火药水抵抗岩浆伤害。', story: '抗字左边是"扌"，右边是"亢"。高高举起手，表示抵抗、对抗。' },
            { char: '挡', pinyin: 'dǎng', meaning: '阻挡', words: ['挡住', '抵挡'], example: '挡住去路。', minecraftSentence: '用盾牌挡住骷髅的箭。', story: '挡字左边是"扌"，右边是"当"。手当在前面，阻挡。' },
            { char: '责', pinyin: 'zé', meaning: '责任', words: ['责任', '负责'], example: '负责任。', minecraftSentence: '这片区域由铁傀儡负责。', story: '责字上面是"主"的变形（生长），下面是"贝"。钱财不仅是财富，也是一种责任。' },
            { char: '任', pinyin: 'rèn', meaning: '任务', words: ['任务', '任何'], example: '完成任务。', minecraftSentence: '在这个世界只有生存任务。', story: '任字左边是"亻"，右边是"壬"。人承担重任，任务。' }
        ]
    },
    {
        id: 'L8-5',
        level: 8,
        title: '第5课：大师级',
        characters: [
            { char: '辨', pinyin: 'biàn', meaning: '分辨', words: ['辨别', '分辨'], example: '分辨方向。', minecraftSentence: '辨别真假箱子（陷阱箱）。', story: '辨字两边是"辛"，中间是"刂"（刀）。用刀把两个纠缠在一起的东西分开，辨别。' },
            { char: '瓣', pinyin: 'bàn', meaning: '花瓣', words: ['花瓣', '蒜瓣'], example: '美丽的花瓣。', minecraftSentence: '收集花瓣做染料。', story: '瓣字两边是"辛"，中间是"瓜"。像瓜里面可以分开的一瓣一瓣，花瓣。' },
            { char: '冒', pinyin: 'mào', meaning: '冒险', words: ['感冒', '冒险'], example: '去冒险。', minecraftSentence: '勇敢的冒险家。', story: '冒字上面是"曰"（说），下面的"目"不封口。冒险时要睁大眼睛看，或者冒着危险说话？' },
            { char: '毒', pinyin: 'dú', meaning: '中毒', words: ['毒药', '病毒'], example: '小心有毒。', minecraftSentence: '中毒后生命值会下降。', story: '毒字上面是"生"（生长），下面是"母"。有些生长的植物（比如蘑菇）是有毒的，妈妈说不能吃。' },
            { char: '霉', pinyin: 'méi', meaning: '发霉', words: ['倒霉', '发霉'], example: '面包发霉了。', minecraftSentence: '在这倒霉的一天遇到了苦力怕。', story: '霉字上面是"雨"，下面是"每"。每天都下雨，东西都潮湿发霉了。' },
            { char: '菌', pinyin: 'jūn', meaning: '真菌', words: ['细菌', '真菌'], example: '蘑菇是真菌。', minecraftSentence: '下界的绯红菌。', story: '菌字上面是"艹"，下面是"囷"（粮仓）。像草一样长在粮仓里的真菌。' },
            { char: '菇', pinyin: 'gū', meaning: '蘑菇', words: ['香菇', '蘑菇'], example: '采蘑菇。', minecraftSentence: '哞菇身上长满了蘑菇。', story: '菇字上面是"艹"，下面是"姑"。姑娘采的蘑菇？或者长得像姑娘一样漂亮的蘑菇。' },
            { char: '浆', pinyin: 'jiāng', meaning: '岩浆', words: ['豆浆', '泥浆'], example: '岩浆很烫。', minecraftSentence: '岩浆膏是打败岩浆怪掉落的。', story: '浆字上面是"将"，下面是"水"。将来要做成饮料的水？或者像水一样粘稠的液体。' },
            { char: '粘', pinyin: 'nián', meaning: '粘液', words: ['粘住', '粘液'], example: '胶水很粘。', minecraftSentence: '粘液球可以做粘性活塞。', story: '粘字左边是"米"，右边是"占"。像煮烂的米饭一样粘，或者是把东西占住不放。' },
            { char: '贴', pinyin: 'tiē', meaning: '粘贴', words: ['贴画', '粘贴'], example: '贴一张画。', minecraftSentence: '把画贴在墙上装饰。', story: '贴字左边是"贝"（钱），右边是"占"。把钱贴身放好？或者用东西粘住。' },
            { char: '旱', pinyin: 'hàn', meaning: '干旱', words: ['旱灾', '干旱'], example: '天气干旱。', minecraftSentence: '沙漠是干旱的生物群落。', story: '旱字上面是"日"，下面是"干"。太阳太大了，把水都晒干了，干旱。' },
            { char: '裂', pinyin: 'liè', meaning: '裂开', words: ['裂缝', '破裂'], example: '墙裂开了。', minecraftSentence: '峡谷是大地的裂缝。', story: '裂字上面是"列"，下面是"衣"。把衣服列开（撕开），裂开。' },
            { char: '掘', pinyin: 'jué', meaning: '挖掘', words: ['发掘', '挖掘'], example: '挖掘宝藏。', minecraftSentence: '快速挖掘矿石。', story: '掘字左边是"扌"，右边是"屈"。手弯曲着挖土，挖掘。' }
        ]
    },
    {
        id: 'L8-6',
        level: 8,
        title: '第6课：大师级',
        characters: [
            { char: '撞', pinyin: 'zhuàng', meaning: '碰撞', words: ['撞击', '碰撞'], example: '撞到了头。', minecraftSentence: '鞘翅飞行小心撞墙。', story: '撞字左边是"扌"，右边是"童"。像小孩（童）一样乱跑乱撞。' },
            { char: '敲', pinyin: 'qiāo', meaning: '敲打', words: ['敲门', '敲击'], example: '敲门声。', minecraftSentence: '敲掉这个方块。', story: '敲字左边是"高"，右边是"攴"（手拿棍子）。举高棍子敲打。' },
            { char: '劈', pinyin: 'pī', meaning: '劈开', words: ['劈柴', '雷劈'], example: '劈开木头。', minecraftSentence: '雷电劈中村民会变女巫。', story: '劈字上面是"辟"，下面是"刀"。用刀把东西辟开，劈开。' },
            { char: '刺', pinyin: 'cì', meaning: '刺杀', words: ['刺客', '刺眼'], example: '阳光刺眼。', minecraftSentence: '用剑刺向敌人。', story: '刺字左边是"朿"（刺），右边是"刂"（刀）。带刺的刀，刺杀。' },
            { char: '挑', pinyin: 'tiāo', meaning: '挑战', words: ['挑选', '挑战'], example: '挑战自我。', minecraftSentence: '挑战凋灵Boss。', story: '挑字左边是"扌"，右边是"兆"。用手挑起很多（兆）东西？或者挑战。' },
            { char: '瞄', pinyin: 'miáo', meaning: '瞄准', words: ['瞄准', '瞄一眼'], example: '瞄准目标。', minecraftSentence: '用弓箭瞄准远处的骷髅。', story: '瞄字左边是"目"，右边是"苗"。眼睛盯着像苗一样细小的目标，瞄准。' },
            { char: '备', pinyin: 'bèi', meaning: '准备', words: ['准备', '备用'], example: '准备出发。', minecraftSentence: '带上备用的食物和工具。', story: '备字上面是"夂"（走），下面是"田"。准备下田去。' },
            { char: '碎', pinyin: 'suì', meaning: '破碎', words: ['打碎', '碎片'], example: '玻璃碎了。', minecraftSentence: '打碎玻璃不会掉落物品。', story: '碎字左边是"石"，右边是"卒"（兵/死）。石头碰碎了，破碎。' },
            { char: '缝', pinyin: 'féng', meaning: '缝隙', words: ['缝补', '裂缝'], example: '缝衣服。', minecraftSentence: '从门缝里看外面。', story: '缝字左边是"纟"，右边是"逢"。用丝线把相逢的两块布连起来，缝补。' },
            { char: '虚', pinyin: 'xū', meaning: '虚弱', words: ['虚假', '虚弱'], example: '身体虚弱。', minecraftSentence: '虚弱药水可以治愈僵尸村民。', story: '虚字上面是"虍"（虎头），下面是"业"。老虎走了，只剩下空虚的基业？虚假。' },
            { char: '实', pinyin: 'shí', meaning: '真实', words: ['诚实', '果实'], example: '说实话。', minecraftSentence: '这个世界看起来很真实。', story: '实字上面是"宀"（房子），下面是"头"。家里头有东西，实实在在。' },
            { char: '弱', pinyin: 'ruò', meaning: '弱小', words: ['弱点', '微弱'], example: '光线微弱。', minecraftSentence: '找出Boss的弱点。', story: '弱字是两个"弓"和两个点。像两把软弱的弓，拉不开。' },
            { char: '强', pinyin: 'qiáng', meaning: '强大', words: ['坚强', '强壮'], example: '身体强壮。', minecraftSentence: '末影龙是非常强大的敌人。', story: '强字左边是"弓"，右边是"口"和"虫"。像强壮的虫子只有一张嘴？或者强有力的弓。' }
        ]
    },
    {
        id: 'L8-7',
        level: 8,
        title: '第7课：大师级',
        characters: [
            { char: '稀', pinyin: 'xī', meaning: '稀有', words: ['稀少', '稀饭'], example: '稀有的宝石。', minecraftSentence: '粉色羊是很稀有的。', story: '稀字左边是"禾"，右边是"希"。禾苗很稀疏，希望多长点。' },
            { char: '密', pinyin: 'mì', meaning: '茂密', words: ['秘密', '茂密'], example: '保守秘密。', minecraftSentence: '丛林里树木很茂密。', story: '密字上面是"宀"（房子），中间是"必"，下面是"山"。房子里一定要有山？或者是隐秘。' },
            { char: '阔', pinyin: 'kuò', meaning: '宽阔', words: ['广阔', '宽阔'], example: '广阔的天地。', minecraftSentence: '广阔的草原适合骑马。', story: '阔字门里面是个"活"字。开阔的地方，生活得更宽敞。' },
            { char: '锁', pinyin: 'suǒ', meaning: '锁定', words: ['锁门', '枷锁'], example: '把门锁上。', minecraftSentence: '锁定难度级别。', story: '锁字左边是"钅"，右边像"小"贝壳。金做的锁，锁住宝贝。' },
            { char: '稳', pinyin: 'wěn', meaning: '平稳', words: ['稳定', '平稳'], example: '走路要稳。', minecraftSentence: '着陆要平稳，小心摔伤。', story: '稳字左边是"禾"，右边是"急"。禾苗长势急，但是很稳？或者心里急也要稳住。' },
            { char: '筑', pinyin: 'zhù', meaning: '建筑', words: ['建筑', '修筑'], example: '伟大的建筑。', minecraftSentence: '建筑师也需要生存技能。', story: '筑字上面是"竹"，下面是"巩"（工+凡）。用竹子和工具建筑房屋。' },
            { char: '构', pinyin: 'gòu', meaning: '结构', words: ['构造', '机构'], example: '复杂的结构。', minecraftSentence: '研究地牢的构造。', story: '构字左边是"木"，右边是"勾"。木头勾连在一起，形成结构。' },
            { char: '瓦', pinyin: 'wǎ', meaning: '瓦片', words: ['瓦房', '砖瓦'], example: '红色的瓦片。', minecraftSentence: '用深板岩瓦做屋顶。', story: '瓦字像两片瓦扣在一起的样子。盖房顶用的瓦片。' },
            { char: '墙', pinyin: 'qiáng', meaning: '墙壁', words: ['城墙', '围墙'], example: '白色的墙。', minecraftSentence: '建一堵墙挡住怪物。', story: '墙字左边是"土"，右边是"啬"。用土筑成的屏障，墙壁。' },
            { char: '阶', pinyin: 'jiē', meaning: '台阶', words: ['阶段', '台阶'], example: '登上台阶。', minecraftSentence: '用楼梯做屋顶的台阶。', story: '阶字左边是"阝"，右边是"介"。人走在山坡的台阶上。' },
            { char: '梯', pinyin: 'tī', meaning: '梯子', words: ['楼梯', '电梯'], example: '爬梯子。', minecraftSentence: '用木头合成梯子。', story: '梯字左边是"木"，右边是"弟"。像弟弟（次第）一样一阶一阶的木头，梯子。' },
            { char: '栏', pinyin: 'lán', meaning: '围栏', words: ['栏杆', '栅栏'], example: '扶着栏杆。', minecraftSentence: '用栅栏围住动物。', story: '栏字左边是"木"，右边是"兰"（阻拦）。用木头做成的阻拦物，栏杆。' },
            { char: '饰', pinyin: 'shì', meaning: '装饰', words: ['装饰', '服饰'], example: '装饰房间。', minecraftSentence: '用花盆装饰窗台。', story: '饰字左边是"饣"（食），右边是"巾"（布）。吃饱了还要穿得好看，装饰一下。' }
        ]
    },
    {
        id: 'L8-8',
        level: 8,
        title: '第8课：大师级',
        characters: [
            { char: '基', pinyin: 'jī', meaning: '基础', words: ['基本', '地基'], example: '打好基础。', minecraftSentence: '打好房子的地基。', story: '基字上面是"其"，下面是"土"。房子的根基在土里，基础。' },
            { char: '域', pinyin: 'yù', meaning: '区域', words: ['地域', '领域'], example: '未知的领域。', minecraftSentence: '这是雪原地域。', story: '域字左边是"土"，右边是"或"（国）。有土有人守卫的地方，区域。' },
            { char: '境', pinyin: 'jìng', meaning: '环境', words: ['环境', '边境'], example: '保护环境。', minecraftSentence: '进入末地传送门的环境。', story: '境字左边是"土"，右边是"竟"（终了）。土地的尽头，边界，环境。' },
            { char: '标', pinyin: 'biāo', meaning: '标记', words: ['标准', '标志'], example: '做个标记。', minecraftSentence: '用地标标记家的位置。', story: '标字左边是"木"，右边是"示"。树立木头作为指示，标记。' },
            { char: '航', pinyin: 'háng', meaning: '航行', words: ['航空', '航海'], example: '出海航行。', minecraftSentence: '开船在大海航行。', story: '航字左边是"舟"，右边是"亢"。船在水上高高地行驶，航行。' },
            { char: '驶', pinyin: 'shǐ', meaning: '驾驶', words: ['行驶', '驾驶'], example: '驾驶汽车。', minecraftSentence: '驾驶船只寻找沉船。', story: '驶字左边是"马"，右边是"史"。骑马让它快走，驾驶。' },
            { char: '径', pinyin: 'jìng', meaning: '路径', words: ['小径', '直径'], example: '林间小径。', minecraftSentence: '用铲子开辟一条小径。', story: '径字左边是"彳"（走），右边是"巛"（水）和"工"。沿着水边的小路走，路径。' },
            { char: '途', pinyin: 'tú', meaning: '路途', words: ['前途', '路途'], example: '路途遥远。', minecraftSentence: '在探险的旅途中。', story: '途字走之底"辶"加"余"。走过的剩下的路？路途。' },
            { char: '源', pinyin: 'yuán', meaning: '来源', words: ['资源', '水源'], example: '珍惜水源。', minecraftSentence: '制作一个无限水源。', story: '源字左边是"氵"，右边是"原"。水的源头，来源。' },
            { char: '略', pinyin: 'lüè', meaning: '策略', words: ['省略', '战略'], example: '制定战略。', minecraftSentence: '懂点战斗策略。', story: '略字左边是"田"，右边是"各"。经营田地各有各的方法，策略。' },
            { char: '术', pinyin: 'shù', meaning: '技术', words: ['各种', '法术'], example: '变魔术。', minecraftSentence: '练习PVP技术。', story: '术字是"木"字加一点。对木头进行加工的技术，法术。' },
            { char: '陷', pinyin: 'xiàn', meaning: '陷阱', words: ['陷入', '陷阱'], example: '掉进陷阱。', minecraftSentence: '制作一个掉落陷阱。', story: '陷字左边是"阝"，右边是"臽"（像人掉进臼里）。掉进坑里，陷阱。' },
            { char: '阱', pinyin: 'jǐng', meaning: '陷阱', words: ['深阱', '陷阱'], example: '布置陷阱。', minecraftSentence: '沙漠神殿有TNT陷阱。', story: '阱字左边是"阝"，右边是"井"。在土里挖井做陷阱。' }
        ]
    },
    {
        id: 'L8-9',
        level: 8,
        title: '第9课：大师级',
        characters: [
            { char: '策', pinyin: 'cè', meaning: '策划', words: ['计策', '策划'], example: '想个计策。', minecraftSentence: '策划一次突袭。', story: '策字上面是"竹"，下面是"朿"（刺）。用竹简记下计谋，或者用竹鞭驱赶，策划。' },
            { char: '猛', pinyin: 'měng', meaning: '猛烈', words: ['凶猛', '猛烈'], example: '猛兽来了。', minecraftSentence: '猛烈攻击Boss。', story: '猛字左边是"犭"，右边是"孟"（大）。像老大哥一样凶猛的野兽。' },
            { char: '烈', pinyin: 'liè', meaning: '强烈', words: ['热烈', '剧烈'], example: '烈火燃烧。', minecraftSentence: '烈焰人会发射火球。', story: '烈字上面是"列"，下面是"灬"（火）。火烧得很猛，排列整齐？猛烈。' },
            { char: '牺', pinyin: 'xī', meaning: '牺牲', words: ['牺牲', '牺尊'], example: '不怕牺牲。', minecraftSentence: '为了保护队友而牺牲。', story: '牺字左边是"牛"，右边是"西"。祭祀用的纯色牛，牺牲。' },
            { char: '牲', pinyin: 'shēng', meaning: '牺牲', words: ['畜牲', '牺牲'], example: '家畜。', minecraftSentence: '圈养牲畜获取食物。', story: '牲字左边是"牛"，右边是"生"。活着的用来祭祀的牛，牲口。' },
            { char: '威', pinyin: 'wēi', meaning: '威力', words: ['威风', '威力'], example: '威力巨大。', minecraftSentence: 'TNT爆炸威力很大。', story: '威字里面是"女"，外面是"戌"（兵器）。女人拿着兵器，很有威风。' },
            { char: '莹', pinyin: 'yíng', meaning: '晶莹', words: ['晶莹', '萤火虫'], example: '晶莹剔透。', minecraftSentence: '晶莹的钻石。', story: '莹字上面是"艹"，中间是"冖"，下面是"玉"。像玉一样受保护，晶莹剔透。' },
            { char: '剔', pinyin: 'tī', meaning: '剔除', words: ['挑剔', '剔透'], example: '晶莹剔透。', minecraftSentence: '挑剔的附魔。', story: '剔字左边是"易"，右边是"刂"。很容易把骨肉分开？剔除。' },
            { char: '财', pinyin: 'cái', meaning: '财富', words: ['发财', '财富'], example: '积累财富。', minecraftSentence: '绿宝石是村民的财富。', story: '财字左边是"贝"（钱），右边是"才"。有钱又有才，发财。' },
            { char: '富', pinyin: 'fù', meaning: '富有', words: ['丰富', '富强'], example: '经验丰富。', minecraftSentence: '富有矿产的矿洞。', story: '富字上面是"宀"，下面是"一口田"。家里有一大块田，富有。' },
            { char: '缺', pinyin: 'quē', meaning: '缺乏', words: ['缺少', '缺点'], example: '缺少食物。', minecraftSentence: '缺乏材料无法合成。', story: '缺字左边是"缶"（瓦罐），右边是"夬"（决口）。瓦罐破了个口，残缺。' },
            { char: '荣', pinyin: 'róng', meaning: '光荣', words: ['荣幸', '光荣'], example: '光荣的任务。', minecraftSentence: '这是属于你的荣耀。', story: '荣字上面是"艹"，中间是"冖"，下面是"木"。树木开花很茂盛，光荣。' },
            { char: '耀', pinyin: 'yào', meaning: '照耀', words: ['闪耀', '照耀'], example: '阳光照耀。', minecraftSentence: '附魔书闪耀着光芒。', story: '耀字左边是"光"，右边是"翟"（野鸡，羽毛漂亮）。像漂亮的羽毛在光下闪耀。' }
        ]
    },
    {
        id: 'L8-10',
        level: 8,
        title: '第10课：大师级',
        characters: [
            { char: '辉', pinyin: 'huī', meaning: '光辉', words: ['辉煌', '光辉'], example: '光辉岁月。', minecraftSentence: '辉煌的建筑。', story: '辉字左边是"光"，右边是"军"。军队的铠甲在阳光下发光，光辉。' },
            { char: '煌', pinyin: 'huáng', meaning: '辉煌', words: ['辉煌', '灯火'], example: '灯火辉煌。', minecraftSentence: '创造辉煌的成就。', story: '煌字左边是"火"，右边是"皇"。像皇帝一样盛大的火光，辉煌。' },
            { char: '历', pinyin: 'lì', meaning: '历史', words: ['经历', '历史'], example: '经历风雨。', minecraftSentence: '查看游戏更新历史。', story: '历字上面是"厂"，下面是"力"。在工厂里出力干活，经历磨练。' },
            { char: '史', pinyin: 'shǐ', meaning: '历史', words: ['史书', '历史'], example: '学习历史。', minecraftSentence: '史蒂夫是传奇人物。', story: '史字是"口"和"乂"（手拿笔）。手拿笔记录口说的话，历史。' },
            { char: '录', pinyin: 'lù', meaning: '记录', words: ['目录', '记录'], example: '打破记录。', minecraftSentence: '记录下你的坐标。', story: '录字上面是"彐"，下面是"水"（氺）。把事情刻在竹简上用水洗不掉？记录。' },
            { char: '程', pinyin: 'chéng', meaning: '过程', words: ['工程', '路程'], example: '路程很远。', minecraftSentence: '漫长的冒险旅程。', story: '程字左边是"禾"，右边是"呈"。根据禾苗的生长计算路程或规矩。' },
            { char: '序', pinyin: 'xù', meaning: '顺序', words: ['秩序', '顺序'], example: '遵守秩序。', minecraftSentence: '按顺序摆放物品。', story: '序字上面是"广"，下面是"予"。给予一个宽敞的地方按次序排队？' },
            { char: '章', pinyin: 'zhāng', meaning: '章节', words: ['文章', '徽章'], example: '写文章。', minecraftSentence: '开启新的冒险篇章。', story: '章字上面是"立"，下面是"早"。文章立意要早？或者音乐的一章。' },
            { char: '凋', pinyin: 'diāo', meaning: '凋零', words: ['凋零', '凋谢'], example: '花儿凋谢了。', minecraftSentence: '凋灵是最危险的Boss之一。', story: '凋字左边是"冫"，右边是"周"。天气冷了，周而复始，花木凋零。' },
            { char: '灵', pinyin: 'líng', meaning: '灵魂', words: ['灵魂', '精灵'], example: '灵魂是看不见的。', minecraftSentence: '凋灵需要灵魂沙来召唤。', story: '灵字上面是"彐"，下面是"火"。火光像神奇的精灵在跳动？灵巧。' },
            { char: '魂', pinyin: 'hún', meaning: '魂魄', words: ['灵魂', '魂魄'], example: '魂飞魄散。', minecraftSentence: '灵魂沙会让你走得更慢。', story: '魂字左边是"云"，右边是"鬼"。像云一样飘渺的鬼魂？魂魄。' },
            { char: '蛋', pinyin: 'dàn', meaning: '蛋', words: ['鸡蛋', '龙蛋'], example: '蛋可以孵化。', minecraftSentence: '打败末影龙会掉落龙蛋。', story: '蛋字上面是"疋"（脚），下面是"虫"。虫子（动物）生的蛋。' },
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
