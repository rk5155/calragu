<template>
    <form class="searchForm">
        <input  v-model="inputedValue" type="search" class="text" placeholder="">
        <button type="button" value="検索"><img src="@/assets/images/icon_search.svg" alt=""></button>
    </form>
</template>

<script>
import inputedValue from '@/mixins/inputedValue.js'

export default {
    mixins: [ inputedValue ]
}
</script>

<style lang="scss">
$breakpoints: (
  'sm': 'screen and (max-width: 480px)',
  'md': 'screen and (max-width: 768px)',
  'lg': 'screen and (max-width: 1020px)',
) !default;

@mixin mq($breakpoint: md) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

/* 検索ボックスのスタイル */
.searchForm {
  height: 40px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  @include mq(md){
    height: 40px;
  }

  & input[type="search"] {
    height: 40px;
    width: 92%;
    padding: 0 16px;
    border: none;
    border-right: none;
    font-size: 16px;
    border-radius: 10px 0 0 10px;
    background-color: #ffffff;
    &:focus {
        outline: none;
    }
    
    @include mq(md){
      height: 40px;
      font-size: 16px;
    }
  }
  & button[type="button"] {
    border: none;
    border-left: none;
    padding: 0;
    width: 8%;
    height: 40px;
    text-align: center;
    border-radius: 0px 10px 10px 0;
    background-color: #ffffff;
    
    @include mq(md){
      height: 40px;
      width: 14%;
    }

    & img{
      width: 22px;
      
      @include mq(md){
        width: 20px;
      }
    }
  }
}
</style>