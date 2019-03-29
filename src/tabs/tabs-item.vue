<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsItem",
  props: {
    disabled: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
}
</style>
