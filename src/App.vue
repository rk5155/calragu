<template>
  <div>
    <Header></Header>

    <main id="main">
      <div class="main-wrapper">

        <div class="main-left">
          <router-view></router-view>
        </div>

        <MainRight></MainRight>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainRight from './components/MainRight.vue'

export default {
  components: {
    Header,
    MainRight
  }
}
</script>

<style lang="scss">

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
