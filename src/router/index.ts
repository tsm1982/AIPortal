import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'
import { rolePermissions, type Role } from '@/data/roles'

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
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/UnauthorizedView.vue'),
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
      meta: { requiresAuth: true, roles: ['admin'] as Role[] }
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
    {
      path: '/project-assets',
      name: 'project-assets',
      component: () => import('../views/ProjectAssetsView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
    {
      path: '/tech-assets',
      name: 'tech-assets',
      component: () => import('../views/TechAssetsView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('../views/SolutionsView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
    {
      path: '/project-assets/:id',
      name: 'project-asset-detail',
      component: () => import('../views/ProjectAssetDetailView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
    {
      path: '/tech-assets/:id',
      name: 'tech-asset-detail',
      component: () => import('../views/TechAssetDetailView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
    {
      path: '/solutions/:id',
      name: 'solution-detail',
      component: () => import('../views/SolutionDetailView.vue'),
      meta: { requiresAuth: true, roles: ['projectadmin'] as Role[] }
    },
  ]
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()

  authStore.restoreSession()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'home' })
  } else if (to.meta.roles && Array.isArray(to.meta.roles) && to.meta.roles.length > 0) {
    const userRole = authStore.user?.role
    if (userRole && (to.meta.roles as Role[]).includes(userRole)) {
      next()
    } else {
      console.warn(`[权限检查] 用户 ${authStore.user?.username || 'unknown'} (角色: ${userRole || 'none'}) 尝试访问需要角色 [${(to.meta.roles as Role[]).join(', ')}] 的页面: ${to.fullPath}`)
      next({ name: 'unauthorized' })
    }
  } else {
    next()
  }
})

export default router