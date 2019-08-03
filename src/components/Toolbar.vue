<template>
  <v-toolbar color="cyan"
             dark
             flat>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click="newDialog = true">
        <v-icon>add</v-icon>
        <span>New</span>
      </v-btn>
      <v-btn flat @click="keyDialog = true">Key</v-btn>
      <v-btn flat @click="timeSignatureDialog = true">Key Signature</v-btn>
      <v-btn flat>Transpose</v-btn>
      <v-btn flat @click="addMeasureDialog = true">Add Measures</v-btn>
      <v-btn v-if="isEditing"
             flat
             @click="toggleEdit()">
        Edit
      </v-btn>
      <v-btn v-else
             flat
             @click="toggleEdit()">
        Save
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-dialog v-model="keyDialog"
              width="500">
      <KeyDialogBox :keys="keys"
                    @select-key="selectKeys"/>
    </v-dialog>
    <v-dialog v-model="timeSignatureDialog"
              width="300">
      <TimeSignatureDialog :signatures="signatures"
                           @select-time-signature="selectedTimeSignature"
                           @close-dialog="timeSignatureDialog = false"/>
    </v-dialog>
    <v-dialog v-model="newDialog"
              width="500">
      <NewDialog :keys="keys"
                 :signatures="signatures"
                 @create-lead-sheet="createLeadSheet"
                 @close-dialog="newDialog = false"
                 @select-key="selectKeys"/>
    </v-dialog>
    <v-dialog v-model="addMeasureDialog"
              width="300">
      <AddMeasure @close-dialog="addMeasureDialog = false"/>
    </v-dialog>
  </v-toolbar>
</template>

<script>
import { majorKeys, minorKeys, timeSignatures } from '@/lib/constants';

import KeyDialogBox from '@/components/KeyDialogBox';
import TimeSignatureDialog from '@/components/TimeSignatureDialog';
import NewDialog from '@/components/NewDialog';
import AddMeasure from '@/components/AddMeasure';

import { mapGetters } from 'vuex';

export default {
  components: {
    NewDialog,
    KeyDialogBox,
    TimeSignatureDialog,
    AddMeasure
  },
  data() {
    return {
      major: true,
      key: null,
      timeSignature: null,
      keyDialog: false,
      timeSignatureDialog: false,
      transposeDialog: false,
      newDialog: false,
      addMeasureDialog: false
    };
  },
  computed: {
    keys() {
      return this.major ? majorKeys : minorKeys;
    },
    signatures() {
      return timeSignatures;
    },
    ...mapGetters(['isEditing'])
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
    selectedTimeSignature(value) {
      this.timeSignatureDialog = false;
    },
    createLeadSheet(payload) {
      this.$store.dispatch('collectMeta', payload);
      this.$store.dispatch('initalizeBars');
    },
    toggleEdit() {
      this.$store.dispatch('editForm');
    }
  }
};
</script>
