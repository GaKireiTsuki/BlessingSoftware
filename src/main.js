import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'
import VueLazyload from 'vue-lazyload'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'

import './assets/js/all.js'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueWechatTitle)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('./assets/img/thumb_none.png'),
    error: require('./assets/img/blessingsoftware-logo.svg'),
    attempt: 1,
    listenEvents: ['scroll']
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
