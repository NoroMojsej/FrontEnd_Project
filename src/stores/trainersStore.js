import { defineStore } from "pinia";
import trainers from './trainersData.json'


export const useTrainersStore = defineStore('TrainersStore', {
    state: () => ({
         trainers: trainers
        })
})
