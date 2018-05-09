module.exports = {
  router: {
   //base: '/grid/'
   //base: '/demos/nuxt-bulma/bulma-demo/dist/'
   },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CSS Grid with fallback',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
     //Need to do that for targeting IE 11
     vendor: ['babel-polyfill'],
     babel: {
       presets: [
         ['vue-app', {
           useBuiltIns: true,
           targets: { ie: 11, uglify: true },
         },
         ],
       ],
     }
  }
}
