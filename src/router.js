import { createRouter, createWebHistory } from 'vue-router';

import RoomsView from "./views/RoomsView.vue";
import LoginView from './views/LoginView.vue';
import MybookingsView from './views/MybookingsView.vue';
import AdminView from './views/adminView.vue';

const routes = [
  { path: '/', name: 'Cuartos', component: RoomsView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/my-bookings', name: 'Reservas', component: MybookingsView },
  { path: '/admin', name: 'Admin', component: AdminView },
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