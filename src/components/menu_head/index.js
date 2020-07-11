/*
 * @Author: zhuyinghui
 * @Date: 2020-07-12 01:15:18
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 01:15:47
 */
// 头部菜单栏数据
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
    path: '/test'
  }
]
const promise = new Promise((resolve) => {
  resolve(menuList)
})
export default promise
