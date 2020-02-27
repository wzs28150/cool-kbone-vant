## kbone 踩坑

1. 样式不支持 rpx 单位 要使用 rem 要设置配置文件
```
miniprogram.config.js
global: {
    rem: true
},
```
2. 使用axios 需要安装 axios-miniprogram-adapter
```
npm i axios-miniprogram-adapter -S


import Axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

if (process.env.isMiniprogram) {
  Axios.defaults.adapter = mpAdapter
}
```
3. 页面跳转 直接a标签  或者 window 事件
```
// 当前页跳转
window.location.href = '你的url'
// 新窗口打开
window.open('你的url')
```
4. 路由要设置两份 小程序一份 web一份
5. swiper 组件不好使
6. 组件按需根据环境变量引用 reduce-loader 代码体积精简
```
 import Web from 'reduce-loader!../../common/Web.vue'
```
7. 平台判断
```
if (!process.env.isMiniprogram) {
    // web 端
    if (isIPhone) {
        // do something
    }
}
```
