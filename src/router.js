import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import center from './components/center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: home
    },
    {
      path: '/center',
      component: center
    }
  ]
})
