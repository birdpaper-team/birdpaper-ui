import type { App } from 'vue';
import _IconPennant from './icon-pennant.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPennant.name = getComponentsPrefix() + _IconPennant.name;

const IconPennant = Object.assign(_IconPennant, {
  install: (app: App) => {
    app.component(_IconPennant.name, _IconPennant);
  }
});

export default IconPennant;