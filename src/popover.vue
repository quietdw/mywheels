<template>
  <div class="popover" @click="xxx" ref="popover">
    <div class="content-wapper" v-if="visible" ref="contentWapper">
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
  data() {
    return {
      visible: false
    };
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
      this.$refs.contentWapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWapper.style.top = top + window.scrollY + "px";
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
  .content-wapper {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
.content-wapper {
  position: absolute;
  transform: translateY(-100%);
  border: $border-color solid 1px;
  border-radius: $border-radius;
  padding: 0.5em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;
  background: #fff;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7));
  & ::before,
  &::after {
    content: "";
    position: absolute;
    border: solid 6px transparent;
    border-top: $border-color solid 6px;
    left: 10px;
    top: 100%;
  }

  &::after {
    border-top: #fff solid 6px;
    top: calc(100% - 1px);
  }
}
</style>