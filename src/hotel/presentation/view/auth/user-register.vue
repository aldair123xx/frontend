<script setup>

</script>

<template>
  <div class="login-container">
    <pv-card class="login-card p-4" >
      <template #title>
        <h2 class="text-center">Register</h2>
      </template>

      <template #content>
        <form @submit.prevent="onLogin">
          <pv-float-label class="mb-3" w-full>
            <pv-input-text id="firstname" v-model="firstname" class="input-field"/>
            <label for="firstname">First Name</label>
          </pv-float-label>

          <pv-float-label class="mb-3" w-full>
            <pv-input-text id="lastname" v-model="lastname" class="input-field"/>
            <label for="lastname">Last Name</label>
          </pv-float-label>

          <pv-float-label class="mb-3" w-full>
            <pv-input-text id="email" v-model="email" class="input-field"/>
            <label for="email">Correo electrónico</label>
          </pv-float-label>

          <pv-float-label class="mb-3" w-full>
            <pv-input-text id="dni" v-model="dni" class="input-field"/>
            <label for="dni">Dni</label>
            </pv-float-label>

          <pv-float-label class="mb-3" w-full>
            <pv-password id="password" v-model="password" toggleMask  class="password-field"/>
            <label for="password">Contraseña</label>
          </pv-float-label>

          <pv-float-label class="mb-3" w-full>
            <pv-password id="confirmPassword" v-model="confirmPassword" toggleMask  class="password-field"/>
            <label for="confirmPassword">Confirm Password</label>
          </pv-float-label>

          <pv-button
              label="Entrar"
              icon="pi pi-sign-in"
              class="my-button"
              type="submit"
          />

          <p class="text-center mt-4">
            ¿Tienes una cuenta?
            <a href="/login" class="text-blue-500 hover:underline">Ingresa</a>
          </p>

          <div v-if="error" class="error-message mt-3">
            <pv-toast />
            <small class="text-red-500">{{ error }}</small>
          </div>
        </form>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.login-card {
  width: 100%;
  height: auto;
  border-radius: 30px;
}
.input-field {
  width: 100%;
  border-radius: 15px;
  
}
.password-field {
  width: 100%;
  
}

::v-deep(.p-password-input) {
  width: 100%;
  border-radius: 15px;
}

.my-button {
  width: 100%;
  border-radius: 15px; /* fuerza el borde redondeado */
}

</style>
