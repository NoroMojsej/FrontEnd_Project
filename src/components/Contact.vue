<template>
    <div>
      <h2>Contact Us</h2>
    </div>
    <div>
      <div>
        <input placeholder="Your Name" required/>
        <input type="email" placeholder="Your Email" required/>
      </div>
      <div>
        <input placeholder="Subject" />
      </div>
      <div>
        <textarea placeholder="Message" required></textarea>
      </div>
      <button @click="send('Message Sent')">Submit</button>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
      send(message) {
        this.message = message;
      },
    },
  };
  </script>