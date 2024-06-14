<script setup>
import { RouterView, useRoute } from 'vue-router';
import PiePagina from './components/piePagina.vue';
import { computed } from 'vue';

// Obtener la ruta actual
const route = useRoute();

// Determinar si se debe mostrar el pie de página
const showFooter = computed(() => route.name !== 'login');
</script>

<template>
  <div id="app">
    <RouterView />
    <PiePagina v-if="showFooter" />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
}
</style>
