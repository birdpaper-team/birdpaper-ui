import type { App } from 'vue';
import _IconSnow from './icon-snow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSnow.name = getComponentsPrefix() + _IconSnow.name;

const IconSnow = Object.assign(_IconSnow, {
  install: (app: App) => {
    app.component(_IconSnow.name, _IconSnow);
  }
});

export default IconSnow;