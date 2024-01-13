import { defineStore } from "pinia";
import classes from './classesData.json'


export const useClassesStore = defineStore('ClassesStore', {
    state: () => ({
         classes: classes
        })
})
