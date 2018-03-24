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
import City from '@/components/City'
import Detail from '@/components/Detail'

import Search from '@/components/Search'
import Order from '@/components/Order'
import Shopcar from '@/components/Shopcar'
import Collection from '@/components/Collection'
import MyOrder from '@/components/MyOrder'


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
        component:NewsList,
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
      component: Verification,
      meta:{requiresAuth:true}
    },
    
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta:{requiresAuth:true}
    },
     {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props: true
    },
     {
      path: '/search',
      name: 'search',
      component: Search,
      props:true
    },      
    {
        path:'/order',
        name:'order',
        component:Order,
        meta:{requiresAuth:true},
        props:true
    },
    {
        path:'/shopcar/:id',
        name:'shopcar',
        component:Shopcar,
    },
    {
        path:'/collection',
        component:Collection,
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder,
      props:true
    }
  ]
})
