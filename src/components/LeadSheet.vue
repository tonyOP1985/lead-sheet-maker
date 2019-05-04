<template>
  <v-container class="lead-sheet">
    <v-layout column justify-center>
      <v-flex xs12>
        <h2 class="text-xs-center">{{ title }}</h2>
      </v-flex>
      <v-flex>
        <h4 class="text-xs-center">{{ artist }}</h4>
      </v-flex>
    </v-layout>
    <v-layout column>
      <span>4</span>
      <span>4</span>
    </v-layout>
    <v-layout v-for="(system, index) in systems"
              :key="index"
              class="system mt-4"
              row>
      <v-flex v-for="(bar, index) in bars"
              :key="index"
              class="measure">
        <v-layout row>
          <v-flex v-for="(beat, index) in beats"
                  :key="index"
                  xs3>
            <v-text-field solo
                          flat
                          hide-details>
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Cheap Sunglasses',
      artist: 'ZZ Top',
      systems: 4,
      bars: 4,
      beats: 4
    };
  }
};
</script>

<style lang="scss" scoped>
  .lead-sheet {
    border: 1px solid black;
    width: 60%;
  }

  .system > :first-child {
    border-left: 1px solid black;
  }

  .measure {
    border-right: 1px solid black;
  }
</style>
