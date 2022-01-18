<template>
    <div>
        <h1>野球の計算</h1>
        <p>〜現代野球の指標計算・指標まとめ</p>

        <img src="../../assets/sports/baseball_homerun_man.png" alt="">

        <p class="content__text">サルワカの「生活の知恵」カテゴリーでは、知っておくと役に立つ生活の知識や料理のコツ、レシピ、便利なサービスの活用方法などを分かりやすくまとめていきます。今後も少しずつ更新していきます。</p>

        <div class="content-article">
            <template v-for="el in sports">
                <router-link v-if="el.subcategory == '野球'" :key="el.title" :to="el.url" >
                    <article class="card">
                        <div class="row g-0">
                            <div :class="el.color">
                                <img :src="el.img" alt="">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">{{ el.title }}</h2>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
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
}
</script>

<style lang="scss">
#content {
    text-align: center;
    width: 980px;
    margin: 0 auto;
    padding: 34px 0;
    h1 {
        font-size: 30px;
        font-weight: bold;
    }
    .card-body {
        padding: 0;
        text-align: left;
    }
    .card {
        h2 {
            font-size: 20px;
            font-weight: bold;
        }
        .card-title {
            margin-bottom: 0;
        }
        .row {
            margin: 0;
            margin: 10px;
        }
        .img-background {
            @include imgBackgroundContent(#C8E6FF); 
        }
        .img-background--blue {
            @include imgBackgroundContent(#8DD7F7); 
        }
        .img-background--beige {
            @include imgBackgroundContent(#FCEFDF); 
        }
        .img-background--red {
            @include imgBackgroundContent(#FD938E); 
        }
        .col-md-8 {
            display: flex;
            align-items: center;
            width: 73%;
            max-width: none;
            padding-right: 0;
        }
        img {
            width: auto;
            height: 110px;
        }
    }
}
.content__text {
    margin: 40px 0 50px;
}
.content-article {
    display: flex;
    flex-wrap: wrap;
    a {
        width: calc((980px - 16px) / 2);
        margin-bottom: 16px;
        border: none;
        transition: .3s;
        color: $textColor;
        &:nth-child(odd) {
            margin-right: 8px;
        }
        &:nth-child(even) {
            margin-left: 8px;
        }
        &:hover {
            box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
            transform: translateY(-4px);
        }
    }
}
</style>