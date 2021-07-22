import { createRouter, createWebHistory } from 'vue-router'

const PageModules = import.meta.glob('/src/pages/**/*.vue')
const Home = PageModules['/src/pages/Home.vue']

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

router.addRoute({
  path: '/',
  component: Home
})


console.log(Home)

export default router