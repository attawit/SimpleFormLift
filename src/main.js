import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from './routers/router';

Vue.config.productionTip = false;

Vue.prototype.$liff = window.liff;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");