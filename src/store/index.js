import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import axios from 'axios'
import base from '../request/api/base'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songID: '',
        keywords: '',
        playList: [],
    },
    mutations: {
        suggest (state, keywords) {
            state.keywords = keywords;
        },
        play (state, id) {
            state.songID = id;
        },
        add (state, songs) {
            state.playList.push(songs)
        },
        clear (state, clear) {
            state.playList = clear
        }
    },
    actions: {
        suggest (music, keywords) { //传递搜索建议
            music.commit('suggest', keywords)
        },
        play (music, id) { //传递歌曲ID
            music.commit('play', id)
        },
        add (music, songID) { //添加至待播列表
            axios.post(`${base.music}/song/detail?ids=${songID}`)
            .then(res => {
                music.commit('add', res.data.songs[0])
            })
        },
        clear (music) { //传递歌曲ID
            music.commit('clear', [])
        },
    },
    modules: {
        //
    },
    plugins: [
        persistedState()
    ]
})