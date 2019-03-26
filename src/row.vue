<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-g-row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator: function(value) {
        return ["left", "center", "right"].indexOf(value) !== -1;
      },
      default: "center"
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass() {
      let { align } = this;
      return {
        [`align-${align}`]: true
      };
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
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>

