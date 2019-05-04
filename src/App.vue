<template>
  <v-app>
    <ToolBar></ToolBar>
    <LeadSheet></LeadSheet>
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
