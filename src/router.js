import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Ops from './views/sports/baseball/Ops.vue'
import Whip from './views/sports/baseball/Whip.vue'
import SluggingPercentage from './views/sports/baseball/SluggingPercentage.vue'
import BasePercentage from './views/sports/baseball/BasePercentage.vue'
import Baseball from './views/sports/baseball/Baseball.vue'
import Defense from './views/sports/baseball/Defense.vue'
import Winbase from './views/sports/baseball/Winbase.vue'
import Defensive from './views/sports/baseball/Defensive.vue'
import Qs from './views/sports/baseball/Qs.vue'
import Babip from './views/sports/baseball/Babip.vue'
import Ppa from './views/sports/baseball/Ppa.vue'
import Points from './views/sports/soccer/Points.vue'
import Health from './views/health/health.vue'
import Bmi from './views/health/Bmi.vue'
import Laurel from './views/health/Laurel.vue'
import Ffmi from './views/health/Ffmi.vue'
import Fatmass from './views/health/Fatmass.vue'
import Lbm from './views/health/Lbm.vue'
import ConsumptionTax from './views/money/ConsumptionTax.vue'
import IncomeTax from './views/money/IncomeTax.vue'
import Age from './views/date/age.vue'
import Admission from './views/date/Admission.vue'
import Money from './views/money/Money.vue'
import Date from './views/date/Date.vue'
import Terms from './views/Terms.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Main,
        meta: { title: '【無料自動計算サイト】カルラグ', desc: '自動計算ならカルラグ！いろいろなジャンルを無料で自動計算できる便利なサイトです。' }
    },
    {
      path: '/baseball',
      component: Baseball,
      meta: { title: '【現代野球における指標の自動計算まとめ】', desc: '現代野球において、選手を評価する指標があります。野球におけるいろいろな指標の自動計算方法をまとめました。' }
    },
    {
      path: '/health',
      component: Health,
      meta: { title: '健康に関する自動計算', desc: '健康に関する自動計算記事一覧、まとめです。' }
    },
    {
      path: '/money',
      component: Money,
      meta: { title: 'お金、税金に関する自動計算', desc: 'お金に関する自動計算記事一覧、まとめです。' }
    },
    {
      path: '/date',
      component: Date,
      meta: { title: '日付に関する自動計算', desc: '日付に関する自動計算記事一覧、まとめです。' }
    },
    {
      path: '/baseball/ppa',
      component: Ppa,
      meta: { title: '【現代野球の評価、指標】P/PAの自動計算', desc: 'P/PAとは、一打席当たりの被投球数。数値が高いほどカット技術が高く、粘れる（得意筋でないボールもバットに当てファウルボールにできる、簡単には三振を取らせない）打者であるといえる。' }
    },
    {
        path: '/baseball/ops',
        component: Ops,
        meta: { title: '【現代野球の評価】OPSの自動計算', desc: '現代野球でＯＰＳは得点相関と関係性が高く、ＯＰＳが高い打者は優秀だとされています。' }
    },
    {
      path: '/baseball/whip',
      component: Whip,
      meta: { title: '【現代野球の投手評価】WHIPの自動計算', desc: '1イニングあたりに何人の走者を出しているかを算出しています。' }
    },
    {
      path: '/baseball/slugging-percentage',
      component: SluggingPercentage,
      meta: { title: '【現代野球の評価】長打率の自動計算', desc: '長打率とは、1打数あたりの塁打数の平均値を表します。塁打とは、「単打＝1、二塁打＝2、三塁打＝3、本塁打＝4」として計算します。1打数1安打1本塁打の選手は、塁打数の4を打数の1で割るので、長打率4.000となるわけです。' }
    },
    {
      path: '/baseball/base-percentage',
      component: BasePercentage,
      meta: { title: '【野球の評価】打率、出塁率の自動計算', desc: '出塁率とは、打数、四球、死球、犠飛の合計数のうち、四球、死球、安打で出塁した割合を表します。犠飛のときは出塁ではないので出塁率は下がります。犠打も出塁ではないですが計算から除かれている為、出塁率は変わりません。また失策で出塁したときは、打数が1増えるだけなので出塁率は下がります。' }
    },
    {
      path: '/baseball/defense',
      component: Defense,
      meta: { title: '【野球の評価】防御率の自動計算', desc: '防御率とは、その投手が9イニング（1試合）を投げたとしたら何点に抑えられるかを示す指標です。基準となるのが自責点で、自責点とは失策や捕逸などが絡まない、投手が責任を負わなければならない失点のことです。' }
    },
    {
      path: '/baseball/win',
      component: Winbase,
      meta: { title: '【野球】勝率の自動計算', desc: '勝率とは、引分試合を除いた試合数のうち、勝った割合を表します。' }
    },
    {
      path: '/baseball/defensive',
      component: Defensive,
      meta: { title: '【現代野球の守備評価】守備率の自動計算', desc: '守備率とは、守備機会（アウトに関与した機会）、すなわち刺殺、補殺、失策の合計のうち、失策をしなかった割合を表します。例えばサードゴロで三塁手から一塁手に送球しアウトにした場合、送球した三塁手に補殺が、送球を受けた一塁手に刺殺がそれぞれ与えられます。フライを捕ってアウトにした場合は捕球した野手に刺殺が与えられます。' }
    },
    {
      path: '/baseball/qs',
      component: Qs,
      meta: { title: '【現代野球の投手評価、指標】QS率の自動計算', desc: 'QS（クオリティ・スタート）とは、先発投手を評価する指標として使用されます。' }
    },
    {
      path: '/baseball/babip',
      component: Babip,
      meta: { title: '【現代野球の評価、指標、セイバーメトリクス】Babipの自動計算', desc: '本塁打とファウルを除く打球（ファウルフライは含む）のうち安打となった割合を表す指標。多くの機会数を経ればBABIPの値はどの選手もリーグ平均値付近に収束していくこと、年度ごとの変動は運の影響が大きいことが明らかになっている。' }
    },
    {
        path: '/soccer/points',
        component: Points,
        meta: { title: '【サッカー】勝ち点の自動計算', desc: 'サッカーの勝利3点、引分1点、敗北0点という方式である。' }
    },
    {
      path: '/health/bmi',
      component: Bmi,
      meta: { title: '【肥満度診断】BMI指数の自動計算', desc: 'BMIとは、体重と身長の関係から算出される、ヒトの肥満度を表す体格指数である。' }
    },
    {
      path: '/health/laurel',
      component: Laurel,
      meta: { title: '【子供の肥満度診断】ローレル指数の自動計算', desc: 'ローレル指数とは児童・生徒の肥満の程度を表す体格指数。' }
    },
    {
      path: '/health/ffmi',
      component: Ffmi,
      meta: { title: '【マッチョ指数】FFMIの自動計算ツール', desc: 'FFMI(Fat Free Mass Index)とは、体つきを表現するための指標で、日本語でいうと除脂肪量指数。' }
    },
    {
      path: '/health/fat-mass',
      component: Fatmass,
      meta: { title: '【体脂肪量の自動計算ツール】体重と体脂肪率で分かる！', desc: '体脂肪量は体重と体脂肪率が分かれば計算することができます。' }
    },
    {
      path: '/health/lbm',
      component: Lbm,
      meta: { title: '【除脂肪体重（LBM）の自動計算ツール】体重と体脂肪率で分かる！', desc: '除脂肪体重（Lean Body Mass；LBM）とは、体重において、体脂肪以外の、筋肉や骨、内臓などの総重量のことです。' }
    },
    {
      path: '/money/consumption-tax',
      component: ConsumptionTax,
      meta: { title: '【お金】消費税の自動計算', desc: '消費税は、商品・製品の販売やサービスの提供などの取引に対して広く公平に課税される税で、消費者が負担し事業者が納付します。' }
    },
    {
      path: '/money/income-tax',
      component: IncomeTax,
      meta: { title: '【所得税の自動計算ツール】税率に合わせて自動で所得税を計算します', desc: '所得税の税率は、分離課税に対するものなどを除くと、5パーセントから45パーセントの7段階に区分されています。' }
    },
    {
      path: '/date/age',
      component: Age,
      meta: { title: '【日付】現年齢、当時年齢の自動計算', desc: '生年月日から年齢を自動で計算します。' }
    },
    {
      path: '/date/admission',
      component: Admission,
      meta: { title: '【入学年度】誕生日でわかる！入学年度の自動計算', desc: '誕生日を入力し、小学校から大学までの入学年度を自動で計算します。' }
    },
    {
      path: '/terms',
      component: Terms,
      meta: { title: 'カルラグの利用規約', desc: 'カルラグ（calragu.com）の利用規約やプライバシーポリシーについて説明したページです。' }
    },
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