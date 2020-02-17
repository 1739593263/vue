import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Nextpage from "@/components/Next"

const HelloWorld = () => import("../components/HelloWorld");
const Nextpage = () => import("../components/Next");
const profile = () => import("../components/profile");

// install plugin
Vue.use(Router)

const router=  new Router({
  routes: [
    {
      path:"",
      name:"Home",
      redirect: "/hello",
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:"",
          name:"helloDefine",
          component: () => import("../components/helloMessage")
        },
        {
          path:"/hello/messages",
          name:"messages",
          component: () => import("../components/helloMessage")
        },
        {
          path:"/hello/news",
          name:"news",
          component: () => import("../components/helloNews")
        },
      ]
    },
    {
      path:"/next",
      name:"Next",
      component: Nextpage
    },
    {
      path:"/profile",
      name:"profile",
      component: profile
    }
  ]
})

// navigate guard: created(){} mounted(){} updated(){}
router.beforeEach((to,from,next)=>{
  document.title=to.name
  next();
})

export default router
