<template lang="html">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span v-if="title" class="mdl-layout-title">{{ title }}</span>
      <div class="mdl-layout-spacer"></div>
      <slot>
        <mdl-navigation :links="links" class="mdl-layout--large-screen-only"></mdl-navigation>
      </slot>
    </div>
  </header>
</template>

<script>
import MdlNavigation from './MdlNavigation.vue'

export default {
  props: {
    title: { default: '' },
    links: { default: () => [] }
  },
  mounted: function () {
    console.log('header ready')
    componentHandler.upgradeElement(this.$el)
    console.log(this.links)
  },
  attached: function () {},
  components: {
    MdlNavigation
  }
}
</script>

<style lang="css">
</style>
