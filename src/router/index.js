import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/culture',
        name: 'Culture',
        component: () => import('../views/Culture.vue')
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/messages',
        name: 'Messages',
        component: () => import('../views/Messages.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
