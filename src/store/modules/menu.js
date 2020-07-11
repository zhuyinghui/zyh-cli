/*
 * @Author: zhuyinghui
 * @Date: 2020-07-12 02:11:57
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 04:10:29
 */

export default {
  state: {
    menuSide: [], // 侧边菜单栏
    buttons: [] // 当前页面的权限按钮
  },
  mutations: {
    // 设置侧边菜单栏
    setMenuSide (state, data) {
      state.menuSide = data
    },
    // 设置权限按钮
    setButtons (state, data) {
      state.buttons = data
    }
  }
}
