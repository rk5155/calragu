<template>
    <div>
        <h4 class="main-right-block__h4">{{ title }}</h4>
        <ul>
            <li v-for="category in categorys" :key="category.title">
                <router-link :to="category.url">{{ category.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["categorys", "title"],
    }
</script>