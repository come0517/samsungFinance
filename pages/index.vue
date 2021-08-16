<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ShadowBox
        :data="content"
      >
      </ShadowBox>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'app',
  title: '삼성증권 가이드 페이지',
  head: () => ({
    title: '삼성증권 가이드 페이지'
  }),
  data: () => ({
    title: '삼성증권 가이드 페이지',
    content: {
      options: {
        icon: true
      },
      title: '공통 UI 가이드 목록',
      items: [
        {icon: 'mdi-palette', title: 'Colors', to: '/guides/colors'},
        {icon: 'mdi-menu', title: 'Tops', to: '/guides/tops'},
        {icon: 'mdi-format-text', title: 'Fonts', to: '/guides/fonts'},
        {icon: 'mdi-page-layout-body', title: 'Layouts', to: '/guides/layouts'},
        {icon: 'mdi-gesture-tap-button', title: 'Buttons', to: '/guides/boxes'},
        {icon: 'mdi-form-textbox-lock', title: 'Form', to: '/guides/forms'},
        {icon: 'mdi-list-status', title: 'Lists', to: '/guides/lists'},
        {icon: 'mdi-table', title: 'Tables', to: '/guides/tables'},
        {icon: 'mdi-layers-triple-outline', title: 'Popups', to: '/guides/popups'},
        // {icon: 'mdi-keyboard', title: 'Keypad', to: '/guides/Keypad'},
      ]
    }
  })
}
</script>
