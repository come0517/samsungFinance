<template>
  <section class="sfip">


    <s-subject :subject="`@Deprecated\n해당 페이지는 Popup 가이드로 통합 되었습니다.`" class="red lighten-4"/>
    <div class="pa-4">
    <h1 class="mt-10">Layouts - 일반</h1>
    <v-divider class="mb-5"/>
    <nuxt-link to="/guides/layout1">일반 레이아웃 열기</nuxt-link>



    <h1 class="mt-10">Layouts - 하단버튼</h1>
    <v-divider class="mb-5"/>
    <nuxt-link to="/guides/layout2">하단버튼 레이아웃 열기</nuxt-link>


    <h1 class="mt-10">Layouts - 팝업</h1>
    <v-divider class="mb-5"/>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color=""
          dark
          v-bind="attrs"
          v-on="on"
        >
          팝업 레이아웃 열기
        </v-btn>
      </template>
      <v-card>
        <v-toolbar

          flat block tile
          color=""
        >
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>팝업 레이아웃</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <v-footer :fixed=true :padless=true >
        <v-btn block tile color="primary" @click="dialog = false">확인</v-btn>
      </v-footer>

    </v-dialog>

    <h1 class="mt-10">Layouts - 팝업</h1>
    <v-divider class="mb-5"/>


    <v-bottom-sheet
      v-model="dialog1"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color=""
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dimm Layer 레이아웃 열기 (Bottom)
        </v-btn>
      </template>
      <v-sheet
        class="text-center mb-5"
        min-height="150px"
      >

        <div class="py-3">
          <p class="fs-h1">인증번호 1회 오류 입니다.</p>
        </div>
      </v-sheet>

      <v-footer :fixed=true :padless=true >
        <v-btn block tile color="primary" @click="dialog1 = false">확인</v-btn>
      </v-footer>

    </v-bottom-sheet>
    </div>
  </section>
</template>

<script>
import SSubject from '~/components/commons/SSubject.vue'
  export default {
  components: { SSubject },
      layout: 'sfip',
      data: () => ({
        dialog: false,
        dialog1: false,
        notifications: false,
        sound: true,
        widgets: false,
      })
  }
</script>
