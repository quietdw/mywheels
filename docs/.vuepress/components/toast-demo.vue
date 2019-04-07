<template>
  <div>
    <h3>this.$toast</h3>
    <h4>预览</h4>
    <g-button @click="$toast('上方弹出内容')">上方弹出</g-button>
    <g-button @click="$toast('中间弹出内容',{align: 'middle'})">中间弹出</g-button>
    <g-button @click="$toast('下方弹出内容',{align: 'bottom'})">下方弹出</g-button>
    <h4>代码</h4>
    <pre><code>{{code1}}</code></pre>
    <h3>设置关闭按钮</h3>
    <h4>预览</h4>
    <g-button @click="onClickButton2">上方弹出</g-button>
    <h4>代码</h4>
    <pre><code>{{code2}}</code></pre>
    <h3>文本支持HTML</h3>
    <h4>预览</h4>
    <g-button @click="onClickButton3">上方弹出</g-button>
    <h4>代码</h4>
    <pre><code>{{code3}}</code></pre>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../src/button";
import Toast from "../../../src/toast";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: { "g-button": Button, "g-goast": Toast },
  data() {
    return {
      code1: `
    <g-button @click="$toast('上方弹出内容',{align: "top"})">上方弹出</g-button>
    <g-button @click="$toast('中间弹出内容',{align: "middle"})">中间弹出</g-button>
    <g-button @click="$toast('底部弹出内容',{align: "bottom"})">底部弹出</g-button>
    `,
      code2: `
    <g-button @click="onClickButton">上方弹出</g-button>

    methods: {
      onClickButton() {
        this.$toast("上方弹出内容", {
          closeButton: {
            text: "关闭",
            callback: () => {
              alert("关闭了");
            }
          }
        });
      }
    }
    `,
      code3: `
    <g-button @click="onClickButton">上方弹出</g-button>

    onClickButton() {
      this.$toast("<i>倾斜的上方弹出内容</i>", {
        closeButton: {
          text: "关闭"
        },
        enableHTML: true
      });
    }
    `
    };
  },
  methods: {
    onClickButton2() {
      this.$toast("上方弹出内容", {
        closeButton: {
          text: "关闭",
          callback: () => {
            alert("关闭了");
          }
        }
      });
    },
    onClickButton3() {
      this.$toast("<i>倾斜的上方弹出内容</i>", {
        closeButton: {
          text: "关闭"
        },
        enableHTML: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

