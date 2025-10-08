<template>
    <header class="header">
            <div class="container">
                <div class="header-content">
                    <router-link to="/" class="logo">
                        <h1>SmartStayxdxd</h1>
                    </router-link>
                    <nav class="nav">
                        <router-link to="/" class="nav-link">Cuartos</router-link>
                        <template v-if="authStore.user">
                            <router-link to="/my-bookings" class="nav-link">Mis Reservas</router-link>
                            <router-link v-if="authStore.isAdmin()" to="/admin" class="nav-link admin-link">Admin</router-link>
                            <button @click="handleSignOut" class="btn btn-outline"> Cerrar Session</button>
                        </template>
                        <template v-else>
                            <router-link to="/login" class="btn btn-outline">Iniciar Sesión</router-link>
                        </template>
                    </nav>
                </div>
            </div>
        </header>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const router = useRouter();

const handleSignOut = async () => {
    try {
        await authStore.signOut();
        router.push('/login');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
</script>
<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  text-decoration: none;
  color: #2c3e50;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.admin-link {
  color: #e74c3c;
}

.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  text-decoration: none;
  display: inline-block;
}

.btn-outline {
  background: transparent;
  border: 2px solid #3498db;
  color: #3498db;
}

.btn-outline:hover {
  background: #3498db;
  color: white;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .logo h1 {
    font-size: 1.25rem;
  }
}
</style>