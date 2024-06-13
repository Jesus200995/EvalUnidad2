<template>
    <div class="flex items-center justify-center p-12">
      
      <div class="w-full p-8 lg:w1/2">
        <Personas/>
      </div>
      <div class="w-full p-8 lg:w1/2">
        <usuario/>
      </div>
  </div>
  </template>

 <script>
  import Personas from './personas.vue'
  import Usuario from './usuario.vue'
  export default{
    components:{
      Personas,
      Usuario
    }
  }
</script>