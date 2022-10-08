import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfUse from '../views/TermsOfUse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
      return {
        top: 0,
        behavior: 'smooth'
      }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: import('@/views/Orders/ShoppingCart.vue')
    },
    {
      path: '/my-addresses',
      name: 'my-addresses',
      component: import('@/views/MyAddresses/MyAddresses.vue')
    },
    {
      path: '/my-cards',
      name: 'my-cards',
      component: import('@/views/MyCards/Cards.vue')
    },
    {
      path: '/create-card',
      name: 'create-card',
      component: import('@/views/MyCards/CreateCard.vue')
    },
    {
      path: '/create-address',
      name: 'create-address',
      component: import('@/views/MyAddresses/CreateAddress.vue')
    },
    {
      path: '/my-data',
      name: 'my-data',
      component: import('@/views/MyData.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUse
    }
  ]
})

export default router