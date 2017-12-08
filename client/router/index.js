import Vue from 'vue'
import Router from 'vue-router'
import Page from '../components/Page.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Wallets from '../views/Wallets.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/page',
    component: Page,
    children: [{
      path: 'dashboard',
      component: Dashboard
    }, {
      path: 'login',
      component: Login
    }, {
      path: 'wallets',
      component: Wallets
    }]
  }]
})
