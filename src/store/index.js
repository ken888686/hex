import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLogin: false,
      apiKey: 'xxx',
    };
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    updateApiKey(state, apiKey) {
      state.apiKey = apiKey;
    },
  },
});

export default store;
