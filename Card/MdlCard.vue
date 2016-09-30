<template lang="html">
  <div class="mdl-card" :class="[shadowClass, {panel}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    panel: { type: Boolean, default: false },
    shadow: { type: Number, default: 2 }
  },
  computed: {
    shadowClass() { return this.shadow ? `mdl-shadow--${this.shadow}dp` : '' }
  },
  mounted: function () {
    console.log('card ready')
    componentHandler.upgradeElement(this.$el)
  }
}
</script>

<style lang="css">
.panel {
  min-height: initial;
}
.mdl-card {
  width: 100%;
}
</style>
