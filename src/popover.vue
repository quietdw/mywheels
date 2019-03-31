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
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWapper);
          let {
            width,
            height,
            left,
            top
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWapper.style.top = top + window.scrollY + "px";
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
            console.log("docu隐藏了popover");
          };
          document.addEventListener("click", eventHandler);
        });
      } else {
        console.log("vm隐藏了popover");
      }
    }
  }
};
</script>
<style scoped lang="scss">
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
}
</style>