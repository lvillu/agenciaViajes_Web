import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/LoginView.vue'),
    meta: { requiresGuest: true}
  },
  {
    path: '/register',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/RegisterView.vue'),
    meta: { requiresGuest: true}
  },
  {
    path: '/user',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/UserView.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/operador',
    name: 'Operador',
    component: () => import(/* webpackChunkName: "about" */ '../views/operadores/OperadorView.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/operadorNuevo',
    name: 'OperadorNuevo',
    component: () => import(/* webpackChunkName: "about" */ '../views/operadores/OperadorNuevoView.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/operadorDetalle/:id',
    name: 'OperadorDetalle',
    component: () => import(/* webpackChunkName: "about" */ '../views/operadores/OperadorDetalleView.vue'),
    meta: { requiresAuth: true}
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
  },
  {
    path: '/venta',
    name: 'Venta',
    component: () => import(/* webpackChunkName: "about" */ '../views/ventas/VentaView.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/ventaNuevo',
    name: 'VentaNuevo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ventas/VentaNuevoView.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/ventaDetalle/:id',
    name: 'VentaDetalle',
    component: () => import(/* webpackChunkName: "about" */ '../views/ventas/VentaDetalleView.vue'),
    meta: { requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* eslint-disable */
router.beforeEach((to, from) => {

  const store = useAuthStore()

  if(to.meta.requiresAuth && !store.isAuthenticated){
    return { name: 'Login',  query: { redirect : to.fullPath}}
  } else if (to.meta.requiresGuest && store.isAuthenticated){
    return { name: 'home'}
  }
})

export default router
