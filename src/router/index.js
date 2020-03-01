import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)




export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'Main', component: Main, children: [
        { path: '/', name: 'goods', component: () => import('../views/Goods.vue') },
        { path: '/goods', name: 'goods', component: () => import('../views/Goods.vue') },
        { path: '/business', name: 'business', component: () => import('../views/Business.vue') },
        { path: '/evaluate', name: 'evaluate', component: () => import('../views/Evaluate.vue') },
      ]
    },
  ]
})
