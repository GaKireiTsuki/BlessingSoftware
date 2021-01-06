import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: '',
        img: '',
        msg: '1',
        song: ''
    },
    mutations: {
        play (state, url) {
            state.url = url;
        },
        show (state, img) {
            state.img = img;
        },
        msgs (state, msg) {
            state.msg = msg;
        },
        add (state, song) {
            state.song = song;
        }
    },
    actions: {
        play (music, url) {
            music.commit('play', url)
        },
        show (music, img) {
            music.commit('show', img)
        },
        msgs (music, msg) {
            music.commit('msgs', msg)
        },
        add (music, song) {
            music.commit('add', song)
        }
    },
    modules: {

    }
})