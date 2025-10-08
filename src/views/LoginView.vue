<template>
    <div class="container">
        <div class="auth-container">
            <div class="auth-card">
                <h2>{{ isRegister ? 'Crear Cuenta': 'Iniciar Session' }}</h2>

                <form @submit.prevent="handleSubmit" class="auth-form">
                    <div v-if="isRegister" class="form-group">
                        <label for="fullName">Nombre Completo</label>
                        <input
                        id="fullName"
                        v-model="fullName"
                        type="text"
                        required
                        placeholder="Juan Pérez"
                        />
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                        id="email"
                        v-model="email"
                        type="email"
                        required
                        placeholder="ejemplo@email.com"
                        />
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input
                        id="password"
                        v-model="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        minlength="3"
                        />
                    </div>

                    <div v-if="error" class="error-message">
                        {{ error }}
                    </div>

                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        {{ loading ? 'Procesando...' : (isRegister ? 'Registrarse' : 'Iniciar Sesión') }}
                    </button>
                </form>
                <div class="auth-footer">
                    <button @click="toggleMode" class="link-button">
                        {{ isRegister ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate' }}
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const router = useRouter()

const isRegister = ref(false)
const email = ref('')
const password = ref('')
const fullName = ref('')
const error = ref('')
const loading = ref(false)

const toggleMode = () => {
    isRegister.value = !isRegister.value
    error.value = ''
}

const handleSubmit = async () => {
    error.value = ''
    loading.value = true

    try {
        if (isRegister.value) {
            await authStore.signUp(fullName.value, email.value, password.value)
            console.log('Registering:', fullName.value, email.value)
        } else {
            await authStore.signIn(email.value, password.value)
            console.log('Logging in:', email.value)
        }
        router.push('/')
    } catch (err) {
        console.error(err)
        error.value = 'An error occurred. Please try again.'
    } finally {
        loading.value = false
    }
}

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.auth-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
}

.auth-card h2 {
  margin: 0 0 2rem;
  color: #2c3e50;
  text-align: center;
  font-size: 1.75rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #2c3e50;
}

.form-group input {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #3498db;
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #2980b9;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 1.5rem;
  text-align: center;
}

.link-button {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 0.95rem;
  text-decoration: underline;
}

.link-button:hover {
  color: #2980b9;
}

@media (max-width: 768px) {
  .auth-card {
    padding: 1.5rem;
  }

  .auth-card h2 {
    font-size: 1.5rem;
  }
}
</style>