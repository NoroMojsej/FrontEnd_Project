<template>
    <div class="text-center">
      <h1>Schedule</h1>
      <img src="../assets/images/deco.png" alt="decoration" />
    </div>
    <div>
      <div class="text-center">
        <button type="button" class="btn btn-light" @click="changeDay('mon')">Monday</button>
        <button type="button" class="btn btn-light" @click="changeDay('tue')">Tuesday</button>
        <button type="button" class="btn btn-light" @click="changeDay('wed')">Wednesday</button>
        <button type="button" class="btn btn-light" @click="changeDay('thr')">Thursday</button>
        <button type="button" class="btn btn-light" @click="changeDay('fri')">Friday</button>
      </div>
      
      <table class="table-light" v-if="currentDay === 'mon'">
        <tr v-for="(item, index) in Monday" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.am }}</td>
          <td>{{ item.pm }}</td>
          <td>{{ item.trainer }}</td>
        </tr>
      </table>
  
      <table class="table-light" v-else-if="currentDay === 'tue'">
        <tr v-for="(item, index) in Tuesday" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.am }}</td>
          <td>{{ item.pm }}</td>
          <td>{{ item.trainer }}</td>
        </tr>
      </table>

      <table class="table-light" v-else-if="currentDay === 'wed'">
        <tr v-for="(item, index) in Wednesday" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.am }}</td>
          <td>{{ item.pm }}</td>
          <td>{{ item.trainer }}</td>
        </tr>
      </table>

      <table class="table-light" v-else-if="currentDay === 'thr'">
        <tr v-for="(item, index) in Thursday" :key="index">
            <td>{{ item.type }}</td>
          <td>{{ item.am }}</td>
          <td>{{ item.pm }}</td>
          <td>{{ item.trainer }}</td>
        </tr>
      </table>

      <table class="table-light" v-else-if="currentDay === 'fri'">
        <tr v-for="(item, index) in Friday" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.am }}</td>
          <td>{{ item.pm }}</td>
          <td>{{ item.trainer }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDay: 'mon',
        Monday: [
            { type: 'Fitness Class', am: '10:00 AM - 11:30 AM', pm: '', trainer:'William G. Stewart' },
            { type: 'Muscle Training', am: '', pm: '', trainer:'Paul D. Newman' },
            { type: 'Body Building', am: '', pm: '2:00 PM - 3:30 PM', trainer:'Boyd C. Harris' },
            { type: 'Yoga Training Class', am: '', pm: '', trainer:'Hector T. Daigle' },
            { type: 'Advanced Training', am: '', pm: '', trainer:'Bret D. Bowers' }
        ],
        Tuesday: [
            { type: 'Fitness Class', am: '', pm: '2:00 PM - 3:30 PM', trainer:'William G. Stewart' },
            { type: 'Muscle Training', am: '', pm: '', trainer:'Paul D. Newman' },
            { type: 'Body Building', am: '10:00 AM - 11:30 AM', pm: '', trainer:'Boyd C. Harris' },
            { type: 'Yoga Training Class', am: '', pm: '', trainer:'Hector T. Daigle' },
            { type: 'Advanced Training', am: '', pm: '', trainer:'Bret D. Bowers' }
        ],
        Wednesday: [
            { type: 'Fitness Class', am: '', pm: '', trainer:'William G. Stewart' },
            { type: 'Muscle Training', am: '', pm: '', trainer:'Paul D. Newman' },
            { type: 'Body Building', am: '', pm: '', trainer:'Boyd C. Harris' },
            { type: 'Yoga Training Class', am: '10:00 AM - 11:30 AM', pm: '', trainer:'Hector T. Daigle' },
            { type: 'Advanced Training', am: '', pm: '2:00 PM - 3:30 PM', trainer:'Bret D. Bowers' }
        ],
        Thursday: [
            { type: 'Fitness Class', am: '', pm: '', trainer:'William G. Stewart' },
            { type: 'Muscle Training', am: '', pm: '2:00 PM - 3:30 PM', trainer:'Paul D. Newman' },
            { type: 'Body Building', am: '', pm: '', trainer:'Boyd C. Harris' },
            { type: 'Yoga Training Class', am: '', pm: '', trainer:'Hector T. Daigle' },
            { type: 'Advanced Training', am: '10:00 AM - 11:30 AM', pm: '', trainer:'Bret D. Bowers' }
        ],
        Friday: [
            { type: 'Fitness Class', am: '', pm: '', trainer:'William G. Stewart' },
            { type: 'Muscle Training', am: '10:30 AM - 11:30 AM', pm: '', trainer:'Paul D. Newman' },
            { type: 'Body Building', am: '', pm: '', trainer:'Boyd C. Harris' },
            { type: 'Yoga Training Class', am: '', pm: '2:00 PM - 3:30 PM', trainer:'Hector T. Daigle' },
            { type: 'Advanced Training', am: '', pm: '', trainer:'Bret D. Bowers' }
        ]
      };
    },
    methods: {
        changeDay(day) {
            this.currentDay = day;
        }
    }
  };
  </script>