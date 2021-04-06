import Vue from "vue";
import App from "./App.vue";

// socket io
import * as io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

Vue.use(
  new VueSocketIO({
    connection: io('http://localhost:80'), // options object is Optional
  })
);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");