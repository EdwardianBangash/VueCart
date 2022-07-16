<template>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/cart">Go to Cart</router-link>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartProducts"]),
    ...mapGetters(["totalCartProducts"]),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addProduct", product);
    },
    removeFromCart(product) {
      this.$store.dispatch("removeProduct", product);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
  margin: 10px;
  color: #000;
  font-size: 20px;
  padding: 2px;
}

a:hover{
  border-bottom: 1px solid #000;
}

h1 {
  text-align: center;
}
.product-wrapper {
  margin: 0 auto;
}

div.card {
  margin: 10px auto;
  width: 400px;
  background: rgb(234, 222, 222);
  padding: 20px;
  border-radius: 5px;
}

.add-to-cart {
  background: rgb(32, 130, 250);
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.cart-wrapper {
  width: 400px;
  margin: 0 auto;
}

.cart-content {
  display: flex;
  justify-content: space-between;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
}

h4 {
  align-self: center;
}

p {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}

h3 {
  margin-top: 10px;
}
</style>
