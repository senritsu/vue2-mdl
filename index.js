import * as Card from './MdlCard'
import * as Grid from './MdlGrid'
import * as Menu from './MdlMenu'
import * as TextField from './MdlTextField'

import MdlButton from './MdlButton'
import MdlDialog from './MdlDialog'
import MdlDrawer from './MdlDrawer'
import MdlHeader from './MdlHeader'
import MdlIcon from './MdlIcon'
import MdlLayout from './MdlLayout'
import MdlNavigation from './MdlNavigation'
import MdlNavLink from './MdlNavLink'
import MdlSpacer from './MdlSpacer'

export const obj = {
    MdlButton,
    MdlDialog,
    MdlDrawer,
    MdlHeader,
    MdlIcon,
    MdlLayout,
    MdlNavigation,
    MdlNavLink,
    MdlSpacer
}

Object.assign(obj, Card)
Object.assign(obj, Grid)
Object.assign(obj, Menu)
Object.assign(obj, TextField)

export default obj
