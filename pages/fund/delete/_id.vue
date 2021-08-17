<template>
  <section>
    <h1>Delete fund</h1>
    <v-divider></v-divider>
    <br>
    <h2>{{ fund.fundNm }}</h2>
    <form @submit.prevent="deleteThisFund(fund.fundCd)">
      <br>
      <p>
        <em>
          <b>WARNING!</b>
        </em> The action cannot be undone.
      </p>
      <v-btn type="submit" color="red darken-3" dark text>
        Delete
        <v-icon dark right>mdi-delete</v-icon>
      </v-btn>
      <nuxt-link to="/">
        <v-btn color="blue darken-3" text>
          Cancel
          <v-icon dark right>mdi-cancel</v-icon>
        </v-btn>
      </nuxt-link>
    </form>
  </section>
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
  computed: mapState({
    fund: state => state.fund
  }),
  methods: {
    ...mapActions(['deleteFund']),
    async deleteThisFund(fundCd) {
      console.log(fundCd)
      await this.deleteFund(fundCd)
      this.$router.push('/fund/list')
    }
  },
  head() {
    return {
      fundNm: this.fund.fundNm
    }
  }
}
</script>
