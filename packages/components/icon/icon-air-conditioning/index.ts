import type { App } from 'vue';
import _IconAirConditioning from './icon-air-conditioning.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirConditioning.name = getComponentsPrefix() + _IconAirConditioning.name;

const IconAirConditioning = Object.assign(_IconAirConditioning, {
  install: (app: App) => {
    app.component(_IconAirConditioning.name, _IconAirConditioning);
  }
});

export default IconAirConditioning;