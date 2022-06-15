<template>
  <div class="text-center container mt-4">

    <img class="person_img mx-auto" :src="displayPhoto" alt="image" />
    <h2 style="padding-top: 10px">{{ name }}</h2>
    <h4>{{ company }}</h4>
    <div class="mt-5 text-center"><h2>{{ countDownSec }} </h2> </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventId: null,
      countDownSec: 10,
      displayPhoto: "",
      name: "",
      company: "",
      registerList: [],
      timeIntrv: 0,
      counter: 0,
    };
  },
  created() {
    console.log(this.$route);
    this.eventId = this.$route.params.id;

    this.refreshRegisterList();
    if (parseInt(this.$route.query.timesecond) > 0) {
      this.countDownSec = parseInt(this.$route.query.timesecond);
    }
  },
  methods: {
    refreshRegisterList() {
      this.eventId = this.$route.params.id;

      this.$dbevents
        .doc(this.eventId)
        .collection("registers")
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            let doc = change.doc;
            console.log("changed!");
            let getRegister = doc.data();
            getRegister.id = doc.data().id;
            console.log(getRegister);
            let ioldRegister = this.registerList.findIndex(
              (register) => register.id == getRegister.id
            );
            if (ioldRegister < 0) this.registerList.push(getRegister);
            else this.$set(this.registerList, ioldRegister, getRegister);
          });
        });
      console.log(this.registerList);
    },
    rndStr() {
      let randx = this.registerList.sort().filter((item, pos, ary) => {
        return !pos || item.id !== ary[pos - 1].id;
      });
      return randx[Math.floor(Math.random() * randx.length)];
    },
    countDownSecTimer() {
      if (this.countDownSec > 0) {
        setTimeout(() => {
          this.countDownSec -= 1;
          this.countDownSecTimer();
        }, 1000);
      } else {
        clearInterval(this.timeIntrv);
      }
    },
  },
  mounted() {
    this.countDownSecTimer();
    this.timeIntrv = setInterval(() => {
      let register = this.rndStr();
      this.name = register.name;
      this.displayPhoto = register.displayUrl;
      this.company = register.company;
      if (this.displayPhoto == "" || this.displayPhoto == null) {
        this.displayPhoto = "/img/avatar.png";
      }
    }, 300);
  },
};
</script>
<style scoped>
.random {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.person_img {
  width: 150px;
  height: 180px;
  text-align: center;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
}
</style>
