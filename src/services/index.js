import axios from 'axios';
import store from '@/store';

const url = 'https://vue3-course-api.hexschool.io';
const apiPath = 'ken888686';

/**
 * 登入及驗證
 */
const admin = {
  /**
   * 登入
   * @param {string} account 帳號
   * @param {string} password 密碼
   * @returns Promise
   */
  login(account, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/admin/signin`, {
          username: account,
          password,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 登出
   * @returns Promise
   */
  logout() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/logout`, {}, {
          headers: {
            authorization: store.state.token,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 驗證是否登入成功
   * @returns Promise
   */
  check() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/api/user/check`, {}, {
          headers: {
            authorization: store.state.token,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 取得產品
   * @returns Promise
   */
  getProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/v2/api/${apiPath}/admin/products`, {
          headers: {
            authorization: store.state.token,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

/**
 * 客戶購物 - 產品
 */
const products = {
  getProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/v2/api/${apiPath}/products`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export { admin, products };
