import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/week-1',
    name: 'Week 1',
    component: () => import('@/views/Week-1.vue'),
  },
  {
    path: '/week-2',
    name: 'Week 2',
    component: () => import('@/views/Week-2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/hex/'),
  linkActiveClass: 'active',
  routes,
});

export default router;
