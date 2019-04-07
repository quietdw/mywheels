<template>
  <transition name="hide">
    <div class="g-sider" v-if="visible">
      <slot></slot>
      <button @click="hideSider">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MySider",
  data() {
    return {
      visible: true
    };
  },
  methods: {
    hideSider() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.hide-leave-active {
  transition: all 0.3s;
}
.hide-enter,
.hide-leave-to {
  margin-left: -200px;
  opacity: 0;
}
.g-sider {
  position: relative;
  button {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
