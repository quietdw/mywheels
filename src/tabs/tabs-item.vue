<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean
    },
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
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: #409eff;
.tabs-item {
  display: flex;
  font-weight: bold;
  align-items: center;
  flex-shrink: 1;
  cursor: pointer;
  height: 100%;
  padding: 0 1em;
  &.active {
    color: $blue;
    .g-icon {
      fill: $blue;
    }
  }
}
</style>
