<template>
  <div class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: Boolean | Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
  display: none;
  &.active {
    display: block;
  }
}
</style>
