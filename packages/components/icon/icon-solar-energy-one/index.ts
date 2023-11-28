import type { App } from 'vue';
import _IconSolarEnergyOne from './icon-solar-energy-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSolarEnergyOne.name = getComponentsPrefix() + _IconSolarEnergyOne.name;

const IconSolarEnergyOne = Object.assign(_IconSolarEnergyOne, {
  install: (app: App) => {
    app.component(_IconSolarEnergyOne.name, _IconSolarEnergyOne);
  }
});

export default IconSolarEnergyOne;