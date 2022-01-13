export default {
    data () {
        return {
            title: '',
        }
    },
    methods: {
        setMeta(route){
            this.title = route.meta.title
        }
    },
    mounted() {
        let route = this.$route;
        this.setMeta(route);
    },
    watch: { 
        '$route' (route) {
        this.setMeta(route);
      }
    }
}