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
    <v-footer class="bg-gray text-caption mb-10">
      <p>
        삼성증권에서 제공하는 투자 정보는 고객의 판단을 위한 단순 참고용일뿐, 
        투자 제안 및 권유∙종목 추천을 위해 작성된 것이 아닙니다.
      </p>
      <p>
        본 화면은 삼성증권이 제공하는 것으로 삼성카드와는 무관합니다.
      </p>
      
      <div>
        <strong>개인정보처리방침</strong>
        <v-row>
          <v-col>신용정보 활용체계</v-col>
          <v-col>신용정보 활용체계</v-col>
          <v-col>신용정보 활용체계</v-col>
        </v-row>
      </div>
      
      <p>꼭 알아 두세요</p>
      <p>당사는 금융상품투자에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자에 앞서 당사의 설명을 들으시기 바랍니다.</p>
      <p>당사는 금융상품투자에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자에 앞서 당사의 설명을 들으시기 바랍니다.</p>
      <p>당사는 금융상품투자에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자에 앞서 당사의 설명을 들으시기 바랍니다.</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: '삼성증권'
  }),
}
</script>
