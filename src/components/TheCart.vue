<template>
  <div class="cart-wrapper" v-if="cartProducts.length > 0">
    <div class="cart-content">
      <h1>Cart Items</h1>
      <h4>Total Quantity: {{ totalCartProducts }}</h4>
    </div>
    <h4>Total Price: {{ totalPrice }}</h4>
    <div class="card" v-for="p in cartProducts" :key="p.id">
      <div class="card-content">
        <img
          :src="p.product.thumbnail"
          :alt="p.product.description"
          height="100"
          width="100"
        />
        <h3>{{ p.product.title }}</h3>
        <p>{{ p.product.description }}</p>
        <div class="cart-footer">
          <button class="add-to-cart" @click="removeFromCart(p)">
            Remove Item
          </button>
          <h4>Qty: {{ p.product.qty }}</h4>
        </div>
        <h4>Total: {{ p.product.totalPrice }}</h4>
      </div>
    </div>
  </div>
  <div class="cart-wrapper" v-else>NO ITEM FOUND IN CART</div>
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
    removeFromCart(product) {
      this.$store.dispatch("removeProduct", product);
    },
  },
};
</script>
