<template>
  <div class="toast" ref="wapper" :class="toastClass">
    <div class="message">
      <slot v-if="!closeButton.enableHTML"></slot>
      <div v-else v-html="this.$slots.default[0]"></div>
    </div>
    <span class="line" ref="line"></span>
    <span v-if="closeButton" class="close" @click="onCloseButton">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "MyToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    atuoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
          enableHTML: false
        };
      }
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
          this.$refs.wapper.getBoundingClientRect().height + "px";
      });
    },
    exclAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.atuoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit('close')
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
.toast {
  position: fixed;
  left: 50%;

  transform: translateX(-50%);
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: #a94442;
  color: #fff;

  font-size: 14px;
  &.align-top {
    top: 0;
    border-radius: 0 0 4px 4px;
  }
  &.align-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 4px;
  }
  &.align-bottom {
    bottom: 0;
    border-radius: 4px 4px 0 0;
  }
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
</style>
