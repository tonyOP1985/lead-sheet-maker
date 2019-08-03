<template>
  <v-flex xs4>
    <v-layout row
              class="measure"
              :class="{ 'left-bar-line': measureIndex === 0 }">
      <Beat v-for="(beat, index) in meta.meter.beats"
            :key="index"
            :index="index"
            :id="index"
            :systemID="systemID"
            @set-beat-data="setBeatData"
            :measureID="id"
            xs3 />
    </v-layout>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';
import Beat from './Beat';

export default {
  components: {
    Beat
  },
  props: {
    measureIndex: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    systemID: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      temp: [],
      form: {
        measureId: this.id,
        systemId: this.systemID,
        beats: []
      }
    };
  },
  computed: {
    ...mapGetters(['meta'])
  },
  methods: {
    setBeatData(payload) {
      this.temp.push(payload);
      this.form.beats = this.temp;
      if (this.form.beats.length === this.beats) {
        this.$emit('set-measure-data', this.form);
        this.temp = [];
      }
    }
  }
};
</script>

<style scoped>
  .left-bar-line {
    border-left: 1px solid black;
  }

  .measure {
    border-right: 1px solid black;
    max-height: 20px;
  }

  .edit-icon {
    font-size: .8rem;
  }
</style>
