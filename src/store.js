import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: null,
    beatsData: [],
    systems: null,
    isEditing: true
  },
  getters: {
    meta: state => state.meta,
    beatsData: state => state.beatsData,
    isEditing: state => state.isEditing,
    systems: state => state.systems
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
    },
    initalizeBars({ commit, state }) {
      const measures = parseInt(state.meta.measures);
      const measuresPerLine = parseInt(state.meta.measuresPerLine);
      let lines = measures/measuresPerLine;
      const isInt = Number.isInteger(lines);
      const lastLineMeasures = measures % measuresPerLine;
      console.log("logging | typeof lastLineMeasures >>>>>>>", typeof lastLineMeasures);
      if (!isInt) {
        lines = Math.floor(lines);
        lines = lines + 1;
      }

      const systems = [];
      for (let i = 0; i < lines; i++) {
        const barNumber = { measures: null };
        if (!isInt && lines[i] === lines) barNumber.measures = lastLineMeasures;

        barNumber.measures = state.meta.measuresPerLine;
        systems.push(barNumber);
      }
      commit('set_systems', systems);
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
    },
    set_systems(state, sys) {
      state.systems = sys;
    }
  }
});

const testObj = {
  song: {
    meta: {
      title: '',
      key: ''
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
