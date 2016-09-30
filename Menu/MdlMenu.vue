<template lang="html">
  <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect"
      :class="{
          'mdl-menu--top-left': topLeft,
          'mdl-menu--top-right': topRight,
          'mdl-menu--bottom-left': bottomLeft,
          'mdl-menu--bottom-right': bottomRight,
        }"
      data-mdl-for="demo-menu-top-right">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    topLeft: { type: Boolean, default: false },
    topRight: { type: Boolean, default: false },
    bottomLeft: { type: Boolean, default: false },
    bottomRight: { type: Boolean, default: false },
  },
  mounted: function () {
    console.log('menu ready')
    componentHandler.upgradeElement(this.$el)
  }
}
</script>

<style lang="css">
</style>
