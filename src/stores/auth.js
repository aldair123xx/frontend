import { defineStore } from "pinia";
import { ref } from "vue";

const API_URL = 'http://localhost:3000';

export const useAuthStore = defineStore('auth', ()=>{
    const user = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const signIn = async (email, password) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);

            const data = await response.json();

           
            if (data.length === 0) {
                throw new Error('Credenciales inválidas');
            }

            user.value = data[0];
            localStorage.setItem('user', JSON.stringify(user.value));
            return user.value;
        } catch (err) {
            error.value = err.message;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    const signUp = async (name, email, password) => {
        loading.value = true;
        error.value = null;

        try {
            const check  = await fetch(`${API_URL}/users?email=${email}`);
            const checkData = await check.json();

            if (checkData.length > 0) {
                throw new Error('El correo ya está registrado');
            }

            const newUser = { name, email, password, role: "user" };
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }

            const data = await response.json();
            user.value = data;
            localStorage.setItem('user', JSON.stringify(user.value));
            return data;
        } catch (err) {
            error.value = err.message;
            throw err;
        } finally {
            loading.value = false;
        }
    }

    const signOut = async () => {
        user.value = null;
        localStorage.removeItem('user');
    }

    const initialize = async () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            user.value = JSON.parse(storedUser);
        }
    }

    const isAdmin = () => {
        return user.value && user.value.role === 'admin';
    }

    return { user, loading, error, signIn, signUp, signOut, initialize, isAdmin };
})