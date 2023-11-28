import type { App } from 'vue';
import _IconWindTurbine from './icon-wind-turbine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWindTurbine.name = getComponentsPrefix() + _IconWindTurbine.name;

const IconWindTurbine = Object.assign(_IconWindTurbine, {
  install: (app: App) => {
    app.component(_IconWindTurbine.name, _IconWindTurbine);
  }
});

export default IconWindTurbine;