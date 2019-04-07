<template>
  <div class="popover" ref="popover">
    <div class="content-wapper" v-if="visible" ref="contentWapper" :class="classes">
      <slot name="content" v-bind:close="close"></slot>
    </div>
    <span class="trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyPppover",
  props: {
    position: {
      type: String,
      default: "top",
      valitator(value) {
        return ["top", "right", "bottom", "left"].indexOf(value) !== -1;
      }
    },
    trigger: {
      type: String,
      default: "click",
      valitator(value) {
        return ["click", "hover"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    classes() {
      return {
        [`position-${this.position}`]: this.position
      };
    },
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper.addEventListener("click", this.onClick);
    } else {
      this.$refs.triggerWrapper.addEventListener("mouseenter", () => {
        this.show();
      });
      this.$refs.triggerWrapper.addEventListener("mouseleave", () => {
        this.close();
      });
    }
  },
  destory() {
    if (this.trigger === "click") {
      this.$refs.triggerWrapper.removeEventListener("click", this.onClick);
    } else {
      this.$refs.triggerWrapper.removeEventListener("mouseenter", () => {
        this.show();
      });
      this.$refs.triggerWrapper.removeEventListener("mouseleave", () => {
        this.close();
      });
    }
  },
  methods: {
    positionContent() {
      let { contentWapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWapper);
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();

      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        right: {
          left: left + width + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: { left: left + window.scrollX, top: top + window.scrollY }
      };

      contentWapper.style.left = positions[this.position].left + "px";
      contentWapper.style.top = positions[this.position].top + "px";
    },
    eventHandler(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover.contains(e.target) ||
          this.$refs.popover === e.target)
      ) {
        return;
      }
      if (
        this.$refs.contentWapper &&
        (this.$refs.contentWapper.contains(e.target) ||
          this.$refs.contentWapper === e.target)
      ) {
        return;
      }
      this.close();
    },
    show() {
      this.visible = true;
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.eventHandler);
      }, 0);
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.show();
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
$border-color: #999;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  & .content-wapper {
    visibility: hidden;
  }
  & > .trigger-wrapper {
    display: inline-block;
    vertical-align: top;
  }
}
.content-wapper {
  position: absolute;
  border: $border-color solid 1px;
  border-radius: $border-radius;
  padding: 0.5em;
  max-width: 20em;
  word-break: break-all;
  background: #fff;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7));
  & ::before,
  &::after {
    content: "";
    position: absolute;
    border: solid 6px transparent;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    & ::before,
    &::after {
      border-bottom: none;
      border-top: $border-color solid 6px;
      left: 10px;
      top: 100%;
    }
    &::after {
      border-top: #fff solid 6px;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;
    & ::before,
    &::after {
      border-top: none;
      border-bottom: $border-color solid 6px;
      left: 10px;
      bottom: 100%;
    }
    &::after {
      border-bottom: #fff solid 6px;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    top: 50%;
    margin-left: -10px;
    & ::before,
    &::after {
      border-right: none;
      border-left: $border-color solid 6px;
      top: 10px;
      left: 100%;
    }
    &::after {
      border-left: #fff solid 6px;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    top: 50%;
    margin-left: 10px;
    & ::before,
    &::after {
      border-left: none;
      border-right: $border-color solid 6px;
      top: 10px;
      right: 100%;
    }
    &::after {
      border-right: #fff solid 6px;
      right: calc(100% - 1px);
    }
  }
}
</style>