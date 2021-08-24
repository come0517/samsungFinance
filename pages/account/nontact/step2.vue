<template>
  <section class="sfip">
    <s-subject :subject="`새로운 투자를 위한\n본인확인을 시작합니다.`"/>
    <v-main class="pl-5 pr-5">

      <div class="inp-wrap">
        <v-text-field
          :rules="rules.name.ko"
          label="성명(국문)"
          max="15"
          placeholder="한글 최대 15자 입력"
          persistent-placeholder
          clearable
        />
      </div>
      <div class="inp-wrap">
        <v-text-field
          :rules="rules.name.en"
          label="성명(영문) *선택"
          placeholder="성명(영문)을 입력해주세요."
          persistent-placeholder
          clearable
        />
      </div>

      <div class="inp-wrap">
        <v-text-field
          type="number"
          :counter=13
          :rules="rules.personNo"
          label="주민등록번호"
          placeholder="‘-’ 없이 13자리 입력"
          persistent-placeholder
          clearable
        />
      </div>


      <div class="inp-wrap">
        <v-select
          v-model="mobile"
          :items="mobileOpt"
          label="통신사"
          :multiple="false"
          append-icon="mdi-chevron-down"
        ></v-select>
      </div>

      <SGroupCheckbox :group="agree.group" :items="agree.items" />



      <div class="inp-wrap">
        <mobile-auth />

      </div>

<!--
      <div class="inp-wrap">
          <label for="tel01" class="inp-label">휴대폰번호</label>
          <div class="inp-box">
              <input type="text" id="tel01" class="inp" placeholder="‘-’ 없이 입력">
              <button type="button" class="inp-btn">인증번호 요청</button>
          </div>
      </div>

      <div class="inp-wrap miss">
          <label for="confirmNum" class="inp-label">인증번호</label>
          <div class="inp-box">
              <input type="text" id="confirmNum" class="inp" placeholder="인증번호 6자리 입력">
              <button type="button" class="inp-btn">인증확인</button>
          </div>
          <div class="inp-bottom">
              <p class="message">인증번호가 일치하지 않습니다.</p>
              <div class="inp-time">
                  <span class="txt-time">02:57</span>
                  <button type="button" class="btn-txt">연장하기</button>
              </div>
          </div>
      </div>

-->

      <account-notice />
      <s-btn-bottom :text="'다음'" :doAction="doAction"/>
    </v-main>
  </section>
</template>


<script>

import AccountNotice from '~/components/account/AccountNotice.vue'
import MobileAuth from '~/components/account/MobileAuth.vue'


export default {
  components: { AccountNotice, MobileAuth },
  layout: 'sfip',
  created: function () {
    this.$store.commit("commons/page/toggleNavi", true)
  },
  computed: {
      mobileOpt: function () { return ['SKT', 'LGT', 'ADC'] },
      agreeAll: function () {
        return Object.values(this.agree).every(item => item)
      }
  },
  data () {
    return {
      commons: {
        name: '계좌개설'
      },
      agree: {
        group: {
          label: '휴대폰 인증을 위한 전체 항목에 동의합니다.',
        },
        items: [
          {key: 'a1', label: '(필수) 개인정보 이용 및 제공 동의', value: 'Y', checked: true},
          {key: 'a2', label: '(필수) 고유식별정보 제공 동의', value: 'Y', checked: true},
          {key: 'a3', label: '(필수) 통신사 이용약관 동의', value: 'Y', checked: false},
          {key: 'a4', label: '(필수) 서비스 이용약관 동의', value: 'Y', checked: false},
        ],
      },
      mobile: 'SKT',
      rules: {
        commons: {
          required: value => !!value || '필수로 입력해야합니다.',
        },
        name: {
          ko: [
            value => !!value || '필수로 입력해야합니다.',
          ],
          en: [
            value => !!value || '필수로 입력해야합니다.',
          ],
        },
        personNo: [
          value => ! (value && value.length < 13) || '주민번호 13자리를 입력해주세요. ',
          value => /^[0-9]*$/.test(value) || '숫자만 입력해주세요.',
        ]
      }
    }
  },
  methods: {
    doAction: function () {
      this.$router.push('./step3');
    },

  }
}
</script>


