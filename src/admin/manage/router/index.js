import Vue from 'vue'
import Router from 'vue-router'

// 懒加载路由
const Index = () => import('../views/Index.vue');

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: '/manage',
    routes: [
        {
            path: '/',
            name: 'manage',
            component: Index,
            meta: {
                title: '后台首页',
                isLogin: true
            }
        },
    ]
})