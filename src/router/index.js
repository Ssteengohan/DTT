import { createRouter, createWebHistory } from 'vue-router'
import HouseView from '../views/HouseView.vue'
import HouseDetail from '../views/HouseDetail.vue'
import HomeView from '../views/HomeView.vue'
import HouseCreate from '../views/HouseCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [	
        {
          path: '/',
          name: 'home',
          component: HouseView,
        },
        {
          path: '/home/detail',
          name: 'Detail',
          component: HouseDetail
        },  
        {
          path: '/home/create',
          name: 'create',
          component: HouseCreate
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  
  ]
})

export default router
