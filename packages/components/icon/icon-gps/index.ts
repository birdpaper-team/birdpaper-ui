import type { App } from 'vue';
import _IconGps from './icon-gps.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGps.name = getComponentsPrefix() + _IconGps.name;

const IconGps = Object.assign(_IconGps, {
  install: (app: App) => {
    app.component(_IconGps.name, _IconGps);
  }
});

export default IconGps;