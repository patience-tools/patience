import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
  router,
  store
})

export { app, router, store }
