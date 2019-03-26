<template>
  <div class="row" :style="{marginLeft:-gutter/2 + 'px',marginRight:-gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-g-row",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    this.$children.map(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>

