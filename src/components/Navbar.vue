<template>
  <header>
    <div>
      <b-navbar>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/schedules">Schedules</RouterLink>
        <RouterLink to="/classes">Classes</RouterLink>
      </b-navbar>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>