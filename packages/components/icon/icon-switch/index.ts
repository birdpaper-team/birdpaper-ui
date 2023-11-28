import type { App } from 'vue';
import _IconSwitch from './icon-switch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwitch.name = getComponentsPrefix() + _IconSwitch.name;

const IconSwitch = Object.assign(_IconSwitch, {
  install: (app: App) => {
    app.component(_IconSwitch.name, _IconSwitch);
  }
});

export default IconSwitch;