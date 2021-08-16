<template>
<v-form>
  <section class="sfip">

    <s-subject :subject="'Form Controls'"/>

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

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Radio</v-list-item-title>
            <v-radio-group v-model="checkboxA">
              <v-radio
                :label="'기본 선택 된 Radio입니다.'"
                :value="'1'"
              ></v-radio>
              <v-radio
                :label="'선택가능한 Radio 입니다.'"
              ></v-radio>
              <v-radio
                disabled
                :label="'선택할수없습니다.'"
              ></v-radio>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Checkbox</v-list-item-title>
            <v-container fluid>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="red darken-3"
                    color="red darken-3"
                    value="red darken-3"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="indigo darken-3"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="orange"
                    color="orange"
                    value="orange"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="orange darken-3"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row class="mt-12">
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="primary"
                    color="primary"
                    value="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="secondary"
                    color="secondary"
                    value="secondary"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="success"
                    color="success"
                    value="success"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="info"
                    color="info"
                    value="info"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                >
                  <v-checkbox
                    v-model="ex4"
                    label="warning"
                    color="warning"
                    value="warning"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="error"
                    color="error"
                    value="error"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
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
import SSubject from '~/components/commons/SSubject.vue'
  export default {
  components: { SSubject },
    layout: 'sfip',
    data () {
      return {
        checkboxA: '1',
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
