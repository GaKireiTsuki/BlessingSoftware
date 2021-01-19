import base from './base'
import axios from '@/request/http'
/* import qs from 'qs' */

const music = {
    searchartist (keywords) { //搜索艺术家
        return axios.post(`${base.music}/search?keywords=${keywords}&limit=2&type=100`)
    },
    searchalbum (keywords) { //搜索专辑
        return axios.post(`${base.music}/search?keywords=${keywords}&type=10`)
    },
    searchsong (keywords) { //搜索歌曲
        return axios.post(`${base.music}/search?keywords=${keywords}&type=1`)
    },
    searchmv (keywords) { //搜索MV
        return axios.post(`${base.music}/search?keywords=${keywords}&type=1004`)
    },

    newsong (ssize) { //最新歌曲
        return axios.post(`${base.music}/personalized/newsong?&limit=${ssize}`)
    },
    newalbum (area, asize) { //最新专辑
        return axios.post(`${base.music}/album/new?area=${area}&limit=${asize}`)
    },

    playmusic (id) { //播放音乐
        return axios.post(`${base.music}/song/url?id=${id}`)
    },
    musicinfo (id) { //获取封面/歌曲/信息
        return axios.post(`${base.music}/song/detail?ids=${id}`)
    },
    playmv (id) { //播放mv
        return axios.post(`${base.music}/mv/url?id=${id}`)
    },
    mvinfo (id) { //获取mv信息
        return axios.post(`${base.music}/mv/detail?mvid=${id}`)
    },

    albuminfo (id) { //获取专辑信息
        return axios.post(`${base.music}/album?id=${id}`)
    },
    artistsong (id) { //获取歌手单曲
        return axios.post(`${base.music}/artists?id=${id}`)
    },
    artistalbum (id) { //获取歌手专辑
        return axios.post(`${base.music}/artist/album?id=${id}`)
    },
    artistmv (id) { //获取歌手MV
        return axios.post(`${base.music}/artist/mv?id=${id}`)
    },
}

export default music