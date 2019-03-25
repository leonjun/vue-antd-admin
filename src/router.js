import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Table from './views/Table.vue'
import Children from './views/Children.vue'
Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',   
      component: Home,
      redirect: { name: "about" },
      hidden:true
    },
    {
      path: '/about',
      name: 'about',
      id:1,
      icon:"team",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Home, //() => import(/* webpackChunkName: "about" */ './views/About.vue')
      children:[
        {       
            path: '/about',
            component: About
        }
      ]
    },
    {
      path:'/',
      name:'table',
      icon:"book",
      component:Home,
      hasChild:true,
      children:[
        {       
            path: '/table/table',
            id:2,
            name: 'table',
            component: Table
        }
      ]
    },
    {
      icon:"project",
      path:'/',
      name:'tfff',
      component:Home,
      hasChild:true,
      children:[
        {   
            id:3,    
            path: '/table/about',
            name: 'chi',
            component: About
        }
      ]
    }
  ]
})
