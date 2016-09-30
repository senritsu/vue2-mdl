<template lang="html">
  <div class="mdl-card__title" :class="{'mdl-card--expand': expand, 'mdl-card--border': border}">
     <h2 class="mdl-card__title-text">
       <slot></slot>
     </h2>
  </div>
</template>

<script>
export default {
  props: {
    expand: { type: Boolean, default: false },
    border: { type: Boolean, default: false }
  }
}
</script>

<style lang="css">
</style>
