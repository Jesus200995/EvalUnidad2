<template>
    <div id="app">
      <!-- Aquí va tu contenido principal -->
      <router-view></router-view>
      
      <!-- Pie de página -->
      <PiePagina/>
    </div>
  </template>
  
  <script>
  import PiePagina from './components/PiePagina.vue';
  
  export default {
    components: {
      PiePagina
    }
  };
  </script>
  
  <style>
  /* Estilos globales si los necesitas */
  </style>
  