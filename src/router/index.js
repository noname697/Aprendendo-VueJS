import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/servicos",
    name: "servicos",
    component: () => import("@/views/ServicesView.vue"),
  },
  {
    path: "/usuarios/:id",
    name: "usuarios-editar",
    component: () => import("@/views/UserEditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
