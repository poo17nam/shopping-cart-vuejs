import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

import {store} from './store/store'

Vue.component('shopping-cart', {
  props: ['items'],

  computed: {
    Total: function() {
      var total = 0;
      this.items.forEach(item => {
        total += (item.price * item.qty);
      });
      return total;
    }
  },

  methods: {
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
})

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  mode: 'history',
  store,
  render: h => h(App)
})
