// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null, // Aquí se guardará la información del usuario
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});
