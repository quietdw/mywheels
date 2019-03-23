<template>
  <div class="wapper" :class="{'error':error}">
    <input type="text" v-bind:value="value" v-bind:disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

 <style lang="scss" scoped>
//       --button-height: 32px;
//       --font-size: 14px;
//       --botton-bg: #fff;
//       --button-active-bg: #eee;
//       --border-radius: 4px;
//       --color: #333;
//       --border-color: #999;
//       --border-hover-color: #666;
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: $height;
    border: solid 1px $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[read-only] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    > .icon-error {
      fill: $red;
    }
    > .errorMessage {
      color: $red;
    }
  }
}
</style>

<script>
import Icon from "./icon";
export default {
  components: { Icon },
  name: "my-g-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
