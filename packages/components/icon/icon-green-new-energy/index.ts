import type { App } from 'vue';
import _IconGreenNewEnergy from './icon-green-new-energy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGreenNewEnergy.name = getComponentsPrefix() + _IconGreenNewEnergy.name;

const IconGreenNewEnergy = Object.assign(_IconGreenNewEnergy, {
  install: (app: App) => {
    app.component(_IconGreenNewEnergy.name, _IconGreenNewEnergy);
  }
});

export default IconGreenNewEnergy;