import type { App } from 'vue';
import _IconWindows from './icon-windows.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWindows.name = getComponentsPrefix() + _IconWindows.name;

const IconWindows = Object.assign(_IconWindows, {
  install: (app: App) => {
    app.component(_IconWindows.name, _IconWindows);
  }
});

export default IconWindows;