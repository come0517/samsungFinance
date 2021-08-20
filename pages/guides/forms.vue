<template>
<v-form>
  <section class="sfip">

    <s-subject :subject="'Form Controls'"/>

    <v-list>
      <v-list-item>
        <v-btn text to="./forms-input">
          Input
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text to="./forms-radio">
          Radio
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text to="./forms-checkbox">
          Checkbox
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item>
          <v-btn text to="./forms-select">
            Dropdown
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
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
  created() {
    this.$store.commit("commons/page/toggleNavi", false)
  },
  computed: {
    success() {
      return '사용가능합니다.'
    }
  },

  data () {
    return {
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
