import type { App } from 'vue';
import _IconPisces from './icon-pisces.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPisces.name = getComponentsPrefix() + _IconPisces.name;

const IconPisces = Object.assign(_IconPisces, {
  install: (app: App) => {
    app.component(_IconPisces.name, _IconPisces);
  }
});

export default IconPisces;