import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/App'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:id', 
      component: Home
    },
    // {
    //   path: '/product/:id', // 「:id」がパラメータ 何が入ってもOK
    //   component: Product
    // }
  ]
})
export default router