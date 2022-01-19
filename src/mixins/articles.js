export default {
    data () {
        return {
            keyword: "",
            articles: [],
            newArticle: [
                { title: "【現代野球の評価】OPSの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/ops" },
                { title: "WHIPの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/whip" },
                { title: "【現代野球の評価】長打率の計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/slugging-percentage" },
                { title: "【野球の評価】打率、出塁率の計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/base-percentage" },
            ],
            sports: [
                { title: "【現代野球の評価】OPSの計算", img: require('@/assets/images/sports/baseball_homerun_man.png'), category: "スポーツ", subcategory: "野球", url: "/ops", color: "img-background" },
                { title: "WHIPの計算", img: require('@/assets/images/sports/baseball_pitcher_overthrow.png'), category: "スポーツ", subcategory: "野球", url: "/whip", color: "img-background--blue" },
                { title: "【現代野球の評価】長打率の計算", img: require('@/assets/images/sports/baseball_hit_woman.png'), category: "スポーツ", subcategory: "野球", url: "/slugging-percentage", color: "img-background--beige" },
                { title: "【野球の評価】打率、出塁率の計算", img: require('@/assets/images/sports/baseball_batter_man.png'), category: "スポーツ", subcategory: "野球", url: "/base-percentage", color: "img-background--red" },
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