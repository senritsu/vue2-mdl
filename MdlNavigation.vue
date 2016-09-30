<template lang="html">
  <nav class="mdl-navigation">
    <slot>
      <mdl-nav-link v-for="link of links" :to="link.path">{{ link.text }}</mdl-nav-link>
    </slot>
  </nav>
</template>

<script>
import MdlNavLink from './MdlNavLink.vue'

export default {
  props: {
    links: { default: () => [] }
  },
  mounted: function () {
    console.log('navigation ready')
    //componentHandler.upgradeElement(this.$el)
  },
  attached: function () {},
  components: {
    MdlNavLink
  }
}
</script>

<style lang="css">
</style>
