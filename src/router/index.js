import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import movieRouter from './movie'
import mineRouter from './mine'

Vue.use(VueRouter)

  const routes = [
    cinemaRouter,
    movieRouter,
    mineRouter,
    {//重定向   如果找不到路径  默认movie
      path:'/*',
      redirect:'/movie'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
