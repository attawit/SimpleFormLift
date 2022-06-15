<template>
  <div class="about mt-5 pt-5">
    <div class="container h-100 pt-5">
        <div class="col-md-4">
          <img src="@/assets/img/about.svg" class="img-fluid" alt="overview image">
        </div>

      <div class="h-100 align-items-center row">
        <div class="col-md-12">
          <h2>{{ $t('privacy.title') }}</h2>
          <h5 class="h5-responsive" v-html="$t('privacy.content')">
            <!-- {{ $t('about.content') }} -->
          </h5>
        </div>
        <div class="col-md-4">
          <img src="@/assets/img/about.svg" class="img-fluid" alt="overview image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    name: "privacy",
    props: {
      msg: String
    },
    components: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>