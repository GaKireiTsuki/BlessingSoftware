import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import serve from './axios/api'
import axios from 'axios'
import $ from 'jquery'
import VueWechatTitle from 'vue-wechat-title'
import VueLazyload from 'vue-lazyload'
import { Loading } from 'element-ui'

import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css';

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

Vue.filter('Duration', function (value) {
    var duration = value
    var min = parseInt(duration / 1000 / 60)
    if (min < 10) {
        min = '0' + min
    }
    var sec = parseInt((duration / 1000) % 60)
    if (sec < 10) {
        sec = '0' + sec
    }
    return `${min}:${sec}`
})

Vue.filter('Year',function(value){
    var date = new Date(value)
    var year = date.getFullYear()
    return `${year}年`
})

Vue.filter('Date',function(value){
    var date = new Date(value) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var year = date.getFullYear()
    var month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)
    var day = date.getDate()
    return `${year}年${month}月${day}日`
})

Vue.prototype.player = function (id) {
    var that = this;
    axios.all([this.$serve.postPlay(id), this.$serve.postInfo(id)])
    .then(axios.spread((res1, res2)=>{
        that.url = res1.data[0].url;
        that.img = res2.songs[0].al.picUrl;
    }))
    $('audio').trigger('play');
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
