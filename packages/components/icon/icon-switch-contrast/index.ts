import type { App } from 'vue';
import _IconSwitchContrast from './icon-switch-contrast.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitchContrast.name = getComponentsPrefix() + _IconSwitchContrast.name;

const IconSwitchContrast = Object.assign(_IconSwitchContrast, {
  install: (app: App) => {
    app.component(_IconSwitchContrast.name, _IconSwitchContrast);
  }
});

export default IconSwitchContrast;