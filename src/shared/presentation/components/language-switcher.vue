<script setup>
import { ref } from 'vue';
const locale = ref('en');

const availableLocales = [
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' }
];

</script>

<template>
  <pv-select-button v-model="locale" :options="availableLocales" optionLabel="label" optionValue="value"/>
</template>

<style scoped>

</style>