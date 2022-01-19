import axios from 'axios';

const url = 'https://vue3-course-api.hexschool.io';
const apiPath = 'ken888686';

const admin = {
  login(account, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/api/signin`, {
          data: {
            username: account,
            password,
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
  getProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/v2/api/${apiPath}/admin/products`, {
          headers: {
            authorization: this.$store.state.apiKey,
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
  test() {
    console.log(this.$store);
  },
};

const test = {
  getTest: () => {
    console.log('Hi');
  },
};

export { admin, test };
