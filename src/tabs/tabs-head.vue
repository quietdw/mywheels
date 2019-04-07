<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="wapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (item, vm) => {
        let { width } = vm.$el.getBoundingClientRect();
        let left = vm.$el.offsetLeft;
        this.$refs.line.style.width = width + "px";
        this.$refs.line.style.left = `${left}px`;
      });
  }
};
</script>
<style lang="scss" scoped>
$table-height: 40px;
$red: #bd0d13;
$border-color: #e4e7ed;
.tabs-head {
  display: flex;
  height: $table-height;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  & > .wapper {
    margin-left: auto;
  }
  & > .line {
    height: 1px;
    background-color: $red;
    position: absolute;
    bottom: -1px;
    transition: all 0.3s;
  }
}
</style>
