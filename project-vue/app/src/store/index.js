import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuexVariable: 'HelloWorld',
    conunter: 0
  },
  getters: {
    myVariable(state){
      return state.vuexVariable
    },
    count(state){
      return state.conunter
    }
  },
  mutations: {
    increment:(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
