const actions = {
    suggest ({ commit }, keywords) {
        commit('suggest', keywords)
    },
    play ({ commit }, id) {
        commit('play', id)
    },
    add ({ commit }, songs) {
        commit('add', songs)
    },
    clear ({ commit }) {
        commit('clear', [])
    }
}

export default actions