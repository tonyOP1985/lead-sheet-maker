<template>
  <v-card v-if="meta">
    <v-container class="lead-sheet">
      <v-layout column justify-center>
        <v-flex xs12>
          <h2 class="text-xs-center">{{ meta.title }}</h2>
        </v-flex>
        <v-flex>
          <h4 class="text-xs-center">{{ meta.artist }}</h4>
        </v-flex>
      </v-layout>
      <!-- <v-layout column class="meter" v-if="meta.meter">
        <span>{{ meta.meter.beats }}</span>
        <span>{{ meta.meter.value }}</span>
      </v-layout> -->
      <System v-for="(system, index) in systems"
              :key="index"
              :id="index"
              :index="index"
              :measures="system.measures"
              @set-system-data="setData"/>
    </v-container>
    <v-dialog v-model="edit"
              width="500">
      <EditMeasure></EditMeasure>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import System from './System';
import { timeSignatures } from '../lib/constants';
import EditMeasure from './EditMeasure.vue';

export default {
  components: {
    System,
    EditMeasure
  },
  data() {
    return {
      input: [],
      meter: timeSignatures[0],
      temp: [],
      edit: false,
      form: {
        systems: []
      }
    };
  },
  computed: {
    ...mapGetters(['meta', 'systems'])
  },
  methods: {
    setData(payload) {
      this.temp.push(payload);
      this.form.systems = this.temp;
      if (this.form.systems.length === this.systems) {
        this.temp = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .lead-sheet {
    width: 85%;
  }

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

  .meter {
    position: absolute;
    top: 17%;
    left: 8%;
  }
</style>
