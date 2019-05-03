<template>
  <v-card>
    <v-card-title>
      Select Key
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-radio-group v-model="row" row @click="selectKeys">
            <v-radio label="Major" value="major"></v-radio>
            <v-radio label="Minor" value="minor"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs12>
          <v-select v-model="key"
                    :items="keys"
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
    keys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      row: null,
      key: '',
    };
  },
  methods: {
    selectKeys() {
      this.$emit('select-key', this.row);
    },
  },
};
</script>
