import home from "./shared/presentation/view/home.vue";
import { createRouter, createWebHistory } from 'vue-router';

const login = () => import('./hotel/presentation/view/auth/user-login.vue');
const register = () => import('./hotel/presentation/view/auth/user-register.vue');

const routes = [
  { path: '/home',            name: 'home',           component: home, meta: { title: 'Home' } },
  { path: '/login',           name: 'login',          component: login},
  { path: '/register',        name: 'register',       component: register},
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${to.meta["title"]} | ${baseTitle}`;
    next();
});

export default router;