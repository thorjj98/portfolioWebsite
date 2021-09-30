import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/photos",
    name: "Photos",
    component: () =>
      import("../views/Photos.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import("../views/Resume.vue"),
  },
  {
    path: "/websites",
    name: "Websites",
    component: () =>
      import("../views/Websites.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
