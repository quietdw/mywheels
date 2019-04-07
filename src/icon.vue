<template>
  <svg class="g-icon">
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import "./svg";
export default {
  name: "my-g-icon",
  props: ["name"]
};
</script>
<style lang="scss" scoped>
$fill-color: #fff;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-icon {
  width: 1em;
  height: 1em;
  fill: $fill-color;
}
.loading {
  animation: spin 1.5s infinite linear;
}
</style>