import type { App } from 'vue';
import _IconTray from './icon-tray.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTray.name = getComponentsPrefix() + _IconTray.name;

const IconTray = Object.assign(_IconTray, {
  install: (app: App) => {
    app.component(_IconTray.name, _IconTray);
  }
});

export default IconTray;