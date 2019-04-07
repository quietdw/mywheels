<template>
  <div>
    <h4>预览</h4>
    <g-button>默认按钮</g-button>
    <g-button loading>加载</g-button>
    <g-button>
      <g-icon name="download"></g-icon>有图标的
    </g-button>
    <g-button iconPosition="right">
      <g-icon name="download"></g-icon>图标在右边的
    </g-button>
    <h4>代码</h4>
    <pre><code>{{code}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Icon from "../../../src/icon";
export default {
  components: { "g-button": Button, "g-icon": Icon },
  data() {
    return {
      code: `
    <g-button>默认按钮</g-button>
    <g-button loading>加载</g-button>
    <g-button>
      <g-icon name="settings"></g-icon>有图标的
    </g-button>
    <g-button iconPosition="right">
      <g-icon name="settings"></g-icon>有图标的
    </g-button>
    `
    };
  }
};
</script>
