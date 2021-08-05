<template>
  <v-card max-width="400" class="mx-auto">
    <v-system-bar color="blue darken-2" dark>
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar dark color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Fund</v-toolbar-title>

      <v-spacer></v-spacer>

      <!--<v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
      <BottomSheets></BottomSheets>
    </v-app-bar>
    <FundCard v-for="(fund, index) in funds" :key="index" :fund="fund" :data-index="index"/>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import FundCard from '@/components/FundCard.vue'
import BottomSheet from '@/components/BottomSheets.vue'

export default {
  components: {
    FundCard,
    BottomSheet
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('getFunds')
    } catch (e) {
      error({
        statusCode: 500,
        message: 'Error'
      })
    }
  },
  computed: mapState({
    funds: state => state.funds
  }),
  head() {
    return {
      title: 'Fund Listing'
    }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    fund: Object
  }
}
</script>