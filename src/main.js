import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home'
import Car from './components/Car'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/car', component: Car},
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
