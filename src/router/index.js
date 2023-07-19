import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'sign up',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'Transaction',
    component: () => import(/* webpackChunkName: "Transaction" */ '../views/TransactionView.vue')
  },
  {
    path: '/practise',
    name: 'practise',
    component: () => import(/* webpackChunkName: "login" */ '../views/PractiseView.vue')
  },
  {
    path: '/fashion',
    name: 'fashion',
    component: () => import(/* webpackChunkName: "login" */ '../views/FashionView.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "login" */ '../views/MusicView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
