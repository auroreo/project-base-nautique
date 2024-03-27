import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Individual from '../views/Individual.vue'
import Group from '../views/Group.vue'
import Family from '../views/Family.vue'
import Veille from '..//views/Veille.vue'
import Merci from '../views/Merci.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'veille',
      component: Veille
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/individual',
      name: 'individual',
      component: Individual
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/family',
      name: 'family',
      component: Family
    },
    {
      path: '/merci',
      name: 'merci',
      component: Merci
    }
  ]
})

export default router
