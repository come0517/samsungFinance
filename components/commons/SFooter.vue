<template>
  <v-footer :class="bottom.button ? 'show-button' : ''">

    <div>
      <v-img src="/images/commons/logo.png" alt="LOGO" />
    </div>
    <p class="pt-4">삼성증권에서 제공하는 투자 정보는 고객의 판단을 위한 단순 참고용일뿐, 투자 제안 및 권유∙종목 추천을 위해 작성된 것이 아닙니다.</p>
    <p class="pt-4">본 화면은 삼성증권이 제공하는 것으로 삼성카드와는 무관합니다.</p>
    <p class="pt-4 h4">개인정보처리방침</p>

    <v-container>
      <v-row dense no-gutters>
        <v-col cols=4>
          <span class="fs-cap">신용정보 활용체계</span>
        </v-col>
        <v-col cols=4><span class="fs-cap">전자금융거래약관</span></v-col>
        <v-col cols=4><span class="fs-cap">고객확인의무</span></v-col>
      </v-row>
    </v-container>
    <code class="pa-2 d-block fs-cap">
      FIXME: <br/>
      1. 약관 컨텐츠 수급 확인 <br/>
      2. 꼭 알아 두세요. 동적 바인딩 <br/>
    </code>
    <slot name="info"/>
    <slot name="button"/>


  </v-footer>
</template>


<style lang="scss" scoped>
.v-footer {
  padding: 32px 40px 40px 32px;
  background: #F4F4F4;

  p {
    font-size: 12px;
    color: #8B95A1;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 500;
  }
  p.h4 {
    color: #414958;
    font-weight: 700;
  }
}
.v-footer.show-button {
  padding: 32px 40px 124px 32px;
}
</style>

<script>

// FIXME: 버튼 존재 하는경우 위로 Shift :class="`${hasBottomButton ? 'pb-16' : 'pb-0'} pl-8 pr-8`"

export default {
  props: {
    options: Object,
  },
  computed: {
    bottom() {
      return this.options
    }
  }
}
</script>
