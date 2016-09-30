<template lang="html">
  <button class="mdl-button mdl-js-button mdl-button--icon">
    <mdl-icon>
      <slot></slot>
    </mdl-icon>
  </button>
</template>

<script>
import MdlIcon from '../MdlIcon.vue'

export default {
  mounted: function () {
    console.log('menu button ready')
    componentHandler.upgradeElement(this.$el)
  },
  components: {
    MdlIcon
  }
}
</script>

<style lang="css">
</style>
