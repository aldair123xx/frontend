import home from "./shared/presentation/view/home.vue";
import { createRouter, createWebHistory } from 'vue-router';

import login from './hotel/presentation/view/auth/user-login.vue';
import register from './hotel/presentation/view/auth/user-register.vue';

const routes = [
  { path: '/',            name: 'home',           component: home, meta: { title: 'Home' } },
  { path: '/login',           name: 'login',          component: login},
  { path: '/register',        name: 'register',       component: register},
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${to.meta["title"]} | ${baseTitle}`;
    next();
});

export default router;