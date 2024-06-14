<template>
  <footer class="footer">
    <p>Derechos reservados a Jesús Ríos Gómez © UTXJ</p>
  </footer>
</template>

<script>
export default {
  name: 'PiePagina',
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0); /* Fondo transparente */
  color: rgb(0, 0, 0); /* Color del texto (negro en este caso) */
  text-align: center;
  padding: 15px 0;
  box-sizing: border-box; /* Asegúrate de que el padding no afecte el ancho total */
  border-top: 2px solid rgba(255, 255, 255, 0.3); /* Borde superior para marcar el rectángulo */
  font-family: 'Arial', sans-serif; /* Fuente elegante (ejemplo: Arial) */
  font-size: 16px; /* Tamaño de fuente más grande */
  font-weight: 600; /* Peso de la fuente en negrita */
  text-transform: uppercase; /* Convertir el texto a mayúsculas */
  letter-spacing: 1px; /* Espaciado entre letras */
}

.footer p {
  margin: 0;
}
</style>
