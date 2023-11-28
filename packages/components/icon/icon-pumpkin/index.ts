import type { App } from 'vue';
import _IconPumpkin from './icon-pumpkin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPumpkin.name = getComponentsPrefix() + _IconPumpkin.name;

const IconPumpkin = Object.assign(_IconPumpkin, {
  install: (app: App) => {
    app.component(_IconPumpkin.name, _IconPumpkin);
  }
});

export default IconPumpkin;