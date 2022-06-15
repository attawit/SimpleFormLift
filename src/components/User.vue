<template>
  <div
    class="
      flex
      bg-white
      flex-no-shrink
      my-10
      h-32
      w-auto
      max-w-2xl
      rounded
      p-4
      shadow-md
      hover:shadow-lg
    "
  >
    <div v-if="activeUser" class="flex">
      <img
        :src="currentuser.displayUrl"
        alt="Profile Picture"
        class="w-24 h-24 rounded-full p-1"
      />
      <div class="flex flex-col px-6 w-64">
        <span class="text-xl font-light">{{ currentuser.name }}</span>
        <span class="text-indigo-500 font-light">{{ currentuser.displayName }}</span>
        <span class="text-grey text-sm font-light">
          {{ currentuser.email }}
        </span>
        <span class="text-grey text-sm font-light mb-2">
          {{ currentuser.telephone }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'User',
  date(){
    return {
    currentuser : this.$store.state.currentuser  
    }
  },
  created() {
    this.$store.dispatch('getUser');
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
  },
  computed: {
    ...mapGetters(['activeUser']),
  },
};
</script>
