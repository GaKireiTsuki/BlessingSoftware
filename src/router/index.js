import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Radio = () => import('@/views/RadioPage/Radio.vue')
const Account = () => import('@/views/AccountPage/Account.vue')
const Artists = () => import('@/views/ArtistsPage/Artists.vue')
const Music = () => import('@/views/MusicPage/Music.vue')
const Err = () => import('@/views/ErrPage/Err.vue')

const Search = () => import('@/components/common/SearchPage/Search.vue')
const MV = () => import('@/components/common/MVPage/MV.vue')
const Album = () => import('@/components/common/AlbumPage/Album.vue')
const Artist = () => import('@/components/common/ArtistPage/Artist.vue')

const routes = [
    //首页
    {
        path: '/',
        redirect: '/music'
    },
    {
        path: '/index',
        redirect: '/'
    },
    {
        path: '/home',
        redirect: '/'
    },
    //账户
    {
        path: '/account',
        name: 'Account',
        component: Account,
        meta: {
            title: 'BS Music - 账户'
        },
        beforeEnter: (to, from, next) => {
            if (store.state.loginStatu !== true)
            next({ name: 'Music' })
            else next()
        }
    },
    //广播
    {
        path: '/radio',
        name: 'Radio',
        component: Radio,
        meta: {
            title: 'BS Music - 广播'
        }
    },
    //艺术家列表
    {
        path: '/artists',
        name: 'Artists',
        component: Artists,
        meta: {
            title: 'BS Music - 艺人'
        }
    },
    //音乐
    {
        path: '/music',
        name: 'Music',
        component: Music,
        meta: {
            title: 'BS Music'
        }
    },
    //搜索
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    //歌手详情
    {
        path: '/artist/:name/:id',
        name: 'Artist',
        component: Artist
    },
    //MV
    {
        path: '/music-video/:name/:id',
        name: 'MV',
        component: MV
    },
    //专辑详情
    {
        path: '/album/:name/:id',
        name: 'Album',
        component: Album
    },
    //错误页
    {
        path: '/*',
        name: 'Err',
        component: Err
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
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