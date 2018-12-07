import Vue from 'vue';
import Vuex from 'vuex';

import resturants from './modules/resturants';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resturants,
  },
});
