import { createRouter, createWebHistory } from 'vue-router'
// 开启历史模式
// vue2中使用的mode：history 实现
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/introduce',
    component: () => import('../views/main/IntroduceView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/main/DashboardView.vue')
  },
  {
    path: '/swiper',
    component: () => import('../views/main/SwiperView.vue')
  },
  {
    path: '/choose',
    component: () => import('../views/main/ChooseView.vue')
  },
  {
    path: '/form',
    component: () => import('../views/main/FormView.vue')
  },
  {
    path: '/vuex',
    component: () => import('../views/main/VuexView.vue')
  }
]
const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router
