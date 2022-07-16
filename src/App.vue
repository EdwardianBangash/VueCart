<template>
  <div class="product-wrapper">
    <h1>Products</h1>
    <div class="card" v-for="product in products" :key="product.id">
      <div class="card-content">
        <img
          :src="product.thumbnail"
          :alt="product.description"
          height="100"
          width="100"
        />
        <h3>{{ product.title }}</h3>
        <h3>Price: {{ product.price }}</h3>
        <p>{{ product.description }}</p>
      </div>
      <button class="add-to-cart" @click="addToCart(product)">
        Add To Cart
      </button>
    </div>
  </div>

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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/1/1.jpg",
            "https://dummyjson.com/image/i/products/1/2.jpg",
            "https://dummyjson.com/image/i/products/1/3.jpg",
            "https://dummyjson.com/image/i/products/1/4.jpg",
            "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
          ],
        },
        {
          id: 2,
          title: "iPhone X",
          description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          price: 899,
          discountPercentage: 17.94,
          rating: 4.44,
          stock: 34,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/2/1.jpg",
            "https://dummyjson.com/image/i/products/2/2.jpg",
            "https://dummyjson.com/image/i/products/2/3.jpg",
            "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
          ],
        },
        {
          id: 3,
          title: "Samsung Universe 9",
          description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
          price: 1249,
          discountPercentage: 15.46,
          rating: 4.09,
          stock: 36,
          brand: "Samsung",
          category: "smartphones",
          thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
          images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
        },
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/4/1.jpg",
            "https://dummyjson.com/image/i/products/4/2.jpg",
            "https://dummyjson.com/image/i/products/4/3.jpg",
            "https://dummyjson.com/image/i/products/4/4.jpg",
            "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
          ],
        },
        {
          id: 5,
          title: "Huawei P30",
          description:
            "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          price: 499,
          discountPercentage: 10.58,
          rating: 4.09,
          stock: 32,
          brand: "Huawei",
          category: "smartphones",
          thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/5/1.jpg",
            "https://dummyjson.com/image/i/products/5/2.jpg",
            "https://dummyjson.com/image/i/products/5/3.jpg",
          ],
        },
        {
          id: 6,
          title: "MacBook Pro",
          description:
            "MacBook Pro 2021 with mini-LED display may launch between September, November",
          price: 1749,
          discountPercentage: 11.02,
          rating: 4.57,
          stock: 83,
          brand: "APPle",
          category: "laptops",
          thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
          images: [
            "https://dummyjson.com/image/i/products/6/1.png",
            "https://dummyjson.com/image/i/products/6/2.jpg",
            "https://dummyjson.com/image/i/products/6/3.png",
            "https://dummyjson.com/image/i/products/6/4.jpg",
          ],
        },
        {
          id: 7,
          title: "Samsung Galaxy Book",
          description:
            "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          price: 1499,
          discountPercentage: 4.15,
          rating: 4.25,
          stock: 50,
          brand: "Samsung",
          category: "laptops",
          thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/7/1.jpg",
            "https://dummyjson.com/image/i/products/7/2.jpg",
            "https://dummyjson.com/image/i/products/7/3.jpg",
            "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
          ],
        },
        {
          id: 8,
          title: "Microsoft Surface Laptop 4",
          description:
            "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
          price: 1499,
          discountPercentage: 10.23,
          rating: 4.43,
          stock: 68,
          brand: "Microsoft Surface",
          category: "laptops",
          thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/8/1.jpg",
            "https://dummyjson.com/image/i/products/8/2.jpg",
            "https://dummyjson.com/image/i/products/8/3.jpg",
            "https://dummyjson.com/image/i/products/8/4.jpg",
            "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
          ],
        },
        {
          id: 9,
          title: "Infinix INBOOK",
          description:
            "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
          price: 1099,
          discountPercentage: 11.83,
          rating: 4.54,
          stock: 96,
          brand: "Infinix",
          category: "laptops",
          thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
          images: [
            "https://dummyjson.com/image/i/products/9/1.jpg",
            "https://dummyjson.com/image/i/products/9/2.png",
            "https://dummyjson.com/image/i/products/9/3.png",
            "https://dummyjson.com/image/i/products/9/4.jpg",
            "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
          ],
        },
        {
          id: 10,
          title: "HP Pavilion 15-DK1056WM",
          description:
            "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
          price: 1099,
          discountPercentage: 6.18,
          rating: 4.43,
          stock: 89,
          brand: "HP Pavilion",
          category: "laptops",
          thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
          images: [
            "https://dummyjson.com/image/i/products/10/1.jpg",
            "https://dummyjson.com/image/i/products/10/2.jpg",
            "https://dummyjson.com/image/i/products/10/3.jpg",
            "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
          ],
        },
      ],
    };
  },
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
