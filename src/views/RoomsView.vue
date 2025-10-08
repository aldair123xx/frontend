<template>
    <h1>Rooms View</h1>
    <div v-for="cuarto in cuartos" :key="cuarto.id">
        <div>
            <h2>{{ cuarto.name }}</h2>
            <p>{{ cuarto.description }}</p>
            <p>Price: ${{ cuarto.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';


const cuartos = ref([])
const loading = ref(true)
const API_URL = 'http://localhost:3000'

onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}/rooms`)
    cuartos.value = await response.json()
    console.log('Cuartos cargados:', cuartos.value)
  } catch (error) {
    console.error('Error al cargar cuartos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>

</style>