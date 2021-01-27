import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songID: '',
        keywords: '',
        playList: []
    },
    mutations: {
        suggest (state, keywords) {
            state.keywords = keywords;
        },
        play (state, id) {
            state.songID = id;
        },
        add (state, songs) {
            state.playList = songs;
        }
    },
    actions: {
        suggest (music, keywords) { //传递搜索建议
            music.commit('suggest', keywords)
        },
        play (music, id) { //传递歌曲ID
            music.commit('play', id)
        },
        add (music, songs) { //添加至待播列表
            music.commit('add', songs)
        }
    },
    modules: {
        //
    },
    plugins: [
        persistedState()
    ]
})