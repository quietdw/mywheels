<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
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
  created() {
    // this.$emit('update:selected',xxx)
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
