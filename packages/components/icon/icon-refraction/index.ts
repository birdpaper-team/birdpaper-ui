import type { App } from 'vue';
import _IconRefraction from './icon-refraction.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRefraction.name = getComponentsPrefix() + _IconRefraction.name;

const IconRefraction = Object.assign(_IconRefraction, {
  install: (app: App) => {
    app.component(_IconRefraction.name, _IconRefraction);
  }
});

export default IconRefraction;