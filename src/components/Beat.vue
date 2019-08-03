<template>
  <v-flex>
    <div v-if="!isEditing"
         class="body-1 beat"
         :class="{ 'pl-1': index === 0 }">

      <span v-show="form.startsRepeat"
            class="title font-weight-bold">
        :
      </span>
      <span class="body-1">
        {{ formattedInput }}
      </span>
      <span v-show="form.endsRepeat"
            class="title font-weight-bold right pr-1">
        :
      </span>
    </div>
    <div v-else
         class="body-1"
         :class="{ 'pl-1': index === 0 }">
      <v-text-field v-model="form.text"
                    hide-details
                    class="ma-0 pa-0 caption custom-text-field"
                    @keyup.enter="setValue()">
      </v-text-field>
    </div>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    systemID: {
      type: Number,
      required: true
    },
    measureID: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      form: {
        measureId: this.measureID,
        systemId: this.systemID,
        beatId: this.id,
        count: this.index + 1,
        startsRepeat: null,
        endsRepeat: null,
        text: null
      }
    };
  },
  computed: {
    sendData() {
      if (this.isEditing) {
        this.$emit('set-beat-data', this.form);
      }
    },
    // TODO: handling of repeats works for now.  will need to revisit
    formattedInput() {
      const inputLen = this.form.text ? this.form.text.length : 0;
      if (this.form.text) {
        if (this.form.text.charAt(0) === ':' && this.id === 0) {
          this.form.startsRepeat = true;
          return this.form.text.substring(1);
        } if (this.form.text.charAt(inputLen - 1) === ':' && this.id !== 0) {
          this.form.endsRepeat = true;
          return this.form.text.substring(0, inputLen - 1);
        }
        return this.form.text;
      }
      return '';
    },
    ...mapGetters(['isEditing'])
  },
  watch: {
    isEditing(value) {
      if (value) {
        this.sendData;
      }
    }
  },
  methods: {
    setValue() {
      const payload = {
        index: this.index,
        value: this.userInput
      };
      this.$store.dispatch('setBeatsData', payload);
    }
  }
};
</script>

<style scoped>
  .v-text-field input {
    padding: 0 0 3px 0 !important;
  }

  .beat {
    height: 18px;
  }

  .custom-text-field.v-input__control.v-input__slot.v-text-field__slot input {
    padding: 0 !important;
  }
</style>
