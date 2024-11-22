import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import ('../views/Auth.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import ('../views/Request.vue'),
    meta: {
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.auth;
  const isAuthenticated = store.getters['auth/isAuthenticated'];

  if (!requiresAuth) {
    next();
  }

  if (requiresAuth && isAuthenticated) {
    next();

    return;
  }

  if (requiresAuth && !isAuthenticated) {
    next('/auth?message=auth');

    return;
  }
})

export default router
