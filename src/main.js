import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'
import Video from 'video.js'

import './assets/css/index.css'
import './assets/css/style.css'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueWechatTitle)
Vue.prototype.$video = Video

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
