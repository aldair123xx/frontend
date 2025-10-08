import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import { useAuthStore } from './stores/auth';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const authStore = useAuthStore();

authStore.initialize().then(()=>{
    app.mount('#app');
})

