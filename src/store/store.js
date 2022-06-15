/* eslint-disable  indent,object-shorthand,object-property-newline */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");
let currentuser = window.localStorage.getItem("currentuser");
let liffid = window.localStorage.getItem("liffid");
let eventname = window.localStorage.getItem("eventname");
let suggestedId = window.localStorage.getItem("suggestedId");

const store = new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    suggestedId: suggestedId ? JSON.parse(suggestedId) : "",
    currentuser: currentuser
      ? JSON.parse(currentuser)
      : {
          id: "",
          name: "",
          displayName: "",
          displayUrl: "",
          email: "",
          telephone: "",
          company: "",
          provider: "",
          isActive: false,
          timestamp: null,
          eventid: "",
        },
    liffid: liffid ? liffid : "",
    eventname: eventname ? eventname : "",
    users: [],
    products: [],
    cost: 0.0,
  },
  getters: {
    getLine(state) {
      return state.currentuser;
    },
    totalPrice: (state) => {
      let total = 0;
      state.cart.filter((item) => {
        total +=
          (parseFloat(item.productPrice) +
            parseFloat(item.productOptionVarPrice)) *
          item.productQuantity;
      });
      return total;
    },
  },
  actions: {
    listAllUsers(context) {
      this.loading = true;
      axios
        .get("https://us-central1-jinnsolution.cloudfunctions.net/listUsers")
        .then((response) => {
          // console.log(response.data.users)
          context.commit("loadUserData", response.data.users);
          // state.users.push(response.data.users)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    updateCurrentUser(state, item) {
      state.currentuser = item;
      window.localStorage.setItem(
        "currentuser",
        JSON.stringify(state.currentuser)
      );
    },
    updateLiffId(state, item) {
      state.liffid = item;
      window.localStorage.setItem("liffid", state.liffid);
    },
    updateEventName(state, item) {
      state.eventname = item;
      window.localStorage.setItem("eventname", state.eventname);
    },
    addToCart(state, item) {
      let spotted = state.cart.find(
        (product) =>
          product.productId === item.productId &&
          product.productOption === item.productOption &&
          product.productOptionVarPrice == item.productOptionVarPrice
      );

      if (spotted) {
        console.log(item);
        state.cart.find(
          (product) =>
            product.productId == item.productId &&
            product.productOption == item.productOption &&
            product.productOptionVarPrice == item.productOptionVarPrice
        ).productQuantity++;
      } else {
        item.images = [];
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    decreaseQuantity(state, item) {
      //console.log(state.cart);
      let spotted = state.cart.find(
        (product) =>
          product.productId == item.productId &&
          product.productOption == item.productOption
      );
      if (spotted) {
        if (spotted.productQuantity > 1) {
          state.cart.find(
            (product) =>
              product.productId == item.productId &&
              product.productOption == item.productOption
          ).productQuantity--;
          if (
            state.cart.find(
              (product) =>
                product.productId == item.productId &&
                product.productOption == item.productOption
            ).images.length >
            state.cart.find(
              (product) =>
                product.productId == item.productId &&
                product.productOption == item.productOption
            ).productQuantity
          ) {
            state.cart
              .find(
                (product) =>
                  product.productId == item.productId &&
                  product.productOption == item.productOption
              )
              .images.splice(
                state.cart.find(
                  (product) =>
                    product.productId == item.productId &&
                    product.productOption == item.productOption
                ).images.length - 1,
                1
              );
          }
        }
      }
      this.commit("saveData");
    },
    addImage(state, option) {
      let item = option.item;
      let file = option.file;
      let spotted = state.cart.find(
        (product) =>
          product.productId == item.productId &&
          product.productOption == item.productOption
      );
      if (spotted) {
        state.cart.find(
          (product) =>
            product.productId == item.productId &&
            product.productOption == item.productOption
        ).images =
          state.cart.find(
            (product) =>
              product.productId == item.productId &&
              product.productOption == item.productOption
          ).images || [];
        state.cart
          .find(
            (product) =>
              product.productId == item.productId &&
              product.productOption == item.productOption
          )
          .images.push(file);
      }
      this.commit("saveData");
    },
    removeImage(state, option) {
      let item = option.item;
      let ix = option.ix;
      let spotted = state.cart.find(
        (product) =>
          product.productId == item.productId &&
          product.productOption == item.productOption
      );
      if (spotted) {
        //let spix = spotted.images.indexOf(image);
        if (ix > -1) {
          state.cart
            .find(
              (product) =>
                product.productId == item.productId &&
                product.productOption == item.productOption
            )
            .images.splice(ix, 1);
        }
      }
      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    saveSuggested(state) {
      window.localStorage.setItem(
        "suggestedId",
        JSON.stringify(state.suggestedId)
      );
    },
    addSuggested(state, suggestedId) {
      state.suggestedId = suggestedId;
    },
    saveCost(state, price) {
      state.cost = price;
    },
    clearCart(state) {
      state.cart = [];
      this.commit("saveData");
    },
    removeData(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
      this.commit("saveData");
    },
    loadUserData(state, payload) {
      state.users = payload;
    },
  },
});

export default store;
