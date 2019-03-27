<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "my-g-col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClass = this.createClass;
      return {
        ...createClass({ span, offset }),
        ...createClass(ipad, "ipad-"),
        ...createClass(narrowPc, "narrow-pc-"),
        ...createClass(pc, "pc-"),
        ...createClass(widePc, "wide-pc-")
      };
    }
  },
  methods: {
    createClass(obj, str = "") {
      // str ： ipad- pc-
      let spanObj;
      let offsetObj;
      if (obj) {
        if (obj.span) {
          spanObj = { [obj.span && `col-${str}${obj.span}`]: true };
        }
        if (obj.offset) {
          offsetObj = { [`offset-${str}${obj.offset}`]: true };
        }
        obj = { ...spanObj, ...offsetObj };
      } else {
        obj = {};
        return;
      }
      return obj;
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: aquamarine;
  border: salmon solid 1px;
  @media (min-width: 0) {
    $class: col-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 577px) {
    $class: col-ipad-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-ipad-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class: col-narrow-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-narrow-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    $class: col-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class: col-wide-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class: offset-wide-pc-;

    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>

