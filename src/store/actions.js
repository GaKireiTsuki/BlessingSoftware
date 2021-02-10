import * as TYPES from './mutation-types'
const actions = {
    // 登陆状态
    alter ({ commit }, Statu) {
        commit(TYPES.LOGIN_STATU, Statu)
    },

    // 用户ID
    userId ({ commit }, id) {
        commit(TYPES.USER_ID, id)
    },

    // 发送歌曲ID
    playSong ({ commit }, id) {
        commit(TYPES.SEND_SONGS_ID, id)
    },

    // 添加歌曲至播放列表
    addSong ({ commit }, songs) {
        commit(TYPES.ADD_SONGS_PLAY_LIST,
            JSON.stringify(songs, ['id', 'name'])
        )
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