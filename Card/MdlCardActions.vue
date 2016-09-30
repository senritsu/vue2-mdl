<template lang="html">
  <div class="mdl-card__actions" :class="{'mdl-card--expand': expand, 'mdl-card--border': border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    expand: { type: Boolean, default: false },
    border: { type: Boolean, default: false }
  },
  mounted: function () {
    console.log('card actions ready')
    componentHandler.upgradeElement(this.$el)
  },
}
</script>

<style lang="css">
.mdl-card__actions {
  display: flex;
}
</style>
