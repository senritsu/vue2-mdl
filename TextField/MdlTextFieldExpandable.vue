<template lang="html">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
    <label class="mdl-button mdl-js-button mdl-button--icon" :for="id">
      <i class="material-icons">
        <slot></slot>
      </i>
    </label>
    <div class="mdl-textfield__expandable-holder">
      <input class="mdl-textfield__input" type="text"
        :id="id"
        :value="value"
        @input="$emit('input', $event.target.value)">
      <label class="mdl-textfield__label" :for="id"></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
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
