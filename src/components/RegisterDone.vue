<template>
  <div>
    <div color="primary" dense flat dark>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            :src="displayPicture()"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          ท่านได้ลงทะเบียนแล้ว
        </a>
      </nav>
    </div>
    <div class="container pt-0 pb-0">
      <div class="row">
        <div class="col" cols="12">
          <div class="set-padding">
            <div class="text-center mt-10">
              <img
                class="mx-auto"
                src="/img/welcome.png"
                alt=""
                width="236px"
              />
              <h1 class="text-title">Welcome, {{ name }}</h1>
            </div>
            <div class="col-12 mx-auto text-center">
              <b-button
                class="text-center btn outlined primary m-4"
                @click="edit"
              >
                Update
              </b-button>
              <b-button
                class="text-center btn outlined secondary m-4"
                variant="primary"
                @click="close"
              >
                Close
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="devbottom"><p>Dev By: 0818085651</p></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.currentuser.name,
      currentuser: this.$store.state.currentuser,
      eventid: null,
    };
  },
  mounted() {
    this.eventid = this.$route.params.id;
  },
  methods: {
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
    edit() {
      this.$router.push({
        path: `/`,
        query: { edit: true },
      });
    },
    close() {
      this.$liff.closeWindow();
    },
  },
};
</script>
<style scoped>
#devbottom {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
