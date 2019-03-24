import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Table from './views/Table.vue'
import Children from './views/Children.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:About //() => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/table',
      name:'table',
      component:Table,
      hasChild:true,
      children:[
        {       
            path: '/table/children',
            name: 'ch',
            component: Children
        }
      ]
    },
    {
      path:'/table',
      name:'tfff',
      component:Table,
      hasChild:true,
      children:[
        {       
            path: '/table/children',
            name: 'chi',
            component: Children
        }
      ]
    }
  ]
})
