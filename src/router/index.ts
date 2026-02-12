import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresGuest: true }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/ai-tools',
      name: 'ai-tools',
      component: () => import('../views/AIToolsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/experience-center',
      name: 'experience-center',
      component: () => import('../views/ExperienceCenterView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ai-tools/:id',
      name: 'app-detail',
      component: () => import('../views/AppDetailView.vue'),
      meta: { requiresAuth: true }
    },
  ]
})

/**
 * 全局路由守卫
 * 处理需要认证的页面和登录页面的访问控制
 */
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  
  authStore.restoreSession()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
