import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [],
      totalProducts: 0,
      totalPrice: 0,
    };
  },
  getters: {
    cartProducts(state) {
      return state.products;
    },
    totalCartProducts(state) {
      return state.totalProducts;
    },
    totalPrice(state) {
      return state.totalPrice;
    },
  },
  mutations: {
    addProduct(state, payload) {
      if (state.products.length > 0) {
        const productExist = state.products.find(
          (item) => item.product.id == payload.id
        );
        if (productExist) {
          productExist.product.qty++;
          productExist.product.totalPrice =
            productExist.product.price * productExist.product.qty;
        } else {
          const product = {
            product: {
              id: payload.id,
              title: payload.title,
              thumbnail: payload.thumbnail,
              qty: 1,
              price: payload.price,
              totalPrice: payload.price,
            },
          };
          state.products.push(product);
        }
      } else {
        const product = {
          product: {
            id: payload.id,
            title: payload.title,
            thumbnail: payload.thumbnail,
            qty: 1,
            price: payload.price,
            totalPrice: payload.price,
          },
        };
        state.products.push(product);
      }
    },
    totalProducts(state) {
      state.totalProducts = 0;
      state.products.filter(
        (item) => (state.totalProducts += item.product.qty)
      );
    },
    totalPrice(state) {
      state.totalPrice = 0;
      state.products.filter(
        (item) => (state.totalPrice += item.product.totalPrice)
      );
    },
    removeProduct(state, payload) {
      state.products = state.products.filter(
        (item) => item.product.id != payload.product.id
      );
    },
  },
  actions: {
    addProduct(context, payload) {
      context.commit("addProduct", payload);
      context.commit("totalProducts");
      context.commit("totalPrice");
    },
    removeProduct(context, payload) {
      context.commit("removeProduct", payload);
      context.commit("totalProducts");
      context.commit("totalPrice");
    },
  },
});

export default store;
