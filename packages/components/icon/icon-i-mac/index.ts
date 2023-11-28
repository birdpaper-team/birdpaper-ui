import type { App } from 'vue';
import _IconIMac from './icon-i-mac.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIMac.name = getComponentsPrefix() + _IconIMac.name;

const IconIMac = Object.assign(_IconIMac, {
  install: (app: App) => {
    app.component(_IconIMac.name, _IconIMac);
  }
});

export default IconIMac;