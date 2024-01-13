<template>
  <div class="text-center">
      <h1>Our Classes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh dolor, nec lacinia dolor suscipit sit amet.</p>
      <img src="../assets/images/deco.png" alt="decoration" />
  </div>

  <div class="text-center">
    <button type="button" class="btn btn-light" @click="change(1)">First Training Class</button>
    <button type="button" class="btn btn-light" @click="change(2)">Second Training Class</button>
    <button type="button" class="btn btn-light" @click="change(3)">Third Training Class</button>
    <button type="button" class="btn btn-light" @click="change(4)">Fourth Training Class</button>
  </div>

  <div class="container">
    <div class="card text-dark bg-light mb-3 mx-auto" style="width: 60rem;">
      <div v-for="(item, index) in classesStore.classes" :key="index">
        <div class="card-body" v-if="currentSelected === item.id">
          <img :src="'src/assets/images/'+ item.image" class="card-img-top" alt="Training Image" />
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { useClassesStore } from "../stores/classesStore"
export default {
  data() {
    return {
      currentSelected: 1,
      classesStore: useClassesStore(),
    }
  },
  methods: {
    change(selected) {
      this.currentSelected = selected;
    },
  },
};
</script>