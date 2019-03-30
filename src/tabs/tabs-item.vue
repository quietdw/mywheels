<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
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
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: #409eff;
$disabled-text-color: #ccc;
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
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
    .g-icon {
      fill: $disabled-text-color;
    }
  }
}
</style>
