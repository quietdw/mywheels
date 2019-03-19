<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:['icon','iconPosition'],
}
</script>

<style lang="scss">
    .g-button{
      font-size: var(--font-size);
      height: var(--button-height);
      padding: 0 1em;
      border-radius: var(--border-radius);
      border: 1px solid var(--border-color);
      background: var(--botton-bg);
      color: var(--color);
      cursor: pointer;
      display: inline-flex;
      vertical-align: top;
      justify-content: center;
      align-items: center;
      &:hover{
       border-color: var(--border-hover-color);
      }

      &:active{
       background-color: var(--button-active-bg);
      }

      &:focus{
       outline: none;
      }
      &.icon-right>.icon{
        margin-right: .3em;
      }
      &.icon-left>.icon{
        order:1;
        margin-left: .3em;
      }
    }
</style>

