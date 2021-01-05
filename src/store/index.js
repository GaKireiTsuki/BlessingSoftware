import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: '',
        img: ''
    },
    mutations: {
        play (state, url) {
            state.url = url;
        },
        show (state, img) {
            state.img = img;
        }
    },
    actions: {
        play (music, url) {
            music.commit('play', url)
        },
        show (music, img) {
            music.commit('show', img)
        }
    },
    modules: {

    }
})