import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import cache from './lib/Cache'

sync(store, router)

cache.get('user')

const app = new Vue({
  router,
  store
})

export { app, router, store }
