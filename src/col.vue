<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-g-col"
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: aquamarine;
  border: solid 1px black;
  width: 50%;

  $class: col-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>

