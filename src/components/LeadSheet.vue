<template>
  <v-card>
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
      <v-layout v-for="(system, sysIndex) in systems"
                :key="sysIndex"
                class="system mt-4"
                row>
        <v-flex v-for="(bar, index) in bars"
                :key="index">
          <v-icon v-if="!edit"
                  class="edit-icon"
                  @click="editMeasure(index, sysIndex)">
            edit
          </v-icon>
          <v-icon v-else
                  class="edit-icon"
                  @click="editMeasure(index, sysIndex)">
            check
          </v-icon>
          <v-layout row
                    class="measure"
                    :class="{ 'left-bar-line': index === 0 }">
            <Beat v-for="(beat, index) in beats"
                  :key="index"
                  :index="index"
                  :edit="edit"
                  xs3 />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Beat from './Beat'; 

export default {
  components: {
    Beat
  },
  data() {
    return {
      title: 'Cheap Sunglasses',
      artist: 'ZZ Top',
      systems: 4,
      bars: 4,
      beats: 4,
      edit: false
    };
  },
  methods: {
    editMeasure(index, sysIndex) {
      this.edit = !this.edit;
    }
  }
};
</script>

<style lang="scss" scoped>
  .lead-sheet {
    width: 85%;
  }

  .left-bar-line {
    border-left: 1px solid black;
  }

  .measure {
    border-right: 1px solid black;
    max-height: 20px;
  }

  .edit-icon {
    font-size: .8rem;
  }
</style>
