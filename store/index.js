import axios from 'axios'
export const state = () => ({
  authUser: null,
  list: []
})
export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_LIST(state, list) {
    state.list = list
    state.list.sort( (a,b)=>a.localeCompare(b) )
  },
  INSERT_LIST(state, elem) {
    state.list.push(elem)
    state.list.sort( (a,b)=>a.localeCompare(b) )
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
      commit('SET_LIST', req.session.list)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data.username)
      commit('SET_LIST', data.list)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Hibás felhasználónév vagy jelszó')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  },
  async bekuld({ commit }, { mit }) {
    await axios.post('/api/proba',{cucc: mit})
    commit('INSERT_LIST', mit)
  }

}
