import Vue from 'vue'
import Vuex from 'vuex'
import getData from "../api/data-api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
  },
  getters: {
    allData: (state)=>state.data,
  },
  mutations: {
    setData:(state,data)=>(state.data = data),
  },
  actions: {
    async fetchData({commit}){
      const res = await getData();
      commit('setData',res)
    },
  },
  modules: {
  }
})
