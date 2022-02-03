<template>
    <div class="main-right-block">
        <h3 class="main-right-block__title"><i class="far fa-newspaper"></i>{{ articlesTitle }}</h3>
        <template  v-for="article in articles.slice(-6)">
            <router-link class="main-right-articles" :to="article.url" :key="article.title">
                <span class="main-right-articles__category">{{ article.category }}</span>
                <h4>{{ article.title }}</h4>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        articlesTitle: { type: String, default: "関連記事" },
        articles: { type: Array }
    }
}
</script>