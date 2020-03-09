import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// localStorage存储用户信息的key名称, 统一设置, 方便后续使用
const USER_KEY = 'hm-toutiao-m-user'

export default new Vuex.Store({
  state: {
    //   通过||设定 , 如果localStorage没有数据, 就返回{}空对象
    user: JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },
  mutations: {
    // 修改/更新用户信息
    // data:{token:xx,refresh_token:xx}
    updateUser (state, data) {
      // 1. vuex 数据更新, 使得有响应式
      state.user = data
      // 2. localStorage 做持久更新
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    // 清除用户信息
    clearUser (state) {
      // 1. vuex 做清除, 使得有响应式
      state.user = {}
      // 2. localStorage 做持久清除
      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {},
  modules: {}
})
