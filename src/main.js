import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import serve from './axios/api'
import VueWechatTitle from 'vue-wechat-title'
import VueLazyload from 'vue-lazyload'
import { Loading } from 'element-ui'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'

Vue.config.productionTip = false
Vue.prototype.$serve = serve
Vue.use(VueWechatTitle)
Vue.use(Loading)
Vue.use(VueLazyload, {
    preLoad: 1,
    loading: require('./assets/img/NotFoundPhoto.svg'),
    error: require('./assets/img/NotFoundPhoto.svg'),
    attempt: 3,
    listenEvents: ['scroll']
})
Vue.filter('Duration', function (originVal) {
    let duration = originVal
    let min = parseInt(duration / 1000 / 60)
    if (min < 10) {
        min = + min
    }
    let sec = parseInt((duration / 1000) % 60)
    if (sec < 10) {
        sec = '0' + sec
    }
    return `${min}:${sec}`
})
Vue.filter('Year',function(originVal){
    const date = new Date(originVal)
    const year = date.getFullYear()
    return `${year}年`
})
Vue.filter('Date',function(originVal){
    const date = new Date(originVal)
    const year = date.getFullYear()
    const month = (date.getMonth()+ 1 + '').padStart(2,'')
    const day = (date.getMonth() + '').padStart(2,'')
    return `${year}年${month}月${day}日`
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
