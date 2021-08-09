<template>
  <div>   
    <v-col 
      v-for="fundList in props"
      :key="fundList.id"
      >
      <v-card :to="fundList.id">
        <v-card-title v-text="fundList.title"></v-card-title>
        <v-card-subtitle v-text="fundList.content"></v-card-subtitle>
        
        <v-container>
          <v-row>
            <v-col cols="1" v-text="fundList.fee"></v-col>
            <v-divider vertical></v-divider>
            <v-col cols="1" v-text="fundList.risk"></v-col>
            <v-divider vertical></v-divider>
            <v-col cols="1" v-text="fundList.online"></v-col>
          </v-row>
        </v-container>

        <v-col v-text="fundList.month" align="right"></v-col>
        <v-col v-text="fundList.rate" align="right"></v-col>
      </v-card>
    </v-col>

  </div>
</template>

<script>
  export default {
    data: () => ({
      props: [
        { id:'1', title: '[펀드] 넷플릭스 보는 당신이라면', content: '키움글로벅구독경제증권투자H(주식)-C-e', fee: '수수료미청구', risk: '고위험', online: '온라인', month: '3개월', rate: '13.00%'},
        { id:'2', title: '[펀드] 미국 꿈의 기업 버스타기', content: 'AB미국그로스증권투자신탁(주식-재간접형)-Ce', fee: '수수료미청구', risk: '고위험', online: '온라인', month: '3개월', rate: '9.72%'},
        { id:'3', title: '[펀드] ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ', content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ', fee: '수수료미청구', risk: '고위험', online: '온라인', month: '3개월', rate: '12.34%'},
        { id:'4', title: '[펀드] testtesttesttesttesttest1', content: 'testtesttesttesttesttesttesttest1', fee: '수수료미청구', risk: '고위험', online: 'test1', month: '3개월', rate: '11.11%'},
        { id:'5', title: '[펀드] testtesttesttesttesttest2', content: 'testtesttesttesttesttesttesttest2', fee: '수수료미청구', risk: '고위험', online: 'test2', month: '3개월', rate: '22.22%'},
        { id:'6', title: '[펀드] testtesttesttesttesttest3', content: 'testtesttesttesttesttesttesttest3', fee: '수수료미청구', risk: '고위험', online: 'test3', month: '3개월', rate: '33.33%'},
        { id:'7', title: '[펀드] testtesttesttesttesttest4', content: 'testtesttesttesttesttesttesttest4', fee: '수수료미청구', risk: '고위험', online: 'test4', month: '3개월', rate: '44.44%'},
      ],
    }),
  }
</script>