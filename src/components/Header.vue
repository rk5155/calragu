<template>
    <header id="header">
      <div class="header-wrapper">
        <router-link  v-if="path == '/'" to="/"><h1 class="navbar-brand u-font__bold" to="/" exact>【自動でいろいろ計算できるサイト】天才マンボウ</h1></router-link>
        <router-link v-else to="/"><p class="navbar-brand u-font__bold" to="/" exact>【自動でいろいろ計算できるサイト】天才マンボウ</p></router-link>
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
}
</style>>

