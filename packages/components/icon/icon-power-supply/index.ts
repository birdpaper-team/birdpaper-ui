import type { App } from 'vue';
import _IconPowerSupply from './icon-power-supply.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPowerSupply.name = getComponentsPrefix() + _IconPowerSupply.name;

const IconPowerSupply = Object.assign(_IconPowerSupply, {
  install: (app: App) => {
    app.component(_IconPowerSupply.name, _IconPowerSupply);
  }
});

export default IconPowerSupply;