const colors = require('vuetify/es5/util/colors').default
const environment = process.env.NODE_ENV
const envSettings = require(`./env.${environment}.js`)
require('dotenv').config()

console.log(envSettings)

module.exports = {
  ssr: false,
  srcDir: 'src',
  telemetry: false,
  env: envSettings,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // loaderOptions: {
    //   sass: {
    //     prependData: `@import "@/scss/_variables.scss";`
    //   }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/itemStorage'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
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
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 8000, // デフォルト: 3000
    host: 'localhost' // デフォルト: localhost
  },
  outputDir: '../src/public',
  generate: {
    dir: '../src/public'
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  }
}
