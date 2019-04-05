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
$border-radius: 4px;
$font-size: 14px;
$button-height: 32px;
$button-bg: #fff;
$button-active-bg: #eee;
$border-color: #999;
$border-hover-color: #666;
$color: #333;

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.85em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  color: $color;
  cursor: pointer;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-hover-color;
  }

  &:active {
    background-color: $button-active-bg;
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

