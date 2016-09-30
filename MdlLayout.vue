<template lang="html">
  <div class="mdl-layout mdl-js-layout" :class="{ 'mdl-layout--fixed-header': fixedHeader, 'mdl-layout--fixed-drawer': fixedDrawer }">
    <slot name="header">
      <mdl-header :title="title" :links="headerLinks"></mdl-header>
    </slot>
    <slot name="drawer">
      <mdl-drawer :title="title" :links="drawerLinks"></mdl-drawer>
    </slot>
    <main class="mdl-layout__content">
      <div class="page-content">
        <slot>
          <router-view><router-view>
        </slot>
      </div>
    </main>
  </div>
</template>

<script>
import MdlHeader from './MdlHeader.vue'
import MdlDrawer from './MdlDrawer.vue'
import MdlNavigation from './MdlNavigation.vue'

export default {
  props: {
    fixedHeader: { default: true },
    fixedDrawer: { default: false },
    title: { default: '' },
    headerLinks: { default: () => [] },
    drawerLinks: { default: () => [] }
  },
  mounted: function () {
    console.log('layout ready')
    componentHandler.upgradeElement(this.$el)
  },
  attached: function () {},
  components: {
    MdlHeader,
    MdlDrawer,
    MdlNavigation
  }
}
</script>

<style lang="css">
</style>
