import type { App } from 'vue';
import _IconSkating from './icon-skating.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSkating.name = getComponentsPrefix() + _IconSkating.name;

const IconSkating = Object.assign(_IconSkating, {
  install: (app: App) => {
    app.component(_IconSkating.name, _IconSkating);
  }
});

export default IconSkating;