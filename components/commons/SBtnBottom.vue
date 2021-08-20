<template>
  <v-footer :fixed=true :padless=true>
    <v-btn
      color="primary"
      x-large
      block
      tile
      padless
      @click="doAction"
    >
    {{ text }}
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  created: function () {
    this.$page.bottomBtn = true;
  },
  props: {
    text: String,
    doAction: Function,
  },
}
</script>
