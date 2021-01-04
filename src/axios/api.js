import axios from './axios'

const api = {
    postSearch(keywords) { //搜索
        return axios('/search?keywords=' + keywords, {
            method: 'post',
            keywords: keywords,
        })
    },
    postPlay(id) { //播放音乐
        return axios('/song/url?id=' + id, {
            method: 'post',
            id: id
        })
    },
    postInfo(id) { //获取封面/歌曲/信息
        return axios('/song/detail?ids=' + id, {
            method: 'post',
            id: id
        })
    },
    postAlbum(id) { //获取专辑信息
        return axios('/album?id=' + id, {
            method: 'post',
            id: id
        })
    },
    postArtist(id) { //获取歌手信息
        return axios('/artist/desc?id=' + id, {
            method: 'post',
            id: id
        })
    },
    postNewSong() { //最新歌曲
        return axios('/personalized/newsong?&limit=32', {
            method: 'post',
        })
    },
    postNewAlbum() { //最新专辑
        return axios('/album/new?area=ALL&limit=24', {
            method: 'post',
        })
    }
}

export default api