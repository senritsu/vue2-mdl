<template lang="html">
  <li class="mdl-menu__item" :class="{'mdl-menu__item--full-bleed-divider': divider}">
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    divider: { type: Boolean, default: false }
  }
}
</script>

<style lang="css">
</style>
