import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Ops from './views/Ops.vue'
import Page1 from './views/Page1.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Main
    },
    {
        path: '/ops',
        component: Ops
    },
    {
        path: '/page1',
        component: Page1
    }
  ],
  //ページ遷移したときトップに移動かつ、ブラウザの戻るボタンを押したとき、もとの位置に戻る
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  
})