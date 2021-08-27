<template>
  <section class="sfip">
    <v-main>

        <div class="cont-wrap">
            <h2>이스트스프링미국투자적격회사채 H-Ae</h2>
            <div class="price-wrap mt-6">
                <div class="fs-cap">최근 변경 기간 (2019-12-31)</div>
                <div class="total">1년 6개월</div>
            </div>
        </div>

        <v-footer :fixed=true :padless=true>
            <v-btn block x-large tile color="primary">저축기간 변경</v-btn>
        </v-footer>

    </v-main> 
  </section>
</template>

<script>
  export default {
    layout: 'sfip',
    created: function () {
        this.$store.commit("commons/page/toggleNavi", true)
    },
    data () {
      return {
          commons: {
            name: '펀드저축기간'
        },
      }
    },
    methods: {
        doAction: function () {
            
        }
    }
  }
</script>