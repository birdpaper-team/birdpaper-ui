import type { App } from 'vue';
import _IconAppSwitch from './icon-app-switch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppSwitch.name = getComponentsPrefix() + _IconAppSwitch.name;

const IconAppSwitch = Object.assign(_IconAppSwitch, {
  install: (app: App) => {
    app.component(_IconAppSwitch.name, _IconAppSwitch);
  }
});

export default IconAppSwitch;