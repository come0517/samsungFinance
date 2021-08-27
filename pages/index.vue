<!--
  FIXME: 해당 페이지는 개발용 페이지로 변경 필요
  인덱스 페이지
  - 가이드용 템플릿 페이지
  updated: 2021.08.25 ky.cho
-->
<template>
  <section>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <ShadowBox
          :data="content"
        >
        </ShadowBox>
      </v-col>
    </v-row>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >

      <v-list dense>
        <v-list-item-group
          multiple
        >
          <template v-for="(item, i) in content.pubs">
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
    </v-navigation-drawer>

    <v-btn
      color="pink"
      dark
      x-large
      block
      tile
      padless
      @click.stop="drawer = !drawer"
    >
      Publishing Lists
    </v-btn>

  </section>

</template>

<script>

export default {
  layout: 'app',
  transition: 'slide-bottom',
  title: '삼성증권 가이드 페이지',
  head: () => ({
    title: '삼성증권 가이드 페이지'
  }),
  data: () => ({
    title: '삼성증권 가이드 페이지',
    drawer: null,
    content: {
      options: {
        icon: true
      },
      title: '공통 UI 가이드 목록',
      items: [
        {icon: 'mdi-palette', title: 'Colors', to: '/guides/colors'},
        {icon: 'mdi-menu', title: 'Tops', to: '/guides/tops'},
        {icon: 'mdi-format-text', title: 'Fonts', to: '/guides/fonts'},
        {icon: 'mdi-page-layout-body', title: 'Layouts', to: '/guides/layouts'},
        {icon: 'mdi-gesture-tap-button', title: 'Buttons', to: '/guides/boxes'},
        {icon: 'mdi-form-textbox-lock', title: 'Form', to: '/guides/forms'},
        {icon: 'mdi-list-status', title: 'Lists', to: '/guides/lists'},
        // {icon: 'mdi-table', title: 'Tables', to: '/guides/tables'},
        {icon: 'mdi-layers-triple-outline', title: 'Popups', to: '/guides/popups'},
        // {icon: 'mdi-keyboard', title: 'Keypad', to: '/guides/Keypad'},
      ],
      pubs: [
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

          ],
        },
      ],
    }
  })
}
</script>
