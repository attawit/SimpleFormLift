/* eslint-disable  block-spacing */
// importing Vue
import Vue from "vue";
// Router
import Router from "vue-router";

// views folder
// HomePage
import HomePage from "../components/Home";

// app-views
// pacitipates
import Paticipants from "../components/Paticipants";

// account-register-done c
import RegisterDone from "../components/RegisterDone";

// privacy
import Privacy from "../components/Privacy";

// policy
import Policy from "../components/Policy";

// notFound
//import NotFound from "../components/NotFound";


// use router
Vue.use(Router);

// exporting router function
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    // privacy
    {
      path: "privacy",
      name: "privacy",
      component: Privacy,
    },
    // privacy
    {
      path: "policy",
      name: "policy",
      component: Policy,
    },
    {
      path: "paticipants",
      name: "account-register-paticipants",
      component: Paticipants,
    },
    {
      path: "registerdone",
      name: "account-register-done",
      component: RegisterDone,
    },
  ],
});
