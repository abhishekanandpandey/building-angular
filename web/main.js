import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/custom-style.css';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
