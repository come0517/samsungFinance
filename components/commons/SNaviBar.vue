<template>
  <div class="s-title-bar" v-show="slot.page.navi">
    <v-row
      no-gutters
      dense
      justify="center" align="center"
    >
      <v-col cols=9 class="text-left">
        <v-icon
          small
          @click="goBack()"
        >mdi-chevron-left</v-icon>

        <span class="fs-h3">삼성증권</span>
      </v-col>
      <v-col cols=3>
        취소
      </v-col>
    </v-row>
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
 props: {
   page: Object,
 }
}
</script>
