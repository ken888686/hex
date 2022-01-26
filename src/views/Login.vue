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
          @submit.prevent="login"
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
            type="submit"
            :disabled="disabled"
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

  <!-- Modal -->
  <div
    id="loginModal"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    aria-labelledby="loginModalLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="loginModalLabel"
            class="modal-title"
          >
            Hexschool
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { Modal } from 'bootstrap';
import router from '@/router';
import store from '@/store';
import { auth } from '@/services';

export default {
  data() {
    return {
      account: '',
      password: '',
      disabled: false,
      loginStatus: null,
      message: 'Success!',
    };
  },
  mounted() {
    this.loginStatus = new Modal(document.getElementById('loginModal'));
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    login() {
      this.disabled = true;
      const account = this.account;
      const password = this.password;

      auth
        .login(account, password)
        .then((res) => {
          const data = res.data;
          store.dispatch('login', data.token);
          this.loginStatus.toggle();
          this.loginResult(true, data.message);
        })
        .catch((err) => {
          this.disabled = false;
          this.loginResult(false, err.response.data.message);
        });
    },
    loginResult(success, message) {
      this.message = message;

      if (success) {
        router.push('/');
      } else {
        this.password = '';
        this.loginStatus.toggle();
      }
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
