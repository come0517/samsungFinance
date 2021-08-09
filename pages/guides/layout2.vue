<template>
  <section class="sfip">
    <v-card
        class="mx-auto"
        max-width="100%"
        tile 
        
      >
        <v-card-title aligin="center" style="text-align: center">
          <v-row>
            <v-col align="center">
              <strong>하단 버튼 레이아웃<br/>푸터영역은 안보이게 설정됨 </strong>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-subtitle>
          <v-row>
            <v-col align="center">
              페이지 컨텐츠 영역이 화면 사이즈보다 작아도 푸터 영역은 안보이게 설정 <br/>
              스크롤 해야만 확인 가능함.
            </v-col>
          </v-row>
        </v-card-subtitle>            
        
      </v-card>

      <v-divider class="mt-5"></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>출금기관</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>신청일</v-list-item-title>
          <v-list-item-subtitle>2021-08-02</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>즉시투자</v-list-item-title>
          <v-list-item-subtitle>
            1234567890-1234-12345
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            정기투자금액: 124,000원
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

<v-divider class="mt-5"></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>출금기관</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>신청일</v-list-item-title>
          <v-list-item-subtitle>2021-08-02</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>즉시투자</v-list-item-title>
          <v-list-item-subtitle>
            1234567890-1234-12345
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            정기투자금액: 124,000원
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>


<v-divider class="mt-5"></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>출금기관</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>신청일</v-list-item-title>
          <v-list-item-subtitle>2021-08-02</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>즉시투자</v-list-item-title>
          <v-list-item-subtitle>
            1234567890-1234-12345
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            정기투자금액: 124,000원
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-footer :fixed=true :padless=true >
        <v-btn block tile color="primary">확인</v-btn>
      </v-footer>

  </section>
</template>

<script>
  export default {
      layout: 'sfip-btn',
      data: () => ({
        props: [
          { title: '수익률', content: '1.96%', etc: '(3개월)'},
          { title: '위험도', content: '고위험', etc: ''},
          { title: '펀드규모', content: '9,480억원', etc: '(액외펀드기준)'},
        ],
      }),
  }
</script>