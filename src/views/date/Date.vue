<template>
    <div>
        <h1>{{ title }}</h1>

        <img class="content__img" src="@/assets/images/date/img_02.png" alt="">

        <Search v-model="keyword"></Search>

        <div v-if="searchGenreArticle(this.date).length == 0">
            <IndividualArticle :article="date"></IndividualArticle>
        </div>
        <div v-else-if="searchGenreArticle(this.date).length != 0">
            <IndividualArticle :article="searchGenreArticle(this.date)"></IndividualArticle>
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
import Search from "@/components/Search.vue"
import IndividualArticle from "@/components/IndividualArticle.vue"
import getTitle from '@/getTitle'

export default {
    mixins: [ articles, getTitle ],
    components: {
      Search,
      IndividualArticle
  },
}
</script>