import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home'
import Test from '@/view/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/zbl',
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '/test',
        name: 'test',
        component: Test
      }]
    }
  ]
})
