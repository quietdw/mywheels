<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
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
          callback: undefined
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.atuoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
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
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: #a94442;
  color: #fff;
  border-radius: 0 0 4px 4px;
  font-size: 14px;
  & > .line {
    border-left: solid white 1px;
    display: block;
    height: 100%;
    margin: 0 10px;
  }
  & > .close {
    cursor: pointer;
  }
}
</style>
