import type { App } from 'vue';
import _IconNintendoSwitch from './icon-nintendo-switch.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNintendoSwitch.name = getComponentsPrefix() + _IconNintendoSwitch.name;

const IconNintendoSwitch = Object.assign(_IconNintendoSwitch, {
  install: (app: App) => {
    app.component(_IconNintendoSwitch.name, _IconNintendoSwitch);
  }
});

export default IconNintendoSwitch;