<template>
  <v-flex>
    <div v-if="!edit"
        class="caption"
        :class="{ 'pl-1': index === 0 }">
      {{ userInput }}
    </div>
    <div v-else
        class="caption"
        :class="{ 'pl-1': index === 0 }">
      <v-text-field v-model="userInput"
                    hide-details
                    class="mt-0 pt-0">
      </v-text-field>
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      userInput: 'Gm7'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-text-field__slot > input {
    padding-top: 0;
  }
</style>

