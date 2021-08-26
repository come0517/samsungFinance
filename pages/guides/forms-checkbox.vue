<template>
<v-form>
  <section class="sfip">

    <s-subject :subject="'Checkbox - Form Controls'"/>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Checkbox</v-list-item-title>
          <v-container fluid>
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="checkbox.row"
                  color="primary"
                  on-icon="mdi-check"
                  off-icon="mdi-check"
                  :ripple="false"
                  label="체크박스 수평 1"
                  value="1"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox
                  v-model="checkbox.row"
                  color="primary"
                  on-icon="mdi-check"
                  off-icon="mdi-check"
                  :ripple="false"
                  label="체크박스 수평 2"
                  value="2"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-divider class="mt-5"/>
            <v-row dense>
              <v-col cols=12>
                <v-checkbox
                  v-model="checkbox.column"
                  color="primary"
                  on-icon="mdi-check"
                  off-icon="mdi-check"
                  :ripple="false"
                  label="체크박스1"
                  value="1"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols=12>
                <v-checkbox
                  v-model="checkbox.column"
                  color="primary"
                  on-icon="mdi-check"
                  off-icon="mdi-check"
                  :ripple="false"
                  label="체크박스2"
                  value="2"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols=12>
                <v-checkbox
                  v-model="checkbox.column"
                  color="primary"
                  on-icon="mdi-check"
                  off-icon="mdi-check"
                  :ripple="false"
                  label="체크박스3"
                  value="3"
                  disabled
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
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
  transition: 'page',
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
        name: 'Checkbox - Form Controls'
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
