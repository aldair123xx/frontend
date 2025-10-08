import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from 'primevue/config';
import Material from "@primeuix/themes/material";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import router from "./router.js";

import {
    Button,
    Card,
    ConfirmationService,
    DialogService,
    FloatLabel,
    InputText,
    Password, SelectButton, Toast,
    ToastService, Toolbar
} from "primevue";

// noinspection JSCheckFunctionSignatures

createApp(App)
    .use(PrimeVue, { theme: { preset: Material }, ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-input-text', InputText)
    .component('pv-password', Password)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-float-label', FloatLabel)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .component('pv-select-button', SelectButton)
    .use(router)
    .mount('#app')
