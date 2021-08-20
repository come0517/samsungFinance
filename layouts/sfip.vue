<template>
  <v-app dark>
    <STitleBar>
      <v-main>
        <v-container class="mb-8" style="min-height: 100hv;padding-top: 114px;">
          <Nuxt />
        </v-container>
      </v-main>
    </STitleBar>

    <v-footer :class="`${hasBottomButton ? 'pb-16' : 'pb-0'} pl-8 pr-8`">
      <v-main>
      <p>
        삼성증권에서 제공하는 투자 정보는 고객의 판단을 위한 단순 참고용일뿐, 투자 제안 및 권유∙종목 추천을 위해 작성된 것이 아닙니다.
      </p>
      <p>
        본 화면은 삼성증권이 제공하는 것으로 삼성카드와는 무관합니다.
      </p>
      <h4>개인정보처리방침</h4>
      <v-row dense no-gutters>
        <v-col><span class="fs-cap">신용정보 활용체계</span></v-col>
        <v-col><span class="fs-cap">전자금융거래약관</span></v-col>
        <v-col><span class="fs-cap">고객확인의무</span></v-col>
      </v-row>
      <slot/>
      </v-main>
    </v-footer>
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
    console.log('this.$page.bottomPadding', this.$page.bottomPadding );
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
