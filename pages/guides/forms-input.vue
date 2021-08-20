<template>
<v-form>
  <section class="sfip">

    <s-subject :subject="'Input - Form Controls'"/>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>일반 입력폼</v-list-item-title>
          <v-text-field
          :counter="10"
          label="이름"
          placeholder="10자 이내로 입력해주세요."
          persistent-placeholder
          clearable
        ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>완료문구 있는경우</v-list-item-title>
          <v-text-field
          v-model="success"
          :rules="[rules.required]"
          label="제목"
          placeholder="내용을 입력해주세요."
          persistent-placeholder
          :success-messages="success ? '정상입니다.' : ''"
          clearable
        ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>에러문구</v-list-item-title>
          <v-text-field
          :rules="[rules.required, rules.email]"
          label="E-mail"
          placeholder="이메일을 입력해주세요."
          persistent-placeholder
          clearable
        ></v-text-field>
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
        name: 'Input - Form Controls'
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
