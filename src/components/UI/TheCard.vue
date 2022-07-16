<template>
    <div class="card" v-for="product in products" :key="product.id">
      <div class="card-content">
        <img
          :src="product.thumbnail"
          :alt="product.description"
          height="100"
          width="100"
        />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
      </div>
      <button class="add-to-cart" @click="addToCart(product)">Add To Cart</button>
    </div>
</template>