
const rongIM = {
  state: {
    newMsg: '',
    user: ''
  },
  mutations: {
    SET_NEWMSG: (state, message) => {
      state.newMsg = message
    },
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    'rong:newmsg'({ commit }, message) {
      commit('SET_NEWMSG', message)
    },
    'rong:user'({ commit }, message) {
      commit('SET_USER', message)
    }
  }
}

export default rongIM
