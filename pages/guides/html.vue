<template>
  <section class="sfip">
    <div style="width: 100vw; height: 10vh;">
      <v-btn text @click="a1">비대면 계좌개설 1</v-btn>
    </div>

    <div id="test1" style="width: 100vw; height: 90vh"></div>
  </section>
</template>

<script>

import * as easings from 'vuetify/lib/services/goto/easing-patterns'

export default {
  layout: 'sfip-html',
  mounted() {

  },
  methods: {
    a1: function () {

      this.$vuetify.goTo(100, {
          duration: 150,
          offset: 0,
          easing: 'easeInOutCubic',
        });

      var myLandbot = new LandbotFrameWidget({
        container: "#test1",
        index: "http://sfip.adc-framework.com/pub/html/account/account01.html"
      });
    }
  },


}
</script>
