const mutations = {
    suggest (state, keywords) {
        state.keywords = keywords;
    },
    play (state, id) {
        state.songID = id;
    },
    add (state, songs) {
        state.playList = state.playList.concat(songs)
    },
    removesongs (state, id) { //移除相应的歌曲
        const i = state.playList.findIndex(x => x.id === id)
        if (i !== -1) {
            state.playList.splice(i, 1)
        }
    },
    clear (state, clear) {
        state.playList = clear
    },
    lyric (state, lyric) {
        state.lyric = lyric
    }
}

export default mutations