/**
 * Grade 1 English Vocabulary - 100 Words Kids Need to Read
 * 一年级核心词汇（100词）
 * 
 * 主题：Minecraft, Transformers, Ninjago, One Piece, Daily Life
 */

const grade1Words = [
    // ===== Group 1 =====
    {
        word: 'a',
        uppercase: 'A',
        phonetic: '/ə/',
        meaning: 'art. 一个（用于辅音开头的词前）',
        partOfSpeech: 'article',
        grade: 1,
        story: {
            title: 'A Diamond Sword',
            scene: '⚔️💎 Steve找到了一把闪闪发光的武器...',
            text: 'Steve found **a** diamond sword! It is **a** very special weapon. He will use **a** shield too.',
            translation: 'Steve找到了一把钻石剑！这是一把非常特别的武器。他还会用一个盾牌。',
            sceneDescription: 'Steve在矿洞深处发现了一个宝箱，里面有一把闪着蓝光的钻石剑。'
        },
        examples: [
            { sentence: 'I have **a** cat.', translation: '我有一只猫。', theme: 'daily' },
            { sentence: 'Luffy wears **a** straw hat.', translation: '路飞戴着一顶草帽。', theme: 'onepiece' }
        ],
        visualHint: '🍎 A = 一个（a apple ❌, an apple ✓）'
    },
    {
        word: 'an',
        uppercase: 'AN',
        phonetic: '/æn/',
        meaning: 'art. 一个（用于元音开头的词前）',
        partOfSpeech: 'article',
        grade: 1,
        story: {
            title: 'An Amazing Adventure',
            scene: '🏴‍☠️ 海贼船上即将开始的冒险...',
            text: 'This is **an** exciting day! Luffy sees **an** island. It will be **an** amazing adventure!',
            translation: '这是激动人心的一天！路飞看到一座岛屿。这将是一次精彩的冒险！',
            sceneDescription: '阳光洒在千阳号上，船头的路飞指着远方的神秘岛屿。'
        },
        examples: [
            { sentence: 'I ate **an** apple.', translation: '我吃了一个苹果。', theme: 'daily' },
            { sentence: 'Steve found **an** emerald.', translation: 'Steve找到了一颗绿宝石。', theme: 'minecraft' }
        ],
        visualHint: '🍏 An = 一个（a/e/i/o/u 前用 an）'
    },
    {
        word: 'as',
        uppercase: 'AS',
        phonetic: '/æz/',
        meaning: 'prep./conj. 作为；像...一样',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'As Strong As Optimus',
            scene: '🤖💪 变形金刚的力量对比...',
            text: 'Bumblebee wants to be **as** strong **as** Optimus Prime. He trains hard every day just **as** his leader did.',
            translation: '大黄蜂想变得和擎天柱一样强壮。他每天努力训练，就像他的领袖曾经那样。',
            sceneDescription: '大黄蜂在训练场上挥拳，擎天柱在一旁点头鼓励。'
        },
        examples: [
            { sentence: 'Zoro is **as** cool **as** a ninja.', translation: '索隆像忍者一样酷。', theme: 'onepiece' },
            { sentence: 'Run **as** fast **as** you can!', translation: '尽你所能快跑！', theme: 'daily' }
        ],
        visualHint: '⚖️ As = 像...一样'
    },
    {
        word: 'at',
        uppercase: 'AT',
        phonetic: '/æt/',
        meaning: 'prep. 在（某地/某时）',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'At the Village',
            scene: '🏘️🌅 村庄里的日落时分...',
            text: 'Steve is **at** the village. It is sunset. He looks **at** the beautiful sky. Villagers wave **at** him.',
            translation: 'Steve在村庄里。太阳落山了。他看着美丽的天空。村民们向他挥手。',
            sceneDescription: 'Minecraft村庄在夕阳下显得格外温馨，村民们在街道上走动。'
        },
        examples: [
            { sentence: 'I am **at** school.', translation: '我在学校。', theme: 'daily' },
            { sentence: 'The ninjas train **at** the dojo.', translation: '忍者们在道馆训练。', theme: 'ninjago' }
        ],
        visualHint: '📍 At = 在某地点'
    },
    {
        word: 'boy',
        uppercase: 'BOY',
        phonetic: '/bɔɪ/',
        meaning: 'n. 男孩',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'The Rubber Boy',
            scene: '🏴‍☠️👦 一个梦想成为海贼王的男孩...',
            text: 'Luffy is a special **boy**. This **boy** can stretch like rubber! He says, "I am a **boy** who will become the Pirate King!"',
            translation: '路飞是一个特别的男孩。这个男孩可以像橡皮一样伸展！他说，"我是一个要成为海贼王的男孩！"',
            sceneDescription: '年轻的路飞站在海边的悬崖上，望着大海，梦想着成为海贼王。'
        },
        examples: [
            { sentence: 'The **boy** is playing.', translation: '这个男孩在玩耍。', theme: 'daily' },
            { sentence: 'Lloyd is a brave **boy**.', translation: 'Lloyd是一个勇敢的男孩。', theme: 'ninjago' }
        ],
        visualHint: '👦 Boy = 男孩'
    },
    {
        word: 'by',
        uppercase: 'BY',
        phonetic: '/baɪ/',
        meaning: 'prep. 通过；在...旁边；被',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'By the River',
            scene: '🌊🎣 河边的钓鱼时光...',
            text: 'Steve sits **by** the river. He caught a fish **by** using a fishing rod. The sunset **by** the water is beautiful.',
            translation: 'Steve坐在河边。他用钓鱼竿钓到了一条鱼。河边的日落很美。',
            sceneDescription: 'Steve坐在方块河边，手持钓鱼竿，等待鱼儿上钩。'
        },
        examples: [
            { sentence: 'The book was written **by** me.', translation: '这本书是我写的。', theme: 'daily' },
            { sentence: 'Zoro stands **by** his captain.', translation: '索隆站在他船长旁边。', theme: 'onepiece' }
        ],
        visualHint: '📐 By = 在...旁边/通过'
    },
    {
        word: 'girl',
        uppercase: 'GIRL',
        phonetic: '/ɡɜːrl/',
        meaning: 'n. 女孩',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'The Navigator Girl',
            scene: '🗺️🧡 一个航海天才女孩...',
            text: 'Nami is a clever **girl**. This **girl** can read maps perfectly. She is the best navigator **girl** in the world!',
            translation: '娜美是一个聪明的女孩。这个女孩能完美地看懂地图。她是世界上最棒的航海女孩！',
            sceneDescription: '娜美站在船头，手持地图，自信地指引着方向。'
        },
        examples: [
            { sentence: 'The **girl** is reading.', translation: '这个女孩在看书。', theme: 'daily' },
            { sentence: 'Alex is a brave **girl**.', translation: 'Alex是一个勇敢的女孩。', theme: 'minecraft' }
        ],
        visualHint: '👧 Girl = 女孩'
    },
    {
        word: 'goes',
        uppercase: 'GOES',
        phonetic: '/ɡoʊz/',
        meaning: 'v. 去（go的第三人称单数）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'goes', past: 'went', ing: 'going', base: 'go' },
        story: {
            title: 'Luffy Goes to Sea',
            scene: '⛵🌊 出海的日子...',
            text: 'Every morning, Luffy **goes** on new adventures. He **goes** to different islands. His ship **goes** across the Grand Line!',
            translation: '每天早上，路飞都去进行新的冒险。他去不同的岛屿。他的船穿越伟大航路！',
            sceneDescription: '千阳号在蔚蓝的大海上航行，路飞站在船头大喊。'
        },
        verbPractice: {
            present: 'He **goes** to school every day.',
            past: 'He **went** to school yesterday.',
            presentTranslation: '他每天去上学。',
            pastTranslation: '他昨天去了学校。'
        },
        examples: [
            { sentence: 'Dad **goes** to work.', translation: '爸爸去上班。', theme: 'daily' },
            { sentence: 'Steve **goes** mining.', translation: 'Steve去挖矿。', theme: 'minecraft' }
        ],
        visualHint: '🚶 Goes = 他/她去（第三人称）'
    },
    {
        word: 'has',
        uppercase: 'HAS',
        phonetic: '/hæz/',
        meaning: 'v. 有（have的第三人称单数）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'has', past: 'had', ing: 'having', base: 'have' },
        story: {
            title: 'Zoro Has Three Swords',
            scene: '⚔️⚔️⚔️ 三刀流的秘密...',
            text: 'Zoro **has** three swords. He **has** incredible strength. His sword style **has** no equal!',
            translation: '索隆有三把剑。他拥有惊人的力量。他的剑术无人能敌！',
            sceneDescription: '索隆背着三把刀，绿色的头发在风中飘动，眼神锐利。'
        },
        verbPractice: {
            present: 'She **has** a cat.',
            past: 'She **had** a cat before.',
            presentTranslation: '她有一只猫。',
            pastTranslation: '她以前有一只猫。'
        },
        examples: [
            { sentence: 'The dog **has** a bone.', translation: '狗有一根骨头。', theme: 'daily' },
            { sentence: 'Kai **has** fire powers.', translation: 'Kai拥有火焰之力。', theme: 'ninjago' }
        ],
        visualHint: '✋ Has = 他/她有（第三人称）'
    },
    {
        word: 'he',
        uppercase: 'HE',
        phonetic: '/hiː/',
        meaning: 'pron. 他',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'He is the Captain',
            scene: '🏴‍☠️👒 草帽船长...',
            text: '**He** is Monkey D. Luffy. **He** loves adventure. **He** will be the Pirate King!',
            translation: '他是蒙奇·D·路飞。他热爱冒险。他会成为海贼王！',
            sceneDescription: '路飞戴着标志性的草帽，笑容满面地宣告他的梦想。'
        },
        examples: [
            { sentence: '**He** is my brother.', translation: '他是我的兄弟。', theme: 'daily' },
            { sentence: '**He** can transform!', translation: '他可以变形！', theme: 'transformers' }
        ],
        visualHint: '👨 He = 他（男性）'
    },
    {
        word: 'is',
        uppercase: 'IS',
        phonetic: '/ɪz/',
        meaning: 'v. 是（be动词第三人称单数）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'This Is the Grand Line',
            scene: '🌊⚓ 传说中的大海...',
            text: 'This **is** the Grand Line. It **is** dangerous. But it **is** also full of treasure!',
            translation: '这是伟大航路。它很危险。但它也充满了宝藏！',
            sceneDescription: '狂风巨浪中，前方出现了神秘的海域入口。'
        },
        examples: [
            { sentence: 'He **is** happy.', translation: '他很开心。', theme: 'daily' },
            { sentence: 'The Ender Dragon **is** huge!', translation: '末影龙非常巨大！', theme: 'minecraft' }
        ],
        visualHint: '= Is = 是（他/她/它）'
    },
    {
        word: 'it',
        uppercase: 'IT',
        phonetic: '/ɪt/',
        meaning: 'pron. 它',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'It Is a Devil Fruit',
            scene: '🍇✨ 神秘的果实...',
            text: 'Look at this fruit! **It** is a Devil Fruit. **It** has strange powers. Eat **it** and you will have powers!',
            translation: '看看这个果实！它是恶魔果实。它有奇怪的力量。吃了它你就会有超能力！',
            sceneDescription: '一个奇形怪状的果实在桌上发着光芒。'
        },
        examples: [
            { sentence: '**It** is raining.', translation: '下雨了。', theme: 'daily' },
            { sentence: '**It** is a creeper!', translation: '它是一个苦力怕！', theme: 'minecraft' }
        ],
        visualHint: '👆 It = 它（动物/物品）'
    },
    {
        word: 'little',
        uppercase: 'LITTLE',
        phonetic: '/ˈlɪtl/',
        meaning: 'adj. 小的；少的',
        partOfSpeech: 'adjective',
        grade: 1,
        story: {
            title: 'Little Chopper',
            scene: '🦌💕 可爱的小鹿...',
            text: 'Chopper is a **little** reindeer. This **little** doctor helps everyone. Even though he is **little**, his heart is big!',
            translation: '乔巴是一只小驯鹿。这个小医生帮助每个人。虽然他很小，但他的心很大！',
            sceneDescription: '乔巴穿着医生服，虽然个子小小的，但眼神充满坚定。'
        },
        examples: [
            { sentence: 'I have a **little** sister.', translation: '我有一个小妹妹。', theme: 'daily' },
            { sentence: 'There is a **little** slime.', translation: '有一个小史莱姆。', theme: 'minecraft' }
        ],
        visualHint: '🐭 Little = 小小的'
    },
    {
        word: 'she',
        uppercase: 'SHE',
        phonetic: '/ʃiː/',
        meaning: 'pron. 她',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'She is the Navigator',
            scene: '🗺️🧭 最棒的航海士...',
            text: '**She** is Nami. **She** can predict weather. **She** is the smartest navigator!',
            translation: '她是娜美。她能预测天气。她是最聪明的航海士！',
            sceneDescription: '娜美拿着一个特殊的天气棒，自信地微笑。'
        },
        examples: [
            { sentence: '**She** is my mother.', translation: '她是我的妈妈。', theme: 'daily' },
            { sentence: '**She** is Nya, the water ninja.', translation: '她是Nya，水之忍者。', theme: 'ninjago' }
        ],
        visualHint: '👩 She = 她（女性）'
    },
    {
        word: 'the',
        uppercase: 'THE',
        phonetic: '/ðə/',
        meaning: 'art. 这个，那个（定冠词）',
        partOfSpeech: 'article',
        grade: 1,
        story: {
            title: 'The One Piece',
            scene: '💰🏴‍☠️ 传说中的宝藏...',
            text: '**The** One Piece is **the** greatest treasure. **The** pirates all want to find it. **The** adventure begins!',
            translation: 'One Piece是最伟大的宝藏。海贼们都想找到它。冒险开始了！',
            sceneDescription: '神秘的宝藏在世界尽头闪耀，所有海贼都梦想着它。'
        },
        examples: [
            { sentence: '**The** cat is sleeping.', translation: '那只猫在睡觉。', theme: 'daily' },
            { sentence: '**The** Ender Dragon is coming!', translation: '末影龙来了！', theme: 'minecraft' }
        ],
        visualHint: '👆 The = 那个（特定的）'
    },
    {
        word: 'to',
        uppercase: 'TO',
        phonetic: '/tuː/',
        meaning: 'prep. 到；向；给',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'Sail to Laugh Tale',
            scene: '⛵🏝️ 驶向最后的岛屿...',
            text: 'We will sail **to** Laugh Tale! Go **to** the ship! It is time **to** find One Piece!',
            translation: '我们将航行到拉夫坦！去船上！是时候找到One Piece了！',
            sceneDescription: '草帽海贼团站在船上，指向远方的目的地。'
        },
        examples: [
            { sentence: 'I go **to** school.', translation: '我去上学。', theme: 'daily' },
            { sentence: 'Steve walks **to** the village.', translation: 'Steve走向村庄。', theme: 'minecraft' }
        ],
        visualHint: '➡️ To = 到...去'
    },
    {
        word: 'was',
        uppercase: 'WAS',
        phonetic: '/wʌz/',
        meaning: 'v. 是（be动词过去式，I/he/she/it）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'Ace Was a Hero',
            scene: '🔥❤️ 关于一个英雄的回忆...',
            text: 'Ace **was** Luffy\'s brother. He **was** very strong. He **was** a Fire Fist user!',
            translation: '艾斯曾是路飞的哥哥。他非常强壮。他是火拳的使用者！',
            sceneDescription: '艾斯背上的白胡子标志在阳光下闪耀，他转身微笑。'
        },
        examples: [
            { sentence: 'I **was** at home yesterday.', translation: '昨天我在家。', theme: 'daily' },
            { sentence: 'It **was** a hard battle.', translation: '那是一场艰难的战斗。', theme: 'ninjago' }
        ],
        visualHint: '⏮️ Was = 曾经是（过去）'
    },

    // ===== Group 2 =====
    {
        word: 'am',
        uppercase: 'AM',
        phonetic: '/æm/',
        meaning: 'v. 是（be动词，I am）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'I Am Optimus Prime',
            scene: '🤖✨ 领袖的宣言...',
            text: '"I **am** Optimus Prime. I **am** the leader. I **am** here to protect Earth!"',
            translation: '"我是擎天柱。我是领袖。我在这里保护地球！"',
            sceneDescription: '擎天柱站在高楼上，夕阳映照着他红蓝相间的身体。'
        },
        examples: [
            { sentence: 'I **am** 7 years old.', translation: '我7岁。', theme: 'daily' },
            { sentence: 'I **am** a ninja!', translation: '我是忍者！', theme: 'ninjago' }
        ],
        visualHint: '🙋 I + Am = 我是...'
    },
    {
        word: 'down',
        uppercase: 'DOWN',
        phonetic: '/daʊn/',
        meaning: 'adv./prep. 向下；往下',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'Going Down the Mine',
            scene: '⛏️🕳️ 矿洞深处...',
            text: 'Steve goes **down** the ladder. He digs **down** to find diamonds. Deep **down** is where treasure hides!',
            translation: 'Steve沿着梯子下去。他往下挖找钻石。宝藏就藏在深处！',
            sceneDescription: 'Steve手持火把，沿着梯子向黑暗的矿洞深处走去。'
        },
        examples: [
            { sentence: 'Sit **down**, please.', translation: '请坐下。', theme: 'daily' },
            { sentence: 'The anchor goes **down**.', translation: '船锚放下去了。', theme: 'onepiece' }
        ],
        visualHint: '⬇️ Down = 向下'
    },
    {
        word: 'fast',
        uppercase: 'FAST',
        phonetic: '/fæst/',
        meaning: 'adj./adv. 快的；快速地',
        partOfSpeech: 'adjective',
        grade: 1,
        story: {
            title: 'Fast as Lightning',
            scene: '⚡🥷 闪电般的速度...',
            text: 'Jay is very **fast**! He runs **fast** like lightning. His moves are **fast** and powerful!',
            translation: 'Jay非常快！他跑得像闪电一样快。他的动作又快又有力！',
            sceneDescription: 'Jay变成一道蓝色闪电，在空中划出光弧。'
        },
        examples: [
            { sentence: 'He runs **fast**.', translation: '他跑得很快。', theme: 'daily' },
            { sentence: 'Bumblebee drives **fast**!', translation: '大黄蜂开得很快！', theme: 'transformers' }
        ],
        visualHint: '🏎️ Fast = 快速'
    },
    {
        word: 'I',
        uppercase: 'I',
        phonetic: '/aɪ/',
        meaning: 'pron. 我',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'I Will Be Pirate King!',
            scene: '👒🌊 船长的誓言...',
            text: '"**I** am Luffy! **I** love meat! **I** will be the Pirate King!" shouts the boy in the straw hat.',
            translation: '"我是路飞！我爱吃肉！我会成为海贼王！"戴草帽的男孩大喊。',
            sceneDescription: '路飞站在船头，张开双臂，对着大海宣告他的梦想。'
        },
        examples: [
            { sentence: '**I** like ice cream.', translation: '我喜欢冰淇淋。', theme: 'daily' },
            { sentence: '**I** can build anything!', translation: '我能建造任何东西！', theme: 'minecraft' }
        ],
        visualHint: '🙋‍♂️ I = 我（永远大写）'
    },
    {
        word: 'in',
        uppercase: 'IN',
        phonetic: '/ɪn/',
        meaning: 'prep. 在...里面',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'Treasure in the Chest',
            scene: '📦💎 箱子里的秘密...',
            text: 'There is treasure **in** the chest! Diamonds are **in** there. Put the gold **in** your bag!',
            translation: '箱子里有宝藏！钻石在里面。把金子放进你的包里！',
            sceneDescription: 'Steve打开一个大箱子，里面闪烁着各种宝石的光芒。'
        },
        examples: [
            { sentence: 'The cat is **in** the box.', translation: '猫在盒子里。', theme: 'daily' },
            { sentence: 'Autobots hide **in** car form.', translation: '汽车人隐藏在汽车形态中。', theme: 'transformers' }
        ],
        visualHint: '📦 In = 在里面'
    },
    {
        word: 'jump',
        uppercase: 'JUMP',
        phonetic: '/dʒʌmp/',
        meaning: 'v. 跳',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'jump', past: 'jumped', ing: 'jumping' },
        story: {
            title: 'Jump Over the Gap!',
            scene: '🏃💨 跨越深渊...',
            text: 'Steve must **jump**! He **jumps** over the lava. Yesterday he **jumped** over a big gap!',
            translation: 'Steve必须跳！他跳过熔岩。昨天他跳过了一个大裂缝！',
            sceneDescription: 'Steve在悬崖边起跳，下面是滚烫的熔岩。'
        },
        verbPractice: {
            present: 'I **jump** high.',
            past: 'I **jumped** yesterday.',
            presentTranslation: '我跳得高。',
            pastTranslation: '昨天我跳了。'
        },
        examples: [
            { sentence: '**Jump** over the rope!', translation: '跳过绳子！', theme: 'daily' },
            { sentence: 'Luffy can **jump** very far!', translation: '路飞可以跳很远！', theme: 'onepiece' }
        ],
        visualHint: '🦘 Jump = 跳'
    },
    {
        word: 'me',
        uppercase: 'ME',
        phonetic: '/miː/',
        meaning: 'pron. 我（宾格）',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'Follow Me!',
            scene: '🏴‍☠️👆 船长的命令...',
            text: '"Follow **me**!" says Luffy. "Give **me** some meat! Help **me** find the treasure!"',
            translation: '"跟着我！"路飞说。"给我一些肉！帮我找到宝藏！"',
            sceneDescription: '路飞转身召唤他的船员们跟上。'
        },
        examples: [
            { sentence: 'Give **me** the book.', translation: '把书给我。', theme: 'daily' },
            { sentence: 'Help **me** build this!', translation: '帮我建这个！', theme: 'minecraft' }
        ],
        visualHint: '👈 Me = 我（别人对我做事）'
    },
    {
        word: 'my',
        uppercase: 'MY',
        phonetic: '/maɪ/',
        meaning: 'pron. 我的',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'My Nakama',
            scene: '👥❤️ 我的伙伴们...',
            text: 'These are **my** friends. This is **my** crew. **My** nakama are the best!',
            translation: '这些是我的朋友。这是我的船员。我的伙伴们是最棒的！',
            sceneDescription: '草帽海贼团全员站在一起，阳光照耀着他们。'
        },
        examples: [
            { sentence: 'This is **my** dog.', translation: '这是我的狗。', theme: 'daily' },
            { sentence: '**My** sword is ready.', translation: '我的剑准备好了。', theme: 'ninjago' }
        ],
        visualHint: '🙋‍♂️👈 My = 我的'
    },
    {
        word: 'off',
        uppercase: 'OFF',
        phonetic: '/ɔːf/',
        meaning: 'adv./prep. 离开；关闭',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'Take Off to the Sky',
            scene: '🚀✨ 升空起航...',
            text: 'The Sunny takes **off**! Turn **off** the anchor! We set **off** on a new adventure!',
            translation: '千阳号起航了！关掉船锚！我们踏上新的冒险！',
            sceneDescription: '千阳号展开它的翅膀，从海面上飞起。'
        },
        examples: [
            { sentence: 'Turn **off** the light.', translation: '关掉灯。', theme: 'daily' },
            { sentence: 'Blast **off**!', translation: '发射！', theme: 'transformers' }
        ],
        visualHint: '📴 Off = 关/离开'
    },
    {
        word: 'on',
        uppercase: 'ON',
        phonetic: '/ɑːn/',
        meaning: 'prep. 在...上面；开着',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'Standing on the Ship',
            scene: '🚢👣 站在甲板上...',
            text: 'Luffy stands **on** the Sunny. His hat is **on** his head. The journey goes **on**!',
            translation: '路飞站在千阳号上。他的帽子戴在头上。旅程继续！',
            sceneDescription: '路飞双脚稳稳站在甲板上，草帽在阳光下闪耀。'
        },
        examples: [
            { sentence: 'The book is **on** the table.', translation: '书在桌子上。', theme: 'daily' },
            { sentence: 'Put the block **on** top.', translation: '把方块放在上面。', theme: 'minecraft' }
        ],
        visualHint: '⬆️ On = 在上面/开'
    },
    {
        word: 'out',
        uppercase: 'OUT',
        phonetic: '/aʊt/',
        meaning: 'adv./prep. 出去；在外面',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'Get Out of Here!',
            scene: '🏃‍♂️💨 快逃！',
            text: 'The creeper is coming! Get **out** of there! Run **out** of the cave! Steve jumps **out**!',
            translation: '苦力怕来了！从那里出来！跑出洞穴！Steve跳了出去！',
            sceneDescription: 'Steve从矿洞里飞奔而出，身后传来嘶嘶声。'
        },
        examples: [
            { sentence: 'Go **out** and play.', translation: '出去玩吧。', theme: 'daily' },
            { sentence: 'Zoro gets **out** of the water.', translation: '索隆从水里出来。', theme: 'onepiece' }
        ],
        visualHint: '🚪➡️ Out = 出去'
    },
    {
        word: 'play',
        uppercase: 'PLAY',
        phonetic: '/pleɪ/',
        meaning: 'v. 玩；播放',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'play', past: 'played', ing: 'playing' },
        story: {
            title: 'Time to Play!',
            scene: '🎮🎉 游戏时间...',
            text: 'Let\'s **play** together! Steve **plays** Minecraft every day. Yesterday, he **played** for hours!',
            translation: '让我们一起玩吧！Steve每天玩Minecraft。昨天他玩了好几个小时！',
            sceneDescription: 'Steve在一个巨大的游乐场建筑里开心地跑动。'
        },
        verbPractice: {
            present: 'I **play** games.',
            past: 'I **played** yesterday.',
            presentTranslation: '我玩游戏。',
            pastTranslation: '昨天我玩了。'
        },
        examples: [
            { sentence: 'Let\'s **play** soccer!', translation: '我们踢足球吧！', theme: 'daily' },
            { sentence: 'Chopper loves to **play**.', translation: '乔巴喜欢玩。', theme: 'onepiece' }
        ],
        visualHint: '🎮 Play = 玩'
    },
    {
        word: 'ran',
        uppercase: 'RAN',
        phonetic: '/ræn/',
        meaning: 'v. 跑（run的过去式）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'run', past: 'ran', ing: 'running' },
        story: {
            title: 'Luffy Ran to Save Ace',
            scene: '🏃‍♂️❤️ 为救援而奔跑...',
            text: 'Luffy **ran** as fast as he could! He **ran** through enemies. He **ran** to save his brother!',
            translation: '路飞拼命地跑！他冲过敌人。他跑去救他的哥哥！',
            sceneDescription: '路飞在战场上狂奔，眼中只有前方的艾斯。'
        },
        verbPractice: {
            present: 'I **run** every morning.',
            past: 'I **ran** yesterday.',
            presentTranslation: '我每天早上跑步。',
            pastTranslation: '昨天我跑了。'
        },
        examples: [
            { sentence: 'He **ran** to school.', translation: '他跑去学校。', theme: 'daily' },
            { sentence: 'The ninjas **ran** fast.', translation: '忍者们跑得很快。', theme: 'ninjago' }
        ],
        visualHint: '🏃⏮️ Ran = 跑了（过去）'
    },
    {
        word: 'run',
        uppercase: 'RUN',
        phonetic: '/rʌn/',
        meaning: 'v. 跑',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'run', past: 'ran', ing: 'running' },
        story: {
            title: 'Run from the Zombies!',
            scene: '🧟💨 僵尸来袭！',
            text: '**Run**! The zombies are coming! Steve must **run** fast! If you **run**, you will be safe!',
            translation: '快跑！僵尸来了！Steve必须跑快点！如果你跑，你就会安全！',
            sceneDescription: '夜幕降临，Steve从一群僵尸中逃跑。'
        },
        verbPractice: {
            present: 'I **run** every day.',
            past: 'I **ran** yesterday.',
            presentTranslation: '我每天跑步。',
            pastTranslation: '昨天我跑了。'
        },
        examples: [
            { sentence: 'I can **run** fast.', translation: '我跑得快。', theme: 'daily' },
            { sentence: '**Run**, Bumblebee!', translation: '跑，大黄蜂！', theme: 'transformers' }
        ],
        visualHint: '🏃 Run = 跑'
    },
    {
        word: 'up',
        uppercase: 'UP',
        phonetic: '/ʌp/',
        meaning: 'adv./prep. 向上',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'Climb Up the Tower',
            scene: '🗼☁️ 攀登高塔...',
            text: 'Go **up** the tower! Look **up** at the sky! Steve builds **up** to the clouds!',
            translation: '爬上塔！仰望天空！Steve建到了云端！',
            sceneDescription: 'Steve一层层往上搭建，直到触碰到白云。'
        },
        examples: [
            { sentence: 'Wake **up**!', translation: '醒醒！', theme: 'daily' },
            { sentence: 'Luffy stretches **up** high!', translation: '路飞伸展得很高！', theme: 'onepiece' }
        ],
        visualHint: '⬆️ Up = 向上'
    },

    // ===== Group 3 =====
    {
        word: 'and',
        uppercase: 'AND',
        phonetic: '/ænd/',
        meaning: 'conj. 和；而且',
        partOfSpeech: 'conjunction',
        grade: 1,
        story: {
            title: 'Friends and Nakama',
            scene: '👥🤝 朋友与伙伴...',
            text: 'Luffy **and** Zoro are friends. They **and** the crew sail together. Sun **and** sea, that is their world!',
            translation: '路飞和索隆是朋友。他们和船员一起航行。阳光和大海，那就是他们的世界！',
            sceneDescription: '草帽团成员们在甲板上欢笑，享受航海的乐趣。'
        },
        examples: [
            { sentence: 'Mom **and** Dad love me.', translation: '爸爸和妈妈爱我。', theme: 'daily' },
            { sentence: 'Steve **and** Alex build together.', translation: 'Steve和Alex一起建造。', theme: 'minecraft' }
        ],
        visualHint: '➕ And = 和/而且'
    },
    {
        word: 'are',
        uppercase: 'ARE',
        phonetic: '/ɑːr/',
        meaning: 'v. 是（be动词复数/you）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'We Are Ninjas!',
            scene: '🥷🥷🥷 忍者战队...',
            text: 'We **are** the ninjas of Ninjago! You **are** brave. They **are** unstoppable!',
            translation: '我们是幻影忍者的忍者！你很勇敢。他们无人能挡！',
            sceneDescription: '四位忍者站在一起，准备迎接战斗。'
        },
        examples: [
            { sentence: 'You **are** my friend.', translation: '你是我的朋友。', theme: 'daily' },
            { sentence: 'The Autobots **are** here!', translation: '汽车人在这里！', theme: 'transformers' }
        ],
        visualHint: '👥 Are = 是（我们/你们/他们）'
    },
    {
        word: 'did',
        uppercase: 'DID',
        phonetic: '/dɪd/',
        meaning: 'v. 做了（do的过去式）；助动词',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'do', past: 'did', ing: 'doing' },
        story: {
            title: 'What Did You Do?',
            scene: '🤔❓ 发生了什么...',
            text: '**Did** you see that? Luffy **did** something amazing! How **did** he do it?',
            translation: '你看到了吗？路飞做了一件惊人的事！他是怎么做到的？',
            sceneDescription: '船员们惊讶地看着路飞完成了一个不可思议的动作。'
        },
        examples: [
            { sentence: '**Did** you eat breakfast?', translation: '你吃早餐了吗？', theme: 'daily' },
            { sentence: 'What **did** the creeper do?', translation: '苦力怕做了什么？', theme: 'minecraft' }
        ],
        visualHint: '⏮️ Did = 做了（过去式/疑问）'
    },
    {
        word: 'do',
        uppercase: 'DO',
        phonetic: '/duː/',
        meaning: 'v. 做；助动词',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'do', past: 'did', ing: 'doing' },
        story: {
            title: 'What Will You Do?',
            scene: '🎯💪 行动起来...',
            text: 'What will you **do** today? I will **do** my best! Let us **do** this together!',
            translation: '今天你要做什么？我会尽我所能！让我们一起做这件事！',
            sceneDescription: 'Steve面对一个巨大的建筑计划，准备开始工作。'
        },
        examples: [
            { sentence: '**Do** your homework!', translation: '做你的作业！', theme: 'daily' },
            { sentence: 'I **do** like meat!', translation: '我确实喜欢肉！', theme: 'onepiece' }
        ],
        visualHint: '✋ Do = 做'
    },
    {
        word: "don't",
        uppercase: "DON'T",
        phonetic: '/doʊnt/',
        meaning: 'v. 不要（do not的缩写）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: "Don't Give Up!",
            scene: '💪🔥 永不放弃...',
            text: '**Don\'t** give up! **Don\'t** be afraid! "I **don\'t** run from fights!" says Luffy.',
            translation: '不要放弃！不要害怕！"我不会逃避战斗！"路飞说。',
            sceneDescription: '路飞站起来，即使满身伤痕也不后退。'
        },
        examples: [
            { sentence: '**Don\'t** touch that!', translation: '不要碰那个！', theme: 'daily' },
            { sentence: '**Don\'t** dig straight down!', translation: '不要直接往下挖！', theme: 'minecraft' }
        ],
        visualHint: '🚫 Don\'t = 不要'
    },
    {
        word: 'father',
        uppercase: 'FATHER',
        phonetic: '/ˈfɑːðər/',
        meaning: 'n. 父亲；爸爸',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'Dragon Is My Father',
            scene: '👨‍👦🐉 神秘的父亲...',
            text: 'Dragon is Luffy\'s **father**. His **father** is very powerful. Even though his **father** is far away, Luffy knows he is watching.',
            translation: '龙是路飞的父亲。他的父亲非常强大。即使他的父亲很远，路飞知道他在看着。',
            sceneDescription: '风暴中，一个披着斗篷的男人远远地注视着路飞。'
        },
        examples: [
            { sentence: 'My **father** is kind.', translation: '我的父亲很善良。', theme: 'daily' },
            { sentence: 'Sensei Wu is like a **father**.', translation: 'Wu大师像一个父亲。', theme: 'ninjago' }
        ],
        visualHint: '👨 Father = 爸爸'
    },
    {
        word: 'friend',
        uppercase: 'FRIEND',
        phonetic: '/frend/',
        meaning: 'n. 朋友',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'My Best Friend',
            scene: '🤝💕 最好的朋友...',
            text: 'Zoro is Luffy\'s best **friend**. A true **friend** never leaves. Every nakama is a **friend** forever!',
            translation: '索隆是路飞最好的朋友。真正的朋友永不离开。每一个伙伴都是永远的朋友！',
            sceneDescription: '路飞和索隆并肩站立，面对着敌人。'
        },
        examples: [
            { sentence: 'You are my best **friend**.', translation: '你是我最好的朋友。', theme: 'daily' },
            { sentence: 'Bumblebee is my **friend**.', translation: '大黄蜂是我的朋友。', theme: 'transformers' }
        ],
        visualHint: '👫 Friend = 朋友'
    },
    {
        word: 'good',
        uppercase: 'GOOD',
        phonetic: '/ɡʊd/',
        meaning: 'adj. 好的；善良的',
        partOfSpeech: 'adjective',
        grade: 1,
        story: {
            title: 'Good vs Evil',
            scene: '⚔️✨ 善与恶...',
            text: 'The Autobots are **good** robots. They do **good** things. "Be **good** to others," says Optimus.',
            translation: '汽车人是善良的机器人。他们做好事。"对别人好，"擎天柱说。',
            sceneDescription: '擎天柱帮助人类，阳光照在他身上。'
        },
        examples: [
            { sentence: 'This is a **good** book.', translation: '这是一本好书。', theme: 'daily' },
            { sentence: '**Good** morning, Steve!', translation: '早安，Steve！', theme: 'minecraft' }
        ],
        visualHint: '👍 Good = 好的'
    },
    {
        word: 'had',
        uppercase: 'HAD',
        phonetic: '/hæd/',
        meaning: 'v. 有（have的过去式）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'have', past: 'had', ing: 'having' },
        story: {
            title: 'Once He Had a Dream',
            scene: '💭✨ 曾经的梦想...',
            text: 'Luffy **had** a dream since childhood. He **had** his straw hat from Shanks. He **had** many adventures!',
            translation: '路飞从小就有一个梦想。他从香克斯那里得到了草帽。他有过许多冒险！',
            sceneDescription: '年幼的路飞接过红发香克斯的草帽，眼中充满决心。'
        },
        verbPractice: {
            present: 'I **have** a dog.',
            past: 'I **had** a dog before.',
            presentTranslation: '我有一只狗。',
            pastTranslation: '我以前有一只狗。'
        },
        examples: [
            { sentence: 'I **had** breakfast.', translation: '我吃了早餐。', theme: 'daily' },
            { sentence: 'Steve **had** 64 diamonds.', translation: 'Steve曾有64颗钻石。', theme: 'minecraft' }
        ],
        visualHint: '⏮️ Had = 曾有（过去）'
    },
    {
        word: 'mother',
        uppercase: 'MOTHER',
        phonetic: '/ˈmʌðər/',
        meaning: 'n. 母亲；妈妈',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'Mother Knows Best',
            scene: '👩‍👦💕 妈妈的爱...',
            text: 'Nya\'s **mother** was a ninja too. A **mother** always protects her children. Her **mother** taught her to be strong.',
            translation: 'Nya的母亲也是一个忍者。母亲总是保护她的孩子。她的母亲教她变得坚强。',
            sceneDescription: 'Nya回忆起她母亲教她武术的日子。'
        },
        examples: [
            { sentence: 'My **mother** is beautiful.', translation: '我的母亲很漂亮。', theme: 'daily' },
            { sentence: 'Every pirate has a **mother**.', translation: '每个海贼都有一个母亲。', theme: 'onepiece' }
        ],
        visualHint: '👩 Mother = 妈妈'
    },
    {
        word: 'no',
        uppercase: 'NO',
        phonetic: '/noʊ/',
        meaning: 'adv./adj. 不；没有',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'No Retreat!',
            scene: '🛑✋ 绝不后退...',
            text: '**No**! We will not run! **No** enemy can stop us! There is **no** fear in my heart!',
            translation: '不！我们不会跑！没有敌人能阻止我们！我心中没有恐惧！',
            sceneDescription: '路飞面对强敌，坚定地摇头。'
        },
        examples: [
            { sentence: '**No**, thank you.', translation: '不，谢谢。', theme: 'daily' },
            { sentence: '**No** monsters here!', translation: '这里没有怪物！', theme: 'minecraft' }
        ],
        visualHint: '🚫 No = 不/没有'
    },
    {
        word: 'not',
        uppercase: 'NOT',
        phonetic: '/nɑːt/',
        meaning: 'adv. 不',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'I Will Not Give Up',
            scene: '💪🔥 绝不放弃...',
            text: 'I am **not** afraid! I will **not** give up! This is **not** the end!',
            translation: '我不害怕！我不会放弃！这不是结束！',
            sceneDescription: '受伤的路飞再次站起来，眼神坚定。'
        },
        examples: [
            { sentence: 'I am **not** tired.', translation: '我不累。', theme: 'daily' },
            { sentence: 'Do **not** wake the dragon!', translation: '不要惊醒龙！', theme: 'ninjago' }
        ],
        visualHint: '❌ Not = 不'
    },
    {
        word: 'they',
        uppercase: 'THEY',
        phonetic: '/ðeɪ/',
        meaning: 'pron. 他们/她们/它们',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'They Are the Straw Hats',
            scene: '🏴‍☠️👥 草帽海贼团...',
            text: '**They** are the Straw Hat Pirates! **They** sail across the seas. **They** never abandon a friend!',
            translation: '他们是草帽海贼团！他们航行在大海上。他们从不抛弃朋友！',
            sceneDescription: '草帽团全员站在千阳号上，迎着海风微笑。'
        },
        examples: [
            { sentence: '**They** are my classmates.', translation: '他们是我的同学。', theme: 'daily' },
            { sentence: '**They** are transforming!', translation: '他们正在变形！', theme: 'transformers' }
        ],
        visualHint: '👥 They = 他们'
    },
    {
        word: 'we',
        uppercase: 'WE',
        phonetic: '/wiː/',
        meaning: 'pron. 我们',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'We Are Nakama',
            scene: '👥✊ 我们是伙伴...',
            text: '**We** are a team! **We** stick together! **We** will find One Piece!',
            translation: '我们是一个团队！我们团结在一起！我们会找到One Piece！',
            sceneDescription: '船员们把手叠在一起，宣誓他们的友谊。'
        },
        examples: [
            { sentence: '**We** go to school.', translation: '我们去上学。', theme: 'daily' },
            { sentence: '**We** build castles!', translation: '我们建城堡！', theme: 'minecraft' }
        ],
        visualHint: '🙋‍♂️🙋‍♀️ We = 我们'
    },
    {
        word: 'were',
        uppercase: 'WERE',
        phonetic: '/wɜːr/',
        meaning: 'v. 是（be动词过去式，复数/you）',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'They Were Pirates',
            scene: '⚓📜 曾经的传说...',
            text: 'They **were** the legendary pirates. You **were** so brave! We **were** just kids then.',
            translation: '他们曾是传奇的海贼。你曾经非常勇敢！那时我们还只是孩子。',
            sceneDescription: '回忆中，年轻的路飞和艾斯、萨博在一起玩耍。'
        },
        examples: [
            { sentence: 'We **were** at home.', translation: '我们曾在家。', theme: 'daily' },
            { sentence: 'You **were** amazing!', translation: '你太厉害了！', theme: 'ninjago' }
        ],
        visualHint: '⏮️ Were = 曾是（过去复数）'
    },
    {
        word: 'yes',
        uppercase: 'YES',
        phonetic: '/jes/',
        meaning: 'adv. 是的',
        partOfSpeech: 'adverb',
        grade: 1,
        story: {
            title: 'Yes, I Can!',
            scene: '👆✨ 肯定的力量...',
            text: '**Yes**, I will be the Pirate King! **Yes**, I believe in my friends! **Yes**, we can do it!',
            translation: '是的，我会成为海贼王！是的，我相信我的朋友！是的，我们能做到！',
            sceneDescription: '路飞挥拳向天，大声宣告他的决心。'
        },
        examples: [
            { sentence: '**Yes**, I can help.', translation: '是的，我可以帮忙。', theme: 'daily' },
            { sentence: '**Yes**, let\'s go!', translation: '是的，我们走吧！', theme: 'minecraft' }
        ],
        visualHint: '✅ Yes = 是的'
    },
    {
        word: 'you',
        uppercase: 'YOU',
        phonetic: '/juː/',
        meaning: 'pron. 你/你们',
        partOfSpeech: 'pronoun',
        grade: 1,
        story: {
            title: 'You Are My Crew!',
            scene: '👆🤝 你是我的伙伴...',
            text: '**You** are my nakama! I believe in **you**! **You** will be with me!',
            translation: '你是我的伙伴！我相信你！你会和我在一起！',
            sceneDescription: '路飞伸出手，邀请新的船员加入。'
        },
        examples: [
            { sentence: '**You** are my friend.', translation: '你是我的朋友。', theme: 'daily' },
            { sentence: '**You** can do it!', translation: '你能做到！', theme: 'ninjago' }
        ],
        visualHint: '👆 You = 你/你们'
    },

    // ===== Group 4 =====
    {
        word: 'ate',
        uppercase: 'ATE',
        phonetic: '/eɪt/',
        meaning: 'v. 吃了（eat的过去式）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'eat', past: 'ate', ing: 'eating' },
        story: {
            title: 'Luffy Ate All the Meat',
            scene: '🍖😋 吃光所有的肉...',
            text: 'Luffy **ate** all the meat! He **ate** ten plates! Sanji cried because Luffy **ate** everything!',
            translation: '路飞吃光了所有的肉！他吃了十盘！山治哭了因为路飞把一切都吃完了！',
            sceneDescription: '路飞肚子圆滚滚的，周围是空盘子，山治在一旁抓狂。'
        },
        verbPractice: {
            present: 'I **eat** breakfast.',
            past: 'I **ate** breakfast.',
            presentTranslation: '我吃早餐。',
            pastTranslation: '我吃了早餐。'
        },
        examples: [
            { sentence: 'I **ate** an apple.', translation: '我吃了一个苹果。', theme: 'daily' },
            { sentence: 'Steve **ate** a golden apple.', translation: 'Steve吃了一个金苹果。', theme: 'minecraft' }
        ],
        visualHint: '🍽️⏮️ Ate = 吃了（过去）'
    },
    {
        word: 'be',
        uppercase: 'BE',
        phonetic: '/biː/',
        meaning: 'v. 是；成为',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'I Will Be Pirate King!',
            scene: '👑🏴‍☠️ 成为海贼王...',
            text: 'Luffy wants to **be** the Pirate King! He will **be** the greatest! To **be** free is his dream!',
            translation: '路飞想成为海贼王！他将成为最伟大的！自由是他的梦想！',
            sceneDescription: '路飞戴着草帽，望向广阔的大海和天空。'
        },
        examples: [
            { sentence: 'I want to **be** a doctor.', translation: '我想成为一名医生。', theme: 'daily' },
            { sentence: '**Be** careful of creepers!', translation: '小心苦力怕！', theme: 'minecraft' }
        ],
        visualHint: '🌟 Be = 是/成为'
    },
    {
        word: 'day',
        uppercase: 'DAY',
        phonetic: '/deɪ/',
        meaning: 'n. 一天；白天',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'A New Day Begins',
            scene: '🌅⛵ 新的一天开始...',
            text: 'A new **day** starts at sea! Every **day** is an adventure. One **day**, we will find the treasure!',
            translation: '新的一天在海上开始！每一天都是冒险。总有一天，我们会找到宝藏！',
            sceneDescription: '太阳从海面升起，千阳号迎着晨光出发。'
        },
        examples: [
            { sentence: 'Have a nice **day**!', translation: '祝你今天愉快！', theme: 'daily' },
            { sentence: 'The **day** is bright.', translation: '白天很明亮。', theme: 'minecraft' }
        ],
        visualHint: '☀️ Day = 一天/白天'
    },
    {
        word: 'eat',
        uppercase: 'EAT',
        phonetic: '/iːt/',
        meaning: 'v. 吃',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'eat', past: 'ate', ing: 'eating' },
        story: {
            title: 'Time to Eat!',
            scene: '🍖🍽️ 吃饭时间...',
            text: '"Let\'s **eat**!" says Luffy. He loves to **eat** meat. He can **eat** more than anyone!',
            translation: '"吃饭吧！"路飞说。他喜欢吃肉。他比任何人都能吃！',
            sceneDescription: 'Sanji端上一桌美食，路飞已经开始狼吞虎咽。'
        },
        verbPractice: {
            present: 'I **eat** lunch.',
            past: 'I **ate** lunch.',
            presentTranslation: '我吃午餐。',
            pastTranslation: '我吃了午餐。'
        },
        examples: [
            { sentence: 'What do you **eat**?', translation: '你吃什么？', theme: 'daily' },
            { sentence: 'Steve must **eat** to live.', translation: 'Steve必须吃东西才能生存。', theme: 'minecraft' }
        ],
        visualHint: '🍽️ Eat = 吃'
    },
    {
        word: 'for',
        uppercase: 'FOR',
        phonetic: '/fɔːr/',
        meaning: 'prep. 为了；给；因为',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'Fight for Friends',
            scene: '⚔️❤️ 为朋友而战...',
            text: 'Luffy fights **for** his friends! This gift is **for** you! I have waited **for** hours!',
            translation: '路飞为他的朋友而战！这个礼物是给你的！我已经等了好几个小时！',
            sceneDescription: '路飞站在朋友们面前，保护他们不受敌人伤害。'
        },
        examples: [
            { sentence: 'This is **for** you.', translation: '这是给你的。', theme: 'daily' },
            { sentence: 'I dig **for** diamonds.', translation: '我挖掘钻石。', theme: 'minecraft' }
        ],
        visualHint: '🎁 For = 为了/给'
    },
    {
        word: 'from',
        uppercase: 'FROM',
        phonetic: '/frʌm/',
        meaning: 'prep. 从...来',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'From East Blue',
            scene: '🗺️⛵ 来自东海...',
            text: 'Luffy is **from** East Blue. This treasure is **from** far away. I got a letter **from** my friend!',
            translation: '路飞来自东海。这个宝藏来自远方。我收到了朋友的一封信！',
            sceneDescription: '年幻的路飞站在风车村的海边，望向远方。'
        },
        examples: [
            { sentence: 'I am **from** China.', translation: '我来自中国。', theme: 'daily' },
            { sentence: 'Items **from** the End.', translation: '来自末地的物品。', theme: 'minecraft' }
        ],
        visualHint: '📍➡️ From = 从...来'
    },
    {
        word: 'if',
        uppercase: 'IF',
        phonetic: '/ɪf/',
        meaning: 'conj. 如果',
        partOfSpeech: 'conjunction',
        grade: 1,
        story: {
            title: 'If You Believe',
            scene: '✨💭 如果你相信...',
            text: '**If** you believe, dreams come true! **If** we work together, we will win! **If** I become Pirate King, we will have the biggest party!',
            translation: '如果你相信，梦想会成真！如果我们一起努力，我们会赢！如果我成为海贼王，我们会有最大的派对！',
            sceneDescription: '路飞仰望星空，想象着成为海贼王的那一天。'
        },
        examples: [
            { sentence: '**If** it rains, stay home.', translation: '如果下雨，待在家里。', theme: 'daily' },
            { sentence: '**If** you see a creeper, run!', translation: '如果你看到苦力怕，快跑！', theme: 'minecraft' }
        ],
        visualHint: '❓ If = 如果'
    },
    {
        word: 'look',
        uppercase: 'LOOK',
        phonetic: '/lʊk/',
        meaning: 'v. 看',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'look', past: 'looked', ing: 'looking' },
        story: {
            title: 'Look at That Island!',
            scene: '👀🏝️ 看那个岛！',
            text: '**Look** at that island! Luffy **looks** excited. They **looked** for treasure all day!',
            translation: '看那个岛！路飞看起来很兴奋。他们找了一整天的宝藏！',
            sceneDescription: '路飞在船首指向远方神秘的岛屿。'
        },
        verbPractice: {
            present: 'I **look** at the sky.',
            past: 'I **looked** at the sky.',
            presentTranslation: '我看着天空。',
            pastTranslation: '我看了天空。'
        },
        examples: [
            { sentence: '**Look** at me!', translation: '看我！', theme: 'daily' },
            { sentence: '**Look** for diamonds!', translation: '找钻石！', theme: 'minecraft' }
        ],
        visualHint: '👀 Look = 看'
    },
    {
        word: 'night',
        uppercase: 'NIGHT',
        phonetic: '/naɪt/',
        meaning: 'n. 晚上；夜晚',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'A Dangerous Night',
            scene: '🌙🧟 危险的夜晚...',
            text: 'At **night**, monsters come out! Steve hides at **night**. Good **night**, and stay safe!',
            translation: '到了晚上，怪物会出来！Steve在晚上躲起来。晚安，保持安全！',
            sceneDescription: 'Steve关上门，透过窗户看到外面行走的僵尸和骷髅。'
        },
        examples: [
            { sentence: 'Good **night**!', translation: '晚安！', theme: 'daily' },
            { sentence: '**Night** is dangerous!', translation: '夜晚是危险的！', theme: 'minecraft' }
        ],
        visualHint: '🌙 Night = 晚上'
    },
    {
        word: 'of',
        uppercase: 'OF',
        phonetic: '/ʌv/',
        meaning: 'prep. ...的；关于',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'King of Pirates',
            scene: '👑🏴‍☠️ 海贼之王...',
            text: 'Luffy will be the King **of** Pirates! He is one **of** the brave ones. A lot **of** treasure awaits!',
            translation: '路飞将成为海贼之王！他是勇敢者之一。大量的宝藏在等待！',
            sceneDescription: '传说中的罗杰的宝座，等待着下一位海贼王。'
        },
        examples: [
            { sentence: 'A cup **of** water.', translation: '一杯水。', theme: 'daily' },
            { sentence: 'A world **of** blocks.', translation: '一个方块的世界。', theme: 'minecraft' }
        ],
        visualHint: '🔗 Of = ...的'
    },
    {
        word: 'rain',
        uppercase: 'RAIN',
        phonetic: '/reɪn/',
        meaning: 'n./v. 雨；下雨',
        partOfSpeech: 'noun',
        grade: 1,
        story: {
            title: 'Rain on the Sea',
            scene: '🌧️⛵ 海上的雨...',
            text: 'It starts to **rain**! The **rain** is heavy. When **rain** comes, Nami knows where to go!',
            translation: '开始下雨了！雨很大。当雨来的时候，娜美知道该去哪里！',
            sceneDescription: '乌云笼罩大海，娜美指挥船员们应对暴风雨。'
        },
        examples: [
            { sentence: 'The **rain** is cold.', translation: '雨很冷。', theme: 'daily' },
            { sentence: 'Zombies burn in **rain**.', translation: '僵尸在雨中燃烧。', theme: 'minecraft' }
        ],
        visualHint: '🌧️ Rain = 雨/下雨'
    },
    {
        word: 'sat',
        uppercase: 'SAT',
        phonetic: '/sæt/',
        meaning: 'v. 坐（sit的过去式）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'sit', past: 'sat', ing: 'sitting' },
        story: {
            title: 'Luffy Sat on the Throne',
            scene: '👑🪑 坐上王座...',
            text: 'Luffy **sat** on his special seat. He **sat** there watching the stars. They **sat** together all night.',
            translation: '路飞坐在他的专属座位上。他坐在那里看星星。他们一起坐了一整晚。',
            sceneDescription: '路飞坐在千阳号的船首特等座，望着星空。'
        },
        verbPractice: {
            present: 'I **sit** on the chair.',
            past: 'I **sat** on the chair.',
            presentTranslation: '我坐在椅子上。',
            pastTranslation: '我坐在了椅子上。'
        },
        examples: [
            { sentence: 'The cat **sat** on the mat.', translation: '猫坐在垫子上。', theme: 'daily' },
            { sentence: 'Steve **sat** by the fire.', translation: 'Steve坐在火边。', theme: 'minecraft' }
        ],
        visualHint: '🪑⏮️ Sat = 坐了（过去）'
    },
    {
        word: 'sit',
        uppercase: 'SIT',
        phonetic: '/sɪt/',
        meaning: 'v. 坐',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'sit', past: 'sat', ing: 'sitting' },
        story: {
            title: 'Sit and Watch',
            scene: '🪑👀 坐下来看...',
            text: '**Sit** down and relax! Steve **sits** by the river. Let\'s **sit** and watch the sunset.',
            translation: '坐下来放松！Steve坐在河边。让我们坐下来看日落。',
            sceneDescription: 'Steve坐在河边的石头上，欣赏Minecraft中的日落。'
        },
        verbPractice: {
            present: 'I **sit** here.',
            past: 'I **sat** here yesterday.',
            presentTranslation: '我坐在这里。',
            pastTranslation: '昨天我坐在这里。'
        },
        examples: [
            { sentence: '**Sit** down, please.', translation: '请坐下。', theme: 'daily' },
            { sentence: '**Sit** and rest.', translation: '坐下休息。', theme: 'ninjago' }
        ],
        visualHint: '🪑 Sit = 坐'
    },
    {
        word: 'stop',
        uppercase: 'STOP',
        phonetic: '/stɑːp/',
        meaning: 'v./n. 停止',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'stop', past: 'stopped', ing: 'stopping' },
        story: {
            title: 'Stop the Enemy!',
            scene: '✋⚔️ 阻止敌人...',
            text: '**Stop** right there! We must **stop** the enemy! Nothing can **stop** us!',
            translation: '停下！我们必须阻止敌人！没有什么能阻止我们！',
            sceneDescription: '忍者们拦住了敌人的去路，准备战斗。'
        },
        verbPractice: {
            present: 'I **stop** the car.',
            past: 'I **stopped** the car.',
            presentTranslation: '我停下车。',
            pastTranslation: '我停下了车。'
        },
        examples: [
            { sentence: '**Stop** running!', translation: '别跑了！', theme: 'daily' },
            { sentence: '**Stop** the creeper!', translation: '阻止苦力怕！', theme: 'minecraft' }
        ],
        visualHint: '✋ Stop = 停止'
    },
    {
        word: 'went',
        uppercase: 'WENT',
        phonetic: '/went/',
        meaning: 'v. 去了（go的过去式）',
        partOfSpeech: 'verb',
        grade: 1,
        verbForms: { present: 'go', past: 'went', ing: 'going' },
        story: {
            title: 'They Went on an Adventure',
            scene: '⛵🗺️ 他们去冒险了...',
            text: 'The crew **went** to a new island. Luffy **went** first! They **went** through many dangers.',
            translation: '船员们去了一个新岛屿。路飞先去了！他们经历了很多危险。',
            sceneDescription: '草帽团登上了一个神秘的岛屿，开始探险。'
        },
        verbPractice: {
            present: 'I **go** to school.',
            past: 'I **went** to school.',
            presentTranslation: '我去上学。',
            pastTranslation: '我去了学校。'
        },
        examples: [
            { sentence: 'I **went** home.', translation: '我回家了。', theme: 'daily' },
            { sentence: 'Steve **went** mining.', translation: 'Steve去挖矿了。', theme: 'minecraft' }
        ],
        visualHint: '🚶⏮️ Went = 去了（过去）'
    },
    {
        word: 'will',
        uppercase: 'WILL',
        phonetic: '/wɪl/',
        meaning: 'v. 将要；会',
        partOfSpeech: 'verb',
        grade: 1,
        story: {
            title: 'I Will Be Free',
            scene: '🌅🦅 自由的誓言...',
            text: 'I **will** find One Piece! I **will** be the freest man! We **will** succeed!',
            translation: '我会找到One Piece！我会成为最自由的人！我们会成功！',
            sceneDescription: '路飞站在船头，面向日出，许下承诺。'
        },
        examples: [
            { sentence: 'I **will** help you.', translation: '我会帮你的。', theme: 'daily' },
            { sentence: 'We **will** win!', translation: '我们会赢的！', theme: 'ninjago' }
        ],
        visualHint: '📅➡️ Will = 将会'
    },
    {
        word: 'with',
        uppercase: 'WITH',
        phonetic: '/wɪð/',
        meaning: 'prep. 和...一起；用',
        partOfSpeech: 'preposition',
        grade: 1,
        story: {
            title: 'Fight With Friends',
            scene: '👫⚔️ 和朋友一起战斗...',
            text: 'I fight **with** my friends! Cut **with** this sword! Stay **with** me!',
            translation: '我和我的朋友一起战斗！用这把剑砍！和我待在一起！',
            sceneDescription: '草帽团一起面对强敌，肩并肩站立。'
        },
        examples: [
            { sentence: 'I live **with** my family.', translation: '我和家人住在一起。', theme: 'daily' },
            { sentence: 'Mine **with** a pickaxe.', translation: '用镐挖矿。', theme: 'minecraft' }
        ],
        visualHint: '🤝 With = 和...一起'
    },

    // ===== Group 5 (Colors & Common Words) =====
    {
        word: 'black', uppercase: 'BLACK', phonetic: '/blæk/',
        meaning: 'adj./n. 黑色的；黑色', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'The Black Leg', scene: '🦵🔥 黑足山治...', text: 'Sanji is called **Black** Leg Sanji! His suit is **black**.', translation: '山治被称为黑足山治！他的西装是黑色的。', sceneDescription: '山治穿着黑色西装，脚上燃烧着火焰。' },
        examples: [{ sentence: 'The cat is **black**.', translation: '猫是黑色的。', theme: 'daily' }, { sentence: '**Black** wool from sheep.', translation: '羊身上的黑羊毛。', theme: 'minecraft' }],
        visualHint: '⬛ Black = 黑色'
    },
    {
        word: 'blue', uppercase: 'BLUE', phonetic: '/bluː/',
        meaning: 'adj./n. 蓝色的；蓝色', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'The Blue Sea', scene: '🌊💙 蓝色的大海...', text: 'The sea is **blue** and beautiful! Luffy loves the **blue** ocean.', translation: '大海是蓝色的，很美！路飞喜欢蓝色的海洋。', sceneDescription: '千阳号在蔚蓝的海洋上航行。' },
        examples: [{ sentence: 'I like **blue**.', translation: '我喜欢蓝色。', theme: 'daily' }, { sentence: 'Diamonds are **blue**.', translation: '钻石是蓝色的。', theme: 'minecraft' }],
        visualHint: '🔵 Blue = 蓝色'
    },
    {
        word: 'book', uppercase: 'BOOK', phonetic: '/bʊk/',
        meaning: 'n. 书', partOfSpeech: 'noun', grade: 1,
        story: { title: "Robin's Book", scene: '📚🔍 罗宾的书...', text: 'Robin loves to read every **book**. She has many **books**.', translation: '罗宾喜欢读每一本书。她有很多书。', sceneDescription: '罗宾坐在船上，专注地阅读一本古老的书籍。' },
        examples: [{ sentence: 'I read a **book**.', translation: '我读一本书。', theme: 'daily' }, { sentence: 'An enchanted **book**!', translation: '一本附魔书！', theme: 'minecraft' }],
        visualHint: '📖 Book = 书'
    },
    {
        word: 'can', uppercase: 'CAN', phonetic: '/kæn/',
        meaning: 'v. 能够；可以', partOfSpeech: 'verb', grade: 1,
        story: { title: 'Luffy Can Stretch', scene: '🦒✨ 橡皮能力...', text: 'Luffy **can** stretch his body! He **can** do amazing things!', translation: '路飞可以伸展他的身体！他能做惊人的事！', sceneDescription: '路飞伸长他的手臂，击中了远处的敌人。' },
        examples: [{ sentence: 'I **can** swim.', translation: '我会游泳。', theme: 'daily' }, { sentence: 'You **can** build anything!', translation: '你可以建造任何东西！', theme: 'minecraft' }],
        visualHint: '💪 Can = 能够'
    },
    {
        word: 'car', uppercase: 'CAR', phonetic: '/kɑːr/',
        meaning: 'n. 汽车', partOfSpeech: 'noun', grade: 1,
        story: { title: 'The Yellow Car', scene: '🚗💨 黄色的车...', text: 'Bumblebee is a **car**! This **car** can transform into a robot!', translation: '大黄蜂是一辆车！这辆车可以变成机器人！', sceneDescription: '大黄蜂从汽车形态变成机器人形态。' },
        examples: [{ sentence: 'Dad drives a **car**.', translation: '爸爸开车。', theme: 'daily' }, { sentence: 'A fast **car** races by.', translation: '一辆快车飞驰而过。', theme: 'transformers' }],
        visualHint: '🚗 Car = 汽车'
    },
    {
        word: 'go', uppercase: 'GO', phonetic: '/ɡoʊ/',
        meaning: 'v. 去；走', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'go', past: 'went', ing: 'going' },
        story: { title: 'Go to the Grand Line!', scene: '⛵🌊 出发...', text: "Let's **go**! Luffy says, \"Let's **go** find One Piece!\"", translation: '走吧！路飞说，"我们去找One Piece！"', sceneDescription: '草帽团升起帆，向着伟大航路进发。' },
        verbPractice: { present: 'I **go** to school.', past: 'I **went** to school.', presentTranslation: '我去上学。', pastTranslation: '我去了学校。' },
        examples: [{ sentence: "Let's **go** home.", translation: '我们回家吧。', theme: 'daily' }, { sentence: '**Go** mine some ore!', translation: '去挖一些矿石！', theme: 'minecraft' }],
        visualHint: '🚶 Go = 去'
    },
    {
        word: 'green', uppercase: 'GREEN', phonetic: '/ɡriːn/',
        meaning: 'adj./n. 绿色的；绿色', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'The Green Ninja', scene: '🥷💚 绿色忍者...', text: 'Lloyd is the **Green** Ninja! His suit is **green**.', translation: 'Lloyd是绿色忍者！他的衣服是绿色的。', sceneDescription: 'Lloyd穿着绿色忍者服，身上散发着绿色能量。' },
        examples: [{ sentence: 'Grass is **green**.', translation: '草是绿色的。', theme: 'daily' }, { sentence: 'Creepers are **green**.', translation: '苦力怕是绿色的。', theme: 'minecraft' }],
        visualHint: '🟢 Green = 绿色'
    },
    {
        word: 'new', uppercase: 'NEW', phonetic: '/nuː/',
        meaning: 'adj. 新的', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'A New Adventure', scene: '🌟🏝️ 新的冒险...', text: 'This is a **new** island! Every day is a **new** adventure!', translation: '这是一个新岛屿！每一天都是新的冒险！', sceneDescription: '草帽团看着远方一个从未见过的岛屿。' },
        examples: [{ sentence: 'I have a **new** toy.', translation: '我有一个新玩具。', theme: 'daily' }, { sentence: 'Build a **new** house!', translation: '建一所新房子！', theme: 'minecraft' }],
        visualHint: '✨ New = 新的'
    },
    {
        word: 'old', uppercase: 'OLD', phonetic: '/oʊld/',
        meaning: 'adj. 老的；旧的', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'The Old Pirate', scene: '👴🏴‍☠️ 老海贼...', text: 'Rayleigh is an **old** pirate. He has **old** stories to tell.', translation: '雷利是一个老海贼。他有很多旧故事要讲。', sceneDescription: '雷利坐着讲述他年轻时和罗杰一起冒险的故事。' },
        examples: [{ sentence: 'My grandpa is **old**.', translation: '我爷爷年纪大了。', theme: 'daily' }, { sentence: 'An **old** temple ruins.', translation: '一座古老的神庙遗迹。', theme: 'ninjago' }],
        visualHint: '👴 Old = 老的/旧的'
    },
    {
        word: 'orange', uppercase: 'ORANGE', phonetic: '/ˈɔːrɪndʒ/',
        meaning: 'adj./n. 橙色的；橙色；橙子', partOfSpeech: 'adjective', grade: 1,
        story: { title: "Nami's Orange Trees", scene: '🍊🌳 娜美的橘子树...', text: 'Nami grows **orange** trees. The **oranges** are sweet.', translation: '娜美种植橘子树。橘子很甜。', sceneDescription: '娜美在千阳号上照料她的橘子树。' },
        examples: [{ sentence: 'I eat an **orange**.', translation: '我吃一个橙子。', theme: 'daily' }, { sentence: '**Orange** pumpkins!', translation: '橙色的南瓜！', theme: 'minecraft' }],
        visualHint: '🟠 Orange = 橙色/橙子'
    },
    {
        word: 'red', uppercase: 'RED', phonetic: '/red/',
        meaning: 'adj./n. 红色的；红色', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'Red Hair Shanks', scene: '🔴👨‍🦰 红发香克斯...', text: 'Shanks has **red** hair. His crew is the **Red** Hair Pirates.', translation: '香克斯有红色的头发。他的船员是红发海贼团。', sceneDescription: '红发香克斯站在船上，他的红色海贼旗迎风飘扬。' },
        examples: [{ sentence: 'Apples are **red**.', translation: '苹果是红色的。', theme: 'daily' }, { sentence: 'Kai is the **red** ninja.', translation: 'Kai是红色忍者。', theme: 'ninjago' }],
        visualHint: '🔴 Red = 红色'
    },
    {
        word: 'saw', uppercase: 'SAW', phonetic: '/sɔː/',
        meaning: 'v. 看见了（see的过去式）', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'see', past: 'saw', ing: 'seeing' },
        story: { title: 'We Saw the Island', scene: '👀🏝️ 我们看到了岛屿...', text: 'Luffy **saw** an island! They **saw** a mysterious figure!', translation: '路飞看到了一个岛屿！他们看到了一个神秘的身影！', sceneDescription: '路飞站在船首，指着远方。' },
        verbPractice: { present: 'I **see** a bird.', past: 'I **saw** a bird.', presentTranslation: '我看到一只鸟。', pastTranslation: '我看到了一只鸟。' },
        examples: [{ sentence: 'I **saw** a movie.', translation: '我看了一部电影。', theme: 'daily' }, { sentence: 'Steve **saw** a cave.', translation: 'Steve看到了一个洞穴。', theme: 'minecraft' }],
        visualHint: '👀⏮️ Saw = 看见了（过去）'
    },
    {
        word: 'see', uppercase: 'SEE', phonetic: '/siː/',
        meaning: 'v. 看见', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'see', past: 'saw', ing: 'seeing' },
        story: { title: 'I Can See', scene: '👁️✨ 看见...', text: 'Luffy can **see** attacks coming! I **see** danger ahead!', translation: '路飞能看到攻击来临！我看到前方有危险！', sceneDescription: '路飞闭上眼睛，用见色霸气感知周围。' },
        verbPractice: { present: 'I **see** you.', past: 'I **saw** you.', presentTranslation: '我看到你。', pastTranslation: '我看到了你。' },
        examples: [{ sentence: 'I **see** a cat.', translation: '我看到一只猫。', theme: 'daily' }, { sentence: 'Can you **see** that?', translation: '你能看到那个吗？', theme: 'minecraft' }],
        visualHint: '👁️ See = 看见'
    },
    {
        word: 'that', uppercase: 'THAT', phonetic: '/ðæt/',
        meaning: 'pron./adj. 那个', partOfSpeech: 'pronoun', grade: 1,
        story: { title: 'That Is the Treasure', scene: '👆💎 那就是宝藏...', text: '**That** is One Piece! **That** island is our goal!', translation: '那就是One Piece！那个岛屿是我们的目标！', sceneDescription: '路飞指向传说中的宝藏所在地。' },
        examples: [{ sentence: 'What is **that**?', translation: '那是什么？', theme: 'daily' }, { sentence: '**That** is a creeper!', translation: '那是一个苦力怕！', theme: 'minecraft' }],
        visualHint: '👉 That = 那个'
    },
    {
        word: 'this', uppercase: 'THIS', phonetic: '/ðɪs/',
        meaning: 'pron./adj. 这个', partOfSpeech: 'pronoun', grade: 1,
        story: { title: 'This Is My Captain', scene: '👆🏴‍☠️ 这是我的船长...', text: '**This** is Luffy! **This** hat is his treasure.', translation: '这是路飞！这顶帽子是他的宝贝。', sceneDescription: '索隆介绍路飞给新朋友。' },
        examples: [{ sentence: '**This** is my house.', translation: '这是我的房子。', theme: 'daily' }, { sentence: '**This** sword is sharp.', translation: '这把剑很锋利。', theme: 'ninjago' }],
        visualHint: '👈 This = 这个'
    },
    {
        word: 'want', uppercase: 'WANT', phonetic: '/wɑːnt/',
        meaning: 'v. 想要', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'want', past: 'wanted', ing: 'wanting' },
        story: { title: 'I Want to Be Free', scene: '🦅💭 想要自由...', text: 'Luffy says, "I **want** to be free!" We **want** to find treasure!', translation: '路飞说，"我想要自由！"我们想要找到宝藏！', sceneDescription: '路飞张开双臂，迎着海风，渴望自由。' },
        verbPractice: { present: 'I **want** a toy.', past: 'I **wanted** a toy.', presentTranslation: '我想要一个玩具。', pastTranslation: '我想要一个玩具。' },
        examples: [{ sentence: 'I **want** ice cream.', translation: '我想要冰淇淋。', theme: 'daily' }, { sentence: 'I **want** diamonds!', translation: '我想要钻石！', theme: 'minecraft' }],
        visualHint: '🙏 Want = 想要'
    },
    {
        word: 'yellow', uppercase: 'YELLOW', phonetic: '/ˈjeloʊ/',
        meaning: 'adj./n. 黄色的；黄色', partOfSpeech: 'adjective', grade: 1,
        story: { title: 'The Yellow Robot', scene: '🤖💛 黄色机器人...', text: 'Bumblebee is **yellow**! His **yellow** color is bright.', translation: '大黄蜂是黄色的！他的黄色非常明亮。', sceneDescription: '大黄蜂以汽车形态在公路上飞速行驶。' },
        examples: [{ sentence: 'Bananas are **yellow**.', translation: '香蕉是黄色的。', theme: 'daily' }, { sentence: '**Yellow** is gold color.', translation: '黄色是金子的颜色。', theme: 'minecraft' }],
        visualHint: '🟡 Yellow = 黄色'
    },

    // ===== Group 6 (Numbers & Common Verbs) =====
    {
        word: 'came', uppercase: 'CAME', phonetic: '/keɪm/',
        meaning: 'v. 来了（come的过去式）', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'come', past: 'came', ing: 'coming' },
        story: { title: 'The Giant Came', scene: '🦣💨 巨人来了...', text: 'A giant **came** to the island! Help **came** just in time!', translation: '一个巨人来到了岛上！帮助及时赶到！', sceneDescription: '一个巨大的身影出现在岛上。' },
        verbPractice: { present: 'He **comes** to visit.', past: 'He **came** yesterday.', presentTranslation: '他来拜访。', pastTranslation: '他昨天来了。' },
        examples: [{ sentence: 'Mom **came** home.', translation: '妈妈回家了。', theme: 'daily' }, { sentence: 'A zombie **came** at night.', translation: '一个僵尸在晚上来了。', theme: 'minecraft' }],
        visualHint: '🚶⏮️ Came = 来了（过去）'
    },
    {
        word: 'come', uppercase: 'COME', phonetic: '/kʌm/',
        meaning: 'v. 来', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'come', past: 'came', ing: 'coming' },
        story: { title: 'Come With Me!', scene: '👋🏴‍☠️ 跟我来...', text: '**Come** with me! **Come** on the ship!', translation: '跟我来！上船来！', sceneDescription: '路飞伸出手，邀请新朋友加入冒险。' },
        verbPractice: { present: '**Come** here.', past: 'He **came** here.', presentTranslation: '过来这里。', pastTranslation: '他来了这里。' },
        examples: [{ sentence: '**Come** and see!', translation: '来看看！', theme: 'daily' }, { sentence: 'Monsters **come** at night.', translation: '怪物在晚上来。', theme: 'minecraft' }],
        visualHint: '👋 Come = 来'
    },
    {
        word: 'eight', uppercase: 'EIGHT', phonetic: '/eɪt/',
        meaning: 'num. 八', partOfSpeech: 'number', grade: 1,
        story: { title: 'Eight Arms', scene: '🦑🌸 八只手...', text: 'Robin can grow **eight** arms! Spider has **eight** legs!', translation: '罗宾可以长出八只手臂！蜘蛛有八条腿！', sceneDescription: '罗宾使用花花果实。' },
        examples: [{ sentence: 'I am **eight** years old.', translation: '我八岁了。', theme: 'daily' }, { sentence: '**Eight** iron ingots.', translation: '八块铁锭。', theme: 'minecraft' }],
        visualHint: '8️⃣ Eight = 八'
    },
    {
        word: 'five', uppercase: 'FIVE', phonetic: '/faɪv/',
        meaning: 'num. 五', partOfSpeech: 'number', grade: 1,
        story: { title: 'Five Ninjas', scene: '🥷🥷🥷🥷🥷 五个忍者...', text: 'There are **five** ninjas! High **five**!', translation: '有五个忍者！击掌！', sceneDescription: '五个忍者站成一排。' },
        examples: [{ sentence: 'I have **five** fingers.', translation: '我有五根手指。', theme: 'daily' }, { sentence: '**Five** diamonds!', translation: '五颗钻石！', theme: 'minecraft' }],
        visualHint: '5️⃣ Five = 五'
    },
    {
        word: 'four', uppercase: 'FOUR', phonetic: '/fɔːr/',
        meaning: 'num. 四', partOfSpeech: 'number', grade: 1,
        story: { title: 'Four Emperors', scene: '👑👑👑👑 四皇...', text: 'There are **four** Emperors! **Four** great pirates!', translation: '有四个皇帝！四个伟大的海贼！', sceneDescription: '四皇的剪影在海面上显现。' },
        examples: [{ sentence: 'A table has **four** legs.', translation: '桌子有四条腿。', theme: 'daily' }, { sentence: '**Four** Autobots came.', translation: '四个汽车人来了。', theme: 'transformers' }],
        visualHint: '4️⃣ Four = 四'
    },
    {
        word: 'gave', uppercase: 'GAVE', phonetic: '/ɡeɪv/',
        meaning: 'v. 给了（give的过去式）', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'give', past: 'gave', ing: 'giving' },
        story: { title: 'Shanks Gave His Hat', scene: '👒🎁 香克斯给了帽子...', text: 'Shanks **gave** Luffy his hat! He **gave** him hope.', translation: '香克斯把他的帽子给了路飞！他给了他希望。', sceneDescription: '年幼的路飞接过香克斯的草帽。' },
        verbPractice: { present: 'I **give** a gift.', past: 'I **gave** a gift.', presentTranslation: '我给一个礼物。', pastTranslation: '我给了一个礼物。' },
        examples: [{ sentence: 'Mom **gave** me a hug.', translation: '妈妈给了我一个拥抱。', theme: 'daily' }, { sentence: 'He **gave** me diamonds.', translation: '他给了我钻石。', theme: 'minecraft' }],
        visualHint: '🎁⏮️ Gave = 给了（过去）'
    },
    {
        word: 'get', uppercase: 'GET', phonetic: '/ɡet/',
        meaning: 'v. 得到；变得', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'get', past: 'got', ing: 'getting' },
        story: { title: 'Get the Treasure!', scene: '💎🏃 得到宝藏...', text: "Let's **get** the treasure! Luffy will **get** stronger!", translation: '让我们得到宝藏！路飞会变得更强！', sceneDescription: '草帽团冲向宝藏所在地。' },
        verbPractice: { present: 'I **get** a present.', past: 'I **got** a present.', presentTranslation: '我得到一个礼物。', pastTranslation: '我得到了一个礼物。' },
        examples: [{ sentence: '**Get** up!', translation: '起来！', theme: 'daily' }, { sentence: '**Get** more wood!', translation: '获取更多木头！', theme: 'minecraft' }],
        visualHint: '🤲 Get = 得到'
    },
    {
        word: 'give', uppercase: 'GIVE', phonetic: '/ɡɪv/',
        meaning: 'v. 给', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'give', past: 'gave', ing: 'giving' },
        story: { title: 'Never Give Up', scene: '💪🔥 绝不放弃...', text: 'I will **give** my best! Luffy will never **give** up!', translation: '我会付出我的全力！路飞永远不会放弃！', sceneDescription: '路飞伸出手，帮助摔倒的朋友。' },
        verbPractice: { present: 'I **give** you a book.', past: 'I **gave** you a book.', presentTranslation: '我给你一本书。', pastTranslation: '我给了你一本书。' },
        examples: [{ sentence: '**Give** me that.', translation: '把那个给我。', theme: 'daily' }, { sentence: '**Give** him the sword.', translation: '把剑给他。', theme: 'ninjago' }],
        visualHint: '🎁 Give = 给'
    },
    {
        word: 'got', uppercase: 'GOT', phonetic: '/ɡɑːt/',
        meaning: 'v. 得到了（get的过去式）', partOfSpeech: 'verb', grade: 1,
        verbForms: { present: 'get', past: 'got', ing: 'getting' },
        story: { title: 'Luffy Got Stronger', scene: '💪⬆️ 变强了...', text: 'Luffy **got** stronger after training! They **got** the treasure!', translation: '路飞训练后变强了！他们得到了宝藏！', sceneDescription: '路飞站起来，浑身散发着强大的气息。' },
        verbPractice: { present: 'I **get** a good grade.', past: 'I **got** a good grade.', presentTranslation: '我得到好成绩。', pastTranslation: '我得到了好成绩。' },
        examples: [{ sentence: 'I **got** a new bike.', translation: '我得到了一辆新自行车。', theme: 'daily' }, { sentence: 'Steve **got** diamonds!', translation: 'Steve得到了钻石！', theme: 'minecraft' }],
        visualHint: '🤲⏮️ Got = 得到了（过去）'
    },
    {
        word: 'nine', uppercase: 'NINE', phonetic: '/naɪn/',
        meaning: 'num. 九', partOfSpeech: 'number', grade: 1,
        story: { title: 'Nine Straw Hats', scene: '👥🏴‍☠️ 九个草帽...', text: 'Luffy has **nine** nakama. **Nine** brave pirates!', translation: '路飞有九个伙伴。九个勇敢的海贼！', sceneDescription: '草帽团九位成员站在千阳号上。' },
        examples: [{ sentence: 'I go to bed at **nine**.', translation: '我九点上床睡觉。', theme: 'daily' }, { sentence: '**Nine** blocks high.', translation: '九个方块高。', theme: 'minecraft' }],
        visualHint: '9️⃣ Nine = 九'
    },
    {
        word: 'one', uppercase: 'ONE', phonetic: '/wʌn/',
        meaning: 'num./pron. 一；一个', partOfSpeech: 'number', grade: 1,
        story: { title: 'One Piece', scene: '💎🏴‍☠️ 一个宝藏...', text: '**One** Piece is the greatest treasure! Only **one** Pirate King!', translation: 'One Piece是最伟大的宝藏！只有一个海贼王！', sceneDescription: '传说中的One Piece宝藏在世界尽头闪耀。' },
        examples: [{ sentence: 'I have **one** brother.', translation: '我有一个兄弟。', theme: 'daily' }, { sentence: '**One** heart left!', translation: '只剩一颗心！', theme: 'minecraft' }],
        visualHint: '1️⃣ One = 一'
    },
    {
        word: 'seven', uppercase: 'SEVEN', phonetic: '/ˈsevn/',
        meaning: 'num. 七', partOfSpeech: 'number', grade: 1,
        story: { title: 'Seven Warlords', scene: '⚔️👥 七武海...', text: 'There are **seven** Warlords of the Sea! **Seven** great fighters!', translation: '有七个王下七武海！七个伟大的战士！', sceneDescription: '七武海的剪影在海上显现。' },
        examples: [{ sentence: 'There are **seven** days.', translation: '有七天。', theme: 'daily' }, { sentence: '**Seven** colored sheep!', translation: '七只彩色的羊！', theme: 'minecraft' }],
        visualHint: '7️⃣ Seven = 七'
    },
    {
        word: 'six', uppercase: 'SIX', phonetic: '/sɪks/',
        meaning: 'num. 六', partOfSpeech: 'number', grade: 1,
        story: { title: 'Six Elemental Ninjas', scene: '🔥💧⚡ 六元素...', text: 'There are **six** main elements! Nya is the **sixth** ninja!', translation: '有六种主要元素！Nya是第六个忍者！', sceneDescription: '六种元素的力量在忍者们周围旋转。' },
        examples: [{ sentence: 'I have **six** pencils.', translation: '我有六支铅笔。', theme: 'daily' }, { sentence: 'Stack of **six** blocks.', translation: '六个方块堆叠。', theme: 'minecraft' }],
        visualHint: '6️⃣ Six = 六'
    },
    {
        word: 'ten', uppercase: 'TEN', phonetic: '/ten/',
        meaning: 'num. 十', partOfSpeech: 'number', grade: 1,
        story: { title: 'Ten Plates of Meat', scene: '🍖🍖🍖 十盘肉...', text: 'Luffy ate **ten** plates of meat! **Ten** pieces of gold!', translation: '路飞吃了十盘肉！十块金子！', sceneDescription: '路飞面前是一堆空盘子。' },
        examples: [{ sentence: 'I count to **ten**.', translation: '我数到十。', theme: 'daily' }, { sentence: '**Ten** iron bars.', translation: '十根铁棒。', theme: 'minecraft' }],
        visualHint: '🔟 Ten = 十'
    },
    {
        word: 'three', uppercase: 'THREE', phonetic: '/θriː/',
        meaning: 'num. 三', partOfSpeech: 'number', grade: 1,
        story: { title: 'Three Sword Style', scene: '⚔️⚔️⚔️ 三刀流...', text: 'Zoro uses **three** swords! **Three** times the power!', translation: '索隆使用三把剑！三倍的力量！', sceneDescription: '索隆嘴里咬着一把刀，两手各持一把。' },
        examples: [{ sentence: 'I have **three** cats.', translation: '我有三只猫。', theme: 'daily' }, { sentence: '**Three** diamonds!', translation: '三颗钻石！', theme: 'minecraft' }],
        visualHint: '3️⃣ Three = 三'
    },
    {
        word: 'two', uppercase: 'TWO', phonetic: '/tuː/',
        meaning: 'num. 二', partOfSpeech: 'number', grade: 1,
        story: { title: 'Two Brothers', scene: '👦👦 两兄弟...', text: 'Luffy has **two** brothers. Ace and Sabo are the **two**!', translation: '路飞有两个兄弟。艾斯和萨博就是这两个！', sceneDescription: '年幼的路飞、艾斯和萨博三人结拜为兄弟。' },
        examples: [{ sentence: 'I have **two** hands.', translation: '我有两只手。', theme: 'daily' }, { sentence: '**Two** players.', translation: '两个玩家。', theme: 'minecraft' }],
        visualHint: '2️⃣ Two = 二'
    }
];

export default grade1Words;


