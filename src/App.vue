<template>
  <div id="app" class="flyout">
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>
