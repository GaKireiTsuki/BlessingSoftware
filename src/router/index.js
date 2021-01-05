import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const Store = () => import('@/views/Store.vue')
const News = () => import('@/views/News.vue')
const Music = () => import('@/views/Music.vue')
const Search = () => import('@/components/Search.vue')
const Album = () => import('@/components/Album.vue')
const Artist = () => import('@/components/Artist.vue')
const SignIn = () => import('@/components/SignIn.vue')
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
    //商店
    {
        path: '/store',
        name: 'Store',
        component: Store,
        meta: {
            title: 'Blessing Software Store'
        }
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
    //音乐
    {
        path: '/music',
        name: 'Music',
        component: Music,
        meta: {
            title: 'Blessing Software Music'
        }
    },
    //搜索
    {
        path: '/music/search/:keywords',
        name: 'Search',
        component: Search,
        meta: {
            title: 'Blessing Software Search'
        }
    },
    {
        path: '/search',
        redirect: '/music'
    },
    {
        path: '/music/search',
        redirect: '/music'
    },
    //歌手详情
    {
        path: '/music/artist/:id',
        name: 'Artist',
        component: Artist,
        meta: {
            title: 'Blessing Software Artist',
        }
    },
    //专辑详情
    {
        path: '/music/album/:id',
        name: 'Album',
        component: Album,
        meta: {
            title: 'Blessing Software Album',
        }
    },
    //登录
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn,
        meta: {
            title: 'Blessing Software Sign In'
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
    scrollBehavior (to, from, savedPosition) {
        // ...
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router