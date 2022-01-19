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
        @click="logout"
      >
        登出
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logoSize: 25,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.go();
    },
  },
};
</script>
