<template>
  <v-app dark>
    <STitleBar
      :navi="options.navi"
    />
    <v-main >
      <v-container style="min-height: 100hv;"
        :class="options.navi.show ? 'navi-on' : 'navi-off'"
      >
        <Nuxt/>
      </v-container>
    </v-main>
    <SFooter :options="options.bottom"/>
  </v-app>
</template>


<style lang="scss">
@import "~/assets/scss/monimo/index.scss";
</style>

<style lang="scss" scoped>
// @import "~/assets/css/transition.scss";

.navi-on {
  padding-top: $header-height;
  min-height: 100vh;
}

.navi-off {
  padding-top: $title-height;
  min-height: 100vh;
}

</style>


<script>

export default {
  name: 'monimo',
  // props: {
  //   hasBottomButton: Boolean
  // },
  created: function() {
    this.$nuxt.$on('setLayoutOptions', this.setLayoutOptions)
  },
  data: () => ({
    options: {
      navi: {
        show: false,
        useCancel: false,
      },
      bottom: {
        button: false,
      }
    }
  }),
  computed: {
    naviStyle() {
      return ''
    }
  },
  methods: {
    setLayoutOptions: function (options) {
      this.options = Object.assign({}, this.options, options)
    },
  }
}

</script>
