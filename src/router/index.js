import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const News = () => import('@/views/News.vue')
const Store = () => import('@/views/Store.vue')
const GameInfo = () => import('@/views/GameInfo.vue')
const Err = () => import('@/views/Err.vue')

const routes = [
    //首页
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Blessing Software'
        }
    },
    {
        path: '/index',
        redirect: '/'
    },
    {
        path: '/home',
        redirect: '/'
    },

    //新闻
    {
        path: '/news',
        name: 'News',
        component: News,
        meta: {
            title: 'Blessing Software News'
        }
    },

    //商店
    {
        path: '/store',
        name: 'Store',
        component: Store,
        meta: {
            title: 'Blessing Software Store'
        }
    },

    //游戏详情
    {
        path: '/store/:GameID',
        name: 'GameInfo',
        component: GameInfo,
        meta: {
            title: 'Blessing Software Game'
        }
    },

    //错误页
    {
        path: '/*',
        name: 'Err',
        component: Err,
        meta: {
            title: 'Not Found Page - Blessing Software'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router