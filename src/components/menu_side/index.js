/*
 * @Author: zhuyinghui
 * @Date: 2020-07-12 01:15:22
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 03:41:55
 */
// 侧边菜单栏数据
const menuList = [
  {
    title: '首页',
    icon: 'ios-home-outline',
    path: '/home'
  },
  {
    title: '关于',
    icon: 'ios-infinite-outline',
    path: '/about'
  },
  {
    title: '测试',
    icon: 'ios-build-outline',
    path: '/test',
    children: [
      {
        title: '测试2',
        icon: 'ios-build-outline',
        path: '/test/test2',
        children: [
          {
            title: 'error',
            icon: 'ios-build-outline',
            path: '/error'
          }
        ]
      },
      {
        title: '测试3',
        icon: 'ios-build-outline',
        path: '/test/test3',
        buttons: ['add', 'edit']
      }
    ]
  }
]
const promise = new Promise((resolve) => {
  resolve(menuList)
})
export default promise
