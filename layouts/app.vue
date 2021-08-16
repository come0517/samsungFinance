<template>
  <v-app dark>

    <v-app-bar
      dark
      color="primary"
      flat
      fixed
      app
    >
      <v-toolbar-title v-text="`${title}`"/>

    </v-app-bar>
     <v-main class="lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: function (a) {
    return {title: '통합플랫폼 - 삼성증권', subject: 'subject'};
  },
}
</script>
