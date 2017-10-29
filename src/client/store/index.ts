import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patterns: [],
  },
  getters: getters as any,
  mutations: mutations as any,
  actions: actions as any,
});