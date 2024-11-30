var wordList = [
    // #region Minna no Nihongo 0
    { english: "Grammar", japanese: [["文", "ぶん"], ["法", "ぽう"]] },
    { english: "Word", japanese: [["単", "たん"], ["語", "ご"]]  },
    { english: "Pronunciation", japanese: [["発", "はつ"], ["音", "おん"]] },
    { english: "Noun", japanese: [["名", "めい"], ["詞", "し"]] },
    { english: "Verb", japanese: [["動", "どう"], ["詞", "し"]] },
    // { english: "Adjective", japanese: [["", ""], ["", ""]] },
    // { english: "Particle", japanese: [["", ""], ["", ""]] },
    // { english: "Adverb", japanese: [["", ""], ["", ""]] },
    // #endregion

    // #region Kanji N5-2
    { english: "Monday", japanese: [["月", "げつ"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },
    { english: "This Month", japanese: [["今", "こん"], ["月", "げつ"]], tags: ["N5-2"] },
    { english: "Tuesday", japanese: [["火", "か"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },
    
    { english: "Wednesday", japanese: [["水", "すい"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },
    { english: "Perfume", japanese: [["香", "こう"], ["水", "すい"]], tags: ["N5-2"] },
    { english: "Big Tree", japanese: [["大", "たい"], ["木", "ぼく"]], tags: ["N5-2"] },
    { english: "Thursday", japanese: [["木", "もく"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },

    { english: "Friday", japanese: [["金", "きん"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },
    { english: "Cash", japanese: [["現", "げん"], ["金", "きん"]], tags: ["N5-2"] },
    { english: "Saturday", japanese: [["土", "ど"], ["曜", "よう"], ["日", "び"]], tags: ["N5-2"] },
    
    { english: "Father's Day", japanese: [["父", "ちち"], ["の", "の"], ["日", "ひ"]], tags: ["N5-2"] },
    { english: "Birthday", japanese: [["誕", "たん"], ["生", "じょう"], ["日", "び"]], tags: ["N5-2"] },
    { english: "Holiday", japanese: [["休", "きゅう"], ["日", "じつ"]], tags: ["N5-2"] },
    { english: "Date of Birth", japanese: [["生", "せい"], ["年", "ねん"], ["月", "がっ"], ["日", "ぴ"]], tags: ["N5-2"] },
    // #endregion

    // #region Kanji N5-3
    { english: "Three People", japanese: [["三", "さん"], ["人", "にん"]], tags: ["N5-3"] },
    { english: "Big Mouth", japanese: [["大きい", "おおきい"], ["口", "くち"]], tags: ["N5-3"] },
    { english: "Lipstick", japanese: [["口", "くち"], ["紅", "べに"]], tags: ["N5-3"] },
    { english: "Ticket Gate", japanese: [["改", "かい"], ["札", "さつ"], ["口", "ぐち"]], tags: ["N5-3"] },
    { english: "Population", japanese: [["人", "じん"], ["口", "こう"]], tags: ["N5-3"] },
    
    { english: "Alarm Clock", japanese: [["目", "め"], ["覚まし", "ざまし"], ["時", "と"], ["計", "けい"]], tags: ["N5-3"] },
    { english: "Eye Drops", japanese: [["目", "め"], ["薬", "ぐすり"]], tags: ["N5-3"] },
    { english: "First (In Order)", japanese: [["一つ", "ひとつ"], ["目", "め"]], tags: ["N5-3"] },
    { english: "Purpose", japanese: [["目", "もく"], [" ", "てき"]], tags: ["N5-3"] },
    { english: "Eye/Ear/Throat Specialist", japanese: [["耳", "じ"], ["鼻", "び"], ["科", "か"]], tags: ["N5-3"] },
    
    { english: "Letter", japanese: [["手", "て"], ["紙", "がみ"]], tags: ["N5-3"] },
    { english: "Stamp", japanese: [["切", "きっ"], ["手", "て"]], tags: ["N5-3"] },
    { english: "Handshake", japanese: [["握", "あく"], ["手", "しゅ"]], tags: ["N5-3"] },
    { english: "Driver (Profession)", japanese: [["運", "うん"], ["転", "てん"], ["手", "しゅ"]], tags: ["N5-3"] },
    { english: "Limbs", japanese: [["手", "て"], ["足", "あし"]], tags: ["N5-3"] },
    
    { english: "Firepower", japanese: [["火", "か"], ["力", "りょく"]], tags: ["N5-3"] },
    { english: "Cooperation", japanese: [["協", "きょう"], ["力", "りょく"]], tags: ["N5-3"] },
    { english: "Eyesight", japanese: [["視", "し"], ["力", "りょく"]], tags: ["N5-3"] },
    { english: "Academic Ability", japanese: [["学", "がく"], ["力", "りょく"]], tags: ["N5-3"] },
    { english: "King", japanese: [["王", "おう"], ["様", "さま"]], tags: ["N5-3"] },
    // #endregion

    // #region Kanji N5-4
    { english: "Mt. Fuji", japanese: [["富", "ふ"], ["士", "じ"], ["山", "さん"]], tags: ["N5-4"] },
    { english: "Volcano", japanese: [["火", "か"], ["山", "ざん"]], tags: ["N5-4"] },
    { english: "Amazon River", japanese: [["アマゾン", "あまぞん"], ["川", "がわ"]], tags: ["N5-4"] },
    
    { english: "Rice Field", japanese: [["田", "たん"], ["圃", "ぼ"]], tags: ["N5-4"] },
    { english: "Paddy Field", japanese: [["水", "すい"], ["田", "でん"]], tags: ["N5-4"] },
    { english: "Pebble", japanese: [["小", "こ"], ["石", "いし"]], tags: ["N5-4"] },
    { english: "Jewelry", japanese: [["宝", "ほう"], ["石", "せき"]], tags: ["N5-4"] },
    
    { english: "Vase", japanese: [["花", "か"], ["瓶", "びん"]], tags: ["N5-4"] },
    { english: "Fireworks", japanese: [["花", "はな"], ["火", "び"]], tags: ["N5-4"] },
    { english: "Bouquet", japanese: [["花", "はな"], ["束", "たば"]], tags: ["N5-4"] },
    { english: "Bamboo Shoots", japanese: [["竹", "たけ"], ["の", "の"], ["子", "こ"]], tags: ["N5-4"] },
    { english: "Bamboo Forest", japanese: [["竹", "ちく"], ["林", "りん"]], tags: ["N5-4"] },
    
    { english: "Heavy Rain", japanese: [["大", "おお"], ["雨", "あめ"]], tags: ["N5-4"] },
    { english: "Caterpillar", japanese: [["毛", "け"], ["虫", "むし"]], tags: ["N5-4"] },
    { english: "Cavity", japanese: [["虫", "むし"], ["歯", "ば"]], tags: ["N5-4"] },
    { english: "Insect", japanese: [["昆", "こん"], ["虫", "ちゅう"]], tags: ["N5-4"] },
    // #endregion

    // #region Kanji N5-5
    { english: "Older", japanese: [["年", "とし"], ["上", "うえ"]], tags: ["N5-5"] },
    { english: "Good", japanese: [["上", "じょう"], ["手", "ず"]], tags: ["N5-5"] },
    { english: "Younger", japanese: [["年", "とし"], ["下", "した"]], tags: ["N5-5"] },
    { english: "Poor, Bad", japanese: [["下", "へ"], ["手", "た"]], tags: ["N5-5"] },
    { english: "Up and Down", japanese: [["上", "じょう"], ["下", "げ"]], tags: ["N5-5"] },

    { english: "Turn Left", japanese: [["左", "さ"], ["折", "せつ"]], tags: ["N5-5"] },
    { english: "Turn Right", japanese: [["右", "う"], ["折", "せつ"]], tags: ["N5-5"] },
    
    { english: "Outside, Outer", japanese: [["外", "そと"], ["側", "がわ"]], tags: ["N5-5"] },
    { english: "Going Out", japanese: [["外", "がい"], ["出", "しゅつ"]], tags: ["N5-5"] },
    { english: "Inside, Inner", japanese: [["内", "うち"], ["側", "がわ"]], tags: ["N5-5"] },
    { english: "Inside the Premises", japanese: [["構", "こう"], ["内", "ない"]], tags: ["N5-5"] },
    { english: "Domestic", japanese: [["国", "こく"], ["内", "ない"]], tags: ["N5-5"] },

    { english: "Underwater", japanese: [["水", "すい"], ["中", "ちゅう"]], tags: ["N5-5"] },
    { english: "At Work", japanese: [["仕", "し"], ["事", "ごと"], ["中", "ちゅう"]], tags: ["N5-5"] },
    { english: "During Class", japanese: [["授", "じゅ"], ["業", "ぎょう"], ["中", "ちゅう"]], tags: ["N5-5"] },
    { english: "All Day", japanese: [["一", "いち"], ["日", "にち"], ["中", "じゅう"]], tags: ["N5-5"] },
    { english: "En Route", japanese: [["途", "と"], ["中", "ちゅう"]], tags: ["N5-5"] },
    // #endregion

    // #region Kanji N5-6
    { english: "School", japanese: [["学", "がっ"], ["校", "こう"]], tags: ["N5-6"] },
    { english: "University", japanese: [["大", "だい"], ["学", "がく"]], tags: ["N5-6"] },
    { english: "Admission", japanese: [["入", "にゅう"], ["学", "がく"]], tags: ["N5-6"] },
    { english: "Visit", japanese: [["見", "けん"], ["学", "がく"]], tags: ["N5-6"] },
    { english: "Principal", japanese: [["校", "こう"], ["長", "ちょう"]], tags: ["N5-6"] },
    { english: "School Closure", japanese: [["休", "きゅう"], ["校", "こう"]], tags: ["N5-6"] },
    { english: "Transfer", japanese: [["転", "てん"], ["校", "こう"]], tags: ["N5-6"] },
    
    { english: "Teacher", japanese: [["先", "せん"], ["生", "せい"]], tags: ["N5-6"] },
    { english: "Last Month", japanese: [["先", "せん"], ["月", "げつ"]], tags: ["N5-6"] },
    { english: "Daily Life", japanese: [["生", "せい"], ["活", "かつ"]], tags: ["N5-6"] },
    { english: "Life", japanese: [["人", "じん"], ["生", "せい"]], tags: ["N5-6"] },
    { english: "Lifetime", japanese: [["一", "いっ"], ["生", "しょう"]], tags: ["N5-6"] },
    
    { english: "Places of Interest", japanese: [["名", "めい"], ["所", "しょ"]], tags: ["N5-6"] },
    { english: "Place Name", japanese: [["地", "ち"], ["名", "めい"]], tags: ["N5-6"] },
    { english: "Famous", japanese: [["有", "ゆう"], ["名", "めい"]], tags: ["N5-6"] },
    { english: "Character, Letter", japanese: [["文", "も"], ["字", "じ"]], tags: ["N5-6"] },
    
    { english: "Japanese Person", japanese: [["日", "に"], ["本", "ほん"], ["人", "じん"]], tags: ["N5-6"] },
    { english: "Break Time", japanese: [["休み", "やすみ"], ["時", "じ"], ["間", "かん"]], tags: ["N5-6"] },
    // #endregion

    // #region Kanji N5-7
    { english: "Hate", japanese: [["大", "だい"], ["嫌い", "きらい"]], tags: ["N5-7"] },
    { english: "Important, Precious", japanese: [["大", "たい"], ["切", "せつ"]], tags: ["N5-7"] },
    { english: "Elementary School", japanese: [["小", "しょう"], ["学", "がっ"], ["校", "こう"]], tags: ["N5-7"] },
    { english: "Small Change, Coins", japanese: [["小", "こ"], ["銭", "ぜに"]], tags: ["N5-7"] },
    
    { english: "Highschool Student", japanese: [["高", "こう"], ["校", "こう"], ["生", "せい"]], tags: ["N5-7"] },
    { english: "Friend", japanese: [["友", "とも"], ["達", "だち"]], tags: ["N5-7"] },

    { english: "Entrance", japanese: [["入", "いり"], ["口", "ぐち"]], tags: ["N5-7"] },
    { english: "Attendance", japanese: [["出", "しゅうっ"], ["席", "せき"]], tags: ["N5-7"] },
    
    { english: "School Gate", japanese: [["校", "こう"], ["門", "もん"]], tags: ["N5-7"] },
    { english: "Main Gate", japanese: [["正", "せい"], ["門", "もん"]], tags: ["N5-7"] },
    { english: "Specialty", japanese: [["専", "せん"], ["門", "もん"]], tags: ["N5-7"] },
    { english: "Introduction, Primer", japanese: [["入", "にゅう"], ["門", "もん"]], tags: ["N5-7"] },
    { english: "Physical Strength", japanese: [["体", "たい"], ["力", "りょく"]], tags: ["N5-7"] },
    { english: "Body Weight", japanese: [["体", "たい"], ["重", "じゅう"]], tags: ["N5-7"] },
    // #endregion

    // #region Kanji N5-8
    { english: "Grandfather", japanese: [["祖", "そ"], ["父", "ふ"]], tags: ["N5-8"] },
    { english: "Grandmother", japanese: [["祖", "そ"], ["母", "ぼ"]], tags: ["N5-8"] },
    { english: "Alma Mater", japanese: [["母", "ぼ"], ["校", "こう"]], tags: ["N5-8"] },
    { english: "Parents", japanese: [["父", "ふ"], ["母", "ぼ"]], tags: ["N5-8"] },
    
    { english: "Children", japanese: [["子", "こ"], ["ども", "ども"]], tags: ["N5-8"] },
    { english: "Twins", japanese: [["双", "ふた"], ["子", "ご"]], tags: ["N5-8"] },
    { english: "Boy", japanese: [["男", "おとこ"], ["の", "の"], ["子", "こ"]], tags: ["N5-8"] },
    { english: "Man", japanese: [["男", "おとこ"], ["の", "の"], ["人", "ひと"]], tags: ["N5-8"] },
    { english: "Boys", japanese: [["男", "だん"], ["子", "し"]], tags: ["N5-8"] },
    { english: "Men", japanese: [["男", "だん"], ["性", "せい"]], tags: ["N5-8"] },
    
    { english: "Girl", japanese: [["女", "おんな"], ["の", "の"], ["子", "こ"]], tags: ["N5-8"] },
    { english: "Woman", japanese: [["女", "おんな"], ["の", "の"], ["人", "ひと"]], tags: ["N5-8"] },
    { english: "Girls", japanese: [["女", "じょ"], ["子", "し"]], tags: ["N5-8"] },
    { english: "Women", japanese: [["女", "じょ"], ["性", "せい"]], tags: ["N5-8"] },
    { english: "Gender", japanese: [["男", "だん"], ["女", "じょ"]], tags: ["N5-8"] },
    { english: "Girlfrield, Her", japanese: [["彼", "かの"], ["女", "じょ"]], tags: ["N5-8"] },
    { english: "Actress", japanese: [["女", "じょ"], ["優", "ゆう"]], tags: ["N5-8"] },
    
    { english: "Puppy", japanese: [["子", "こ"], ["犬", "いぬ"]], tags: ["N5-8"] },
    { english: "Small Dogs", japanese: [["小", "こ"], ["型", "がた"], ["犬", "けん"]], tags: ["N5-8"] },
    { english: "Guide Dogs", japanese: [["盲", "もう"], ["導", "どう"], ["犬", "けん"]], tags: ["N5-8"] },
    // #endregion

    // #region Kanji N5-9
    { english: "Cherry Blossom Viewing", japanese: [["花", "はな"], ["見", "み"]], tags: ["N5-9"] },
    { english: "Moon Viewing", japanese: [["月", "つき"], ["見", "み"]], tags: ["N5-9"] },
    { english: "Opinion", japanese: [["意", "い"], ["見", "けん"]], tags: ["N5-9"] },
    { english: "Newspaper", japanese: [["新", "しん"], ["聞", "ぶん"]], tags: ["N5-9"] },
    
    { english: "Next Year", japanese: [["来", "らい"], ["年", "ねん"]], tags: ["N5-9"] },
    // #endregion

    // #region Kanji N5-10
    { english: "Brown Rice", japanese: [["玄", "げん"], ["米", "こめ"]], tags: ["N5-10"] },
    { english: "White Rice", japanese: [["白", "はく"], ["米", "まい"]], tags: ["N5-10"] },
    { english: "Black Tea", japanese: [["紅", "こう"], ["茶", "ちゃ"]], tags: ["N5-10"] },
    { english: "Brown", japanese: [["茶", "ちゃ"], ["色", "いろ"]], tags: ["N5-10"] },
    
    { english: "Milk", japanese: [["牛", "ぎゅう"], ["乳", "にゅう"]], tags: ["N5-10"] },
    { english: "Wagyu", japanese: [["和", "わ"], ["牛", "ぎゅう"]], tags: ["N5-10"] },
    { english: "Beef", japanese: [["牛", "ぎゅう"], ["肉", "にく"]], tags: ["N5-10"] },
    { english: "Yakiniku", japanese: [["焼", "やき"], ["肉", "にく"]], tags: ["N5-10"] },
    { english: "Chicken Meat", japanese: [["鶏", "とり"], ["肉", "にく"]], tags: ["N5-10"] },
    
    { english: "Grilled Fish", japanese: [["焼", "やき"], ["魚", "ざかな"]], tags: ["N5-10"] },
    { english: "Fish Market", japanese: [["魚", "うお"], ["市", "いち"], ["場", "ば"]], tags: ["N5-10"] },
    { english: "Mermaid", japanese: [["人", "にん"], ["魚", "ぎょ"]], tags: ["N5-10"] },
    { english: "Goldfish", japanese: [["金", "きん"], ["魚", "ぎょ"]], tags: ["N5-10"] },
    { english: "Ark Shell (Red)", japanese: [["赤", "あか"], ["貝", "がい"]], tags: ["N5-10"] },
    { english: "Seashell", japanese: [["貝", "かい"], ["殻", "がら"]], tags: ["N5-10"] },
    
    { english: "Favorite Food", japanese: [["大", "だい"], ["好", "こう"], ["物", "ぶつ"]], tags: ["N5-10"] },
    { english: "Shopping", japanese: [["買い", "かい"], ["物", "もの"]], tags: ["N5-10"] },
    { english: "Food", japanese: [["食べ", "たべ"], ["物", "もの"]], tags: ["N5-10"] },
    { english: "Price", japanese: [["物", "ぶっ"], ["価", "か"]], tags: ["N5-10"] },
    // #endregion

    // #region Kanji N5-11
    { english: "Time", japanese: [["時", "じ"], ["間", "かん"]], tags: ["N5-11"] },
    { english: "Daytime", japanese: [["昼", "ひる"], ["間", "ま"]], tags: ["N5-11"] },
    { english: "Fellow", japanese: [["仲", "なか"], ["間", "ま"]], tags: ["N5-11"] },
    { english: "Period", japanese: [["期", "き"], ["間", "かん"]], tags: ["N5-11"] },
    
    { english: "Half a Year", japanese: [["半", "はん"], ["年", "とし"]], tags: ["N5-11"] },
    { english: "Half", japanese: [["半", "はん"], ["分", "ぶん"]], tags: ["N5-11"] },
    
    { english: "What Hour", japanese: [["何", "なん"], ["時", "じ"]], tags: ["N5-11"] },
    { english: "What Day of the Week", japanese: [["何", "なん"], ["曜", "よう"], ["日", "び"]], tags: ["N5-11"] },
    
    { english: "Dinner", japanese: [["夕", "ゆう"], ["食", "しょく"]], tags: ["N5-11"] },
    { english: "Evening", japanese: [["夕", "ゆう"], ["方", "がた"]], tags: ["N5-11"] },
    { english: "Tohoku Region", japanese: [["東", "とう"], ["北", "ほく"], ["地", "ち"], ["方", "ほう"]], tags: ["N5-11"] },
    { english: "How to Read", japanese: [["読み", "よみ"], ["方", "かた"]], tags: ["N5-11"] },
    { english: "How to Write", japanese: [["書き", "かき"], ["方", "かた"]], tags: ["N5-11"] },
    { english: "Method", japanese: [["方", "ほう"], ["法", "ほう"]], tags: ["N5-11"] },
    { english: "Direction", japanese: [["方", "ほう"], ["向", "こう"]], tags: ["N5-11"] },
    // #endregion
    
    // #region Kanji N5-12
    { english: "Cedar Forest", japanese: [["杉", "すぎ"], ["林", "ばやし"]], tags: ["N5-12"] },
    { english: "Mountain Forest", japanese: [["山", "さん"], ["林", "りん"]], tags: ["N5-12"] },
    { english: "Forest", japanese: [["森", "しん"], ["林", "りん"]], tags: ["N5-12"] },
    
    { english: "Fields", japanese: [["田", "た"], ["畑", "はた"]], tags: ["N5-12"] },
    { english: "Rocky Mountain", japanese: [["岩", "いわ"], ["山", "やま"]], tags: ["N5-12"] },
    { english: "Lava", japanese: [["溶", "よう"], ["岩", "がん"]], tags: ["N5-12"] },
    
    { english: "Sound Quality", japanese: [["音", "ね"], ["色", "いろ"]], tags: ["N5-12"] },
    
    { english: "Dawn", japanese: [["明け", "あけ"], ["方", "がた"]], tags: ["N5-12"] },
    { english: "Explanation", japanese: [["説", "せつ"], ["明", "めい"]], tags: ["N5-12"] },
    { english: "Light and Dark", japanese: [["明", "めい"], ["暗", "あん"]], tags: ["N5-12"] },
    { english: "Memorization", japanese: [["暗", "あん"], ["記", "き"]], tags: ["N5-12"] },
    { english: "Mental Arithmetic", japanese: [["暗", "あん"], ["算", "ざん"]], tags: ["N5-12"] },
    // #endregion
    
    // #region Kanji N5-13
    { english: "Words", japanese: [["言", "こと"], ["葉", "ば"]], tags: ["N5-13"] },
    { english: "Dialect", japanese: [["方", "ほう"], ["言", "げん"]], tags: ["N5-13"] },
    { english: "Message", japanese: [["伝", "でん"], ["言", "ごん"]], tags: ["N5-13"] },
    { english: "Dictionary", japanese: [["辞", "じ"], ["書", "しょ"]], tags: ["N5-13"] },
    { english: "Calligraphy (Artistic)", japanese: [["書", "しょ"], ["道", "どう"]], tags: ["N5-13"] },
    
    { english: "Reading", japanese: [["読", "どく"], ["書", "しょ"]], tags: ["N5-13"] },
    { english: "Reading Aloud", japanese: [["音", "おん"], ["読", "どく"]], tags: ["N5-13"] },
    { english: "Phone", japanese: [["電", "でん"], ["話", "わ"]], tags: ["N5-13"] },
    { english: "Sign Language", japanese: [["手", "しゅ"], ["話", "わ"]], tags: ["N5-13"] },
    
    { english: "Meal", japanese: [["食", "しょく"], ["事", "じ"]], tags: ["N5-13"] },
    { english: "Cafeteria", japanese: [["食", "しょく"], ["堂", "どう"]], tags: ["N5-13"] },
    { english: "Restaurant", japanese: [["飲", "いん"], ["食", "しょく"], ["店", "てん"]], tags: ["N5-13"] },
    
    { english: "Buying and Selling", japanese: [["売", "ばい"], ["買", "ばい"]], tags: ["N5-13"] },
    // #endregion
    
    // #region Kanji N5-14
    { english: "Downtown", japanese: [["下", "した"], ["町", "まち"]], tags: ["N5-14"] },
    { english: "Mayor", japanese: [["町", "ちょう"], ["長", "ちょう"]], tags: ["N5-14"] },
    { english: "In Town", japanese: [["町", "ちょう"], ["内", "ない"]], tags: ["N5-14"] },
    { english: "Horyu-ji", japanese: [["法", "ほう"], ["隆", "りゅう"], ["寺", "じ"]], tags: ["N5-14"] },
    
    { english: "Electricity", japanese: [["電", "でん"], ["気", "き"]], tags: ["N5-14"] },
    { english: "Train", japanese: [["電", "でん"], ["車", "しゃ"]], tags: ["N5-14"] },
    { english: "Electric Power", japanese: [["電", "でん"], ["力", "りょく"]], tags: ["N5-14"] },
    { english: "Wheelchair", japanese: [["車", "くるま"], ["椅", "い"], ["子", "す"]], tags: ["N5-14"] },
    { english: "Bicycle", japanese: [["自", "じ"], ["転", "てん"], ["車", "しゃ"]], tags: ["N5-14"] },
    { english: "Inside the Car", japanese: [["車", "しゃ"], ["内", "ない"]], tags: ["N5-14"] },
    
    { english: "East Exit", japanese: [["東", "ひがし"], ["口", "ぐち"]], tags: ["N5-14"] },
    { english: "Kanto Region", japanese: [["関", "かん"], ["東", "とう"], ["地", "ち"], ["方", "ほう"]], tags: ["N5-14"] },
    { english: "West Exit", japanese: [["西", "にし"], ["口", "ぐち"]], tags: ["N5-14"] },
    
    { english: "South Exit", japanese: [["南", "みなみ"], ["口", "ぐち"]], tags: ["N5-14"] },
    { english: "Southeast Asia", japanese: [["東", "とう"], ["南", "なん"], ["アジア", "あじあ"]], tags: ["N5-14"] },
    { english: "Tropical", japanese: [["南", "なん"], ["国", "ごく"]], tags: ["N5-14"] },
    { english: "North Exit", japanese: [["北", "きた"], ["口", "ぐち"]], tags: ["N5-14"] },
    { english: "Northwest", japanese: [["北", "ほく"], ["西", "せい"]], tags: ["N5-14"] },
    // #endregion
    
    // #region Kanji N5-15
    { english: "New Year", japanese: [["新", "しん"], ["年", "ねん"]], tags: ["N5-15"] },
    { english: "New Car", japanese: [["新", "しん"], ["車", "しゃ"]], tags: ["N5-15"] },
    { english: "New Employee", japanese: [["新", "しん"], ["入", "にゅう"], ["社", "しゃ"], ["員", "いん"]], tags: ["N5-15"] },
    { english: "Secondhand Book", japanese: [["古", "ふる"], ["本", "ほん"]], tags: ["N5-15"] },
    { english: "Used Car", japanese: [["中", "ちゅう"], ["古", "こ"], ["車", "しゃ"]], tags: ["N5-15"] },
    
    { english: "For Many Years", japanese: [["長", "なが"], ["年", "ねん"]], tags: ["N5-15"] },
    { english: "Company President", japanese: [["社", "しゃ"], ["長", "ちょう"]], tags: ["N5-15"] },
    { english: "Eldest Daughter", japanese: [["長", "ちょう"], ["女", "じょ"]], tags: ["N5-15"] },
    { english: "Safety", japanese: [["安", "あん"], ["全", "ぜん"]], tags: ["N5-15"] },
    
    { english: "A Large Number of", japanese: [["多", "た"], ["数", "すう"]], tags: ["N5-15"] },
    { english: "Somewhat", japanese: [["多", "た"], ["少", "しょう"]], tags: ["N5-15"] },
    { english: "Boy", japanese: [["少", "しょう"], ["年", "ねん"]], tags: ["N5-15"] },
    { english: "Girl", japanese: [["少", "しょう"], ["女", "じょ"]], tags: ["N5-15"] },
    { english: "A Small Number of", japanese: [["少", "しょう"], ["数", "すう"]], tags: ["N5-15"] },
    
    { english: "New Year's Day", japanese: [["元", "がん"], ["日", "じつ"]], tags: ["N5-15"] },
    { english: "Fine, Well", japanese: [["元", "げん"], ["気", "き"]], tags: ["N5-15"] },
    { english: "Feeling (Mood)", japanese: [["気", "き"], ["分", "ぶん"]], tags: ["N5-15"] },
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
    
    { english: "Convenient", japanese: [["便", "べん"], ["利", "り"]], tags: ["N4-2"] },
    { english: "Airmail", japanese: [["航", "こう"], ["空", "くう"], ["便", "びん"]], tags: ["N4-2"] },
    { english: "Letter Paper", japanese: [["便", "びん"], ["箋", "せん"]], tags: ["N4-2"] },
    { english: "Post Office", japanese: [["郵", "ゆう"], ["便", "びん"], ["局", "きょく"]], tags: ["N4-2"] },
    { english: "Use (Application)", japanese: [["利", "り"], ["用", "よう"]], tags: ["N4-2"] },
    { english: "Interest", japanese: [["利", "り"], ["子", "し"]], tags: ["N4-2"] },
    
    { english: "How to Use", japanese: [["使い", "つかい"], ["方", "かた"]], tags: ["N4-2"] },
    { english: "Ambassador", japanese: [["大", "たい"], ["使", "し"]], tags: ["N4-2"] },
    { english: "Use (Physical/Tools)", japanese: [["使", "し"], ["用", "よう"]], tags: ["N4-2"] },
    { english: "Bank", japanese: [["銀", "ぎん"], ["行", "こう"]], tags: ["N4-2"] },
    { english: "Silver", japanese: [["銀", "ぎん"], ["色", "いろ"]], tags: ["N4-2"] },
    
    { english: "Black and White", japanese: [["白", "しろ"], ["黒", "くろ"]], tags: ["N4-2"] },
    { english: "Swan", japanese: [["白", "はく"], ["鳥", "ちょう"]], tags: ["N4-2"] },
    { english: "Black Pepper", japanese: [["黒", "くろ"], ["胡", "こ"], ["椒", "しょう"]], tags: ["N4-2"] },
    { english: "Pitch Black", japanese: [["真っ", "まっ"], ["黒", "くろ"]], tags: ["N4-2"] },
    { english: "Profit", japanese: [["黒", "くろ"], ["字", "じ"]], tags: ["N4-2"] },
    { english: "Black Belt", japanese: [["黒", "くろ"], ["帯", "くろ"]], tags: ["N4-2"] },
    { english: "Blackboard", japanese: [["黒", "こく"], ["板", "ばん"]], tags: ["N4-2"] },
    
    { english: "Origami", japanese: [["折り", "おり"], ["紙", "がみ"]], tags: ["N4-2"] },
    { english: "Paper (with purpose)", japanese: [["用", "よう"], ["紙", "し"]], tags: ["N4-2"] },
    { english: "Newspaper Paper", japanese: [["新", "しん"], ["聞", "ぶん"], ["紙", "し"]], tags: ["N4-2"] },
    
    { english: "Every Morning", japanese: [["毎", "まい"], ["朝", "あさ"]], tags: ["N4-2"] },
    { english: "Sunrise", japanese: [["朝", "あさ"], ["日", "ひ"]], tags: ["N4-2"] },
    { english: "Breakfasat", japanese: [["朝", "ちょう"], ["食", "しょく"]], tags: ["N4-2"] },
    { english: "Morning and Evening", japanese: [["朝", "あさ"], ["晩", "ばん"]], tags: ["N4-2"] },
    { english: "Dinner", japanese: [["晩", "ばん"], ["ご", "ご"], ["飯", "はん"]], tags: ["N4-2"] },
    { english: "Tonight", japanese: [["今", "こん"], ["晩", "ばん"]], tags: ["N4-2"] },
    { english: "This Morning", japanese: [["今", "け"], ["朝", "さ"]], tags: ["N4-2"] },
    
    { english: "Lunch", japanese: [["昼", "ちゅう"], ["食", "しょく"]], tags: ["N4-2"] },
    { english: "Night Road", japanese: [["夜", "よ"], ["道", "みち"]], tags: ["N4-2"] },
    { english: "Midnight", japanese: [["夜", "よ"], ["中", "なか"]], tags: ["N4-2"] },
    { english: "Tonight", japanese: [["今", "こん"], ["夜", "や"]], tags: ["N4-2"] },
    { english: "Late Night", japanese: [["深", "しん"], ["夜", "や"]], tags: ["N4-2"] },
    { english: "Late-night Snack", japanese: [["夜", "や"], ["食", "しょく"]], tags: ["N4-2"] },
    { english: "Lunch Break", japanese: [["昼", "ひる"], ["休み", "やすみ"]], tags: ["N4-2"] },
    
    { english: "Name", japanese: [["名", "な"], ["前", "まえ"]], tags: ["N4-2"] },
    { english: "Approximately", japanese: [["前", "ぜん"], ["後", "ご"]], tags: ["N4-2"] },
    { english: "First Half", japanese: [["前", "ぜん"], ["半", "はん"]], tags: ["N4-2"] },
    { english: "Second Half", japanese: [["後", "こう"], ["半", "はん"]], tags: ["N4-2"] },
    { english: "Front and Back (Physical)", japanese: [["前", "まえ"], ["後ろ", "うしろ"]], tags: ["N4-2"] },
    { english: "Front, Back, Left, and Right", japanese: [["前", "ぜん"], ["後", "ご"], ["左", "さ"], ["右", "ゆう"]], tags: ["N4-2"] },
    
    { english: "A.M.", japanese: [["午", "ご"], ["前", "ぜん"]], tags: ["N4-2"] },
    { english: "P.M.", japanese: [["午", "ご"], ["後", "ご"]], tags: ["N4-2"] },
    { english: "In the morning", japanese: [["午", "ご"], ["前", "ぜん"], ["中", "ちゅう"]], tags: ["N4-2"] },
    { english: "Noon", japanese: [["正", "しょう"], ["午", "ご"]], tags: ["N4-2"] },
    { english: "Fast Talking", japanese: [["早", "はや"], ["口", "くち"]], tags: ["N4-2"] },
    { english: "Early Morning", japanese: [["早", "そう"], ["朝", "ちょう"]], tags: ["N4-2"] },

    //{ english: "", japanese: [["", ""], ["", ""]], tags: ["N4-2"] },
    // #endregion

    // #region Kanji N4-3
    { english: "Luggage", japanese: [["荷", "に"], ["物", "もつ"]], tags: ["N4-3"] },
    { english: "Baggage", japanese: [["手", "て"], ["荷", "に"], ["物", "もつ"]], tags: ["N4-3"] },
    { english: "Send", japanese: [["送", "そう"], ["信", "しん"]], tags: ["N4-3"] },
    { english: "Seeing Off", japanese: [["見", "み"], ["送り", "おくり"]], tags: ["N4-3"] },
    { english: "Farewell Party", japanese: [["送", "そう"], ["別", "べつ"], ["会", "かい"]], tags: ["N4-3"] },
    
    { english: "Returning Home", japanese: [["帰", "き"], ["宅", "たく"]], tags: ["N4-3"] },
    { english: "Housing", japanese: [["住", "じゅう"], ["宅", "たく"]], tags: ["N4-3"] },
    { english: "Express", japanese: [["急", "きゅう"], ["行", "こう"]], tags: ["N4-3"] },
    { english: "Ambulance", japanese: [["救", "きゅう"], ["急", "きゅう"], ["車", "しゃ"]], tags: ["N4-3"] },
    
    { english: "Speed", japanese: [["速", "そく"], ["度", "ど"]], tags: ["N4-3"] },
    { english: "Per Hour (~mph)", japanese: [["時", "じ"], ["速", "そく"]], tags: ["N4-3"] },
    { english: "Express", japanese: [["速", "そく"], ["達", "たつ"]], tags: ["N4-3"] },
    { english: "Running Late", japanese: [["遅", "ち"], ["刻", "こく"]], tags: ["N4-3"] },
    
    { english: "Body Weight", japanese: [["体", "たい"], ["重", "じゅう"]], tags: ["N4-3"] },
    { english: "Light Snack", japanese: [["軽", "けい"], ["食", "しょく"]], tags: ["N4-3"] },

    { english: "Residential Area", japanese: [["住", "じゅう"], ["宅", "たく"], ["街", "がい"]], tags: ["N4-3"] },
    { english: "High Places", japanese: [["高い", "たかい"], ["所", "ところ"]], tags: ["N4-3"] },
    { english: "Address", japanese: [["住", "じゅう"], ["所", "しょ"]], tags: ["N4-3"] },
    { english: "Place", japanese: [["場", "ば"], ["所", "しょ"]], tags: ["N4-3"] },
    { english: "Somewhere", japanese: [["何か", "なんか"], ["所", "しょ"]], tags: ["N4-3"] },
    { english: "Strong Points", japanese: [["長", "ちょう"], ["所", "しょ"]], tags: ["N4-3"] },
    { english: "Weak Points", japanese: [["短", "たん"], ["所", "しょ"]], tags: ["N4-3"] },
    
    { english: "Mr. Tanaka", japanese: [["田", "た"], ["中", "なか"], ["様", "さま"]], tags: ["N4-3"] },
    { english: "Customers", japanese: [["お客", "おきゃく"], ["様", "さま"]], tags: ["N4-3"] },
    { english: "State/Status", japanese: [["様", "よう"], ["子", "す"]], tags: ["N4-3"] },
    { english: "Owner", japanese: [["持", "もち"], ["主", "ぬし"]], tags: ["N4-3"] },
    { english: "Husband/Master", japanese: [["ご主", "ごしゅ"], ["人", "じん"]], tags: ["N4-3"] },
    
    { english: "Best", japanese: [["一", "いち"], ["番", "ばん"]], tags: ["N4-3"] },
    { english: "What Number?", japanese: [["何", "なん"], ["番", "ばん"]], tags: ["N4-3"] },
    { english: "Police Box", japanese: [["交", "こう"], ["番", "ばん"]], tags: ["N4-3"] },
    { english: "On Duty", japanese: [["当", "とう"], ["番", "ばん"]], tags: ["N4-3"] },
    { english: "Place Name", japanese: [["地", "ち"], ["名", "めい"]], tags: ["N4-3"] },
    { english: "Ground", japanese: [["地", "ち"], ["上", "じょう"]], tags: ["N4-3"] },
    { english: "Street Address", japanese: [["番", "ばん"], ["地", "ち"]], tags: ["N4-3"] },
    
    { english: "Phone Number", japanese: [["電", "でん"], ["話", "わ"], ["番", "ばん"], ["号", "ごう"]], tags: ["N4-3"] },
    { english: "Room Number", japanese: [["号", "ごう"], ["室", "しつ"]], tags: ["N4-3"] },
    { english: "Signal", japanese: [["信", "しん"], ["号", "ごう"]], tags: ["N4-3"] },
    { english: "Year", japanese: [["年", "ねん"], ["号", "ごう"]], tags: ["N4-3"] },
    { english: "Extra", japanese: [["号", "ごう"], ["外", "がい"]], tags: ["N4-3"] },
    { english: "Tokyo", japanese: [["東", "とう"], ["京", "きょう"]], tags: ["N4-3"] },
    
    { english: "Foreign Country", japanese: [["外", "がい"], ["国", "こく"]], tags: ["N4-3"] },
    { english: "Return to Japan", japanese: [["帰", "き"], ["国", "こく"]], tags: ["N4-3"] },
    { english: "Kyoto", japanese: [["京", "きょう"], ["都", "と"]], tags: ["N4-3"] },
    { english: "Within Tokyo", japanese: [["都", "と"], ["内", "ない"]], tags: ["N4-3"] },
    { english: "City", japanese: [["都", "と"], ["会", "かい"]], tags: ["N4-3"] },
    { english: "Capital", japanese: [["首", "しゅ"], ["都", "と"]], tags: ["N4-3"] },
    
    { english: "Road", japanese: [["道", "どう"], ["路", "ろ"]], tags: ["N4-3"] },
    { english: "Hokkaido", japanese: [["北", "ほっ"], ["海", "かい"], ["道", "どう"]], tags: ["N4-3"] },
    { english: "Tool", japanese: [["道", "どう"], ["具", "ぐ"]], tags: ["N4-3"] },
    { english: "Osaka Prefecture", japanese: [["大", "おお"], ["阪", "さか"], ["府", "ふ"]], tags: ["N4-3"] },

    { english: "Yamaguchi Prefecture", japanese: [["山", "やま"], ["口", "ぐち"], ["県", "けん"]], tags: ["N4-3"] },
    { english: "Aomori Prefecture", japanese: [["青", "あお"], ["森", "もり"], ["県", "けん"]], tags: ["N4-3"] },
    { english: "Iwate Prefecture", japanese: [["岩", "いわ"], ["手", "て"], ["県", "けん"]], tags: ["N4-3"] },
    { english: "Market", japanese: [["市", "いち"], ["場", "ば"]], tags: ["N4-3"] },
    { english: "City Hall", japanese: [["市", "し"], ["役", "やく"], ["所", "しょ"]], tags: ["N4-3"] },
    { english: "Within the City", japanese: [["市", "し"], ["内", "ない"]], tags: ["N4-3"] },
    
    { english: "Ward Mayor", japanese: [["区", "く"], ["長", "ちょう"]], tags: ["N4-3"] },
    { english: "Within the Ward", japanese: [["区", "く"], ["内", "ない"]], tags: ["N4-3"] },
    { english: "Village Head", japanese: [["村", "そん"], ["長", "ちょう"]], tags: ["N4-3"] },
    { english: "City/Town/Village", japanese: [["市", "し"], ["町", "ちょう"], ["村", "そん"]], tags: ["N4-3"] },
    // #endregion

    // #region Kanji N4-4
    { english: "Every Day", japanese: [["毎", "まい"], ["日", "にち"]], tags: ["N4-4"] },
    { english: "Every Year", japanese: [["毎", "まい"], ["年", "とし"]], tags: ["N4-4"] },
    { english: "Every Time", japanese: [["毎", "まい"], ["回", "かい"]], tags: ["N4-4"] },
    { english: "Every Week", japanese: [["毎", "まい"], ["週", "しゅう"]], tags: ["N4-4"] },
    { english: "Weekly Holiday", japanese: [["週", "しゅう"], ["休", "きゅう"]], tags: ["N4-4"] },
    { english: "Two Weeks", japanese: [["二", "に"], ["週", "しゅう"], ["間", "かん"]], tags: ["N4-4"] },
    { english: "Weekend", japanese: [["週", "しゅう"], ["末", "まつ"]], tags: ["N4-4"] },
    { english: "Next Week", japanese: [["来", "らい"], ["週", "しゅう"]], tags: ["N4-4"] },
    { english: "Last Week", japanese: [["先", "せん"], ["週", "しゅう"]], tags: ["N4-4"] },
    
    { english: "Movie", japanese: [["映", "えい"], ["画", "が"]], tags: ["N4-4"] },
    { english: "Painter", japanese: [["画", "が"], ["家", "か"]], tags: ["N4-4"] },
    { english: "Screen", japanese: [["画", "が"], ["面", "めん"]], tags: ["N4-4"] },
    { english: "Manga", japanese: [["漫", "まん"], ["画", "が"]], tags: ["N4-4"] },
    { english: "Number of Strokes", japanese: [["画", "かく"], ["数", "すう"]], tags: ["N4-4"] },
    { english: "Plan", japanese: [["計", "けい"], ["画", "かく"]], tags: ["N4-4"] },
    
    { english: "Japanese Inn", japanese: [["旅", "りょ"], ["館", "かん"]], tags: ["N4-4"] },
    { english: "Western Building", japanese: [["洋", "よう"], ["館", "かん"]], tags: ["N4-4"] },
    { english: "Movie Theater", japanese: [["映", "えい"], ["画", "が"], ["館", "かん"]], tags: ["N4-4"] },
    { english: "Embassy", japanese: [["大", "たい"], ["使", "し"], ["館", "かん"]], tags: ["N4-4"] },
    { english: "Museum", japanese: [["博", "はく"], ["物", "ぶつ"], ["館", "かん"]], tags: ["N4-4"] },
    { english: "Art Museum", japanese: [["美", "び"], ["術", "じゅつ"], ["館", "かん"]], tags: ["N4-4"] },
    
    { english: "Public", japanese: [["公", "こう"], ["立", "りつ"]], tags: ["N4-4"] },
    { english: "Protagonist", japanese: [["主", "しゅ"], ["人", "じん"], ["公", "こう"]], tags: ["N4-4"] },
    { english: "Published", japanese: [["公", "こう"], ["開", "かい"]], tags: ["N4-4"] },
    { english: "Park", japanese: [["公", "こう"], ["園", "えん"]], tags: ["N4-4"] },
    { english: "Amusement Park", japanese: [["遊", "ゆう"], ["園", "えん"], ["地", "ち"]], tags: ["N4-4"] },
    { english: "Zoo", japanese: [["動", "どう"], ["物", "ぶつ"], ["園", "えん"]], tags: ["N4-4"] },
    { english: "Kindergarten", japanese: [["幼", "よう"], ["稚", "ち"], ["園", "えん"]], tags: ["N4-4"] },
    
    { english: "Mr. and Mrs. Tanaka", japanese: [["田", "た"], ["中", "なか"], ["夫", "ふ"], ["妻", "さい"]], tags: ["N4-4"] },
    { english: "Couple", japanese: [["夫", "ふう"], ["婦", "ふ"]], tags: ["N4-4"] },
    { english: "Mrs.", japanese: [["夫", "ふ"], ["人", "じん"]], tags: ["N4-4"] },
    { english: "Wife and Children", japanese: [["妻", "さい"], ["子", "し"]], tags: ["N4-4"] },
    { english: "Devoted Husband", japanese: [["愛", "あい"], ["妻", "さい"], ["家", "か"]], tags: ["N4-4"] },
    
    { english: "Special", japanese: [["特", "とく"], ["別", "べつ"]], tags: ["N4-4"] },
    { english: "Special Sale", japanese: [["特", "とく"], ["売", "ばい"]], tags: ["N4-4"] },
    { english: "Express", japanese: [["特", "とっ"], ["急", "きゅう"]], tags: ["N4-4"] },
    { english: "Puberty", japanese: [["思", "し"], ["春", "しゅん"], ["期", "き"]], tags: ["N4-4"] },
    
    { english: "Fee", japanese: [["料", "りょう"], ["金", "きん"]], tags: ["N4-4"] },
    { english: "Food", japanese: [["食", "しょく"], ["料", "りょう"]], tags: ["N4-4"] },
    { english: "Free", japanese: [["無", "む"], ["料", "りょう"]], tags: ["N4-4"] },
    { english: "Resources", japanese: [["資", "し"], ["料", "りょう"]], tags: ["N4-4"] },
    { english: "Cuisine, Cooking", japanese: [["料", "りょう"], ["理", "り"]], tags: ["N4-4"] },
    { english: "Reason", japanese: [["理", "り"], ["由", "ゆう"]], tags: ["N4-4"] },
    { english: "Physics", japanese: [["物", "ぶつ"], ["理", "り"]], tags: ["N4-4"] },
    { english: "Scientific Fields", japanese: [["理", "り"], ["系", "けい"]], tags: ["N4-4"] },
    
    { english: "Paid", japanese: [["有", "ゆう"], ["料", "りょう"]], tags: ["N4-4"] },
    { english: "Famous Person", japanese: [["有", "ゆう"], ["名", "めい"], ["人", "じん"]], tags: ["N4-4"] },
    { english: "Influential", japanese: [["有", "ゆう"], ["力", "りょく"]], tags: ["N4-4"] },
    { english: "Advantageous", japanese: [["有", "ゆう"], ["利", "り"]], tags: ["N4-4"] },

    { english: "Join, Enrollment", japanese: [["入", "にゅう"], ["会", "かい"]], tags: ["N4-4"] },
    { english: "Conversation", japanese: [["会", "かい"], ["話", "わ"]], tags: ["N4-4"] },
    { english: "Tournament", japanese: [["大", "たい"], ["会", "かい"]], tags: ["N4-4"] },
    { english: "Company", japanese: [["会", "かい"], ["社", "しゃ"]], tags: ["N4-4"] },
    { english: "Induction Ceremony", japanese: [["入", "にゅう"], ["社", "しゃ"], ["式", "しき"]], tags: ["N4-4"] },
    { english: "Main Office", japanese: [["本", "ほん"], ["社", "しゃ"]], tags: ["N4-4"] },
    { english: "Shrine", japanese: [["神", "じん"], ["社", "じゃ"]], tags: ["N4-4"] },
    
    { english: "Labor", japanese: [["労", "ろう"], ["働", "どう"]], tags: ["N4-4"] },
    { english: "Author", japanese: [["作", "さく"], ["者", "しゃ"]], tags: ["N4-4"] },
    { english: "Masterpiece", japanese: [["名", "めい"], ["作", "さく"]], tags: ["N4-4"] },
    { english: "Writer", japanese: [["作", "さっ"], ["家", "か"]], tags: ["N4-4"] },
    { english: "Work", japanese: [["作", "さ"], ["業", "ぎょう"]], tags: ["N4-4"] },
    { english: "Works", japanese: [["作", "さく"], ["品", "ひん"]], tags: ["N4-4"] },
    
    { english: "Artificial", japanese: [["人", "じん"], ["工", "こう"]], tags: ["N4-4"] },
    { english: "Faculty of Engineering", japanese: [["工", "こう"], ["学", "がく"], ["部", "ぶ"]], tags: ["N4-4"] },
    { english: "Construction", japanese: [["工", "こう"], ["事", "じ"]], tags: ["N4-4"] },
    { english: "Square, Plaza", japanese: [["広", "ひろ"], ["場", "ば"]], tags: ["N4-4"] },
    { english: "Factory", japanese: [["工", "こう"], ["場", "じょう"]], tags: ["N4-4"] },
    { english: "Participation", japanese: [["出", "しゅつ"], ["場", "じょう"]], tags: ["N4-4"] },
    { english: "Venue", japanese: [["会", "かい"], ["場", "じょう"]], tags: ["N4-4"] },
    
    { english: "Opening Ceremony", japanese: [["始", "し"], ["業", "ぎょう"], ["式", "しき"]], tags: ["N4-4"] },
    { english: "New Year (Start)", japanese: [["年", "ねん"], ["始", "し"]], tags: ["N4-4"] },
    { english: "End", japanese: [["終", "しゅう"], ["了", "りょう"]], tags: ["N4-4"] },
    { english: "All Day", japanese: [["終", "しゅう"], ["日", "じつ"]], tags: ["N4-4"] },
    // #endregion

    // #region Kanji N4-5
    { english: "Station Staff", japanese: [["駅", "えき"], ["員", "いん"]], tags: ["N4-5"] },
    { english: "Station Chief", japanese: [["駅", "えき"], ["長", "ちょう"]], tags: ["N4-5"] },
    { english: "Two Stations Away", japanese: [["二つ", "ふたつ"], ["目", "め"], ["の", "の"], ["駅", "えき"]], tags: ["N4-5"] },
    { english: "Subway", japanese: [["地", "ち"], ["下", "か"], ["鉄", "てつ"]], tags: ["N4-5"] },
    { english: "Railway", japanese: [["鉄", "てつ"], ["道", "どう"]], tags: ["N4-5"] },
    { english: "Iron", japanese: [["鉄", "てつ"], ["分", "ぶん"]], tags: ["N4-5"] },
    
    { english: "Boarding Place", japanese: [["乗り", "のり"], ["場", "ば"]], tags: ["N4-5"] },
    { english: "Passenger", japanese: [["乗", "じょう"], ["客", "きゃく"]], tags: ["N4-5"] },
    { english: "Precipitation", japanese: [["降", "こう"], ["水", "すい"], ["量", "りょう"]], tags: ["N4-5"] },
    
    { english: "Opening and Closing", japanese: [["開", "かい"], ["閉", "へい"]], tags: ["N4-5"] },
    { english: "Opening (Park/Facility)", japanese: [["開", "かい"], ["園", "えん"]], tags: ["N4-5"] },
    { english: "Opening (Venue/Event)", japanese: [["開", "かい"], ["場", "じょう"]], tags: ["N4-5"] },
    { english: "Closed (Shop)", japanese: [["閉", "へい"], ["店", "てん"]], tags: ["N4-5"] },
    
    { english: "Invention", japanese: [["発", "はつ"], ["明", "めい"]], tags: ["N4-5"] },
    { english: "Development", japanese: [["開", "かい"], ["発", "はつ"]], tags: ["N4-5"] },
    { english: "Pronounciation", japanese: [["発", "はつ"], ["音", "おん"]], tags: ["N4-5"] },
    { english: "Departure", japanese: [["発", "はっ"], ["車", "しゃ"]], tags: ["N4-5"] },
    { english: "Kimono", japanese: [["着", "き"], ["物", "もの"]], tags: ["N4-5"] },
    { english: "Landing", japanese: [["着", "ちゃく"], ["地", "ち"]], tags: ["N4-5"] },
    { english: "First Place", japanese: [["一", "いっ"], ["着", "ちゃく"]], tags: ["N4-5"] },
    
    { english: "Intersection", japanese: [["交", "こう"], ["差", "さ"], ["点", "てん"]], tags: ["N4-5"] },
    { english: "Exchange", japanese: [["交", "こう"], ["流", "りゅう"]], tags: ["N4-5"] },
    { english: "Main Street", japanese: [["大", "おお"], ["通り", "どうり"]], tags: ["N4-5"] },
    { english: "Commute (Work)", japanese: [["通", "つう"], ["勤", "きん"]], tags: ["N4-5"] },
    { english: "Commute (School)", japanese: [["通", "つう"], ["学", "がく"]], tags: ["N4-5"] },
    { english: "One Way", japanese: [["一", "いっ"], ["方", "ぽう"], ["通", "つう"], ["行", "こう"]], tags: ["N4-5"] },
    
    { english: "Three Units", japanese: [["三", "さん"], ["台", "だい"]], tags: ["N4-5"] },
    { english: "Kitchen", japanese: [["台", "だい"], ["所", "どころ"]], tags: ["N4-5"] },
    { english: "Cargo Bed", japanese: [["荷", "に"], ["台", "だい"]], tags: ["N4-5"] },
    { english: "Heights", japanese: [["高", "たか"], ["台", "だい"]], tags: ["N4-5"] },
    { english: "Typhoon", japanese: [["台", "たい"], ["風", "ふう"]], tags: ["N4-5"] },
    { english: "Prohibited", japanese: [["禁", "きん"], ["止", "し"]], tags: ["N4-5"] },
    
    { english: "Seven Colors (Rainbow)", japanese: [["七", "なな"], ["色", "いろ"]], tags: ["N4-5"] },
    { english: "Colored Paper", japanese: [["色", "いろ"], ["紙", "がみ"]], tags: ["N4-5"] },
    { english: "Features", japanese: [["特", "とく"], ["色", "しょく"]], tags: ["N4-5"] },
    { english: "Equator", japanese: [["赤", "せき"], ["道", "どう"]], tags: ["N4-5"] },
    { english: "Red Rice", japanese: [["赤", "せき"], ["飯", "はん"]], tags: ["N4-5"] },
    
    { english: "Yellow", japanese: [["黄", "き"], ["色", "いろ"]], tags: ["N4-5"] },
    { english: "Golden", japanese: [["黄", "おう"], ["金", "ごん"]], tags: ["N4-5"] },
    { english: "Egg Yolk", japanese: [["卵", "らん"], ["黄", "おう"]], tags: ["N4-5"] },
    { english: "Blue Sky", japanese: [["青", "あお"], ["空", "ぞら"]], tags: ["N4-5"] },
    { english: "Young Adult", japanese: [["青", "せい"], ["年", "ねん"]], tags: ["N4-5"] },
    { english: "Youth", japanese: [["青", "せい"], ["春", "しゅん"]], tags: ["N4-5"] },
    
    { english: "Disease", japanese: [["病", "びょう"], ["気", "き"]], tags: ["N4-5"] },
    { english: "Hospital", japanese: [["病", "びょう"], ["院", "いん"]], tags: ["N4-5"] },
    { english: "Hospitalization", japanese: [["入", "にゅう"], ["院", "いん"]], tags: ["N4-5"] },
    { english: "Discharge", japanese: [["退", "たい"], ["院", "いん"]], tags: ["N4-5"] },
    { english: "Director", japanese: [["院", "いん"], ["長", "ちょう"]], tags: ["N4-5"] },
    { english: "Hospital Visit", japanese: [["通", "つう"], ["院", "いん"]], tags: ["N4-5"] },
    { english: "Graduate Student", japanese: [["大", "だい"], ["学", "がく"], ["院", "いん"], ["生", "せい"]], tags: ["N4-5"] },
    { english: "Temple", japanese: [["寺", "じ"], ["院", "いん"]], tags: ["N4-5"] },
    
    { english: "Doctor", japanese: [["医", "い"], ["者", "しゃ"]], tags: ["N4-5"] },
    { english: "Medical Science", japanese: [["医", "い"], ["学", "がく"]], tags: ["N4-5"] },
    { english: "Subjects", japanese: [["科", "か"], ["目", "もく"]], tags: ["N4-5"] },
    { english: "Science (Subject)", japanese: [["理", "り"], ["科", "か"]], tags: ["N4-5"] },
    { english: "Science", japanese: [["科", "か"], ["学", "がく"]], tags: ["N4-5"] },
    { english: "Academic Subject", japanese: [["学", "がっ"], ["科", "か"]], tags: ["N4-5"] },
    { english: "Internal Medicine", japanese: [["内", "ない"], ["科", "か"]], tags: ["N4-5"] },
    { english: "Surgery", japanese: [["外", "げ"], ["科", "か"]], tags: ["N4-5"] },
    
    { english: "Cold Medicine", japanese: [["風", "かぜ"], ["邪", ""], ["薬", "ぐすり"]], tags: ["N4-5"] },
    { english: "Pharmacy", japanese: [["薬", "やっ"], ["局", "きょく"]], tags: ["N4-5"] },
    { english: "Headache Medicine", japanese: [["頭", "ず"], ["痛", "つう"], ["薬", "やく"]], tags: ["N4-5"] },
    { english: "Eyedrops", japanese: [["目", "め"], ["薬", "ぐすり"]], tags: ["N4-5"] },
    { english: "Waiting Time", japanese: [["待ち", "まち"], ["時", "じ"], ["間", "かん"]], tags: ["N4-5"] },
    { english: "Expectations", japanese: [["期", "き"], ["待", "たい"]], tags: ["N4-5"] },
    
    { english: "Chorus", japanese: [["合", "がっ"], ["唱", "しょう"]], tags: ["N4-5"] },
    { english: "Passed", japanese: [["合", "ごう"], ["格", "かく"]], tags: ["N4-5"] },
    { english: "Waiting Room", japanese: [["待ち", "まち"], ["合い", "あい"], ["室", "しつ"]], tags: ["N4-5"] },
    { english: "Accounting", japanese: [["会", "かい"], ["計", "けい"]], tags: ["N4-5"] },
    { english: "Total", japanese: [["合", "ごう"], ["計", "けい"]], tags: ["N4-5"] },
    { english: "Calculation", japanese: [["計", "けい"], ["算", "さん"]], tags: ["N4-5"] },
    { english: "Clock", japanese: [["時", "と"], ["計", "けい"]], tags: ["N4-5"] },
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
    { english: "Change (Natural)", japanese: [["変", "へん"], ["化", "か"]] },
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

    // #region Kanji N4-7
    { english: "Spring Break", japanese: [["春", "はる"], ["休み", "やすみ"]], tags: ["N4-7"] },
    { english: "Beginning of Spring", japanese: [["立", "りっ"], ["春", "しゅん"]], tags: ["N4-7"] },
    { english: "New Year (Spring)", japanese: [["新", "しん"], ["春", "しゅん"]], tags: ["N4-7"] },
    { english: "Spring Equinox", japanese: [["春", "しゅん"], ["分", "ぶん"], ["の", "の"], ["日", "ひ"]], tags: ["N4-7"] },
    { english: "Summer Vacation", japanese: [["夏", "なつ"], ["休み", "やすみ"]], tags: ["N4-7"] },
    { english: "Early Summer", japanese: [["初", "しょ"], ["夏", "か"]], tags: ["N4-7"] },
    { english: "Summer Day", japanese: [["夏", "なつ"], ["日", "び"]], tags: ["N4-7"] },
    
    { english: "Autumnal Equinox", japanese: [["秋", "しゅう"], ["分", "ぶん"], ["の", "の"], ["日", "ひ"]], tags: ["N4-7"] },
    { english: "Beginning of Autumn", japanese: [["立", "りっ"], ["秋", "しゅう"]], tags: ["N4-7"] },
    { english: "Midwinter", japanese: [["真", "ま"], ["冬", "ふゆ"]], tags: ["N4-7"] },
    { english: "All Seasons", japanese: [["春", "しゅん"], ["夏", "か"], ["秋", "しゅう"], ["冬", "とう"]], tags: ["N4-7"] },
    { english: "Winter (Formal)", japanese: [["冬", "とう"], ["季", "き"]], tags: ["N4-7"] },
    
    { english: "Air", japanese: [["空", "くう"], ["気", "き"]], tags: ["N4-7"] },
    { english: "Airport", japanese: [["空", "くう"], ["港", "こう"]], tags: ["N4-7"] },
    { english: "Mars", japanese: [["火", "か"], ["星", "せい"]], tags: ["N4-7"] },
    { english: "Vacant House", japanese: [["空き", "あき"], ["家", "や"]], tags: ["N4-7"] },
    { english: "Karate", japanese: [["空", "から"], ["手", "て"]], tags: ["N4-7"] },
    { english: "Airspace", japanese: [["上", "じょう"], ["空", "くう"]], tags: ["N4-7"] },
    { english: "Night Sky", japanese: [["夜", "よ"], ["空", "ぞら"]], tags: ["N4-7"] },
    
    { english: "Cumulonimbus", japanese: [["積", "せき"], ["乱", "らん"], ["雲", "うん"]], tags: ["N4-7"] },
    { english: "Last Year", japanese: [["去", "きょ"], ["年", "ねん"]], tags: ["N4-7"] },
    { english: "Past", japanese: [["過", "か"], ["去", "こ"]], tags: ["N4-7"] },
    { english: "Erase", japanese: [["消", "しょう"], ["去", "きょ"]], tags: ["N4-7"] },
    { english: "Passing (Death)", japanese: [["死", "し"], ["去", "きょ"]], tags: ["N4-7"] },
    { english: "Rain Clouds", japanese: [["雨", "あま"], ["雲", "ぐも"]], tags: ["N4-7"] },
    
    { english: "Weather", japanese: [["天", "てん"], ["気", "き"]], tags: ["N4-7"] },
    { english: "Rainy Weather", japanese: [["雨", "う"], ["天", "てん"]], tags: ["N4-7"] },
    { english: "Angel", japanese: [["天", "てん"], ["使", "し"]], tags: ["N4-7"] },
    { english: "Heaven", japanese: [["天", "てん"], ["国", "ごく"]], tags: ["N4-7"] },
    { english: "Sunny Weather", japanese: [["晴", "せい"], ["天", "てん"]], tags: ["N4-7"] },
    { english: "Clear Skies", japanese: [["快", "かい"], ["晴", "せい"]], tags: ["N4-7"] },
    
    { english: "Snow Country", japanese: [["雪", "ゆき"], ["国", "ぐに"]], tags: ["N4-7"] },
    { english: "Heavy Snow", japanese: [["大", "おお"], ["雪", "ゆき"]], tags: ["N4-7"] },
    { english: "Fresh Snow", japanese: [["新", "しん"], ["雪", "せつ"]], tags: ["N4-7"] },
    { english: "Wind Speed", japanese: [["風", "ふう"], ["速", "そく"]], tags: ["N4-7"] },
    { english: "Windmill", japanese: [["風", "ふう"], ["車", "しゃ"]], tags: ["N4-7"] },
    { english: "Western Style", japanese: [["洋", "よう"], ["風", "ふう"]], tags: ["N4-7"] },
    
    { english: "Strong Winds", japanese: [["強", "きょう"], ["風", "ふう"]], tags: ["N4-7"] },
    { english: "Weak Team", japanese: [["弱", "じゃく"], ["小", "しょう"], ["チーム", "チーム"]], tags: ["N4-7"] },
    { english: "Variation of Strength", japanese: [["強", "きょう"], ["弱", "じゃく"]], tags: ["N4-7"] },
    { english: "High Heat", japanese: [["強", "つよ"], ["火", "び"]], tags: ["N4-7"] },
    { english: "Low Heat", japanese: [["弱", "よわ"], ["火", "び"]], tags: ["N4-7"] },
    
    { english: "Extremely Hot Day", japanese: [["猛", "もう"], ["暑", "しょ"], ["日", "び"]], tags: ["N4-7"] },
    { english: "Summer Getaway", japanese: [["避", "ひ"], ["暑", "しょ"]], tags: ["N4-7"] },
    { english: "Summer Resort", japanese: [["避", "ひ"], ["暑", "しょ"], ["地", "ち"]], tags: ["N4-7"] },
    { english: "Summer Greetings", japanese: [["暑", "しょ"], ["中", "ちゅう"], ["見", "み"], ["舞い", "まい"]], tags: ["N4-7"] },
    { english: "Cold (Feeling)", japanese: [["寒", "さむ"], ["気", "け"]], tags: ["N4-7"] },
    { english: "Cold Protection", japanese: [["防", "ぼう"], ["寒", "かん"]], tags: ["N4-7"] },
    
    { english: "Trip, Travel", japanese: [["旅", "りょ"], ["行", "こう"]], tags: ["N4-7"] },
    { english: "Travel Expenses", japanese: [["旅", "りょ"], ["費", "ひ"]], tags: ["N4-7"] },
    { english: "Feeling", japanese: [["気", "き"], ["持ち", "もち"]], tags: ["N4-7"] },
    { english: "Belongings", japanese: [["持ち", "もち"], ["物", "もの"]], tags: ["N4-7"] },
    { english: "Chronic Disease", japanese: [["持", "じ"], ["病", "びょう"]], tags: ["N4-7"] },
    { english: "Solo Travel", japanese: [["一人", "ひとり"], ["旅", "たび"]], tags: ["N4-7"] },
    { english: "While Travelling", japanese: [["旅", "りょ"], ["行", "こう"], ["中", "ちゅう"]], tags: ["N4-7"] },
    { english: "Money (in possession)", japanese: [["所", "しょ"], ["持", "じ"], ["金", "きん"]], tags: ["N4-7"] },
    { english: "Long-Lasting", japanese: [["長", "なが"], ["持ち", "もち"]], tags: ["N4-7"] },
    
    { english: "World (Society)", japanese: [["世", "よ"], ["の", "の"], ["中", "なか"]], tags: ["N4-7"] },
    { english: "Middle Ages", japanese: [["中", "ちゅう"], ["世", "せい"]], tags: ["N4-7"] },
    { english: "Society", japanese: [["世", "せ"], ["間", "けん"]], tags: ["N4-7"] },
    { english: "Career Advancement", japanese: [["出", "しゅっ"], ["世", "せ"]], tags: ["N4-7"] },
    { english: "Century", japanese: [["世", "せい"], ["紀", "き"]], tags: ["N4-7"] },
    { english: "World (Physical)", japanese: [["世", "せ"], ["界", "かい"]], tags: ["N4-7"] },
    { english: "Limit", japanese: [["限", "げん"], ["界", "かい"]], tags: ["N4-7"] },
    { english: "Entertainment World", japanese: [["芸", "げい"], ["能", "のう"], ["界", "かい"]], tags: ["N4-7"] },
    { english: "Otherworld (Afterlife)", japanese: [["他", "た"], ["界", "かい"]], tags: ["N4-7"] },
    
    { english: "Sketch", japanese: [["写", "しゃ"], ["生", "せい"]], tags: ["N4-7"] },
    { english: "Midsummer", japanese: [["真", "ま"], ["夏", "なつ"]], tags: ["N4-7"] },
    { english: "Sincerity", japanese: [["真", "ま"], ["心", "ごころ"]], tags: ["N4-7"] },
    { english: "Photograph", japanese: [["写", "しゃ"], ["真", "しん"]], tags: ["N4-7"] },
    { english: "Vacuum", japanese: [["真", "しん"], ["空", "くう"]], tags: ["N4-7"] },
    { english: "True Story", japanese: [["真", "しん"], ["実", "じつ"]], tags: ["N4-7"] },
    { english: "Middle", japanese: [["真", "真"], ["ん", "ん"], ["中", "なか"]], tags: ["N4-7"] },
    
    { english: "Cruise Ship", japanese: [["客", "きゃく"], ["船", "せん"]], tags: ["N4-7"] },
    { english: "Captain", japanese: [["船", "せん"], ["長", "ちょう"]], tags: ["N4-7"] },
    { english: "Balloon", japanese: [["風", "ふう"], ["船", "せん"]], tags: ["N4-7"] },
    // #endregion

    // #region Kanji N4-8
    { english: "Study", japanese: [["勉", "べん"], ["強", "きょう"]], tags: ["N4-8"] },
    { english: "Studious Person", japanese: [["勉", "べん"], ["強", "きょう"], ["家", "か"]], tags: ["N4-8"] },
    { english: "Diligence", japanese: [["勤", "きん"], ["勉", "べん"]], tags: ["N4-8"] },
    { english: "Chinese Characters", japanese: [["漢", "かん"], ["字", "じ"]], tags: ["N4-8"] },
    { english: "Chinese Numerals", japanese: [["漢", "かん"], ["数", "すう"], ["字", "じ"]], tags: ["N4-8"] },
    { english: "中国-日本 Dictionary", japanese: [["漢", "かん"], ["和", "わ"], ["辞", "じ"], ["典", "てん"]], tags: ["N4-8"] },
    { english: "Chinese Medicine", japanese: [["漢", "かん"], ["方", "ぽう"], ["薬", "やく"]], tags: ["N4-8"] },

    { english: "Homework", japanese: [["宿", "しゅく"], ["題", "だい"]], tags: ["N4-8"] },
    { english: "Accomodation", japanese: [["宿", "しゅく"], ["泊", "はく"]], tags: ["N4-8"] },
    { english: "Training Camp", japanese: [["合", "がっ"], ["宿", "しゅく"]], tags: ["N4-8"] },
    { english: "Shinjuku Station", japanese: [["新", "しん"], ["宿", "じゅく"], ["駅", "えき"]], tags: ["N4-8"] },
    { english: "Title", japanese: [["題", "だい"], ["名", "めい"]], tags: ["N4-8"] },
    { english: "Topic", japanese: [["話", "わ"], ["題", "だい"]], tags: ["N4-8"] },
    
    { english: "Question", japanese: [["質", "しつ"], ["問", "もん"]], tags: ["N4-8"] },
    { english: "Problem", japanese: [["問", "もん"], ["題", "だい"]], tags: ["N4-8"] },
    { english: "Social Issues", japanese: [["社", "しゃ"], ["会", "かい"], ["問", "もん"], ["題", "だい"]], tags: ["N4-8"] },
    { english: "Academics", japanese: [["学", "がく"], ["問", "もん"]], tags: ["N4-8"] },
    { english: "Visit", japanese: [["訪", "ほう"], ["問", "もん"]], tags: ["N4-8"] },
    
    { english: "Education", japanese: [["教", "きょう"], ["育", "いく"]], tags: ["N4-8"] },
    { english: "Classroom", japanese: [["教", "きょう"], ["室", "しつ"]], tags: ["N4-8"] },
    { english: "Textbook", japanese: [["教", "きょう"], ["科", "か"], ["書", "しょ"]], tags: ["N4-8"] },
    { english: "Buddhism", japanese: [["仏", "ぶっ"], ["教", "きょう"]], tags: ["N4-8"] },
    { english: "Professor", japanese: [["教", "きょう"], ["授", "じゅ"]], tags: ["N4-8"] },
    { english: "Laboratory", japanese: [["研", "けん"], ["究", "きゅう"], ["室", "しつ"]], tags: ["N4-8"] },
    
    { english: "Test, Exam", japanese: [["試", "し"], ["験", "けん"]], tags: ["N4-8"] },
    { english: "Tasting", japanese: [["試", "し"], ["食", "しょく"]], tags: ["N4-8"] },
    { english: "Try On", japanese: [["試", "し"], ["着", "ちゃく"]], tags: ["N4-8"] },
    { english: "Game, Match", japanese: [["試", "し"], ["合", "あい"]], tags: ["N4-8"] },
    { english: "Experiment", japanese: [["実", "じっ"], ["験", "けん"]], tags: ["N4-8"] },
    { english: "Exam (Formal)", japanese: [["受", "じゅ"], ["験", "けん"]], tags: ["N4-8"] },
    { english: "Experience", japanese: [["体", "たい"], ["験", "けん"]], tags: ["N4-8"] },
    
    { english: "Answer", japanese: [["回", "かい"], ["答", "とう"]], tags: ["N4-8"] },
    { english: "Way of Thinking", japanese: [["考え", "かんがえ"], ["方", "かた"]], tags: ["N4-8"] },
    { english: "References", japanese: [["参", "さん"], ["考", "こう"], ["資", "し"], ["料", "りょう"]], tags: ["N4-8"] },
    { english: "Thinking", japanese: [["思", "し"], ["考", "こう"]], tags: ["N4-8"] },
    
    { english: "Accurrate", japanese: [["正", "せい"], ["確", "かく"]], tags: ["N4-8"] },
    { english: "Correct Answer", japanese: [["正", "せい"], ["解", "かい"]], tags: ["N4-8"] },
    { english: "New Year (First Month)", japanese: [["正", "しょう"], ["月", "がつ"]], tags: ["N4-8"] },
    { english: "Shot Put", japanese: [["砲", "ほう"], ["丸", "がん"], ["投", "な"], ["げ", "げ"]], tags: ["N4-8"] },
    
    { english: "Inconvenient", japanese: [["不", "ふ"], ["便", "べん"]], tags: ["N4-8"] },
    { english: "Anxiety", japanese: [["不", "ふ"], ["安", "あん"]], tags: ["N4-8"] },
    { english: "Failed", japanese: [["不", "ふ"], ["合", "ごう"], ["格", "かく"]], tags: ["N4-8"] },
    { english: "Strange, Mysterious", japanese: [["不", "ふ"], ["思", "し"], ["議", "ぎ"]], tags: ["N4-8"] },
    { english: "Shortage", japanese: [["不", "ふ"], ["足", "そく"]], tags: ["N4-8"] },
    { english: "Lack of Exercise", japanese: [["運", "うん"], ["動", "どう"], ["不", "ふ"], ["足", "そく"]], tags: ["N4-8"] },
    { english: "Classmate", japanese: [["同", "どう"], ["級", "きゅう"], ["生", "せい"]], tags: ["N4-8"] },
    { english: "Joint (Collab)", japanese: [["合", "ごう"], ["同", "どう"]], tags: ["N4-8"] },
    { english: "Simultaneous", japanese: [["同", "どう"], ["時", "じ"]], tags: ["N4-8"] },
    
    { english: "Lending", japanese: [["貸し", "かし"], ["出し", "だし"]], tags: ["N4-8"] },
    { english: "Rental", japanese: [["賃", "ちん"], ["貸", "たい"]], tags: ["N4-8"] },
    { english: "Exclusive Use", japanese: [["貸し", "かし"], ["切り", "きり"]], tags: ["N4-8"] },
    { english: "Debt", japanese: [["借", "しゃっ"], ["金", "きん"]], tags: ["N4-8"] },
    { english: "Land Lease", japanese: [["借", "しゃく"], ["地", "ち"]], tags: ["N4-8"] },
    
    { english: "Reply", japanese: [["返", "へん"], ["事", "じ"]], tags: ["N4-8"] },
    { english: "Returns (Store)", japanese: [["返", "へん"], ["品", "ぴん"]], tags: ["N4-8"] },
    { english: "One Book", japanese: [["一", "いっ"], ["冊", "さつ"]], tags: ["N4-8"] },
    { english: "Booklet", japanese: [["冊", "さっ"], ["子", "し"]], tags: ["N4-8"] },
    { english: "Separate Volume", japanese: [["別", "べっ"], ["冊", "さつ"]], tags: ["N4-8"] },
    { english: "Poetry Paper", japanese: [["短", "たん"], ["冊", "ざく"]], tags: ["N4-8"] },
    
    { english: "History", japanese: [["歴", "れき"], ["史", "し"]], tags: ["N4-8"] },
    { english: "Resume (CV)", japanese: [["履", "り"], ["歴", "れき"], ["書", "しょ"]], tags: ["N4-8"] },
    { english: "Lineage", japanese: [["歴", "れき"], ["代", "だい"]], tags: ["N4-8"] },
    { english: "World History", japanese: [["世", "せ"], ["界", "かい"], ["歴", "れき"]], tags: ["N4-8"] },
    { english: "Academic Background", japanese: [["学", "がく"], ["歴", "れき"]], tags: ["N4-8"] },
    { english: "Japanese History", japanese: [["日", "に"], ["本", "ほん"], ["史", "し"]], tags: ["N4-8"] },
    { english: "Oriental History", japanese: [["東", "とう"], ["洋", "よう"], ["史", "し"]], tags: ["N4-8"] },
    { english: "Western History", japanese: [["西", "せい"], ["洋", "よう"], ["史", "し"]], tags: ["N4-8"] },
    { english: "History (Subject)", japanese: [["史", "し"], ["学", "がく"]], tags: ["N4-8"] },
    
    { english: "Map", japanese: [["地", "ち"], ["図", "ず"]], tags: ["N4-8"] },
    { english: "Library", japanese: [["図", "と"], ["書", "しょ"], ["館", "かん"]], tags: ["N4-8"] },
    { english: "Plant Encyclopedia", japanese: [["植", "しょく"], ["物", "ぶつ"], ["図", "ず"], ["鑑", "かん"]], tags: ["N4-8"] },
    { english: "Animal Encyclopedia", japanese: [["動", "どう"], ["物", "ぶつ"], ["図", "ず"], ["鑑", "かん"]], tags: ["N4-8"] },
    // #endregion

    // #region Kanji N4-9
    { english: "Motion, Exercise", japanese: [["運", "うん"], ["動", "どう"]], tags: ["N4-9"] },
    { english: "Person Driving", japanese: [["運", "うん"], ["転", "てん"], ["者", "しゃ"]], tags: ["N4-9"] },
    { english: "Animal", japanese: [["動", "どう"], ["物", "ぶつ"]], tags: ["N4-9"] },
    { english: "Operation", japanese: [["動", "どう"], ["作", "さ"]], tags: ["N4-9"] },
    
    { english: "Practice", japanese: [["練", "れん"], ["習", "しゅう"]], tags: ["N4-9"] },
    { english: "Training", japanese: [["訓", "くん"], ["練", "れん"]], tags: ["N4-9"] },
    { english: "Learning", japanese: [["学", "がく"], ["習", "しゅう"]], tags: ["N4-9"] },
    { english: "Calligraphy (Practical)", japanese: [["習", "しゅう"], ["字", "じ"]], tags: ["N4-9"] },
    { english: "Preparation", japanese: [["予", "よ"], ["習", "しゅう"]], tags: ["N4-9"] },
    { english: "Habits", japanese: [["習", "しゅう"], ["慣", "かん"]], tags: ["N4-9"] },
    { english: "Evacuation Drills", japanese: [["避", "ひ"], ["難", "なん"], ["訓", "くん"], ["練", "れん"]], tags: ["N4-9"] },
    { english: "Review", japanese: [["復", "ふく"], ["習", "しゅう"]], tags: ["N4-9"] },

    { english: "Race", japanese: [["競", "きょう"], ["走", "そう"]], tags: ["N4-9"] },
    { english: "Runner", japanese: [["走", "そう"], ["者", "しゃ"]], tags: ["N4-9"] },
    { english: "Pedestrian Streets", japanese: [["歩", "ほ"], ["行", "こう"], ["者", "しゃ"], ["天", "てん"], ["国", "ごく"]], tags: ["N4-9"] },
    { english: "Sidewalk", japanese: [["歩", "ほ"], ["道", "どう"]], tags: ["N4-9"] },
    { english: "Pedometer", japanese: [["万", "まん"], ["歩", "ぽ"], ["計", "けい"]], tags: ["N4-9"] },
    { english: "Stroll", japanese: [["散", "さん"], ["歩", "ぽ"]], tags: ["N4-9"] },
    
    { english: "Swimming", japanese: [["水", "すい"], ["泳", "えい"]], tags: ["N4-9"] },
    { english: "Breaststroke", japanese: [["平", "ひら"], ["泳ぎ", "およぎ"]], tags: ["N4-9"] },
    { english: "Talent", japanese: [["才", "さい"], ["能", "のう"]], tags: ["N4-9"] },
    { english: "Genius", japanese: [["天", "てん"], ["才", "さい"]], tags: ["N4-9"] },
    { english: "Talented Woman", japanese: [["才", "さい"], ["女", "じょ"]], tags: ["N4-9"] },

    { english: "Myself", japanese: [["自", "じ"], ["分", "ぶん"]], tags: ["N4-9"] },
    { english: "One's Home", japanese: [["自", "じ"], ["宅", "たく"]], tags: ["N4-9"] },
    { english: "Confidence", japanese: [["自", "じ"], ["信", "しん"]], tags: ["N4-9"] },
    { english: "Automobile", japanese: [["自", "じ"], ["動", "どう"], ["車", "しゃ"]], tags: ["N4-9"] },
    { english: "Self-Study", japanese: [["自", "じ"], ["習", "しゅう"]], tags: ["N4-9"] },
    { english: "Self-Help", japanese: [["自", "じ"], ["力", "りき"]], tags: ["N4-9"] },
    { english: "Nature", japanese: [["自", "じ"], ["然", "ぜん"]], tags: ["N4-9"] },
    { english: "Natural Monuments", japanese: [["天", "てん"], ["然", "ねん"], ["記", "き"], ["念", "ねん"], ["物", "ぶつ"]], tags: ["N4-9"] },
    { english: "Of Course", japanese: [["当", "とう"], ["然", "ぜん"]], tags: ["N4-9"] },
    { english: "Natural Water", japanese: [["天", "てん"], ["然", "ねん"], ["水", "すい"]], tags: ["N4-9"] },
    { english: "Not at all", japanese: [["全", "ぜん"], ["然", "ぜん"]], tags: ["N4-9"] },

    { english: "Flowers", japanese: [["草", "くさ"], ["花", "ばな"]], tags: ["N4-9"] },
    { english: "Grassland", japanese: [["草", "そう"], ["原", "げん"]], tags: ["N4-9"] },
    { english: "Original Work", japanese: [["原", "げん"], ["作", "さく"]], tags: ["N4-9"] },
    { english: "Cause", japanese: [["原", "げん"], ["因", "いん"]], tags: ["N4-9"] },
    { english: "Raw Materials", japanese: [["原", "げん"], ["料", "りょう"]], tags: ["N4-9"] },
    { english: "Plateau", japanese: [["高", "こう"], ["原", "げん"]], tags: ["N4-9"] },
    
    { english: "Lake Water", japanese: [["湖", "こ"], ["水", "すい"]], tags: ["N4-9"] },
    { english: "Lake Yamanaka", japanese: [["山", "やま"], ["中", "なか"], ["湖", "こ"]], tags: ["N4-9"] },
    { english: "Valley (Metaphorical)", japanese: [["谷", "たに"], ["間", "ま"]], tags: ["N4-9"] },
    { english: "Ravine, Gorge", japanese: [["渓", "けい"], ["谷", "こく"]], tags: ["N4-9"] },
    { english: "On the Lake", japanese: [["湖", "こ"], ["上", "じょう"]], tags: ["N4-9"] },
    
    { english: "Seaweed", japanese: [["海", "かい"], ["藻", "そう"]], tags: ["N4-9"] },
    { english: "Sea of Japan", japanese: [["日", "に"], ["本", "ほん"], ["海", "かい"]], tags: ["N4-9"] },
    { english: "Seaside", japanese: [["海", "うみ"], ["辺", "べ"]], tags: ["N4-9"] },
    { english: "Riverside", japanese: [["川", "かわ"], ["辺", "べ"]], tags: ["N4-9"] },
    { english: "Vicinity", japanese: [["近", "きん"], ["辺", "ぺん"]], tags: ["N4-9"] },
    { english: "International Travel", japanese: [["海", "がい"], ["外", "がい"], ["旅", "りょ"], ["行", "こう"]], tags: ["N4-9"] },
    
    { english: "Hometown", japanese: [["ふる", "ふる"], ["里", "さと"]], tags: ["N4-9"] },
    { english: "Human Settlement", japanese: [["人", "ひと"], ["里", "ざと"]], tags: ["N4-9"] },
    { english: "Homecoming", japanese: [["里", "さと"], ["帰り", "がえり"]], tags: ["N4-9"] },
    { english: "Fields and Mountains", japanese: [["野", "の"], ["山", "やま"]], tags: ["N4-9"] },
    { english: "Open Field", japanese: [["野", "の"], ["原", "はら"]], tags: ["N4-9"] },
    { english: "Baseball", japanese: [["野", "や"], ["球", "きゅう"]], tags: ["N4-9"] },
    { english: "Vegetables", japanese: [["野", "や"], ["菜", "さい"]], tags: ["N4-9"] },
    
    { english: "Green Tea", japanese: [["緑", "りょく"], ["茶", "ちゃ"]], tags: ["N4-9"] },
    { english: "Fresh Greenery", japanese: [["新", "しん"], ["緑", "りょく"]], tags: ["N4-9"] },
    { english: "Battery", japanese: [["電", "でん"], ["池", "ち"]], tags: ["N4-9"] },
    { english: "Reservoir", japanese: [["貯", "こ"], ["水", "すい"], ["池", "ち"]], tags: ["N4-9"] },
    
    { english: "Small Bird", japanese: [["小", "こ"], ["鳥", "とり"]], tags: ["N4-9"] },
    { english: "Haneda Airport", japanese: [["羽", "はね"], ["田", "だ"], ["空", "くう"], ["港", "こう"]], tags: ["N4-9"] },

    { english: "Stilts", japanese: [["竹", "たけ"], ["馬", "うま"]], tags: ["N4-9"] },
    { english: "Horse-drawn Carriage", japanese: [["馬", "ば"], ["車", "しゃ"]], tags: ["N4-9"] },
    { english: "Horse Riding", japanese: [["乗", "じょう"], ["馬", "ば"]], tags: ["N4-9"] },
    { english: "Scream", japanese: [["悲", "ひ"], ["鳴", "めい"]], tags: ["N4-9"] },
    { english: "", japanese: [["", ""], ["", ""]], tags: ["N4-9"] },
    // #endregion

    // #region Unlearned (N5)
    { english: "Bath", japanese: [["風", "ふ"], ["呂", "ろ"]], tags: ["N5"] },

    // { english: "", japanese: [["", ""], ["", ""]], tags: ["N5"] },
    // #endregion

    // #region Unlearned (N4)
    { english: "Freedom", japanese: [["自", "じ"], ["由", "ゆう"]], tags: ["N4"] },
    { english: "Economics", japanese: [["経", "けい"], ["済", "ざい"]], tags: ["N4"] },
    { english: "War", japanese: [["戦", "せん"], ["争", "そう"]], tags: ["N4"] },
    { english: "Easy", japanese: [["簡", "かん"], ["単", "たん"]], tags: ["N4"] },
    { english: "Promise, Obligation", japanese: [["約", "やく"], ["束", "そく"]], tags: ["N4"] },
    { english: "Reservation", japanese: [["予", "よ"], ["約", "やく"]], tags: ["N4"] },
    { english: "Schedule", japanese: [["予", "よ"], ["定", "てい"]], tags: ["N4"] },
    { english: "Failure", japanese: [["失", "しっ"], ["敗", "ぱい"]], tags: ["N4"] },
    { english: "Era", japanese: [["時", "じ"], ["代", "だい"]], tags: ["N4"] },

    // { english: "", japanese: [["", ""], ["", ""]], tags: ["N4"] },
    // #endregion

    // #region Unlearned (N3)
    { english: "Peace", japanese: [["平", "へい"], ["和", "わ"]], tags: ["N3"] },
    { english: "Living Room", japanese: [["居", "い"], ["間", "ま"]], tags: ["N3"] },
    { english: "Future (Distant)", japanese: [["未", "み"], ["来", "らい"]], tags: ["N3"] },
    { english: "Management", japanese: [["経", "けい"], ["営", "えい"]], tags: ["N3"] },
    { english: "Experience", japanese: [["経", "けい"], ["験", "けん"]], tags: ["N3"] },
    { english: "Via (by way of)", japanese: [["経", "けい"], ["由", "ゆ"]], tags: ["N3"] },
    { english: "Change (Alternation)", japanese: [["変", "へん"], ["更", "こう"]], tags: ["N3"] },
    { english: "Expert, Doctor", japanese: [["博", "はか"], ["士", "せ"]], tags: ["N3"] },
    { english: "Museum", japanese: [["博", "はく"], ["物", "ぶつ"], ["館", "かん"]], tags: ["N3"] },
    { english: "Major Subject", japanese: [["専", "せん"], ["攻", "こう"]], tags: ["N3"] },
    { english: "Possible", japanese: [["可", "か"], ["能", "のう"]], tags: ["N3"] },
    { english: "Permission", japanese: [["許", "きょ"], ["可", "か"]], tags: ["N3"] },
    { english: "License", japanese: [["免", "めん"], ["許", "きょ"]], tags: ["N3"] },
    { english: "Independence", japanese: [["独", "どく"], ["立", "りつ"]], tags: ["N3"] },
    { english: "Unique, Distinctive", japanese: [["独", "どく"], ["特", "とく"]], tags: ["N3"] },
    { english: "Competition", japanese: [["競", "きょう"], ["争", "そう"]], tags: ["N3"] },
    { english: "Stability", japanese: [["安", "あん"], ["定", "てい"]], tags: ["N3"] },
    { english: "Capital", japanese: [["首", "しゅ"], ["都", "と"]], tags: ["N3"] },
    { english: "Scholar", japanese: [["学", "がく"], ["者", "しゃ"]], tags: ["N3"] },
    { english: "Central", japanese: [["中", "ちゅう"], ["央", "おう"]], tags: ["N3"] },
    { english: "Weapon", japanese: [["武", "ぶ"], ["器", "き"]], tags: ["N3"] },
    { english: "Salary", japanese: [["給", "きゅう"], ["料", "りょう"]], tags: ["N3"] },
    { english: "Present Day (Era)", japanese: [["現", "げん"], ["代", "だい"]], tags: ["N3"] },
    { english: "Eternity", japanese: [["永", "えい"], ["遠", "えん"]], tags: ["N3"] },

    // { english: "", japanese: [["", ""], ["", ""]], tags: ["N3"] },
    // #endregion

    // #region Unlearned (N2)
    { english: "Weekdays", japanese: [["平", "へい"], ["日", "じつ"]], tags: ["N2"] },
    { english: "All at Once", japanese: [["一", "いっ"], ["斉", "せい"]], tags: ["N2"] },
    { english: "Horse Racing", japanese: [["競", "けい"], ["馬", "ば"]], tags: ["N2"] },
    { english: "Full Name", japanese: [["氏", "し"], ["名", "めい"]], tags: ["N2"] },
    { english: "Urgent", japanese: [["至", "し"], ["急", "きゅう"]], tags: ["N2"] },
    { english: "Storm Shutter", japanese: [["雨", "あま"], ["戸", "ど"]], tags: ["N2"] },
    { english: "Size (Dimensions)", japanese: [["寸", "すん"], ["法", "ぽう"]], tags: ["N2"] },
    { english: "Tools (Specialized)", japanese: [["器", "き"], ["具", "ぐ"]], tags: ["N2"] },
    { english: "Negligence", japanese: [["過", "か"], ["失", "しつ"]], tags: ["N2"] },
    { english: "Compensation (Broad)", japanese: [["給", "きゅう"], ["与", "よ"]], tags: ["N2"] },

    // { english: "", japanese: [["", ""], ["", ""]], tags: ["N2"] },
    // #endregion

    // #region Unlearned (N1)
    { english: "Peer", japanese: [["同", "どう"], ["士", "し"]], tags: ["N1"] },
    { english: "Monopoly", japanese: [["独", "どく"], ["占", "せん"]], tags: ["N1"] },
    { english: "Unique, Original", japanese: [["独", "どく"], ["自", "じ"]], tags: ["N1"] },
    { english: "Tactics, Strategy", japanese: [["作", "さく"], ["戦", "せん"]], tags: ["N1"] },
    { english: "Superior (Work)", japanese: [["上", "じょう"], ["司", "し"]], tags: ["N1"] },
    { english: "Organ", japanese: [["器", "き"], ["官", "かん"]], tags: ["N1"] },
    { english: "Generation", japanese: [["世", "せ"], ["代", "だい"]], tags: ["N1"] },

    // { english: "", japanese: [["", ""], ["", ""]], tags: ["N1"] },
    // #endregion
];