import { createRouter, createWebHistory } from 'vue-router'
import { trackRouter } from "vue-gtag-next";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/proyecto/:slug',
    name: 'Project',
    props: true,
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Project.vue'),
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})


trackRouter(router)

export default router
