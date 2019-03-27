<template>
  <transition name="hide">
    <div class="sider" v-if="visible">
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
  transition: all 1s ease;
}
.hide-enter,
.hide-leave-to {
  margin-left: -73px;
  opacity: 0;
}
</style>
