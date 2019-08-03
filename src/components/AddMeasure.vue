<template>
  <v-card>
    <v-card-title>
      Add Measures
    </v-card-title>
    <v-container>
      <v-card-text>
        <v-layout>
          <v-flex>
            <v-text-field v-model="measures"></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn flat
                color="cyan">Create</v-btn>
        <v-btn flat
                color="cyan"
                @click="closeDialog">Cancel</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      measures: ''
    };
  },
  methods: {
    addMeasures() {
      console.log('logging | measures >>>>>>>', measures);
    },
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>
