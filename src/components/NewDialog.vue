<template>
  <v-card>
    <v-card-title>
      Create New Lead Sheet
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field v-model="form.title"
                          label="Title">
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="form.artist"
                          label="Artist">
            </v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-radio-group v-model="form.row" row @click="selectKeys">
              <v-radio label="Major" value="major"></v-radio>
              <v-radio label="Minor" value="minor"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="form.key"
                      :items="keys"
                      hide-selected
                      label="Key">
            </v-select>
          </v-flex>
          <v-flex xs12>
            <v-select v-model="form.meter"
                      :items="signatures"
                      item-text="text"
                      item-value="data"
                      hide-selected
                      label="Time Signature">
            </v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="form.measures"
                          label="Measures">
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="form.measuresPerLine"
                          label="Measures Per Line"
                          hint="Can be changed later"
                          persistent-hint>
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn flat
              color="cyan"
              @click="createSong">Create</v-btn>
      <v-btn flat
              color="cyan"
              @click="closeDialog">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      required: true
    },
    keys: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      form: {
        title: '',
        artist: '',
        key: '',
        meter: '',
        row: '',
        measures: 32,
        measuresPerLine: 4
      }
    };
  },
  methods: {
    selectTimeSignature() {
      this.$emit('select-time-signature', this.meter);
    },
    selectKeys() {
      this.$emit('select-key', this.row);
    },
    createSong() {
      this.$emit('create-lead-sheet', this.form);
      this.$emit('close-dialog');
    },
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>
