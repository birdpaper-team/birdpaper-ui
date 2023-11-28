import type { App } from 'vue';
import _IconAries from './icon-aries.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAries.name = getComponentsPrefix() + _IconAries.name;

const IconAries = Object.assign(_IconAries, {
  install: (app: App) => {
    app.component(_IconAries.name, _IconAries);
  }
});

export default IconAries;