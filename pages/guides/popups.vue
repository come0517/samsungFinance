<template>
  <section class="sfip">
    <s-subject :subject="`Popup`"/>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
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
                  Full Popup (Default)
                </v-btn>
              </template>
              <v-card>
                <v-toolbar

                  flat block tile
                  color=""
                >
                  <v-btn
                    icon small
                    @click="dialog = false"
                  >
                    <v-icon small>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title class="fs-h2"><b>개인 정보처리 방침</b></v-toolbar-title>
                  <v-spacer></v-spacer>

                </v-toolbar>
                <v-list
                  three-line
                  subheader
                  style="padding-bottom: 75px;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <p class="fs-cap">
                      삼성증권 주식회사(이하 "당사"라고 합니다)는 귀하의 개인정보보호를 매우 중요시하며, 개인정보 보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률 또는 관련법률·규정을 준수하고 있습니다. 당사는 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                      </p>
                      <p class="fs-cap">
                      개인정보보호법 제30조에 따라 개인정보 처리방침을 수립하여 그 내용을 홈페이지에 공개하고 있으며, 당사와 협력사는 개인정보 처리방침을 철저하게 준수하고 있습니다.
                      </p>
                      <p class="fs-cap">
                      당사의 개인정보 처리방침을 통한 개인정보 이용과 보호 조치에 대해 알려드립니다.
                      </p>
                      <p class="fs-cap">
                      귀하가 본 홈페이지, 개인(신용)정보의 수집·이용·제공 동의서, 유무선 전화, E-mail 등을 통하여 당사에 제공하시는 개인정보는 귀하가 요청하셨거나 관심을 가질 상품과 서비스의 제공, 당사의 고객니즈 이해, 고객 피드백 또는 고용관련기회 제공, 관련 법률 또는 규정이 요구하는 목적 등을 포함하여 본 개인정보 처리방침에 기재된 목적을 위하여 이용됩니다. 귀하께서 당사에 제공하시는 정보는 귀하를 위한 당사의 서비스와 관련 상품을 개선시키는데 귀중한 자산이 될 것입니다.
                      </p>
                      <p class="fs-cap">
                      삼성증권 주식회사(이하 "당사"라고 합니다)는 귀하의 개인정보보호를 매우 중요시하며, 개인정보 보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률 또는 관련법률·규정을 준수하고 있습니다. 당사는 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                      </p>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <p class="fs-cap">
                      삼성증권 주식회사(이하 "당사"라고 합니다)는 귀하의 개인정보보호를 매우 중요시하며, 개인정보 보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률 또는 관련법률·규정을 준수하고 있습니다. 당사는 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                      </p>
                      <p class="fs-cap">
                      개인정보보호법 제30조에 따라 개인정보 처리방침을 수립하여 그 내용을 홈페이지에 공개하고 있으며, 당사와 협력사는 개인정보 처리방침을 철저하게 준수하고 있습니다.
                      </p>
                      <p class="fs-cap">
                      당사의 개인정보 처리방침을 통한 개인정보 이용과 보호 조치에 대해 알려드립니다.
                      </p>
                      <p class="fs-cap">
                      귀하가 본 홈페이지, 개인(신용)정보의 수집·이용·제공 동의서, 유무선 전화, E-mail 등을 통하여 당사에 제공하시는 개인정보는 귀하가 요청하셨거나 관심을 가질 상품과 서비스의 제공, 당사의 고객니즈 이해, 고객 피드백 또는 고용관련기회 제공, 관련 법률 또는 규정이 요구하는 목적 등을 포함하여 본 개인정보 처리방침에 기재된 목적을 위하여 이용됩니다. 귀하께서 당사에 제공하시는 정보는 귀하를 위한 당사의 서비스와 관련 상품을 개선시키는데 귀중한 자산이 될 것입니다.
                      </p>
                      <p class="fs-cap">
                      삼성증권 주식회사(이하 "당사"라고 합니다)는 귀하의 개인정보보호를 매우 중요시하며, 개인정보 보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률 또는 관련법률·규정을 준수하고 있습니다. 당사는 개인정보 처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                      </p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>

              <v-footer :fixed=true :padless=true >
                <v-btn block x-large tile color="primary" @click="dialog = false">확인</v-btn>
              </v-footer>

            </v-dialog>

          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn
              color="secondary"
              @click="snackbar1 = true"
            >
              Toast Popup
            </v-btn>
            <v-snackbar
              v-model="snackbar1"
              :timeout="2000"
              rounded="pill"
              color="grey darken-2"
            >
              <div style="text-align: center;"  @click="snackbar = false">{{ text }}</div>
            </v-snackbar>

          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn
              color="secondary"
              @click="snackbar2 = true"
            >
              Toast Popup (강조)
            </v-btn>
            <v-snackbar
              v-model="snackbar2"
              :timeout="2000"
              rounded="pill"
              color="primary"
            >
              <div style="text-align: center;"  @click="snackbar = false">{{ text }}</div>
            </v-snackbar>

          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn
              color="secondary"
              @click="snackbar3 = true"
            >
              Toast Popup (오류)
            </v-btn>
            <v-snackbar
              v-model="snackbar3"
              :timeout="2000"
              rounded="pill"
              color="error"
            >
              <div style="text-align: center;"  @click="snackbar = false">{{ text }}</div>
            </v-snackbar>

          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>

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

          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </section>
</template>

<script>

export default {

  layout: 'sfip',
  data () {
    return {
      commons: {
        name: 'Popup'
      },
      dialog: false,
      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      text: `계좌번호가 복사되었습니다.`,
      dialog1: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>
