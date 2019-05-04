<template>
  <v-card>
    <v-card-title>
      Select Time Signature
    </v-card-title>
    <v-card-text>
      <v-layout row wrap justify-center="">
        <v-flex xs12>
          <v-select v-model="timeSignature"
                    :items="signatures"
                    item-text="text"
                    item-value="text"
                    hide-selected
                    label="Choose Key">
          </v-select>
        </v-flex>
        <v-card-actions>
          <v-btn flat
                 color="cyan"
                 @click="selectTimeSignature">Select</v-btn>
          <v-btn flat
                 color="cyan"
                 @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      timeSignature: ''
    };
  },
  methods: {
    selectTimeSignature() {
      this.$emit('select-time-signature', this.timeSignature);
    },
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>
