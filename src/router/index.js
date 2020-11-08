import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import AdminIndex from '../components/admin/AdminIndex'
import BlogList from '../components/blogs/BlogList'
import BlogView from '../components/blogs/BlogView'
import BlogManagement from '../components/admin/content/BlogManagement'
import ArticleEditor from '../components/admin/content/ArticleEditor'
import ErrorPage from '../components/common/ErrorPage'
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
      component: Home,
      children: [
        {
          path: 'blogList',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: 'blogView',
          name: 'BlogView',
          component: BlogView
        }
      ]
    },
    {
      path: '/admin/xiaoTT',
      name: 'AdminIndex',
      component: AdminIndex,
      children: [
        {
          path: 'blogManagement',
          name: 'BlogManagement',
          component: BlogManagement,
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
      component: ArticleEditor
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: ErrorPage,
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
})
