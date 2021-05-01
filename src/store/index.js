import Vue from 'vue';
import Vuex from 'vuex';

import user from '@/store/user.js';

import uploadImage from '@/store/uploadImage.js';
import simulator from '@/store/simulator.js';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,

    uploadImage,
    simulator,

  },
});
