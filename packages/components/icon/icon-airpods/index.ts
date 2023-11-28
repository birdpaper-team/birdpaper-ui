import type { App } from 'vue';
import _IconAirpods from './icon-airpods.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAirpods.name = getComponentsPrefix() + _IconAirpods.name;

const IconAirpods = Object.assign(_IconAirpods, {
  install: (app: App) => {
    app.component(_IconAirpods.name, _IconAirpods);
  }
});

export default IconAirpods;