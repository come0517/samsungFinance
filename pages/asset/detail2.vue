<template>
  <section class="sfip">
    <v-main class="myassets">

        <div class="acccount-detail pb-12">
            <div class="d-flex justify-space-between">
                <div class="account-name">
                    <h2>여행 자금 마련 계좌</h2>
                    <p>123123123456 [종합]</p>
                </div>
            </div>
            <div class="price-wrap mt-6">
                <div class="total"><span>3,959,976</span>원</div>
                <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
            </div>
        </div>

        <div>
            <v-tabs
                v-model="tab"
                class="tab-base2"
                color="#286EF1;"
                height="32px"
            >
                <v-tab>전체</v-tab>
                <v-tab>매매</v-tab>
                <v-tab>입출금</v-tab>
                <v-tab>입출고</v-tab>
            </v-tabs>
            <div class="sort-wrap my-4">
                <v-combobox
                    v-model="select"
                    :items="items"
                    label="1개월"
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

                <div class="tbl-detail tbl-scroll">
                    <table>
                        <caption>거래내역</caption>
                        <colgroup>
                            <col width="124px">
                            <col span="7" width="auto">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" class="tbl-fixed">거래내역</th>
                                <th scope="col">정산금액<br>(거래수량)</th>
                                <th scope="col">현금잔액<br>(잔고수량)</th>
                                <th scope="col">거래금액<br>(거래단가)</th>
                                <th scope="col">제세금/대출이자 <br>수수료/Fee</th>
                                <th scope="col">매수/대출일<br>신용/대출금</th>
                                <th scope="col">통화코드<br>외화거래금액</th>
                                <th scope="col">외화정산금액<br>외화예수금잔고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="tbl-fixed">
                                    <div class="badge"><span>이벤트 당첨금입금</span></div>
                                    <p class="name">거래내역</p>
                                    <p class="date">2019-12-31</p>
                                </th>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                            </tr>
                            <tr>
                                <th scope="row" class="tbl-fixed">
                                    <div class="badge"><span>대체입금</span></div>
                                    <p class="name">삼성증권 제23983회 추가 연계증권</p>
                                    <p class="date">2019-12-31</p>
                                </th>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                            </tr>
                            <tr>
                                <th scope="row" class="tbl-fixed">
                                    <div class="badge type2"><span>대체입금</span></div>
                                    <p class="name">삼성증권 제23983회 추가 연계증권</p>
                                    <p class="date">2019-12-31</p>
                                </th>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                                <td>999,999,999 <br>(99,999,999)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </v-tab-item>
             <v-tab-item>

                    <div class="no-data">
                        <i class="ico"></i>
                        <p class="txt2">조회된 내역이 없습니다.</p>
                    </div>

                </v-tab-item>
        </v-tabs-items>

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
            name: '계좌거래내역'
        },
        tab: null,
        select: '1개월',
        items: [
            '1개월',
            '수익률 낮은 순',
        ],
      }
    },
  }
</script>