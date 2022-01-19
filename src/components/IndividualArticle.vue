<template>
    <div class="content-article">
        <template v-for="el in article">
            <router-link v-if="el.subcategory == '野球'" :to="el.url" :key="el.title">
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
</template>

<script>
export default {
    props: ["article"],
}
</script>

