<template>
  <div
    class="col"
    :class="{[`col-${span}`]:true,[`offset-${offset}`]:true}"
    :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}"
  >
    <div style="border: solid 1px red;height:100px">
      <slot></slot>
    </div>

  <div class="col" :class="{[`col-${span}`]:true,[`offset-${offset}`]:true}">
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
  created() {
    console.log(this.gutter);
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  // background: aquamarine;
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

