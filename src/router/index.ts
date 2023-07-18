import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
      },
      {
        path: '/',
        component: () => import('@/layout/index.vue'),
      },
      {
        name: '404',
        path: '/404',
        component: () => import('@/views/404/index.vue'),
      },
      {
        path: '/:catchAll(.*)',
        redirect: '/404',
      },

    ],
  },
)

export default router
