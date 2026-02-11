import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Todo from '../views/Todo.vue'
import DataReview from '../views/DataReview.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/data-review',
    name: 'DataReview',
    component: DataReview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
