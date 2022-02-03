<template>
    <div>
        <h1>{{ title }}</h1>
        <p>〜現代野球の指標計算・指標まとめ</p>

        <img class="content__img" src="@/assets/images/sports/baseball/baseball_02.png" alt="">

        <p class="content__text">{{ desc }}</p>

        <Search v-model="keyword"></Search>
        <p v-if="searchGenreArticle(this.sports).length == 0 && this.keyword">キーワードに一致する記事はありません。</p>
        <div v-else-if="searchGenreArticle(this.sports).length == 0">
            <IndividualArticle :article="sports"></IndividualArticle>
        </div>
        <div v-else-if="searchGenreArticle(this.sports).length != 0">
            <IndividualArticle :article="searchGenreArticle(this.sports)"></IndividualArticle>
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
import Search from "../../../components/Search.vue"
import IndividualArticle from "../../../components/IndividualArticle.vue"
import getTitle from '@/getTitle'

export default {
    mixins: [ articles, getTitle ],
    components: {
      Search,
      IndividualArticle
  },
}
</script>