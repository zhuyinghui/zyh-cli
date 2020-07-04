import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 布局内的页面
const frameIn = [
  {
    path: '',
    redirect: '/home',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/layout/home/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/layout/about/index.vue')
      }
    ]
  }
]

// 布局外的页面
const frameOut = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/login/index.vue')
  // }
]

const routers = require.context('../views/layout', true, /\/index.vue$/)
const effectivePath = []
const autoLoadRoutes = []
for (const item of routers.keys()) {
  const path = item.replace(/\.\//, '/').replace(/\/index.vue/, '')
  const name = item.replace(/\.\//, '').replace(/index.vue/, '').replace(/\//g, '') || 'layout'
  effectivePath.push({
    path,
    name,
    // component: item.replace(/\.\//, '../views/layout/'),
    file: routers(item).default
  })
  // autoLoadRoutes.push(Vue.component(name, routers(item).default))
}
// routers.keys().forEach(name => {
//   const componentName = name.replace(/\.\//, '').replace(/index.vue/, '').replace(/\//g, '') || 'layout'
//   const componentDefault = routers(name)
// Vue.component(componentName, componentDefault.default)
// })
console.log('vue文件 ', effectivePath)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...frameIn,
    ...frameOut,
    ...autoLoadRoutes
  ]
})
console.log('最终路由', [
  ...frameIn,
  ...frameOut,
  ...autoLoadRoutes
])

// router.afterEach(to => {
//   console.log('路由', to)
// })

export default router
