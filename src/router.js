import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Ops from './views/sports/baseball/Ops.vue'
import Whip from './views/sports/baseball/Whip.vue'
import SluggingPercentage from './views/sports/baseball/SluggingPercentage.vue'
import BasePercentage from './views/sports/baseball/BasePercentage.vue'
import Baseball from './views/sports/baseball/Baseball.vue'
import Points from './views/sports/soccer/Points.vue'


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
      path: '/baseball',
      component: Baseball,
      meta: { title: '野球の計算', desc: 'aaaaa' }
    },
    {
        path: '/baseball/ops',
        component: Ops,
        meta: { title: '【現代野球の評価】OPSの計算', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/baseball//whip',
      component: Whip,
      meta: { title: '【現代野球の投手評価】WHIPの計算', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/baseball//slugging-percentage',
      component: SluggingPercentage,
      meta: { title: '【現代野球の評価】長打率の計算', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/baseball//base-percentage',
      component: BasePercentage,
      meta: { title: '【野球の評価】打率、出塁率の計算', desc: 'ディスクリプションを記述' }
    },
    {
        path: '/soccer/points',
        component: Points,
        meta: { title: '【サッカー】勝ち点の計算', desc: 'ディスクリプションを記述' }
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