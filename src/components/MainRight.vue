<template>
    <div class="main-right">
        <div class="main-right-block">
            <h3 class="main-right-block__title"><i class="far fa-newspaper"></i>新着記事</h3>

            <template  v-for="article in newArticle.slice(-6)">
                <router-link class="main-right-articles" :to="article.url" :key="article.title">
                    <span class="main-right-articles__category">{{ article.category }}</span>
                    <h4>{{ article.title }}</h4>
                </router-link>
            </template>
        </div>
        <div class="main-right-block--white">
            <h3 class="main-right-block__title"><i class="fas fa-book-open"></i>カテゴリー</h3>

            <div class="main-right-block-wrapper">
                <Category :categorys="sports" title="スポーツ" icon="fas fa-running"></Category>
                <Category :categorys="health" title="健康" icon="far fa-heart"></Category>
                <Category :categorys="money" title="お金" icon="fas fa-yen-sign"></Category>
                <Category :categorys="arithmetic" title="数学・算数" icon="fas fa-divide"></Category>
                <Category :categorys="science" title="科学" icon="fas fa-vial"></Category>
                <Category :categorys="date" title="日付" icon="far fa-calendar-alt"></Category>
            </div>
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
import Category from "../components/Category.vue"

export default {
    mixins: [ articles ],
    data() {
        return {
            sports: [
                { title: "野球", url: "/baseball" },
                { title: "サッカー", url: "/soccer" },
                { title: "バスケ", url: "/basket" },
                { title: "アメフト", url: "/" },
            ],
            health: [
                { title: "健康", url: "/" },
            ],
            science: [
                { title: "数学・算数", url: "/" },
            ],
            money: [
                { title: "お金", url: "/" },
            ],
            arithmetic: [
                { title: "科学", url: "/" },
            ],
            date: [
                { title: "日付", url: "/" },
            ]
        }
    },
    components: {
                Category,
    },
}
</script>

<style lang="scss">
.main-right-block {
}
.main-right-block-wrapper {
    padding: 14px;
    ul {
        margin-bottom: 20px;
        padding-left: 20px;
    }
    li {
        position: relative;
        padding-left: 14px;
        color: #333;
        text-decoration: none;
        list-style: none;
        margin-bottom: 4px;
        &::before {
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 6px 0 6px 8px;
            border-color: transparent transparent transparent #8a8a8a;
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -6px;
        }
    }
    a {
        @include linkColor
    }
    i {
        margin-right: 6px;
        color: $mainColor;
    }
}
.main-right-block__h4 {
    font-size: 16px;
    font-weight: bold;
}
.main-right-block--white {
    background-color: #ffffff;
}
.main-right-block__title {
    background-color: $mainColor;
    color: #ffffff;
    text-align: left;
    font-size: 18px;
    padding: 8px 14px;
    font-weight: bold;
    i {
        margin-right: 10px;
    }
}
.main-right-articles {
    display: block;
    padding: 10px 14px;
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);
    transition: .3s;
    color: #333;
        &:hover {
            text-decoration: none;
            color: #333;
        }
    &:hover {
            box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
            transform: translateY(-4px);
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
        line-height: 1.4;
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

