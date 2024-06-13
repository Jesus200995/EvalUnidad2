<template>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          &copy; {{ new Date().getFullYear() }} Sistema Hospital. Todos los derechos reservados.
        </p>
        <p>
          Diseñado por <strong>Jesús Ríos Gómez</strong>
        </p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #292929;
    color: #fff;
    padding: 2rem 0;
    font-size: 0.9rem;
  }
  
  .content {
    margin-bottom: 1rem;
  }
  
  .content p {
    margin-bottom: 0.5rem;
  }
  
  .content strong {
    font-weight: bold;
  }
  </style>
  
  