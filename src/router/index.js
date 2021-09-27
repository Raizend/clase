import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/procesando',
    name: 'Procesando',
    component: ()=> import('../views/Procesando.vue')
  },
  {
    path: '/contrasenia',
    name: 'Contrasenia',
    component: ()=> import('../views/Contrasenia.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: ()=> import('../views/Registro.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
