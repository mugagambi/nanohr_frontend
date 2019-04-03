import Vue from 'vue'
import Router from 'vue-router'

import landing from '@/components/payroll/landing'

import accounts from '@/components/payroll/accounts'
import userAccountDetail from '@/components/payroll/userAccountDetail'

import additions from '@/components/payroll/additions'
import additionDetail from '@/components/payroll/additionDetail'

import deductions from '@/components/payroll/deductions'
import deductionDetail from '@/components/payroll/deductionDetail'

import wagetypes from '@/components/payroll/wagetypes'
import wagetypedetail from '@/components/payroll/wagetypedetail'

import summary from '@/components/payroll/summary'

import attendanceLanding from '@/components/attendance/attendanceLanding'
import today from '@/components/attendance/today'
import thisMonth from '@/components/attendance/thisMonth'
import thisWeek from '@/components/attendance/thisWeek'

import leavesAndHolidaysLanding from '@/components/leavesAndHolidays/leavesAndHolidaysLanding'
import onService from '@/components/leavesAndHolidays/onService'
import applications from '@/components/leavesAndHolidays/applications'
import types from '@/components/leavesAndHolidays/types'

import employeeLanding from '@/components/employee/employeeLanding'
import employeeList from '@/components/employee/employeeList'
import employeeDetail from '@/components/employee/employeeDetail'
import departmentList from '@/components/employee/departmentList'
import departmentDetail from '@/components/employee/departmentDetail'

import dashboard from '@/components/dashboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/',
      name: 'landing',
      component: landing,
      children: [

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
    },
    {
    path: '/attendanceLanding',
    name: 'attendanceLanding',
    component: attendanceLanding,
    children: [

      {
        path: '/',
        name: 'today',
        component: today
      },
      {
        path: '/thisMonth',
        name: 'thisMonth',
        component: thisMonth,
      },
      {
        path: '/thisWeek',
        name: 'thisWeek',
        component: thisWeek,
      }
    ]
    },
    {
    path: '/leavesAndHolidaysLanding',
    name: 'leavesAndHolidaysLanding',
    component:leavesAndHolidaysLanding,
    children: [
    {
      path: '/onService',
      name: 'onService',
      component: onService
    },
    {
      path: '/',
      name: 'applications',
      component: applications
    },
    {
      path: '/types',
      name: 'types',
      component: types
    }
    ]
    },
    {
    path: '/employeeLanding',
    name: 'employeeLanding',
    component:employeeLanding,
    children: [
      {
        path: '/',
        name: 'employeeList',
        component:employeeList,
      },
      {
      path: '/employeeDetail/:id',
      name: 'employeeDetail',
      component: employeeDetail,
      },
      {
        path: '/departmentList',
        name: 'departmentList',
        component: departmentList,
      },
      {
        path: '/departmentDetail/:id',
        name: 'departmentDetail',
        component: departmentDetail,
        }

    ] 
    }

  ]
 
 
})
