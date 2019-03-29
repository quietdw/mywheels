<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "MyTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      valitator(value) {
        return ["horizontal", "vertical"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
