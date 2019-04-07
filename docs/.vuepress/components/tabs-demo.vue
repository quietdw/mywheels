<template>
  <div>
    <h4>预览</h4>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <template slot="actions">
          <g-icon name="settings"></g-icon>
        </template>
        <g-tabs-item name="one" :disabled="true">one</g-tabs-item>
        <g-tabs-item name="two">two</g-tabs-item>
        <g-tabs-item name="three">three</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="one">one</g-tabs-pane>
        <g-tabs-pane name="two">two</g-tabs-pane>
        <g-tabs-pane name="three">three</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <h4>代码</h4>
    <pre><code>{{code}}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs/tabs";
import TabsHead from "../../../src/tabs/tabs-head";
import TabsBody from "../../../src/tabs/tabs-body";
import TabsItem from "../../../src/tabs/tabs-item";
import TabsPane from "../../../src/tabs/tabs-pane";
import Icon from "../../../src/icon";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-pane": TabsPane,
    "g-icon": Icon
  },
  data() {
    return {
      code: `
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <template slot="actions">
          <g-icon name="settings"></g-icon>
        </template>
        <g-tabs-item name="one" :disabled="true">one</g-tabs-item>
        <g-tabs-item name="two">two</g-tabs-item>
        <g-tabs-item name="three">three</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="one">one</g-tabs-pane>
        <g-tabs-pane name="two">two</g-tabs-pane>
        <g-tabs-pane name="three">three</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `,
      selectedTab: "one"
    };
  }
};
</script>
<style lang="scss" scoped>
.g-icon {
  fill: #bd0d13;
}
</style>

