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
    path: '/veterinario',
    name: 'Veterianrio',
    component: ()=> import('../views/Veterinario.vue')
  },
  {
    path: '/mascota',
    name:'Mascota',
    component:()=> import('../views/Mascota.vue')

  },
  {
    path: '/tablaVete',
    name:'TablaVete',
    component:()=> import('../components/TablaVeterinario.vue')

  },
  {
    path: '/tablaMasco',
    name:'TablaMasco',
    component:()=> import('../components/TablaMascota.vue')

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
