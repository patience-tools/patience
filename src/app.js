import Vue from 'vue'
import App from './App'
import 'hack'

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
