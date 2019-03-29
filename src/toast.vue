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
      default: false,
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
        if (this.$refs.line) {
          this.$refs.line.style.height =
            this.$refs.toast.getBoundingClientRect().height + "px";
        }
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
.wapper {
  position: fixed;
  left: 50%;

  &.align-top {
    top: 0;
    animation: slide-in 0.3s linear;
    .toast {
      border-radius: 0 0 4px 4px;
    }
  }
  &.align-middle {
    top: 50%;
    transform: translateY(-50%);

    animation: fade-in 0.3s linear;
    .toast {
      border-radius: 4px;
    }
  }
  &.align-bottom {
    bottom: 0;

    animation: slide-up 0.3s linear;
    .toast {
      border-radius: 4px 4px 0 0;
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
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: #a94442;
    color: #fff;
    font-size: 14px;
    & > .message {
      padding: 8px 0;
    }
    & > .line {
      border-left: solid white 2px;
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
