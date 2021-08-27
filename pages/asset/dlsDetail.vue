<template>
  <section class="sfip">
    <v-main>

        <div class="cont-wrap pb-5">
            <div class="acccount-detail">
                <v-btn 
                    text
                    width="100%"
                    max-height="48px"
                    class="tit-btn px-0"
                >
                    <strong class="fs-h2">월지급식 NOKI200</strong>
                    <v-icon color="#212121">mdi-chevron-right</v-icon>
                </v-btn>
                <div class="price-wrap mt-6">
                    <div class="total"><span>999,999,999,999</span>원</div>
                    <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
                </div>
                <div class="info-style mt-6">
                    <dl>
                        <dt>투자금액</dt>
                        <dd>999,999,999,999원</dd>
                    </dl>
                    <dl>
                        <dt>보유수량</dt>
                        <dd>999,999</dd>
                    </dl>
                    <dl>
                        <dt>현재가격</dt>
                        <dd>999,999,999,999원</dd>
                    </dl>
                </div>
            </div>
        </div>

        <div class="cont-wrap py-6">
            <h3>상세정보</h3>
            <div class="info-style">
                <dl>
                    <dt>원금보장여부</dt>
                    <dd>원금비보장</dd>
                </dl>
                <dl>
                    <dt>상환방식</dt>
                    <dd>조기상환형</dd>
                </dl>
                <dl>
                    <dt>상환여부</dt>
                    <dd>미상환</dd>
                </dl>
            </div>
        </div>

        <div class="cont-wrap">
            <v-list class="py-0">
                <v-list-item-group
                color="secondary"
                >
                    <v-list-item >
                        <v-list-item-content >
                        <v-list-item-title>투자내역</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                        <v-icon color="#212121">mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </div>

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
            name: '파생결합증권상세정보'
        },
      }
    },
  }
</script>