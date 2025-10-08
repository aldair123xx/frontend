<script setup>
import LanguageSwitcher from "./language-switcher.vue";
const items = [
  { label: 'home',       to: '/home'},
  { label: 'about',      to: '/about'},
  { label: 'rooms',      to: '/rooms'},
  { label: 'bookings',   to: '/bookings'}
];
</script>

<template>
  <div class="header">  
    <pv-toolbar class="bg-primary">
      <template #start>
        <h3>SmartStay</h3>
      </template>
      <template #end>
        <div class="flex-column mr-3">
          <pv-button v-for="item in items" :key="item.label" as-child v-slot ="slotProps">
            <router-link :to="item.to" :class="slotProps['class']">{{ item.label}}</router-link>
          </pv-button>
        </div>
        <LanguageSwitcher/> 
      </template>
    </pv-toolbar>
  </div>
  

</template>

<style scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.main-content {
  margin-top: 60px;
}

</style>