<template>
  <v-toolbar color="cyan"
             dark
             flat>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>
        <v-icon>add</v-icon>
        <span>New</span>
      </v-btn>
      <v-btn flat @click="keyDialog = true">Key</v-btn>
      <v-btn flat @click="timeSignatureDialog = true">Key Signature</v-btn>
      <v-btn flat>Transpose</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-dialog v-model="keyDialog"
              width="500">
      <KeyDialogBox :keys="keys"
                    @select-key="selectKeys"/>
    </v-dialog>
    <v-dialog v-model="timeSignatureDialog"
              width="500">
      <TimeSignatureDialog :signatures="signatures"/>
    </v-dialog>
    <v-dialog></v-dialog>
  </v-toolbar>
</template>

<script>
import { majorKeys, minorKeys, timeSignatures } from '@/lib/constants';

import KeyDialogBox from '@/components/KeyDialogBox';
import TimeSignatureDialog from '@/components/TimeSignatureDialog';

export default {
  components: {
    KeyDialogBox,
    TimeSignatureDialog,
  },
  data() {
    return {
      major: true,
      key: null,
      timeSignature: null,
      keyDialog: false,
      timeSignatureDialog: false,
      transposeDialog: false,
    };
  },
  computed: {
    keys() {
      return this.major ? majorKeys : minorKeys;
    },
    signatures() {
      return timeSignatures;
    },
  },
  methods: {
    selectKeys(value) {
      if (value === 'major') {
        this.major = true;
      } else if (value === 'minor') {
        this.major = false;
      } else {
        this.major = true;
      }
    },
  },
};
</script>
