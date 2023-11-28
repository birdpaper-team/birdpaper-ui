import type { App } from 'vue';
import _IconFitness from './icon-fitness.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFitness.name = getComponentsPrefix() + _IconFitness.name;

const IconFitness = Object.assign(_IconFitness, {
  install: (app: App) => {
    app.component(_IconFitness.name, _IconFitness);
  }
});

export default IconFitness;