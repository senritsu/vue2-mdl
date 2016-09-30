<template lang="html">
  <div class="mdl-textfield mdl-js-textfield" :class="{'mdl-textfield--floating-label': floatingLabel}">
    <input class="mdl-textfield__input"
      :type="type"
      :id="id"
      :name="id"
      :pattern="pattern" 
      :value="value"
      @input="$emit('input', $event.target.value)">
    </input>
    <label class="mdl-textfield__label" :for="id">
      <slot></slot>
    </label>
    <span v-if="pattern" class="mdl-textfield__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    floatingLabel: { type: Boolean, default: false },
    pattern: { type: String, default: undefined },
    error: { type: String, default: '' },
    id: { type: String, default: '' },
    type: { type: String, default: 'text' }
  },
  mounted: function () {
    console.log('text field ready')
    componentHandler.upgradeElement(this.$el)
  }
}
</script>

<style lang="css">
</style>
