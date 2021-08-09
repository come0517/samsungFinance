<template>
  <section class="sfip">

    <h1>fonts</h1>
    <v-divider class="mb-5"/>

    <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>상세타이틀 1</v-list-item-title>
            <strong class="fs-title-1">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>상세타이틀 2</v-list-item-title>
            <strong class="fs-title-2">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>대제목 H1</v-list-item-title>
            <h1 class="fs-h1">통합플랫폼 삼성증권</h1>
          </v-list-item-content>
        </v-list-item>
        <v-list-item> 
          <v-list-item-content>
            <v-list-item-title>대제목 H2</v-list-item-title>
            <h2 class="fs-h2">통합플랫폼 삼성증권</h2>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>대제목 H3</v-list-item-title>
            <h3 class="fs-h3">통합플랫폼 삼성증권</h3>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 여러줄</v-list-item-title>
            <p class="fs-p-ml">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 한줄</v-list-item-title>
            <p class="fs-p">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 완료 (강조)</v-list-item-title>
            <strong class="fs-p-emp">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>주석</v-list-item-title>
            <p class="fs-cap">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>폼</v-list-item-title>
            <p class="fs-form">Forms 에서 상세 확인</p>
            <nuxt-link to="/guides/forms">Forms 바로가기</nuxt-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>기타</v-list-item-title>
            <p class="fs-form">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>


    </v-list>

  </section>
</template>

<script>
  export default {
      layout: 'sfip',
  }
</script>