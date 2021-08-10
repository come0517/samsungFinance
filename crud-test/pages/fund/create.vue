<template>
  <div>
    <h1>Add a Fund</h1>
    <v-divider></v-divider>
    <br>
    <v-form v-model="isFormValid" @submit.prevent="addNewFund">
      <v-text-field
        v-model="fundCd"
        :rules="formRules"
        prepend-inner-icon="mdi-account"
        label="fundCd"
        type="text"
        outlined
        clearable
        required
        value="1"
      ></v-text-field>
      <v-text-field
        v-model="fundNm"
        :rules="formRules"
        prepend-inner-icon="mdi-format-text"
        label="fundNm"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="prdtId"
        :rules="formRules"
        prepend-inner-icon="mdi-calendar"
        label="prdtId"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="yield_3m"
        :rules="formRules"
        prepend-inner-icon="mdi-earth"
        label="yield_3m"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="rtngAgnyRtngValu"
        :rules="formRules"
        prepend-inner-icon="mdi-translate"
        label="rtngAgnyRtngValu"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="onlineYN"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="onlineYN"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="fundClassTypeName"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="fundClassTypeName"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="fundClasSum"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="fundClasSum"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="contentsFileNm"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="contentsFileNm"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="lineComment"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="lineComment"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="ofrnDate"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="ofrnDate"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="scNo"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="scNo"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="zrnOperCoNm"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="zrnOperCoNm"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <p v-if="!isFormValid" style="color: red; font-style: italic">Please fill in all fields</p>
      <v-btn type="submit" :disabled="!isFormValid" color="primary" dark absolute right>
        Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      fundCd: '1',
      fundNm: '1',
      prdtId: '1',
      yield_3m: '1',
      rtngAgnyRtngValu: '1',
      onlineYN: '1',
      fundClassTypeName: '1',
      fundClasSum: '1',
      contentsFileNm: '1',
      lineComment: '1',
      ofrnDate: '1',
      scNo: '1',
      zrnOperCoNm: '1',
      isFormValid: true,
      formRules: [v => !!v || 'The field is required']
    }
  },
  methods: {
    ...mapActions(['addFund']),
    addNewFund() {
      this.addFund({
        fundCd: this.fundCd,
        fundNm: this.fundNm,
        prdtId: this.prdtId,
        yield_3m: this.yield_3m,
        rtngAgnyRtngValu: this.rtngAgnyRtngValu,
        onlineYN: this.onlineYN,
        fundClassTypeName: this.fundClassTypeName,
        fundClasSum: this.fundClasSum,
        contentsFileNm: this.contentsFileNm,
        lineComment: this.lineComment,
        ofrnDate: this.ofrnDate,
        scNo: this.scNo,
        zrnOperCoNm: this.zrnOperCoNm
      })
      this.$router.push('/fund/list')
    }
  },
  head() {
    return {
      title: 'Add a Fund',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new Fund in your list'
        }
      ]
    }
  }
}
</script>
