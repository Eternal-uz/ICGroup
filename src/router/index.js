import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Talabalar from '@/views/Talabalar.vue';
import Add from '@/views/Add.vue';
import RadioButtons from '@/components/RadioButtons.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/radio',
    component: RadioButtons
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    
  },
  {
    path: '/talabalar',
    name: 'talabalar',
    component: Talabalar,
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
