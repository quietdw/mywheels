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
  name: "my-g-button",
  components: {
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
$button-bg: #d51218;
$button-bg-linear: linear-gradient(to bottom, #e51922 0%, #bb060b 100%);
$button-hover-bg: #e7262d;
$button-hover-bg-linear: linear-gradient(to bottom, #f32f36 0%, #d4171e 100%);
$border-color: #bd0d13;
$border-active-color: #d6343a;
$color: #fff;
$text-shadow-color: #8a060b;

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 2em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  background: $button-bg-linear;
  color: $color;
  text-shadow: 0 1px 0 $text-shadow-color;
  cursor: pointer;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  box-shadow: inset 1px 1px 0px 0px #da111a, inset -1px -1px 0px 0px #da111a,
    0px 2px 3px 0px #b6b6b6;
  &:hover {
    background: $button-hover-bg;
    background: $button-hover-bg-linear;
    box-shadow: inset 1px 1px 0px 0px #e92a34, inset -1px -1px 0px 0px #e92a34,
      0px 2px 3px 0px #ccc;
  }

  &:active {
    border-color: $border-active-color;
    box-shadow: inset 1px 1px 0px 0px #e92a34, inset -1px -1px 0px 0px #e92a34,
      0px 2px 3px 0px #ddd;
  }

  &:focus {
    outline: none;
  }
  &.icon-right > .g-icon {
    order: 1;
    margin-left: 0.5em;
  }
  &.icon-left > .g-icon {
    margin-right: 0.5em;
  }
}
</style>

