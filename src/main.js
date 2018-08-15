import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
Vue.use(axios);
export const bus = new Vue();
const router = new VueRouter(
  {
    routes: Routes
  }
);


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
