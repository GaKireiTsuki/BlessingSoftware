import axios from './axios'

const api = {
    postSearch(query) { //搜索
        return axios('/search?keywords=' + this.query, {
            method: 'post',
            query: query,
            params: {
                query: '123'
            }
        })
    },
    postPlay(musicid) { //播放音乐
        return axios('/song/url?id=' + musicid, {
            method: 'post',
            musicid: musicid
        })
    },
    postInfo(musicid) { //获取封面/歌曲/信息
        return axios('/song/detail?ids=' + musicid, {
            method: 'post',
            musicid: musicid
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