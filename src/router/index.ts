import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import GameList from '@/views/Game/List/GameList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: GameList
  },
  // {
  //   path: '/about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
