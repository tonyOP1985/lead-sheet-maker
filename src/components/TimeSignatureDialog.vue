<template>
  <v-card>
    <v-card-title>
      Select Time Signature
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-select v-model="timeSignature"
                    :items="signatures"
                    hide-selected
                    label="Choose Key">
          </v-select>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    signatures: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timeSignature: '',
    };
  },
  methods: {
    selectTimeSignature() {
      this.$emit('select-time-signature');
    },
  },
};
</script>
