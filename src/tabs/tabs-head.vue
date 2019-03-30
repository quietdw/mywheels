<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
    <div class="wapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      console.log(item);
      console.log(vm);
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
    width: 100%;
    height: 1px;
    background-color: $blue;
    position: absolute;
    bottom: 1px;
  }
}
</style>
