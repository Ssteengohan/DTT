import { createRouter, createWebHistory } from 'vue-router'
import HouseView from '../views/HouseView.vue'
import HouseDetail from '../views/HouseDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HouseView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: HouseDetail
    }
  ]
})

export default router
