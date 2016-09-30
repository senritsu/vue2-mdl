<template lang="html">
  <button @click="click"
    class="mdl-button mdl-js-button"
    :class="{
      'mdl-button--fab': fab,
      'mdl-button--raised': raised,
      'mdl-button--colored': colored,
      'mdl-button--accent': accent,
      'mdl-button--icon': iconButton,
      'mdl-js-ripple-effect': ripple
      }">
    <mdl-icon v-if="icon">{{ icon }}</mdl-icon>
    <slot></slot>
  </button>
</template>

<script>
import MdlIcon from './MdlIcon.vue'

export default {
  props: {
    to: { type: String, default: '' },
    fab: { type: Boolean, default: false },
    raised: { type: Boolean, default: false },
    colored: { type: Boolean, default: false },
    accent: { type: Boolean, default: false },
    iconButton: { type: Boolean, default: false },
    ripple: { type: Boolean, default: true },
    icon: { type: String, default: '' }
  },
  methods: {
    click(event) {
      if (this.to) {
        this.$router.push(this.to)
        return false
      }
      this.$emit('click', event)
    }
  },
  mounted: function () {
    console.log('button ready')
    componentHandler.upgradeElement(this.$el)
  },
  components: {
    MdlIcon
  }
}
</script>

<style lang="css">
</style>
