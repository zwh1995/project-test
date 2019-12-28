import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/foot/movie.vue'),
    children:[
      {
        path: '/ryym',
        name: 'ryym',
        component: () => import(/* webpackChunkName: "ryym" */ '../views/foot/pages/ryym.vue'),
      },
      {
        path: '/syym',
        name: 'syym',
        component: () => import(/* webpackChunkName: "syym" */ '../views/foot/pages/syym.vue'),
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/moviehome.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine/wode.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
