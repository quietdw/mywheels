<template>
  <div class="popover" @click="xxx">
    <div class="content-wapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  methods: {
    xxx() {
      this.visible = !this.visible;
      setTimeout(() => {
        if (this.visible) {
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
  margin: 100px;
  .content-wapper {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>