<template><div>
    <div
    class="flex bg-white flex-no-shrink my-10 h-32 w-auto max-w-2xl rounded p-4 shadow-md hover:shadow-lg"
  >
    <div class="flex">
      <img
        :src="displayPicture()"
        alt="Profile Picture"
        class="w-24 h-24 rounded-full p-1"
      />
      <div class="flex flex-col px-6 w-64">
        <span class="text-xl font-light">{{ currentuser.name }}</span>
        <span class="text-indigo-500 font-light">{{
          currentuser.displayName
        }}</span>
        <span class="text-grey text-sm font-light">
          {{ currentuser.email }}
        </span>
        <span class="text-grey text-sm font-light mb-2">
          {{ currentuser.telephone }}
        </span>
      </div>
    </div>
  </div>
  <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto mt-2" >
    <h2 class="font-light">ลงทะเบียน</h2>
    <div class="flex mt-4 pt-4 border-t border-grey-light">
      <form
        @submit.prevent="updateUser(user)"
        class="flex flex-col md:ml-8 w-full"
        :key="key"
      >
        <label for="name" class="text-grey-darker font-light inline-block mb-0"
          >Name</label
        >
        <input
          class="
            w-full
            appearance-none
            border
            rounded
            py-2
            px-3
            mb-3
            text-grey-darkest
          "
          id="name"
          :value="currentuser.name"
          @input="updateLocalUser($event)"
        />
        <label for="company" class="text-grey-darker font-light inline-block mb-0"
          >Company</label
        >
        <input
          class="
            w-full
            appearance-none
            border
            rounded
            py-2
            px-3
            mb-6
            text-grey-darkest
          "
          id="company"
          :value="currentuser.company"
          @input="updateLocalUser($event)"
        />
        <label for="email" class="text-grey-darker font-light inline-block mb-0"
          >Email</label
        >
        <input
          class="
            w-full
            appearance-none
            border
            rounded
            py-2
            px-3
            mb-6
            text-grey-darkest
          "
          id="email"
          :value="currentuser.email"
          @input="updateLocalUser($event)"
        />
        <label for="insta" class="text-grey-darker font-light inline-block mb-0"
          >Instagram</label
        >
        <input
          class="
            w-full
            appearance-none
            border
            rounded
            py-2
            px-3
            text-grey-darkest
          "
          id="telephone"
          :value="currentuser.telephone"
          @input="updateLocalUser($event)"
        />
        <div class="flex items-center">
          <input
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-normal
              py-2
              px-4
              my-6
              rounded
              w-48
              tracking-wide
            "
            type="submit"
            value="Submit"
          />
          <a class="text-blue hover:underline ml-4" @click="key++">Reset</a>
        </div>
      </form>
    </div>
  </div>
          </div>
</template>
<script>
//import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'UpdateUser',
  data () {
    return {
      currentuser:{
        id: null,
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
    }
  },
 created() {
    // this.$store.dispatch('getUser');
  },
  mounted() {
    // this.$liff
    //   .init({
    //     liffId: "1657190795-wjy7dyl4",
    //   })
    //   .then(() => {
    //     if (this.$liff.isLoggedIn()) {
    //       this.$liff.getProfile().then((profile) => {
    //         this.$store.dispatch("setLine", profile);
    //         this.isDone();
    //       });
    //     } else {
    //       this.$liff.login();
    //     }
    //   });
    if ( this.$store.state.currentuser != null)
    this.currentuser =  this.$store.state.currentuser ;
  },
  computed: {
    // ...mapGetters(['activeUser']),
  },
  methods: {
    updateUser(){

    },
    displayPicture() {
      if (
        this.currentuser != null &&
        this.currentuser.displayUrl != null &&
        this.currentuser.displayUrl != ""
      ) {
        return this.currentuser.displayUrl;
      } else {
        return "https://jinnsolution.web.app/avatar.png";
      }
    },
  },
}
</script>
