<template>
  <div>
      <h2>Our Classes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh dolor, nec lacinia dolor suscipit sit amet.</p>
  </div>
  <div>
    <button @click="change(1)">First Training Class</button>
    <button @click="change(2)">Second Training Class</button>
    <button @click="change(3)">Third Training Class</button>
    <button @click="change(4)">Fourth Training Class</button>
  </div>
      <div v-for="(item, index) in classesStore.classes" :key="index">
        <div v-if="currentSelected === item.id">
          <img :src="'src/assets/images/'+ item.image" alt="Training Image" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
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