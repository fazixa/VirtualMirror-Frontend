import Vue from 'vue';
import Vuex from 'vuex';
import {
  getLipSimulator,
  getEyeshadowSimulator,
  getBlushSimulator,
  getFoundationSimulator,

} from '@/api/simulator';

Vue.use(Vuex);

export default{
  state: {            
    makeupSimulator: null,
    makeupSimulatedImage: null,
    makeupState: '',
  },
  getters: {

    getMakeupSimulator: state => {
      return state.makeupSimulator;
    },
    getMakeupState: state => {
      // console.log(state.makeupSimulator)
      return state.makeupState;
    },
    getMakeupSimulatedImage: state => {
      return state.makeupSimulatedImage;
    }
  },
  mutations: {
    setMakeupSimulator(state, payload) {
      state.makeupSimulator = payload;
    },
    setMakeupState(state, payload) {

      console.log("hi",payload)
      state.makeupState = payload;
    },
    setMakeupSimulatedImage(state, payload) {
      state.makeupSimulatedImage = payload;
    }
  },
  actions: {

    updateMakeupSimulator({ commit }, payload) {
      commit('setMakeupSimulator', payload);
    },
    updateMakeupState({ commit }, payload) {
      console.log("updaye",payload)
      commit('setMakeupState', payload);
    },
    async loadLipSimulated({ commit }, payload) {
      commit('setMakeupSimulatedImage', await getLipSimulator(payload));
    },
    async loadEyeshadowSimulated({ commit }, payload) {
      commit('setMakeupSimulatedImage', await getEyeshadowSimulator(payload));
    },
    async loadBlushSimulated({ commit }, payload) {
      commit('setMakeupSimulatedImage', await getBlushSimulator(payload));
    },
    async loadFoundationSimulated({ commit }, payload) {
      commit('setMakeupSimulatedImage', await getFoundationSimulator(payload));
    },
  },
};
