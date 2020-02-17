import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const home = () => import("../main/main");
const category = () => import("../class/class");
const cart = () => import("../cart/cart");
const personal = () => import("../personal/personal");

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'main',
      component: home
    },
    {
      path: '/class',
      name: 'category',
      component: category
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
  ]
})
