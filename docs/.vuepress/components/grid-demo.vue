<template>
  <div>
    <h3>24网格</h3>
    <h4>预览</h4>
    <g-row>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="24">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
    <h4>代码</h4>
    <pre><code>{{codeDefault}}</code></pre>
    <h3>设置gutter</h3>
    <h4>预览</h4>
    <g-row gutter="10">
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="24">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
    <pre><code>{{codeWithGutter}}</code></pre>
    <h3>设置空隙</h3>
    <h4>预览</h4>
    <g-row gutter="10">
      <g-col span="3" offset="1">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="6" offset="2">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="10" offset="2">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="20" offset="4">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
    <pre><code>{{codeWithOffset}}</code></pre>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: { "g-row": Row, "g-col": Col },
  data() {
    return {
      codeDefault: `
    <g-row>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="24">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
    `,
      codeWithGutter: `
    <g-row gutter="10">
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="24">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
    `,
      codeWithOffset: `
    <g-row gutter="10">
      <g-col span="3" offset="1">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="inner-col">4</div>
      </g-col>
      <g-col span="4">
        <div class="inner-col">4</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="6" offset="2">
        <div class="inner-col">8</div>
      </g-col>
      <g-col span="8">
        <div class="inner-col">8</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="12">
        <div class="inner-col">12</div>
      </g-col>
      <g-col span="10" offset="2">
        <div class="inner-col">12</div>
      </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col span="20" offset="4">
        <div class="inner-col">24</div>
      </g-col>
    </g-row>
      `
    };
  }
};
</script>
<style lang="scss" scoped>
.row {
  box-sizing: border-box;
  margin-bottom: 10px;
  .col {
    box-sizing: border-box;
    background: #fff;

    .inner-col {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #bd0d13;
      border: solid 1px #bd0d13;
    }
  }
}
</style>


