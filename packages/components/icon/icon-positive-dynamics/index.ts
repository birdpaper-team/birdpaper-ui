import type { App } from 'vue';
import _IconPositiveDynamics from './icon-positive-dynamics.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPositiveDynamics.name = getComponentsPrefix() + _IconPositiveDynamics.name;

const IconPositiveDynamics = Object.assign(_IconPositiveDynamics, {
  install: (app: App) => {
    app.component(_IconPositiveDynamics.name, _IconPositiveDynamics);
  }
});

export default IconPositiveDynamics;