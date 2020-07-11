/*
 * @Author: zhuyinghui
 * @Date: 2020-07-05 01:54:58
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 04:12:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import menuList from '@/components/menu_side'

Vue.use(VueRouter)

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/error')
  }
]

const routers = require.context('../views/layout', true, /\/index.vue$/)
const autoLoadRoutes = []
for (const item of routers.keys()) {
  const path = item.replace(/\.\//, '/').replace(/\/index.vue/, '')
  const name = item.replace(/\.\//, '').replace(/index.vue/, '').replace(/\//g, '') || 'layout'
  if (path) {
    autoLoadRoutes.push({
      path,
      name,
      component: routers(item).default
    })
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home',
      component: () => import('../views/layout/index.vue'),
      children: autoLoadRoutes
    },
    ...frameOut
  ]
})

router.beforeEach((to, from, next) => {
  // 存储当前页面的权限按钮并存储
  const getButtons = (menuSide) => {
    for (const item of menuSide) {
      if (item.path === to.path) {
        if (item.buttons) {
          store.commit('setButtons', item.buttons)
        } else {
          store.commit('setButtons', [])
        }
      }
      if (item.children) {
        getButtons(item.children)
      }
    }
  }
  // 获取菜单栏数据
  if (!store.state.menu.menuSide.length) {
    menuList.then(data => {
      getButtons(data)
      // 存储菜单栏数据
      store.commit('setMenuSide', data)
    })
  } else {
    getButtons(store.state.menu.menuSide)
  }

  next()
})

export default router
