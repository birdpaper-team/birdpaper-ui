import type { App } from 'vue';
import _IconSolarEnergy from './icon-solar-energy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSolarEnergy.name = getComponentsPrefix() + _IconSolarEnergy.name;

const IconSolarEnergy = Object.assign(_IconSolarEnergy, {
  install: (app: App) => {
    app.component(_IconSolarEnergy.name, _IconSolarEnergy);
  }
});

export default IconSolarEnergy;