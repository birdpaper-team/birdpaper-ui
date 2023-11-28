import type { App } from 'vue';
import _IconDarkMode from './icon-dark-mode.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDarkMode.name = getComponentsPrefix() + _IconDarkMode.name;

const IconDarkMode = Object.assign(_IconDarkMode, {
  install: (app: App) => {
    app.component(_IconDarkMode.name, _IconDarkMode);
  }
});

export default IconDarkMode;