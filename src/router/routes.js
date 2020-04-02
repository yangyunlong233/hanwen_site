import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import('../views/Case')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]
