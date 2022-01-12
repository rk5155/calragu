<template>
        <div>
            <nav>
                <ul>
                    <li v-for="nav in navList" :key="nav.id" @click="isSelect(nav.category)">{{ nav.category }}</li>
                </ul>
            </nav>

            <div class="article-list">

                <template v-for="article in articles">
                    <router-link class="card" :to="article.url" :key="article.title" v-if="isActive == article.category">
                        <article>
                            <img class="card-img-top" :src="article.img" alt="Card image cap">
                            <div class="card-body">
                                <h2 class="card-text">{{ article.title }}</h2>
                            </div>    
                        </article>
                    </router-link>
                    
                </template>
                

            </div>
        </div>
</template>

<script>
export default {
  methods: {
        isSelect: function (category) {
            this.isActive = category;
        }
  },
  computed: {
        
  },
  data() {
      return {
        isActive: "スポーツ",
        navList: [
            { id: 1, category: 'スポーツ' },
            { id: 2, category: '健康' },
            { id: 3, category: 'お金' },
            { id: 4, category: '数学・算数' },
            { id: 5, category: '科学' },
            { id: 6, category: '日付' }
        ],
        articles: [
            { title: "【現代野球の評価】OPSの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/ops" },
            { title: "WHIPの計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/whip" },
            { title: "【現代野球の評価】長打率の計算", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "/slugging-percentage" },
            { title: "タイトルタイトル4", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
            { title: "タイトルタイトル5", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "健康", url: "" },
            { title: "タイトルタイトル6", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "お金", url: "" },
            { title: "タイトルタイトル7", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "お金", url: "" },
            { title: "タイトルタイトル8", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "スポーツ", url: "" },
            { title: "タイトルタイトル9", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "健康", url: "" },
            { title: "タイトルタイトル0", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "数学・算数", url: "" },
            { title: "タイトルタイトル11", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "日付", url: "" },
            { title: "タイトルタイトル12", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "数学・算数", url: "" },
            { title: "タイトルタイトル13", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
            { title: "タイトルタイトル14", img: "https://saruwakakun.com/wp-content/uploads/2017/06/bookstoread-01-min-1-520x300.png", category: "科学", url: "" },
        ]
      }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
    display: flex;
    flex-wrap: wrap;
    h2 {
        font-size: 18px;
        color: #333333;
        font-weight: bold;
    }
    a {
        margin-bottom: 12px;
        width: calc((100% - 12px) / 2);
        padding: 12px;
        border: none;
        &:nth-child(odd) {
            margin-right: 12px;
        }
        .card-body {
            padding: 0;
            margin-top: 10px;
            font-weight: bold;
        }
    }
    .card {
        height: 264px;
    }
}
ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding-left: 0;
}
li {
    list-style: none;
    width: calc(100% / 3);
    text-align: center;
    padding: 4px 0;
    border: 1px solid $bodyColor;
}
</style>