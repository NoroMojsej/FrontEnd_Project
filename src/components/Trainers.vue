<template>
    <div>
        <h1>Expert Trainers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh dolor, nec lacinia dolor suscipit sit amet.</p>
    </div>
    <div v-for="(item, index) in trainersStore.trainers" :key="index">
        <h2>{{ item.title }}</h2>
        <h3>{{ item.name }}</h3>
        <img :src="'src/assets/images/'+ item.image" alt="Trainer Image" />
        <p>{{ item.text }}</p>
    </div>
</template>

<script>
import { useTrainersStore } from "../stores/trainersStore"
export default {
    data() {
        return {
            trainersStore: useTrainersStore(),
        }},
}
</script>
