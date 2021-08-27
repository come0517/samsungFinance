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
                    <strong class="fs-h2">HDC현대산업개발146</strong>
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
                    <dt>매매이율</dt>
                    <dd>2.45%</dd>
                </dl>
                <dl>
                    <dt>매수일</dt>
                    <dd>2020-03-24</dd>
                </dl>
                <dl>
                    <dt>매도일</dt>
                    <dd>020-03-24</dd>
                </dl>
            </div>
        </div>

        <div class="cont-wrap">
            <v-list class="py-0">
                <v-list-item-group
                v-model="selectedItem2"
                color="secondary"
                :ripple="false"
                >
                <template v-for="(item, index) in items">
                    <v-list-item :key="item.key" :ripple="false" >
                    <template >
                        <v-list-item-content :ripple="false" >
                        <v-list-item-title :ripple="false" v-text="item.text" />
                        </v-list-item-content>
                        <v-list-item-icon>
                        <v-icon v-text="item.icon" color="#212121"></v-icon>
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
            name: '채권상세정보'
        },
        items: [
          { key: 'data-1', text: '투자내역', icon: 'mdi-chevron-right' },
          { key: 'data-2', text: '이표상세내역', icon: 'mdi-chevron-right' },
        ],
      }
    },
  }
</script>