<template>
  <header>
    <nav class="navbar navbar-light" style="background-color: #dadadac0;">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 ms-2 h1">ExtraGym</span>
        <div class="justify-content-end">
          <RouterLink class="me-2" to="/">HOME</RouterLink>
          <RouterLink class="me-2" to="/about">ABOUT</RouterLink>
          <RouterLink class="me-2" to="/schedule">SCHEDULE</RouterLink>
          <RouterLink class="me-3" to="/classes">CLASSES</RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />

  <footer class="bg-body-tertiary text-center text-lg-start mt-5">
    <div class="text-center p-3" style="background-color: #dadadac0;">
      © 2024 Copyright:
      <a class="text-body" href="https://github.com/NoroMojsej">Matej Lužák</a>
    </div>  
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
