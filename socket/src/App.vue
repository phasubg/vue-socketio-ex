<template>
  <div id="app">
    hello world
    <button @click="auth()">auth</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.sockets.subscribe(this.$socket.id, (data) => {
          console.log(data);
      });
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      console.log("message",data);
      this.socketMessage = data
    }
  },

  methods: {
    auth() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('auth', 
      {
        "token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MSwiU1RBVFVTIjoxLCJpYXQiOjE2MTc3MDQwOTYsImV4cCI6MTYxNzk0NDA5Nn0.GHbY-3uU1zOuAvGHZmIW9A4SXui7-r1m-Ov5_94R9js"
      }
      )
    }
  },

  mounted() {
    this.sockets.subscribe('message', (data) => {
        console.log(data);
    });
    
  },
}
</script>

<style>

</style>
