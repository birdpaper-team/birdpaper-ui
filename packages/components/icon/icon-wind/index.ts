import type { App } from 'vue';
import _IconWind from './icon-wind.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWind.name = getComponentsPrefix() + _IconWind.name;

const IconWind = Object.assign(_IconWind, {
  install: (app: App) => {
    app.component(_IconWind.name, _IconWind);
  }
});

export default IconWind;