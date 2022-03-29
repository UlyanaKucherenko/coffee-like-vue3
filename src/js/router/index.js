import { createWebHistory, createRouter } from "vue-router";
import Home from "@/js/pages/Home.vue";
import Coffee from "@/js/pages/Coffee.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'main'},
    component: Home,
  },
  {
    path: "/coffee",
    name: "Coffee",
    meta: {layout: 'main'},
    component: Coffee,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;