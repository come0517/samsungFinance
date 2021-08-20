<template>
<v-form>
  <section class="sfip">

    <s-subject :subject="'Input - Form Controls'"/>


    <v-subheader>Radio</v-subheader>
    <p class="pl-4 fs-cap">가이드 상 적용 부분이 가독성이 떨어지는듯 하여 미선택시는 동그라미로만 표현으로 검토 요망</p>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>수평 그룹</v-list-item-title>
          <v-radio-group row dense v-model="radio.row">
            <v-radio
              color="primary"
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :ripple="false"
              :label="'예'"
              value="Y"
            ></v-radio>
            <v-radio
              color="warning"
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :label="'아니오'"
              :ripple="false"
              value="N"
            ></v-radio>
            <v-radio
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :label="'중간'"
              disabled
              :ripple="false"
              value="M"
            ></v-radio>
          </v-radio-group>
          <v-radio-group row dense v-model="radio.row">
            <v-radio
              color="primary"
              on-icon="mdi-check-circle-outline"
              :ripple="false"
              :label="'예'"
              value="Y"
            ></v-radio>
            <v-radio
              color="warning"
              on-icon="mdi-check-circle-outline"
              :label="'아니오'"
              :ripple="false"
              value="N"
            ></v-radio>
            <v-radio
              on-icon="mdi-check-circle-outline"
              :label="'중간'"
              disabled
              :ripple="false"
              value="M"
            ></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>수직 그룹</v-list-item-title>
          <v-radio-group column v-model="radio.column" >

            <v-radio
              color="primary"
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :ripple="false"
              :label="'예'"
              value="Y"
            ></v-radio>
            <v-radio
              color="warning"
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :label="'아니오'"
              :ripple="false"
              value="N"
            ></v-radio>
            <v-radio
              on-icon="mdi-check-circle-outline"
              off-icon="mdi-check-circle-outline"
              :label="'중간'"
              disabled
              :ripple="false"
              value="M"
            ></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </section>
</v-form>
</template>


<style lang="scss" scoped>


</style>

<script>
export default {

  layout: 'sfip',
  created: function () {
    this.$store.commit("commons/page/toggleNavi", true)
  },
  computed: {
    success() {
      return '사용가능합니다.'
    }
  },

  data () {
    return {
      commons: {
        name: 'Radio - Form Controls'
      },
      rules: {
        required: value => !!value || '필수로 입력해야합니다.',
        counter: value => value.length <= 30 || '최대 30글자 이내로 입력해주세요.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '올바른 이메일 형식이 아닙니다..'
        },
      },
      email: '',
      radio: {
        row: 'N',
        column: '1'
      },
      checkbox: {
        row: '1',
        column: '1',
      },
      ex4: '4',
    }
  },
}
</script>
