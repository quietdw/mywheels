<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "MySider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.g-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
