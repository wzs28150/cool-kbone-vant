import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  sync
} from 'vuex-router-sync'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)
sync(store, router)
function changeFontSize() {
  const fonts = 100 * (document.documentElement.clientWidth / 375)
  document.documentElement.style.fontSize = `${fonts}px`
}
window.onload = function onload() {
  changeFontSize()
}
window.onresize = function onresize() {
  changeFontSize()
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
