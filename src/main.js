import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.config.productionTip = false;

let data = {
  page: "home"
};

new Vue({
  data,
  router,
  render: (h) => h(App),
}).$mount("#app");
