import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import serve from './axios/api'
import VueWechatTitle from 'vue-wechat-title'
import VueLazyload from 'vue-lazyload'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'

Vue.config.productionTip = false
Vue.prototype.$serve = serve
Vue.use(VueWechatTitle)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('./assets/img/NotFoundPhoto.svg'),
    error: require('./assets/img/NotFoundPhoto.svg'),
    attempt: 1,
    listenEvents: ['scroll']
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
