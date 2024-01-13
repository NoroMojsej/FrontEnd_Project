import { defineStore } from "pinia";
import home from './homeData.json'


export const useHomeStore = defineStore('HomeStore', {
    state: () => ({
         home: home
        })
})
