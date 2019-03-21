<template>
  <svg class="g-icon">
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: ["name"]
};
</script>
<style lang="scss">
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
}
.loading {
  animation: spin 1.5s infinite linear;
}
</style>