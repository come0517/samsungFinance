<template>
  <v-app dark>

    <v-app-bar
      color="white"
      flat
      fixed
      app
    >
      <v-btn
        icon 
      >
        <nuxt-link to="/">
         <v-icon>mdi-close</v-icon>
        </nuxt-link>
      </v-btn>
      <v-toolbar-title v-text="title" />
      
    </v-app-bar>
     <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: '삼성증권'
  }),
}
</script>
