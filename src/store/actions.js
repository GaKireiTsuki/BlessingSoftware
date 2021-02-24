import * as TYPES from './mutation-types'
const actions = {
    // 登陆状态
    alter ({ commit }, Statu) {
        commit(TYPES.LOGIN_STATU, Statu)
    },

    // 退出登陆
    logout ({ commit }) {
        commit(TYPES.LOGOUT)
    },

    // 用户ID
    userId ({ commit }, id) {
        commit(TYPES.USER_ID, id)
    },


    // 播放状态
    playPause ({ commit }, value) {
        switch (value) {
            case true:
                commit(TYPES.SET_PLAYING, value)
                break;
            case false:
                commit(TYPES.SET_PLAYING, value)
                break;
        }
    },

    // 发送歌曲ID
    playSong ({ commit }, id) {
        commit(TYPES.SEND_SONGS_ID, id)
        commit(TYPES.SET_PLAYING, true)
    },

    // 添加歌曲至播放列表
    addSong ({ commit }, songs) {
        commit(TYPES.ADD_SONGS_PLAY_LIST, songs)
    },

    // 播放专辑
    playAlbum ({ commit }, songs) {
        commit(TYPES.PLAY_ALBUM, songs)
    },

    // 清空播放列表
    Clear ({ commit }) {
        commit(TYPES.CLEAR_LIST, [])
    },

    // 移除相应的歌曲
    removeSong ({ commit }, id) {
        commit(TYPES.REMOVE_SONGS, id)
    },

    // 上一首歌
    prevSong ({ commit }, id) {
        commit(TYPES.PREV_SONGS, id)
    },

    // 下一首歌
    nextSong ({ commit }, id) {
        commit(TYPES.NEXT_SONGS, id)
    },

    // 发送搜索建议
    suggest ({ commit }, term) {
        commit(TYPES.SEND_SUGGEST, term)
    }
}

export default actions