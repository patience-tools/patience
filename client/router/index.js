import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Dashboard
    }
  ]
})
