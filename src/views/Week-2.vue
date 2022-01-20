<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="150">
            是否啟用
          </th>
          <th width="120">
            刪除
          </th>
        </tr>
      </thead>
      <tbody id="productList">
        <tr
          v-for="item in products"
          :key="item.id"
        >
          <td>{{ item.title }}</td>
          <td width="120">
            {{ item.origin_price }}
          </td>
          <td width="120">
            {{ item.price }}
          </td>
          <td width="100">
            <span class=""> {{ item.is_enabled === 1 ? '啟用' : '不啟用' }}</span>
          </td>
          <td width="120">
            <button
              type="button"
              class="btn btn-sm btn-outline-danger move deleteBtn"
              data-action="remove"
              :data-id="item.id"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      目前有 <span id="productCount">{{ products.length }}</span> 項產品
    </p>
  </div>
</template>

<script>
import { admin } from '@/services';
import router from '@/router';
import store from '@/store';

export default {
  data() {
    return {
      isLogin: store.state.isLogin,
      products: [],
    };
  },
  mounted() {
    if (!store.state.isLogin) {
      router.push('/login');
      return;
    }

    admin.check()
      .then((res) => {
        const data = res.data;
        if (data.success) {
          return admin.getProducts();
        }
        return res;
      }).then((res) => {
        const data = res.data;
        this.products = data.products;
      })
      .catch((err) => {
        alert(err.response.data.message);
        store.commit('logout');
        router.push('/login');
      });
  },
  methods: {},
};
</script>
