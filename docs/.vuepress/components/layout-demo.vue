<template>
  <div>
    <h3>一般布局</h3>
    <h4>预览</h4>
    <g-layout>
      <g-header style="height:100px;background: #ccc;">header</g-header>
      <g-content style="height:100px;background: #ddd;">content</g-content>
      <g-footer style="height:100px;background: #eee;">footer</g-footer>
    </g-layout>
    <h4>代码</h4>
    <pre><code>{{code1}}</code></pre>
    <h3>有sider的布局</h3>
    <h4>预览</h4>
    <g-layout>
      <g-sider style="width:200px;background: #aaa;">sider</g-sider>
      <g-layout>
        <g-header style="height:100px;background: #ccc;">header</g-header>
        <g-content style="height:100px;background: #ddd;">content</g-content>
        <g-footer style="height:100px;background: #eee;">footer</g-footer>
      </g-layout>
    </g-layout>
    <h4>代码</h4>
    <pre><code>{{code2}}</code></pre>
    <h3>有sider的布局</h3>
    <h4>预览</h4>
    <g-layout>
      <g-layout>
        <g-header style="height:100px;background: #ccc;">header</g-header>
        <g-layout>
          <g-sider style="width:200px;background: #aaa;">sider</g-sider>
          <g-content style="height:100px;background: #ddd;">content</g-content>
        </g-layout>
        <g-footer style="height:100px;background: #eee;">footer</g-footer>
      </g-layout>
    </g-layout>
    <pre><code>{{code3}}</code></pre>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Sider from "../../../src/sider";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
export default {
  components: {
    "g-layout": Layout,
    "g-sider": Sider,
    "g-header": Header,
    "g-content": Content,
    "g-footer": Footer
  },
  data() {
    return {
      code1: `
    <g-layout>
      <g-header style="height:100px;background: #ccc;">header</g-header>
      <g-content style="height:100px;background: #ddd;">content</g-content>
      <g-footer style="height:100px;background: #eee;">footer</g-footer>
    </g-layout>
    `,
      code2: `
    <g-layout>
      <g-sider style="width:200px;background: #aaa;">sider</g-sider>
      <g-layout>
        <g-header style="height:100px;background: #ccc;">header</g-header>
        <g-content style="height:100px;background: #ddd;">content</g-content>
        <g-footer style="height:100px;background: #eee;">footer</g-footer>
      </g-layout>
    </g-layout>`,
      code3: `
    <g-layout>
      <g-layout>
        <g-header style="height:100px;background: #ccc;">header</g-header>
        <g-layout>
          <g-sider style="width:200px;background: #aaa;">sider</g-sider>
          <g-content style="height:100px;background: #ddd;">content</g-content>
        </g-layout>
        <g-footer style="height:100px;background: #eee;">footer</g-footer>
      </g-layout>
    </g-layout>
    `
    };
  }
};
</script>

