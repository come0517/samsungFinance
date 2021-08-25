<template>
  <section class="sfip">
    <v-main class="myassets">

        <div class="cont-wrap2">
            <div class="acccount-detail">
                <div class="d-flex justify-space-between">
                    <div class="account-name">
                        <h2>여행 자금 마련 계좌</h2>
                        <p>123123123456 [종합]</p>
                    </div>
                    <v-btn icon width="24"  height="24" color="#ccc"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </div>
                <div class="price-wrap mt-6">
                    <div class="total"><span>3,959,976</span>원</div>
                    <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
                </div>
                <div class="possible-price mt-6">
                    <span>출금가능금액</span> <strong>999,999,999원</strong>
                </div>
            </div>
        </div>

        <div class="cont-wrap2 pt-6 px-0">
            <div>
                <v-tabs
                    v-model="tab"
                    class="tab-btn-type"
                    color="#616161"
                    height="36px"
                    hide-slider
                >
                    <v-tab>#전체</v-tab>
                    <v-tab>#펀드</v-tab>
                    <v-tab>#파생결합증권</v-tab>
                    <v-tab>#채권</v-tab>
                    <v-tab>#단기상품</v-tab>
                    <v-tab>#랩, 자문사연계</v-tab>
                    <v-tab>#국내주식</v-tab>
                    <v-tab>#해외주식</v-tab>
                    <v-tab>#옵션</v-tab>
                </v-tabs>
                <div class="sort-wrap mt-3">
                    <v-combobox
                        v-model="select"
                        :items="items"
                        label="수익률 높은 순"
                        solo
                        flat
                        dense
                        height="20px"
                        hide-details="false"
                        :multiple="false"
                        append-icon="mdi-chevron-down"
                    ></v-combobox>
                </div>
            </div>
            <v-tabs-items v-model="tab">
                <v-tab-item>

                    <div class="card-account2">
                        <div class="name">[펀드] 삼성J-REITs부동산투자삼성J-REITs부동산투자</div>
                        <div class="price-wrap">
                            <div class="total"><span>3,959,976</span>원</div>
                            <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
                        </div>
                    </div>

                    <div class="card-account2">
                        <div class="name">[펀드] 삼성J-REITs부동산투…</div>
                        <div class="price-wrap">
                            <div class="total"><span>3,959,976</span>원</div>
                            <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
                        </div>
                    </div>

                </v-tab-item>

                <v-tab-item>

                    <div class="no-data">
                        <i class="ico"></i>
                        <p class="txt2">조회된 내역이 없습니다.</p>
                    </div>

                </v-tab-item>
            </v-tabs-items>
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
            name: '계좌별 자산 상세'
        },
        tab: null,
        select: '수익률 높은 순',
        items: [
            '수익률 높은 순',
            '수익률 낮은 순',
        ],
      }
    },
  }
</script>