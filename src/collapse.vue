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
    this.updateItems(this.selected);
    this.eventBus.$on("update:addSelected", name => {
      this.addSelected(name);
    });
    this.eventBus.$on("update:removeSelected", name => {
      this.removeSelected(name);
    });
  },
  methods: {
    updateItems(selected) {
      this.eventBus.$emit("update:selected", selected);
    },
    addSelected(name) {
      let newSelected = JSON.parse(JSON.stringify(this.selected));
      if (this.single === true) {
        newSelected = [name];
      } else {
        newSelected.push(name);
      }
      this.updateItems(newSelected);
      this.$emit("update:selected", newSelected);
    },
    removeSelected(name) {
      let newSelected = JSON.parse(JSON.stringify(this.selected));
      let index = newSelected.indexOf(name);
      newSelected.splice(index, 1);
      this.updateItems(newSelected);
      this.$emit("update:selected", newSelected);
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
