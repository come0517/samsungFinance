<template>
  <section class="sfip">
    <v-main class="myassets">

        <div class="cont-wrap pb-0">
            <div class="asset-total">
                <h2 class="fs-title-4"><strong>삼성증권</strong> 자산</h2>
                <div class="total mt-2">
                    <span>20,327,000</span>원
                    <v-btn icon width="24" color="#ccc"><v-icon>mdi-information-outline</v-icon></v-btn>
                </div>
                <div class="break-even plus mt-4">
                    <span><span>230,489</span>원</span><v-icon small>mdi-menu-up</v-icon><strong>10.31%</strong>
                </div>
            </div>
            <div class="link-wrap">
                <a href="#none" class="btn">
                    <span>투자/팔기 신청현황</span>
                    <v-icon small color="#111">mdi-chevron-right</v-icon>
                </a>
            </div>
        </div>

        <div class="cont-wrap">
            <v-tabs
                v-model="tab"
                class="tab-base"
                color="#0B0D0F"
                height="56px"
            >
                <v-tab>계좌별</v-tab>
                <v-tab>유형별</v-tab>
                <v-tab>상품별</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <div class="no-data">
                        <i class="ico"></i>
                        <p class="txt">투자 중인 상품이 없습니다</p>
                    </div>
                    <div class="card-account mt-5">
                        <v-card outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="tit-wrap">
                                        <v-row align="center">
                                            <v-col>
                                                <div class="tit"><strong>종합</strong></div>
                                            </v-col>
                                            <v-col class="text-right">
                                                <div class="account-num">7078949809-01</div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <div class="price-info">
                                        <div class="total"><span>12,568,000</span>원</div>
                                        <div class="break-even plus">
                                            <span><span>+230,489</span>원</span><v-icon small>mdi-menu-up</v-icon><strong>10.31%</strong>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                                <v-row align="center">
                                    <v-col class="txt-sub">
                                        예수금 <span>260,000원</span>
                                    </v-col>
                                    <v-col class="text-right">
                                        <v-btn text>거래내역 <v-icon small>mdi-chevron-right</v-icon></v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </div>
                    <div class="card-account mt-5">
                        <v-card outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="tit-wrap">
                                        <v-row align="center">
                                            <v-col>
                                                <div class="tit"><strong>종합</strong></div>
                                            </v-col>
                                            <v-col class="text-right">
                                                <div class="account-num">7078949809-01</div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <div class="price-info">
                                        <div class="total"><span>12,568,000</span>원</div>
                                        <div class="break-even minus">
                                            <span><span>+230,489</span>원</span><v-icon small>mdi-menu-down</v-icon><strong>10.31%</strong>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                            <v-card-actions>
                                <v-row align="center">
                                    <v-col class="txt-sub">
                                        예수금 <span>260,000원</span>
                                    </v-col>
                                    <v-col class="text-right">
                                        <v-btn text>거래내역 <v-icon small>mdi-chevron-right</v-icon></v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </div>
                </v-tab-item>
                <v-tab-item>
                    <div class="card-account mt-5">
                        <v-card outlined>
                            <v-list-item>
                                <v-list-item-content class="pt-6">
                                    <div class="tit"><strong>[펀드]</strong></div>
                                    <div class="price-info">
                                        <div class="total"><span>12,568,000</span>원</div>
                                        <div class="break-even minus">
                                            <span><span>+230,489</span>원</span><v-icon small>mdi-menu-down</v-icon><strong>10.31%</strong>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </div>
                </v-tab-item>
                <v-tab-item>
                    <div class="card-account mt-5">
                        <v-card outlined>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="tit-wrap type2">
                                        <v-row align="center">
                                            <v-col>
                                                <div class="tit"><strong>종합N페이</strong></div>
                                            </v-col>
                                            <v-col class="text-right">
                                                <div class="account-num">7078949809-01</div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <div class="tit"><strong>[펀드]</strong> 피델리티글로벌테크놀로지증권자투</div>
                                    <div class="price-info">
                                        <div class="total"><span>12,568,000</span>원</div>
                                        <div class="break-even minus">
                                            <span><span>+230,489</span>원</span><v-icon small>mdi-menu-down</v-icon><strong>10.31%</strong>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <div class="tit"><strong>[주식]</strong> 삼성전자</div>
                                    <div class="price-info">
                                        <div class="total"><span>12,568,000</span>원</div>
                                        <div class="break-even plus">
                                            <span><span>+230,489</span>원</span><v-icon small>mdi-menu-up</v-icon><strong>10.31%</strong>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                            
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="tit">예수금</div>
                                    <div class="price-info">
                                        <div class="total"><span>25,800</span>원</div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </div>
    </v-main> 
  </section>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
      }
    },
  }
</script>