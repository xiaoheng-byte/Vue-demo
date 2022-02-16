// 1. 按需导入对应的函数
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
import Users from './components/menus/MyUsers.vue'
import Rights from './components/menus/MyRights.vue'
import Goods from './components/menus/MyGoods.vue'
import Orders from './components/menus/MyOrders.vue'
import Settings from './components/menus/MySettings.vue'
import UserDetail from './components/user/MyUserDetail.vue'
// 2. 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            component: Home,
            // 用户访问 /home 时，重定向到 /home/users
            redirect: '/home/users',
            name: 'home',
            // 子路由规则
            children: [
                { path: 'users', component: Users },
                { path: 'rights', component: Rights },
                { path: 'goods', component: Goods },
                { path: 'orders', component: Orders },
                { path: 'settings', component: Settings },
                { path: 'users/:id', component: UserDetail, props:true },
            ],
        },
    ],
})
// 全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 如果用户访问的是登录页面，直接放行
    if (to.path === '/login') return next()
    // 获取 Token 值
    const token = localStorage.getItem('token')
    if (!token) {
        // Token 值不存在，强制跳转到登录页面
        return next('/login')
    }
    // 存在 Token 值，直接放行
    next()
})
// 3. 向外共享路由实例对象
export default router