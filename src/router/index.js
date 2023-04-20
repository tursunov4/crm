import { createRouter, createWebHistory } from 'vue-router'
import EnterApp from '@/views/EnterApp'
import LoginApp from '../Pages/LoginApp.vue'
import RegisterApp from '../Pages/RegisterApp.vue'
import MainPaga from '../Pages/MainPaga.vue'
import SuppliersApp from '../Pages/SuppliersApp.vue'
import ClientsApp from '../Pages/ClientsApp.vue'
const routes = [
  {
    path:'/',
    name:'enter',
    component:EnterApp
  },
  {
    path :'/login',
    name :'login',
    component:LoginApp
  },
  {
    path:'/register',
    name : 'register',
    component : RegisterApp
  },
  {
    path:'/mainPage',
    name :'mainPage',
    component :MainPaga,
    children :[
      {
        path:'/mainPage',
        name:'suppliers',
        component:SuppliersApp
      },
      {
        path:'/clients',
        name :'clients',
        component:ClientsApp
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
