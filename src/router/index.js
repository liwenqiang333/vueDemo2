import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head-t'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/head'
    },
    {
      path: '/head',
      name: 'head',
      component: Head
    }
  ]
})
