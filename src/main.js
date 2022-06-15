//import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from './routers/router';
import Swal from 'sweetalert2'
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);


window.Swal = Swal;
const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;


Vue.config.productionTip = false;

Vue.prototype.$liff = window.liff;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");