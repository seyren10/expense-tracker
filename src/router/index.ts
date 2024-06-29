import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Dashboard from "@/Pages/Dashboard/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/expenses",
    name: "expenses",
    component: () => import("@/Pages/Expenses/Index.vue"),
  },
  {
    path: "/income",
    name: "income",
    component: () => import("@/Pages/Income/Index.vue"),
  },
  {
    path: "/budget",
    name: "budget",
    component: () => import("@/Pages/Budget/Index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
