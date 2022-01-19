export default {
    data () {
        return {
            title: '',
            path: '',
            desc: ''
        }
    },
    methods: {
        getMeta(route){
            this.title = route.meta.title
            this.path = route.path
            this.desc = route.meta.desc
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