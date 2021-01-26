import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: '',
        img: '',
        song: '',
        keywords: ''
    },
    mutations: {
        play (state, url) {
            state.url = url;
        },
        show (state, img) {
            state.img = img;
        },
        add (state, song) {
            state.song = song;
        },
        suggest (state, keywords) {
            state.keywords = keywords;
        }
    },
    actions: {
        play (music, url) {
            music.commit('play', url)
        },
        show (music, img) {
            music.commit('show', img)
        },
        add (music, song) {
            music.commit('add', song)
        },
        suggest (music, keywords) {
            music.commit('suggest', keywords)
        }
    },
    modules: {
        //
    },
    plugins: [
        persistedState()
    ]
})