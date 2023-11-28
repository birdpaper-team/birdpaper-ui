import type { App } from 'vue';
import _IconVigo from './icon-vigo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVigo.name = getComponentsPrefix() + _IconVigo.name;

const IconVigo = Object.assign(_IconVigo, {
  install: (app: App) => {
    app.component(_IconVigo.name, _IconVigo);
  }
});

export default IconVigo;