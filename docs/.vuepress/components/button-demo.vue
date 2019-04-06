<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button loading>加载</g-button>
    <g-button>
      <g-icon name="settings"></g-icon>有图标的
    </g-button>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Icon from "../../../src/icon";
export default {
  components: { "g-button": Button, "g-icon": Icon }
};
</script>
