<template lang="html">
  <i class="material-icons" :class="{small, large, huge}">
    <slot></slot>
  </i>
</template>

<script>
export default {
  props: {
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    huge: { type: Boolean, default: false },
  }
}
</script>

<style lang="css" scoped>

i.material-icons {
  display: inline-flex;
  vertical-align: middle;
}

.small {
  font-size: 18px;
}

.large {
  font-size: 36px;
}

.huge {
  font-size: 48px;
}

</style>
