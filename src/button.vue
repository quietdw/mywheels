<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" v-on:click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading" name="loading"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    name: "my-g-button",
    "g-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      // key 是传来的属性名字，value是该属性的配置信息
      type: String,
      default: "left",
      validator: function(value) {
        // 属性检查器
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.85em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--botton-bg);
  color: var(--color);
  cursor: pointer;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-hover-color);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  &.icon-right > .g-icon {
    order: 1;
    margin-left: 0.3em;
  }
  &.icon-left > .g-icon {
    margin-right: 0.3em;
  }
}
</style>

