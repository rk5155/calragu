export default {
    data () {
        return {
            keyword: "",
            articles: [],
            newArticle: [
                { title: "【現代野球の評価】OPSの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/baseball/ops" },
                { title: "【現代野球の投手評価】WHIPの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/baseball/whip" },
                { title: "【現代野球の評価】長打率の計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/baseball/slugging-percentage" },
                { title: "【野球の評価】打率、出塁率の計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/baseball/base-percentage" },
            ],
            sports: [
                { title: "【現代野球の評価】OPSの計算", img: require('@/assets/images/sports/baseball/baseball_homerun_man.png'), category: "スポーツ", subcategory: "野球", url: "/baseball/ops", color: "img-background" },
                { title: "【現代野球の投手評価】WHIPの計算", img: require('@/assets/images/sports/baseball/baseball_pitcher_overthrow.png'), category: "スポーツ", subcategory: "野球", url: "/baseball/whip", color: "img-background--blue" },
                { title: "【現代野球の評価】長打率の計算", img: require('@/assets/images/sports/baseball/baseball_hit_woman.png'), category: "スポーツ", subcategory: "野球", url: "/baseball/slugging-percentage", color: "img-background--beige" },
                { title: "【野球の評価】打率、出塁率の計算", img: require('@/assets/images/sports/baseball/baseball_batter_man.png'), category: "スポーツ", subcategory: "野球", url: "/baseball/base-percentage", color: "img-background--red" },
                { title: "【サッカー】勝ち点の計算", img: require('@/assets/images/sports/soccer/soccer_dribble2.png'), category: "スポーツ", subcategory: "サッカー", url: "/soccer/points", color: "img-background" },
            ],
            health: [
                { title: "タイトルタイトル5", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "健康", url: "" },
            ],
            money: [
                { title: "タイトルタイトル6", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "お金", url: "" },
                { title: "タイトルタイトル7", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "お金", url: "" },
            ],
            arithmetic: [
                { title: "タイトルタイトル12", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "数学・算数", url: "" },
            ],
            science: [
                { title: "タイトルタイトル13", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
                { title: "タイトルタイトル14", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
            ],
            date: [
                { title: "タイトルタイトル11", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "日付", url: "" },
                { title: "タイトルタイトル11", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "日付", url: "" },
                { title: "タイトルタイトル11", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "日付", url: "" },
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
        },
        searchBabseball: function() {
            let articles = [];
            
            this.sports.forEach(el => {
                this.pushArticle(el, articles);
            });
            this.duplicateDelete(articles)

            return articles;
        }
    },
    methods: {
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