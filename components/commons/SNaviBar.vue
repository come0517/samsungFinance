<template>
<!--
  <v-sheet class="s-navi-bar" @click="$router.go(-1)">
    <span class="float-left">
      <i class="back">
        <img src="@/assets/images/commons/btn_arrow_header.svg" alter="뒤로가기"/>
      </i>
    </span>
    <span class="float-left fs-h2 mt-1 ml-1">{{ $page.name }}</span>
    <v-spacer/>
    <v-icon>mdi-dots-vertical</v-icon>
  </v-sheet> -->
  <div class="pl-6 pr-6">
  <v-toolbar flat tile dense>
    <v-btn
      icon
       @click="$router.go(-1)">
      <img src="@/assets/images/commons/btn_arrow_header.svg" alter="뒤로가기"/>

    </v-btn>
    <v-toolbar-title class="fs-h2">{{ $page.name }}</v-toolbar-title>

    <v-spacer></v-spacer>

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
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
   </v-menu>

  </v-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.v-toolbar__content, .v-toolbar__extension {
  padding: 0 !important;
}
.s-navi-bar {
  width: 100%;
  height: $navi-height;
  padding-left: 8px;
  padding-top: 20px;
}

.s-navi-bar div.title {
  width: 100%;

}
</style>

<script>
export default {
  data: () => ({
    expand: false,
  }),
}
</script>
