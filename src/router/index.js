import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Penawaran from "../views/Penawaran.vue";
import Detail from "@/views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/penawaran",
      name: "penawaran",
      component: Penawaran,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
  ],
});

export default router;
