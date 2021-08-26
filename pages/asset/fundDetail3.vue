<template>
  <section class="sfip">
    <v-main>

        <div class="cont-wrap">
            <h2>이스트스프링미국투자적격회사채 H-Ae</h2>
            <h3 class="mt-12">잔고상세현황</h3>

            <div class="tbl-base mt-4">
                <table>
                    <caption>잔고상세현황</caption>
                    <colgroup>
                        <col width="130px">
                        <col width="auto">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">매수금액</th>
                            <td class="text-right">9,999,999,999원</td>
                        </tr>
                        <tr>
                            <th scope="row">잔고수익률</th>
                            <td class="text-right">-33.33%</td>
                        </tr>
                        <tr>
                            <th scope="row">평가손익</th>
                            <td class="text-right">-9,999,999,999원</td>
                        </tr>
                        <tr>
                            <th scope="row">기준 가격</th>
                            <td class="text-right">9,999,999,999원</td>
                        </tr>
                        <tr>
                            <th scope="row">잔고수량</th>
                            <td class="text-right">429</td>
                        </tr>
                        <tr>
                            <th scope="row">누적현금분배금</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">세전평가금액</th>
                            <td class="text-right">488</td>
                        </tr>
                        <tr>
                            <th scope="row">세후평가금액</th>
                            <td class="text-right">488</td>
                        </tr>
                        <tr>
                            <th scope="row">팔기정산금액</th>
                            <td class="text-right">488</td>
                        </tr>
                        <tr>
                            <th scope="row">원금</th>
                            <td class="text-right">500</td>
                        </tr>
                        <tr>
                            <th scope="row">경과일수</th>
                            <td class="text-right">27</td>
                        </tr>
                        <tr>
                            <th scope="row">연환산수익률</th>
                            <td class="text-right">-33.33%</td>
                        </tr>
                        <tr>
                            <th scope="row">과표</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">세금</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">수수료</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">추징세액</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">현금미수변제금</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">미수Fee변제금</th>
                            <td class="text-right">0</td>
                        </tr>
                        <tr>
                            <th scope="row">결제기준일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                        <tr>
                            <th scope="row">청구가능일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                        <tr>
                            <th scope="row">수수료면제일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                        <tr>
                            <th scope="row">저축기간종료일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                        <tr>
                            <th scope="row">세제혜택개시일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                        <tr>
                            <th scope="row">세제혜택종료일</th>
                            <td class="text-right">2019-10-16</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
            name: '펀드잔고상세현황'
        },
      }
    },
  }
</script>