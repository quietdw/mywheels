<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$border-color: grey;
$border-radius: 4px;
.collapse {
  border: solid 1px $border-color;
  border-radius: $border-radius;
}
</style>
