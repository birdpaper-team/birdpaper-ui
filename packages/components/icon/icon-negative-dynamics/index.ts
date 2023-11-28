import type { App } from 'vue';
import _IconNegativeDynamics from './icon-negative-dynamics.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNegativeDynamics.name = getComponentsPrefix() + _IconNegativeDynamics.name;

const IconNegativeDynamics = Object.assign(_IconNegativeDynamics, {
  install: (app: App) => {
    app.component(_IconNegativeDynamics.name, _IconNegativeDynamics);
  }
});

export default IconNegativeDynamics;