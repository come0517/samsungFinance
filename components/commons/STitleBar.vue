<template>

  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="white"
      elevation="1"
      elevate-on-scroll
      height=36
      extension-height="60"
      :page="this.page"
    >
      <div class="s-title-bar">
        <v-row
          no-gutters
          dense
          justify="center" align="center"
        >
          <v-col class="text-left">
            <v-btn icon small dense to="/">
              <v-icon small color="grey darken-4">mdi-close</v-icon>
            </v-btn>
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
<!-- FIXME: 템플릿 겹치면 오류 발생....  이상함 확인 필요 -->

      <template #extension v-if="page.navi">
        <div class="s-title-bar">
          <v-row
            no-gutters
            dense
            justify="center" align="center"
          >
            <v-col cols=10 class="text-left" justify="center">
              <v-icon
                color="black"
                large
                :ripple="false"
                @click="goBack()"
              >mdi-chevron-left</v-icon>

              <span class="fs-form">{{ page.name }}</span>
            </v-col>
            <v-col cols=2>
              <v-btn
                text
                dence
                v-if="page.useCancel" @click="cancel">취소</v-btn>
            </v-col>
          </v-row>
        </div>

      </template>
    </v-app-bar>

    <div style="min-height: 90hv;">
     <slot/>
    </div>

  </v-card>
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


</style>

<script>


export default {
  computed: {
    page() {
      return this.$store.state.commons.page;
    },


  },
  methods: {
    scrolled: function () {
      this.prominent = true;
    },
    cancel: function () {
      this.page.callbackCancel();
    }
  }
}
</script>
