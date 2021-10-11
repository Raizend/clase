import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    veterinarios: [],
    mascotas: []
  },
  mutations: {
    
    setVeterinarios(state, payload) {
      state.veterinarios = payload;
    },
    setMascotas(state, payload) {
      state.mascotas = payload;
    },
  },
  actions: {

    async cargarVeterinarios({ commit }) {
      const peticion = await fetch('http://localhost:3000/admin');
      const data = await peticion.json();
      commit('setVeterinarios', data);
      console.table(data);
    },

    async cargarMascotas({ commit }) {
      const peticion = await fetch('http://localhost:3000/mascota');
      const data = await peticion.json();
      commit('setMascotas', data);
      console.table(data);
    },

    async crearVeterinario({commit}, objVeterinario){
      const peticion = await fetch('http://localhost:3000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify(objVeterinario)
      })
    }

  },
  modules: {
  }
})
