<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyToast"
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
  font-size: 16px;
}
</style>
