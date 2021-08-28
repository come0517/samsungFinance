<template>
  <section>
    <s-subject :subject="`신분증 정보를 확인하고 수정\n또는 재촬영해주세요.`"/>

    <div class="mt-8">
      <img src="/images/account/nontact/identity.png" alt="신분증 이미지"/>
    </div>

    <div class="inp-wrap">
      <v-text-field
        label="성명"
        placeholder="성명을 입력해주세요."
        persistent-placeholder
        clearable
        value="김삼성"
      />
    </div>

    <div class="inp-wrap">
      <v-text-field
        label="주민등록번호"
        placeholder="‘-’ 없이 13자리 입력"
        persistent-placeholder
        clearable
        value="123456-*****"
      />
    </div>


    <div class="inp-wrap">
      <v-text-field
        label="발급일자"
        placeholder="TODO: 달력 적용 검토"
        persistent-placeholder
        clearable
        value="2021-04-04"
      />
    </div>

    <div class="inp-wrap">
      <v-text-field
        label="주민등록번호"
        placeholder="‘-’ 없이 13자리 입력"
        persistent-placeholder
        clearable
        value="123456-*****"
      />
    </div>


    <div class="inp-wrap">
      <v-text-field
        label="발급일자"
        placeholder="TODO: 달력 적용 검토"
        persistent-placeholder
        clearable
        value="2021-04-04"
      />
    </div>


    <account-notice class="mt-4" />
    <s-btn-bottom :text="'다음'" :doAction="doAction"/>

  </section>
</template>



<script>
import AccountNotice from '~/components/account/AccountNotice.vue'

export default {
  components: { AccountNotice },
  layout: 'monimo',
  data () {
    return {
      options: {
        navi: {
          show: true,
          name: '계좌개설',
        },
        bottom: {
          button: true,
        }
      },
    }
  },
  methods: {
    doAction: function () {
      this.$router.push('/account/nontact/step6');
    }
  }
}
</script>
