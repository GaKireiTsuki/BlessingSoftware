import axios from './axios'

const api = {
    postSearchArtist(keywords) { //搜索艺术家
        return axios('/search?keywords=' + keywords + '&limit=2&type=100', {
            method: 'post',
            keywords: keywords,
        })
    },
    postSearchAlbum(keywords) { //搜索艺术家专辑
        return axios('/search?keywords=' + keywords + '&type=10', {
            method: 'post',
            keywords: keywords,
        })
    },
    postSearchSong(keywords) { //搜索艺术家歌曲
        return axios('/search?keywords=' + keywords + '&type=1', {
            method: 'post',
            keywords: keywords,
        })
    },
    postSearchMV(keywords) { //搜索艺术家MV
        return axios('/search?keywords=' + keywords + '&type=1004', {
            method: 'post',
            keywords: keywords,
        })
    },
    postPlayMV(id) { //播放MV
        return axios('/mv/url?id=' + id, {
            method: 'post',
            id: id,
        })
    },
    postInfoMV(id) { //MV信息
        return axios('/mv/detail?mvid=' + id, {
            method: 'post',
            id: id,
        })
    },
    postPlayIf(id) { //检查音乐是否可用
        return axios('/check/music?id=' + id, {
            method: 'post',
            id: id
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
        return axios('/artists?id=' + id, {
            method: 'post',
            id: id
        })
    },
    postArtistSong(id) { //获取歌手单曲
        return axios('/artists?id=' + id, {
            method: 'post',
            id: id
        })
    },
    postArtistAlbum(id) { //获取歌手专辑
        return axios('/artist/album?id=' + id + '&limit=10', {
            method: 'post',
            id: id
        })
    },
    postArtistMV(id) { //获取歌手MV
        return axios('/artist/mv?id=' + id + '&limit=30', {
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