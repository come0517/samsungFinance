<!--
  FIXME: 해당 페이지는 개발용 페이지로 변경 필요
  인덱스 페이지
  - 가이드용 템플릿 페이지
  updated: 2021.08.25 ky.cho
-->
<template>
  <section class="pt-10">
    <SSubject :subject="`개발자용 가이드 페이지 입니다.\n상단의 메뉴를 열어주세요.`"/>
  </section>

</template>

<script>

export default {
  layout: 'monimo',
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
          id: '/guide',
          name: '공통가이드',
          version: '00. 공통_guide_html_210806',
          children: [
            {icon: 'mdi-palette', name: 'Colors', id: '/guides/colors'},
            {icon: 'mdi-menu', name: 'Tops', id: '/guides/tops'},
            {icon: 'mdi-format-text', name: 'Fonts', id: '/guides/fonts'},
            {icon: 'mdi-page-layout-body', name: 'Layouts', id: '/guides/layouts'},
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
    }
  })
}
</script>
