/* eslint-disable  indent,object-shorthand,object-property-newline */
import Vue from 'vue';
//import firebase,{ initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/auth';
//import { getAuth } from 'firebase/auth';
//import { getFunctions } from 'firebase/functions';
//import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/storage';
import VueFirestore from 'vue-firestore';
import JConstant from '../configs/constant';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCeMuC4kuVZR-xp_ueObQIl8zYSszx7hug',
  authDomain: 'jinnsolution.firebaseapp.com',
  projectId: 'jinnsolution',
  storageBucket: 'jinnsolution.appspot.com',
  messagingSenderId: '61885158544',
  appId: '1:61885158544:web:474d966431f5d87a28f415',
};
// Initialize Firebase

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true,
});

//const app = initializeApp(firebaseConfig);
const fbAuth = firebase.initializeApp(firebaseConfig);
//const fbAuth = getAuth(app);
const db = firebase.firestore();
//const functions = getFunctions(app);
const dbproject = db.collection('organizations').doc(JConstant.orgId);
const dbproducts = dbproject.collection('products');
const dbbanners = dbproject.collection('banners');
const dbevents = dbproject.collection('events');
const dbexhibitors = dbproject.collection('exhibitors');
const dbcategories = dbproject.collection('categories');
const dbcustomers = dbproject.collection('customers');

Vue.prototype.$dbproject = dbproject;
Vue.prototype.$dbproducts = dbproducts;
Vue.prototype.$dbbanners = dbbanners;
Vue.prototype.$dbcategories = dbcategories;
Vue.prototype.$dbevents = dbevents;
Vue.prototype.$dbexhibitors = dbexhibitors;
Vue.prototype.$dbcustomers = dbcustomers;

export { fbAuth, db, dbproject };
// export default fbAuth;
