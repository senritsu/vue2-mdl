import MdlButton from './MdlButton'
import MdlDialog from './MdlDialog'
import MdlDrawer from './MdlDrawer'
import MdlHeader from './MdlHeader'
import MdlIcon from './MdlIcon'
import MdlLayout from './MdlLayout'
import MdlNavigation from './MdlNavigation'
import MdlNavLink from './MdlNavLink'
import MdlSpacer from './MdlSpacer'

import MdlCard from './Card/MdlCard.vue'
import MdlCardActions from './Card/MdlCardActions.vue'
import MdlCardMedia from './Card/MdlCardMedia.vue'
import MdlCardMenu from './Card/MdlCardMenu.vue'
import MdlCardText from './Card/MdlCardText.vue'
import MdlCardTitle from './Card/MdlCardTitle.vue'

import MdlGrid from './Grid/MdlGrid.vue'
import MdlCell from './Grid/MdlCell.vue'

import MdlMenu from './Menu/MdlMenu.vue'
import MdlMenuAction from './Menu/MdlMenuAction.vue'
import MdlMenuButton from './Menu/MdlMenuButton.vue'

import MdlTextField from './TextField/MdlTextField.vue'
import MdlTextFieldExpandable from './TextField/MdlTextFieldExpandable.vue'
import MdlTextFieldMultiline from './TextField/MdlTextFieldMultiline.vue'

export const components = {
    MdlButton,
    MdlDialog,
    MdlDrawer,
    MdlHeader,
    MdlIcon,
    MdlLayout,
    MdlNavigation,
    MdlNavLink,
    MdlSpacer,
    MdlCard,
    MdlCardActions,
    MdlCardMedia,
    MdlCardMenu,
    MdlCardText,
    MdlCardTitle,
    MdlGrid,
    MdlCell,
    MdlMenu,
    MdlMenuAction,
    MdlMenuButton,
    MdlTextField,
    MdlTextFieldExpandable,
    MdlTextFieldMultiline
}

const plugin = {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
  }
}

export default plugin

export {
    MdlButton,
    MdlDialog,
    MdlDrawer,
    MdlHeader,
    MdlIcon,
    MdlLayout,
    MdlNavigation,
    MdlNavLink,
    MdlSpacer,
    MdlCard,
    MdlCardActions,
    MdlCardMedia,
    MdlCardMenu,
    MdlCardText,
    MdlCardTitle,
    MdlGrid,
    MdlCell,
    MdlMenu,
    MdlMenuAction,
    MdlMenuButton,
    MdlTextField,
    MdlTextFieldExpandable,
    MdlTextFieldMultiline
}
