import Vue from 'vue'
import { DB, auth, storage } from '@/config/FirebaseInit'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$DB) {
      Vue.prototype.$firestore = DB
      Vue.prototype.$AUTH = auth
      Vue.prototype.$storage = storage
    }
  }
}

Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx

  app.$firestore = Vue.prototype.$firestore
  ctx.$firestore = Vue.prototype.$firestore
  app.$AUTH = Vue.prototype.$AUTH
  ctx.$AUTH = Vue.prototype.$AUTH

  app.$storage = Vue.prototype.$storage
  ctx.$storage = Vue.prototype.$storage

  if (store) {
    store.$firestore = Vue.prototype.$firestore
    store.$AUTH = Vue.prototype.$AUTH
    store.$storage = Vue.prototype.$storage
  }
}
