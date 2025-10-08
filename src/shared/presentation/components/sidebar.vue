<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Rooms',
    icon: 'pi pi-home',
    to: '/rooms'
  },
  {
    label: 'Bookings',
    icon: 'pi pi-calendar',
    to: '/bookings'
  }
]);
</script>

<template>
<div class="sidebar h-full surface-100 p-3 shadow-2">
    <pv-panel-menu :model="items" multiple>
      <template #item="{ item }">
        <router-link :to="item.to" class="flex align-items-center gap-2 w-full">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </template>
    </pv-panel-menu>
  </div>
</template>

<style scoped>
.sidebar {
  width: 220px;
  min-height: 100vh;
  left: 0;
  bottom: 0;
}
.router-link-active {
  font-weight: bold;
  color: var(--primary-color);
}
</style>