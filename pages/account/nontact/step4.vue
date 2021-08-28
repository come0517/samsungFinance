<template>
  <section>


    <s-subject class="mt-4" :subject="`신분증 앞면을 테두리에 맞추면\n자동으로 촬영됩니다.`"/>

    <h2 class="mt-4">TODO: 솔루션 API Event Binding. 이벤트별 매핑 해주세요.  </h2>
    <div class="mt-5">
    <v-btn
      color="secondary"
      @click="snackbar2 = true"
    >
      신분증 진위 여부 확인 중입니다.
    </v-btn>
    <v-snackbar
      v-model="snackbar2"
      :timeout="2000"
      rounded="pill"
      color="grey darken-2"
    >
      <div style="text-align: center;"  @click="snackbar2 = false"> 신분증 진위 여부 확인 중입니다.</div>
    </v-snackbar>
    </div>
    <div class="mt-5">
     <v-btn
      color="secondary"
      @click="snackbar2 = true"
    >
      신분증 진위 여부 확인이 완료되었습니다.
    </v-btn>
    <v-snackbar
      v-model="snackbar2"
      :timeout="2000"
      rounded="pill"
      color="grey darken-2"
    >
      <div style="text-align: center;"  @click="snackbar2 = false"> 신분증 진위 여부 확인이 완료되었습니다.</div>
    </v-snackbar>
    </div>

    <div class="mt-5">
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
            신분증을 다시 촬영해주세요!
          </v-btn>
        </template>
        <v-sheet
          class=" mb-10 rounded-t-lg"
          min-height="150px"
        >

          <div class="pa-8">
            <p class="fs-h1">신분증을 다시 촬영해주세요!</p>
            <p class="pt-2 fs-cap">테두리 바깥에 흰색 바탕 및 신분증 표면에 빛 반사 등을 피해주시면 더 잘 인식됩니다.</p>
          </div>
        </v-sheet>

        <v-footer :fixed=true :padless=true >
          <v-btn x-large block tile color="primary" @click="dialog1 = false">확인</v-btn>
        </v-footer>

      </v-bottom-sheet>
    </div>

    <div class="mt-5">
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
            신분증을 다시 확인해주세요!
          </v-btn>
        </template>
        <v-sheet
          class=" mb-10 rounded-t-lg"
          min-height="150px"
        >

          <div class="pa-8">
            <p class="fs-h1">신분증을 다시 확인해주세요!</p>
            <p class="pt-2 fs-cap">본인 인증과 신분증인증 정보가 일치하지 않습니다.</p>
            <p class="pt-2 fs-cap">로그인 정보 또는 본인인증정보와 일치 하는 인분증인지 확인 후 재촬영해주세요.</p>
          </div>
        </v-sheet>

        <v-footer :fixed=true :padless=true >
          <v-btn x-large block tile color="primary" @click="dialog1 = false">확인</v-btn>
        </v-footer>

      </v-bottom-sheet>
    </div>

    <s-btn-bottom  :text="'촬영'" :doAction="doAction"/>
  </section>
</template>


<script>
export default {
  layout: 'monimo-blank',
  data: () => ({
    snackbar2: false,
    dialog1: false,
  }),
  methods: {
    doAction: function () {
      alert('TODO: IOS/AOS 구분하여 카메라 연동');
      this.$router.push('/account/nontact/step5');
    }
  }
}
</script>
