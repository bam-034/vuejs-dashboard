import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Wordcloud from './pages/Wordcloud.vue'
import Mapbubble from './pages/Mapbubble.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/wordcloud',
      component: Wordcloud
    },
    {
      path: '/mapbubble',
      component: Mapbubble
    },
  ]
})

export default router
