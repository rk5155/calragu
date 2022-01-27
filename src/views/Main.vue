<template>
    <div>
        <Search v-model="keyword"></Search>
        <nav v-show="!keyword">
            <ul>
                <template v-for="nav in navList">
                    <li v-if="nav.category == 'スポーツ'" class="is-select" :key="nav.id" @click="noSelect(), isSelect(nav.category, $event)">{{ nav.category }}</li>
                    <li v-else :key="nav.category" @click="noSelect(), isSelect(nav.category, $event)">{{ nav.category }}</li>
                </template>
            </ul>
        </nav>

        <div class="article-list">
            
            <template v-if="isActive == 'スポーツ' && searchArticle.length == 0">
                <router-link class="card" v-for="article in sports" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="isActive == '健康' && searchArticle.length == 0">
                <router-link class="card" v-for="article in health" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="isActive == 'お金' && searchArticle.length == 0">
                <router-link class="card" v-for="article in money" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="isActive == '数学・算数' && searchArticle.length == 0">
                <router-link class="card" v-for="article in arithmetic" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="isActive == '科学' && searchArticle.length == 0">
                <router-link class="card" v-for="article in science" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="isActive == '日付' && searchArticle.length == 0">
                <router-link class="card" v-for="article in date" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>

            <template v-else-if="searchArticle.length != 0">
                <router-link class="card" v-for="article in searchArticle" :to="article.url" :key="article.title">
                    <Article :article="article"></Article>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
import Article from "../components/Article.vue"
import Search from "../components/Search.vue"

export default {
  mixins: [ articles ],
  components: {
      Article,
      Search
  },
  methods: {
      isSelect: function (category, event) {
          this.isActive = category;
          event.target.classList.add('is-select');
      },
      noSelect: function() {
          let isSleect = document.querySelector(".is-select");
          if (isSleect) {
              document.querySelector(".is-select").classList.remove("is-select");    
          }
      }
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
.is-select {
    border-bottom: 2px solid $mainColor;
    color: $mainColor;
}
ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding-left: 0;
    margin-bottom: 20px;
}
li {
    list-style: none;
    width: calc(100% / 3);
    text-align: center;
    padding: 4px 0;
    border: 1px solid $bodyColor;
    font-weight: bold;
    @include linkColor
}
@media screen and (max-width: 580px) { 
    li {
        font-size: 14px;
    }
}
</style>