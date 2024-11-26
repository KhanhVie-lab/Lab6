import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VshowTest from '../views/VshowTest.vue'
import VforTest from '../views/VforTest.vue'
import Bai1 from '../views/Bai1View.vue'
import Bai2 from '../views/Bai2View.vue'
import Bai4 from '../views/Bai4View.vue'
import Bai3 from '../views/Bai3View.vue'
import test3 from '../views/DemoVfor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test1',
      name: 'test1',
      component: VshowTest,
    },
    {
      path: '/test2',
      name: 'test2',
      component: VforTest,
    },
    {
      path: '/bai1',
      name: 'bai1',
      component: Bai1,
    },
    {
      path: '/bai2',
      name: 'bai2',
      component: Bai2,
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: Bai3,
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: Bai4,
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3,
    },
  ],
})

export default router
