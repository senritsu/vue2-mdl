<template lang="html">
  <div class="mdl-layout__drawer">
    <slot name="header">
      <mdl-nav-link class="mdl-layout-title" to="/">{{ title }}</mdl-nav-link>
    </slot>
    <slot>
      <mdl-navigation :links="links"></mdl-navigation>
    </slot>
  </div>
</template>

<script>
import MdlNavLink from './MdlNavLink.vue'
import MdlNavigation from './MdlNavigation.vue'

export default {
  props: {
    title: { default: '' },
    links: { default: () => [] }
  },
  mounted: function () {
    console.log('drawer ready')
    componentHandler.upgradeElement(this.$el)
  },
  attached: function () {},
  components: {
    MdlNavLink,
    MdlNavigation
  }
}
</script>

<style lang="css">
</style>
