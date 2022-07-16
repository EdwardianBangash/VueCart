import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [],
      totalProducts: null,
    };
  },
  getters: {
    cartProducts(state) {
      return state.products;
    },
    totalCartProducts(state) {
      return state.totalProducts;
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    totalProducts(state) {
      state.totalProducts = state.products.length;
    },
    removeProduct(state, payload) {
      state.products = state.products.filter((item) => item.id != payload.id);
    },
  },
  actions: {
    addProduct(context, payload) {
      context.commit("addProduct", payload);
      context.commit("totalProducts");
    },
    removeProduct(context, payload) {
      context.commit("removeProduct", payload);
      context.commit("totalProducts");
    },
  },
});

export default store;
