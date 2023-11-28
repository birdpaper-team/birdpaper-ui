import type { App } from 'vue';
import _IconAvocado from './icon-avocado.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAvocado.name = getComponentsPrefix() + _IconAvocado.name;

const IconAvocado = Object.assign(_IconAvocado, {
  install: (app: App) => {
    app.component(_IconAvocado.name, _IconAvocado);
  }
});

export default IconAvocado;