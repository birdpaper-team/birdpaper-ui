import type { App } from 'vue';
import _IconCityGate from './icon-city-gate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCityGate.name = getComponentsPrefix() + _IconCityGate.name;

const IconCityGate = Object.assign(_IconCityGate, {
  install: (app: App) => {
    app.component(_IconCityGate.name, _IconCityGate);
  }
});

export default IconCityGate;