import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home-page.vue'
import MovieDetail from '../views/Movie-detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home-page',
    component: HomePage
  },
  {
    path:'/movie/:id',
    name:'Movie Detail',
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
