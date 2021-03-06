/**
 * @export [openMenu, closeMenu]
 * @description actions for opening/closing (showing/hiding) top level menu navigation
 * @implements redux-actions for easier to read/write react-redux actions
 * @see https://github.com/acdlite/redux-actions
 *
 * @interface
 */
import { createAction } from 'redux-actions'

export const CLOSE_MENU = 'CLOSE_MENU'
export const OPEN_MENU = 'OPEN_MENU'

export const closeMenu = createAction(CLOSE_MENU, () => false)
export const openMenu = createAction(OPEN_MENU, () => true)