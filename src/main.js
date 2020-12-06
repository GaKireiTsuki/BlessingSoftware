import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'

import './assets/js/all.js'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueWechatTitle)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
