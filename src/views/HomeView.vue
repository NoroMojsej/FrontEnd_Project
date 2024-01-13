<template>
  <header>
    <div class="text-center mt-2">
      <h6>Work harder, get stronger</h6>
      <h1>EASY WITH OUR GYM</h1>
    </div>
  </header>
  <body>
    <div class="text-center">
      <h2>Choose Program</h2>
      <img src="../assets/images/deco.png" alt="decoration" />
    </div>
    <div class="d-flex justify-content-center mt-5 ms-3">
      <div v-for="(item, index) in homeStore.home" :key="index">
          <div class="left-icon">
            <img src="../assets/images/icon.png" width="70" height="auto">
          </div>
          <div class="right-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
      </div>
    </div>
  </body>
</template>

<script>
import { useHomeStore } from "../stores/homeStore"
export default {
    data() {
        return {
            homeStore: useHomeStore(),
        }},
}
</script>

<style>
.left-icon img {
  float: left;
  margin-right: 30px;
}
 .right-content {
  display: inline;
}
</style>