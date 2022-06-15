<template>
  <main
    class="
      container
      mx-auto
      flex flex-col
      w-screen
      h-screen
      m-0
      bg-grey-lighter
      justify-start
      items-center
    "
  >
<UpdateUser />
  </main>
</template>

<script>
import UpdateUser from './UpdateUser.vue';
// helloss
export default {
  name: 'Home',
  components: {
    UpdateUser,
  },
};
</script>
<style css>
body {
  background: #f1f5f8;
}
</style>
