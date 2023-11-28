import type { App } from 'vue';
import _IconApplicationMenu from './icon-application-menu.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconApplicationMenu.name = getComponentsPrefix() + _IconApplicationMenu.name;

const IconApplicationMenu = Object.assign(_IconApplicationMenu, {
  install: (app: App) => {
    app.component(_IconApplicationMenu.name, _IconApplicationMenu);
  }
});

export default IconApplicationMenu;