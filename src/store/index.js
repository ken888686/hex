import { createStore } from 'vuex';
import persistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

const store = createStore({
  plugins: [
    persistedState({ storage: window.localStorage }),
  ],
  state() {
    return {
      isLogin: Cookies.get('isLogin'),
      token: Cookies.get('token'),
    };
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      Cookies.set('isLogin', true);
    },
    logout(state) {
      state.isLogin = false;
      Cookies.set('isLogin', false);
      Cookies.set('token', '');
    },
    updateToken(state, token) {
      state.token = token;
      Cookies.set('token', token);
    },
  },
  actions: {
    login({ commit }, token) {
      commit('login');
      commit('updateToken', token);
    },
    logout({ commit }) {
      commit('logout');
      commit('updateToken', '');
    },
  },
});

export default store;
