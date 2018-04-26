import bodyParser from 'body-parser'
import session from 'express-session'
export default {
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Példaprogram' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
  modules: [
    'bootstrap-vue/nuxt'
  ],
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 6000000 }
    }),
    // Api middleware
    '~/api'
  ]
}
