var wordList = [
    // #region Minna no Nihongo 0
    { english: "Practice", japanese: [["練", "れん"], ["習", "しゅう"]] },
    { english: "Review", japanese: [["復", "ふく"], ["習", "しゅう"]] },
    { english: "Grammar", japanese: [["文", "ぶん"], ["法", "ぽう"]] },
    { english: "Word", japanese: [["単", "たん"], ["語", "ご"]]  },
    { english: "Pronunciation", japanese: [["発", "はつ"], ["音", "おん"]] },
    { english: "Noun", japanese: [["名", "めい"], ["詞", "し"]] },
    { english: "Verb", japanese: [["動", "どう"], ["詞", "し"]] },
    // { english: "Adjective", japanese: [["", ""], ["", ""]] },
    // { english: "Particle", japanese: [["", ""], ["", ""]] },
    // { english: "Adverb", japanese: [["", ""], ["", ""]] },
    // #endregion

    // #region Kanji N4-1
    { english: "Owner", japanese: [["大", "おお"], ["家", "や"]] },
    { english: "Rent", japanese: [["家", "や"], ["賃", "ちん"]] },
    { english: "Politician", japanese: [["政", "せい"], ["治", "じ"], ["家", "か"]] },
    { english: "Family", japanese: [["家", "か"], ["族", "ぞく"]] },
    { english: "Clan", japanese: [["一", "いち"], ["族", "ぞく"]] },

    { english: "Parent", japanese: [["父", "ふ"], ["兄", "けい"]] },
    { english: "Older Brother-in-law", japanese: [["義", "ぎ"], ["兄", "けい"]] },
    { english: "Brothers", japanese: [["兄", "きょう"], ["弟", "だい"]] },
    { english: "Younger Brother-in-law", japanese: [["義", "ぎ"], ["弟", "てい"]] },
    
    { english: "Older Sister-in-law", japanese: [["義", "ぎ"], ["理", "り"], ["の", "の"], ["姉", "あね"]] },
    { english: "Sisters", japanese: [["姉", "し"], ["妹", "まい"]] },

    { english: "Private University", japanese: [["私", "し"], ["立", "りつ"], ["大", "だい"], ["学", "がく"]] },
    { english: "Raising Children", japanese: [["子", "こ"], ["育て", "そだて"]] },
    { english: "Physical Education", japanese: [["体", "たい"], ["育", "いく"]] },
    
    { english: "Department of Literature", japanese: [["文", "ぶん"], ["学", "がく"], ["部", "ぶ"]] },
    { english: "Subordinate", japanese: [["部", "ぶ"], ["下", "か"]] },
    { english: "Manager", japanese: [["部", "ぶ"], ["長", "ちょう"]] },
    { english: "Book Store", japanese: [["本", "ほん"], ["屋", "や"]] },
    { english: "Roof", japanese: [["屋", "や"], ["根", "ね"]] },
    { english: "Rooftop", japanese: [["屋", "おく"], ["上", "じょう"]] },
    
    { english: "Vast", japanese: [["広", "こう"], ["大", "だい"]] },
    { english: "Decline", japanese: [["低", "てい"], ["下", "か"]] },
    { english: "Lower Grades", japanese: [["低", "てい"], ["学", "がく"], ["年", "ねん"]] },

    { english: "Recently", japanese: [["最", "さい"], ["近", "きん"]] },
    { english: "Excursion, Field Trip", japanese: [["遠", "えん"], ["足", "そく"]] },
    { english: "Telescope", japanese: [["望", "ぼう"], ["遠", "えん"], ["鏡", "きょう"]] },
    { english: "Refrain", japanese: [["遠", "えん"], ["慮", "りょ"]] },
    
    { english: "Calm", japanese: [["冷", "れい"], ["静", "せい"]] },
    { english: "Rest", japanese: [["安", "あん"], ["静", "せい"]] },
    { english: "Static Electricity", japanese: [["静", "せい"], ["電", "でん"], ["気", "き"]] },
    
    { english: "Western", japanese: [["西", "せい"], ["洋", "よう"]] },
    { english: "Eastern", japanese: [["東", "とう"], ["洋", "よう"]] },
    { english: "Western Music", japanese: [["洋", "よう"], ["楽", "がく"]] },
    { english: "Western Movies", japanese: [["洋", "よう"], ["画", "が"]] },
    { english: "Uniform", japanese: [["制", "せい"], ["服", "ふく"]] },
    { english: "Western Clothes", japanese: [["洋", "よう"], ["服", "ふく"]] },
    { english: "Japanese Clothes", japanese: [["和", "わ"], ["服", "ふく"]] },
    { english: "Casual Clothes", japanese: [["私", "し"], ["服", "ふく"]] },
    
    { english: "Short Tempered", japanese: [["短", "たん"], ["気", "き"]] },
    { english: "Negative Points", japanese: [["短", "たん"], ["所", "しょ"]] },
    { english: "Polka Dots", japanese: [["水", "みず"], ["玉", "たま"]] },
    { english: "Onion", japanese: [["玉", "たま"], ["ねぎ", "ねぎ"]] },
    { english: "10yen Coin", japanese: [["十", "じゅう"], ["円", "えん"], ["玉", "だま"]] },
    { english: "New Year's Gift", japanese: [["お年", "おとし"], ["玉", "だま"]] },
    { english: "Juggling", japanese: [["お手", "おて"], ["玉", "だま"]] },
    
    { english: "Hair", japanese: [["髪", "かみ"], ["の", "の"], ["毛", "け"]] },
    { english: "Eyelashes", japanese: [["まつ", "まつ"], ["毛", "げ"]] },
    { english: "Eyebrows", japanese: [["眉", "まゆ"], ["毛", "げ"]] },
    { english: "Dog Hair", japanese: [["犬", "いぬ"], ["の", "の"], ["毛", "け"]] },
    { english: "Wool", japanese: [["羊", "よう"], ["毛", "もう"]] },
    { english: "Blanket", japanese: [["毛", "もう"], ["布", "ふ"]] },
    { english: "Yarn", japanese: [["毛", "け"], ["糸", "いと"]] },
    
    { english: "Sunlight", japanese: [["日", "にっ"], ["光", "こう"]] },
    { english: "Sightseeing", japanese: [["観", "かん"], ["光", "こう"]] },
    { english: "Clothing", japanese: [["衣", "い"], ["服", "ふく"]] },
    { english: "Changing Room", japanese: [["更", "こう"], ["衣", "い"], ["室", "しつ"]] },
    { english: "Change of Clothes", japanese: [["衣", "ころも"], ["替え", "がえ"]] },
    { english: "Apparel", japanese: [["衣", "い"], ["料", "りょう"], ["品", "ひん"]] },
    // #endregion

    // #region Kanji N4-2
    { english: "Store Manager", japanese: [["店", "てん"], ["長", "ちょう"]], tags: ["N4-2"] },
    { english: "Main Store", japanese: [["本", "ほん"], ["店", "てん"]], tags: ["N4-2"] },
    { english: "Branch", japanese: [["支", "し"], ["店", "てん"]], tags: ["N4-2"] },
    { english: "Coffee Shop", japanese: [["喫", "きっ"], ["茶", "さ"], ["店", "てん"]], tags: ["N4-2"] },
    { english: "Customer", japanese: [["お客", "おきゃく"], ["様", "さま"]], tags: ["N4-2"] },
    { english: "Visitor", japanese: [["来", "らい"], ["客", "きゃく"]], tags: ["N4-2"] },
    { english: "Guest Room", japanese: [["客", "きゃく"], ["間", "ま"]], tags: ["N4-2"] },
    { english: "Commercial Aircraft", japanese: [["旅", "りょ"], ["客", "かく"], ["機", "き"]], tags: ["N4-2"] },
    { english: "Clerk", japanese: [["店", "てん"], ["員", "いん"]], tags: ["N4-2"] },

    { english: "Father", japanese: [["父", "ちち"], ["親", "おや"]], tags: ["N4-2"] },
    { english: "Mother", japanese: [["母", "はは"], ["親", "おや"]], tags: ["N4-2"] },
    { english: "Parent & Child", japanese: [["親", "おや"], ["子", "こ"]], tags: ["N4-2"] },
    { english: "Parents", japanese: [["両", "りょう"], ["親", "しん"]], tags: ["N4-2"] },
    { english: "Best Friend", japanese: [["親", "しん"], ["友", "ゆう"]], tags: ["N4-2"] },
    { english: "Kindness", japanese: [["親", "しん"], ["切", "せつ"]], tags: ["N4-2"] },
    { english: "Stamp", japanese: [["切", "きっ"], ["手", "て"]], tags: ["N4-2"] },
    
    { english: "Bargain", japanese: [["安", "やす"], ["売り", "うり"]], tags: ["N4-2"] },
    { english: "Stand", japanese: [["売", "ばい"], ["店", "てん"]], tags: ["N4-2"] },
    { english: "Lunch Box", japanese: [["弁", "べん"], ["当", "とう"]], tags: ["N4-2"] },
    { english: "On the Day", japanese: [["当", "とう"], ["日", "じつ"]], tags: ["N4-2"] },
    { english: "True", japanese: [["本", "ほん"], ["当", "とう"]], tags: ["N4-2"] },
    
    { english: "Goods", japanese: [["品", "しな"], ["物", "もの"]], tags: ["N4-2"] },
    { english: "Number of Items", japanese: [["品", "しな"], ["数", "かず"]], tags: ["N4-2"] },
    { english: "Magic Trick", japanese: [["手", "て"], ["品", "じな"]], tags: ["N4-2"] },
    { english: "Food", japanese: [["食", "しょく"], ["品", "ひん"]], tags: ["N4-2"] },
    { english: "Merchandise", japanese: [["商", "しょう"], ["品", "ひん"]], tags: ["N4-2"] },
    { english: "Elegant", japanese: [["上", "じょう"], ["品", "ひん"]], tags: ["N4-2"] },
    { english: "Vulgar", japanese: [["下", "げ"], ["品", "ひん"]], tags: ["N4-2"] },
    
    //{ english: "", japanese: [["", ""], ["", ""]], tags: ["N4-2"] },
    // #endregion

    // #region Kanji N4-6 
    { english: "Training", japanese: [["研", "けん"], ["修", "しゅう"]] },
    { english: "Research", japanese: [["研", "けん"], ["究", "きゅう"]] },
    { english: "Researcher", japanese: [["研", "けん"], ["究", "きゅう"], ["者", "しゃ"]] },
    { english: "Research Group", japanese: [["研", "けん"], ["究", "きゅう"], ["会", "かい"]] },
    { english: "Research Institute", japanese: [["研", "けん"], ["究", "きゅう"], ["所", "じょ"]] },
    { english: "Research Presentation", japanese: [["研", "けん"], ["究", "きゅう"], ["発", "はっ"], ["表", "ぴょう"]] },

    { english: "Language", japanese: [["語", "ご"], ["学", "がく"]] },
    { english: "Japanese Language", japanese: [["日", "に"], ["本", "ほん"], ["語", "ご"]] },
    { english: "Article", japanese: [["文", "ぶん"], ["章", "しょう"]] },
    { english: "Native Language", japanese: [["母", "ぼ"], ["語", "ご"]] },
    { english: "Order", japanese: [["注", "ちゅう"], ["文", "もん"]] },
    { english: "Essay", japanese: [["作", "さく"], ["文", "ぶん"]] },
    
    { english: "English Language", japanese: [["英", "えい"], ["語", "ご"]] },
    { english: "Hero", japanese: [["英", "えい"], ["雄", "ゆう"]] },
    { english: "Culture", japanese: [["文", "ぶん"], ["化", "か"]] },
    { english: "Chemical", japanese: [["化", "か"], ["学", "がく"]] },
    { english: "Fossil", japanese: [["化", "か"], ["石", "せき"]] },
    { english: "Change", japanese: [["変", "へん"], ["化", "か"]] },
    { english: "Makeup", japanese: [["化", "け"], ["粧", "しょう"]] },
    { english: "Cosmetics", japanese: [["化", "け"], ["粧", "しょう"], ["品", "ひん"]] },
    
    { english: "Mathematics", japanese: [["数", "すう"], ["学", "がく"]] },
    { english: "Numbers", japanese: [["数", "すう"], ["字", "じ"]] },
    { english: "Several People", japanese: [["数", "すう"], ["人", "にん"]] },
    { english: "Peace of Mind", japanese: [["安", "あん"], ["心", "しん"]] },
    { english: "Center", japanese: [["中", "ちゅう"], ["心", "しん"]] },

    { english: "Young People", japanese: [["若", "わか"], ["者", "もの"]] },
    { english: "Set (Collection)", japanese: [["集", "しゅう"], ["合", "ごう"]] },
    { english: "Concentration", japanese: [["集", "しゅう"], ["中", "ちゅう"]] },
    { english: "Literary Collection", japanese: [["文", "ぶん"], ["集", "しゅう"]] },
    { english: "Recruitment", japanese: [["募", "ぼ"], ["集", "しゅう"]] },

    { english: "Get to Know", japanese: [["知り", "しり"], ["合う", "あう"]] },
    { english: "Knowledge", japanese: [["知", "ち"], ["識", "しき"]] },
    { english: "Acquaintance", japanese: [["知", "ち"], ["人", "じん"]] },
    { english: "Notification", japanese: [["通", "つう"], ["知", "ち"]] },
    { english: "Izakaya", japanese: [["居", "い"], ["酒", "ざか"], ["屋", "や"]] },
    { english: "Japanese Alcohol", japanese: [["日", "に"], ["本", "ほん"], ["酒", "しゅ"]] },
    { english: "Drunk Driving", japanese: [["飲", "いん"], ["酒", "しゅ"], ["運", "うん"], ["転", "てん"]] },
    
    { english: "Humming", japanese: [["鼻", "はな"], ["歌", "うた"]] },
    { english: "Singer", japanese: [["歌", "か"], ["手", "しゅ"]] },
    { english: "School Song", japanese: [["校", "こう"], ["歌", "か"]] },
    { english: "Speech", japanese: [["話し", "はなし"], ["声", "ごえ"]] },
    { english: "Cry", japanese: [["鳴き", "なき"], ["声", "ごえ"]] },
    { english: "Audio", japanese: [["音", "おん"], ["声", "せい"]] },
    
    { english: "Easy (Peasy)", japanese: [["楽", "らく"], ["勝", "しょう"]] },
    { english: "Instrument", japanese: [["楽", "がっ"], ["器", "き"]] },
    { english: "Music", japanese: [["音", "おん"], ["楽", "がく"]] },
    { english: "Vocal", japanese: [["声", "せい"], ["楽", "がく"]] },

    { english: "Taste Test", japanese: [["味", "あじ"], ["見", "み"]] },
    { english: "Seasoning", japanese: [["調", "ちょう"], ["味", "み"], ["料", "りょう"]] },
    { english: "Meaning", japanese: [["意", "い"], ["味", "み"]] },
    { english: "Oil", japanese: [["石", "せき"], ["油", "ゆ"]] },
    { english: "Soy Sauce", japanese: [["醤", "しょう"], ["油", "ゆ"]] },

    { english: "Sun", japanese: [["太", "たい"], ["陽", "よう"]] },
    { english: "Pacific Ocean", japanese: [["太", "たい"], ["平", "へい"], ["洋", "よう"]] },
    { english: "Long and Thin", japanese: [["細", "ほそ"], ["長い", "ながい"]] },
    { english: "Detail", japanese: [["明", "めい"], ["細", "さい"]] },
    
    { english: "Small Plates", japanese: [["小", "こ"], ["皿", "ざら"]] },
    { english: "Side Plate", japanese: [["取", "とり"], ["皿", "ざら"]] },
    { english: "Ashtray", japanese: [["灰", "はい"], ["皿", "ざら"]] },
    { english: "Dinner", japanese: [["夕", "ゆう"], ["飯", "はん"]] },
    { english: "Rice Cooker", japanese: [["炊", "すい"], ["飯", "はん"], ["器", "き"]] },
    { english: "Lunch", japanese: [["昼", "ひる"], ["ご", "ご"], ["飯", "はん"]] },
    
    { english: "Flour", japanese: [["小", "こ"], ["麦", "むぎ"], ["粉", "こ"]] },
    { english: "Barley", japanese: [["大", "おお"], ["麦", "むぎ"]] },
    { english: "Barley Tea", japanese: [["麦", "むぎ"], ["茶", "ちゃ"]] },
    { english: "Straw Hat", japanese: [["麦", "むぎ"], ["藁", "わら"], ["帽", "ぼう"], ["子", "し"]] },
    // #endregion

    // { english: "", japanese: [["", ""], ["", ""]] },
];