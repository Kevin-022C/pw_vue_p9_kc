import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vehiculo',
    name: 'vehiculo',
    component: () => import('../views/VehiculoView.vue'),
    meta: {
      esPublica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      esPublica: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const esPublica = to.meta.esPublica ?? true;
  const token = localStorage.getItem('token');

  if (!esPublica && !token) {
    next({ name: 'login' });
  } else {
    next();
  }
})

export default router
