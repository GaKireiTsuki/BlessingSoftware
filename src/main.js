import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './request/api/index'
import VueWechatTitle from 'vue-wechat-title'
import VueLazyload from 'vue-lazyload'
import InfiniteLoading from 'vue-infinite-loading'
import Message from './components/message/index'
import filters from './components/filters/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$message = Message.install
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(VueWechatTitle)
Vue.use(InfiniteLoading, {
    props: {
        spinner: 'circles',
        distance: '10'
    },
    slots: {
        noMore: 'No more message',
        noResults: 'No results message',
        error: 'Opps, something went wrong :('
    },
})
Vue.use(VueLazyload, {
    preLoad: 1,
    loading: require('./assets/img/loading.svg'),
    error: require('./assets/img/error.svg'),
    attempt: 3,
    listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')