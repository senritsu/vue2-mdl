<template lang="html">
  <div class="mdl-card__media" :class="{'mdl-card--expand': expand, 'mdl-card--border': border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    expand: { type: Boolean, default: false },
    border: { type: Boolean, default: false }
  }
}
</script>

<style lang="css">
</style>
