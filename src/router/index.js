import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import register2 from '@/components/register2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/register2',
      name: 'register2',
      component: register2
    }
  ]
})
