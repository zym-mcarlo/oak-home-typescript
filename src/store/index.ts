import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false,
    account: '',
    token: '',
    theme: 'dark-theme'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
