<template>
  <div class="popover" @click="xxx">
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
    xxx() {
      this.visible = !this.visible;
      setTimeout(() => {
        if (this.visible) {
          document.body.appendChild(this.$refs.contentWapper);
          let {
            width,
            height,
            left,
            top
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          let content = this.$refs.contentWapper;
          content.style.left = `${left}px`;
          content.style.top = `${top}px`;
          document.addEventListener("click", eventHandler);
        }
      }, 0);

      let eventHandler = () => {
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };
    }
  }
};
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 100px 0 0 100px;
  .content-wapper {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
.content-wapper {
  position: absolute;
  transform: translateY(-100%);
}
</style>