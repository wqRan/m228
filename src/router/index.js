import Vue from 'vue'
import Router from 'vue-router'

import IndexCmpt from '@/components/Index'
import Login from '@/components/Login'
import Resgiter from '@/components/Resgiter'
import Ylspeak from '@/components/Ylspeak'
import Classify from '@/components/Classify'
import NewsList from '@/components/NewsList'
import Site from '@/components/Site'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexcmpt',
      redirect: '/recommend',
      component: IndexCmpt,
      children:[
      {
        path:'recommend',
        component:NewsList
      },
      {
        path:'site',
        component:Site
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resgiter',
      name: 'resgiter',
      component: Resgiter
    },
    {
      path: '/ylspeak',
      name: 'ylspeak',
      component: Ylspeak
    }, 
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
  ]
})
