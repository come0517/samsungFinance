<template>
  <div>
    <v-text-field
      type="number"
      label="휴대폰번호"
      placeholder="`-` 없이 입력"
      persistent-placeholder

      persistent-hint
      clearable
    >

      <v-btn
        slot="append"
        class="mt-1"
        small elevation=0 color="#eeeeee"
        @click="request"
        > {{ btnReqText }}
      </v-btn>



    </v-text-field>
    <div class="remainSec">
      <span>
        {{ `${parseInt(remainSec / 60) }:${remainSec % 60 > 9 ? remainSec % 60 : '0' + remainSec % 60}`}}
      </span>

      <v-btn text x-small :ripple="false">연장하기</v-btn>


    </div>


  </div>
</template>


<style lang="scss" scoped>
.remainSec {
  margin-top: -20px;
  font-size: 12px;
  color: #FF392A;
  letter-spacing: 0;
  text-align: right;
  line-height: 18px;
  font-weight: 500;
  .v-btn {
    text-decoration-line: underline;
    font-size: 12px;
    letter-spacing: 0;
    text-align: right;
    line-height: 18px;
    font-weight: 500;
  }
}
</style>
<script>
export default {
  computed: {
    btnReqText: function () {
      return this.mobileAuth.requested ? '인증번호 재요청' : '인증번호 요청'
    },
    remainSecText: function () {
      return remainSec / 60
    }
  },
  data: function () {
    return {
      mobileAuth: {
        requested: false,
        complete: false,
      },
      remainSec: 180,
    }
  },
  watch: {
      remainSec: {
        handler(value) {
          if (value > 0) {
              setTimeout(() => {
                this.remainSec--;
              }, 1000);
          }
        },
        immediate: false
      }

  },
  methods: {
    mobileAuthReq: function () {

    },
    request: function () {
      this.mobileAuth.requested = true
    }
  }

}
</script>
