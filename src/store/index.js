import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    veterinarios: []
  },
  mutations: {
    
    setVeterinarios(state, payload) {
      state.veterinarios = payload;
    },
  },
  actions: {

    async cargarVeterinarios({ commit }) {
      const peticion = await fetch('http://localhost:3000/admin');
      const data = await peticion.json();
      commit('setVeterinarios', data);
      console.table(data);
    },

    async crearPersona({commit}, objPersona){
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify(objPersona)
      })
    }

  },
  modules: {
  }
})
