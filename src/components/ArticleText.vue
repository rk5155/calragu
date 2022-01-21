<template>
    <div>
        <template v-for="el in article">
            <div v-if="el.title == title" :key="el.title">
                <h1>{{ title }}</h1>
                <img :src="el.img" alt="">
                <p v-html="el.text"></p>
                <p>{{ desc }}</p>
                <p>出典: <a :href="el.source">{{ el.source }}</a></p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["title", "desc", "article"],
}
</script>