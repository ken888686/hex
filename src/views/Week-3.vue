<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        :disabled="isLoading"
        @click="setProductId('', 'add')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            {{ item.origin_price }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <span :class="[item.is_enabled ? 'text-success' : 'text-secondary']">
              {{ item.is_enabled ? '啟用' : '未啟用' }}
            </span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="setProductId(item.id,'edit')"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="setProductId(item.id,'del')"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 新增產品 Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5
            id="productModalLabel"
            class="modal-title"
          >
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label
                    for="imageUrl"
                    class="form-label"
                  >
                    輸入主圖網址
                  </label>
                  <input
                    v-model="product.imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="輸入主圖網址"
                  >
                  <img
                    v-if="product.imageUrl!==''"
                    class="img-fluid mt-1"
                    :src="product.imageUrl"
                    alt="primary pic"
                  >
                </div>
                <div
                  v-if="Array.isArray(product.imagesUrl)"
                  class="mb-3"
                >
                  <hr>
                  <div class="mb-3">
                    <label
                      for="imageUrl"
                      class="form-label"
                    >
                      輸入其他圖片網址
                    </label>
                    <div
                      v-for="(img,index) in product.imagesUrl"
                      :key="'pic-' + index"
                      class="mb-3"
                    >
                      <input
                        v-model="product.imagesUrl[index]"
                        type="text"
                        class="form-control"
                        placeholder="輸入其他圖片網址"
                      >
                      <img
                        v-if="product.imagesUrl[index]!==''"
                        class="img-fluid mt-1"
                        :src="product.imagesUrl[index]"
                        alt="other pic"
                      >
                    </div>
                  </div>
                  <div v-if="!product.imagesUrl.length || product.imagesUrl[product.imagesUrl.length-1]">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm d-block w-100"
                      @click="product.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="product.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label
                  for="title"
                  class="form-label"
                >
                  標題
                </label>
                <input
                  id="title"
                  v-model="product.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                >
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label
                    for="category"
                    class="form-label"
                  >
                    分類
                  </label>
                  <input
                    id="category"
                    v-model="product.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label
                    for="price"
                    class="form-label"
                  >
                    單位
                  </label>
                  <input
                    id="unit"
                    v-model="product.unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  >
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label
                    for="origin_price"
                    class="form-label"
                  >
                    原價
                  </label>
                  <input
                    id="origin_price"
                    v-model="product.origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label
                    for="price"
                    class="form-label"
                  >
                    售價
                  </label>
                  <input
                    id="price"
                    v-model="product.price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  >
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label
                  for="description"
                  class="form-label"
                >
                  產品描述
                </label>
                <textarea
                  id="description"
                  v-model="product.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                />
              </div>
              <div class="mb-3">
                <label
                  for="content"
                  class="form-label"
                >
                  說明內容
                </label>
                <textarea
                  id="description"
                  v-model="product.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :checked="product.is_enabled"
                  >
                  <label
                    class="form-check-label"
                    for="is_enabled"
                  >
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="addProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除產品 Modal -->
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5
            id="delProductModalLabel"
            class="modal-title"
          >
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          是否刪除？
          <strong class="text-danger">
            商品(刪除後將無法恢復)。
          </strong>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="deleteProduct"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 結果 Modal -->
  <div
    id="resultProductModal"
    ref="resultProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="resultProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-success text-white">
          <h5
            id="resultProductModalLabel"
            class="modal-title"
          >
            <span>結果</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          {{ message }}
        </div>
        <div class="modal-footer">
          <button
            v-if="success"
            type="button"
            class="btn"
            :class="[success?'btn-outline-seccess':'btn-outline-danger']"
            data-bs-dismiss="modal"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import { debounce } from 'lodash';
import { Modal } from 'bootstrap';
import { auth, admin } from '@/services';
import router from '@/router';
import store from '@/store';

export default {
  data() {
    return {
      product: {
        category: '',
        content: '',
        description: '',
        id: '',
        imageUrl: '',
        imagesUrl: [],
        is_enabled: 0,
        origin_price: 0,
        price: 0,
        title: '',
        unit: '',
        num: 1,
      },
      products: [],
      pagination: {},
      selectedProductId: '',
      isLoading: true,
      productModal: null,
      delProductModal: null,
      resultProductModal: null,
      message: '',
      success: false,
    };
  },
  watch: {
    // 'product.imageUrl': debounce(function (imageUrl) {
    //   this.tempProduct.imageUrl = imageUrl;
    // }, 1000),
    // 'product.imagesUrl': debounce((curr, prev) => {
    //   console.log(`curr: ${curr}`);
    //   console.log(`prev: ${prev}`);
    // }, 1000),
    selectedProductId() {
      if (this.selectedProductId === '') {
        this.product = {
          category: '',
          content: '',
          description: '',
          id: '',
          imageUrl: '',
          imagesUrl: [],
          is_enabled: 0,
          origin_price: 0,
          price: 0,
          title: '',
          unit: '',
          num: 1,
        };
        return;
      }

      this.product = this.products.find(
        (product) => product.id === this.selectedProductId,
      );
    },
  },
  mounted() {
    if (!store.state.isLogin) {
      router.push('/login');
      return;
    }

    this.productModal = new Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static',
    });

    this.delProductModal = new Modal(document.getElementById('delProductModal'), {
      keyboard: false,
      backdrop: 'static',
    });

    this.resultProductModal = new Modal(document.getElementById('resultProductModal'), {
      keyboard: false,
      backdrop: 'static',
    });

    auth
      .check()
      .then((res) => {
        const data = res.data;
        if (data.success) {
          this.getProducts();
        }
      })
      .catch((err) => {
        const data = err.response.data;
        this.message = data.message;
        this.success = data.success;
        store.commit('logout');
        router.push('/login');
      });
  },
  methods: {
    setProductId(id, action) {
      this.selectedProductId = id;
      switch (action) {
        case 'add':
        case 'edit':
          this.productModal.show();
          break;
        case 'del':
          this.delProductModal.show();
          break;
        default:
      }
    },
    getProducts() {
      this.isLoading = true;
      admin
        .getProducts()
        .then((res) => {
          const data = res.data;
          this.products = data.products;
          this.pagination = data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          const data = err.response.data;
          this.message = data.message;
          this.success = data.success;
          store.commit('logout');
          router.push('/login');
        });
    },
    addProduct() {
      this.isLoading = true;
      admin
        .addProduct(this.product)
        .then((res) => {
          const data = res.data;
          this.message = data.message;
          this.success = data.success;
          this.getProducts();
        })
        .catch((err) => {
          const data = err.response.data;
          this.message = data.message;
          this.success = data.success;
          store.commit('logout');
          router.push('/login');
          this.getProducts();
        });
    },
    deleteProduct() {
      admin
        .deleteProduct(this.selectedProductId)
        .then((res) => {
          const data = res.data;
          this.products = data.products;
          this.pagination = data.pagination;
          this.message = data.message;
          this.success = data.success;
          this.getProducts();
        })
        .catch((err) => {
          const data = err.response.data;
          this.message = data.message;
          this.success = data.success;
          store.commit('logout');
          router.push('/login');
        });
    },
  },
};
</script>
