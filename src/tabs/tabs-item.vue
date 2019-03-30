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
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  cursor: pointer;
  padding: 0 1em;
  &.active {
    background: red;
  }
}
</style>
