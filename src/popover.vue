<template>
  <div class="popover" @click="xxx">
    <div class="content-wapper" v-if="visible">
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