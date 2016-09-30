<template lang="html">
  <dialog class="mdl-dialog">
    <h4 class="mdl-dialog__title">{{ title }}</h4>
    <div class="mdl-dialog__content">
      <slot></slot>
    </div>
    <div class="mdl-dialog__actions">
      <slot name="actions"></slot>
    </div>
  </dialog>
</template>

<script>
import MdlButton from './MdlButton'

export default {
  props: {
    title: { type: String, default: '' },
    visible: { type: Boolean, default: false }
  },
  watch: {
    visible: 'updateState'
  },
  mounted: function () {
    if (!this.$el.showModal) {
      window.dialogPolyfill.registerDialog(this.$el)
    }
    this.updateState()
  },
  methods: {
    updateState () {
      if (this.visible && !this.$el.open) {
        this.$el.showModal()
      } else if(this.$el.open) {
        this.$el.close()
      }
    }
  },
  components: {
    MdlButton
  }
}
</script>

<style lang="css">
</style>
