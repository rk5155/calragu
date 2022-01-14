<template>
    <div class="main-right">
        <div class="main-right-block">
            <h3 class="main-right-block__title">新着記事</h3>

            <div class="main-right-articles" v-for="article in articles.slice(-6)" :key="article.title">
                <router-link :to="article.url">
                    <span class="main-right-articles__category">{{ article.category }}</span>
                    <h4>{{ article.title }}</h4>
                </router-link>
            </div>
        </div>
        <div class="main-right-block">
            <h3 class="main-right-block__title">カテゴリー</h3>
            
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
export default {
    mixins: [ articles ],
}
</script>

<style lang="scss" scoped>
.main-right-block {
    // background-color: #ffffff;
}
.main-right-block__title {
    background-color: $mainColor;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    padding: 4px 0;
    font-weight: bold;
}
.main-right-articles {
    padding: 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);
    transition: .3s;
    &:hover {
            box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
            transform: translateY(-4px);
    }
    a {
        color: #333;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
    .main-right-articles__category {
        display: inline-block;
        font-size: 12px;
        background-color: #eeeeee;
        color: #777777;
        padding: 2px 8px;
        margin-bottom: 6px;
        vertical-align: middle;
    }
}
</style>>

