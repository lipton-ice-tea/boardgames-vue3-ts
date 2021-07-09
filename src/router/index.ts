import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import GameList from '@/views/Game/List/GameList.vue'
import GameView from '@/views/Game/View/GameView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: GameList
  },
  {
    path: '/:gamePath',
    component: GameView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
