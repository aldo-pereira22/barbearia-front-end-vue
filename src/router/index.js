import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/teste',
    Name: 'Teste',
    component: () => import(/* webpackChunkName: "Agendamento" */ '../views/Teste.vue')
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: () => import(/* webpackChunkName: "Agendamento" */ '../views/Agendamento.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
