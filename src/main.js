import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// iview
import '@/config/iview'

// iconfont
import '@/static/iconfont/iconfont'

// 公共样式
import '@/assets/css/common.scss'

// 动画
import animate from 'animate.css'
Vue.use(animate)

// 根据传入的按钮名称，判断按钮名称在不在当前页面的权限按钮中
Vue.prototype.$button = (name) => {
  return store.state.menu.buttons.includes(name)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
