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
      type: [Number, String],
      default: ""
    },
    offset: {
      type: [Number, String],
      default: ""
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
      return {
        [span && `col-${span}`]: true,
        [offset && `offset-${offset}`]: true,
        ...(ipad && {
          [span && `col-ipad-${ipad.span}`]: true,
          [offset && `offset-ipad-${ipad.offset}`]: true
        }),
        ...(narrowPc && {
          [span && `col-narrowPc-${narrowPc.span}`]: true,
          [offset && `offset-narrowPc-${narrowPc.offset}`]: true
        }),
        ...(pc && {
          [span && `col-pc-${pc.span}`]: true,
          [offset && `offset-pc-${pc.offset}`]: true
        }),
        ...(widePc && {
          [span && `col-widePc-${widePc.span}`]: true,
          [offset && `offset-widePc-${widePc.offset}`]: true
        })
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: aquamarine;

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

