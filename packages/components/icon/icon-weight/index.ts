import type { App } from 'vue';
import _IconWeight from './icon-weight.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWeight.name = getComponentsPrefix() + _IconWeight.name;

const IconWeight = Object.assign(_IconWeight, {
  install: (app: App) => {
    app.component(_IconWeight.name, _IconWeight);
  }
});

export default IconWeight;