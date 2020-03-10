import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import AddMovies from  '@/components/AddMovies'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/add-movies',
      name: 'AddMovies',
      component: AddMovies
    }
  ]
})
