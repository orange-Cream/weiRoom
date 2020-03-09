import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入 vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入 lib-flexible 设置rem基准值
import 'amfe-flexible/index.min.js'

// 引入全局css样式, 要覆盖vant的样式
import '@/assets/css/global.less'

// 验证独立文件
import '@/utils/validate.js' // 验证相关

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
