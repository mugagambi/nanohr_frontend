import Vue from 'vue'
import Router from 'vue-router'
import accounts from '@/components/accounts'
import userAccountDetail from '@/components/userAccountDetail'

import additions from '@/components/additions'
import additionDetail from '@/components/additionDetail'

import deductions from '@/components/deductions'
import deductionDetail from '@/components/deductionDetail'

import wagetypes from '@/components/wagetypes'
import wagetypedetail from '@/components/wagetypedetail'

import summary from '@/components/summary'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: accounts
    },
    {
      path: '/userAccountDetail/:id',
      name: 'userAccountDetail',
      component: userAccountDetail
    },
    {
      path: '/additions',
      name: 'additions',
      component: additions
    },

    {
      path: '/additionDetail/:id',
      name: 'additionDetail',
      component: additionDetail
    },
    {
      path: '/deductions',
      name: 'deductions',
      component: deductions
    },
    {
      path: '/deductionDetail/:id',
      name: 'deductionDetail',
      component: deductionDetail
    },
    {
      path: '/wagetypes',
      name: 'wagetypes',
      component: wagetypes
    },
    {
      path: '/wagetypedetail/:id',
      name: 'wagetypedetail',
      component: wagetypedetail
    },
    {
      path: '/summary',
      name: 'summary',
      component: summary
    }

  ]
})
