<script setup>
import UserLogin from "./hotel/presentation/view/auth/user-login.vue";
import UserRegister from "./hotel/presentation/view/auth/user-register.vue";
import Home from "./shared/presentation/view/home.vue";
import Navbar from "./shared/presentation/components/nabvar.vue";
</script>

<template>
  <Navbar />
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
