import * as TYPES from './mutation-types'
const mutations = {
    // 发送歌曲ID
    [TYPES.SEND_SONGS_ID] (state, id) {
        state.songID = id
    },

    // 添加歌曲至播放列表
    // 限制重复添加
    [TYPES.ADD_SONGS_PLAY_LIST] (state, songs) {
        const song = JSON.parse(songs)
        state.playList = state.playList.concat(song)
        function repeat(arr) {
            const map = {};
            // 1、把数组元素作为对象的键存起来（这样就算有重复的元素，也会相互替换掉）
            arr.forEach(item => map[JSON.stringify(item, ['id', 'name'])] = item)
            // 2、再把新对象的键名抽成一个数组返回即为不重复的集合
            return Object.keys(map).map(key => JSON.parse(key))
            }
            state.playList = repeat(state.playList)
    },

    // 播放专辑
    [TYPES.PLAY_ALBUM] (state, songs) {
        state.playList = songs
    },

    // 播放历史
    [TYPES.PLAY_HISTORY] (state, history) {
        state.playHistory = state.playHistory.concat(history)
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
        setTimeout(() => {
            const i = state.playList.findIndex(x => x.id === id)
            if (i !== -1) {
                const n = state.playList.slice(i-1)
                if (n && n.length<=0) {
                    return
                } else {
                    state.songID = n[0].id
                }
            }
        }, 800)
    },

    // 下一首歌
    [TYPES.NEXT_SONGS] (state, id) {
        setTimeout(() => {
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
        }, 800)
    },

    // 清空播放列表
    [TYPES.CLEAR_LIST] (state, clear) {
        state.playList = clear
        state.playHistory = clear
    },
    // 发送搜索建议
    [TYPES.SEND_SUGGEST] (state, term) {
        state.term = term;
    },

    // 歌词
    [TYPES.SEND_LYRIC] (state, lyric) {
        state.lyric = lyric
    }
}

export default mutations