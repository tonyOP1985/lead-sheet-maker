<template>
  <v-card>
    <v-card-title>
      Edit Measure
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-layout column>
          <v-flex>
            <v-select v-model="meter"
                      :items="signatures"
                      item-text="text"
                      item-value="text"
                      hide-selected
                      label="Time Signature">
            </v-select>
          </v-flex>
          <v-flex>
            <v-text-field placeholder="beat 1"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field placeholder="beat 2"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field placeholder="beat 3"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field placeholder="beat 4"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn flat
              color="cyan">
        Create
      </v-btn>
      <v-btn flat
              color="cyan">
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { majorKeys, minorKeys, timeSignatures } from '@/lib/constants';

export default {
  data() {
    return {
      meter: ''
    };
  },
  computed: {
    // keys() {
    //   return this.major ? majorKeys : minorKeys;
    // },
    signatures() {
      return timeSignatures;
    }
  }
};
</script>
