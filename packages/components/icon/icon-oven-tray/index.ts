import type { App } from 'vue';
import _IconOvenTray from './icon-oven-tray.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOvenTray.name = getComponentsPrefix() + _IconOvenTray.name;

const IconOvenTray = Object.assign(_IconOvenTray, {
  install: (app: App) => {
    app.component(_IconOvenTray.name, _IconOvenTray);
  }
});

export default IconOvenTray;