import type { App } from 'vue';
import _IconPowerSupplyOne from './icon-power-supply-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPowerSupplyOne.name = getComponentsPrefix() + _IconPowerSupplyOne.name;

const IconPowerSupplyOne = Object.assign(_IconPowerSupplyOne, {
  install: (app: App) => {
    app.component(_IconPowerSupplyOne.name, _IconPowerSupplyOne);
  }
});

export default IconPowerSupplyOne;