<template>
  <div>
    <h1>Edit fund</h1>
    <v-divider></v-divider>
    <br>
    <v-form v-model="isFormValid" @submit.prevent="saveThisFund(fundCd)">
      <v-text-field
        v-model="fundCd"
        :rules="formRules"
        prepend-inner-icon="mdi-account"
        label="fundCd"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="fundNm"
        :rules="formRules"
        prepend-inner-icon="mdi-format-text"
        label="fundNm"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="prdtId"
        :rules="formRules"
        prepend-inner-icon="mdi-calendar"
        label="prdtId"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="yield_3m"
        :rules="formRules"
        prepend-inner-icon="mdi-earth"
        label="yield_3m"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="rtngAgnyRtngValu"
        :rules="formRules"
        prepend-inner-icon="mdi-translate"
        label="rtngAgnyRtngValu"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="onlineYN"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="onlineYN"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="fundClassTypeName"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="fundClassTypeName"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="fundClasSum"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="fundClasSum"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="contentsFileNm"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="contentsFileNm"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="lineComment"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="lineComment"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="ofrnDate"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="ofrnDate"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="scNo"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="scNo"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="zrnOperCoNm"
        :rules="formRules"
        prepend-inner-icon="mdi-fund-open-page-variant"
        label="zrnOperCoNm"
        type="text"
        outlined
      ></v-text-field>
      <p v-if="!isFormValid" style="color: red; font-style: italic">Please fill in all fields</p>
      <v-btn type="submit" :disabled="!isFormValid" color="primary" dark absolute right>
        Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>

    <v-alert v-if="success" border="left" colored-border type="success">
      Success! fund saved
      <nuxt-link :to="'/fund/' + fund.fundCd">
        <v-btn small outlined color="success" absolute right>OK</v-btn>
      </nuxt-link>
    </v-alert>

    <v-alert v-if="error" border="left" colored-border type="error">
      Error! The fund was not saved
      <nuxt-link :to="'/fund/' + fund.fundCd">
        <v-btn small outlined color="error" absolute right>OK</v-btn>
      </nuxt-link>
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('getFundDetail', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch fund #' + params.id
      })
    }
  },
  data() {
    return {
      isFormValid: false,
      formRules: [v => !!v || 'The field is '],
      error: false,
      success: false
    }
  },
  computed: {
    ...mapState(['fund']),
    fundCd: {
      set(fundCd) {
        this.$store.commit('GET_FUND', { fundCd })
      },
      get() {
        return this.fund.fundCd
      }
    },
    fundNm: {
      set(fundNm) {
        this.$store.commit('GET_FUND', { fundNm })
      },
      get() {
        return this.fund.fundNm
      }
    },
    prdtId: {
      set(prdtId) {
        this.$store.commit('GET_FUND', { prdtId })
      },
      get() {
        return this.fund.prdtId
      }
    },
    yield_3m: {
      set(yield_3m) {
        this.$store.commit('GET_FUND', { yield_3m })
      },
      get() {
        return this.fund.yield_3m
      }
    },
    rtngAgnyRtngValu: {
      set(rtngAgnyRtngValu) {
        this.$store.commit('GET_FUND', { rtngAgnyRtngValu })
      },
      get() {
        return this.fund.rtngAgnyRtngValu
      }
    },
    onlineYN: {
      set(onlineYN) {
        this.$store.commit('GET_FUND', { onlineYN })
      },
      get() {
        return this.fund.onlineYN
      }
    },
    fundClassTypeName: {
      set(fundClassTypeName) {
        this.$store.commit('GET_FUND', { fundClassTypeName })
      },
      get() {
        return this.fund.fundClassTypeName
      }
    },
    fundClasSum: {
      set(fundClasSum) {
        this.$store.commit('GET_FUND', { fundClasSum })
      },
      get() {
        return this.fund.fundClasSum
      }
    },
    contentsFileNm: {
      set(contentsFileNm) {
        this.$store.commit('GET_FUND', { contentsFileNm })
      },
      get() {
        return this.fund.contentsFileNm
      }
    },
    lineComment: {
      set(lineComment) {
        this.$store.commit('GET_FUND', { lineComment })
      },
      get() {
        return this.fund.lineComment
      }
    },
    ofrnDate: {
      set(ofrnDate) {
        this.$store.commit('GET_FUND', { ofrnDate })
      },
      get() {
        return this.fund.ofrnDate
      }
    },
    scNo: {
      set(scNo) {
        this.$store.commit('GET_FUND', { scNo })
      },
      get() {
        return this.fund.scNo
      }
    },
    zrnOperCoNm: {
      set(sczrnOperCoNmo) {
        this.$store.commit('GET_FUND', { zrnOperCoNm })
      },
      get() {
        return this.fund.zrnOperCoNm
      }
    }
  },
  methods: {
    ...mapActions(['putFund']),
    async saveThisFund(fundCd) {
      await this.putFund(fundCd)
        .then(response => {
          this.success = true
        })
        .catch(function(error) {
          console.error(error)
          this.error = true
        })
    }
  }
  // head() {
  //   return {
  //     prdtId: this.fund.prdtId
  //   }
  // }
}
</script>
