<template>
    <div class="text-center">
        <h1>Expert Trainers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh dolor, nec lacinia dolor suscipit sit amet.</p>
        <img src="../assets/images/deco.png" alt="decoration" />
    </div>

    <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="card text-dark bg-light mb-3" style="width: 20rem;" v-for="(item, index) in trainersStore.trainers" :key="index">
                <img :src="'src/assets/images/'+ item.image" class="card-img-top" alt="Trainer Image" />
                <div class="card-body">
                    <h3 class="card-title">{{ item.name }}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">{{ item.title }}</h6>
                    <p class="card-text">{{ item.text }}</p>
                </div>
            </div>
        </div>
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
