<template>
  <section class="monimo">
    <s-subject :subject="`주민등록증 또는 운전면허증을\n촬영해주세요.`"/>

    <div>
      <img src="/images/account/nontact/identity.png" alt="신분증 이미지"/>
    </div>

    <account-notice />
    <s-btn-bottom :text="'촬영'" :doAction="doAction"/>
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
      alert('TODO: IOS/AOS 구분하여 카메라 연동');
      this.$router.push('/account/nontact/step4');
    }
  }
}
</script>

