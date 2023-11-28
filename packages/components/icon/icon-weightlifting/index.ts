import type { App } from 'vue';
import _IconWeightlifting from './icon-weightlifting.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeightlifting.name = getComponentsPrefix() + _IconWeightlifting.name;

const IconWeightlifting = Object.assign(_IconWeightlifting, {
  install: (app: App) => {
    app.component(_IconWeightlifting.name, _IconWeightlifting);
  }
});

export default IconWeightlifting;