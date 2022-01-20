<template>
    <header id="header">
      <div class="header-wrapper">
        <router-link  v-if="path == '/'" to="/"><h1 class="navbar-brand u-font__bold" to="/" exact><i class="fas fa-paw"></i>カルラグ<span>自動でいろいろ計算</span></h1></router-link>
        <router-link v-else to="/"><p class="navbar-brand u-font__bold" to="/" exact><i class="fas fa-paw"></i>カルラグ<span>自動でいろいろ計算できる</span></p></router-link>
      </div>
    </header>
</template>

<script>
import getTitle from '@/getTitle'
export default {
  mixins: [ getTitle ],
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  text-align: center;
  a {
    color: #333;
  }
  h1, p {
    margin: 0;
    font-size: 20px;
    color: $mainColor;
    font-size: 36px;
    font-weight: bold;
    font-family: "Nico Moji";
    padding: 0px 0 12px;
  }
  i {
    color: $mainColor;
    font-size: 36px;
    margin-right: 6px;
  }
  span {
    font-size: 16px;
    display: block;
    line-height: 1.0;
  }
}
</style>>

