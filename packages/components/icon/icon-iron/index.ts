import type { App } from 'vue';
import _IconIron from './icon-iron.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIron.name = getComponentsPrefix() + _IconIron.name;

const IconIron = Object.assign(_IconIron, {
  install: (app: App) => {
    app.component(_IconIron.name, _IconIron);
  }
});

export default IconIron;