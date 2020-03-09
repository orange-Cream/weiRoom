import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入 vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
