export default {
    data () {
        return {
            keyword: "",
            articles: [],
            newArticle: [
                { title: "【現代野球の評価】OPSの自動計算", category: "スポーツ", url: "/baseball/ops" },
                { title: "【現代野球の投手評価】WHIPの自動計算", category: "スポーツ", url: "/baseball/whip" },
                { title: "【現代野球の評価】長打率の自動計算", category: "スポーツ", url: "/baseball/slugging-percentage" },
                { title: "【野球の評価】打率、出塁率の自動計算", category: "スポーツ", url: "/baseball/base-percentage" },
            ],
            sports: [
                { 
                    title: "【現代野球の評価、指標】P/PAの自動計算",
                    text: "P/PA = 投球数 ÷ 打席数<br><br>P/PAは４を超えると高い水準である。",
                    img: require('@/assets/images/sports/baseball/img_05.png'),
                    category: "スポーツ",
                    subcategory: "野球",
                    url: "/baseball/ppa",
                    color: "img-background--red",
                    source: "https://ja.wikipedia.org/wiki/%E9%81%B8%E7%90%83%E7%9C%BC"
                },
                { 
                    title: "【現代野球の評価】OPSの自動計算",
                    text: "【出塁率】＋【長打率】＝【ＯＰＳ】",
                    img: require('@/assets/images/sports/baseball/baseball_homerun_man.png'),
                    category: "スポーツ", subcategory: "野球",
                    url: "/baseball/ops", color: "img-background",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【現代野球の投手評価】WHIPの自動計算",
                    text: "WHIP = 与四球数 + 被安打数 ÷ 投球回数",
                    img: require('@/assets/images/sports/baseball/baseball_pitcher_overthrow.png'),
                    category: "スポーツ", subcategory: "野球",
                    url: "/baseball/whip", color: "img-background--blue",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【現代野球の評価】長打率の自動計算",
                    text: "長打率 = 塁打数 ÷ 打数",
                    img: require('@/assets/images/sports/baseball/baseball_hit_woman.png'),
                    category: "スポーツ",
                    subcategory: "野球",
                    url: "/baseball/slugging-percentage",
                    color: "img-background--beige",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【野球の評価】打率、出塁率の自動計算",
                    text:`打率 ＝ 安打数÷打数<br><br>打率とは、打席数から犠打、犠飛、四死球を除いた打数のうち、安打の割合を表します。<br><br>出塁率 =（安打数 + 四球数 + 死球数）÷（打数 + 四球数 + 死球数 + 犠飛数）`,
                    img: require('@/assets/images/sports/baseball/baseball_batter_man.png'),
                    category: "スポーツ",
                    subcategory: "野球",
                    url: "/baseball/base-percentage",
                    color: "img-background--red",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【野球の評価】防御率の自動計算",
                    text: `防御率 ＝ 自責点×9÷投球回数`,
                    img: require('@/assets/images/sports/baseball/baseball_pitcher_overthrow.png'),
                    category: "スポーツ",
                    subcategory: "野球",
                    url: "/baseball/defense",
                    color: "img-background--blue",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【野球】勝率の自動計算",
                    text: "勝率 ＝ 勝試合数÷（勝試合数＋敗試合数）",
                    img: require('@/assets/images/sports/baseball/baseball_01.jpg'),
                    category: "スポーツ", 
                    subcategory: "野球", url: "/baseball/win", 
                    color: "img-background--white",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【現代野球の守備評価】守備率の自動計算",
                    text: "守備率 ＝ （刺殺＋補殺）÷（刺殺＋補殺＋失策）",
                    img: require('@/assets/images/sports/baseball/baseball_02.png'),
                    category: "スポーツ", 
                    subcategory: "野球", url: "/baseball/defensive", 
                    color: "img-background--red",
                    source: "https://npb.jp/scoring/calculation.html"
                },
                {
                    title: "【現代野球の投手評価、指標】QS率の自動計算",
                    text: "QS率 = QS数 ÷ 先発登板数<br><br>QS = 先発投手が６イニング以上を投げ、かつ自責点を３失点以内に抑える。",
                    img: require('@/assets/images/sports/baseball/baseball_03.png'),
                    category: "スポーツ", 
                    subcategory: "野球", 
                    url: "/baseball/qs", 
                    color: "img-background--blue",
                    source: "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%82%AA%E3%83%AA%E3%83%86%E3%82%A3%E3%83%BB%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88"
                },
                {
                    title: "【現代野球の評価、指標、セイバーメトリクス】Babipの自動計算",
                    text: "BABIP =（安打 − 本塁打）÷（打数 − 三振 − 本塁打 ＋ 犠飛）",
                    img: require('@/assets/images/sports/baseball/baseball_04.png'),
                    category: "スポーツ", 
                    subcategory: "野球", 
                    url: "/baseball/babip", 
                    color: "img-background--blue",
                    source: "https://ja.wikipedia.org/wiki/BABIP"
                },
                {
                    title: "【サッカー】勝ち点の自動計算",
                    text: "勝ち :  3 点<br>引き分け : 1 点<br>負け : 0 点",
                    img: require('@/assets/images/sports/soccer/soccer_dribble2.png'),
                    category: "スポーツ", 
                    subcategory: "サッカー", url: "/soccer/points", 
                    color: "img-background",
                    source: "https://ja.wikipedia.org/wiki/%E5%8B%9D%E3%81%A1%E7%82%B9"
                },
            ],
            health: [
                {
                    title: "【肥満度診断】BMI指数の自動計算",
                    text: "BMI = 体重kg ÷ (身長cm)<sup>2</sup>",
                    img: require('@/assets/images/health/img_02.png'),
                    category: "健康", 
                    url: "/health/bmi", 
                    color: "img-background--beige",
                    source: "https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%87%E3%82%A3%E3%83%9E%E3%82%B9%E6%8C%87%E6%95%B0"
                },
                {
                    title: "【子供の肥満度診断】ローレル指数の自動計算",
                    text: "ローレル指数 = (体重) ÷ (身長m)<sup>3</sup> × 10000000",
                    img: require('@/assets/images/health/health_01.png'),
                    category: "健康", 
                    url: "/health/laurel", 
                    color: "img-background--blue",
                    source: "https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%AC%E3%83%AB%E6%8C%87%E6%95%B0"
                },
                {
                    title: "【マッチョ指数】FFMIの自動計算ツール",
                    text: "FFMI = 体重[kg] x (1 – 体脂肪率) ÷ (身長[cm])<sup>2</sup> = 除脂肪体重[kg] ÷ (身長[cm])<sup>2</sup>　",
                    img: require('@/assets/images/health/img_03.png'),
                    category: "健康", 
                    url: "/health/ffmi", 
                    color: "img-background--blue",
                    source: ""
                },
                {
                    title: "【体脂肪量の自動計算ツール】体重と体脂肪率で分かる！",
                    text: "体脂肪量（kg)＝ 体重(kg) × 体脂肪率（％）",
                    img: require('@/assets/images/health/img_04.png'),
                    category: "健康", 
                    url: "/health/fat-mass", 
                    color: "img-background--red",
                    source: ""
                },
            ],
            money: [
                {
                    title: "【お金】消費税の自動計算",
                    text: "消費税 = 税抜き価格（本体価格）× 消費税率",
                    img: require('@/assets/images/money/img_01.png'),
                    category: "お金",
                    url: "/money/consumption-tax",
                    color: "img-background--beige",
                    source: "https://www.nta.go.jp/publication/pamph/koho/kurashi/html/01_3.htm"
                },
                {
                    title: "【所得税の自動計算ツール】税率に合わせて自動で所得税を計算します",
                    text: "所得税 = 所得 × 税率 - 控除額",
                    img: require('@/assets/images/money/img_02.png'),
                    category: "お金",
                    url: "/money/income-tax",
                    color: "img-background--red",
                    source: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm"
                },
            ],
            arithmetic: [
                { title: "タイトルタイトル12", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "数学・算数", url: "" },
            ],
            science: [
                { title: "タイトルタイトル13", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
                { title: "タイトルタイトル14", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
            ],
            date: [
                { 
                    title: "【日付】現年齢、当時年齢の自動計算",
                    text: "生年月日からシンプルに年齢を算出",
                    img: require('@/assets/images/date/img_01.png'),
                    category: "日付",
                    color: "img-background",
                    url: "/date/age" ,
                    source: ""
                },
                { 
                    title: "【入学年度】誕生日でわかる！入学年度の自動計算",
                    text: "履歴書などに役立てて下さい。<br>留年や浪人は考慮されていません。",
                    img: require('@/assets/images/date/img_02.png'),
                    category: "日付",
                    color: "img-background--blue",
                    url: "/date/admission" ,
                    source: ""
                },
            ],
        }
    },
    computed: {
        searchArticle: function() {
            let articles = [];

            this.sports.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.health.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.money.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.arithmetic.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.science.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.date.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.duplicateDelete(articles)

            return articles
        }
    },
    methods: {
        searchGenreArticle: function(genreArticle) {
            let articles = [];
            
            genreArticle.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.duplicateDelete(articles)

            return articles;
        },
        pushArticle: function(el, articles) {
            if (el.title.toLowerCase().includes(this.keyword.toLowerCase()) && this.keyword) {
                articles.push(el)
            } else if(!this.keyword) {
                articles = [];
            }
        },
        duplicateDelete: function(articles) {
            // 重複を削除
            articles = articles.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            return articles
        }
    },
}