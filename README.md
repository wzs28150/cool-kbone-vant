# cool-kbone-vant
1. 使用 vue-kbone 多端开发(小程序和Web)，基于 [kbone](https://github.com/wechat-miniprogram/kbone) 的 element 和 render。
2. 使用 vant-ui ui组件 [vant](https://github.com/youzan/vant)
3. 尝试新鲜框架

## 特性

* 一键接入，立即使用
* 支持更完整的 vue 语法及特性
* webpack、es6、babel、hot reload、cli、vue-router、vuex，你想要的都有

## 开发

* Web 端：ip + 端口访问，浏览器自动打开，解决局域网访问，方便手机预览
```
npm run web
```
* 小程序端：使用开发者工具打开 dist/mp 目录即可。

```
npm run mp
```
## 构建

* Web 端：构建完成会生成 dist/web 目录

```
npm run build
```

* 小程序端：构建完成会生成 dist/mp 目录

```
npm run build:mp
```

## 目录说明

此模板 Web 端使用单入口，通过 vue-router + 动态 import 的方式来运行；小程序端则按照业务分拆成多个页面，同属一个业务的页面则通过 vue-router 来组织。

```
├─ build
│  ├─ miniprogram.config.js  // mp-webpack-plugin 配置
│  ├─ webpack.base.config.js // Web 端构建基础配置
│  ├─ webpack.dev.config.js  // Web 端构建开发环境配置
│  ├─ webpack.mp.config.js   // 小程序端构建配置
│  └─ webpack.prod.config.js // Web 端构建生产环境配置
├─ dist
│  ├─ mp                     // 小程序端目标代码目录，使用微信开发者工具打开，用于生产环境
│  └─ web                    // web 端编译出的文件，用于生产环境
├─ src
│  ├─ api                    // 接口目录
│  │  ├─ config.js           // axios接口配置文件
│  │  ├─ home.js             // 首页接口
│  ├─ common                 // 通用组件
│  ├─ mp                     // 小程序端入口目录
│  │  ├─ home                // 小程序端 home 页面
│  │  │  └─ main.mp.js       // 小程序端入口文件
│  │  └─ other               // 小程序端 other 页面
│  │     └─ main.mp.js       // 小程序端入口文件
│  ├─ pages                  // 页面目录
│  │  ├─ home                // 首页   页面
│  │  ├─ list                // 分类   页面
│  │  ├─ cart                // 购物车 页面
│  │  ├─ me                  // 我的   页面
│  ├─ router                 // vue-router 路由定义
│  ├─ store                  // vuex 相关目录
│  ├─ App.vue                // Web 端入口主视图
│  └─ main.js                // Web 端入口文件
└─ index.html                // Web 端入口模板
```

## 日志

> 2020.02.27
1. 首页增加 swiper 小程序端采用 wx-swiper web端采用 vant-swiper
2. 增加rem计算 设计稿一般750px 换算基础1rem = 100px
3. 修改使用scss(个人喜好)


> 2020.02.26
1. 使用vant的tabbar组件构建底部菜单.因为自定义tabbar,所以tabbar页面采用spa,解决跳页菜单重新加载问题
2. 使用axios处理api接口,并使用axios-miniprogram-adapter处理小程序兼容


