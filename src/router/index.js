import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import BlogList from '../components/blogs/BlogList'
import BlogView from '../components/blogs/BlogView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blogview',
      name: 'BlogView',
      component: BlogView
    }
  ]
})
