import base from './base'
import axios from '@/request/http'

const music = {
    suggest(term) {
        return axios.post(`${base.music}/search/suggest?keywords=${term}`)
    },
    searchartist(term) { // 搜索艺术家
        return axios.post(`${base.music}/search?keywords=${term}&limit=2&type=100`)
    },
    searchalbum(term, asize) { // 搜索专辑
        return axios.post(`${base.music}/search?keywords=${term}&limit=${asize}&type=10`)
    },
    searchsong(term, ssize) { // 搜索歌曲
        return axios.post(`${base.music}/search?keywords=${term}&limit=${ssize}&type=1`)
    },
    searchmv(term, msize) { // 搜索MV
        return axios.post(`${base.music}/search?keywords=${term}&limit=${msize}&type=1004`)
    },

    banner() {
        return axios.post(`${base.music}/banner`)
    },
    newsong(ssize) { // 最新歌曲
        return axios.post(`${base.music}/personalized/newsong?&limit=${ssize}`)
    },
    newalbum(area, asize) { // 最新专辑
        return axios.post(`${base.music}/album/new?area=${area}&limit=${asize}`)
    },

    playmusic(songID) { // 播放音乐
        return axios.post(`${base.music}/song/url?id=${songID}`)
    },
    musicinfo(songID) { // 获取封面/歌曲/信息
        return axios.post(`${base.music}/song/detail?ids=${songID}`)
    },
    musiclyric(songID) { // 获取封面/歌曲/信息
        return axios.post(`${base.music}/lyric?id=${songID}`)
    },
    playmv(id, r) { // 播放mv
        return axios.post(`${base.music}/mv/url?id=${id}&r=${r}`)
    },
    mvinfo(id) { // 获取mv信息
        return axios.post(`${base.music}/mv/detail?mvid=${id}`)
    },

    artistlist(offset, area, type, name) { // 获取艺术家列表
        return axios.post(`${base.music}/artist/list?limit=24&offset=${offset}&type=${type}&area=${area}&initial=${name}`)
    },
    albuminfo(id) { // 获取专辑信息
        return axios.post(`${base.music}/album?id=${id}`)
    },
    artistsong(id) { // 获取歌手单曲
        return axios.post(`${base.music}/artists?id=${id}`)
    },
    artistalbum(id) { // 获取歌手专辑
        return axios.post(`${base.music}/artist/album?id=${id}`)
    },
    artistmv(id) { // 获取歌手MV
        return axios.post(`${base.music}/artist/mv?id=${id}`)
    },

    userinfo() { // 获取账号信息
        return axios.post(`${base.music}/user/account?timerstamp=${Date.now()}`)
    },

    qrkey() { // 获取二维码key
        return axios.post(`${base.music}/login/qr/key?timerstamp=${Date.now()}`)
    },
    qrcreate(key) { // 生成二维码
        return axios.post(`${base.music}/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`)
    },
    checkstatus(key) { // 轮询状态
        return axios.post(`${base.music}/login/qr/check?key=${key}&timerstamp=${Date.now()}`)
    },
    loginstatus() { // 登录状态
        return axios.post(`${base.music}/login/status?timerstamp=${Date.now()}`)
    },
    loginrefresh() { // 刷新登录状态
        return axios.post(`${base.music}/login/refresh?timerstamp=${Date.now()}`)
    },
    account() { // 账号信息
        return axios.post(`${base.music}/user/account?timerstamp=${Date.now()}`)
    },
    email(account, password) { // 邮箱登录
        return axios.post(`${base.music}/login?email=${account}&password=${password}&timerstamp=${Date.now()}`)
    },
    logout() { // 退出登录
        return axios.post(`${base.music}/logout`)
    }
}

export default music