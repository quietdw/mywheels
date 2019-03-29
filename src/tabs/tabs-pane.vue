<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsPane",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", data => {
      console.log(data);
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
}
</style>
