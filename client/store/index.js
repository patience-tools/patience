import Vue from 'vue'
import Vuex from 'vuex'
import * as bots from './modules/bots'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}
const modules = {
  bots
}
const store = new Vuex.Store({
  actions,
  state,
  mutations,
  modules
})

export default store
