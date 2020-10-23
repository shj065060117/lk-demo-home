import Vue from 'vue'
import Router from 'vue-router'

// 懒加载路由
const Index = () => import('../views/Index.vue');

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: '/login',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Index,
            meta: {
                title: '登录页',
                isLogin: true
            }
        },
    ]
})