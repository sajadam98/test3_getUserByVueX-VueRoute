export default {
    addUser: ({ commit }, user) => {
        commit('appendUser', user)
    }
}
