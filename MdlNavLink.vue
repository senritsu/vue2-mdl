<template lang="html">
  <router-link class="mdl-navigation__link" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: { default: '/'}
  }
}
</script>

<style lang="css">
</style>
