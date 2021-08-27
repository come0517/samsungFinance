<template>
  <section class="sfip">
    <s-subject :subject="`저축기간을 변경할까요?`"/>
    <v-main>
        <div class="cont-wrap pt-12">
            <div class="inp-wrap">
                <v-select
                v-model="period"
                :items="periodOpt"
                label="저축기간"
                :multiple="false"
                append-icon="mdi-chevron-down"
                ></v-select>
            </div>
            <p class="fs-small text-right">만기일 (2022-12-18)</p>

            <v-expansion-panels flat tile class="mt-12">
                <v-expansion-panel>
                <v-expansion-panel-header>
                    <span class="fs-h4">
                    <v-icon small color="black">mdi-alert-circle</v-icon>
                    꼭 읽어보세요.
                    </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="fs-cap">
                    <ul>
                        <li>정기투자서비스를 이용 중이시라면 정기투자 기간도 함께 변경하세요.</li>
                        <li>저축기간을 변경하시면 만기일도 자동으로 변경됩니다.</li>
                        <li>자본시장과 금융투자법에 관한 법률 시행령 제 223조에 따라 사모집합기구가 아닌 투자신탁(펀드)를 설정하고 1년이 지난 후 1개월간 계속하여 투자신탁(펀드)의 원본액이 50억원 미만인 경우 투자신탁(펀드)의 해지 사유에 해당됩니다.</li>
                    </ul>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

        </div>
        <v-footer :fixed=true :padless=true>
            <v-row no-gutters>
                <v-col col=6>
                <v-btn block x-large tile color="#eee">아니요</v-btn>
                </v-col>
                <v-col col=6>
                <v-btn block x-large tile color="primary">예</v-btn>
                </v-col>
            </v-row>
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
    computed: {
      periodOpt: function () { return ['기간선택'] },
  },
    data () {
      return {
          commons: {
            name: '저축기간변경'
        },
        period: '기간선택',
      }
    },
  }
</script>