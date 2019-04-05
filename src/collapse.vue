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
    },
    selected: {
      type: Array
    }
  },
  provide() {
    // if (this.single) {
    //   return {  };
    // }
    return { eventBus: this.eventBus };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", name => {
      let newSelected = JSON.parse(JSON.stringify(this.selected));
      if (this.single === true) {
        newSelected = [name];
      } else {
        newSelected.push(name);
      }
      this.eventBus.$emit("update:selected", newSelected);
      this.$emit("update:selected", newSelected);
    });
    this.eventBus.$on("update:removeSelected", name => {
      let index = this.selected.indexOf(name);
      this.selected.splice(index, 1);
      this.eventBus.$emit("update:selected", this.selected);
      this.$emit("update:selected", this.selected);
    });
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
