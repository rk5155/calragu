<template>
    <div>
        <h1>{{ title }}</h1>
        <img :src="img" alt="">
        <p v-html="p"></p>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: ["title", "img", "p", "desc"],
}
</script>