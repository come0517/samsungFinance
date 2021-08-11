<template>
  <div>   
    <v-app-bar app>
      <v-btn icon color>
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-toolbar-title class="flex text-center">삼성증권</v-toolbar-title>
      
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-app-bar style="margin-top:55px" app>
      <v-btn icon>
      <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>베트남 주식 펀드</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
      <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-col cols="16" style="margin-top:55px">
      <v-card
        class="mx-auto"
        max-width="100%"
      >

        <v-card-title>
          글로벌 프리미엄 브랜드
        </v-card-title>

        <v-card-subtitle>
          삼성픽테프리미엄브랜드증권자H(주식-재간접)-Ce
        </v-card-subtitle>

        <v-divider></v-divider>
   
        <v-container>
          <v-row dense>
            <v-col
            v-for="card in props"
            :key="card.title"
            cols="4"
            >
            <v-card style="min-height:200px">

            <v-card-title v-text="card.title" style="font-size:1rem"></v-card-title>
            <v-card-title v-text="card.content" style="font-size:1rem"></v-card-title>
            <v-card-title v-text="card.etc" style="font-size:1rem"></v-card-title>

            </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-col align="right">기준일 : 2021-08-06</v-col>

        <v-col align="center">펀드 설명</v-col>

        <v-col align="left">투자 포인트</v-col>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="400px"
        ></v-img>  
      </v-card>
    </v-col>

</div>
</template>


<script>
  export default {
    data: () => ({
      props: [
        { title: '수익률', content: '1.96%', etc: '(3개월)'},
        { title: '위험도', content: '고위험', etc: ''},
        { title: '펀드규모', content: '9,480억원', etc: '(액외펀드기준)'},
      ],
    }),
  }
</script>