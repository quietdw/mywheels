<template>
  <div>
    <h3>单选</h3>
    <h4>预览</h4>
    <g-collapse single :selected.sync="selectedTab1">
      <g-collapse-item title="标题1" name="1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
    </g-collapse>
    <p>被选中了的：{{selectedTab1}}</p>
    <h4>代码</h4>
    <pre><code>{{code1}}</code></pre>
    <h3>多选</h3>
    <h4>预览</h4>
    <g-collapse :selected.sync="selectedTab2">
      <g-collapse-item title="标题1" name="1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
    </g-collapse>
    <p>被选中了的：{{selectedTab2}}</p>
    <h4>代码</h4>
    <pre><code>{{code2}}</code></pre>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: { "g-collapse": Collapse, "g-collapse-item": CollapseItem },
  data() {
    return {
      selectedTab1: ["1"],
      selectedTab2: ["2"],
      code1: `
    <g-collapse single :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
    </g-collapse>
    <p>被选中了的：{{selectedTab}}</p>
    `,
      code2: `
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque ab esse
        voluptates dolores at asperiores ad? Ipsam voluptatem consectetur corrupti alias nisi, labore maiores cumque
        eaque harum, vero accusamus.
      </g-collapse-item>
    </g-collapse>
    <p>被选中了的：{{selectedTab}}</p>
    `
    };
  }
};
</script>
