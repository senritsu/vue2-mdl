<template lang="html">
  <div class="mdl-textfield mdl-js-textfield">
    <textarea class="mdl-textfield__input" type="text"
      :rows="rows"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)">
    </textarea>
    <label class="mdl-textfield__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    rows: { type: Number, default: 1 },
    id: { type: String, default: '' }
  },
  mounted: function () {
    console.log('multiline text field ready')
    componentHandler.upgradeElement(this.$el)
  }
}
</script>

<style lang="css">
</style>
