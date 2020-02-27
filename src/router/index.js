import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/pages/home/Index.vue')
const List = () => import(/* webpackChunkName: "List" */'@/pages/list/Index.vue')
const Detail = () => import(/* webpackChunkName: "Detail" */'@/pages/detail/Index.vue')
const Cart = () => import(/* webpackChunkName: "Cart" */'@/pages/cart/Index.vue')
const Me = () => import(/* webpackChunkName: "Me" */'@/pages/me/Index.vue')

Vue.use(Router)

export default new Router({
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
