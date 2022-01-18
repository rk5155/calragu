<template>
    <article>
        <div :class="article.color">
            <img class="card-img-top" :src="article.img" alt="Card image cap">
        </div>
        <div class="card-body">
            <h2 class="card-text">{{ article.title }}</h2>
        </div>    
    </article>
</template>

<script>
export default {
    props: ["article"],
}
</script>

<style lang="scss">
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
    .img-background {
        @include imgBackground(#C8E6FF); 
    }
    .img-background--blue {
        @include imgBackground(#8DD7F7); 
    }
    .img-background--beige {
        @include imgBackground(#FCEFDF); 
    }
    .img-background--red {
        @include imgBackground(#FD938E); 
    }
    
    img {
        width: auto;
        height: 170px;
    }
}
</style>