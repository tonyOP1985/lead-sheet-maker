<template>
  <v-app>
    <ToolBar></ToolBar>
  </v-app>
</template>

<script>
import ToolBar from '@/components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
