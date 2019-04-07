<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "MyTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      valitator(value) {
        return ["horizontal", "vertical"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  mounted() {
    this.tabsWarning();
    this.selectedItem();
  },
  methods: {
    tabsWarning() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn("子组件必须为 g-tabs-head 或 g-tabs-body");
      }
    },
    selectedItem() {
      this.$children.forEach(vm => {
        if (vm.$options.name === "MyTabsHead") {
          vm.$children.forEach(childvm => {
            if (
              childvm.$options.name === "MyTabsItem" &&
              childvm.name === this.selected
            )
              this.eventBus.$emit("update:selected", this.selected, childvm); // 确保子元素已经创建好了
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  position: relative;
}
</style>
