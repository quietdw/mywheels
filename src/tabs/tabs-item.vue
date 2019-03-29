<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MyTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: Boolean | Number,
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selected", data => {
      console.log(data);
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
}
</style>
