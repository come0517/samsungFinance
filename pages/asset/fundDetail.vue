<template>
  <section class="sfip">
    <v-main class="myassets">

        <div class="cont-wrap2 px-8 pb-5">
            <div class="acccount-detail">
                <v-btn 
                    text
                    width="100%"
                    max-height="48px"
                    class="tit-btn px-0"
                >
                    <strong class="fs-h2">이스트스프링미국투자적격회사채 H-Ae</strong>
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
                <v-btn depressed>
                    <strong>정기투자 신청하세요</strong>
                    <v-icon small color="#111">mdi-chevron-right</v-icon>
                </v-btn>
            </div>
        </div>

        <div class="cont-wrap2 py-6">
            <h3>상세정보</h3>
            <div class="info-style">
                <dl>
                    <dt>연환산수익률</dt>
                    <dd>8.53%</dd>
                </dl>
                <dl>
                    <dt>매수일</dt>
                    <dd>2021-07-01</dd>
                </dl>
                <dl>
                    <dt>만기일</dt>
                    <dd>2022-08-01</dd>
                </dl>
            </div>
        </div>
        
        <div class="cont-wrap2 py-6">
            <div class="d-flex justify-space-between align-center">
                <h3>정기투자</h3>
                <div>
                    <v-btn depressed small>해지</v-btn>
                    <v-btn depressed small>변경</v-btn>
                </div>
            </div>
            <div class="info-style">
                <dl>
                    <dt>연환산수익률</dt>
                    <dd>8.53%</dd>
                </dl>
                <dl>
                    <dt>매수일</dt>
                    <dd>2021-07-01</dd>
                </dl>
                <dl>
                    <dt>만기일</dt>
                    <dd>2022-08-01</dd>
                </dl>
            </div>
        </div>

        <div class="cont-wrap2 py-6">
            <div class="d-flex justify-space-between">
                <h3>평가등급</h3>
                <div>
                별점
                </div>
            </div>

            <h3 class="mt-12">자산운용보고서</h3>
            <v-list>
                <v-list-item-group
                v-model="selectedItem"
                color="secondary"
                :ripple="false"
                >
                <template v-for="(item, index) in items">
                    <v-list-item :key="item.key" :ripple="false" >
                    <template >
                        <v-list-item-content :ripple="false" >
                        <v-list-item-title :ripple="false" v-text="item.text"/>
                        </v-list-item-content>
                        <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                    </template>
                    </v-list-item>
                    <v-divider
                    color=""
                    v-if="index < items.length - 1"
                    :key="index"/>
                </template>
                </v-list-item-group>
            </v-list>
        </div>
        
        <div class="cont-wrap2">
            <v-list class="py-0">
                <v-list-item-group
                v-model="selectedItem2"
                color="secondary"
                :ripple="false"
                >
                <template v-for="(item, index) in items2">
                    <v-list-item :key="item.key" :ripple="false" >
                    <template >
                        <v-list-item-content :ripple="false" >
                        <v-list-item-title :ripple="false" v-text="item.text" />
                        </v-list-item-content>
                        <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                    </template>
                    </v-list-item>
                    <v-divider
                    color=""
                    v-if="index < items.length - 1"
                    :key="index"/>
                </template>
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
            name: '펀드상세정보'
        },
        selectedItem: null,
        selectedItem2: null,
        items: [
          { key: 'data-1', text: '2019-08-01', icon: 'mdi-chevron-right' },
          { key: 'data-2', text: '2019-07-01', icon: 'mdi-chevron-right' },
          { key: 'data-3', text: '2019-06-01', icon: 'mdi-chevron-right' },
        ],
        items2: [
          { key: 'data-1', text: '투자내역', icon: 'mdi-chevron-right' },
          { key: 'data-2', text: '잔고상세현황', icon: 'mdi-chevron-right' },
          { key: 'data-3', text: '저축기간', icon: 'mdi-chevron-right' },
        ],
      }
    },
  }
</script>