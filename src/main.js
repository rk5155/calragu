import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import isNan from '@/isNan'
import tableSelect from '@/tableSelect'

Vue.config.productionTip = false

Vue.mixin(isNan)
Vue.mixin(tableSelect)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
