import type { App } from 'vue';
import _IconElectricIron from './icon-electric-iron.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconElectricIron.name = getComponentsPrefix() + _IconElectricIron.name;

const IconElectricIron = Object.assign(_IconElectricIron, {
  install: (app: App) => {
    app.component(_IconElectricIron.name, _IconElectricIron);
  }
});

export default IconElectricIron;