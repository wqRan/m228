import Vue from 'vue'
import Router from 'vue-router'

import IndexCmpt from '@/components/Index'
import Login from '@/components/Login'
import Resgiter from '@/components/Resgiter'
import Ylspeak from '@/components/Ylspeak'
import Classify from '@/components/Classify'

import NewsList from '@/components/NewsList'
import Site from '@/components/Site'

import Activities from '@/components/Activities'
import Verification from '@/components/Verification'
import Mine from '@/components/Mine'
import Banner from '@/components/Banner'


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
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    
    {
      path: '/mine',
      name: 'mine',
      component: Mine
     /* beforeEnter:(to,from,next)=>{
        console.log(1)
        next()
      }*/
    },
   /* {
      path: '/banner',
      name: 'banner',
      component: Banner
    }*/
  ]
})
