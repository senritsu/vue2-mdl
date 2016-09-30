<template lang="html">
  <div class="mdl-cell" :class="[
      layoutClasses,
      {
        'mdl-cell--no-spacing': noSpacing,
        'mdl-cell--stretch': stretch,
        'mdl-cell--top': top,
        'mdl-cell--middle': middle,
        'mdl-cell--bottom': bottom,
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    noSpacing: { type: Boolean, default: false },
    col: { type: Number, default: 4 },
    offset: { type: Number, default: undefined },
    order: { type: Number, default: undefined },
    hide: { type: Boolean, default: false },
    stretch: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    middle: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    deviceSpecific: { type: Object, default: () => {} }
  },
  computed: {
    layoutClasses() {
      const classObject = {}
      for(const device of ['', 'phone', 'tablet', 'desktop']) {
        for(const setting of ['col', 'offset', 'order', 'hide']) {
          let value = null
          let key = ''

          window.$vm = this
          if(device && this.deviceSpecific && this.deviceSpecific[device] && this.deviceSpecific[device][setting]) {
            value = this.deviceSpecific[device][setting]
          } else if(!device) {
            value = this[setting]
          }

          if(!value || !device && setting === 'hide') {
            continue
          }

          switch(setting) {
            case 'col':
            case 'offset':
              key = `mdl-cell--${value}-${setting}`
              break
            case 'order':
              key = `mdl-cell--order-${value}`
              break
            case 'hide':
              key = `mdl-cell--hide`
              break
          }

          if(device) {
            key += `-${device}`
          }

          classObject[key] = true
        }
      }
      return classObject
    }
  }
}
</script>

<style lang="css">
</style>
