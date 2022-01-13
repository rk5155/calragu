export default {
    data () {
        return {
            title: '',
            path: ''
        }
    },
    methods: {
        setMeta(route){
            this.title = route.meta.title
            this.path = route.path
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