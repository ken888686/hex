<template>
  <div class="container mt-4 h-100 text-center d-flex flex-column align-items-center justify-content-center">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <form
          id="form"
          class="form-sign"
        >
          <div class="form-floating mb-3">
            <input
              id="username"
              v-model="account"
              type="email"
              class="form-control"
              placeholder="name@example.com"
              required
              autofocus
              :disabled="disabled"
            >
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
              required
              :disabled="disabled"
            >
            <label for="password">Password</label>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
            :disabled="disabled"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="row mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import router from '@/router';
import store from '@/store';

import { admin } from '@/services';

export default {
  data() {
    return {
      account: '',
      password: '',
      disabled: false,
    };
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    login() {
      this.disabled = true;
      const account = this.account;
      const password = this.password;

      admin.login(account, password).then((res) => {
        store.dispatch('login', res.data.token);
        router.push('/week-2');
      }).catch((err) => {
        this.disabled = false;
        console.error(err);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.form-sign {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
