<template>
  <section class="sfip">
    <v-main>

        <div class="cont-wrap pb-8">
            <h2>이스트스프링미국투자적격회사채 H-Ae</h2>
        </div>

        <div class="cont-wrap px-0 pt-3 pb-12">
            <div class="sort-wrap">
                <v-combobox
                    v-model="select"
                    :items="sort"
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
            
            <div class="list-invest">
                <template v-for="(item) in listItems">
                    <v-list-item  :key="item.key" >
                        <v-list-item-content>
                            <v-list-item-title>
                                <div class="date" v-text="item.date"></div>
                                <div :class="[item.chip == '투자' ? 'chip' : item.chip == '팔기' ? 'chip type2' : 'chip type3']" v-text="item.chip"></div>
                            </v-list-item-title>
                            <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </div>

            <div class="no-data">
                <i class="ico"></i>
                <p class="txt2">조회된 내역이 없습니다.</p>
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
            name: '채권투자내역'
        },
        select: '1개월',
        sort: [
            '1개월',
            '수익률 낮은 순',
        ],
        listItems: [
          { key: 'data-1', date: '2019-08-01', chip: '투자', price: '82,354,971원' },
          { key: 'data-2', date: '2020-02-09 일부환매지급일', chip: '팔기', price: '999,999,999원' },
          { key: 'data-3', date: '2019-06-01', chip: '이자입금', price: '1원' },
        ],
      }
    },
  }
</script>