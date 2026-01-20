/**
 * 对战游戏题库 - 从试卷参考图提取的常见汉字
 * 题目格式：填空题，用下划线表示需要填写的汉字
 */

export const battleQuestions = [
    // ============ 数学相关 ============
    {
        question: "小明有5个苹___，吃了2个，还剩几个？",
        options: ["果", "花", "树", "叶"],
        answer: 0
    },
    {
        question: "请用竖___计算这道题。",
        options: ["式", "立", "直", "线"],
        answer: 0
    },
    {
        question: "一共有___个小朋友在操场上玩。",
        options: ["十", "千", "万", "百"],
        answer: 0
    },
    {
        question: "3+5=8，这是一道___法题。",
        options: ["加", "减", "乘", "除"],
        answer: 0
    },
    {
        question: "10-3=7，这是一道___法题。",
        options: ["减", "加", "乘", "除"],
        answer: 0
    },
    {
        question: "这道题的___案是什么？",
        options: ["答", "问", "题", "考"],
        answer: 0
    },
    {
        question: "请按顺___填写数字。",
        options: ["序", "利", "从", "时"],
        answer: 0
    },
    {
        question: "期___考试要来了，要好好复习。",
        options: ["末", "中", "初", "终"],
        answer: 0
    },

    // ============ 语文相关 ============
    {
        question: "小白___爱吃萝卜和青菜。",
        options: ["兔", "虎", "猫", "狗"],
        answer: 0
    },
    {
        question: "___上的小鸟在唱歌。",
        options: ["树", "草", "花", "石"],
        answer: 0
    },
    {
        question: "妈___去市场买菜了。",
        options: ["妈", "爸", "姐", "哥"],
        answer: 0
    },
    {
        question: "我和同___一起去上学。",
        options: ["学", "事", "伴", "友"],
        answer: 0
    },
    {
        question: "太阳从东___升起来了。",
        options: ["边", "方", "面", "头"],
        answer: 0
    },
    {
        question: "小鱼在___里游来游去。",
        options: ["水", "火", "土", "木"],
        answer: 0
    },
    {
        question: "春___来了，花儿都开了。",
        options: ["天", "地", "日", "月"],
        answer: 0
    },
    {
        question: "我___天都按时上学。",
        options: ["每", "那", "这", "哪"],
        answer: 0
    },

    // ============ 生活常识 ============
    {
        question: "早上好！老___好！",
        options: ["师", "虎", "人", "大"],
        answer: 0
    },
    {
        question: "请把书___打开。",
        options: ["本", "子", "页", "面"],
        answer: 0
    },
    {
        question: "我用铅___写字。",
        options: ["笔", "刀", "尺", "线"],
        answer: 0
    },
    {
        question: "下___了，要带雨伞。",
        options: ["雨", "雪", "风", "云"],
        answer: 0
    },
    {
        question: "红___高高挂在操场上。",
        options: ["旗", "花", "灯", "球"],
        answer: 0
    },
    {
        question: "我们在教___里上课。",
        options: ["室", "堂", "厅", "馆"],
        answer: 0
    },
    {
        question: "放___后我要回家。",
        options: ["学", "假", "工", "手"],
        answer: 0
    },
    {
        question: "今天是星期___。",
        options: ["一", "二", "三", "四"],
        answer: 0
    },

    // ============ 动作描写 ============
    {
        question: "小朋友们在操场上___步。",
        options: ["跑", "走", "跳", "飞"],
        answer: 0
    },
    {
        question: "我会___绳，跳得很高。",
        options: ["跳", "跑", "走", "飞"],
        answer: 0
    },
    {
        question: "请___好你的书包。",
        options: ["收", "放", "拿", "扔"],
        answer: 0
    },
    {
        question: "我喜欢___书，书里有很多知识。",
        options: ["看", "写", "画", "听"],
        answer: 0
    },
    {
        question: "上课要认真___讲。",
        options: ["听", "说", "读", "写"],
        answer: 0
    },
    {
        question: "请大家___齐读课文。",
        options: ["一", "二", "三", "四"],
        answer: 0
    }
];

// 随机获取指定数量的题目
export const getRandomQuestions = (count = 10) => {
    const shuffled = [...battleQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
};

// 获取题目总数
export const getTotalQuestionCount = () => battleQuestions.length;

export default battleQuestions;
