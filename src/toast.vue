<template>
  <div class="wapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="this.$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span v-if="closeButton" class="close" @click="onCloseButton">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyToast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      valitator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "top",
      valitator(value) {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    toastClass() {
      return `align-${this.align}`;
    }
  },
  mounted() {
    this.updateLineStyle();
    this.exclAutoClose();
  },
  methods: {
    updateLineStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
    exclAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onCloseButton() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
$toast-min-height: 32px;
$font-size: 14px;
$toast-color: #fff;
$toast-bg: #242424;
.wapper {
  position: fixed;
  left: 50%;
  z-index: 30;
  &.align-top {
    top: 0;
    animation: slide-in 0.3s linear;
    .toast {
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
  &.align-middle {
    top: 50%;
    transform: translateY(-50%);

    animation: fade-in 0.3s linear;
    .toast {
      border-radius: $border-radius;
    }
  }
  &.align-bottom {
    bottom: 0;

    animation: slide-up 0.3s linear;
    .toast {
      border-radius: $border-radius $border-radius 0 0;
    }
  }
  @keyframes slide-up {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .toast {
    transform: translateX(-50%);
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: $toast-bg;
    color: $toast-color;
    font-size: $font-size;
    & > .message {
    }
    & > .line {
      border-left: solid white 1px;
      display: block;
      height: 100%;
      margin: 0 10px;
    }
    & > .close {
      flex-shrink: 0;
      cursor: pointer;
    }
  }
}
</style>
