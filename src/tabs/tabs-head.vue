<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="wapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyTabsHead"
};
</script>
<style lang="scss" scoped>
.tabs-head {
  display: flex;
  & > .wapper {
    margin-left: auto;
  }
}
</style>
