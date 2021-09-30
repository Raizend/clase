import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
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
    path: '/tablaregistro',
    name:'Registro',
    component:()=> import('../views/TablaRegistro.vue')

  },

  {
    path: '/home',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
