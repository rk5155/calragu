<template>
        <div>
            <nav>
                <ul>
                    <li v-for="nav in navList" :key="nav.id" @click="isSelect(nav.category)">{{ nav.category }}</li>
                </ul>
            </nav>

            <div class="article-list">
                <template v-if="isActive == 'スポーツ'">
                    <router-link class="card" v-for="article in sports" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>

                <template v-else-if="isActive == '健康'">
                    <router-link class="card" v-for="article in health" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>

                <template v-else-if="isActive == 'お金'">
                    <router-link class="card" v-for="article in money" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>

                <template v-else-if="isActive == '数学・算数'">
                    <router-link class="card" v-for="article in arithmetic" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>

                <template v-else-if="isActive == '科学'">
                    <router-link class="card" v-for="article in science" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>

                <template v-else-if="isActive == '日付'">
                    <router-link class="card" v-for="article in date" :to="article.url" :key="article.title">
                        <Article :article="article"></Article>
                    </router-link>
                </template>
            </div>
        </div>
</template>

<script>
import articles from '@/mixins/articles.js'
import Article from "../components/Article.vue"

export default {
  mixins: [ articles ],
  components: {
      Article
  },

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