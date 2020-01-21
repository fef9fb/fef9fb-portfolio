import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Info',
      component: Info
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    }
  ]
})
