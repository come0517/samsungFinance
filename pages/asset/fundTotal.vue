<template>
  <section class="sfip">
    <v-main>

        <div class="cont-wrap pb-8">
            <h2>펀드 잔고 총액</h2>
            <div class="price-wrap mt-8">
                <div class="total"><span>3,959,976</span>원</div>
                <div class="detail"><span>999,999,999,999원</span><strong class="plus">+33.33%</strong></div>
                <div class="detail mt-1"><span>보유상품수</span><strong>999</strong></div>
            </div>
        </div>

        <div class="cont-wrap pt-8">
            <div>
                123456789-01 [종합]
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
            name: '펀드투자내역'
        },
        select: '1개월',
        sort: [
            '1개월',
            '수익률 낮은 순',
        ],
        listItems: [
          { key: 'data-1', date: '2019-08-01', chip: '투자', price: '82,354,971원' },
          { key: 'data-2', date: '2019-07-01', chip: '팔기', price: '999,999,999원' },
          { key: 'data-3', date: '2019-06-01', chip: '투자', price: '1원' },
        ],
      }
    },
  }
</script>