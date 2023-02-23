import { createRouter, createWebHistory } from 'vue-router'
import HouseView from '../views/HouseView.vue'
import HouseDetail from '../views/HouseDetail.vue'
import HomeView from '../views/HomeView.vue'
import HouseCreate from '../views/HouseCreate.vue'
import HouseEdit from '../views/HouseEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [	
        {
          path: '',
          name: 'home',
          component: HouseView,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: HouseDetail
        },  
        {
          path: 'create',
          name: 'create',
          component: HouseCreate
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: HouseEdit
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
