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
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo')
  }
]
