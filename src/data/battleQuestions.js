/**
 * 对战游戏题库 - 基于试卷参考图的高频汉字
 * 题目格式：填空题，用下划线表示需要填写的汉字
 * 优先考察 difficulty 2+ 的中等难度汉字
 */

export const battleQuestions = [
    // ============ 来自试卷4_二年级语文 ============
    {
        question: "小话回到老家后，写了一篇日___。",
        options: ["记", "忆", "本", "事"],
        answer: 0
    },
    {
        question: "来到山___，望着蓝天。",
        options: ["脚", "顶", "坡", "谷"],
        answer: 0
    },
    {
        question: "鸟儿欢___，叽叽喳喳。",
        options: ["唱", "笑", "叫", "跳"],
        answer: 0
    },
    {
        question: "小路边，一个个大南___在阳光下。",
        options: ["瓜", "果", "桃", "枣"],
        answer: 0
    },
    {
        question: "静静躺着，一只青蛙蹲着尖___着。",
        options: ["叫", "唱", "嘴", "喊"],
        answer: 0
    },
    {
        question: "夏日的早晨，爷___穿着草帽。",
        options: ["爷", "叔", "伯", "舅"],
        answer: 0
    },
    {
        question: "爷爷挑着箩___，准备去集市上卖菜。",
        options: ["筐", "篮", "框", "桶"],
        answer: 0
    },
    {
        question: "爷爷的脸上___出了笑容。",
        options: ["露", "现", "显", "浮"],
        answer: 0
    },
    {
        question: "天空中飘着几朵白___。",
        options: ["云", "花", "雪", "雾"],
        answer: 0
    },
    {
        question: "沙滩上有贝___，亮晶晶的。",
        options: ["壳", "片", "珠", "石"],
        answer: 0
    },
    {
        question: "站在立着一棵___椰子树。",
        options: ["棵", "株", "颗", "根"],
        answer: 0
    },
    {
        question: "细长的葫芦___上长满了绿叶。",
        options: ["藤", "枝", "茎", "蔓"],
        answer: 0
    },

    // ============ 考试词汇 ============
    {
        question: "请用竖___计算这道题。",
        options: ["式", "立", "直", "线"],
        answer: 0
    },
    {
        question: "这是一份期末测___卷。",
        options: ["试", "验", "评", "考"],
        answer: 0
    },
    {
        question: "___断对错，打勾或打叉。",
        options: ["判", "审", "决", "定"],
        answer: 0
    },
    {
        question: "按顺___填写数字。",
        options: ["序", "从", "次", "利"],
        answer: 0
    },
    {
        question: "期___考试要来了。",
        options: ["末", "中", "初", "终"],
        answer: 0
    },
    {
        question: "拼一___，写一写。",
        options: ["拼", "读", "念", "说"],
        answer: 0
    },
    {
        question: "___合练习，检验学习成果。",
        options: ["综", "总", "全", "整"],
        answer: 0
    },

    // ============ 季节天气 ============
    {
        question: "___天来了，花儿都开了。",
        options: ["春", "夏", "秋", "冬"],
        answer: 0
    },
    {
        question: "夏天很___，要多喝水。",
        options: ["热", "冷", "凉", "暖"],
        answer: 0
    },
    {
        question: "秋天很凉___，落叶飘落。",
        options: ["爽", "快", "冷", "风"],
        answer: 0
    },
    {
        question: "冬天很___，要穿棉衣。",
        options: ["冷", "热", "暖", "凉"],
        answer: 0
    },
    {
        question: "今天是___天，太阳很大。",
        options: ["晴", "阴", "雨", "雪"],
        answer: 0
    },
    {
        question: "今天是___天，没有太阳。",
        options: ["阴", "晴", "雨", "雪"],
        answer: 0
    },

    // ============ 动物昆虫 ============
    {
        question: "蜻___在天空中飞来飞去。",
        options: ["蜓", "蛉", "虫", "蝇"],
        answer: 0
    },
    {
        question: "美丽的蝴___在花丛中飞舞。",
        options: ["蝶", "蛾", "虫", "蝇"],
        answer: 0
    },
    {
        question: "小蚂___搬着食物回家。",
        options: ["蚁", "虫", "蜂", "蝇"],
        answer: 0
    },
    {
        question: "蜜___在花丛中采蜜。",
        options: ["蜂", "虫", "蝇", "蚁"],
        answer: 0
    },
    {
        question: "乌___爬得很慢很慢。",
        options: ["龟", "鸦", "云", "鸡"],
        answer: 0
    },
    {
        question: "公___喔喔叫，天亮了。",
        options: ["鸡", "鸭", "鹅", "鸟"],
        answer: 0
    },
    {
        question: "小燕___从南方飞回来了。",
        options: ["子", "儿", "雀", "鸟"],
        answer: 0
    },

    // ============ 情感表达 ============
    {
        question: "我喜___画画和唱歌。",
        options: ["欢", "爱", "好", "乐"],
        answer: 0
    },
    {
        question: "不要害___，我来帮你。",
        options: ["怕", "羞", "惧", "慌"],
        answer: 0
    },
    {
        question: "别着___，慢慢来。",
        options: ["急", "慌", "忙", "躁"],
        answer: 0
    },
    {
        question: "请大家___静，老师要讲课了。",
        options: ["安", "平", "冷", "沉"],
        answer: 0
    },
    {
        question: "这朵花可爱___了！",
        options: ["极", "很", "太", "真"],
        answer: 0
    },

    // ============ 身体部位 ============
    {
        question: "爷爷的___上露出了笑容。",
        options: ["脸", "头", "眼", "嘴"],
        answer: 0
    },
    {
        question: "开动脑___，想一想。",
        options: ["筋", "袋", "瓜", "子"],
        answer: 0
    },
    {
        question: "我的___很长，跑得很快。",
        options: ["腿", "手", "脚", "臂"],
        answer: 0
    },
    {
        question: "伸出手___，数一数。",
        options: ["指", "掌", "臂", "腕"],
        answer: 0
    },

    // ============ 衣物穿戴 ============
    {
        question: "穿上新衣___，真漂亮。",
        options: ["服", "裳", "着", "装"],
        answer: 0
    },
    {
        question: "戴上草___，遮太阳。",
        options: ["帽", "巾", "盖", "顶"],
        answer: 0
    },
    {
        question: "穿上凉___，真凉快。",
        options: ["鞋", "靴", "履", "袜"],
        answer: 0
    },
    {
        question: "系上腰___，真精神。",
        options: ["带", "绳", "线", "圈"],
        answer: 0
    },

    // ============ 动作描写 ============
    {
        question: "抬头___着远方。",
        options: ["望", "看", "瞧", "视"],
        answer: 0
    },
    {
        question: "他___在床上休息。",
        options: ["躺", "坐", "趴", "站"],
        answer: 0
    },
    {
        question: "请___好你的书包。",
        options: ["收", "放", "拿", "扔"],
        answer: 0
    },
    {
        question: "仿___例句，写一写。",
        options: ["照", "按", "学", "跟"],
        answer: 0
    },
    {
        question: "发___想象，写作文。",
        options: ["挥", "展", "用", "起"],
        answer: 0
    },

    // ============ 常用字考察 ============
    {
        question: "水很___，不要下去。",
        options: ["深", "浅", "清", "冷"],
        answer: 0
    },
    {
        question: "水很___，可以趟过去。",
        options: ["浅", "深", "清", "热"],
        answer: 0
    },
    {
        question: "天___了，该起床了。",
        options: ["亮", "黑", "暗", "明"],
        answer: 0
    },
    {
        question: "房间里很___，开灯吧。",
        options: ["暗", "亮", "明", "黑"],
        answer: 0
    },
    {
        question: "这个箱子很___，搬不动。",
        options: ["重", "轻", "大", "小"],
        answer: 0
    },
    {
        question: "羽毛很___，飘在空中。",
        options: ["轻", "重", "软", "硬"],
        answer: 0
    },
    {
        question: "衣服___了，可以收了。",
        options: ["干", "湿", "净", "脏"],
        answer: 0
    },
    {
        question: "地面很___，刚下过雨。",
        options: ["湿", "干", "滑", "硬"],
        answer: 0
    },
    {
        question: "房间很干___，真舒服。",
        options: ["净", "燥", "爽", "静"],
        answer: 0
    },
    {
        question: "手___了，快去洗手。",
        options: ["脏", "净", "黑", "湿"],
        answer: 0
    },

    // ============ 数学相关 ============
    {
        question: "十___上是几？",
        options: ["位", "个", "数", "点"],
        answer: 0
    },
    {
        question: "相___的两个数是几？",
        options: ["邻", "同", "近", "等"],
        answer: 0
    },
    {
        question: "请___成算式。",
        options: ["组", "排", "列", "写"],
        answer: 0
    },
    {
        question: "做两___题。",
        options: ["道", "个", "条", "项"],
        answer: 0
    },
    {
        question: "这个数___大。",
        options: ["最", "很", "太", "真"],
        answer: 0
    },

    // ============ 生活场景 ============
    {
        question: "我们在教___里上课。",
        options: ["室", "堂", "厅", "馆"],
        answer: 0
    },
    {
        question: "客___里有沙发。",
        options: ["厅", "室", "房", "堂"],
        answer: 0
    },
    {
        question: "妈妈在厨___做饭。",
        options: ["房", "室", "厅", "堂"],
        answer: 0
    },
    {
        question: "我的房___很干净。",
        options: ["间", "屋", "子", "里"],
        answer: 0
    },
    {
        question: "窗___外面有小鸟。",
        options: ["户", "口", "外", "边"],
        answer: 0
    },
    {
        question: "院___里有花草。",
        options: ["子", "内", "中", "里"],
        answer: 0
    },

    // ============ 物品用具 ============
    {
        question: "用筷___吃饭。",
        options: ["子", "儿", "头", "尖"],
        answer: 0
    },
    {
        question: "用勺___喝汤。",
        options: ["子", "儿", "头", "柄"],
        answer: 0
    },
    {
        question: "时___响了，该上课了。",
        options: ["钟", "针", "表", "铃"],
        answer: 0
    },
    {
        question: "照镜___，真漂亮。",
        options: ["子", "面", "片", "框"],
        answer: 0
    },
    {
        question: "我踢足___，很开心。",
        options: ["球", "赛", "场", "门"],
        answer: 0
    },
    {
        question: "我弹钢___，真好听。",
        options: ["琴", "键", "音", "声"],
        answer: 0
    }
];

// 随机获取指定数量的题目，并打乱选项顺序
export const getRandomQuestions = (count = 10) => {
    const shuffled = [...battleQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // 打乱每道题的选项顺序，并更新正确答案的索引
    return selected.map(q => {
        const correctAnswer = q.options[q.answer]; // 记录正确答案
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
        const newAnswerIndex = shuffledOptions.indexOf(correctAnswer);
        return {
            ...q,
            options: shuffledOptions,
            answer: newAnswerIndex
        };
    });
};

// 获取题目总数
export const getTotalQuestionCount = () => battleQuestions.length;

export default battleQuestions;
