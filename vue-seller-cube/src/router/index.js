import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{ 
    path: '/goods', 
    component: () => import("@/components/goods/goods")
},{ 
    path: '/seller', 
    component: () => import("@/components/seller/seller") 
},{ 
    path: '/ratings', 
    component: () => import("@/components/ratings/ratings")  
}];
export const router = new VueRouter({
    linkActiveClass: 'link-active',
    routes // (缩写) 相当于 routes: routes
})