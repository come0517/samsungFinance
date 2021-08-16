<template>

  <v-card class="overflow-hidden">
    <div>
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-body"
      >
        <div class="s-title-bar">
          <v-row
            no-gutters
            dense
            justify="center" align="center"
          >
            <v-col class="text-left">
              <v-icon
                small
              >mdi-close</v-icon>
            </v-col>
            <v-col class="text-center">
            <span class="fs-h3">삼성증권</span>
            </v-col>
            <v-col class="text-right">
              <v-menu
                left
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon small>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list >
                  <v-list-item>
                    <v-list-item-title>새로고침</v-list-item-title>
                    <v-list-item-title>링크복사</v-list-item-title>
                    <v-list-item-title>링크공유</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </div>
        <div class="s-title-bar" v-show="this.page.navi">
          <v-row
            no-gutters
            dense
            justify="center" align="center"
          >
            <v-col cols=1 class="text-left">
              <v-icon
                small
                @click="goBack()"
              >mdi-chevron-left</v-icon>
            </v-col>
            <v-col cols=10 class="text-center">
              <span class="fs-h3">삼성증권</span>
            </v-col>
          </v-row>
        </div>

        <!-- <div class="s-title-bar">
          <i class="close"><img src="~/assets/images/commons/btn/exit_black_mini.png" alter="close"/></i>
          <div class="title">삼성증권</div>
        </div> -->

        <!-- <i class="v-icon notranslate mdi mdi-menu theme--light"></i> -->
        <!-- <v-icon class="">mdi-close</v-icon> -->
 <!-- <i class="notranslate"><img src="~/assets/images/commons/btn/exit_black_mini.png" alter="close"/></i> -->

        <!-- <v-toolbar-title>{{ this.page }}</v-toolbar-title> -->



      </v-app-bar>
    </div>
<!--
    <v-app-bar
      absolute
      prominent
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-body"
    >
      <div class="s-title-bar-wrap">
        <div class="s-title-bar">
          <i class="ml-6 close"><img src="~/assets/images/commons/btn/exit_black_mini.png" alter="close"/></i>
          <div class="title">삼성증권</div>
        </div>

        <div>
          <SNaviBar/>
        </div>
      </div>


    </v-app-bar> -->


    <v-sheet
      id="scrolling-body"
      class="overflow-y-auto"
      max-height="600"
    >
     <slot/>
    </v-sheet>
  </v-card>
</template>

<style lang="scss" scoped>

// .v-toolbar--prominent {
//   height: $header-height !important;
// }

// 기본스타일

// #app > div.v-application--wrap > div > div:nth-child(1) > header {
//   height: 36px;
// }


// header>div.v-toolbar__content {
//   height: $title-height !important;
//   padding: 0px;
// }

header.v-toolbar {
  height: 200px;
  border: 1px solid #eee;
}

div.s-title-bar {
  // position: absolute;
  width: 100%;
  // display: none;
}
// .s-title-bar i.close {
//   position: absolute;
//   margin-top: 2px;
//   line-height: 36px;
// }
// .s-title-bar div.title {
//   width: 100%;
//   font-size: 14px !important;
//   line-height: 36px;
//   font-weight: bold;
//   color: #0B0D0F;
//   text-align: center;
//   margin-left: -$toolbar-content-padding-x;
// }

// // 네비게이션 있는경우
// header.v-sheet.v-toolbar--prominent {


//   // .s-title-bar-wrap {
//   //   width: 100%;
//   //   height: $header-height;
//   // }
//   .s-title-bar {
//     display: block;
//   }

//   .s-title-bar i.close {
//     display: block;
//   }

//   .s-title-bar div.title {

//   }
// };
</style>

<script>
import { mapState } from 'vuex'

export default {
  // data: function () {
  //   return {
  //     prominent: true
  //   }
  // },
  computed: {
    page() {
      return this.$store.state.commons.page;
    }
  },


    // prominent: function () {
    //   console.log(this.$this.navi);
    //   return this.$page.navi;
    // }
  // },
  methods: {
    scrolled: function () {
      this.prominent = true;
    }

  }
}
</script>
