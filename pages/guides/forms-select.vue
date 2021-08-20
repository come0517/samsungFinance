<template>

  <section class="sfip">

    <s-subject
      class="deep-orange lighten-3"
      :subject="`${this.commons.name} \n해당페이지는 작업 진행중입니다.\n커스텀 적용 검토 (Framework 미사용)\n2021.08.16`
    "/>

    <v-subheader>Dropdown Default</v-subheader>
    <p class="pl-4 fs-cap">모든 선택박스를 레이어로 가져 갈지에 대한 고민 필요</p>
    <p class="pl-4 fs-cap">선택박스 안쪽의 내용은 아이콘 적용이 어렵습니다.</p>

    <v-list>
      <v-list-item>
        <v-list-item-content>

          <v-container fluid>
          <v-combobox
            v-model="select"
            :items="items"
            label="거래목적"
            hint="부가적인 설명이 들어가는 영역"
            persistent-hint
            :multiple="false"
            append-icon="mdi-chevron-down"
          ></v-combobox>
          </v-container>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title>완료문구 있는경우</v-list-item-title>
          <v-text-field
          label="제목"

          persistent-placeholder
          :success-messages="success ? '정상입니다.' : ''"
          clearable
        ></v-text-field>
        </v-list-item-content>
      </v-list-item> -->


    </v-list>




  </section>

</template>


<style lang="scss" scoped>


</style>

<script>
export default {

  layout: 'sfip',
  created: function () {
    this.$store.commit("commons/page/toggleNavi", true)
  },
  computed: {
    success() {
      return '사용가능합니다.'
    }
  },

  data () {
    return {
      commons: {
        name: 'Dropdown - Form Controls'
      },
      select: '적극적재산증식',
      items: [
        '적극적재산증식',
        '소극적재산증식',
        '목돈적립',
      ],
    }
  },
}
</script>
