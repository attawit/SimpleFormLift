<template>
  <div>
    <div color="primary" dense flat dark>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            @src="displayPicture()"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          {{ $t("modal.tabs.register.done") }}
        </a>
      </nav>
    </div>
    <div class="container pt-0 pb-0">
      <div class="row">
        <div class="col" cols="12">
          <div class="set-padding">
            <div class="text-center mt-10">
              <img src="/img/welcome.png" alt="" width="236px" />
              <h1 class="text-title">Welcome, {{ name }}</h1>
              <p class="mt-7">
                Welcome to the event,<br />You have done registeration.<br />
                We hope you have a good time here.
              </p>
            </div>
            <div
              class="w-100 text-center my-btn outlined text-primary mt-5"
              @click="close"
            >
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.currentuser.name,
      currentuser: this.$store.state.currentuser,
    };
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
    close() {
      this.$liff.closeWindow();
    },
  },
};
</script>
