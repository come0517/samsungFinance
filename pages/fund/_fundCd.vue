<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-app-bar color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10"></v-progress-linear>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>조광요 그룹장님</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
      <v-img height="250" src="/ky.cho.png"></v-img>

      <v-card-title>{{fund.fundNm}}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <!-- <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating> -->
          <div v-if="fund.rtngAgnyRtngValu==4">고위험</div>
          <div v-else>그저그래</div>
          <div class="grey--text ms-4">{{fund.fundClassTypeName}}</div>
        </v-row>

        <div class="my-4 text-subtitle-1">수익률 {{fund.yield_3m}}</div>

        <div>{{fund.scNo}}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-title>"{{fund.lineCommnet}}"</v-card-title>
      <div>
        <img
          v-bind:src="'https://www.samsungpop.com/common.do?cmd=down&saveKey=recommend.main.image&inlineYn=Y%27&fileName=' +fund.contentsFileNm"
        >
      </div>

      <v-card-actions>
        <v-btn block depressed color="primary" @click="reserve">바로투자</v-btn>
      </v-card-actions>
    </v-sheet>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('getFundDetail', params.fundCd)
    } catch (e) {
      error({
        statusCode: 500,
        message: 'Error'
      })
    }
  },
  computed: mapState({
    fund: state => state.fund
  }),
  head() {
    return {
      title: 'Fund Detail'
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
  //   props: {
  //     // eslint-disable-next-line vue/require-default-prop
  //     fund: Object
  //   }
}
</script>