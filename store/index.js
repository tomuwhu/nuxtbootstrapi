import axios from 'axios'

export const state = () => ({
  authUser: null,
  list: []
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_LIST: function (state, list) {
    state.list = list
  },
  INSERT_LIST: function (state, elem) {
    state.list.push(elem)
  }
}


export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
      commit('SET_LIST', req.session.list)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const resp = await axios.post('/api/login', { username, password })
      commit('SET_USER', resp.data.username)
      commit('SET_LIST', resp.data.list)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  },
  async proba({ commit }, { mit }) {
    await axios.post('/api/proba',{cucc: mit})
    commit('INSERT_LIST', mit)
  }

}
