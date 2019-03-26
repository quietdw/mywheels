<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-g-col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset } = this;
      return {
        [span && `col-${span}`]: true,
        [offset && `offset-${offset}`]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: aquamarine;
  // border: solid 1px black;
  width: 50%;

  $class: col-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $class: offset-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>

