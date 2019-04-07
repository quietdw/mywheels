<template>
  <div>
    <h3>点击弹出</h3>
    <h4>预览</h4>
    <g-popover>
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>右边弹出</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>底部弹出</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>左边弹出</g-button>
    </g-popover>
    <h4>代码</h4>
    <pre><code>{{code1}}</code></pre>
    <h3>hover弹出</h3>
    <h4>预览</h4>
    <g-popover trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>右边弹出</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>底部弹出</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>左边弹出</g-button>
    </g-popover>
    <h4>代码</h4>
    <pre><code>{{code2}}</code></pre>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: { "g-popover": Popover, "g-button": Button },
  data() {
    return {
      code1: `
    <g-popover>
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>右边弹出</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>底部弹出</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>左边弹出</g-button>
    </g-popover>
    `,
      code2: `
    <g-popover trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>右边弹出</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>底部弹出</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      </template>
      <g-button>左边弹出</g-button>
    </g-popover>
    `
    };
  }
};
</script>

