<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
          :width="logoSize"
          :height="logoSize"
        >
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            > 每週任務 </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link
                  class="dropdown-item"
                  to="/week-1"
                >
                  Week 1
                </router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/week-2"
                >
                  Week 2
                </router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/week-3"
                >
                  Week 3
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <router-link
        v-if="!isLogin"
        to="/login"
        type="button"
        class="btn btn-primary"
      >
        登入
      </router-link>
      <button
        v-if="isLogin"
        type="button"
        class="btn btn-outline-primary"
        :disabled="isProcessing"
        @click="logout"
      >
        登出
      </button>
    </div>
  </nav>

  <!-- Modal -->
  <div
    id="logoutModal"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    aria-labelledby="logoutModalLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="logoutModalLabel"
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
import { Modal } from 'bootstrap';
import { auth } from '@/services';
import store from '@/store';
import router from '@/router';

export default {
  name: 'Navbar',
  data() {
    return {
      logoSize: 25,
      isProcessing: false,
      message: '',
      logoutModal: null,
    };
  },
  computed: {
    isLogin() {
      return store.state.isLogin;
    },
  },
  mounted() {
    this.logoutModal = new Modal(document.getElementById('logoutModal'));
  },
  methods: {
    logout() {
      this.isProcessing = true;
      auth
        .logout()
        .then((res) => {
          const data = res.data;
          this.logoutResult(true, data.message);
        })
        .catch((err) => {
          this.logoutResult(false, err.response.data.message);
        })
        .finally(() => {
          this.isProcessing = false;
        });
    },
    logoutResult(success, message) {
      this.message = message;
      this.logoutModal.toggle();
      if (success) {
        store.dispatch('logout');
        router.push('/');
      }
    },
  },
};
</script>
