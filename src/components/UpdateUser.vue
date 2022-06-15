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
          {{ currentuser.name }}
        </span>
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
        class="flex flex-col md:ml-2 w-full"

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
            mb-3
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
            mb-3
            text-grey-darkest
          "
          id="email"
          :value="currentuser.email"
          @input="updateLocalUser($event)"
        />
        <label for="insta" class="text-grey-darker font-light inline-block mb-0"
          >Telephone</label
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
    /*
    this.$liff.init(
          {
            liffId: "1657190795-wjy7dyl4", //"1657190795-wjy7dyl4"
            withLoginOnExternalBrowser: true,
          },
          () => {
            if (this.$liff.isLoggedIn()) {
              this.$liff
                .getProfile()
                .then((profile) => {
                  const Id = profile.userId;
                  const displayName = profile.displayName;
                  const statusMessage = profile.statusMessage;
                  const pictureUrl = profile.pictureUrl;
                  const email = this.$liff.getDecodedIDToken().email;
                  const iddeToken = this.$liff.getDecodedIDToken();
                  console.log(email);
                  console.log(iddeToken); // print decoded id
                  const idToken = this.$liff.getIDToken();
                  console.log(idToken); // print raw idToken object
                  const currentuser =
                    this.$store.state.currentuser.email != "" &&
                    this.$store.state.currentuser.email != "undefined "
                      ? this.$store.state.currentuser
                      : {
                          id: Id,
                          name: displayName,
                          displayName: displayName,
                          displayUrl: pictureUrl,
                          email: email,
                          company: "",
                          telephone: "",
                          provider: "line",
                          timestamp: moment(new Date()).format(
                            "YYYYMMDD_HH:MM"
                          ),
                          eventid: this.eventId,
                          licenseId: "JEvent",
                        };
                  this.currentuser = currentuser;
                  this.$store.commit("updateCurrentUser", currentuser);
                })
                .catch((err) => console.error(err));
            } else {
              if (!this.$liff.isLoggedIn()) {
                this.$liff.login({
                  redirectUri: `${this.$route.fullPath}?login_state=done`,
                });
              }
            }
          },
          (err) => {
            console.error(err.code, err.message);
          }
        );

        */
    if ( this.$store.state.currentuser != null) {
      this.currentuser =  this.$store.state.currentuser ;
    }
    if (this.currentuser.email != "" && this.$router.query.edit != null){
      this.$router.push({path:"/Cb9h5u7u0ZaL8ZYFu3rJ/registerdone"});
    }
    console.log(this.$route);
  },
  computed: {
    // ...mapGetters(['activeUser']),
  },
  methods: {
    rndStr(len) {
      let text = "";
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      let ondate = moment(new Date()).format("YYYYMMDD_HH:MM");
      return ondate + text;
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
    validate() {
      let validated = true;
      const errors = [];
      const validateField = ["name", "email", "telephone", "company"];

      validateField.forEach((field) => {
        if (this.currentuser[field] == "") {
          validated = false;
          errors.push(`${field} can not be null`);
        }
      });
      if (!validated) {
        Swal.fire({
          position: "buttom-end",
          type: "error",
          title: "error",
          text: errors.map((error) => error + "<br/>").join(""),
          showConfirmButton: false,
          timer: 1500,
        });
      }
      return validated;
    },
    updateStoreUser() {
      //const rnd = this.currentuser.id ?? this.rndStr(3);
      const rnd = this.rndStr(3);
      if (this.validate() && this.currentuser.id != null) {
        this.currentuser.timestamp = moment(new Date()).format("YYYYMMDD_HHMM");
        this.$store.commit("updateCurrentUser", this.currentuser);
        this.$dbevents
          .doc(this.eventId)
          .collection("registers")
          .doc(this.currentuser.id ? this.currentuser.id : rnd)
          .set(this.currentuser);
        this.$router.push(`/${i18n.locale}/acc/${this.eventId}/registerdone`);
      }
    },
  },
}
</script>
