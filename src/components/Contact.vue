<template>
    <div class="d-flex justify-content-center">
      <form>
        <div class="row">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="name" class="form-control" id="name" aria-autocomplete="inline">
            <label for="subject" class="form-label">Subject</label>
            <input type="subject" class="form-control" id="subject" aria-autocomplete="inline">
          </div>
        </div>
        <div class="col">
          <div class="mb-3 form-check">
            <label class="form-label" for="message">Your Message</label>
            <textarea type="message" class="form-control" id="message" rows="3"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </div>
      </form>
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