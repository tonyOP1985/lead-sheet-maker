<template>
  <v-app>
    <ToolBar></ToolBar>
    <v-layout justify-center
              class="pt-4">
      <v-flex xs12 sm10 md8>
        <LeadSheet></LeadSheet>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import ToolBar from '@/components/Toolbar.vue';
import LeadSheet from '@/components/LeadSheet.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
    LeadSheet
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss" scoped>
  .leadsheet-wrapper {
    width: 60%;
  }
</style>
