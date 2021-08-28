<template>
  <v-navigation-drawer
    v-model="toggle"
    absolute
    temporary
  >

    <v-list>
      <v-list-item-group
        multiple
      >
        <template v-for="(item, i) in pubs">
          <v-card
            class="mx-auto"

            color="#1f7087"
            :key="`divider-${i}`"
            dark
            tile
          >
            <v-card-text>
              {{ item.version }}
            </v-card-text>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title dark class="mb-1">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>


          <div :key="`wrapper-${i}`" v-if="item.children">
            <v-list-item
              v-for="menu in item.children"
              :key="menu.id"
              active-class="deep-purple--text text--accent-4"
              :to="menu.id"
            >

              <v-list-item-content>
                <v-list-item-title :class="$route.path === menu.id ? 'text-overline' : 'text-caption'" v-text="menu.name"></v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </div>
        </template>
      </v-list-item-group>
    </v-list>
    <v-fab-transition>
      <v-btn
        color="#4f7087"
        dark
        absolute
        fab
        top
        right
        small
        class="mt-10"
        @click="$emit('close', menu)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
  $list-padding: 0;
</style>

<script>
export default {
  props: {
    menu: Boolean,
    close: Function,
  },
  computed: {
    toggle: {
      get: function () {
        return this.menu;
      },
      set: function (toggle) {
         return toggle
      },
    }
  },
  data: () => ({
    title: '통합플랫폼 - 삼성증권',
    pubs: [
      {
        id: '/guide',
        name: '공통가이드',
        version: '00. 공통_guide_html_210806',
        children: [
          {icon: 'mdi-palette', name: 'Colors', id: '/guides/colors'},
          {icon: 'mdi-menu', name: 'Tops', id: '/guides/tops'},
          {icon: 'mdi-format-text', name: 'Fonts', id: '/guides/fonts'},
          {icon: 'mdi-page-layout-body', name: 'Layouts', id: '/guides/popups'},
          {icon: 'mdi-gesture-tap-button', name: 'Buttons', id: '/guides/boxes'},
          {icon: 'mdi-form-textbox-lock', name: 'Form', id: '/guides/forms'},
          {icon: 'mdi-list-status', name: 'Lists', id: '/guides/lists'},
        ],
      },
      {
        id: '/account/nontact',
        name: '비대면계좌개설',
        version: '01_비대면계좌개설_guide_210820',
        desc: 'HTML → VUE 이전 작업 진행중',
        children: [
          { id: '/account/nontact/step1', name: '비대면계좌개설 1' },
          { id: '/account/nontact/step2', name: '비대면계좌개설 2' },
          { id: '/account/nontact/step3', name: '비대면계좌개설 3' },
          { id: '/account/nontact/step4', name: '비대면계좌개설 4' },
          { id: '/account/nontact/step5', name: '비대면계좌개설 5' },
          { id: '/account/nontact/step6', name: '비대면계좌개설 6' },
          { id: '/account/nontact/step7', name: '비대면계좌개설 7' },
          { id: '/account/nontact/step8', name: '비대면계좌개설 8' },
          { id: '/account/nontact/step9', name: '비대면계좌개설 9' },
          { id: '/account/nontact/step10', name: '비대면계좌개설 10' },
          { id: '/account/nontact/step11', name: '비대면계좌개설 11' },
          { id: '/account/nontact/step12', name: '비대면계좌개설 12' },

        ],
      },
      {
        id: '/asset',
        name: '마이자산',
        version: '03. 마이자산_guide_210806',
        children: [
          { id: '/asset/main', name: '마이자산 메인' },
          { id: '/asset/main2', name: '마이자산 메인2' },
          { id: '/asset/detail', name: '마이자산 → 계좌별 자산 상세' },
          { id: '/asset/detail2', name: '마이자산 → 계좌거래내역' },
          { id: '/asset/fundTotal', name: '마이자산 → 펀드투자내역' },
          { id: '/asset/fundDetail', name: '마이자산 → 펀드투자내역1' },
          { id: '/asset/fundDetail2', name: '마이자산 → 펀드투자내역2' },
          { id: '/asset/fundDetail3', name: '마이자산 → 펀드투자내역3' },
          { id: '/asset/fund1', name: '마이자산 → 펀드1' },
          { id: '/asset/fund2', name: '마이자산 → 펀드2' },
          { id: '/asset/fund3', name: '마이자산 → 펀드3' },
          { id: '/asset/dlsDetail', name: '마이자산 → DLS1' },
          { id: '/asset/dlsDetail2', name: '마이자산 → DLS2' },
          { id: '/asset/dlsDetail3', name: '마이자산 → DLS3' },
          { id: '/asset/bondDetail', name: '마이자산 → 채권1' },
          { id: '/asset/bondDetail2', name: '마이자산 → 채권2' },

        ],
      },
    ],
  }),
}
</script>
