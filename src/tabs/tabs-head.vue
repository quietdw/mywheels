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
  data() {
    return {};
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = width + "px";
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>
<style lang="scss" scoped>
$table-height: 40px;
$blue: #409eff;
.tabs-head {
  display: flex;
  height: $table-height;
  align-items: center;
  position: relative;
  & > .wapper {
    margin-left: auto;
  }
  & > .line {
    height: 1px;
    background-color: $blue;
    position: absolute;
    bottom: 1px;
    transition: all 0.3s;
  }
}
</style>
