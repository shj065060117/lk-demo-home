import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import '@/assets/css/reset.css' /*引入公共样式*/
// 请求超时配置
Vue.prototype.axios = axios
Vue.prototype.axios.defaults.timeout = 20000

Vue.config.productionTip = false

// 使用mock模拟数据
let mockPlugin = require('../../mock/index')
Vue.use(mockPlugin)

// 进入路由前的处理
router.beforeEach((to, from, next) => {
    let title = to.meta.title
    console.log(to)
    if (to.meta.title) {
        console.log(title)
    } else {
        console.log('')
    }
    next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
