# 关于Vue项目开发常用配置

## VSCode插件
* markdown预览： Markdown Preview Enhanced
* Vue语法检验： Vetur
* 标签成对修改：Auto Rename Tag
* 标签自动关闭： Auto CLose Tag
* 括号匹配： Bracket Pair Colorizer
* 代码检验： ESLint



## Vue-cli4项目搭建
![项目初始化配置](http://m.qpic.cn/psc?/V10XEGQs0fR8nH/QNsgOSLzUrTyB8UN2gSlSNq124grPXruFnsw22JOe6liEHwi2dlVgmrUOBi.TBEA9Lkk4ERNZGGc02Eo8UaWFw!!/b&bo=wQOeAAAAAAADB34!&rf=viewer_4&t=5)

## Vue常用插件配置
### iVew  
官网地址：<https://www.iviewui.com/docs/guide/start>  
安装命令：`npm install view-design --save`  
按需引入配置：
- 下载：`npm install babel-plugin-import --save-dev`
- 在根目录下新建 .babelrc 文件，代码如下：
```
{
    "plugins": [["import", {
        "libraryName": "view-design",
        "libraryDirectory": "src/components"
    }]]
}
```
- 新建src/config文件夹，用于自定义配置，新建src/config/ivew.js配置所需ivew组件，示例代码如下：
```
import Vue from 'vue'
import 'view-design/dist/styles/iview.css'
import { Button, Table } from 'view-design'
Vue.component('Button', Button)
Vue.component('Table', Table)
```
- 在main.js中引入配置：`import '@/config/ivew'`

### Axios  
官网地址：<https://www.kancloud.cn/yunye/axios/234845>  
安装命令：`npm install axios --save`  
配置：
- 新建src/config/domain.js配置接口域名，代码如下：
```
export default {
    dev: 'http://localhost:8082', // 开发环境接口地址
    pro: 'http://localhost:8083' // 生产环境接口地址
}
```
- 新建src/config/axios.js创建axios实例，代码见文件。  
- 新建src/api文件夹用于管理所有接口，比如用户登录接口为/api/user/login，新建src/api/user.js文件，代码如下：
```
import axios from '@/config/axios'
export function login () {
    return axios.get('/api/user/login')
}
```
- 使用接口：`import { login } from '@/api/user'`  



### RSA加密
安装命令：`npm install jsencrypt --save`
使用代码：
```
import JSEncrypt from 'jsencrypt'
const jsEncrypt = new JSEncrypt()
jsEncrypt.setPublicKey('密钥')
console.log(jsEncrypt.encrypt('要加密的内容'))
```

### Echarts图表

## 其他配置

### Debugger
打开package.json，在eslintConfig中配置rules，代码如下：  
```
"rules": {
    "no-debugger": "off"
}
```

### ESLint错误自动修复
* 方法一，执行命令： `npm run lint`
* 方法二，打开VSCode插件ESLint的配置文件，添加如下代码：
```
"editor.codeActionsOnSave": {
    "source.fixAll": true
}
```

