import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../components/TheHome.vue';
import TheCart from '../components/TheCart.vue';
const routes = [
  { path: "/", component: TheHome },
  { path: "/cart", component: TheCart },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
