<template>
<v-form>
  <section class="sfip">

    <h1>fonts</h1>
    <v-divider class="mb-5"/>

    <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>폼 기본</v-list-item-title>
            <v-text-field
            v-model="firstname"
            :counter="10"
            label="이름"
            placeholder="10자 이내로 입력해주세요."
            persistent-placeholder=true
            clearable
          ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>폼-필수입력</v-list-item-title>
            <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            placeholder="이메일을 입력해주세요."
            persistent-placeholder=true
            clearable
          ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title>폼-완료문구 있을 경우</v-list-item-title>
            <v-text-field
            v-model="firstname"
            :counter="10"
            label="기타"
            placeholder="10자 이내로 입력해주세요."
            persistent-placeholder=true
            messages="올바른 입력값입니다."
            clearable
          ></v-text-field>
          </v-list-item-content>
        </v-list-item> -->
    </v-list>

  </section>
</v-form>
</template>

<script>
  export default {
    layout: 'sfip',
    data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || '필수로 입력해야합니다.',
          counter: value => value.length <= 30 || '최대 30글자 이내로 입력해주세요.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '올바른 이메일 형식이 아닙니다..'
          },
        },
      }
    },
  }
</script>
