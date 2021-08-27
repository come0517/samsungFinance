<!--
  모니모 앱 스타일
  - 증권 영역이 아닌 모니모 통합화면에서의 레이아웃
-->
<template>
  <v-app dark>
    <STitleBar>

    </STitleBar>
    <v-main>
      <v-container class="mb-8" style="min-height: 100hv;padding-top: 114px;">
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>


<style lang="scss">
@import "~/assets/scss/monimo-app/index.scss";
</style>


<script>

export default {
  // props: {
  //   hasBottomButton: Boolean
  // },
  created: function() {
    //console.log("layout created", this.commons)
  },
  mounted: function() {
    //console.log("layout mounted", this.commons)
  },
  data: function () {
    //console.log('this.$page.bottomPadding', this.$page.bottomPadding );
    return {
      bottomPadding: this.$page.bottomPadding ?? false
    }
  },
  methods: {
    hasBottomButton: function (bool) {
      return bool ?? false;
    }
  }
}

</script>
