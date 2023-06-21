import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/RegisterView.vue')
  },
  {
    path: '/user',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/UserView.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosView.vue')
  },
  {
    path: '/todo/:_id',
    name: 'Operador - Detalles',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoDetails.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
