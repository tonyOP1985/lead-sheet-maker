<template>
  <v-card>
    <v-card-title>
      Add Measures
    </v-card-title>
    <v-card-text>
      <v-layout>
        <v-flex>
          <v-text-field v-model="measures"
                        label="Measures to be added">
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-end>
        <v-flex xs4>
          <v-btn flat
                 @click="addMeasures()"
                 color="cyan">
            Create
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn flat
                  color="cyan"
                  @click="closeDialog">
            Cancel
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      measures: '',
      rules: {
        required: value => !!value || 'Required'
      }
    };
  },
  methods: {
    addMeasures() {
      if (!this.measures.length) {
        console.log("logging | 'value required' >>>>>>>", 'value required');
      } else {
        this.$store.dispatch('createMeasures', this.measures);
        this.closeDialog();
        this.measures = '';
      }
    },
    closeDialog() {
      this.$emit('close-dialog');
    }
  }
};
</script>
