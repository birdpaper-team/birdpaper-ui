import type { App } from 'vue';
import _IconCrib from './icon-crib.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrib.name = getComponentsPrefix() + _IconCrib.name;

const IconCrib = Object.assign(_IconCrib, {
  install: (app: App) => {
    app.component(_IconCrib.name, _IconCrib);
  }
});

export default IconCrib;