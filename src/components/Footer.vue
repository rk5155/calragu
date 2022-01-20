<template>
    <footer>
        <p>© Copyright {{ getYear }} カルラグ All rights reserved.</p>
    </footer>
</template>

<script>
export default{
    computed: {
        getYear: function() {
            let year = new Date().getFullYear();
            return year;
        }
    }
}
</script>

<style scoped lang="scss">
footer {
    margin: 0;
    padding: 20px 0;
    text-align: center;
    color: #807171;
    p {
        margin: 0;
    }
}
</style>