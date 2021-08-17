<template>
  <section id="material-colors" class="sfip">

    <SSubject :subject="commons.name"/>

    <v-btn class="primary" @click="toggleNavi">네비게이션 영역 있는경우</v-btn>


      <v-subheader>삼성증권 탑 적용</v-subheader>

  </section>

</template>



<script>

export default {
  layout: 'sfip',
  data: () => ({
    commons: {
      name: '삼성증권 Top Navi - 공통 가이드 ',
    },
  }),

  created: {},
  computed: {

  },
  methods: {
    toggleNavi: function () {
      this.$store.commit("commons/page/toggleNavi")
    }
  },
  head: function () {
    return {title: this.commons.name}
  }
}

</script>
