/*
 * @Author: zhuyinghui
 * @Date: 2020-07-05 01:55:42
 * @Last Modified by:   zhuyinghui
 * @Last Modified time: 2020-07-05 01:55:42
 */
import axios from 'axios'
import { Message, Spin } from 'view-design'
import domain from '@/config/domain'
const env = process.env.NODE_ENV
const service = axios.create({
  baseURL: env === 'development' ? domain.dev : domain.pro
})
service.interceptors.request.use(
  config => {
    const passUrl = ['/front/studentAction/getLoginUserValidTimes'] // 配置不需要打开动画的接口
    if (!passUrl.includes(config.url)) {
      Spin.show()
    }
    config.headers.token = '123456'
    return config
  },
  error => {
    Spin.hide()
    console.error(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    Spin.hide()
    const dataAxios = response.data
    const { code } = dataAxios
    if (code === undefined) {
      return dataAxios
    } else {
      switch (code) {
        case 0:
          return dataAxios.data
        case 1:
          // 警告提示
          Message.warning({
            content: dataAxios.msg
          })
          return Promise.reject(new Error('code:1， 警告提示' + dataAxios.msg))
        case 2:
          // 错误提示
          Message.error({
            content: dataAxios.msg
          })
          return Promise.reject(new Error('code:2，错误提示' + dataAxios.msg))
        case 3:
          // 登录过期
          return Promise.reject(new Error('code:3, 登陆过期' + dataAxios.msg))
        case 4:
          // 无用户凭证
          return Promise.reject(new Error('code:4, 无用户凭证' + dataAxios.msg))
        default:
          // 不是正确的 code
          return Promise.reject(new Error('code:无, 数据格式错误'))
      }
    }
  },
  error => {
    Spin.hide()
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    Message.error(error.message)
    return Promise.reject(error)
  }
)
export default service
