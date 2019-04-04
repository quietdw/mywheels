<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return { eventBus: new Vue() };
  },
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    if (this.single) {
      return { eventBus: this.eventBus };
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: grey;
$border-radius: 4px;
.collapse {
  border: solid 1px $border-color;
  border-radius: $border-radius;
}
</style>
