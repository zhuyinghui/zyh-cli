import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// iviw
import '@/config/ivew'

// iconfont
import '@/assets/iconfont/iconfont'

// 公共样式
import '@/assets/css/common.scss'

// 动画
import animate from 'animate.css'
Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
