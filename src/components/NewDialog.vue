<template>
  <v-card>
    <v-card-title>
      Create New Lead Sheet
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field v-model="title"
                          label="Title">
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="artist"
                          label="Artist">
            </v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-radio-group v-model="row" row @click="selectKeys">
              <v-radio label="Major" value="major"></v-radio>
              <v-radio label="Minor" value="minor"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="key"
                      :items="keys"
                      hide-selected
                      label="Key">
            </v-select>
          </v-flex>
          <v-flex xs12>
            <v-select v-model="meter"
                      :items="signatures"
                      item-text="text"
                      item-value="text"
                      hide-selected
                      label="Time Signature">
            </v-select>
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
      title: '',
      artist: '',
      key: null,
      meter: null,
      row: null
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
      const meta = {
        title: this.title,
        artist: this.artist,
        key: this.key,
        meter: this.meter
      };
      this.$emit('create-lead-sheet', meta);
      this.$emit('close-dialog');
    },
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>
