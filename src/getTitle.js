export default {
    data () {
        return {
            title: '',
            path: ''
        }
    },
    methods: {
        getMeta(route){
            this.title = route.meta.title
            this.path = route.path
        }
    },
    mounted() {
        let route = this.$route;
        this.getMeta(route);
    },
    watch: { 
        '$route' (route) {
        this.getMeta(route);
      }
    }
}