<template>
    <header id="header">
      <div class="header-wrapper">
        <router-link  v-if="path == '/'" to="/"><h1 class="navbar-brand u-font__bold" to="/" exact><i class="fas fa-dog"></i>【自動でいろいろ計算できる】カルラグ</h1></router-link>
        <router-link v-else to="/"><p class="navbar-brand u-font__bold" to="/" exact>【自動でいろいろ計算できる】カルラグ</p></router-link>
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
  }
}
</style>>

