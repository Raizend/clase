import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    veterinarios: []
  },
  mutations: {
    
    setVeterinarios(state, payload) {
      state.personas = payload;
    },
  },
  actions: {

    async cargarVeterinarios({ commit }) {
      const peticion = await fetch('http://localhost:3000/admin');
      const data = await peticion.json();
      commit('setVeterinarios', data);
      console.table(data);
    },

  },
  modules: {
  }
})
