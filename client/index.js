import './promise-polyfill'
import { app } from './app'
import 'hack'

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
