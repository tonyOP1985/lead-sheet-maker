import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: {},
    beatsData: [],
    isEditing: true
  },
  getters: {
    meta: state => state.meta,
    beatsData: state => state.beatsData,
    isEditing: state => state.isEditing
  },
  actions: {
    collectMeta({ commit }, meta) {
      commit('set_meta', meta);
    },
    setBeatsData({ commit }, payload) {
      commit('set_beats_data', payload);
    },
    editForm({ commit }) {
      commit('edit_form');
    }
  },
  mutations: {
    set_meta(state, meta) {
      state.meta = meta;
    },
    set_beats_data(state, payload) {
      state.beatsData.push(payload);
    },
    edit_form(state) {
      state.isEditing = !state.isEditing;
    }
  }
});

const testObj = {
  song: {
    meta: {
      title: '',
      key: '',
      // other meta things
    },
    form: [
      {
        systems: [
          {
            measures: [
              {
                startRepeat: Boolean,
                endsRepeat: Boolean,
                beats: []
              }
            ]
          }
        ]
      }
    ]
  }
};