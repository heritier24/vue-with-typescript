import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    components: {
      default: () => import('../views/DashboardView.vue')
    },
    children: [
      {
        path: '',
        name: 'DashboardItem',
        components: {
          dashboard: () => import('../components/DashboardItem.vue')
        }
      },
      {
        path: '/product-list',
        name: 'ProductList',
        components: {
          dashboard: () => import('../components/ProductList.vue')
        }
      },
      {
        path: '/product-add',
        name: 'ProductAdd',
        components: {
          dashboard: () => import('../components/ProductAdd.vue')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
