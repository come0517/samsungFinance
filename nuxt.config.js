import colors from 'vuetify/es5/util/colors'

const API_BASE_URL='https://crud-books-api.herokuapp.com/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  // TODO: Meta Tag 정의
  head: {
    titleTemplate(titleChunk) {
      return titleChunk ? `${titleChunk} - 삼성증권` : '삼성증권'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // router: {
  //   middleware: ['auth']
  // },
  // Global CSS: https://go.nuxtjs.dev/config-css


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/customVuetify.js',
    '~/plugins/page.js',
    "~/plugins/mixins.js",
    '@/plugins/axios',
    '~/plugins/apexChart.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/commons/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],

  css: [
    '~/assets/scss/reset.scss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/scss/*.scss',
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: API_BASE_URL,
    https: false,
    proxy: false,
    // proxy: {
    //   '/product/fund/': 'http://localhost:8080/product/fund',
    //   '/api2/': 'http://10.0.0.186:8080/product/fund'
    //   // 프록시 모듈에서 /api/는 API 끝점의 모든 요청에 추가됩니다. 이를 제거하려면 경로 다시 쓰기 옵션 사용해야
    //   //'/api/': { target: 'http://api.example.com', pathRewrite: {'^/api/': ''} }
    // },
    // 실패한 요청을 자동으로 가로채서 설정된 값대로 재시도
    //retry: { retries: 3 },
    credentials: false,
    // get, post ... common Accept header
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ko'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: [
      '~/assets/variables.scss',
      // '~/assets/css/common.scss',
    ],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#286EF1',
          increase: '#F50057',
          decrease: '#286EF1',
          warning: '#FF392A',
          error: '#FF392A',
          hover: '#2058C0',
          success: '#286EF1',
          bg: '#F8F8F8'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        // ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ],
    },
  },

  googleFonts: {
    download: true,
    families: {
      Roboto: true,
    }
  },
  // FIXME: using .env
  googleAnalytics: {
    id: 'G-C20TXT9LZS'
  }
}
