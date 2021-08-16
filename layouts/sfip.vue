<template>
  <v-app dark>
    <STitleBar>
      <v-main>
        <v-container class="mb-8" style="min-height: 100hv;padding-top: 114px;">
          <Nuxt />
        </v-container>
      </v-main>
    </STitleBar>
  </v-app>
</template>


<style lang="scss" scoped>

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

</style>

<script>

export default {
  created: function() {
    console.log("layout created", this.commons)
  },
  mounted: function() {
    console.log("layout mounted", this.commons)
  },
}

// import SfipMixin from '~/mixins/sfip'

// export default {
//   mixins: [
//     SfipMixin,
//   ]
// }
</script>
