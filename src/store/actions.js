import * as TYPES from './mutation-types'
const actions = {
    // 发送歌曲ID
    play ({ commit }, id) {
        commit(TYPES.SEND_SONGS_ID, id)
    },

    // 添加至播放列表
    add ({ commit }, songs) {
        commit(TYPES.ADD_PLAY_LIST, songs)
    },

    // 清空播放列表
    Clear ({ commit }) {
        commit(TYPES.CLEAR_PLAY_LIST, [])
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
    suggest ({ commit }, keywords) {
        commit(TYPES.SEND_SUGGEST, keywords)
    }
}

export default actions