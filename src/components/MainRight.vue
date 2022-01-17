<template>
    <div class="main-right">
        <div class="main-right-block">
            <h3 class="main-right-block__title">新着記事</h3>

            <div class="main-right-articles" v-for="article in newArticle.slice(-6)" :key="article.title">
                <router-link :to="article.url">
                    <span class="main-right-articles__category">{{ article.category }}</span>
                    <h4>{{ article.title }}</h4>
                </router-link>
            </div>
        </div>
        <div class="main-right-block--white">
            <h3 class="main-right-block__title">カテゴリー</h3>

            <div class="main-right-block-wrapper">
                <h4 class="main-right-block__h4">スポーツ</h4>
                <ul>
                    <li v-for="el in sports" :key="el.title">
                        <router-link :to="el.url">{{ el.title }}</router-link>
                    </li>
                </ul>
                
                <h4 class="main-right-block__h4">健康</h4>
                <ul>
                    <li>
                        <router-link to="">健康</router-link>
                    </li>
                </ul>

                <h4 class="main-right-block__h4">お金</h4>
                <ul>
                    <li>
                        <router-link to="">お金</router-link>
                    </li>
                </ul>

                <h4 class="main-right-block__h4">数学・算数</h4>
                <ul>
                    <li>
                        <router-link to="">数学・算数</router-link>
                    </li>
                </ul>

                <h4 class="main-right-block__h4">科学</h4>
                <ul>
                    <li>
                        <router-link to="">科学</router-link>
                    </li>
                </ul>

                <h4 class="main-right-block__h4">日付</h4>
                <ul>
                    <li>
                        <router-link to="">日付</router-link>
                    </li>
                </ul>
            </div>

            
        </div>
    </div>
</template>

<script>
import articles from '@/mixins/articles.js'
export default {
    mixins: [ articles ],
    data() {
        return {
            categorys: [],
            sports: [
                { title: "野球", url: "/baseball" },
                { title: "サッカー", url: "/soccer" },
                { title: "バスケ", url: "/basket" },
                { title: "アメフト", url: "/" },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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
        color: #8a8a8a;
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

