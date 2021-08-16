<template>
  <section id="material-colors" class="sfip">

    <SSubject :subject="commons.name"/>

<!--
    <v-avatar color="primary" size="56" tile><span class="white--text text-h5">강조</span></v-avatar>
    <v-avatar color="increase" size="56" tile><span class="white--text text-h5">상승</span></v-avatar>
    <v-avatar color="decrease" size="56" tile><span class="white--text text-h5">하락</span></v-avatar>
    <v-avatar color="warning" size="56" tile><span class="white--text text-h5">경고</span></v-avatar>
    <v-avatar color="error" size="56" tile><span class="white--text text-h5">오류</span></v-avatar> -->

    <v-container
      class="pa-0"
      fluid
    >

      <v-subheader>삼성증권 기본 색상</v-subheader>
      <p class="fs-cap pl-4">
        Primary Color는 삼성증권의 포인트 컬러로 강조되는 컨텐츠를 표현하기 위한 색상
      </p>
      <p class="fs-cap pl-4">
        Secondary Color는 Primary Color를 뒷받침하는 서브 컬러 베이직 컬러보다는 중요도가 있는 컨텐츠를 표현하기 위한 색상
      </p>
      <p class="fs-cap pl-4">
        베이직 색상은 모바일의 기본 요소인 텍스트, 라인, 배경 등에 사용되는 색상으로 우측에 제시된 색상 코드 값을 사용한다.
      </p>


      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
              v-for="(color, key) in ssColors"
              :key="key"
              :color="color.value"
              flat
              tile
            >
              <v-card-text
                v-for="(color2, key2) in color"
                :key="key2"
                :class="key2">
                <v-row>
                  <v-col
                    cols="8"
                    class="text-caption white--text"
                  >
                    {{ key2 }}
                  </v-col>
                  <v-col
                    cols="4"
                    class="text-right white--text"
                  >
                  {{ color2 }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>

      <v-subheader class="mt-4">프레임워크 색상세트</v-subheader>
      <v-row>
        <v-col
          v-for="(color, key) in computedColors"
          :key="key"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            :color="key"
            outlined
            tile
          >
            <v-card-text>
              <span
                class="text-h6"
                v-text="key"
              />
            </v-card-text>
          </v-card>

          <v-card
            v-for="(subColor, key2) in color"
            :key="key2"
            :color="`${key} ${convertToClass(key2)}`"
            flat
            tile
          >
            <v-card-text :class="getColorClass(key2)">
              <v-row>
                <v-col
                  cols="8"
                  class="text-caption"
                >
                  <span v-if="key !== 'shades'">{{ key }}&nbsp;</span>

                  <span v-if="key2 !== 'base'">{{ key2.replace(/(.*)(\d)/, '$1-$2') }}</span>
                </v-col>

                <v-col
                  cols="4"
                  class="text-right"
                >
                  <span
                    v-if="subColor !== 'transparent'"
                    v-text="subColor.toUpperCase()"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>



<script>

import kebabCase from 'lodash/kebabCase'
import colors from 'vuetify/es5/util/colors'

export default {
  layout: 'sfip',
  data: () => ({
    commons: {
      name: '삼성증권 색상 - 공통 가이드 ',
    },
    colors,
    search: '',
    ssColors: [
      {primary: '#286EF1'},
      {increase: '#F50057'},
      {decrease: '#286EF1'},
      {warning: '#FF392A'},
      {error: '#FF392A'},
    ],
  }),
  computed: {
    computedColors (app) {
      const colors = {}
      const search = this.search.toLowerCase()
      Object.keys(this.colors).forEach(key => {
        const kebabKey = kebabCase(key).toLowerCase()
        if (kebabKey.indexOf(search) > -1) {
          colors[kebabKey] = this.colors[key]
        }
      })
      //console.log("앱", app)
      return colors
    },
  },
  methods: {
    endStr (str) {
      return str[str.length - 1]
    },
    convertToClass (str) {
      const end = this.endStr(str)
      const sub = str.substr(0, str.length - 1)
      if (isNaN(parseInt(end))) return str
      return `${sub}-${end}`
    },
    getColorClass (key) {
      if (['white', 'transparent'].includes(key) ||
        key.indexOf('light') > -1 ||
        key.indexOf('accent') > -1
      ) return 'black--text'
      return 'white--text'
    },
  },
  head: function () {
    return {title: this.commons.name}
  }
}

</script>
