/*
 * @Author: zhuyinghui
 * @Date: 2020-07-05 01:54:58
 * @Last Modified by:   zhuyinghui
 * @Last Modified time: 2020-07-05 01:54:58
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
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

export default router
