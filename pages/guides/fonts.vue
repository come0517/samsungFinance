<template>
  <section class="sfip">

    <h1>fonts</h1>
    <v-divider class="mb-5"/>

    <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>상세타이틀 1</v-list-item-title>
            <strong class="text-h5">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>상세타이틀 2</v-list-item-title>
            <strong class="text-h6">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>대제목 H1</v-list-item-title>
            <h1>통합플랫폼 삼성증권</h1>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>대제목 H2</v-list-item-title>
            <h2>통합플랫폼 삼성증권</h2>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>대제목 H3</v-list-item-title>
            <h3>통합플랫폼 삼성증권</h3>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 여러줄</v-list-item-title>
            <p class="text-body1">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 한줄</v-list-item-title>
            <p class="text-body2">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>본문 - 완료 (강조)</v-list-item-title>
            <strong class="text-body1">통합플랫폼 삼성증권</strong>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>주석</v-list-item-title>
            <p class="text-caption">통합플랫폼 삼성증권</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>폼</v-list-item-title>
            <p class="text-body1">Forms 에서 상세 확인</p>
            <nuxt-link to="/guides/forms">Forms 바로가기</nuxt-link>
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