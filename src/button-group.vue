<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted: function() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`期望组件第一个元素是g-button，你的第一个元素是${name}`);
      }
    }
  }
};
</script>

<style lang="scss">
.button-group {
  display: inline-flex;
  vertical-align: center;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>


