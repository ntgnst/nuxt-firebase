export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/FirebasePlugin'],
  /*apiKey: 'AIzaSyApJpWZ-MOuPsBJUGa8EAQmXl97CGOf-0U',
  authDomain: 'earnest-radio-636.firebaseapp.com',
  databaseURL: 'https://earnest-radio-636.firebaseio.com',
  projectId: 'earnest-radio-636',
  storageBucket: 'earnest-radio-636.appspot.com',
  messagingSenderId: '580034373899',
  appId: '1:580034373899:web:2a7d8a1a9bbabb43ebda0e',
  measurementId: 'G-0MY53LZHTJ'
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAetLBsDbS5DyeQgU1HDlv4GkSiqLGQ2o0",
          authDomain: "piri-webpush.firebaseapp.com",
          databaseURL: "https://piri-webpush.firebaseio.com",
          projectId: "piri-webpush",
          storageBucket: "piri-webpush.appspot.com",
          messagingSenderId: "103022901101",
          appId: "1:103022901101:web:cd9b7ef8c687b22e"
        },
        services: {
          messaging: {
            createServiceWorker: false,
            actions: [
              {
                action: 'randomName',
                url: 'randomUrl'
              }
            ],
            fcmPublicVapidKey: '' // OPTIONAL : Sets vapid key for FCM after initialization
          }
        }
      }
    ],
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
