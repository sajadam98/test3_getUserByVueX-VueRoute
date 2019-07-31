export default {
  appendUser: (state, user) => {
    state.users.push(user)
  },
  initUsers: (state, user) => {
    state.users = user
  }
}
