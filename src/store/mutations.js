import * as TYPES from './mutation-types'
const mutations = {
    // 发送歌曲ID
    [TYPES.SEND_SONGS_ID] (state, id) {
        state.songID = id
    },

    // 添加至播放列表
    [TYPES.ADD_PLAY_LIST] (state, songs) {
        state.playList = state.playList.concat(songs)
        state.playHistory = state.playHistory.concat(songs)
    },

    // 播放历史
    [TYPES.PLAY_HISTORY] (state, songs) {
        state.playHistory = state.playHistory.concat(songs)
    },

    // 移除相应的歌曲
    [TYPES.REMOVE_SONGS] (state, id) {
        const i = state.playList.findIndex(x => x.id === id)
        if (i !== -1) {
            state.playList.splice(i, 1)
        }
    },

    // 上一首歌
    [TYPES.PREV_SONGS] (state, id) {
        const i = state.playList.findIndex(x => x.id === id)
        if (i !== -1) {
            const n = state.playList.slice(i-1)
            if (n && n.length<=0) {
                return
            } else {
                state.songID = n[0].id
            }
        }
    },

    // 下一首歌
    [TYPES.NEXT_SONGS] (state, id) {
        const i = state.playList.findIndex(x => x.id === id)
        if (i !== -1) {
            const n = state.playList.slice(i+1)
            if (n && n.length<=0) {
                const t = state.playList.slice(0, 1)
                state.songID = t[0].id
            } else {
                state.songID = n[0].id
            }
        }
    },

    // 清空播放列表
    [TYPES.CLEAR_PLAY_LIST] (state, clear) {
        state.playList = clear
    },
    // 发送搜索建议
    [TYPES.SEND_SUGGEST] (state, keywords) {
        state.keywords = keywords;
    },

    // 歌词
    [TYPES.SEND_LYRIC] (state, lyric) {
        state.lyric = lyric
    }
}

export default mutations