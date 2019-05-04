import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: null
  },
  getters: {
    meta: state => state.meta
  },
  actions: {
    collectMeta({ commit }, meta) {
      commit('set_meta', meta);
    }
  },
  mutations: {
    set_meta(state, meta) {
      state.meta = meta;
    }
  }
});
