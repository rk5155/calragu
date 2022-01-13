import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Ops from './views/Ops.vue'
import Whip from './views/Whip.vue'
import SluggingPercentage from './views/sports/SluggingPercentage.vue'
import Page1 from './views/Page1.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Main,
        meta: { title: '【自動でいろいろ計算できるサイト】天才マンボウ', desc: 'aaaaa' }
    },
    {
        path: '/ops',
        component: Ops,
        meta: { title: '【現代野球の評価】OPSの計算', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/whip',
      component: Whip,
      meta: { title: '【現代野球の投手評価】WHIPの計算', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/slugging-percentage',
      component: SluggingPercentage,
      meta: { title: '【現代野球の評価】長打率の計算', desc: 'ディスクリプションを記述' }
    },
    {
        path: '/page1',
        component: Page1,
        meta: { title: 'page1', desc: 'ディスクリプションを記述' }
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