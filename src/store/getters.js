// 歌曲ID
export function id(state) {
    return state.songID
}

// 播放列表
export function songs(state) {
    return state.playList.concat(songs)
}

// 歌词
export function lyric(state) {
    return state.lyric
}

// 所见即所得
export function suggest(state) {
    return state.keywords
}