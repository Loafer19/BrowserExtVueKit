import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue')
    }
  ]
})

export default router
