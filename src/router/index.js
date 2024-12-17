import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: "/penawaran",
            name: "penawaran",
            component: () => import("@/views/Penawaran.vue"),
        },
        {
            path: "/penawaran/detail",
            name: "detail",
            component: () => import("@/views/Detail.vue"),
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () => import("@/views/Checkout.vue"),
        },
        {
            path: "/auth",
            component: () => import("@/views/AuthLayout.vue"),
            children: [
                {
                    path: "/auth/login",
                    component: () => import("@/views/Login.vue"),
                },
                {
                    path: "/auth/register",
                    component: () => import("@/views/Register.vue"),
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

// Redirect pengguna ke halaman login jika belum login
// router.beforeEach(async (to) => {
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/login";
//   }
// });

export default router;
