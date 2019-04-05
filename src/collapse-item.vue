<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyCollapseItem",
  data() {
    return { open: false, single: false };
  },
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", names => {
        if (names.indexOf(this.name) === -1) {
          this.open = false;
        } else this.open = true;
      });
  },
  methods: {
    toggle() {
      if (this.open === false) {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      } else {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: grey;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $border-color;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content {
    padding: 8px;
  }
}
</style>
