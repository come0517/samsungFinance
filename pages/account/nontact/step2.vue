<template>
  <section class="sfip">
    <s-subject :subject="`빠르고 쉬운 비대면계좌개설\n지금 시작해보세요!`"/>
    <v-main class="pl-5 pr-5">

      <h2 class="mb-4">주식거래 + CMA-RP유형</h2>

      <v-card
        color="bg"
        flat
        class="mb-12"
      >
        <v-card-text>
          <v-row dense align="center">
            <v-col cols=2><v-icon>mdi-image</v-icon></v-col>
            <v-col cols=10>
              <span class="fs-p">금융상품과 주식투자가 가능한 종합계좌와 자유 입출금 투신CMA 계좌를 한번에 개설 개설할 수 있습니다.</span>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <h2 class="mb-8">계좌개설 준비사항</h2>

      <ul>
        <li class="mb-6">
          <h3>본인명의 휴대폰</h3>
        </li>
        <li class="mb-6">
          <h3>신분증</h3>
          <span class="fs-p">본인확인 절차에 필요한 주민등록증 또는 운전면허증</span>
        </li>

        <li class="mb-6">
          <h3>타 금융기관 계좌</h3>
          <span class="fs-p">고객님 명의 타금융기관 계좌</span>
        </li>
      </ul>



      <account-notice />
      <s-btn-bottom :text="'다음'" :doAction="doAction"/>
    </v-main>
  </section>
</template>

<script>
import AccountNotice from '~/components/account/AccountNotice.vue'


export default {
  components: { AccountNotice },
  layout: 'sfip',
  created: function () {
    this.$store.commit("commons/page/toggleNavi", true)
  },
  data () {
    return {
      commons: {
        name: '계좌개설'
      },
      dialog: false,
      snackbar: false,
      text: `계좌번호가 복사되었습니다.`,
    }
  },
  methods: {
    doAction: function () {
      this.$router.push('./step3');
    }
  }
}
</script>


