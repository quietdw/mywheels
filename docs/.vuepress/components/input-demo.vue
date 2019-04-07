<template>
  <div>
    <h3>简单用法</h3>
    <h4>预览</h4>
    <g-input value="李四"></g-input>
    <g-input value="王二" disabled></g-input>
    <g-input value="麻子" error="姓名太短"></g-input>
    <h3>双向绑定</h3>
    <h4>预览</h4>
    <g-input value="张三" v-model="message"></g-input>
    <p>{{message}}</p>
    <h4>代码</h4>
    <pre><code>{{code}}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: { "g-input": Input },
  data() {
    return {
      code: `
    <g-input value="李四"></g-input>
    <g-input value="王二" disabled></g-input>
    <g-input value="麻子" error="姓名太短"></g-input>
    <g-input value="张三" v-model="message"></g-input>
    <p>{{message}}</p>
    `,
      message: "张三"
    };
  }
};
</script>
