import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import notfound from '@/views/404'
import homepage from '@/views/homepage'
import Mine from '@/views/mine/Mine'
import Means from '@/views/mine/Means'

import Borrow from '@/views/manage/Borrow'

import Fix from '@/views/manage/Fix'

import Plan from '@/views/inventory/Plan'
import New from '@/views/inventory/New'

Vue.use(Router)

export default new Router({
  routes: [
    /* Mine */
    {
      path: '/',
      name: '',
      component: Home,
      children: [
        {
          path: '/amg/Means',
          name: '资产申验',
          component: Means,
        },
        {
          path: '/amg',
          name: '资产资料',
          component: Mine,
        },
        {
          path: '/homepage',
          name: '首页',
          component: homepage,
        },
  /* ------------------------------------- */

        /* Manage */


        {
          path: '/aum/borrow',
          name: '资产租赁',
          component: Borrow,
        },
        {
          path: '/aum/fix',
          name: '资产送修',
          component: Fix,
        },

        /* Inventory */
        {
          path: '/inventory',
          name: '资产盘点',
          component: Plan,
        },
/*         {
          path: '/news',
          name: '消息中心',
          component: New,
        }, */
        {
          path: '/news',
          name: '消息中心',
          component: notfound,
        },
      ]
    },
  ]
})

