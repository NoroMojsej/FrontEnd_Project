<template>
  <div class="text-center mt-2">
        <h1>Expert Trainers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh dolor, nec lacinia dolor suscipit sit amet.</p>
        <img src="../assets/images/deco.png" alt="decoration" />
  </div>
  <div>
    <trainers />
  </div>
  <div class="text-center mt-5">
      <h2>Contact Us</h2>
  </div>
  <div>
    <contact />
  </div>
</template>

<script>
import Trainers from '../components/Trainers.vue'
import Contact from '../components/Contact.vue'
export default{
components: {Trainers, Contact}
}
</script>

<style>
</style>