import type { App } from 'vue';
import _IconSkull from './icon-skull.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSkull.name = getComponentsPrefix() + _IconSkull.name;

const IconSkull = Object.assign(_IconSkull, {
  install: (app: App) => {
    app.component(_IconSkull.name, _IconSkull);
  }
});

export default IconSkull;