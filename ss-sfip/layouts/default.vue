<template>
  <v-app dark>

    <v-app-bar app>
      <v-btn icon color>
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-toolbar-title class="flex text-center" v-text="title" />
      
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      
    </v-app-bar>
    
    <v-main style="padding-top:120px">
      <v-container>
        <Nuxt />    
      </v-container>
    </v-main>

    <v-bottom-navigation app>
      <div>bottom button area</div>
    </v-bottom-navigation>

    <v-footer style="margin-bottom:50px;">
      <div>
          <p class="text-left">
            footer
          </p>
          <p class="text-left">
            footer footer footer
          </p>
          <p class="text-left">
            footer footer footer footer footer footer
          </p>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: '삼성증권'
    }
  }
}
</script>
