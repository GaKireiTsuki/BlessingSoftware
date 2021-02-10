import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [
        persistedstate({
            key: 'USER',
            reducer: state => ({
                loginStatu: state.loginStatu,
                uid: state.uid
            })
        }),
        persistedstate({
            key: 'PLAY_LIST',
            reducer: state => ({
                playList: state.playList
            })
        }),
        persistedstate({
            key: 'PLAY_HISTORY',
            reducer: state => ({
                playHistory: state.playHistory
            })
        })
    ]
})