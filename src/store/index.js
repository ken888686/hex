import { createStore } from 'vuex';
import persistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [
    persistedState({ storage: window.localStorage }),
  ],
  state() {
    return {
      isLogin: false,
      token: 'ready-to-generate',
    };
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    updateToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    login({ commit }, token) {
      commit('login');
      commit('updateToken', token);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
});

export default store;
