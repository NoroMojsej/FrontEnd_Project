import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: () => import('../views/SchedulesView.vue')
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('../views/ClassesView.vue')
    }
  ]
})

export default router
