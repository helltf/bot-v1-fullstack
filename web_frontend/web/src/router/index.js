
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "../pages/LoginPage.vue"
import HomePage from "../pages/HomePage.vue"

const routes = [
    { 
        path: '/login',
        name:"Login",
         component: LoginPage 
        },
        { 
            path: '/',
            name:"Home",
             component: HomePage
            }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router