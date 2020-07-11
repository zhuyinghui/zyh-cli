/*
 * @Author: zhuyinghui
 * @Date: 2020-07-11 23:05:44
 * @Last Modified by:   zhuyinghui
 * @Last Modified time: 2020-07-11 23:05:44
 */
const bread = [
  [
    { title: '测试', path: '/test' }
  ],
  [
    { title: '测试', path: '/test' },
    { title: '测试2', path: '/test/test2' }
  ],
  [
    { title: '测试', path: '/test' },
    { title: '测试2', path: '/test/test2' },
    { title: '测试3', path: '/test/test3' }
  ]

]
export function getBread (path) {
  for (let i = 0; i < bread.length; i++) {
    const currentPath = bread[i][bread[i].length - 1].path
    if (currentPath === path) {
      return bread[i]
    }
  }
}
