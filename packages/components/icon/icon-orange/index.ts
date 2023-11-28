import type { App } from 'vue';
import _IconOrange from './icon-orange.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrange.name = getComponentsPrefix() + _IconOrange.name;

const IconOrange = Object.assign(_IconOrange, {
  install: (app: App) => {
    app.component(_IconOrange.name, _IconOrange);
  }
});

export default IconOrange;