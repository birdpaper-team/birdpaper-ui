import type { App } from 'vue';
import _IconCola from './icon-cola.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCola.name = getComponentsPrefix() + _IconCola.name;

const IconCola = Object.assign(_IconCola, {
  install: (app: App) => {
    app.component(_IconCola.name, _IconCola);
  }
});

export default IconCola;