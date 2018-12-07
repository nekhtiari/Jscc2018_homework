import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Resturants from './views/Resturants.vue';
import Resturant from './views/Resturant.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resturants',
      name: 'resturants',
      component: Resturants,
    },
    {
      path: '/resturant/:id',
      name: 'resturant',
      component: Resturant
    }
  ],
});
