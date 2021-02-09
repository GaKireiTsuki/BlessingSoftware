import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Store = () => import('@/views/StorePage/Store.vue')
const Artists = () => import('@/views/ArtistsPage/Artists.vue')
const Music = () => import('@/views/MusicPage/Music.vue')
const Err = () => import('@/views/ErrPage/Err.vue')

const Search = () => import('@/components/common/SearchPage/Search.vue')
const MoreAlbum = () => import('@/components/common/SearchPage/more/MoreAlbum.vue')
const MV = () => import('@/components/common/MVPage/MV.vue')
const Album = () => import('@/components/common/AlbumPage/Album.vue')
const Artist = () => import('@/components/common/ArtistPage/Artist.vue')

const routes = [
    //首页
    {
        path: '/',
        name: 'Home',
        component: Home,
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
    //商店
    {
        path: '/store',
        name: 'Store',
        component: Store
    },
    //艺术家列表
    {
        path: '/artists',
        name: 'Artists',
        component: Artists
    },
    //音乐
    {
        path: '/music',
        name: 'Music',
        component: Music
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
        path: '/mv/:name/:id',
        name: 'MV',
        component: MV
    },
    //更多专辑
    {
        path: '/more-album/:keywords',
        name: 'MoreAlbum',
        component: MoreAlbum
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