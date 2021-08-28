<template>

  <v-container>
    <v-app-bar
      fixed
      color="white"
      elevation="1"
      elevate-on-scroll
      height=36
      extension-height="60"
      :options="options"
    >
      <div class="s-title-bar">
        <v-row
          no-gutters
          dense
          justify="center" align="center"
        >
          <v-col class="text-left">
            <v-btn :ripple="false" icon small dense to="/">
              <v-icon small color="grey darken-4">mdi-close</v-icon>
            </v-btn>
            <!--  DEV Only -->
            <v-app-bar-nav-icon small @click="toggleMenu"/>
          </v-col>
          <v-col class="text-center">
            <span class="fs-h3">삼성증권</span>
          </v-col>
          <v-col class="text-right">
            <v-menu
              left
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small color="grey darken-1">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list width="160">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>새로고침</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-refresh</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>링크복사</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-content-copy</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>링크공유</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-send</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>

            </v-menu>
          </v-col>
        </v-row>
      </div>

      <template #extension v-if="options.show">
        <div class="s-title-bar">
          <v-row
            no-gutters
            dense
            justify="center" align="center"
          >
            <v-col cols=10 class="text-left" justify="center">
              <div>
                <img class="float-left" src="/images/commons/left.png" width="24" height="24" alt="back"/>
                <span class="navi-title float-left">{{ options.name }}</span>
              </div>
              <!-- <v-icon
                color="black"
                large
                :ripple="false"
                @click="goBack()"
              >{{ svgLeft }}</v-icon> -->


            </v-col>
            <v-col cols=2>
              <v-btn
                text
                dence
                v-if="options.useCancel" @click="options.callbackCancel">취소</v-btn>
            </v-col>
          </v-row>
        </div>

      </template>


    </v-app-bar>
    <dev-menu :menu="menu" @close="toggleMenu"/>
  </v-container>
</template>

<style lang="scss" scoped>

header.v-toolbar {
  height: 200px;
  border: 1px solid #eee;
}

div.v-toolbar__content {
  flex-wrap: wrap !important;
}

div.s-title-bar {
  width: 100%;
}
.navi-title {
  padding-left: 5px;
  font-size: 16px;
  color: #212121;
  line-height: 28px;
  font-weight: 500;
}

</style>

<script>

import DevMenu from './dev/DevMenu.vue';

export default {
  props: {
    navi: Object,
  },
  components: { DevMenu },
  computed: {
    options() {
      console.log('this.navi', this.navi)
      return Object.assign({
        show: false
      }, this.navi)
    },
  },
  data: () => ({
    menu: false,
  }),
  methods: {
    scrolled: function () {
      this.prominent = true;
    },
    toggleMenu(toggle) {
      // console.log('toggleMenu', toggle, this.menu)
      this.menu = !this.menu;
    }
  }
}
</script>
