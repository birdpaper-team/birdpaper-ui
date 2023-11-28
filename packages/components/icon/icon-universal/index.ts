import type { App } from 'vue';
import _IconUniversal from './icon-universal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUniversal.name = getComponentsPrefix() + _IconUniversal.name;

const IconUniversal = Object.assign(_IconUniversal, {
  install: (app: App) => {
    app.component(_IconUniversal.name, _IconUniversal);
  }
});

export default IconUniversal;