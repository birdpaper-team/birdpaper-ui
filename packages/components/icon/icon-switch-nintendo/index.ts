import type { App } from 'vue';
import _IconSwitchNintendo from './icon-switch-nintendo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitchNintendo.name = getComponentsPrefix() + _IconSwitchNintendo.name;

const IconSwitchNintendo = Object.assign(_IconSwitchNintendo, {
  install: (app: App) => {
    app.component(_IconSwitchNintendo.name, _IconSwitchNintendo);
  }
});

export default IconSwitchNintendo;