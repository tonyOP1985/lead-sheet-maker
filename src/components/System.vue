<template>
  <v-layout class="system">
    <v-layout>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon @click="editSystem"
                  v-on="on"
                  class="edit-system"
                  small>
            settings
          </v-icon>
        </template>
        <span>Edit System {{ index }}</span>
      </v-tooltip>
    </v-layout>
    <Measure v-for="(measure, measureIndex) in measures"
             :key="measureIndex"
             :systemID="id"
             :id="measureIndex"
             class="mt-5 pt-2"
             :measureIndex="measureIndex"
             @set-measure-data="setMeasureData"/>

    <!-- edit system dialog -->
    <v-dialog v-model="dialog" width="300">
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex>
                <v-text-field v-model="newMeasures"
                              label="Measures">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn flat
                 color="cyan"
                 @click="setMeasures">Create</v-btn>
          <v-btn flat
                 color="cyan"
                 @click="editSystem">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Measure from './Measure';

export default {
  components: {
    Measure
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    measures: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newMeasures: null,
      temp: [],
      dialog: false,
      form: {
        systemId: this.id,
        sequence: this.index,
        measures: []
      }
    };
  },
  computed: {
    systemIndex() {
      return this.index;
    }
  },
  methods: {
    editSystem() {
      this.dialog = !this.dialog;
    },
    setMeasureData(payload) {
      this.temp.push(payload);
      this.form.measures = this.temp;
      if (this.form.measures.length === this.measures) {
        this.$emit('set-system-data', this.form);
        this.temp = [];
      }
    },
    setMeasures() {
      this.measures = parseInt(this.newMeasures);
      this.editSystem();
    }
  }
};
</script>

<style scoped>
  .system {
    position: relative;
  }

  .edit-system {
    position: absolute;
    top: 50%;
    /* left: 0; */
    right: -5%;
  }
</style>
