(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"12ac":function(t,e,s){"use strict";s("6a5b")},"3df7":function(t,e,s){"use strict";s("c7a1")},4678:function(t,e,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("f9e3"),s("2dd8");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flyout",attrs:{id:"app"}},[s("main",[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)])},n=[],i={name:"App",components:{}},o=i,l=s("2877"),c=Object(l["a"])(o,a,n,!1,null,null,null),d=c.exports,u=s("2f62"),p=s("bc3a"),m=s.n(p);r["default"].use(u["a"]);let f=window.localStorage.getItem("cart"),b=window.localStorage.getItem("currentuser"),h=window.localStorage.getItem("liffid"),g=window.localStorage.getItem("eventname"),v=window.localStorage.getItem("suggestedId");const y=new u["a"].Store({state:{cart:f?JSON.parse(f):[],suggestedId:v?JSON.parse(v):"",currentuser:b?JSON.parse(b):{id:"",name:"",displayName:"",displayUrl:"",email:"",telephone:"",company:"",provider:"",isActive:!1,timestamp:null,eventid:""},liffid:h||"",eventname:g||"",users:[],products:[],cost:0},getters:{getLine(t){return t.currentuser},totalPrice:t=>{let e=0;return t.cart.filter(t=>{e+=(parseFloat(t.productPrice)+parseFloat(t.productOptionVarPrice))*t.productQuantity}),e}},actions:{listAllUsers(t){this.loading=!0,m.a.get("https://us-central1-jinnsolution.cloudfunctions.net/listUsers").then(e=>{t.commit("loadUserData",e.data.users)}).catch(t=>{console.log(t)})}},mutations:{updateCurrentUser(t,e){t.currentuser=e,window.localStorage.setItem("currentuser",JSON.stringify(t.currentuser))},updateLiffId(t,e){t.liffid=e,window.localStorage.setItem("liffid",t.liffid)},updateEventName(t,e){t.eventname=e,window.localStorage.setItem("eventname",t.eventname)},addToCart(t,e){let s=t.cart.find(t=>t.productId===e.productId&&t.productOption===e.productOption&&t.productOptionVarPrice==e.productOptionVarPrice);s?(console.log(e),t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption&&t.productOptionVarPrice==e.productOptionVarPrice).productQuantity++):(e.images=[],t.cart.push(e)),this.commit("saveData")},decreaseQuantity(t,e){let s=t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption);s&&s.productQuantity>1&&(t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption).productQuantity--,t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption).images.length>t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption).productQuantity&&t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption).images.splice(t.cart.find(t=>t.productId==e.productId&&t.productOption==e.productOption).images.length-1,1)),this.commit("saveData")},addImage(t,e){let s=e.item,r=e.file,a=t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption);a&&(t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption).images=t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption).images||[],t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption).images.push(r)),this.commit("saveData")},removeImage(t,e){let s=e.item,r=e.ix,a=t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption);a&&r>-1&&t.cart.find(t=>t.productId==s.productId&&t.productOption==s.productOption).images.splice(r,1),this.commit("saveData")},saveData(t){window.localStorage.setItem("cart",JSON.stringify(t.cart))},saveSuggested(t){window.localStorage.setItem("suggestedId",JSON.stringify(t.suggestedId))},addSuggested(t,e){t.suggestedId=e},saveCost(t,e){t.cost=e},clearCart(t){t.cart=[],this.commit("saveData")},removeData(t,e){let s=t.cart.indexOf(e);t.cart.splice(s,1),this.commit("saveData")},loadUserData(t,e){t.users=e}}});var j=y,w=s("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"\n      container\n      mx-auto\n      flex flex-col\n      w-screen\n      h-screen\n      m-0\n      bg-grey-lighter\n      justify-start\n      items-center\n    "},[s("UpdateUser")],1)},C=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex bg-white flex-no-shrink my-10 h-32 w-auto max-w-2xl rounded p-4 shadow-md hover:shadow-lg"},[s("div",{staticClass:"flex"},[s("div",[t._v(t._s(t.eventId))]),s("img",{staticClass:"w-24 h-24 rounded-full p-1",attrs:{src:t.displayPicture(),alt:"Profile Picture"}}),s("div",{staticClass:"flex flex-col px-6 w-64"},[s("span",{staticClass:"text-xl font-light"},[t._v(t._s(t.currentuser.name))]),s("span",{staticClass:"text-indigo-500 font-light"},[t._v(t._s(t.currentuser.displayName))]),s("span",{staticClass:"text-grey text-sm font-light"},[t._v("\n          "+t._s(t.currentuser.email)+"\n        ")]),s("span",{staticClass:"text-grey text-sm font-light mb-2"},[t._v("\n          "+t._s(t.currentuser.telephone)+"\n        ")])])])]),s("div",{staticClass:"w-5/6 md:w-3/4 lg:w-2/3 mx-auto mt-2"},[s("h2",{staticClass:"font-light"},[t._v("ลงทะเบียน")]),s("div",{staticClass:"flex mt-4 pt-4 border-t border-grey-light"},[s("form",{staticClass:"flex flex-col md:ml-2 w-full"},[s("label",{staticClass:"text-grey-darker font-light inline-block mb-0",attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentuser.name,expression:"currentuser.name"}],staticClass:"w-full appearance-none border rounded py-2 px-3 mb-3 text-grey-darkest",attrs:{id:"name"},domProps:{value:t.currentuser.name},on:{input:function(e){e.target.composing||t.$set(t.currentuser,"name",e.target.value)}}}),s("label",{staticClass:"text-grey-darker font-light inline-block mb-0",attrs:{for:"company"}},[t._v("Company")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentuser.company,expression:"currentuser.company"}],staticClass:"w-full appearance-none border rounded py-2 px-3 mb-3 text-grey-darkest",attrs:{id:"company"},domProps:{value:t.currentuser.company},on:{input:function(e){e.target.composing||t.$set(t.currentuser,"company",e.target.value)}}}),s("label",{staticClass:"text-grey-darker font-light inline-block mb-0",attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentuser.email,expression:"currentuser.email"}],staticClass:"w-full appearance-none border rounded py-2 px-3 mb-3 text-grey-darkest",attrs:{id:"email",type:"email"},domProps:{value:t.currentuser.email},on:{input:function(e){e.target.composing||t.$set(t.currentuser,"email",e.target.value)}}}),s("label",{staticClass:"text-grey-darker font-light inline-block mb-0",attrs:{for:"insta"}},[t._v("Telephone")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentuser.telephone,expression:"currentuser.telephone"}],staticClass:"w-full appearance-none border rounded py-2 px-3 mb-3 text-grey-darkest",attrs:{type:"number",id:"telephone"},domProps:{value:t.currentuser.telephone},on:{input:function(e){e.target.composing||t.$set(t.currentuser,"telephone",e.target.value)}}}),s("div",{staticClass:"flex items-center"},[s("b-button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 my-6 rounded w-48 tracking-wide",on:{click:function(e){return t.updateStoreUser()}}},[t._v(" Submit ")])],1)])])])])},k=[];const I="XEP2RV4hYOVY8ionwR1B",O="Cb9h5u7u0ZaL8ZYFu3r",$="JEvent",S="JEvent",D=[{image:"/img/payment-scb.png",title:"โอนเงิน ธนาคารไทยพาณิขย์",detail:"<p>บัญชีเลขที่ 037-253546-4 </p><p>นายอรรถวิชญ์ เกตุแก้ว</p>",promptpay:!1,paybutton:!1},{image:"https://promptpay.io/0818085651/",title:"Prompt-Pay",detail:"<p>prompt-pay 0818085651 </p><p>นายอรรถวิชญ์ เกตุแก้ว</p>",promptpay:!0,paybutton:!1},{image:"/img/payment-credit-card.png",title:"CREDIT CARD",detail:"Under Implementation",promptpay:!1,paybutton:!0}];var P={orgId:I,eventId:O,licenseId:$,organization:S,payments:D},z=s("c1df"),M=s.n(z),U={name:"UpdateUser",data(){return{user:null,eventid:void 0,currentuser:{id:null,name:"",displayName:"",displayUrl:"",email:"",telephone:"",company:"",provider:"",isActive:!1,timestamp:null,eventid:void 0}}},created(){""!=this.$store.state.currentuser.id&&(this.currentuser=this.$store.state.currentuser)},mounted(){""!=this.$store.state.currentuser.id&&(this.currentuser=this.$store.state.currentuser),""!=this.$store.state.currentuser.id&&null==this.$route.query.edit&&this.$router.push({path:"/undefined/registerdone"}),console.log(this.$route)},computed:{},methods:{rndStr(t){let e="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<t;a++)e+=s.charAt(Math.floor(Math.random()*s.length));let r=M()(new Date).format("YYYYMMDD_HH:MM");return r+e},displayPicture(){return null!=this.currentuser&&null!=this.currentuser.displayUrl&&""!=this.currentuser.displayUrl?this.currentuser.displayUrl:"https://jinnsolution.web.app/avatar.png"},validate(){let t=!0;const e=[],s=["name","email","telephone","company"];return s.forEach(s=>{""==this.currentuser[s]&&(t=!1,e.push(s+" can not be null"))}),t||this.$Swal.fire({position:"buttom-end",title:"error",text:e.map(t=>t+"<br/>").join(""),showConfirmButton:!1,timer:1500}),t},updateStoreUser(){const t=this.rndStr(3);this.currentuser.licenseId="JEvent",this.validate()&&(this.currentuser.timestamp=M()(new Date).format("YYYYMMDD_HHMM"),this.$store.commit("updateCurrentUser",this.currentuser),this.$dbevents.doc(void 0).collection("registers").doc(this.currentuser.id?this.currentuser.id:t).set(this.currentuser).then(()=>{this.$router.push({path:"/undefined/registerdone"})}))}}},E=U,L=Object(l["a"])(E,_,k,!1,null,null,null),N=L.exports,B={name:"Home",components:{UpdateUser:N}},A=B,T=(s("609b"),Object(l["a"])(A,x,C,!1,null,null,null)),Y=T.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.randomtime,expression:"randomtime"}],staticClass:"text-center",attrs:{type:"number",placeholder:"random second",block:""},domProps:{value:t.randomtime},on:{input:function(e){e.target.composing||(t.randomtime=e.target.value)}}}),s("b-button",{staticClass:"pb-2",attrs:{pill:"",size:"sm",to:"/"+t.$route.params.id+"/randomlist?timesecond="+t.randomtime}},[t._v(" Random ")])],1),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Sort","label-for":"sort-by-select","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.ariaDescribedby;return[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-select",{staticClass:"w-75",attrs:{id:"sort-by-select",options:t.sortOptions,"aria-describedby":r},scopedSlots:t._u([{key:"first",fn:function(){return[s("option",{attrs:{value:""}},[t._v("-- none --")])]},proxy:!0}],null,!0),model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),s("b-form-select",{staticClass:"w-25",attrs:{disabled:!t.sortBy,"aria-describedby":r,size:"sm"},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[s("option",{domProps:{value:!1}},[t._v("Asc")]),s("option",{domProps:{value:!0}},[t._v("Desc")])])],1)]}}])})],1),s("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Initial sort","label-for":"initial-sort-select","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{attrs:{id:"initial-sort-select",options:["asc","desc","last"],size:"sm"},model:{value:t.sortDirection,callback:function(e){t.sortDirection=e},expression:"sortDirection"}})],1)],1),s("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),s("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter On",description:"Leave all unchecked to filter on all data","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.ariaDescribedby;return[s("b-form-checkbox-group",{staticClass:"mt-1",attrs:{"aria-describedby":r},model:{value:t.filterOn,callback:function(e){t.filterOn=e},expression:"filterOn"}},[s("b-form-checkbox",{attrs:{value:"name"}},[t._v("Name")]),s("b-form-checkbox",{attrs:{value:"isActive"}},[t._v("Active")])],1)]}}]),model:{value:t.sortDirection,callback:function(e){t.sortDirection=e},expression:"sortDirection"}})],1),s("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),s("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),s("b-table",{attrs:{items:t.registerList,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v("\n      "+t._s(e.value)+" \n    ")]}},{key:"cell(actions)",fn:function(e){return[s("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(s){return t.info(e.item,e.index,s.target)}}},[t._v("\n        Info modal\n      ")])]}},{key:"row-details",fn:function(e){return[s("b-card",[s("ul",t._l(e.item,(function(e,r){return s("li",{key:r},[t._v("\n            "+t._s(r)+": "+t._s(e)+"\n          ")])})),0)])]}}])}),s("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[s("pre",[t._v(t._s(t.infoModal.content))])])],1)},J=[],F=s("4f60"),V=(s("1862"),s("27ae"),s("256a"),s("24ee"),s("73c3")),H=s.n(V);s("e71f");const Q={apiKey:"AIzaSyCeMuC4kuVZR-xp_ueObQIl8zYSszx7hug",authDomain:"jinnsolution.firebaseapp.com",projectId:"jinnsolution",storageBucket:"jinnsolution.appspot.com",messagingSenderId:"61885158544",appId:"1:61885158544:web:474d966431f5d87a28f415"};r["default"].use(H.a,{key:"id",enumerable:!0});const q=F["a"].initializeApp(Q),Z=F["a"].firestore(),W=Z.collection("organizations").doc(P.orgId),K=W.collection("products"),X=W.collection("banners"),G=W.collection("events"),tt=W.collection("exhibitors"),et=W.collection("categories"),st=W.collection("customers");r["default"].prototype.$dbproject=W,r["default"].prototype.$dbproducts=K,r["default"].prototype.$dbbanners=X,r["default"].prototype.$dbcategories=et,r["default"].prototype.$dbevents=G,r["default"].prototype.$dbexhibitors=tt,r["default"].prototype.$dbcustomers=st;var rt={data(){return{randomtime:300,registerList:[],fields:[{key:"name",label:"name",sortable:!0,sortDirection:"desc"},{key:"email",label:"email",sortable:!0,sortDirection:"desc"},{key:"company",label:"company",sortable:!0,sortDirection:"desc"},{key:"telephone",label:"telephone",sortable:!0,sortDirection:"desc"},{key:"isActive",label:"Is Active",formatter:(t,e,s)=>t?"Yes":"No",sortable:!0,sortByFormatted:!0,filterByFormatted:!0},{key:"actions",label:"Actions"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""}}},computed:{sortOptions(){return this.fields.filter(t=>t.sortable).map(t=>({text:t.label,value:t.key}))}},mounted(){this.totalRows=this.registerList.length},created(){this.eventId=this.$route.params.id,this.$dbevents.doc(this.eventId).collection("registers").onSnapshot(t=>{t.docChanges().forEach(t=>{let e=t.doc;console.log("changed!");let s=e.data();s.id=e.data().id,console.log(s);let r=this.registerList.findIndex(t=>t.id==s.id);r<0?this.registerList.push(s):this.$set(this.registerList,r,s)})}),console.log(this.registerList)},methods:{info(t,e,s){this.infoModal.title="Row index: "+e,this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,s)},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},onFiltered(t){this.totalRows=t.length,this.currentPage=1},updatePaticipant(){this.$dbpaticipants.doc(this.paticipant.id).update(this.paticipant).then(()=>{this.$refs.edit.hide(),this.$toast.fire({title:"Updated successfully"})})},deletePaticipant(t){this.$Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{if(e.value){for(var s in this.$dbpaticipants.doc(t.id).delete(),t.images)q.storage().refFromURL(t.images[s]).delete().then(()=>{console.log("image deleted")}).catch(t=>{console.log(t)});this.$toast.fire({title:"Deleted successfully"})}})}}},at=rt,nt=Object(l["a"])(at,R,J,!1,null,null,null),it=nt.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center container mt-4"},[s("img",{staticClass:"person_img mx-auto",attrs:{src:t.displayPhoto,alt:"image"}}),s("h2",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.name))]),s("h4",[t._v(t._s(t.company))]),s("div",{staticClass:"mt-5 text-center"},[s("h2",[t._v(t._s(t.countDownSec)+" ")])])])},lt=[],ct={data(){return{eventId:null,countDownSec:10,displayPhoto:"",name:"",company:"",registerList:[],timeIntrv:0,counter:0}},created(){console.log(this.$route),this.eventId=this.$route.params.id,this.refreshRegisterList(),parseInt(this.$route.query.timesecond)>0&&(this.countDownSec=parseInt(this.$route.query.timesecond))},methods:{refreshRegisterList(){this.eventId=this.$route.params.id,this.$dbevents.doc(this.eventId).collection("registers").onSnapshot(t=>{t.docChanges().forEach(t=>{let e=t.doc;console.log("changed!");let s=e.data();s.id=e.data().id,console.log(s);let r=this.registerList.findIndex(t=>t.id==s.id);r<0?this.registerList.push(s):this.$set(this.registerList,r,s)})}),console.log(this.registerList)},rndStr(){let t=this.registerList.sort().filter((t,e,s)=>!e||t.id!==s[e-1].id);return t[Math.floor(Math.random()*t.length)]},countDownSecTimer(){this.countDownSec>0?setTimeout(()=>{this.countDownSec-=1,this.countDownSecTimer()},1e3):clearInterval(this.timeIntrv)}},mounted(){this.countDownSecTimer(),this.timeIntrv=setInterval(()=>{let t=this.rndStr();this.name=t.name,this.displayPhoto=t.displayUrl,this.company=t.company,""!=this.displayPhoto&&null!=this.displayPhoto||(this.displayPhoto="/img/avatar.png")},300)}},dt=ct,ut=(s("12ac"),Object(l["a"])(dt,ot,lt,!1,null,"223843b5",null)),pt=ut.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{color:"primary",dense:"",flat:"",dark:""}},[s("nav",{staticClass:"navbar navbar-light bg-light"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("img",{staticClass:"d-inline-block align-top",attrs:{src:t.displayPicture(),width:"30",height:"30",alt:""}}),t._v("\n        ท่านได้ลงทะเบียนแล้ว\n      ")])])]),s("div",{staticClass:"container pt-0 pb-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col",attrs:{cols:"12"}},[s("div",{staticClass:"set-padding"},[s("div",{staticClass:"text-center mt-10"},[s("img",{staticClass:"mx-auto",attrs:{src:"/img/welcome.png",alt:"",width:"236px"}}),s("h1",{staticClass:"text-title"},[t._v("Welcome, "+t._s(t.name))])]),s("div",{staticClass:"col-12 mx-auto text-center"},[s("b-button",{staticClass:"text-center btn outlined primary m-4",on:{click:t.edit}},[t._v("\n              Update\n            ")]),s("b-button",{staticClass:"text-center btn outlined secondary m-4",attrs:{variant:"primary"},on:{click:t.close}},[t._v("\n              Close\n            ")])],1)])])])]),t._m(0)])},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"devbottom"}},[s("p",[t._v("Dev By: 0818085651")])])}],bt={data(){return{name:this.$store.state.currentuser.name,currentuser:this.$store.state.currentuser,eventid:null}},mounted(){this.eventid=this.$route.params.id},methods:{displayPicture(){return null!=this.currentuser&&null!=this.currentuser.displayUrl&&""!=this.currentuser.displayUrl?this.currentuser.displayUrl:"https://jinnsolution.web.app/avatar.png"},edit(){this.$router.push({path:"/",query:{edit:!0}})},close(){this.$liff.closeWindow()}}},ht=bt,gt=(s("3df7"),Object(l["a"])(ht,mt,ft,!1,null,"4695ce91",null)),vt=gt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about mt-5 pt-5"},[s("div",{staticClass:"container h-100 pt-5"},[t._m(0),s("div",{staticClass:"h-100 align-items-center row"},[s("div",{staticClass:"col-md-12"},[s("h2",[t._v(t._s(t.$t("privacy.title")))]),s("h5",{staticClass:"h5-responsive",domProps:{innerHTML:t._s(t.$t("privacy.content"))}})]),t._m(1)])])])},jt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4"},[r("img",{staticClass:"img-fluid",attrs:{src:s("a327"),alt:"overview image"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4"},[r("img",{staticClass:"img-fluid",attrs:{src:s("a327"),alt:"overview image"}})])}],wt={name:"privacy",props:{msg:String},components:{}},xt=wt,Ct=Object(l["a"])(xt,yt,jt,!1,null,"192169b7",null),_t=Ct.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about mt-5 pt-5"},[s("div",{staticClass:"container h-100 pt-5"},[t._m(0),s("div",{staticClass:"h-100 align-items-center row"},[s("div",{staticClass:"col-md-12"},[s("h2",[t._v(t._s(t.$t("policy.title")))]),s("h5",{staticClass:"h5-responsive",domProps:{innerHTML:t._s(t.$t("policy.content"))}})])])])])},It=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4"},[r("img",{staticClass:"img-fluid",attrs:{src:s("a327"),alt:"overview image"}})])}],Ot={name:"policy",props:{msg:String},components:{}},$t=Ot,St=Object(l["a"])($t,kt,It,!1,null,"2d2240d6",null),Dt=St.exports;r["default"].use(w["a"]);var Pt=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Y},{path:"/:id/event/:rnd",name:"home",component:Y},{path:"/privacy",name:"privacy",component:_t},{path:"/policy",name:"policy",component:Dt},{path:"/:id/paticipants",name:"account-register-paticipants",component:it},{path:"/:id/randomlist",name:"account-random-paticipants",component:pt},{path:"/:id/registerdone",name:"account-register-done",component:vt}]}),zt=s("3d20"),Mt=s.n(zt),Ut=s("5f5b");r["default"].use(Ut["a"]),r["default"].prototype.$Swal=Mt.a;const Et=Mt.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3});r["default"].prototype.toast=Et,r["default"].config.productionTip=!1,r["default"].prototype.$liff=window.liff,new r["default"]({store:j,router:Pt,render:t=>t(d)}).$mount("#app")},"609b":function(t,e,s){"use strict";s("eac3")},"6a5b":function(t,e,s){},a327:function(t,e,s){t.exports=s.p+"img/about.c0c14ee9.svg"},c7a1:function(t,e,s){},eac3:function(t,e,s){}});
//# sourceMappingURL=app.774289fb.js.map