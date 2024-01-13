<template>
    <div class="container-fluid mt-5">
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
