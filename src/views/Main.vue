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
import articles from '@/mixins/articles.js'

export default {
  mixins: [ articles ],
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
        box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);
        transition: .3s;
        &:hover {
            box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
            transform: translateY(-4px);
        }
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