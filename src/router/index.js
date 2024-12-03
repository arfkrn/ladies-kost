import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Penawaran from "@/views/Penawaran.vue";
import Detail from "@/views/Detail.vue";
import AuthLayout from "@/views/AuthLayout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Checkout from "@/views/Checkout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/penawaran",
      name: "penawaran",
      component: Penawaran,
    },
    {
      path: "/penawaran/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "/auth/login",
          component: Login,
        },
        {
          path: "/auth/register",
          component: Register,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
