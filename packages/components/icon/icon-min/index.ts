import type { App } from 'vue';
import _IconMin from './icon-min.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMin.name = getComponentsPrefix() + _IconMin.name;

const IconMin = Object.assign(_IconMin, {
  install: (app: App) => {
    app.component(_IconMin.name, _IconMin);
  }
});

export default IconMin;