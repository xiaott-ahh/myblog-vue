import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import AdminIndex from '../components/admin/AdminIndex'
import BlogList from '../components/blogs/BlogList'
import BlogView from '../components/blogs/BlogView'
import BlogManagement from '../components/admin/content/BlogManagement'
import ArticleEditor from '../components/admin/content/ArticleEditor'
import ErrorPage from '../components/common/ErrorPage'
import BlogsOfTag from '../components/blogs/BlogsOfTag'
import BlogsOfSearch from '../components/blogs/BlogsOfSearch'
import Login from '../components/common/Login'
import TimeLine from '../components/common/TimeLine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      redirect: '/index/blogList',
      name: 'Home',
      component: () => import('../components/home/Home'),
      children: [
        {
          path: 'blogList',
          name: 'BlogList',
          component: () => import('../components/blogs/BlogList')
        },
        {
          path: 'blogView',
          name: 'BlogView',
          component: () => import('../components/blogs/BlogView')
        },
        {
          path: 'blogsOfTag',
          name: 'BlogsOfTag',
          component: () => import('../components/blogs/BlogsOfTag')
        },
        {
          path: 'blogsOfKey',
          name: 'BlogsOfSearch',
          component: () => import('../components/blogs/BlogsOfSearch')
        },
        {
          path: 'timeLine',
          name: 'TimeLine',
          component: () => import('../components/common/TimeLine')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/common/Login')
    },
    {
      path: '/admin/xiaoTT',
      name: 'AdminIndex',
      component: () => import('../components/admin/AdminIndex'),
      children: [
        {
          path: 'blogManagement',
          name: 'BlogManagement',
          component: () => import('../components/admin/content/BlogManagement'),
          meta: {
            notVisible: true
          }
        },
      ],
      meta: {
        notVisible: true
      }
    },
    {
      path: '/admin/editor',
      name: 'Editor',
      component: () => import('../components/admin/content/ArticleEditor')
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: () => import('../components/common/ErrorPage'),
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
})
