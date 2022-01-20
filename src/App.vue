<template>
  <div>
    <Header></Header>

    <main id="main">

      <div v-if="path == '/baseball'" id="content">
        <router-view></router-view>
      </div>
      
      <div v-else class="main-wrapper">
        <div class="main-left">
          <router-view></router-view>
        </div>
        <MainRight></MainRight>
      </div>

    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainRight from './components/MainRight.vue'
import getTitle from '@/getTitle'
import Footer from './components/Footer.vue'
import 'normalize.css'

export default {
  components: {
    Header,
    MainRight,
    Footer
  },
  mixins: [ getTitle ],
  methods : {
    setMeta(route){
      // タイトルを設定
      if(route.meta.title){
        let setTitle = route.meta.title;
        document.title = setTitle;
      }
      // ディスクリプションを設定
      if(route.meta.desc){
        let setDesc = route.meta.desc;
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      }
    }
  },
  mounted(){
    let route = this.$route;
    this.setMeta(route);
  },
  watch: { 
    '$route' (route) {
      this.setMeta(route);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/article.scss";

main {
    background-color: $bodyColor;
    .main-wrapper {
        width: 980px;
        margin: 0 auto;
        padding: 34px 0;
        display: flex;
        justify-content: space-between;
    }
    .main-left {
        width: 70%;
    }
    .main-right {
        width: 26%;
    }
}
</style>
