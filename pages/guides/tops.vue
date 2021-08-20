<template>
  <section id="material-colors" class="sfip">

    <SSubject :subject="commons.name"/>


    <v-subheader>삼성증권 탑 적용</v-subheader>
    <v-list>
      <v-list-item>
    <v-btn
      :class="this.page.navi ? 'primary' : 'secondary' "
      @click="toggleNavi">네비게이션 영역 있는경우
    </v-btn>
      </v-list-item>
      <v-list-item>
    <v-btn
      :class="this.page.useCancel ? 'primary' : 'secondary' "
      @click="addCancel">네비게이션 취소</v-btn>
      </v-list-item>
    </v-list>


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
  computed: {
    page: function () {
      return this.$store.state.commons.page
    },
  },
  methods: {
    toggleNavi: function () {
      this.$store.commit("commons/page/toggleNavi")
    },
    addCancel: function () {
      this.$store.commit("commons/page/setCancel", this.cancel)
    },
    cancel: function () {
      alert('test');
    }
  },
}

</script>
