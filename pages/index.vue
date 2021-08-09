<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          삼성 금융통합플랫폼 - 앱영역 
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>  
      </v-card>
      
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'sfip',
  title: '메인',
  data: () => ({
    items: [
      {icon: 'mdi-apps', title: 'Colors'         , to: '/guides/colors'},
      {icon: 'mdi-apps', title: 'Fonts'          , to: '/guides/fonts'},
      {icon: 'mdi-apps', title: 'Layouts '       , to: '/guides/layouts'},
      {icon: 'mdi-apps', title: 'Box'            , to: '/guides/boxes'},
      {icon: 'mdi-apps', title: 'Form'           , to: '/guides/forms'},
      {icon: 'mdi-apps', title: 'Lists'          , to: '/guides/lists'},
      {icon: 'mdi-apps', title: 'Popup'          , to: '/guides/popup'},
      {icon: 'mdi-apps', title: 'Keypad'         , to: '/guides/Keypad'},
    ]
  })
}
</script>