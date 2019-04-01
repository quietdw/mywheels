<template>
  <div class="popover" @click="xxx" ref="popover">
    <div class="content-wapper" v-if="visible" ref="contentWapper" :class="classes">
      <slot name="content"></slot>
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
    }
  },
  mounted() {},
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWapper);
      let {
        width,
        height,
        left,
        top
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "right") {
        this.$refs.contentWapper.style.left =
          left + width + window.scrollX + "px";
        this.$refs.contentWapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWapper.style.top =
          top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        this.$refs.contentWapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWapper.style.top = top + window.scrollY + "px";
      }
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
      console.log("关闭了");
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    xxx(event) {
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
    margin-top: -10px;
    margin-left: -10px;
    & ::before,
    &::after {
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
    margin-top: -10px;
    margin-left: 10px;
    & ::before,
    &::after {
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