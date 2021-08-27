<template>
  <section class="sfip">
    <v-main>
        <div class="cont-wrap pt-12">
            <div class="result-wrap mt-basic">
                <i class="ico2"></i>
                <h2 class="fs-h1">저축기간 변경을 완료했습니다.</h2>
                <p>삼성J-REITs부동산투자 제1호 <br>(REITs-재간접형)-Ae</p>
            </div>

            <div class="result-account">
                <dl>
                    <dt>투자계좌</dt>
                    <dd>
                        <span>1237-8945-456 [종합]</span>
                    </dd>
                </dl>
                <dl>
                    <dt>저축기간</dt>
                    <dd>
                        <span class="txt-primary">3년</span>
                    </dd>
                </dl>
            </div>
            
            <div class="floting-btn">
                <a href="#none" class="btn-base-l"><span>확인</span></a>
            </div>
        </div>
        <v-footer :fixed=true :padless=true>
            <v-btn block x-large tile color="primary">확인</v-btn>
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
  }
</script>