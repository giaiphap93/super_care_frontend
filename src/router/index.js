import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView'
import PublicLayout from '../PublicLayout'
import PrivateLayout from '../PrivateLayout'
import UserView from '../views/UserView'
import CalendarView from '../views/CalendarView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: PrivateLayout,
    children:[
      {
        path: 'dashboard',
        component: HomeView
      },
      {
        path: 'users',
        component: UserView
      },
      {
        path: 'calendar',
        component: CalendarView
      }
    ]
  },
  {
    path: '/users',
    component: PublicLayout,
    children: [
      {
        path: 'login',
        component: LoginView
        
      },
      {
        path: 'register',
        component: RegisterView
      }
    ]
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
