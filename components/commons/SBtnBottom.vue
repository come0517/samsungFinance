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
  props: {
    text: String,
    doAction: Function,
  },
}
</script>
