export default {
  addUser: ({ commit }, user) => {
    commit('appendUser', user)
  },
  initialUsers: ({ commit }, user) => {
    commit('initUsers', user)
  }
}
