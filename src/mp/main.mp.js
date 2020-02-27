import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../App.vue'
import store from '../store'
import Home from '../pages/home/Index.vue'
import List from '../pages/list/Index.vue'
import Detail from '../pages/detail/Index.vue'
import Cart from '../pages/cart/Index.vue'
import Me from '../pages/me/Index.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/test/(home|index)',
    name: 'HomeTest',
    component: Home,
  }, {
    path: '/test/list/:id',
    name: 'List',
    component: List,
  }, {
    path: '/test/detail/:id',
    name: 'Detail',
    component: Detail,
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  }, {
    path: '/me',
    name: 'Me',
    component: Me,
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)
  window.onload = function onload() {
    if (process.env.isMiniprogram) {
      const fonts = 100 * (wx.getSystemInfoSync().screenWidth / 375)
      document.documentElement.style.fontSize = `${fonts}px`
    }
  }

  Vue.config.productionTip = false

  sync(store, router)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
